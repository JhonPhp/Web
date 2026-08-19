# Activar el envío del formulario de contacto

## Lo primero que debes saber

**JavaScript en el navegador no puede enviar correos por sí solo.** No es una limitación
del código: los navegadores no tienen acceso a SMTP (el protocolo del correo). Ninguna
página web puede hacerlo sin ayuda.

Siempre necesitas un intermediario que reciba los datos y te reenvíe el correo. Puede ser:

- Un **servicio gratuito** de formularios (lo más rápido)
- Un **backend propio** (PHP, Node, Python) si tienes hosting con servidor

Abajo está la opción más rápida, que toma unos 3 minutos.

---

## Opción A — Web3Forms (recomendada)

No hay que crear cuenta ni contraseña. Solo confirmas tu correo.

### Paso 1 — Obtener la clave

1. Entra a **https://web3forms.com**
2. En el recuadro escribe: `infotechnologyassociations@gmail.com`
3. Pulsa **"Create Access Key"**
4. Revisa la bandeja de ese correo. Llega un mensaje con la clave de acceso
   (se ve así: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)
5. Confirma el correo desde el enlace del mensaje

### Paso 2 — Pegar la clave

Abre `js/script.js` y busca esta línea (cerca de la línea 200):

```javascript
const WEB3FORMS_KEY = '';
```

Pega la clave entre las comillas:

```javascript
const WEB3FORMS_KEY = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';
```

Guarda el archivo. **Listo.** Ya funciona.

### Paso 3 — Probar

1. Abre `pages/contacto.html`
2. Llena el formulario con datos de prueba
3. Pulsa "Enviar solicitud"
4. Debe aparecer el mensaje verde de confirmación
5. Revisa `infotechnologyassociations@gmail.com` (mira también Spam la primera vez)

### Límites del plan gratuito

- 250 envíos al mes
- Sin tarjeta de crédito
- Si necesitas más, tienen planes de pago

---

## Opción B — Formspree

Si prefieres Formspree o ya tienes cuenta:

1. Entra a **https://formspree.io** y crea un formulario nuevo
2. Copia la URL que te dan (`https://formspree.io/f/xxxxxxxx`)
3. En `js/script.js`, pega la URL aquí:

```javascript
const CONTACT_ENDPOINT = 'https://formspree.io/f/xxxxxxxx';
```

Deja `WEB3FORMS_KEY` vacío. El código detecta cuál usar automáticamente.

**Plan gratuito:** 50 envíos al mes.

---

## Opción C — Backend propio

Si tu hosting soporta PHP, crea `api/contacto.php`:

```php
<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

$destino = 'infotechnologyassociations@gmail.com';

$nombre  = trim($_POST['name']    ?? '');
$empresa = trim($_POST['company'] ?? '');
$correo  = trim($_POST['email']   ?? '');
$tel     = trim($_POST['phone']   ?? '');
$tipo    = trim($_POST['type']    ?? '');
$mensaje = trim($_POST['message'] ?? '');

// Validación mínima en el servidor (nunca confíes solo en el navegador)
if ($nombre === '' || !filter_var($correo, FILTER_VALIDATE_EMAIL) || $mensaje === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Datos incompletos']);
    exit;
}

$asunto = "Solicitud web: $tipo - " . ($empresa ?: $nombre);

$cuerpo = "Nueva solicitud desde el sitio web\n\n"
        . "Nombre:   $nombre\n"
        . "Empresa:  " . ($empresa ?: '(no indicada)') . "\n"
        . "Correo:   $correo\n"
        . "Teléfono: " . ($tel ?: '(no indicado)') . "\n"
        . "Tipo:     $tipo\n\n"
        . "Mensaje:\n$mensaje\n";

// Evita inyección de cabeceras
$correoLimpio = str_replace(["\r", "\n"], '', $correo);
$cabeceras = "From: sitio-web@tudominio.com\r\n"
           . "Reply-To: $correoLimpio\r\n";

if (mail($destino, $asunto, $cuerpo, $cabeceras)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'No se pudo enviar']);
}
```

Luego en `js/script.js`:

```javascript
const CONTACT_ENDPOINT = '/api/contacto.php';
```

---

## Qué pasa si no configuras nada

El formulario **no miente**. Al enviar:

1. Abre el programa de correo del visitante (Gmail, Outlook, etc.)
2. Con destinatario, asunto y todos los datos ya escritos
3. Le muestra un aviso claro de que debe pulsar "Enviar" en su correo

Funciona, pero depende de que el visitante complete el paso. Por eso conviene
configurar la Opción A.

---

## Solución de problemas

**No llega el correo**
- Revisa la carpeta de Spam (sobre todo el primer envío)
- Confirma que verificaste tu correo en Web3Forms
- Abre la consola del navegador (F12 → pestaña Console) y busca errores en rojo

**Aparece mensaje de error rojo**
- El texto del error indica la causa
- Si dice "Failed to fetch", revisa tu conexión o que la clave esté bien pegada

**Dice "enviado" pero no llega**
- Verifica que la clave corresponda al correo correcto
- Entra a web3forms.com con tu correo para ver los envíos registrados

**El formulario no valida**
- Los campos obligatorios son: Nombre, Correo, Tipo de solicitud y Mensaje
- El mensaje debe tener al menos 10 caracteres

---

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Clave y configuración | `js/script.js`, cerca de la línea 200 |
| El formulario | `pages/contacto.html` |
| Validación y envío | `js/script.js`, sección "FORMULARIO DE CONTACTO" |
| Correo de destino | `js/script.js`, constante `CONTACT_EMAIL` |
