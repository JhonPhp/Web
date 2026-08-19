import nodemailer from 'nodemailer';

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Método no permitido' });
    }

    try {
        const { name, email, company, phone, type, message } = req.body;

        // Validación básica
        if (!name || !email || !type || !message) {
            return res.status(422).json({ success: false, message: 'Datos incompletos' });
        }

        // Crear transportador de correo
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD
            }
        });

        // Enviar el correo
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: 'infotechnologyassociations@gmail.com',
            replyTo: email,
            subject: `Nueva solicitud: ${type} - ${company || name}`,
            text: `
Nueva solicitud desde el sitio web

Nombre:   ${name}
Empresa:  ${company || '(no indicada)'}
Correo:   ${email}
Teléfono: ${phone || '(no indicado)'}
Tipo:     ${type}

Mensaje:
${message}

---
Enviado el ${new Date().toLocaleString('es-CO')}
            `
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error al enviar correo:', error);
        return res.status(500).json({ success: false, message: 'Error al enviar el correo' });
    }
};
