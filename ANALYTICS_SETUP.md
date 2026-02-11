# Configuración de Google Analytics y Meta Pixel

Este documento explica cómo configurar Google Analytics y Meta Pixel en tu sitio web de Scuart.

## 📊 Google Analytics

### Paso 1: Crear una cuenta de Google Analytics

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en **"Comenzar a medir"** o **"Crear cuenta"**
4. Completa la información de tu cuenta y propiedad
5. Selecciona **"Web"** como plataforma
6. Ingresa la URL de tu sitio: **https://scuart.com**

### Paso 2: Obtener tu ID de medición

1. Una vez creada la propiedad, ve a **Administración** (⚙️)
2. En la columna **Propiedad**, haz clic en **Flujos de datos**
3. Selecciona tu flujo de datos web
4. Copia tu **ID de medición** (formato: `G-XXXXXXXXXX`)

### Paso 3: Configurar en el sitio web

1. Abre el archivo `client/index.html`
2. Busca las líneas que contienen `G-XXXXXXXXXX` (líneas 16 y 21)
3. Reemplaza **ambas instancias** de `G-XXXXXXXXXX` con tu ID de medición real

**Ejemplo:**
```html
<!-- Antes -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Después (con tu ID real) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
<script>
  gtag('config', 'G-ABC123XYZ');
</script>
```

---

## 📱 Meta Pixel (Facebook Pixel)

### Paso 1: Crear un Meta Pixel

1. Ve a [Meta Business Suite](https://business.facebook.com/)
2. Selecciona tu cuenta publicitaria
3. Ve a **Configuración de eventos** en el menú
4. Haz clic en **Agregar eventos** → **Desde un sitio web nuevo**
5. Selecciona **Meta Pixel** y haz clic en **Conectar**
6. Asigna un nombre a tu pixel (por ejemplo: "Scuart Website")
7. Ingresa la URL de tu sitio: **https://scuart.com**

### Paso 2: Obtener tu Pixel ID

1. Una vez creado el pixel, ve a **Administrador de eventos**
2. Selecciona tu pixel
3. Copia el **ID del pixel** (un número de 15-16 dígitos)

### Paso 3: Configurar en el sitio web

1. Abre el archivo `client/index.html`
2. Busca las líneas que contienen `YOUR_PIXEL_ID` (líneas 35 y 40)
3. Reemplaza **ambas instancias** de `YOUR_PIXEL_ID` con tu Pixel ID real

**Ejemplo:**
```html
<!-- Antes -->
fbq('init', 'YOUR_PIXEL_ID');
<img src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1" />

<!-- Después (con tu ID real) -->
fbq('init', '1234567890123456');
<img src="https://www.facebook.com/tr?id=1234567890123456&ev=PageView&noscript=1" />
```

---

## ✅ Verificar la instalación

### Google Analytics

1. Abre tu sitio web en el navegador
2. Ve a Google Analytics → **Informes** → **Tiempo real**
3. Deberías ver tu visita registrada en tiempo real

### Meta Pixel

1. Instala la extensión [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/) en Chrome
2. Abre tu sitio web
3. Haz clic en el icono de la extensión
4. Debería mostrar que el pixel está activo con un ícono verde ✓

---

## 📝 Notas importantes

- **Privacidad**: Asegúrate de que tu Política de Privacidad mencione el uso de cookies y herramientas de análisis
- **GDPR**: Si tienes usuarios en Europa, considera implementar un banner de consentimiento de cookies
- **Eventos personalizados**: Puedes agregar eventos personalizados para rastrear acciones específicas (clics en botones, envíos de formularios, etc.)

---

## 🆘 Soporte

Si tienes problemas con la configuración, contacta a:
- **Email**: info@scuart.com
- **WhatsApp**: +1 (347) 848-9720
