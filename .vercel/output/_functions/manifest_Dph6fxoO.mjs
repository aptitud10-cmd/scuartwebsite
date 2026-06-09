import { q as decodeKey } from './chunks/astro/server_Bcnog8FM.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DbkwnO9E.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/willi/scuartwebsite/","cacheDir":"file:///C:/Users/willi/scuartwebsite/node_modules/.astro/","outDir":"file:///C:/Users/willi/scuartwebsite/dist/","srcDir":"file:///C:/Users/willi/scuartwebsite/src/","publicDir":"file:///C:/Users/willi/scuartwebsite/public/","buildClientDir":"file:///C:/Users/willi/scuartwebsite/dist/client/","buildServerDir":"file:///C:/Users/willi/scuartwebsite/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"en/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CImyf92f.css"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"es/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CImyf92f.css"}],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"fallback","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.18.2_@vercel+functi_cfa5f2bb5e1b8aa1f8e95186ec447875/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/willi/scuartwebsite/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/willi/scuartwebsite/src/pages/es/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"pages/es.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.18.2_@vercel+functi_cfa5f2bb5e1b8aa1f8e95186ec447875/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Dph6fxoO.mjs","C:/Users/willi/scuartwebsite/node_modules/.pnpm/astro@5.18.2_@vercel+functi_cfa5f2bb5e1b8aa1f8e95186ec447875/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D4YTPUNu.mjs","@astrojs/react/client.js":"_astro/client.CpeL31wX.js","C:/Users/willi/scuartwebsite/src/components/ContactSection.astro?astro&type=script&index=0&lang.ts":"_astro/ContactSection.astro_astro_type_script_index_0_lang.BloJ_rMb.js","C:/Users/willi/scuartwebsite/src/components/HeroSection.astro?astro&type=script&index=0&lang.ts":"_astro/HeroSection.astro_astro_type_script_index_0_lang.D1fuRzHf.js","C:/Users/willi/scuartwebsite/src/components/MethodSection.astro?astro&type=script&index=0&lang.ts":"_astro/MethodSection.astro_astro_type_script_index_0_lang.DAKJ-7oG.js","C:/Users/willi/scuartwebsite/src/components/Nav.astro?astro&type=script&index=0&lang.ts":"_astro/Nav.astro_astro_type_script_index_0_lang.Dn71dixH.js","C:/Users/willi/scuartwebsite/src/components/PortfolioSection.astro?astro&type=script&index=0&lang.ts":"_astro/PortfolioSection.astro_astro_type_script_index_0_lang.Fgus8Ibj.js","C:/Users/willi/scuartwebsite/node_modules/.pnpm/gsap@3.15.0/node_modules/gsap/index.js":"_astro/index.Bvu9zNsI.js","C:/Users/willi/scuartwebsite/node_modules/.pnpm/gsap@3.15.0/node_modules/gsap/ScrollTrigger.js":"_astro/ScrollTrigger.7Zy99s9Q.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/willi/scuartwebsite/src/components/ContactSection.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"[data-contact-form]\"),t=document.querySelector(\"[data-contact-submit]\"),n=document.querySelector(\"[data-contact-error]\"),i=document.querySelector(\"[data-contact-success]\");if(!(!e||!t)){let l=function(){t.disabled=!0,t.textContent=b,n&&(n.hidden=!0)},s=function(){t.disabled=!1,t.textContent=f},r=function(o){n&&(o&&(n.textContent=o),n.hidden=!1)},u=function(){e&&(e.hidden=!0),i&&(i.hidden=!1)};const f=t.dataset.labelIdle??\"SEND →\",b=t.dataset.labelLoading??\"SENDING…\";e.addEventListener(\"submit\",async o=>{o.preventDefault(),l();const h=new FormData(e),d={};h.forEach((c,a)=>{d[a]=String(c)});try{const a=await(await fetch(\"/api/contact\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(d)})).json();a.ok?u():(s(),r(a.error))}catch{s(),r()}})}"],["C:/Users/willi/scuartwebsite/src/components/Nav.astro?astro&type=script&index=0&lang.ts","const s=document.querySelector(\".nav\");if(s){const e=()=>{window.scrollY>20?s.classList.add(\"scrolled\"):s.classList.remove(\"scrolled\")};window.addEventListener(\"scroll\",e,{passive:!0})}"]],"assets":["/_astro/index.CImyf92f.css","/favicon.svg","/fonts/archivo-variable.woff2","/fonts/dm-sans-400.woff2","/fonts/dm-sans-variable.woff2","/fonts/ibm-plex-mono-400.woff2","/images/portfolio-arriba-gold-real.webp","/images/portfolio-healthy-choice-real.webp","/images/portfolio-jamon-casero.webp","/images/portfolio-menius-real.webp","/_astro/client.CpeL31wX.js","/_astro/HeroSection.astro_astro_type_script_index_0_lang.D1fuRzHf.js","/_astro/index.Bvu9zNsI.js","/_astro/MethodSection.astro_astro_type_script_index_0_lang.DAKJ-7oG.js","/_astro/PortfolioSection.astro_astro_type_script_index_0_lang.Fgus8Ibj.js","/_astro/ScrollTrigger.7Zy99s9Q.js","/en/index.html","/es/index.html","/index.html","/index.html"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-always","locales":["en","es"],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"puxegrq6T2pTQ2aeYbGelrPLPk6uQvViLWVKyXBosdo="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
