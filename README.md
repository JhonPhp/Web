# Infotechnology Associations - Sitio Web Corporativo

Página web profesional y moderna para Infotechnology Associations, una empresa de desarrollo de software empresarial.

## 📁 Estructura del Proyecto

```
PAGINAWEB/
├── index.html              # Página principal / Home
├── README.md              # Este archivo
├── pages/
│   ├── pokito.html        # Página del producto Pokito
│   ├── asistia.html       # Página del producto Asistia
│   ├── desarrollo-medida.html  # Página de desarrollo personalizado
│   ├── nosotros.html      # Página Nosotros
│   ├── contacto.html      # Página de Contacto
│   ├── privacidad.html    # Política de Privacidad
│   └── terminos.html      # Términos y Condiciones
├── css/
│   └── styles.css         # Estilos personalizados
├── js/
│   └── script.js          # Lógica y funcionalidades
├── assets/
│   ├── images/            # Imágenes del sitio
│   └── icons/             # Iconos
└── docs/
    └── [Documentación adicional]
```

## 🚀 Características Principales

### ✅ Totalmente Responsive
- Diseño adaptable para desktop, tablet y móvil
- Menú hamburguesa en dispositivos móviles
- Navegación optimizada

### ✅ Chatbot de IA Integrado
- Asistente inteligente en todas las páginas
- Respuestas basadas en la página actual
- Interfaz amigable y moderna

### ✅ Seguridad Destacada
- Secciones dedicadas a seguridad de datos
- Información sobre HIPAA y encriptación
- Políticas de privacidad completas

### ✅ Múltiples Productos
- **Pokito**: Gestión de conjuntos residenciales
- **Asistia**: Gestión de turnos para IPS
- **Desarrollo a Medida**: Soluciones personalizadas con IA

### ✅ Optimización SEO
- Meta etiquetas completas
- Open Graph tags
- Favicon personalizado
- URLs amigables

### ✅ Animaciones Suaves
- Fade in/out
- Slide up
- Efectos hover
- Scroll suave

## 🎨 Diseño Visual

**Paleta de Colores:**
- Azul Principal: `#3b82f6`
- Azul Oscuro: `#1e40af`
- Gris Neutro: `#6b7280`
- Blanco: `#ffffff`
- Fondo Oscuro: `#0f172a`

**Tipografía:**
- Fuentes: Sistema nativo (sans-serif)
- Tailwind CSS para estilos

## 🔧 Configuración Rápida

### 1. Cambiar Email de Contacto
Busca y reemplaza en todos los archivos:
```
infotechnologyassociations@gmail.com
```
Por tu correo electrónico.

### 2. Agregar WhatsApp
En `js/script.js`, agrega tu número en la sección del chatbot:
```javascript
const whatsappNumber = "1234567890";
```

### 3. Personalizar Colores
En `css/styles.css`, actualiza las variables CSS:
```css
--color-primary: #3b82f6;
--color-dark: #1e40af;
```

### 4. Cambiar Logo
El logo está en texto en el navbar. Para agregar un logo gráfico:
- Coloca la imagen en `/assets/images/logo.png`
- Reemplaza el HTML del logo en index.html

## 📱 Páginas Disponibles

### 🏠 Home (index.html)
- Hero section impactante
- Descripción de servicios
- Showcase de productos
- Llamadas a la acción
- Testimonios y beneficios

### 📦 Pokito (pages/pokito.html)
- Descripción detallada del producto
- Características y funcionalidades
- Información de seguridad
- Call-to-action para demo

### 🏥 Asistia (pages/asistia.html)
- Descripción del sistema de turnos
- Flujo de atención visualizado
- Seguridad HIPAA
- Beneficios y estadísticas

### 🛠️ Desarrollo a Medida (pages/desarrollo-medida.html)
- Servicios disponibles
- Proceso de desarrollo
- Tecnologías utilizadas
- Consultoría inicial

### 👥 Nosotros (pages/nosotros.html)
- Misión y Visión
- Valores empresariales
- Descripción de servicios
- Información de contacto

### 📧 Contacto (pages/contacto.html)
- Formulario de contacto
- Información de contacto directo
- Opciones de comunicación
- Chat de IA

### ⚖️ Legal
- `privacidad.html` - Política de Privacidad
- `terminos.html` - Términos y Condiciones

## 💬 Chatbot de IA

El chatbot está configurado con respuestas predefinidas basadas en:
- Información sobre Pokito
- Información sobre Asistia
- Información sobre desarrollo a medida
- Solicitudes de demostración
- Contacto

### Para Conectar a una API Real:
Modifica la función `getBotResponse()` en `js/script.js`:

```javascript
async function getBotResponse(userMessage) {
    // Reemplazar llamada a API real
    const response = await fetch('tu-api-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer tu-token'
        },
        body: JSON.stringify({ message: userMessage })
    });
    
    return await response.json();
}
```

## 🔒 Seguridad

El sitio implementa:
- HTTPS recomendado en producción
- Content Security Policy
- Validación de formularios
- Sanitización de entradas
- Protección CSRF lista para implementar

## 📊 Formulario de Contacto

El formulario está preparado para integración con backend. Actualmente:
- Valida campos requeridos
- Muestra mensajes de éxito/error
- Puede conectarse a una API REST

### Para conectar a backend:
```javascript
const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

## 🎯 Optimización

### Performance
- Lazy loading de imágenes
- CSS minificado
- JavaScript optimizado
- Tailwind CSS purged

### SEO
- Meta tags completas
- URLs amigables
- Sitemap.xml (agregar)
- Robots.txt (agregar)

### Accesibilidad
- Contraste de colores WCAG
- Navegación por teclado
- Alt text en imágenes
- Estructura semántica

## 📈 Próximas Mejoras

- [ ] Agregar sitemap.xml
- [ ] Crear robots.txt
- [ ] Integrar Google Analytics
- [ ] Agregar formularios con backend real
- [ ] Integrar pagos (si es necesario)
- [ ] Agregar más idiomas
- [ ] Blog o sección de noticias

## 🚀 Despliegue

### Opción 1: Hosting Estático (Recomendado)
- Vercel, Netlify, GitHub Pages
- Subir la carpeta completa
- Configurar domain personalizado

### Opción 2: Servidor Web
- Subir archivos vía FTP/SFTP
- Configurar servidor web (Apache, Nginx)
- Habilitar HTTPS

### Opción 3: Local
- Abrir `index.html` en navegador
- O usar live server: `python -m http.server 8000`

## 📚 Recursos

- **Tailwind CSS**: https://tailwindcss.com
- **MDN Web Docs**: https://developer.mozilla.org
- **Google Fonts**: https://fonts.google.com

## 📞 Soporte

Para preguntas sobre el sitio, contacta:
📧 infotechnologyassociations@gmail.com

## 📄 Licencia

Todos los derechos reservados © 2026 Infotechnology Associations

---

**Última actualización**: 2026-08-19

Desarrollado con ❤️ utilizando HTML5, CSS3 y JavaScript Vanilla
