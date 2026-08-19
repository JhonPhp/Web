// ============================================
// CONFIGURACIÓN GLOBAL DE LA PÁGINA
// ============================================

const config = {
    // Información de la empresa
    company: {
        name: 'Infotechnology Associations',
        email: 'infotechnologyassociations@gmail.com',
        phone: '', // Agregar cuando esté disponible
        website: 'https://infotechnologyassociations.com',
        address: '', // Agregar cuando esté disponible
    },

    // WhatsApp (opcional)
    whatsapp: {
        enabled: false,
        number: '', // Ejemplo: '573001234567' (sin +, con código de país)
    },

    // Chatbot IA
    chatbot: {
        enabled: true,
        apiEndpoint: '', // Dejar vacío para usar respuestas predefinidas
        apiKey: '', // Agregar si se conecta a una API
        model: 'claude-haiku-4-5', // Modelo de IA a usar
    },

    // Analytics
    analytics: {
        googleAnalytics: '', // Agregar ID de Google Analytics
        enabled: false,
    },

    // Redes sociales (cuando estén disponibles)
    socialMedia: {
        facebook: '',
        instagram: '',
        linkedin: '',
        twitter: '',
        github: '',
    },

    // Formulario de contacto
    contactForm: {
        // Puede ser: 'email', 'api', 'webhook'
        method: 'email',
        // Si es 'api', configurar:
        apiEndpoint: '/api/contact',
        // Si es 'email', configurar:
        emailTo: 'infotechnologyassociations@gmail.com',
    },

    // Productos
    products: {
        pokito: {
            name: 'Pokito',
            description: 'Gestión de conjuntos residenciales',
            url: '/pages/pokito.html',
        },
        asistia: {
            name: 'Asistia',
            description: 'Gestión de turnos para IPS',
            url: '/pages/asistia.html',
        },
        custom: {
            name: 'Desarrollo a Medida',
            description: 'Soluciones personalizadas',
            url: '/pages/desarrollo-medida.html',
        },
    },

    // Temas (light/dark/auto)
    theme: {
        default: 'auto', // 'light', 'dark', 'auto'
        storageKey: 'theme-preference',
    },

    // Lenguaje
    language: {
        default: 'es',
        supported: ['es', 'en'],
        storageKey: 'language-preference',
    },

    // Seguridad
    security: {
        enableCSP: true,
        enableXSS: true,
    },

    // URLs importantes
    urls: {
        home: '/',
        pokito: '/pages/pokito.html',
        asistia: '/pages/asistia.html',
        custom: '/pages/desarrollo-medida.html',
        nosotros: '/pages/nosotros.html',
        contacto: '/pages/contacto.html',
        privacidad: '/pages/privacidad.html',
        terminos: '/pages/terminos.html',
    },
};

// Función para obtener configuración
function getConfig(key) {
    const keys = key.split('.');
    let value = config;

    for (let k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return null;
        }
    }

    return value;
}

// Función para actualizar configuración
function setConfig(key, value) {
    const keys = key.split('.');
    let obj = config;

    for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i];
        if (!(k in obj)) {
            obj[k] = {};
        }
        obj = obj[k];
    }

    obj[keys[keys.length - 1]] = value;
}

// Exportar para uso en otros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { config, getConfig, setConfig };
}
