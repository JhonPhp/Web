# 🚀 Guía de Configuración Rápida

## Iniciar la Página Localmente

### Opción 1: Con Python (Recomendado)
```bash
cd C:\Users\AUTOMATIZACION\Desktop\PAGINAWEB
python -m http.server 8000
```
Luego abre: http://localhost:8000

### Opción 2: Con Node.js
```bash
cd C:\Users\AUTOMATIZACION\Desktop\PAGINAWEB
npx http-server
```

### Opción 3: Simplemente abrir index.html
- Haz clic derecho en `index.html`
- Selecciona "Abrir con" → Navegador

## ⚙️ Configuración Inicial

### 1. Personalizar Correo de Contacto
1. Abre `js/config.js`
2. Busca la línea: `email: 'infotechnologyassociations@gmail.com'`
3. Reemplaza con tu correo

### 2. Agregar Número de WhatsApp (Opcional)
1. Abre `js/config.js`
2. Bajo `whatsapp`, cambia:
   ```javascript
   enabled: true,
   number: '573001234567', // Tu número sin + ni espacios
   ```

### 3. Conectar Formulario a Backend
1. Abre `js/script.js`
2. Busca la función `contactForm.addEventListener`
3. Reemplaza la sección de fetch con tu endpoint

### 4. Agregar Google Analytics
1. Abre `js/config.js`
2. Bajo `analytics`, agrega tu ID de Google Analytics
3. Cambia `enabled: true`

## 🎨 Personalización de Diseño

### Cambiar Colores Principales
1. Abre `css/styles.css`
2. Busca las variables de color
3. Modifica los valores hexadecimales

### Cambiar Logo
1. Coloca tu logo en `assets/images/logo.png`
2. En `index.html` y `pages/*.html`, reemplaza:
```html
<a href="index.html" class="text-2xl font-bold text-blue-600">
    INFOTECHNOLOGY ASSOCIATIONS
</a>
```
Con:
```html
<a href="index.html">
    <img src="assets/images/logo.png" alt="Logo" class="h-12">
</a>
```

### Cambiar Favicon
1. Reemplaza el SVG en la meta etiqueta `<link rel="icon">`
2. O crea un archivo favicon.ico y agrega:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

## 📱 Testing Responsive

### En Chrome
1. Abre la página
2. Presiona F12 para Developer Tools
3. Click en el icono de dispositivo (arriba a la izquierda)
4. Selecciona diferentes dispositivos para probar

### Tamaños a probar
- Móvil: 375x667 (iPhone)
- Tablet: 768x1024 (iPad)
- Desktop: 1920x1080
- Ultrawide: 2560x1440

## 🔍 Testing SEO

### Verificar Meta Tags
1. En index.html busca la sección `<head>`
2. Verifica que existan:
   - `<title>`
   - `<meta name="description">`
   - `<meta property="og:"`

### Verificar URLs
- Todas las rutas deben estar correctas
- No debe haber enlaces rotos
- Las imágenes deben cargar

## 🚀 Despliegue en Producción

### Vercel (Recomendado - Gratis)
1. Crea cuenta en vercel.com
2. Click en "New Project"
3. Selecciona el repositorio Git
4. Deploy automático

### Netlify (También Gratis)
1. Crea cuenta en netlify.com
2. Drag & drop la carpeta PAGINAWEB
3. Listo

### GitHub Pages
1. Crea repositorio en GitHub
2. Sube los archivos
3. Ve a Settings → Pages
4. Selecciona "Deploy from branch"

### Hosting Tradicional
1. Compra hosting (GoDaddy, Bluehost, etc)
2. Accede vía FTP
3. Sube todos los archivos
4. Configura dominio

## ✅ Checklist de Lanzamiento

- [ ] Cambiar email de contacto en config.js
- [ ] Verificar que todos los enlaces funcionan
- [ ] Probar formulario de contacto
- [ ] Probar responsive en móvil
- [ ] Prueba chatbot en todas las páginas
- [ ] Verificar Google Analytics
- [ ] Configurar dominio personalizado
- [ ] Habilitar HTTPS (SSL)
- [ ] Verificar en Google Search Console
- [ ] Verificar en Google Analytics
- [ ] Probar velocidad de carga (PageSpeed Insights)
- [ ] Revisar meta tags con herramientas de SEO

## 🐛 Troubleshooting

### Las páginas no se cargan
- Verifica que las rutas sean correctas
- Abre la consola (F12) y busca errores
- Verifica que `css/styles.css` y `js/script.js` existan

### El chatbot no funciona
- Abre la consola (F12)
- Busca errores en la pestaña "Console"
- Verifica que `js/config.js` esté cargado

### Formulario no envía
- Verifica la configuración en `js/config.js`
- Abre la consola (F12) para ver errores de fetch
- Configura el endpoint correcto del backend

### Responsive no funciona
- Abre DevTools (F12)
- Haz clic en el icono responsive
- Verifica que los breakpoints de Tailwind funcionen

## 📞 Soporte

Para problemas o preguntas:
📧 infotechnologyassociations@gmail.com

---

**¡Tu sitio está listo para lanzar!** 🎉
