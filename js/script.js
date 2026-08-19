// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Cerrar el menú al hacer clic en un enlace
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Chatbot Functionality
const chatToggle = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chat-box');
const chatClose = document.getElementById('chat-close');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

// Base de conocimientos del chatbot
const botKnowledge = {
    pokito: {
        name: "Pokito",
        description: "Software de gestión para conjuntos residenciales",
        features: [
            "Gestión de conjuntos, torres y apartamentos",
            "Registro de residentes y vehículos",
            "Control de visitantes",
            "Usuarios y permisos",
            "Reportes y análisis",
            "Panel administrativo centralizado"
        ],
        benefits: "Más control, menos procesos manuales, mayor organización",
        url: "pokito.html"
    },
    asistia: {
        name: "Asistia",
        description: "Software de gestión de turnos para IPS",
        features: [
            "Gestión de turnos",
            "Llamado en tiempo real de pacientes",
            "Pantallas de visualización",
            "Múltiples servicios y módulos",
            "Estadísticas de atención",
            "Integración con TV"
        ],
        benefits: "Menos espera, mejor organización, mayor control de la atención",
        url: "asistia.html"
    },
    empresa: {
        name: "Infotechnology Associations",
        description: "Empresa de desarrollo de software",
        services: [
            "Desarrollo de software empresarial",
            "Automatización de procesos",
            "Desarrollo de aplicaciones móviles",
            "APIs e integraciones",
            "Diseño de bases de datos",
            "Dashboards y reportes"
        ]
    },
    desarrollo: {
        name: "Desarrollo a Medida",
        description: "Soluciones personalizadas para tu negocio",
        services: [
            "Aplicaciones web",
            "Aplicaciones móviles",
            "Automatización",
            "APIs e integraciones",
            "Bases de datos",
            "Dashboards",
            "Migración de sistemas",
            "Sistemas empresariales"
        ],
        url: "desarrollo-medida.html"
    }
};

// Toggle chat box
if (chatToggle && chatBox) {
    chatToggle.addEventListener('click', () => {
        chatBox.classList.toggle('hidden');
    });
}

if (chatClose && chatBox) {
    chatClose.addEventListener('click', () => {
        chatBox.classList.add('hidden');
    });
}

// Handle chat form submission
if (chatForm && chatInput && chatMessages) {
    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const message = chatInput.value.trim();
        if (!message) return;

        addMessageToChat(message, 'user');
        chatInput.value = '';

        const response = await getBotResponse(message);
        addMessageToChat(response, 'bot');
    });
}

function addMessageToChat(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'user'
        ? 'max-w-[85%] ml-auto rounded-xl p-3 bg-[#5b7fa6] text-white'
        : 'max-w-[85%] rounded-xl p-3 bg-white border border-slate-100 text-slate-600';
    messageDiv.style.animation = 'fadeInUp 0.3s ease-out';

    const p = document.createElement('p');
    p.className = 'text-sm whitespace-pre-line';
    p.textContent = message;
    messageDiv.appendChild(p);

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

async function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    // Respuestas predefinidas basadas en palabras clave
    if (lowerMessage.includes('pokito')) {
        if (lowerMessage.includes('características') || lowerMessage.includes('funciones')) {
            return `Pokito ofrece: ${botKnowledge.pokito.features.slice(0, 3).join(', ')} y más. ¿Quieres conocer todos los detalles?`;
        }
        if (lowerMessage.includes('precio') || lowerMessage.includes('costo')) {
            return `Para información sobre precios de Pokito, por favor contacta con nuestro equipo en infotechnologyassociations@gmail.com`;
        }
        return `Pokito es un software de gestión inteligente para conjuntos residenciales. ${botKnowledge.pokito.benefits}. ¿Te gustaría ver más detalles o solicitar una demostración?`;
    }

    if (lowerMessage.includes('asistia')) {
        if (lowerMessage.includes('características') || lowerMessage.includes('funciones')) {
            return `Asistia incluye: ${botKnowledge.asistia.features.slice(0, 3).join(', ')} y más. ¿Quieres conocer todas sus funciones?`;
        }
        if (lowerMessage.includes('ips') || lowerMessage.includes('hospitales') || lowerMessage.includes('salud')) {
            return `Asistia está diseñado específicamente para instituciones prestadoras de servicios de salud (IPS). Facilita la gestión de turnos y mejora la experiencia del paciente.`;
        }
        return `Asistia es nuestro software para gestión de turnos en IPS. ${botKnowledge.asistia.benefits}. ¿Te gustaría solicitar una demostración?`;
    }

    if (lowerMessage.includes('desarrollo a medida') || lowerMessage.includes('personalizado')) {
        return `Realizamos desarrollo de software completamente personalizado. Ofrecemos aplicaciones web, móviles, automatización, integraciones y más. ¿Cuál es tu necesidad específica?`;
    }

    if (lowerMessage.includes('demo') || lowerMessage.includes('demostración') || lowerMessage.includes('prueba')) {
        return `¡Excelente! Puedo ayudarte a solicitar una demostración. Haz clic en el botón "Solicitar demo" o envíanos un correo a infotechnologyassociations@gmail.com con tus datos.`;
    }

    if (lowerMessage.includes('contacto') || lowerMessage.includes('teléfono') || lowerMessage.includes('email') || lowerMessage.includes('correo')) {
        return `Puedes contactarnos en:\n📧 infotechnologyassociations@gmail.com\n\nO visita nuestra página de contacto para enviarnos un mensaje directo.`;
    }

    if (lowerMessage.includes('quiénes somos') || lowerMessage.includes('nosotros') || lowerMessage.includes('empresa')) {
        return `Somos Infotechnology Associations, una empresa especializada en desarrollo de soluciones tecnológicas. Transformamos procesos en soluciones digitales que ayudan a las organizaciones a trabajar mejor.`;
    }

    if (lowerMessage.includes('ayuda') || lowerMessage.includes('ayudar') || lowerMessage.includes('puedo') || lowerMessage.includes('puedes')) {
        return `¡Claro que sí! Puedo ayudarte con:\n- Información sobre Pokito\n- Información sobre Asistia\n- Desarrollo de software a medida\n- Solicitudes de demostración\n- Preguntas generales\n\n¿Qué necesitas?`;
    }

    if (lowerMessage.includes('gracias') || lowerMessage.includes('thanks')) {
        return `¡De nada! Si tienes más preguntas, estoy aquí para ayudarte. 😊`;
    }

    // Respuesta general si no coincide con palabras clave
    return `Interesante pregunta. Puedo ayudarte con información sobre:\n\n✓ Nuestros productos (Pokito, Asistia)\n✓ Desarrollo de software a medida\n✓ Solicitudes de demostración\n✓ Información de contacto\n\n¿Hay algo específico que quieras saber?`;
}

// Formulario de contacto (si existe en la página)
// ============================================
// FORMULARIO DE CONTACTO
// ============================================
//
// FUNCIONA DE DOS FORMAS:
//
// 1) Si CONTACT_ENDPOINT tiene una URL  -> envía de verdad por HTTP
//    y el correo llega solo a tu bandeja.
//
// 2) Si CONTACT_ENDPOINT está vacío     -> abre el cliente de correo
//    del visitante con todos los datos ya escritos. No miente:
//    le avisa que debe pulsar "Enviar" en su correo.
//
// Para activar el envío automático, pega tu endpoint aquí abajo.
// Ver instrucciones en docs/FORMULARIO.md
// ============================================

// ---------------------------------------------------------
// PASO ÚNICO: pega abajo la clave del servicio que elijas.
// Solo necesitas UNO de los dos. Instrucciones completas en
// docs/FORMULARIO.md
// ---------------------------------------------------------

// Usar función serverless de Vercel
const CONTACT_ENDPOINT = '/api/enviar-formulario';

const CONTACT_EMAIL = 'infotechnologyassociations@gmail.com';

// Endpoint del servidor
const ENVIO_URL = CONTACT_ENDPOINT;

const TIPOS_SOLICITUD = {
    'demo-pokito':    'Demostración de Pokito',
    'demo-asistia':   'Demostración de Asistia',
    'desarrollo':     'Desarrollo de software a medida',
    'automatizacion': 'Automatización de procesos',
    'integracion':    'Integración / API',
    'otro':           'Otro'
};

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : 'Enviar solicitud';

    // Contenedor para el mensaje de resultado
    const statusBox = document.createElement('div');
    statusBox.className = 'hidden mt-4 rounded-xl p-4 text-sm';
    statusBox.setAttribute('role', 'status');
    statusBox.setAttribute('aria-live', 'polite');
    contactForm.appendChild(statusBox);

    function showStatus(message, kind) {
        const styles = {
            success: 'bg-[#e6f1ec] border border-[#cfe6df] text-[#3f6b5a]',
            error:   'bg-[#f8ecec] border border-[#ecdcdc] text-[#8b5252]',
            info:    'bg-[#eaf1f9] border border-[#dbe7f5] text-[#41597a]'
        };
        statusBox.className = 'mt-4 rounded-xl p-4 text-sm ' + (styles[kind] || styles.info);
        statusBox.textContent = message;
        statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function hideStatus() {
        statusBox.className = 'hidden mt-4 rounded-xl p-4 text-sm';
        statusBox.textContent = '';
    }

    function markInvalid(field, invalid) {
        if (!field) return;
        field.classList.toggle('border-[#e0a5a5]', invalid);
        field.classList.toggle('border-slate-200', !invalid);
    }

    function validar(data) {
        const errores = [];

        if (!data.name || data.name.trim().length < 2) {
            errores.push({ campo: 'name', texto: 'Escribe tu nombre.' });
        }
        if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
            errores.push({ campo: 'email', texto: 'Escribe un correo electrónico válido.' });
        }
        if (!data.type) {
            errores.push({ campo: 'type', texto: 'Selecciona el tipo de solicitud.' });
        }
        if (!data.message || data.message.trim().length < 10) {
            errores.push({ campo: 'message', texto: 'Cuéntanos un poco más (mínimo 10 caracteres).' });
        }
        return errores;
    }

    function construirCuerpo(data) {
        const tipo = TIPOS_SOLICITUD[data.type] || data.type || '(sin especificar)';
        return [
            'Nueva solicitud desde el sitio web',
            '',
            'Nombre:   ' + (data.name || ''),
            'Empresa:  ' + (data.company || '(no indicada)'),
            'Correo:   ' + (data.email || ''),
            'Teléfono: ' + (data.phone || '(no indicado)'),
            'Tipo:     ' + tipo,
            '',
            'Mensaje:',
            (data.message || ''),
            '',
            '---',
            'Enviado el ' + new Date().toLocaleString('es-CO')
        ].join('\n');
    }

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        hideStatus();

        const data = Object.fromEntries(new FormData(contactForm));

        // Limpiar marcas de error previas
        ['name', 'email', 'type', 'message'].forEach(id => {
            markInvalid(document.getElementById(id), false);
        });

        const errores = validar(data);
        if (errores.length) {
            errores.forEach(err => markInvalid(document.getElementById(err.campo), true));
            showStatus(errores[0].texto, 'error');
            const primero = document.getElementById(errores[0].campo);
            if (primero) primero.focus();
            return;
        }

        // ---- Sin servicio configurado: abrir el cliente de correo ----
        if (!ENVIO_URL) {
            const tipo = TIPOS_SOLICITUD[data.type] || 'Solicitud';
            const asunto = tipo + ' - ' + (data.company || data.name);
            const enlace = 'mailto:' + CONTACT_EMAIL +
                           '?subject=' + encodeURIComponent(asunto) +
                           '&body=' + encodeURIComponent(construirCuerpo(data));

            window.location.href = enlace;

            showStatus(
                'Abrimos tu programa de correo con la solicitud ya escrita. ' +
                'Revisa que esté todo bien y pulsa Enviar para que nos llegue. ' +
                'Si no se abrió, escríbenos directamente a ' + CONTACT_EMAIL + '.',
                'info'
            );
            return;
        }

        // ---- Envío real por JavaScript ----
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner"></span>';
        }

        try {
            const respuesta = await fetch(ENVIO_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            let resultado = {};
            try {
                resultado = await respuesta.json();
            } catch (_) {
                // Algunos servicios no devuelven JSON; nos basta con respuesta.ok
            }

            if (!respuesta.ok || resultado.success === false) {
                throw new Error(resultado.message || 'el servidor respondió ' + respuesta.status);
            }

            showStatus(
                'Solicitud enviada. Te responderemos al correo que nos dejaste, ' +
                'normalmente dentro de 24 horas hábiles.',
                'success'
            );
            contactForm.reset();

        } catch (error) {
            showStatus(
                'No pudimos enviar la solicitud (' + error.message + '). ' +
                'Escríbenos directamente a ' + CONTACT_EMAIL + ' y te atendemos igual.',
                'error'
            );
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        }
    });

    // Quitar la marca de error al corregir el campo
    ['name', 'email', 'type', 'message'].forEach(id => {
        const campo = document.getElementById(id);
        if (campo) {
            campo.addEventListener('input', () => markInvalid(campo, false));
            campo.addEventListener('change', () => markInvalid(campo, false));
        }
    });
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white ${
        type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'
    }`;
    notification.textContent = message;
    notification.style.animation = 'fadeIn 0.3s ease-out';

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Validación de email
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'fixed bottom-20 right-4 bg-blue-600 text-white rounded-full w-12 h-12 shadow-lg hover:bg-blue-700 transition hidden z-30 font-bold text-lg';
scrollTopBtn.id = 'scroll-top-btn';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.remove('hidden');
    } else {
        scrollTopBtn.classList.add('hidden');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add style for fade out animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Precargar respuestas del chatbot
console.log('✓ Página cargada y chatbot de IA listo');
