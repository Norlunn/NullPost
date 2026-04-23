// Default language: "no" (Norwegian), "en" (English), or "es" (Spanish)
export const DEFAULT_LANG = "en";

const translations = {
    no: {
        title: "NullPost",
        subtitle: "Sikker, kryptert kanal mellom to datamaskiner",
        passwordLabel: "Delt passord",
        passwordPlaceholder: "Delt passord",
        connect: "Koble til",
        securityNote:
            "Passordet forlater aldri enheten din. Alle meldinger krypteres i nettleseren din " +
            "før de videresendes — serveren kan ikke lese dem. Etter tilkobling, bekreft " +
            "fingeravtrykket med samtalepartneren muntlig før du sender sensitiv informasjon.",
        securityNoteLabel: "Sikkerhetsinformasjon",
        themeLabel: "Bytt tema",
        langLabel: "Bytt språk",
        statusWaiting: "Venter på at samtalepartner kobler til...",
        statusKeyExchange: "Utveksler sesjonsnøkler...",
        statusConnected: "Samtalepartner tilkoblet",
        statusPeerLeft: "Samtalepartner frakoblet",
        statusReconnecting: "Kobler til på nytt...",
        statusDisconnected: "Frakoblet",
        fingerprintLabel: "Bekreft med samtalepartner: ",
        disconnect: "Koble fra",
        messageLabel: "Melding",
        messagesLabel: "Meldinger",
        messagePlaceholder: "Skriv melding… (Enter for å sende, Shift+Enter for ny linje)",
        send: "Send",
        you: "Deg",
        peer: "Samtalepartner",
        copy: "Kopier",
        copied: "Kopiert!",
        sysChannelOpen: "Kanal åpen — venter på at samtalepartner kobler til.",
        sysPeerConnected: "Samtalepartner tilkoblet. Utveksler sesjonsnøkler...",
        sysKeyExchangeTimeout: "Nøkkelutveksling tidsavbrutt — koble fra og forsøk igjen.",
        sysPeerLeft: "Samtalepartner frakoblet.",
        sysRejected: "Tilkobling avvist — kanalen har allerede to deltakere.",
        sysTimedOut: "Kanal lukket — inaktiv i for lang tid.",
        errTimedOut: "Tidsavbrudd — kanalen ble lukket pga. inaktivitet.",
        sysKeysExchanged: "Sesjonsnøkler utvekslet. Bekreft fingeravtrykket muntlig før du sender sensitiv informasjon.",
        sysDecryptFailed: "[Kunne ikke dekryptere melding — mulig manipulering eller feil nøkkel]",
        sysKeyExchangeSendFailed: "[Feil ved sending av nøkkel — koble fra og forsøk igjen]",
        sysKeyExchangeFailed: "[Nøkkelutveksling mislyktes — feil passord eller manipulert data]",
        sysReconnectFailed: "Kunne ikke koble til på nytt. Koble fra og forsøk igjen manuelt.",
        sysEncryptFailed: "[Kryptering feilet — melding ikke sendt]",
        errKeyExchangeTimeout: "Nøkkelutveksling mislyktes. Motparten svarte ikke.",
        errChannelFull: "Kanalen er full — en annen enhet er allerede tilkoblet med dette passordet.",
        errKeyExchangeFailed: "Nøkkelutveksling mislyktes.",
        errKeyExchangePassword: "Nøkkelutveksling mislyktes — bekreft at begge bruker samme passord.",
        passwordWeak: "Svakt passord",
        passwordFair: "Middels passord",
        passwordGood: "Bra passord",
        passwordStrong: "Sterkt passord",
        errNoPassword: "Vennligst skriv inn et delt passord.",
        errPasswordTooShort: "Passordet må være minst 6 tegn.",
        errDeriveFailed: "Nøkkelavledning mislyktes — nettleseren din støtter kanskje ikke Web Crypto API.",
        errKeygenFailed: "Kunne ikke generere sesjonsnøkler.",
        attachFile: "Legg ved fil",
        dropFileHere: "Slipp fil(er) her",
        fileSending: "Sender…",
        fileReceiving: "Mottar…",
        fileSent: "Sendt",
        download: "Last ned",
        fileTransferError: "Filoverføring mislyktes",
        fileTooLarge: "Filen er for stor. Maksimal størrelse er 50 MB.",
        fileEmpty: "Kan ikke sende en tom fil.",
        fileNotConnected: "Kan ikke sende fil — ikke tilkoblet samtalepartner.",
        fileTransferAborted: "Filoverføring avbrutt — samtalepartner frakoblet.",
        fileDownloadedByPeer: "Lastet ned av samtalepartner",
        notifTitle: "Motparten koblet til",
        notifBody: "Motparten har koblet til kanalen",
        typingIndicator: "Motparten skriver…",
        qrLabel: "QR-kode",
        qrHint: "La motparten skanne for å dele passordet",
        unsend: "Trekk tilbake",
        unsent: "(Trukket tilbake)",
        copyLink: "Kopier lenke",
        seen: "Sett",
        expired: "(Utløpt)",
        maskToggle: "Masker",
        expiryLabel: "Utløpstimer",
        expiryPrompt: "Slett om:",
        modeRelay: "Relé (server)",
        modeP2P: "Direkte (P2P)",
        modeRelayDesc: "Meldinger videresendes kryptert via server",
        modeP2PDesc: "Data sendes direkte mellom nettleserne, uten å passere serveren",
        sysP2PConnected: "Direktekobling opprettet — data sendes direkte mellom nettleserne.",
        sysP2PFallback: "Direktekobling mislyktes — bruker kryptert relé i stedet.",
        fileTooLargeP2P: "Filen er for stor. Maksimal størrelse er 500 MB.",
        statusConnectedP2P: "Samtalepartner tilkoblet (P2P)",
        helpLabel: "Hjelp",
        helpClose: "Lukk",
        helpTitle: "Om NullPost",
        helpAboutTitle: "Om prosjektet",
        helpAboutText:
            "NullPost er et verktøy for sikker deling av tekst og filer mellom to enheter. Åpne NullPost på to " +
            "datamaskiner, skriv inn det samme passordet, og begynn å dele. Så enkelt er det.\n\n" +
            "Du trenger ingen brukerkonto. Ingenting lagres på serveren. Ingen logger føres. Alt du sender er " +
            "kryptert i nettleseren din før det forlater enheten — serveren ser aldri innholdet.\n\n" +
            "Du kan velge mellom to tilkoblingsmåter: Relé sender data kryptert via serveren, mens Direkte (P2P) " +
            "sender data rett mellom de to nettleserne uten å gå via serveren i det hele tatt. Uansett hvilken modus " +
            "du velger, er all data fullstendig kryptert hele veien.\n\n" +
            "NullPost støtter tekstmeldinger, filer opp til 50 MB (500 MB i P2P-modus), og bilder med " +
            "forhåndsvisning. Meldinger kan ha selvdestruksjonstimer, kan trekkes tilbake, og du kan se om motparten " +
            "har lest meldingen. Grensesnittet er tilgjengelig på 28 språk og fungerer på desktop og mobil.",
        helpPrivacyTitle: "Personvern",
        helpPrivacyText:
            "NullPost er bygget rundt ett prinsipp: dataene dine tilhører kun deg. Serveren fungerer bare som et " +
            "videresendingsledd — den videresender krypterte pakker og har ingen mulighet til å lese, lagre eller " +
            "logge innholdet.\n\n" +
            "Passordet ditt forlater aldri enheten din. Det brukes kun lokalt i nettleseren for å opprette en sikker " +
            "forbindelse. Serveren ser aldri passordet.\n\n" +
            "Det kreves ingen brukerkonto. Ingen informasjonskapsler brukes til sporing. Ingen analyseverktøy eller " +
            "telemetri er i bruk. Ingen IP-adresser logges. Serveren lagrer ingenting til disk — all informasjon " +
            "finnes kun i minnet og forsvinner når serveren startes på nytt.\n\n" +
            "I Direkte (P2P)-modus passerer ikke engang innholdet gjennom serveren — det sendes rett mellom de to " +
            "nettleserne.\n\n" +
            "NullPost er fullstendig åpen kildekode. Du kan granske koden, kjøre din egen instans og verifisere " +
            "alle påstander her selv.",
        helpSecurityTitle: "Sikkerhet",
        helpSecurityText:
            "All kommunikasjon i NullPost er ende-til-ende-kryptert med innebygd nettleserkryptografi. Ingen " +
            "tredjepartsbiblioteker brukes til kryptering.\n\n" +
            "Når du skriver inn et passord, lager nettleseren din tre ting lokalt: en kanal-ID for å finne " +
            "motparten, en krypteringsnøkkel og et fingeravtrykk for verifisering. Passordet sendes aldri " +
            "til serveren.\n\n" +
            "Etter at begge parter kobler til, oppretter nettleserne en unik sesjonsnøkkel som kun gjelder for " +
            "denne ene økten. Nøkkelen forkastes etterpå. Dette betyr at selv om noen senere skulle få tak i " +
            "passordet ditt, kan de ikke dekryptere tidligere samtaler.\n\n" +
            "Hver melding har en løpenummer-beskyttelse som gjør at den samme meldingen ikke kan spilles av " +
            "på nytt. Krypteringsnøklene er låst inne i nettleseren og kan ikke kopieres ut.\n\n" +
            "Etter tilkobling vises et fingeravtrykk som begge parter kan se. Du bør bekrefte dette med motparten " +
            "muntlig eller via en annen kanal — hvis fingeravtrykkene er ulike, kan noen forsøke å avlytte.\n\n" +
            "Serveren begrenser antall tilkoblinger, tillater kun to deltakere per kanal, og videresender kun " +
            "krypterte data. Serveren kan aldri sende falske systemmeldinger til klientene.",
        helpLinksTitle: "Kildekode og drift",
        helpLinksText: "Serveren driftes i EU (Sverige). NullPost er åpen kildekode.",
    },
    en: {
        title: "NullPost",
        subtitle: "Secure, encrypted channel between two computers",
        passwordLabel: "Shared password",
        passwordPlaceholder: "Shared password",
        connect: "Connect",
        securityNote:
            "Your password never leaves your device. All messages are encrypted in your browser " +
            "before being relayed — the server cannot read them. After connecting, verify " +
            "the fingerprint verbally with your partner before sending sensitive information.",
        securityNoteLabel: "Security information",
        themeLabel: "Toggle theme",
        langLabel: "Toggle language",
        statusWaiting: "Waiting for partner to connect...",
        statusKeyExchange: "Exchanging session keys...",
        statusConnected: "Partner connected",
        statusPeerLeft: "Partner disconnected",
        statusReconnecting: "Reconnecting...",
        statusDisconnected: "Disconnected",
        fingerprintLabel: "Verify with partner: ",
        disconnect: "Disconnect",
        messageLabel: "Message",
        messagesLabel: "Messages",
        messagePlaceholder: "Type a message… (Enter to send, Shift+Enter for new line)",
        send: "Send",
        you: "You",
        peer: "Partner",
        copy: "Copy",
        copied: "Copied!",
        sysChannelOpen: "Channel open — waiting for partner to connect.",
        sysPeerConnected: "Partner connected. Exchanging session keys...",
        sysKeyExchangeTimeout: "Key exchange timed out — disconnect and try again.",
        sysPeerLeft: "Partner disconnected.",
        sysRejected: "Connection rejected — the channel already has two participants.",
        sysKeysExchanged: "Session keys exchanged. Verify the fingerprint verbally before sending sensitive information.",
        sysDecryptFailed: "[Could not decrypt message — possible tampering or wrong key]",
        sysKeyExchangeSendFailed: "[Error sending key — disconnect and try again]",
        sysKeyExchangeFailed: "[Key exchange failed — wrong password or tampered data]",
        sysTimedOut: "Channel closed — inactive for too long.",
        errTimedOut: "Timed out — channel closed due to inactivity.",
        sysReconnectFailed: "Could not reconnect. Disconnect and try again manually.",
        sysEncryptFailed: "[Encryption failed — message not sent]",
        errKeyExchangeTimeout: "Key exchange failed. The other party did not respond.",
        errChannelFull: "Channel is full — another device is already connected with this password.",
        errKeyExchangeFailed: "Key exchange failed.",
        errKeyExchangePassword: "Key exchange failed — verify that both parties are using the same password.",
        passwordWeak: "Weak password",
        passwordFair: "Fair password",
        passwordGood: "Good password",
        passwordStrong: "Strong password",
        errNoPassword: "Please enter a shared password.",
        errPasswordTooShort: "Password must be at least 6 characters.",
        errDeriveFailed: "Key derivation failed — your browser may not support the Web Crypto API.",
        errKeygenFailed: "Could not generate session keys.",
        attachFile: "Attach file",
        dropFileHere: "Drop file(s) here",
        fileSending: "Sending…",
        fileReceiving: "Receiving…",
        fileSent: "Sent",
        download: "Download",
        fileTransferError: "File transfer failed",
        fileTooLarge: "File is too large. Maximum size is 50 MB.",
        fileEmpty: "Cannot send an empty file.",
        fileNotConnected: "Cannot send file — not connected to partner.",
        fileTransferAborted: "File transfer aborted — partner disconnected.",
        fileDownloadedByPeer: "Downloaded by partner",
        notifTitle: "Peer connected",
        notifBody: "Your peer has joined the channel",
        typingIndicator: "Peer is typing…",
        qrLabel: "QR code",
        qrHint: "Let your peer scan to share the password",
        unsend: "Unsend",
        unsent: "(Removed)",
        copyLink: "Copy link",
        seen: "Seen",
        expired: "(Expired)",
        maskToggle: "Mask",
        expiryLabel: "Expiry timer",
        expiryPrompt: "Delete in:",
        modeRelay: "Relay (Server)",
        modeP2P: "Direct (P2P)",
        modeRelayDesc: "Encrypted messages are relayed through the server",
        modeP2PDesc: "Data is sent directly between browsers, bypassing the server",
        sysP2PConnected: "Direct connection established — data is sent between browsers.",
        sysP2PFallback: "Direct connection failed — using encrypted relay instead.",
        fileTooLargeP2P: "File is too large. Maximum size is 500 MB.",
        statusConnectedP2P: "Partner connected (P2P)",
        helpLabel: "Help",
        helpClose: "Close",
        helpTitle: "About NullPost",
        helpAboutTitle: "About the project",
        helpAboutText:
            "NullPost is a tool for securely sharing text and files between two devices. Open NullPost on two " +
            "computers, enter the same password, and start sharing. It's that simple.\n\n" +
            "No account needed. Nothing is stored on the server. No logs are kept. Everything you send is " +
            "encrypted in your browser before it leaves your device — the server never sees the content.\n\n" +
            "You can choose between two connection modes: Relay sends data encrypted through the server, while " +
            "Direct (P2P) sends data straight between the two browsers without going through the server at all. " +
            "Either way, all data is fully encrypted the entire way.\n\n" +
            "NullPost supports text messages, files up to 50 MB (500 MB in P2P mode), and images with inline " +
            "previews. Messages can have self-destruct timers, can be unsent, and you can see if your partner " +
            "has read them. The interface is available in 28 languages and works on desktop and mobile.",
        helpPrivacyTitle: "Privacy",
        helpPrivacyText:
            "NullPost is built around one principle: your data belongs to you alone. The server only acts as a " +
            "relay — it forwards encrypted packets and has no ability to read, store, or log any content.\n\n" +
            "Your password never leaves your device. It is only used locally in your browser to set up a secure " +
            "connection. The server never sees the password.\n\n" +
            "No account is required. No cookies are used for tracking. No analytics or telemetry is collected. " +
            "No IP addresses are logged. The server stores nothing to disk — all information exists only in " +
            "memory and is lost when the server restarts.\n\n" +
            "In Direct (P2P) mode, message and file content doesn't even pass through the server — it flows " +
            "directly between the two browsers.\n\n" +
            "NullPost is fully open source. You can inspect the code, run your own instance, and verify every " +
            "claim made here yourself.",
        helpSecurityTitle: "Security",
        helpSecurityText:
            "All communication in NullPost is end-to-end encrypted using your browser's built-in cryptography. " +
            "No third-party libraries are used for encryption.\n\n" +
            "When you enter a password, your browser creates three things locally: a channel ID to find your " +
            "partner, an encryption key, and a fingerprint for verification. The password is never sent to " +
            "the server.\n\n" +
            "After both partners connect, the browsers create a unique session key that only applies to that " +
            "one session. The key is discarded afterward. This means that even if someone later obtains your " +
            "password, they cannot decrypt past conversations.\n\n" +
            "Every message has a sequence number that prevents the same message from being replayed. " +
            "Encryption keys are locked inside the browser and cannot be copied out.\n\n" +
            "After connecting, a fingerprint is shown that both partners can see. You should confirm this with " +
            "your partner verbally or through another channel — if the fingerprints differ, someone may be " +
            "trying to eavesdrop.\n\n" +
            "The server limits connection rates, allows only two participants per channel, and only forwards " +
            "encrypted data. The server can never send fake system messages to clients.",
        helpLinksTitle: "Source & hosting",
        helpLinksText: "The server is hosted in the EU (Sweden). NullPost is open source.",
    },
    es: {
        title: "NullPost",
        subtitle: "Canal seguro y cifrado entre dos ordenadores",
        passwordLabel: "Contraseña compartida",
        passwordPlaceholder: "Contraseña compartida",
        connect: "Conectar",
        securityNote:
            "Tu contraseña nunca sale de tu dispositivo. Todos los mensajes se cifran en tu " +
            "navegador antes de ser retransmitidos — el servidor no puede leerlos. Tras " +
            "conectarte, verifica la huella digitalmente con tu interlocutor antes de enviar " +
            "información sensible.",
        securityNoteLabel: "Información de seguridad",
        themeLabel: "Cambiar tema",
        langLabel: "Cambiar idioma",
        statusWaiting: "Esperando a que el interlocutor se conecte...",
        statusKeyExchange: "Intercambiando claves de sesión...",
        statusConnected: "Interlocutor conectado",
        statusPeerLeft: "Interlocutor desconectado",
        statusReconnecting: "Reconectando...",
        statusDisconnected: "Desconectado",
        fingerprintLabel: "Verifica con tu interlocutor: ",
        disconnect: "Desconectar",
        messageLabel: "Mensaje",
        messagesLabel: "Mensajes",
        messagePlaceholder: "Escribe un mensaje… (Enter para enviar, Shift+Enter para nueva línea)",
        send: "Enviar",
        you: "Tú",
        peer: "Interlocutor",
        copy: "Copiar",
        copied: "¡Copiado!",
        sysChannelOpen: "Canal abierto — esperando a que el interlocutor se conecte.",
        sysPeerConnected: "Interlocutor conectado. Intercambiando claves de sesión...",
        sysKeyExchangeTimeout: "Tiempo de intercambio de claves agotado — desconéctate e inténtalo de nuevo.",
        sysPeerLeft: "Interlocutor desconectado.",
        sysRejected: "Conexión rechazada — el canal ya tiene dos participantes.",
        sysKeysExchanged: "Claves de sesión intercambiadas. Verifica la huella verbalmente antes de enviar información sensible.",
        sysDecryptFailed: "[No se pudo descifrar el mensaje — posible manipulación o clave incorrecta]",
        sysKeyExchangeSendFailed: "[Error al enviar la clave — desconéctate e inténtalo de nuevo]",
        sysKeyExchangeFailed: "[Intercambio de claves fallido — contraseña incorrecta o datos manipulados]",
        sysTimedOut: "Canal cerrado — inactivo durante demasiado tiempo.",
        errTimedOut: "Tiempo agotado — canal cerrado por inactividad.",
        sysReconnectFailed: "No se pudo reconectar. Desconéctate e inténtalo de nuevo manualmente.",
        sysEncryptFailed: "[Error de cifrado — mensaje no enviado]",
        errKeyExchangeTimeout: "Intercambio de claves fallido. El interlocutor no respondió.",
        errChannelFull: "El canal está lleno — otro dispositivo ya está conectado con esta contraseña.",
        errKeyExchangeFailed: "Intercambio de claves fallido.",
        errKeyExchangePassword: "Intercambio de claves fallido — verifica que ambas partes usen la misma contraseña.",
        passwordWeak: "Contraseña débil",
        passwordFair: "Contraseña regular",
        passwordGood: "Contraseña buena",
        passwordStrong: "Contraseña fuerte",
        errNoPassword: "Por favor, introduce una contraseña compartida.",
        errPasswordTooShort: "La contraseña debe tener al menos 6 caracteres.",
        errDeriveFailed: "Derivación de clave fallida — tu navegador puede no admitir la Web Crypto API.",
        errKeygenFailed: "No se pudieron generar las claves de sesión.",
        attachFile: "Adjuntar archivo",
        dropFileHere: "Suelta el/los archivo(s) aquí",
        fileSending: "Enviando…",
        fileReceiving: "Recibiendo…",
        fileSent: "Enviado",
        download: "Descargar",
        fileTransferError: "Transferencia de archivo fallida",
        fileTooLarge: "El archivo es demasiado grande. El tamaño máximo es 50 MB.",
        fileEmpty: "No se puede enviar un archivo vacío.",
        fileNotConnected: "No se puede enviar el archivo — no estás conectado al interlocutor.",
        fileTransferAborted: "Transferencia de archivo cancelada — interlocutor desconectado.",
        fileDownloadedByPeer: "Descargado por el interlocutor",
        notifTitle: "Interlocutor conectado",
        notifBody: "Tu interlocutor se ha unido al canal",
        typingIndicator: "El interlocutor está escribiendo…",
        qrLabel: "Código QR",
        qrHint: "Permite que tu interlocutor escanee para compartir la contraseña",
        unsend: "Retirar",
        unsent: "(Retirado)",
        copyLink: "Copiar enlace",
        seen: "Visto",
        expired: "(Expirado)",
        maskToggle: "Enmascarar",
        expiryLabel: "Temporizador",
        expiryPrompt: "Eliminar en:",
        modeRelay: "Relay (servidor)",
        modeP2P: "Directo (P2P)",
        modeRelayDesc: "Los mensajes cifrados se retransmiten a través del servidor",
        modeP2PDesc: "Los datos se envían directamente entre navegadores, sin pasar por el servidor",
        sysP2PConnected: "Conexión directa establecida — los datos se envían entre navegadores.",
        sysP2PFallback: "Conexión directa fallida — usando relay cifrado en su lugar.",
        fileTooLargeP2P: "El archivo es demasiado grande. El tamaño máximo es 500 MB.",
        statusConnectedP2P: "Interlocutor conectado (P2P)",
        helpLabel: "Ayuda",
        helpClose: "Cerrar",
        helpTitle: "Acerca de NullPost",
        helpAboutTitle: "Sobre el proyecto",
        helpAboutText:
            "NullPost es una herramienta para compartir texto y archivos de forma segura entre dos dispositivos. " +
            "Abre NullPost en dos ordenadores, introduce la misma contraseña y empieza a compartir. Así de sencillo.\n\n" +
            "No necesitas cuenta. Nada se almacena en el servidor. No se guardan registros. Todo lo que envías se " +
            "cifra en tu navegador antes de salir del dispositivo — el servidor nunca ve el contenido.\n\n" +
            "Puedes elegir entre dos modos de conexión: Relay envía datos cifrados a través del servidor, mientras " +
            "que Directo (P2P) envía datos directamente entre los dos navegadores sin pasar por el servidor. En " +
            "ambos casos, todos los datos están completamente cifrados.\n\n" +
            "NullPost soporta mensajes de texto, archivos de hasta 50 MB (500 MB en modo P2P) e imágenes con " +
            "vista previa. Los mensajes pueden tener temporizadores de autodestrucción, pueden retirarse y puedes " +
            "ver si tu interlocutor los ha leído. La interfaz está disponible en 28 idiomas y funciona en " +
            "escritorio y móvil.",
        helpPrivacyTitle: "Privacidad",
        helpPrivacyText:
            "NullPost se basa en un principio: tus datos te pertenecen solo a ti. El servidor solo actúa como " +
            "un relé — reenvía paquetes cifrados y no tiene capacidad de leer, almacenar o registrar ningún " +
            "contenido.\n\n" +
            "Tu contraseña nunca sale de tu dispositivo. Solo se usa localmente en tu navegador para establecer " +
            "una conexión segura. El servidor nunca ve la contraseña.\n\n" +
            "No se requiere cuenta. No se usan cookies de rastreo. No se recopilan análisis ni telemetría. " +
            "No se registran direcciones IP. El servidor no almacena nada en disco — toda la información existe " +
            "solo en memoria y se pierde al reiniciar.\n\n" +
            "En modo Directo (P2P), el contenido ni siquiera pasa por el servidor — fluye directamente entre " +
            "los dos navegadores.\n\n" +
            "NullPost es completamente de código abierto. Puedes inspeccionar el código, ejecutar tu propia " +
            "instancia y verificar todo lo que se afirma aquí.",
        helpSecurityTitle: "Seguridad",
        helpSecurityText:
            "Toda la comunicación en NullPost está cifrada de extremo a extremo usando la criptografía integrada " +
            "del navegador. No se usan bibliotecas externas para el cifrado.\n\n" +
            "Cuando introduces una contraseña, tu navegador crea tres cosas localmente: un ID de canal para " +
            "encontrar a tu interlocutor, una clave de cifrado y una huella para verificación. La contraseña " +
            "nunca se envía al servidor.\n\n" +
            "Después de conectarse, los navegadores crean una clave de sesión única que solo aplica a esa sesión. " +
            "La clave se descarta después. Esto significa que incluso si alguien obtuviera tu contraseña más " +
            "tarde, no podría descifrar conversaciones anteriores.\n\n" +
            "Cada mensaje tiene un número de secuencia que evita que se reproduzca. Las claves de cifrado están " +
            "bloqueadas dentro del navegador y no se pueden copiar.\n\n" +
            "Tras la conexión, se muestra una huella que ambas partes pueden ver. Debes confirmarla verbalmente " +
            "o por otro canal — si las huellas difieren, alguien podría estar intentando espiar.\n\n" +
            "El servidor limita las conexiones, permite solo dos participantes por canal y solo reenvía datos " +
            "cifrados. El servidor nunca puede enviar mensajes de sistema falsos a los clientes.",
        helpLinksTitle: "Código fuente y alojamiento",
        helpLinksText: "El servidor está alojado en la UE (Suecia). NullPost es de código abierto.",
    },
    sv: {
        title: "NullPost",
        subtitle: "Säker, krypterad kanal mellan två datorer",
        passwordLabel: "Delat lösenord",
        passwordPlaceholder: "Delat lösenord",
        connect: "Anslut",
        securityNote:
            "Ditt lösenord lämnar aldrig din enhet. Alla meddelanden krypteras i din webbläsare " +
            "innan de vidarebefordras — servern kan inte läsa dem. Efter anslutning, verifiera " +
            "fingeravtrycket muntligt med din partner innan du skickar känslig information.",
        securityNoteLabel: "Säkerhetsinformation",
        themeLabel: "Byt tema",
        langLabel: "Byt språk",
        statusWaiting: "Väntar på att samtalspartnern ansluter...",
        statusKeyExchange: "Utbyter sessionsnycklar...",
        statusConnected: "Samtalspartnern ansluten",
        statusPeerLeft: "Samtalspartnern frånkopplad",
        statusReconnecting: "Återansluter...",
        statusDisconnected: "Frånkopplad",
        fingerprintLabel: "Verifiera med samtalspartnern: ",
        disconnect: "Koppla från",
        messageLabel: "Meddelande",
        messagesLabel: "Meddelanden",
        messagePlaceholder: "Skriv meddelande… (Enter för att skicka, Shift+Enter för ny rad)",
        send: "Skicka",
        you: "Du",
        peer: "Samtalspartner",
        copy: "Kopiera",
        copied: "Kopierat!",
        sysChannelOpen: "Kanal öppen — väntar på att samtalspartnern ansluter.",
        sysPeerConnected: "Samtalspartnern ansluten. Utbyter sessionsnycklar...",
        sysKeyExchangeTimeout: "Nyckelutbyte tog för lång tid — koppla från och försök igen.",
        sysPeerLeft: "Samtalspartnern frånkopplad.",
        sysRejected: "Anslutning avvisad — kanalen har redan två deltagare.",
        sysTimedOut: "Kanal stängd — inaktiv för länge.",
        errTimedOut: "Timeout — kanalen stängdes på grund av inaktivitet.",
        sysKeysExchanged: "Sessionsnycklar utbytta. Verifiera fingeravtrycket muntligt innan du skickar känslig information.",
        sysDecryptFailed: "[Kunde inte dekryptera meddelande — möjlig manipulering eller fel nyckel]",
        sysKeyExchangeSendFailed: "[Fel vid sändning av nyckel — koppla från och försök igen]",
        sysKeyExchangeFailed: "[Nyckelutbyte misslyckades — fel lösenord eller manipulerad data]",
        sysReconnectFailed: "Kunde inte återansluta. Koppla från och försök igen manuellt.",
        sysEncryptFailed: "[Kryptering misslyckades — meddelande inte skickat]",
        errKeyExchangeTimeout: "Nyckelutbyte misslyckades. Den andra parten svarade inte.",
        errChannelFull: "Kanalen är full — en annan enhet är redan ansluten med det här lösenordet.",
        errKeyExchangeFailed: "Nyckelutbyte misslyckades.",
        errKeyExchangePassword: "Nyckelutbyte misslyckades — kontrollera att båda parter använder samma lösenord.",
        passwordWeak: "Svagt lösenord",
        passwordFair: "Medelmåttigt lösenord",
        passwordGood: "Bra lösenord",
        passwordStrong: "Starkt lösenord",
        errNoPassword: "Ange ett delat lösenord.",
        errPasswordTooShort: "Lösenordet måste vara minst 6 tecken.",
        errDeriveFailed: "Nyckelderivering misslyckades — din webbläsare kanske inte stöder Web Crypto API.",
        errKeygenFailed: "Kunde inte generera sessionsnycklar.",
        attachFile: "Bifoga fil",
        dropFileHere: "Släpp fil(er) här",
        fileSending: "Skickar…",
        fileReceiving: "Tar emot…",
        fileSent: "Skickat",
        download: "Ladda ner",
        fileTransferError: "Filöverföring misslyckades",
        fileTooLarge: "Filen är för stor. Maximal storlek är 50 MB.",
        fileEmpty: "Kan inte skicka en tom fil.",
        fileNotConnected: "Kan inte skicka fil — inte ansluten till samtalspartnern.",
        fileTransferAborted: "Filöverföring avbruten — samtalspartnern frånkopplad.",
        fileDownloadedByPeer: "Nedladdad av samtalspartnern",
        notifTitle: "Samtalspartnern ansluten",
        notifBody: "Din samtalspartner har anslutit till kanalen",
        typingIndicator: "Samtalspartnern skriver…",
        qrLabel: "QR-kod",
        qrHint: "Låt samtalspartnern skanna för att dela lösenordet",
        unsend: "Ångra sändning",
        unsent: "(Ångrad)",
        copyLink: "Kopiera länk",
        seen: "Sett",
        expired: "(Utgånget)",
        maskToggle: "Maskera",
        expiryLabel: "Utgångstimer",
        expiryPrompt: "Radera om:",
        modeRelay: "Relä (server)",
        modeP2P: "Direkt (P2P)",
        modeRelayDesc: "Meddelanden vidarebefordras krypterade via server",
        modeP2PDesc: "Data skickas direkt mellan webbläsare, utan att passera servern",
        sysP2PConnected: "Direktanslutning upprättad — data skickas direkt mellan webbläsare.",
        sysP2PFallback: "Direktanslutning misslyckades — använder krypterat relä istället.",
        fileTooLargeP2P: "Filen är för stor. Maximal storlek är 500 MB.",
        statusConnectedP2P: "Samtalspartnern ansluten (P2P)",
        helpLabel: "Hjälp",
        helpClose: "Stäng",
        helpTitle: "Om NullPost",
        helpAboutTitle: "Om projektet",
        helpAboutText:
            "NullPost är ett verktyg för att säkert dela text och filer mellan två enheter. Öppna NullPost på " +
            "två datorer, ange samma lösenord och börja dela. Så enkelt är det.\n\n" +
            "Inget konto krävs. Inget sparas på servern. Inga loggar förs. Allt du skickar krypteras i din " +
            "webbläsare innan det lämnar enheten — servern ser aldrig innehållet.\n\n" +
            "Du kan välja mellan två anslutningslägen: Relä skickar data krypterat via servern, medan Direkt " +
            "(P2P) skickar data rakt mellan de två webbläsarna utan att gå via servern. Oavsett läge är all " +
            "data helt krypterad hela vägen.\n\n" +
            "NullPost stöder textmeddelanden, filer upp till 50 MB (500 MB i P2P-läge) och bilder med " +
            "förhandsgranskning. Meddelanden kan ha självförstöringstimer, kan ångras och du kan se om din " +
            "samtalspartner har läst dem. Gränssnittet finns på 28 språk och fungerar på dator och mobil.",
        helpPrivacyTitle: "Integritet",
        helpPrivacyText:
            "NullPost är byggt kring en princip: dina data tillhör bara dig. Servern fungerar bara som ett " +
            "vidarebefordringsled — den skickar vidare krypterade paket och kan inte läsa, lagra eller logga " +
            "något innehåll.\n\n" +
            "Ditt lösenord lämnar aldrig din enhet. Det används bara lokalt i din webbläsare för att upprätta " +
            "en säker anslutning. Servern ser aldrig lösenordet.\n\n" +
            "Inget konto krävs. Inga cookies används för spårning. Ingen analys eller telemetri samlas in. " +
            "Inga IP-adresser loggas. Servern sparar inget till disk — all information finns bara i minnet " +
            "och försvinner när servern startas om.\n\n" +
            "I Direkt (P2P)-läge passerar innehållet inte ens genom servern — det skickas direkt mellan " +
            "de två webbläsarna.\n\n" +
            "NullPost är helt öppen källkod. Du kan granska koden, köra din egen instans och verifiera " +
            "alla påståenden här själv.",
        helpSecurityTitle: "Säkerhet",
        helpSecurityText:
            "All kommunikation i NullPost är end-to-end-krypterad med webbläsarens inbyggda kryptografi. " +
            "Inga tredjepartsbibliotek används för kryptering.\n\n" +
            "När du anger ett lösenord skapar din webbläsare tre saker lokalt: ett kanal-ID för att hitta " +
            "din samtalspartner, en krypteringsnyckel och ett fingeravtryck för verifiering. Lösenordet " +
            "skickas aldrig till servern.\n\n" +
            "Efter att båda parter anslutit skapar webbläsarna en unik sessionsnyckel som bara gäller för " +
            "den sessionen. Nyckeln kastas efteråt. Det innebär att även om någon senare får tag i ditt " +
            "lösenord kan de inte dekryptera tidigare samtal.\n\n" +
            "Varje meddelande har ett löpnummer som förhindrar att samma meddelande spelas upp igen. " +
            "Krypteringsnycklar är låsta i webbläsaren och kan inte kopieras ut.\n\n" +
            "Efter anslutning visas ett fingeravtryck som båda parter kan se. Du bör bekräfta detta " +
            "muntligt eller via en annan kanal — om fingeravtrycken skiljer sig kan någon försöka avlyssna.\n\n" +
            "Servern begränsar anslutningshastigheten, tillåter bara två deltagare per kanal och " +
            "vidarebefordrar bara krypterad data. Servern kan aldrig skicka falska systemmeddelanden " +
            "till klienterna.",
        helpLinksTitle: "Källkod och drift",
        helpLinksText: "Servern driftas i EU (Sverige). NullPost är öppen källkod.",
    },
    da: {
        title: "NullPost",
        subtitle: "Sikker, krypteret kanal mellem to computere",
        passwordLabel: "Delt adgangskode",
        passwordPlaceholder: "Delt adgangskode",
        connect: "Opret forbindelse",
        securityNote:
            "Din adgangskode forlader aldrig din enhed. Alle beskeder krypteres i din browser " +
            "inden de videresendes — serveren kan ikke læse dem. Efter tilslutning, bekræft " +
            "fingeraftrykket mundtligt med din partner inden du sender følsom information.",
        securityNoteLabel: "Sikkerhedsinformation",
        themeLabel: "Skift tema",
        langLabel: "Skift sprog",
        statusWaiting: "Venter på at samtalepartner forbinder...",
        statusKeyExchange: "Udveksler sessionsnøgler...",
        statusConnected: "Samtalepartner forbundet",
        statusPeerLeft: "Samtalepartner afbrudt",
        statusReconnecting: "Genopretter forbindelse...",
        statusDisconnected: "Afbrudt",
        fingerprintLabel: "Bekræft med samtalepartner: ",
        disconnect: "Afbryd forbindelse",
        messageLabel: "Besked",
        messagesLabel: "Beskeder",
        messagePlaceholder: "Skriv besked… (Enter for at sende, Shift+Enter for ny linje)",
        send: "Send",
        you: "Dig",
        peer: "Samtalepartner",
        copy: "Kopiér",
        copied: "Kopieret!",
        sysChannelOpen: "Kanal åben — venter på at samtalepartner forbinder.",
        sysPeerConnected: "Samtalepartner forbundet. Udveksler sessionsnøgler...",
        sysKeyExchangeTimeout: "Nøgleudveksling timeout — afbryd og prøv igen.",
        sysPeerLeft: "Samtalepartner afbrudt.",
        sysRejected: "Forbindelsen afvist — kanalen har allerede to deltagere.",
        sysTimedOut: "Kanal lukket — inaktiv for længe.",
        errTimedOut: "Timeout — kanalen blev lukket pga. inaktivitet.",
        sysKeysExchanged: "Sessionsnøgler udvekslet. Bekræft fingeraftrykket mundtligt inden du sender følsom information.",
        sysDecryptFailed: "[Kunne ikke dekryptere besked — mulig manipulation eller forkert nøgle]",
        sysKeyExchangeSendFailed: "[Fejl ved afsendelse af nøgle — afbryd og prøv igen]",
        sysKeyExchangeFailed: "[Nøgleudveksling mislykkedes — forkert adgangskode eller manipulerede data]",
        sysReconnectFailed: "Kunne ikke genoprette forbindelsen. Afbryd og prøv igen manuelt.",
        sysEncryptFailed: "[Kryptering mislykkedes — besked ikke sendt]",
        errKeyExchangeTimeout: "Nøgleudveksling mislykkedes. Den anden part svarede ikke.",
        errChannelFull: "Kanalen er fuld — en anden enhed er allerede forbundet med denne adgangskode.",
        errKeyExchangeFailed: "Nøgleudveksling mislykkedes.",
        errKeyExchangePassword: "Nøgleudveksling mislykkedes — bekræft at begge parter bruger samme adgangskode.",
        passwordWeak: "Svag adgangskode",
        passwordFair: "Middelmådig adgangskode",
        passwordGood: "God adgangskode",
        passwordStrong: "Stærk adgangskode",
        errNoPassword: "Angiv venligst en delt adgangskode.",
        errPasswordTooShort: "Adgangskoden skal være mindst 6 tegn.",
        errDeriveFailed: "Nøgleafledning mislykkedes — din browser understøtter muligvis ikke Web Crypto API.",
        errKeygenFailed: "Kunne ikke generere sessionsnøgler.",
        attachFile: "Vedhæft fil",
        dropFileHere: "Slip fil(er) her",
        fileSending: "Sender…",
        fileReceiving: "Modtager…",
        fileSent: "Sendt",
        download: "Download",
        fileTransferError: "Filoverførsel mislykkedes",
        fileTooLarge: "Filen er for stor. Maksimal størrelse er 50 MB.",
        fileEmpty: "Kan ikke sende en tom fil.",
        fileNotConnected: "Kan ikke sende fil — ikke forbundet til samtalepartner.",
        fileTransferAborted: "Filoverførsel afbrudt — samtalepartner afbrudt.",
        fileDownloadedByPeer: "Downloadet af samtalepartner",
        notifTitle: "Modparten forbundet",
        notifBody: "Din modpart har forbundet sig til kanalen",
        typingIndicator: "Modparten skriver…",
        qrLabel: "QR-kode",
        qrHint: "Lad modparten scanne for at dele adgangskoden",
        unsend: "Træk tilbage",
        unsent: "(Trukket tilbage)",
        copyLink: "Kopiér link",
        seen: "Set",
        expired: "(Udløbet)",
        maskToggle: "Masker",
        expiryLabel: "Udløbstimer",
        expiryPrompt: "Slet om:",
        modeRelay: "Relæ (server)",
        modeP2P: "Direkte (P2P)",
        modeRelayDesc: "Beskeder videresendes krypteret via server",
        modeP2PDesc: "Data sendes direkte mellem browsere, uden om serveren",
        sysP2PConnected: "Direkte forbindelse oprettet — data sendes direkte mellem browsere.",
        sysP2PFallback: "Direkte forbindelse mislykkedes — bruger krypteret relæ i stedet.",
        fileTooLargeP2P: "Filen er for stor. Maksimal størrelse er 500 MB.",
        statusConnectedP2P: "Samtalepartner forbundet (P2P)",
        helpLabel: "Hjælp",
        helpClose: "Luk",
        helpTitle: "Om NullPost",
        helpAboutTitle: "Om projektet",
        helpAboutText:
            "NullPost er et værktøj til sikker deling af tekst og filer mellem to enheder. Åbn NullPost på " +
            "to computere, indtast den samme adgangskode og begynd at dele. Så simpelt er det.\n\n" +
            "Ingen konto påkrævet. Intet gemmes på serveren. Ingen logfiler føres. Alt du sender krypteres i " +
            "din browser, inden det forlader enheden — serveren ser aldrig indholdet.\n\n" +
            "Du kan vælge mellem to forbindelsestyper: Relæ sender data krypteret via serveren, mens Direkte " +
            "(P2P) sender data lige mellem de to browsere uden om serveren. Uanset tilstand er alle data " +
            "fuldt krypteret hele vejen.\n\n" +
            "NullPost understøtter tekstbeskeder, filer op til 50 MB (500 MB i P2P-tilstand) og billeder med " +
            "forhåndsvisning. Beskeder kan have selvdestruktionstimer, kan trækkes tilbage, og du kan se om " +
            "din samtalepartner har læst dem. Grænsefladen findes på 28 sprog og fungerer på desktop og mobil.",
        helpPrivacyTitle: "Privatlivsbeskyttelse",
        helpPrivacyText:
            "NullPost er bygget på ét princip: dine data tilhører kun dig. Serveren fungerer kun som et " +
            "videresendelsesled — den videresender krypterede pakker og kan ikke læse, gemme eller logge " +
            "noget indhold.\n\n" +
            "Din adgangskode forlader aldrig din enhed. Den bruges kun lokalt i din browser til at oprette en " +
            "sikker forbindelse. Serveren ser aldrig adgangskoden.\n\n" +
            "Ingen konto påkrævet. Ingen cookies bruges til sporing. Ingen analyse eller telemetri indsamles. " +
            "Ingen IP-adresser logges. Serveren gemmer intet på disk — al information findes kun i hukommelsen " +
            "og forsvinder ved genstart.\n\n" +
            "I Direkte (P2P)-tilstand passerer indholdet ikke engang gennem serveren — det sendes direkte " +
            "mellem de to browsere.\n\n" +
            "NullPost er fuldstændig open source. Du kan granske koden, køre din egen instans og verificere " +
            "alle påstande her selv.",
        helpSecurityTitle: "Sikkerhed",
        helpSecurityText:
            "Al kommunikation i NullPost er end-to-end-krypteret med browserens indbyggede kryptografi. " +
            "Ingen tredjepartsbiblioteker bruges til kryptering.\n\n" +
            "Når du indtaster en adgangskode, opretter din browser tre ting lokalt: et kanal-ID til at finde " +
            "din samtalepartner, en krypteringsnøgle og et fingeraftryk til verificering. Adgangskoden " +
            "sendes aldrig til serveren.\n\n" +
            "Når begge parter er forbundet, opretter browserne en unik sessionsnøgle, der kun gælder for " +
            "den pågældende session. Nøglen kasseres bagefter. Det betyder, at selvom nogen senere får fat " +
            "i din adgangskode, kan de ikke dekryptere tidligere samtaler.\n\n" +
            "Hver besked har et løbenummer, der forhindrer, at den samme besked kan afspilles igen. " +
            "Krypteringsnøgler er låst inde i browseren og kan ikke kopieres ud.\n\n" +
            "Efter forbindelse vises et fingeraftryk, som begge parter kan se. Du bør bekræfte dette " +
            "mundtligt eller via en anden kanal — hvis fingeraftrykkene er forskellige, kan nogen forsøge " +
            "at aflytte.\n\n" +
            "Serveren begrænser forbindelseshastigheden, tillader kun to deltagere per kanal og videresender " +
            "kun krypterede data. Serveren kan aldrig sende falske systembeskeder til klienterne.",
        helpLinksTitle: "Kildekode og drift",
        helpLinksText: "Serveren drives i EU (Sverige). NullPost er open source.",
    },
    fr: {
        title: "NullPost",
        subtitle: "Canal sécurisé et chiffré entre deux ordinateurs",
        passwordLabel: "Mot de passe partagé",
        passwordPlaceholder: "Mot de passe partagé",
        connect: "Connecter",
        securityNote:
            "Votre mot de passe ne quitte jamais votre appareil. Tous les messages sont chiffrés " +
            "dans votre navigateur avant d'être relayés — le serveur ne peut pas les lire. Après " +
            "connexion, vérifiez l'empreinte verbalement avec votre interlocuteur avant d'envoyer " +
            "des informations sensibles.",
        securityNoteLabel: "Informations de sécurité",
        themeLabel: "Changer le thème",
        langLabel: "Changer la langue",
        statusWaiting: "En attente de l'interlocuteur...",
        statusKeyExchange: "Échange des clés de session...",
        statusConnected: "Interlocuteur connecté",
        statusPeerLeft: "Interlocuteur déconnecté",
        statusReconnecting: "Reconnexion en cours...",
        statusDisconnected: "Déconnecté",
        fingerprintLabel: "Vérifier avec l'interlocuteur : ",
        disconnect: "Déconnecter",
        messageLabel: "Message",
        messagesLabel: "Messages",
        messagePlaceholder: "Écrire un message… (Entrée pour envoyer, Maj+Entrée pour nouvelle ligne)",
        send: "Envoyer",
        you: "Vous",
        peer: "Interlocuteur",
        copy: "Copier",
        copied: "Copié !",
        sysChannelOpen: "Canal ouvert — en attente de l'interlocuteur.",
        sysPeerConnected: "Interlocuteur connecté. Échange des clés de session...",
        sysKeyExchangeTimeout: "Délai d'échange de clés dépassé — déconnectez et réessayez.",
        sysPeerLeft: "Interlocuteur déconnecté.",
        sysRejected: "Connexion rejetée — le canal a déjà deux participants.",
        sysTimedOut: "Canal fermé — inactif trop longtemps.",
        errTimedOut: "Délai dépassé — canal fermé pour inactivité.",
        sysKeysExchanged: "Clés de session échangées. Vérifiez l'empreinte verbalement avant d'envoyer des informations sensibles.",
        sysDecryptFailed: "[Impossible de déchiffrer le message — possible altération ou mauvaise clé]",
        sysKeyExchangeSendFailed: "[Erreur lors de l'envoi de la clé — déconnectez et réessayez]",
        sysKeyExchangeFailed: "[Échange de clés échoué — mauvais mot de passe ou données altérées]",
        sysReconnectFailed: "Impossible de se reconnecter. Déconnectez et réessayez manuellement.",
        sysEncryptFailed: "[Chiffrement échoué — message non envoyé]",
        errKeyExchangeTimeout: "Échange de clés échoué. L'autre partie n'a pas répondu.",
        errChannelFull: "Le canal est plein — un autre appareil est déjà connecté avec ce mot de passe.",
        errKeyExchangeFailed: "Échange de clés échoué.",
        errKeyExchangePassword: "Échange de clés échoué — vérifiez que les deux parties utilisent le même mot de passe.",
        passwordWeak: "Mot de passe faible",
        passwordFair: "Mot de passe moyen",
        passwordGood: "Bon mot de passe",
        passwordStrong: "Mot de passe fort",
        errNoPassword: "Veuillez saisir un mot de passe partagé.",
        errPasswordTooShort: "Le mot de passe doit comporter au moins 6 caractères.",
        errDeriveFailed: "Dérivation de clé échouée — votre navigateur ne supporte peut-être pas l'API Web Crypto.",
        errKeygenFailed: "Impossible de générer les clés de session.",
        attachFile: "Joindre un fichier",
        dropFileHere: "Déposez le(s) fichier(s) ici",
        fileSending: "Envoi en cours…",
        fileReceiving: "Réception en cours…",
        fileSent: "Envoyé",
        download: "Télécharger",
        fileTransferError: "Transfert de fichier échoué",
        fileTooLarge: "Le fichier est trop volumineux. Taille maximale : 50 Mo.",
        fileEmpty: "Impossible d'envoyer un fichier vide.",
        fileNotConnected: "Impossible d'envoyer le fichier — non connecté à l'interlocuteur.",
        fileTransferAborted: "Transfert de fichier annulé — interlocuteur déconnecté.",
        fileDownloadedByPeer: "Téléchargé par l'interlocuteur",
        notifTitle: "Interlocuteur connecté",
        notifBody: "Votre interlocuteur a rejoint le canal",
        typingIndicator: "L'interlocuteur est en train d'écrire…",
        qrLabel: "Code QR",
        qrHint: "Laissez votre interlocuteur scanner pour partager le mot de passe",
        unsend: "Annuler l'envoi",
        unsent: "(Annulé)",
        copyLink: "Copier le lien",
        seen: "Vu",
        expired: "(Expiré)",
        maskToggle: "Masquer",
        expiryLabel: "Minuterie d'expiration",
        expiryPrompt: "Suppr. dans :",
        modeRelay: "Relais (serveur)",
        modeP2P: "Direct (P2P)",
        modeRelayDesc: "Les messages chiffrés sont relayés via le serveur",
        modeP2PDesc: "Les données sont envoyées directement entre navigateurs, sans passer par le serveur",
        sysP2PConnected: "Connexion directe établie — les données sont envoyées entre navigateurs.",
        sysP2PFallback: "Connexion directe échouée — utilisation du relais chiffré à la place.",
        fileTooLargeP2P: "Le fichier est trop volumineux. Taille maximale : 500 Mo.",
        statusConnectedP2P: "Interlocuteur connecté (P2P)",
        helpLabel: "Aide",
        helpClose: "Fermer",
        helpTitle: "À propos de NullPost",
        helpAboutTitle: "À propos du projet",
        helpAboutText:
            "NullPost est un outil pour partager du texte et des fichiers en toute sécurité entre deux appareils. " +
            "Ouvrez NullPost sur deux ordinateurs, saisissez le même mot de passe et commencez à partager. " +
            "C'est aussi simple que ça.\n\n" +
            "Aucun compte nécessaire. Rien n'est stocké sur le serveur. Aucun journal n'est conservé. Tout ce " +
            "que vous envoyez est chiffré dans votre navigateur avant de quitter l'appareil — le serveur ne " +
            "voit jamais le contenu.\n\n" +
            "Vous pouvez choisir entre deux modes de connexion : Relais envoie les données chiffrées via le " +
            "serveur, tandis que Direct (P2P) envoie les données directement entre les deux navigateurs sans " +
            "passer par le serveur. Dans les deux cas, toutes les données sont entièrement chiffrées.\n\n" +
            "NullPost prend en charge les messages texte, les fichiers jusqu'à 50 Mo (500 Mo en mode P2P) et " +
            "les images avec aperçu. Les messages peuvent avoir des minuteries d'autodestruction, être annulés, " +
            "et vous pouvez voir si votre interlocuteur les a lus. L'interface est disponible en 28 langues " +
            "et fonctionne sur ordinateur et mobile.",
        helpPrivacyTitle: "Confidentialité",
        helpPrivacyText:
            "NullPost repose sur un principe : vos données n'appartiennent qu'à vous. Le serveur ne fait que " +
            "relayer — il transmet des paquets chiffrés et ne peut ni lire, ni stocker, ni enregistrer " +
            "aucun contenu.\n\n" +
            "Votre mot de passe ne quitte jamais votre appareil. Il est utilisé uniquement localement dans " +
            "votre navigateur pour établir une connexion sécurisée. Le serveur ne voit jamais le mot de passe.\n\n" +
            "Aucun compte requis. Aucun cookie de suivi. Aucune analyse ni télémétrie collectée. Aucune " +
            "adresse IP enregistrée. Le serveur ne stocke rien sur disque — toutes les informations n'existent " +
            "qu'en mémoire et disparaissent au redémarrage.\n\n" +
            "En mode Direct (P2P), le contenu ne passe même pas par le serveur — il circule directement " +
            "entre les deux navigateurs.\n\n" +
            "NullPost est entièrement open source. Vous pouvez inspecter le code, exécuter votre propre " +
            "instance et vérifier vous-même tout ce qui est affirmé ici.",
        helpSecurityTitle: "Sécurité",
        helpSecurityText:
            "Toute communication dans NullPost est chiffrée de bout en bout avec la cryptographie intégrée " +
            "du navigateur. Aucune bibliothèque tierce n'est utilisée pour le chiffrement.\n\n" +
            "Lorsque vous saisissez un mot de passe, votre navigateur crée trois choses localement : un " +
            "identifiant de canal pour trouver votre interlocuteur, une clé de chiffrement et une empreinte " +
            "de vérification. Le mot de passe n'est jamais envoyé au serveur.\n\n" +
            "Une fois les deux parties connectées, les navigateurs créent une clé de session unique valable " +
            "uniquement pour cette session. La clé est supprimée ensuite. Cela signifie que même si quelqu'un " +
            "obtient votre mot de passe plus tard, il ne pourra pas déchiffrer les conversations passées.\n\n" +
            "Chaque message possède un numéro de séquence qui empêche sa relecture. Les clés de chiffrement " +
            "sont verrouillées dans le navigateur et ne peuvent pas être copiées.\n\n" +
            "Après la connexion, une empreinte s'affiche que les deux parties peuvent voir. Vous devriez la " +
            "confirmer verbalement ou par un autre canal — si les empreintes diffèrent, quelqu'un pourrait " +
            "tenter d'écouter.\n\n" +
            "Le serveur limite les connexions, n'autorise que deux participants par canal et ne transmet que " +
            "des données chiffrées. Le serveur ne peut jamais envoyer de faux messages système aux clients.",
        helpLinksTitle: "Code source et hébergement",
        helpLinksText: "Le serveur est hébergé dans l'UE (Suède). NullPost est open source.",
    },
    de: {
        title: "NullPost",
        subtitle: "Sicherer, verschlüsselter Kanal zwischen zwei Computern",
        passwordLabel: "Gemeinsames Passwort",
        passwordPlaceholder: "Gemeinsames Passwort",
        connect: "Verbinden",
        securityNote:
            "Ihr Passwort verlässt niemals Ihr Gerät. Alle Nachrichten werden in Ihrem Browser " +
            "verschlüsselt, bevor sie weitergeleitet werden — der Server kann sie nicht lesen. " +
            "Bestätigen Sie nach der Verbindung den Fingerabdruck mündlich mit Ihrem Partner, " +
            "bevor Sie sensible Informationen senden.",
        securityNoteLabel: "Sicherheitshinweise",
        themeLabel: "Design wechseln",
        langLabel: "Sprache wechseln",
        statusWaiting: "Warten auf Gesprächspartner...",
        statusKeyExchange: "Sitzungsschlüssel werden ausgetauscht...",
        statusConnected: "Gesprächspartner verbunden",
        statusPeerLeft: "Gesprächspartner getrennt",
        statusReconnecting: "Verbindung wird wiederhergestellt...",
        statusDisconnected: "Getrennt",
        fingerprintLabel: "Mit Gesprächspartner bestätigen: ",
        disconnect: "Trennen",
        messageLabel: "Nachricht",
        messagesLabel: "Nachrichten",
        messagePlaceholder: "Nachricht schreiben… (Enter zum Senden, Shift+Enter für neue Zeile)",
        send: "Senden",
        you: "Sie",
        peer: "Gesprächspartner",
        copy: "Kopieren",
        copied: "Kopiert!",
        sysChannelOpen: "Kanal offen — warte auf Gesprächspartner.",
        sysPeerConnected: "Gesprächspartner verbunden. Sitzungsschlüssel werden ausgetauscht...",
        sysKeyExchangeTimeout: "Schlüsselaustausch abgelaufen — trennen und erneut versuchen.",
        sysPeerLeft: "Gesprächspartner getrennt.",
        sysRejected: "Verbindung abgelehnt — der Kanal hat bereits zwei Teilnehmer.",
        sysTimedOut: "Kanal geschlossen — zu lange inaktiv.",
        errTimedOut: "Zeitüberschreitung — Kanal wegen Inaktivität geschlossen.",
        sysKeysExchanged: "Sitzungsschlüssel ausgetauscht. Bestätigen Sie den Fingerabdruck mündlich, bevor Sie sensible Informationen senden.",
        sysDecryptFailed: "[Nachricht konnte nicht entschlüsselt werden — mögliche Manipulation oder falscher Schlüssel]",
        sysKeyExchangeSendFailed: "[Fehler beim Senden des Schlüssels — trennen und erneut versuchen]",
        sysKeyExchangeFailed: "[Schlüsselaustausch fehlgeschlagen — falsches Passwort oder manipulierte Daten]",
        sysReconnectFailed: "Verbindung konnte nicht wiederhergestellt werden. Trennen und manuell erneut versuchen.",
        sysEncryptFailed: "[Verschlüsselung fehlgeschlagen — Nachricht nicht gesendet]",
        errKeyExchangeTimeout: "Schlüsselaustausch fehlgeschlagen. Die andere Partei hat nicht geantwortet.",
        errChannelFull: "Kanal ist voll — ein anderes Gerät ist bereits mit diesem Passwort verbunden.",
        errKeyExchangeFailed: "Schlüsselaustausch fehlgeschlagen.",
        errKeyExchangePassword: "Schlüsselaustausch fehlgeschlagen — überprüfen Sie, ob beide Parteien dasselbe Passwort verwenden.",
        passwordWeak: "Schwaches Passwort",
        passwordFair: "Mittelmäßiges Passwort",
        passwordGood: "Gutes Passwort",
        passwordStrong: "Starkes Passwort",
        errNoPassword: "Bitte geben Sie ein gemeinsames Passwort ein.",
        errPasswordTooShort: "Das Passwort muss mindestens 6 Zeichen lang sein.",
        errDeriveFailed: "Schlüsselableitung fehlgeschlagen — Ihr Browser unterstützt möglicherweise die Web Crypto API nicht.",
        errKeygenFailed: "Sitzungsschlüssel konnten nicht generiert werden.",
        attachFile: "Datei anhängen",
        dropFileHere: "Datei(en) hier ablegen",
        fileSending: "Wird gesendet…",
        fileReceiving: "Wird empfangen…",
        fileSent: "Gesendet",
        download: "Herunterladen",
        fileTransferError: "Dateiübertragung fehlgeschlagen",
        fileTooLarge: "Die Datei ist zu groß. Maximale Größe: 50 MB.",
        fileEmpty: "Eine leere Datei kann nicht gesendet werden.",
        fileNotConnected: "Datei kann nicht gesendet werden — nicht mit Gesprächspartner verbunden.",
        fileTransferAborted: "Dateiübertragung abgebrochen — Gesprächspartner getrennt.",
        fileDownloadedByPeer: "Vom Gesprächspartner heruntergeladen",
        notifTitle: "Gesprächspartner verbunden",
        notifBody: "Ihr Gesprächspartner ist dem Kanal beigetreten",
        typingIndicator: "Gesprächspartner schreibt…",
        qrLabel: "QR-Code",
        qrHint: "Lassen Sie Ihren Gesprächspartner scannen, um das Passwort zu teilen",
        unsend: "Nachricht zurückziehen",
        unsent: "(Zurückgezogen)",
        copyLink: "Link kopieren",
        seen: "Gesehen",
        expired: "(Abgelaufen)",
        maskToggle: "Maskieren",
        expiryLabel: "Ablauftimer",
        expiryPrompt: "Löschen in:",
        modeRelay: "Relay (Server)",
        modeP2P: "Direkt (P2P)",
        modeRelayDesc: "Verschlüsselte Nachrichten werden über den Server weitergeleitet",
        modeP2PDesc: "Daten werden direkt zwischen Browsern gesendet, ohne den Server zu passieren",
        sysP2PConnected: "Direkte Verbindung hergestellt — Daten werden direkt zwischen Browsern gesendet.",
        sysP2PFallback: "Direkte Verbindung fehlgeschlagen — stattdessen verschlüsseltes Relay wird verwendet.",
        fileTooLargeP2P: "Die Datei ist zu groß. Maximale Größe: 500 MB.",
        statusConnectedP2P: "Gesprächspartner verbunden (P2P)",
        helpLabel: "Hilfe",
        helpClose: "Schließen",
        helpTitle: "Über NullPost",
        helpAboutTitle: "Über das Projekt",
        helpAboutText:
            "NullPost ist ein Werkzeug zum sicheren Teilen von Text und Dateien zwischen zwei Geräten. Öffnen " +
            "Sie NullPost auf zwei Computern, geben Sie dasselbe Passwort ein und teilen Sie los. So einfach " +
            "ist es.\n\n" +
            "Kein Konto nötig. Nichts wird auf dem Server gespeichert. Keine Protokolle werden geführt. Alles, " +
            "was Sie senden, wird in Ihrem Browser verschlüsselt, bevor es Ihr Gerät verlässt — der Server " +
            "sieht den Inhalt nie.\n\n" +
            "Sie können zwischen zwei Verbindungsmodi wählen: Relay sendet Daten verschlüsselt über den Server, " +
            "während Direkt (P2P) Daten direkt zwischen den beiden Browsern sendet, ohne den Server zu passieren. " +
            "In beiden Fällen sind alle Daten vollständig verschlüsselt.\n\n" +
            "NullPost unterstützt Textnachrichten, Dateien bis 50 MB (500 MB im P2P-Modus) und Bilder mit " +
            "Vorschau. Nachrichten können Selbstzerstörungstimer haben, zurückgezogen werden und Sie können " +
            "sehen, ob Ihr Gesprächspartner sie gelesen hat. Die Oberfläche ist in 28 Sprachen verfügbar " +
            "und funktioniert auf Desktop und Mobilgeräten.",
        helpPrivacyTitle: "Datenschutz",
        helpPrivacyText:
            "NullPost basiert auf einem Prinzip: Ihre Daten gehören nur Ihnen. Der Server dient nur als " +
            "Weiterleitung — er leitet verschlüsselte Pakete weiter und kann keinen Inhalt lesen, speichern " +
            "oder protokollieren.\n\n" +
            "Ihr Passwort verlässt nie Ihr Gerät. Es wird nur lokal in Ihrem Browser verwendet, um eine " +
            "sichere Verbindung herzustellen. Der Server sieht das Passwort nie.\n\n" +
            "Kein Konto erforderlich. Keine Tracking-Cookies. Keine Analyse oder Telemetrie wird gesammelt. " +
            "Keine IP-Adressen werden protokolliert. Der Server speichert nichts auf der Festplatte — alle " +
            "Informationen existieren nur im Arbeitsspeicher und gehen beim Neustart verloren.\n\n" +
            "Im Direkt (P2P)-Modus passiert der Inhalt nicht einmal den Server — er fließt direkt zwischen " +
            "den beiden Browsern.\n\n" +
            "NullPost ist vollständig Open Source. Sie können den Code überprüfen, Ihre eigene Instanz " +
            "betreiben und alle hier gemachten Aussagen selbst verifizieren.",
        helpSecurityTitle: "Sicherheit",
        helpSecurityText:
            "Alle Kommunikation in NullPost ist Ende-zu-Ende-verschlüsselt mit der eingebauten Kryptografie " +
            "des Browsers. Keine Drittanbieter-Bibliotheken werden für die Verschlüsselung verwendet.\n\n" +
            "Wenn Sie ein Passwort eingeben, erstellt Ihr Browser lokal drei Dinge: eine Kanal-ID, um Ihren " +
            "Gesprächspartner zu finden, einen Verschlüsselungsschlüssel und einen Fingerabdruck zur " +
            "Überprüfung. Das Passwort wird nie an den Server gesendet.\n\n" +
            "Nach der Verbindung erstellen die Browser einen einzigartigen Sitzungsschlüssel, der nur für " +
            "diese eine Sitzung gilt. Der Schlüssel wird danach verworfen. Das bedeutet: Selbst wenn jemand " +
            "später Ihr Passwort erhält, kann er vergangene Gespräche nicht entschlüsseln.\n\n" +
            "Jede Nachricht hat eine Sequenznummer, die verhindert, dass dieselbe Nachricht erneut abgespielt " +
            "wird. Verschlüsselungsschlüssel sind im Browser gesperrt und können nicht kopiert werden.\n\n" +
            "Nach der Verbindung wird ein Fingerabdruck angezeigt, den beide Parteien sehen können. Sie " +
            "sollten diesen mündlich oder über einen anderen Kanal bestätigen — wenn die Fingerabdrücke " +
            "unterschiedlich sind, könnte jemand versuchen mitzulesen.\n\n" +
            "Der Server begrenzt die Verbindungsrate, erlaubt nur zwei Teilnehmer pro Kanal und leitet nur " +
            "verschlüsselte Daten weiter. Der Server kann niemals gefälschte Systemnachrichten an die " +
            "Clients senden.",
        helpLinksTitle: "Quellcode & Hosting",
        helpLinksText: "Der Server wird in der EU (Schweden) gehostet. NullPost ist Open Source.",
    },
    pl: {
        title: "NullPost",
        subtitle: "Bezpieczny, szyfrowany kanał między dwoma komputerami",
        passwordLabel: "Wspólne hasło",
        passwordPlaceholder: "Wspólne hasło",
        connect: "Połącz",
        securityNote:
            "Twoje hasło nigdy nie opuszcza Twojego urządzenia. Wszystkie wiadomości są szyfrowane " +
            "w Twojej przeglądarce przed przesłaniem — serwer nie może ich odczytać. Po połączeniu " +
            "potwierdź odcisk palca ustnie z rozmówcą przed wysłaniem poufnych informacji.",
        securityNoteLabel: "Informacje o bezpieczeństwie",
        themeLabel: "Zmień motyw",
        langLabel: "Zmień język",
        statusWaiting: "Czekam na połączenie rozmówcy...",
        statusKeyExchange: "Wymiana kluczy sesji...",
        statusConnected: "Rozmówca połączony",
        statusPeerLeft: "Rozmówca rozłączony",
        statusReconnecting: "Ponowne łączenie...",
        statusDisconnected: "Rozłączono",
        fingerprintLabel: "Potwierdź z rozmówcą: ",
        disconnect: "Rozłącz",
        messageLabel: "Wiadomość",
        messagesLabel: "Wiadomości",
        messagePlaceholder: "Napisz wiadomość… (Enter aby wysłać, Shift+Enter dla nowej linii)",
        send: "Wyślij",
        you: "Ty",
        peer: "Rozmówca",
        copy: "Kopiuj",
        copied: "Skopiowano!",
        sysChannelOpen: "Kanał otwarty — czekam na połączenie rozmówcy.",
        sysPeerConnected: "Rozmówca połączony. Wymiana kluczy sesji...",
        sysKeyExchangeTimeout: "Przekroczono czas wymiany kluczy — rozłącz się i spróbuj ponownie.",
        sysPeerLeft: "Rozmówca rozłączony.",
        sysRejected: "Połączenie odrzucone — kanał ma już dwóch uczestników.",
        sysTimedOut: "Kanał zamknięty — zbyt długo nieaktywny.",
        errTimedOut: "Przekroczono czas — kanał zamknięty z powodu braku aktywności.",
        sysKeysExchanged: "Klucze sesji wymienione. Potwierdź odcisk palca ustnie przed wysłaniem poufnych informacji.",
        sysDecryptFailed: "[Nie można odszyfrować wiadomości — możliwa manipulacja lub błędny klucz]",
        sysKeyExchangeSendFailed: "[Błąd wysyłania klucza — rozłącz się i spróbuj ponownie]",
        sysKeyExchangeFailed: "[Wymiana kluczy nie powiodła się — błędne hasło lub zmanipulowane dane]",
        sysReconnectFailed: "Nie można ponownie się połączyć. Rozłącz się i spróbuj ponownie ręcznie.",
        sysEncryptFailed: "[Szyfrowanie nie powiodło się — wiadomość nie została wysłana]",
        errKeyExchangeTimeout: "Wymiana kluczy nie powiodła się. Druga strona nie odpowiedziała.",
        errChannelFull: "Kanał jest pełny — inne urządzenie jest już połączone z tym hasłem.",
        errKeyExchangeFailed: "Wymiana kluczy nie powiodła się.",
        errKeyExchangePassword: "Wymiana kluczy nie powiodła się — sprawdź, czy obie strony używają tego samego hasła.",
        passwordWeak: "Słabe hasło",
        passwordFair: "Przeciętne hasło",
        passwordGood: "Dobre hasło",
        passwordStrong: "Silne hasło",
        errNoPassword: "Proszę wpisać wspólne hasło.",
        errPasswordTooShort: "Hasło musi mieć co najmniej 6 znaków.",
        errDeriveFailed: "Wyprowadzanie klucza nie powiodło się — przeglądarka może nie obsługiwać Web Crypto API.",
        errKeygenFailed: "Nie można wygenerować kluczy sesji.",
        attachFile: "Załącz plik",
        dropFileHere: "Upuść plik(i) tutaj",
        fileSending: "Wysyłanie…",
        fileReceiving: "Odbieranie…",
        fileSent: "Wysłano",
        download: "Pobierz",
        fileTransferError: "Transfer pliku nie powiódł się",
        fileTooLarge: "Plik jest za duży. Maksymalny rozmiar to 50 MB.",
        fileEmpty: "Nie można wysłać pustego pliku.",
        fileNotConnected: "Nie można wysłać pliku — brak połączenia z rozmówcą.",
        fileTransferAborted: "Transfer pliku przerwany — rozmówca rozłączony.",
        fileDownloadedByPeer: "Pobrane przez rozmówcę",
        notifTitle: "Rozmówca połączony",
        notifBody: "Twój rozmówca dołączył do kanału",
        typingIndicator: "Rozmówca pisze…",
        qrLabel: "Kod QR",
        qrHint: "Pozwól rozmówcy zeskanować, aby udostępnić hasło",
        unsend: "Cofnij wysłanie",
        unsent: "(Cofnięto)",
        copyLink: "Kopiuj link",
        seen: "Widziano",
        expired: "(Wygasło)",
        maskToggle: "Maskuj",
        expiryLabel: "Timer wygaśnięcia",
        expiryPrompt: "Usuń za:",
        modeRelay: "Przekaźnik (serwer)",
        modeP2P: "Bezpośredni (P2P)",
        modeRelayDesc: "Zaszyfrowane wiadomości są przekazywane przez serwer",
        modeP2PDesc: "Dane są przesyłane bezpośrednio między przeglądarkami, z pominięciem serwera",
        sysP2PConnected: "Bezpośrednie połączenie nawiązane — dane są przesyłane między przeglądarkami.",
        sysP2PFallback: "Bezpośrednie połączenie nie powiodło się — zamiast tego używany jest szyfrowany przekaźnik.",
        fileTooLargeP2P: "Plik jest za duży. Maksymalny rozmiar to 500 MB.",
        statusConnectedP2P: "Rozmówca połączony (P2P)",
        helpLabel: "Pomoc",
        helpClose: "Zamknij",
        helpTitle: "O NullPost",
        helpAboutTitle: "O projekcie",
        helpAboutText:
            "NullPost to narzędzie do bezpiecznego udostępniania tekstu i plików między dwoma urządzeniami. " +
            "Otwórz NullPost na dwóch komputerach, wpisz to samo hasło i zacznij udostępniać. To takie proste.\n\n" +
            "Nie potrzebujesz konta. Nic nie jest przechowywane na serwerze. Żadne logi nie są prowadzone. " +
            "Wszystko, co wysyłasz, jest szyfrowane w przeglądarce, zanim opuści urządzenie — serwer nigdy " +
            "nie widzi treści.\n\n" +
            "Możesz wybrać między dwoma trybami połączenia: Przekaźnik wysyła dane zaszyfrowane przez serwer, " +
            "a Bezpośredni (P2P) wysyła dane prosto między przeglądarkami, z pominięciem serwera. W obu " +
            "przypadkach wszystkie dane są w pełni zaszyfrowane.\n\n" +
            "NullPost obsługuje wiadomości tekstowe, pliki do 50 MB (500 MB w trybie P2P) oraz obrazy z " +
            "podglądem. Wiadomości mogą mieć timery samozniszczenia, mogą być cofnięte, a Ty możesz zobaczyć, " +
            "czy rozmówca je przeczytał. Interfejs jest dostępny w 28 językach i działa na komputerze i telefonie.",
        helpPrivacyTitle: "Prywatność",
        helpPrivacyText:
            "NullPost opiera się na jednej zasadzie: Twoje dane należą tylko do Ciebie. Serwer działa tylko " +
            "jako przekaźnik — przekazuje zaszyfrowane pakiety i nie ma możliwości odczytania, przechowywania " +
            "ani logowania jakiejkolwiek treści.\n\n" +
            "Twoje hasło nigdy nie opuszcza urządzenia. Jest używane tylko lokalnie w przeglądarce do " +
            "nawiązania bezpiecznego połączenia. Serwer nigdy nie widzi hasła.\n\n" +
            "Konto nie jest wymagane. Żadne pliki cookie nie są używane do śledzenia. Żadna analityka ani " +
            "telemetria nie jest zbierana. Żadne adresy IP nie są logowane. Serwer nie zapisuje niczego na " +
            "dysku — wszystkie informacje istnieją tylko w pamięci i znikają po restarcie.\n\n" +
            "W trybie Bezpośrednim (P2P) treść nie przechodzi nawet przez serwer — przepływa bezpośrednio " +
            "między dwiema przeglądarkami.\n\n" +
            "NullPost jest w pełni otwartoźródłowy. Możesz sprawdzić kod, uruchomić własną instancję i " +
            "samodzielnie zweryfikować wszystkie twierdzenia.",
        helpSecurityTitle: "Bezpieczeństwo",
        helpSecurityText:
            "Cała komunikacja w NullPost jest szyfrowana end-to-end przy użyciu wbudowanej kryptografii " +
            "przeglądarki. Żadne zewnętrzne biblioteki nie są używane do szyfrowania.\n\n" +
            "Gdy wpisujesz hasło, przeglądarka tworzy lokalnie trzy rzeczy: ID kanału do znalezienia " +
            "rozmówcy, klucz szyfrowania i odcisk palca do weryfikacji. Hasło nigdy nie jest wysyłane " +
            "na serwer.\n\n" +
            "Po połączeniu obu stron przeglądarki tworzą unikalny klucz sesji, który obowiązuje tylko dla " +
            "tej jednej sesji. Klucz jest usuwany po zakończeniu. Oznacza to, że nawet jeśli ktoś później " +
            "zdobędzie Twoje hasło, nie będzie mógł odszyfrować wcześniejszych rozmów.\n\n" +
            "Każda wiadomość ma numer sekwencyjny, który zapobiega jej powtórnemu odtworzeniu. Klucze " +
            "szyfrowania są zablokowane w przeglądarce i nie mogą być skopiowane.\n\n" +
            "Po połączeniu wyświetlany jest odcisk palca, który obie strony mogą zobaczyć. Powinieneś go " +
            "potwierdzić ustnie lub innym kanałem — jeśli odciski się różnią, ktoś może próbować podsłuchiwać.\n\n" +
            "Serwer ogranicza liczbę połączeń, dopuszcza tylko dwóch uczestników na kanał i przekazuje " +
            "tylko zaszyfrowane dane. Serwer nigdy nie może wysyłać fałszywych wiadomości systemowych " +
            "do klientów.",
        helpLinksTitle: "Kod źródłowy i hosting",
        helpLinksText: "Serwer jest hostowany w UE (Szwecja). NullPost jest open source.",
    },
    it: {
        title: "NullPost",
        subtitle: "Canale sicuro e cifrato tra due computer",
        passwordLabel: "Password condivisa",
        passwordPlaceholder: "Password condivisa",
        connect: "Connetti",
        securityNote:
            "La tua password non lascia mai il tuo dispositivo. Tutti i messaggi vengono cifrati " +
            "nel tuo browser prima di essere inoltrati — il server non può leggerli. Dopo la " +
            "connessione, verifica l'impronta verbalmente con il tuo interlocutore prima di " +
            "inviare informazioni sensibili.",
        securityNoteLabel: "Informazioni sulla sicurezza",
        themeLabel: "Cambia tema",
        langLabel: "Cambia lingua",
        statusWaiting: "In attesa dell'interlocutore...",
        statusKeyExchange: "Scambio delle chiavi di sessione...",
        statusConnected: "Interlocutore connesso",
        statusPeerLeft: "Interlocutore disconnesso",
        statusReconnecting: "Riconnessione in corso...",
        statusDisconnected: "Disconnesso",
        fingerprintLabel: "Verifica con l'interlocutore: ",
        disconnect: "Disconnetti",
        messageLabel: "Messaggio",
        messagesLabel: "Messaggi",
        messagePlaceholder: "Scrivi un messaggio… (Invio per inviare, Shift+Invio per nuova riga)",
        send: "Invia",
        you: "Tu",
        peer: "Interlocutore",
        copy: "Copia",
        copied: "Copiato!",
        sysChannelOpen: "Canale aperto — in attesa dell'interlocutore.",
        sysPeerConnected: "Interlocutore connesso. Scambio delle chiavi di sessione...",
        sysKeyExchangeTimeout: "Timeout scambio chiavi — disconnetti e riprova.",
        sysPeerLeft: "Interlocutore disconnesso.",
        sysRejected: "Connessione rifiutata — il canale ha già due partecipanti.",
        sysTimedOut: "Canale chiuso — inattivo per troppo tempo.",
        errTimedOut: "Timeout — canale chiuso per inattività.",
        sysKeysExchanged: "Chiavi di sessione scambiate. Verifica l'impronta verbalmente prima di inviare informazioni sensibili.",
        sysDecryptFailed: "[Impossibile decifrare il messaggio — possibile manomissione o chiave errata]",
        sysKeyExchangeSendFailed: "[Errore nell'invio della chiave — disconnetti e riprova]",
        sysKeyExchangeFailed: "[Scambio chiavi fallito — password errata o dati manomessi]",
        sysReconnectFailed: "Impossibile riconnettersi. Disconnetti e riprova manualmente.",
        sysEncryptFailed: "[Cifratura fallita — messaggio non inviato]",
        errKeyExchangeTimeout: "Scambio chiavi fallito. L'altra parte non ha risposto.",
        errChannelFull: "Il canale è pieno — un altro dispositivo è già connesso con questa password.",
        errKeyExchangeFailed: "Scambio chiavi fallito.",
        errKeyExchangePassword: "Scambio chiavi fallito — verifica che entrambe le parti usino la stessa password.",
        passwordWeak: "Password debole",
        passwordFair: "Password discreta",
        passwordGood: "Password buona",
        passwordStrong: "Password forte",
        errNoPassword: "Inserisci una password condivisa.",
        errPasswordTooShort: "La password deve contenere almeno 6 caratteri.",
        errDeriveFailed: "Derivazione della chiave fallita — il tuo browser potrebbe non supportare la Web Crypto API.",
        errKeygenFailed: "Impossibile generare le chiavi di sessione.",
        attachFile: "Allega file",
        dropFileHere: "Trascina qui i file",
        fileSending: "Invio in corso…",
        fileReceiving: "Ricezione in corso…",
        fileSent: "Inviato",
        download: "Scarica",
        fileTransferError: "Trasferimento file fallito",
        fileTooLarge: "Il file è troppo grande. Dimensione massima: 50 MB.",
        fileEmpty: "Impossibile inviare un file vuoto.",
        fileNotConnected: "Impossibile inviare il file — non connesso all'interlocutore.",
        fileTransferAborted: "Trasferimento file interrotto — interlocutore disconnesso.",
        fileDownloadedByPeer: "Scaricato dall'interlocutore",
        notifTitle: "Interlocutore connesso",
        notifBody: "Il tuo interlocutore si è unito al canale",
        typingIndicator: "L'interlocutore sta scrivendo…",
        qrLabel: "Codice QR",
        qrHint: "Lascia che il tuo interlocutore esegua la scansione per condividere la password",
        unsend: "Annulla invio",
        unsent: "(Annullato)",
        copyLink: "Copia link",
        seen: "Visto",
        expired: "(Scaduto)",
        maskToggle: "Maschera",
        expiryLabel: "Timer di scadenza",
        expiryPrompt: "Elimina in:",
        modeRelay: "Relay (server)",
        modeP2P: "Diretto (P2P)",
        modeRelayDesc: "I messaggi cifrati vengono inoltrati tramite il server",
        modeP2PDesc: "I dati vengono inviati direttamente tra i browser, senza passare per il server",
        sysP2PConnected: "Connessione diretta stabilita — i dati vengono inviati tra i browser.",
        sysP2PFallback: "Connessione diretta fallita — utilizzo del relay cifrato al suo posto.",
        fileTooLargeP2P: "Il file è troppo grande. Dimensione massima: 500 MB.",
        statusConnectedP2P: "Interlocutore connesso (P2P)",
        helpLabel: "Aiuto",
        helpClose: "Chiudi",
        helpTitle: "Informazioni su NullPost",
        helpAboutTitle: "Il progetto",
        helpAboutText:
            "NullPost è uno strumento per condividere testo e file in modo sicuro tra due dispositivi. Apri " +
            "NullPost su due computer, inserisci la stessa password e inizia a condividere. È così semplice.\n\n" +
            "Nessun account necessario. Nulla viene memorizzato sul server. Nessun registro viene conservato. " +
            "Tutto ciò che invii viene cifrato nel tuo browser prima di lasciare il dispositivo — il server " +
            "non vede mai il contenuto.\n\n" +
            "Puoi scegliere tra due modalità di connessione: Relay invia dati cifrati attraverso il server, " +
            "mentre Diretto (P2P) invia dati direttamente tra i due browser senza passare per il server. In " +
            "entrambi i casi, tutti i dati sono completamente cifrati.\n\n" +
            "NullPost supporta messaggi di testo, file fino a 50 MB (500 MB in modalità P2P) e immagini con " +
            "anteprima. I messaggi possono avere timer di autodistruzione, possono essere ritirati e puoi " +
            "vedere se il tuo interlocutore li ha letti. L'interfaccia è disponibile in 28 lingue e funziona " +
            "su desktop e dispositivi mobili.",
        helpPrivacyTitle: "Privacy",
        helpPrivacyText:
            "NullPost si basa su un principio: i tuoi dati appartengono solo a te. Il server funziona solo " +
            "come relay — inoltra pacchetti cifrati e non può leggere, memorizzare o registrare alcun " +
            "contenuto.\n\n" +
            "La tua password non lascia mai il tuo dispositivo. Viene utilizzata solo localmente nel browser " +
            "per stabilire una connessione sicura. Il server non vede mai la password.\n\n" +
            "Nessun account richiesto. Nessun cookie di tracciamento. Nessuna analisi o telemetria raccolta. " +
            "Nessun indirizzo IP registrato. Il server non salva nulla su disco — tutte le informazioni " +
            "esistono solo in memoria e scompaiono al riavvio.\n\n" +
            "In modalità Diretto (P2P), il contenuto non passa nemmeno attraverso il server — fluisce " +
            "direttamente tra i due browser.\n\n" +
            "NullPost è completamente open source. Puoi ispezionare il codice, eseguire la tua istanza " +
            "e verificare personalmente ogni affermazione fatta qui.",
        helpSecurityTitle: "Sicurezza",
        helpSecurityText:
            "Tutta la comunicazione in NullPost è cifrata end-to-end con la crittografia integrata del " +
            "browser. Nessuna libreria di terze parti viene utilizzata per la cifratura.\n\n" +
            "Quando inserisci una password, il tuo browser crea localmente tre cose: un ID canale per trovare " +
            "il tuo interlocutore, una chiave di cifratura e un'impronta per la verifica. La password non " +
            "viene mai inviata al server.\n\n" +
            "Dopo che entrambi si sono connessi, i browser creano una chiave di sessione unica valida solo " +
            "per quella sessione. La chiave viene eliminata successivamente. Questo significa che anche se " +
            "qualcuno ottiene la tua password in seguito, non potrà decifrare le conversazioni passate.\n\n" +
            "Ogni messaggio ha un numero di sequenza che impedisce la riproduzione. Le chiavi di cifratura " +
            "sono bloccate nel browser e non possono essere copiate.\n\n" +
            "Dopo la connessione viene mostrata un'impronta che entrambe le parti possono vedere. Dovresti " +
            "confermarla verbalmente o attraverso un altro canale — se le impronte differiscono, qualcuno " +
            "potrebbe tentare di intercettare.\n\n" +
            "Il server limita le connessioni, consente solo due partecipanti per canale e inoltra solo dati " +
            "cifrati. Il server non può mai inviare falsi messaggi di sistema ai client.",
        helpLinksTitle: "Codice sorgente e hosting",
        helpLinksText: "Il server è ospitato nell'UE (Svezia). NullPost è open source.",
    },
    uk: {
        title: "NullPost",
        subtitle: "Безпечний, зашифрований канал між двома комп'ютерами",
        passwordLabel: "Спільний пароль",
        passwordPlaceholder: "Спільний пароль",
        connect: "Підключитися",
        securityNote:
            "Ваш пароль ніколи не залишає ваш пристрій. Усі повідомлення шифруються у вашому " +
            "браузері перед передачею — сервер не може їх прочитати. Після підключення підтвердьте " +
            "відбиток усно з вашим співрозмовником перед надсиланням конфіденційної інформації.",
        securityNoteLabel: "Інформація про безпеку",
        themeLabel: "Змінити тему",
        langLabel: "Змінити мову",
        statusWaiting: "Очікування підключення співрозмовника...",
        statusKeyExchange: "Обмін сесійними ключами...",
        statusConnected: "Співрозмовник підключений",
        statusPeerLeft: "Співрозмовник відключився",
        statusReconnecting: "Повторне підключення...",
        statusDisconnected: "Відключено",
        fingerprintLabel: "Підтвердьте зі співрозмовником: ",
        disconnect: "Відключитися",
        messageLabel: "Повідомлення",
        messagesLabel: "Повідомлення",
        messagePlaceholder: "Написати повідомлення… (Enter для надсилання, Shift+Enter для нового рядка)",
        send: "Надіслати",
        you: "Ви",
        peer: "Співрозмовник",
        copy: "Копіювати",
        copied: "Скопійовано!",
        sysChannelOpen: "Канал відкрито — очікування підключення співрозмовника.",
        sysPeerConnected: "Співрозмовник підключений. Обмін сесійними ключами...",
        sysKeyExchangeTimeout: "Час обміну ключами вичерпано — відключіться і спробуйте знову.",
        sysPeerLeft: "Співрозмовник відключився.",
        sysRejected: "Підключення відхилено — канал вже має двох учасників.",
        sysTimedOut: "Канал закрито — занадто довго неактивний.",
        errTimedOut: "Час очікування вичерпано — канал закрито через неактивність.",
        sysKeysExchanged: "Сесійні ключі обмінено. Підтвердьте відбиток усно перед надсиланням конфіденційної інформації.",
        sysDecryptFailed: "[Не вдалося розшифрувати повідомлення — можливе втручання або невірний ключ]",
        sysKeyExchangeSendFailed: "[Помилка надсилання ключа — відключіться і спробуйте знову]",
        sysKeyExchangeFailed: "[Обмін ключами не вдався — невірний пароль або підроблені дані]",
        sysReconnectFailed: "Не вдалося повторно підключитися. Відключіться і спробуйте знову вручну.",
        sysEncryptFailed: "[Шифрування не вдалося — повідомлення не надіслано]",
        errKeyExchangeTimeout: "Обмін ключами не вдався. Інша сторона не відповіла.",
        errChannelFull: "Канал заповнений — інший пристрій вже підключений з цим паролем.",
        errKeyExchangeFailed: "Обмін ключами не вдався.",
        errKeyExchangePassword: "Обмін ключами не вдався — перевірте, що обидві сторони використовують однаковий пароль.",
        passwordWeak: "Слабкий пароль",
        passwordFair: "Середній пароль",
        passwordGood: "Хороший пароль",
        passwordStrong: "Надійний пароль",
        errNoPassword: "Будь ласка, введіть спільний пароль.",
        errPasswordTooShort: "Пароль має містити щонайменше 6 символів.",
        errDeriveFailed: "Похідна ключа не вдалася — ваш браузер може не підтримувати Web Crypto API.",
        errKeygenFailed: "Не вдалося згенерувати сесійні ключі.",
        attachFile: "Прикріпити файл",
        dropFileHere: "Перетягніть файл(и) сюди",
        fileSending: "Надсилання…",
        fileReceiving: "Отримання…",
        fileSent: "Надіслано",
        download: "Завантажити",
        fileTransferError: "Передача файлу не вдалася",
        fileTooLarge: "Файл занадто великий. Максимальний розмір: 50 МБ.",
        fileEmpty: "Неможливо надіслати порожній файл.",
        fileNotConnected: "Неможливо надіслати файл — немає підключення до співрозмовника.",
        fileTransferAborted: "Передача файлу перервана — співрозмовник відключився.",
        fileDownloadedByPeer: "Завантажено співрозмовником",
        notifTitle: "Співрозмовник підключився",
        notifBody: "Ваш співрозмовник приєднався до каналу",
        typingIndicator: "Співрозмовник пише…",
        qrLabel: "QR-код",
        qrHint: "Дозвольте співрозмовнику відсканувати для обміну паролем",
        unsend: "Скасувати надсилання",
        unsent: "(Скасовано)",
        copyLink: "Копіювати посилання",
        seen: "Переглянуто",
        expired: "(Прострочено)",
        maskToggle: "Сховати",
        expiryLabel: "Таймер закінчення",
        expiryPrompt: "Видалити через:",
        modeRelay: "Ретранслятор (сервер)",
        modeP2P: "Прямий (P2P)",
        modeRelayDesc: "Зашифровані повідомлення передаються через сервер",
        modeP2PDesc: "Дані надсилаються безпосередньо між браузерами, минаючи сервер",
        sysP2PConnected: "Пряме з'єднання встановлено — дані надсилаються між браузерами.",
        sysP2PFallback: "Пряме з'єднання не вдалося — замість цього використовується зашифрований ретранслятор.",
        fileTooLargeP2P: "Файл занадто великий. Максимальний розмір: 500 МБ.",
        statusConnectedP2P: "Співрозмовник підключений (P2P)",
        helpLabel: "Довідка",
        helpClose: "Закрити",
        helpTitle: "Про NullPost",
        helpAboutTitle: "Про проєкт",
        helpAboutText:
            "NullPost — це інструмент для безпечного обміну текстом і файлами між двома пристроями. Відкрийте " +
            "NullPost на двох комп'ютерах, введіть однаковий пароль і починайте ділитися. Ось і все.\n\n" +
            "Обліковий запис не потрібен. На сервері нічого не зберігається. Журнали не ведуться. Все, що ви " +
            "надсилаєте, шифрується у вашому браузері, перш ніж покинути пристрій — сервер ніколи не бачить вміст.\n\n" +
            "Ви можете обрати між двома режимами з'єднання: Ретранслятор надсилає зашифровані дані через сервер, " +
            "а Прямий (P2P) надсилає дані безпосередньо між двома браузерами, минаючи сервер. У будь-якому " +
            "випадку всі дані повністю зашифровані.\n\n" +
            "NullPost підтримує текстові повідомлення, файли до 50 МБ (500 МБ у режимі P2P) та зображення з " +
            "попереднім переглядом. Повідомлення можуть мати таймер самознищення, їх можна скасувати, і ви " +
            "можете бачити, чи прочитав їх співрозмовник. Інтерфейс доступний 28 мовами і працює на комп'ютері " +
            "та мобільному.",
        helpPrivacyTitle: "Конфіденційність",
        helpPrivacyText:
            "NullPost побудований на одному принципі: ваші дані належать тільки вам. Сервер виступає лише як " +
            "ретранслятор — він пересилає зашифровані пакети і не може читати, зберігати чи записувати " +
            "будь-який вміст.\n\n" +
            "Ваш пароль ніколи не залишає ваш пристрій. Він використовується лише локально у вашому браузері " +
            "для встановлення безпечного з'єднання. Сервер ніколи не бачить пароль.\n\n" +
            "Обліковий запис не потрібен. Файли cookie для відстеження не використовуються. Аналітика та " +
            "телеметрія не збираються. IP-адреси не записуються. Сервер нічого не зберігає на диск — вся " +
            "інформація існує лише в пам'яті й зникає при перезапуску.\n\n" +
            "У режимі Прямий (P2P) вміст навіть не проходить через сервер — він передається безпосередньо " +
            "між двома браузерами.\n\n" +
            "NullPost повністю відкритий. Ви можете перевірити код, запустити власний екземпляр і самостійно " +
            "перевірити все, що тут стверджується.",
        helpSecurityTitle: "Безпека",
        helpSecurityText:
            "Вся комунікація в NullPost зашифрована наскрізь за допомогою вбудованої криптографії браузера. " +
            "Жодні сторонні бібліотеки не використовуються для шифрування.\n\n" +
            "Коли ви вводите пароль, ваш браузер створює локально три речі: ідентифікатор каналу для пошуку " +
            "співрозмовника, ключ шифрування та відбиток для перевірки. Пароль ніколи не надсилається " +
            "на сервер.\n\n" +
            "Після підключення обох сторін браузери створюють унікальний сесійний ключ, який діє лише для " +
            "цієї сесії. Ключ видаляється після завершення. Це означає, що навіть якщо хтось пізніше " +
            "отримає ваш пароль, він не зможе розшифрувати попередні розмови.\n\n" +
            "Кожне повідомлення має порядковий номер, який запобігає повторному відтворенню. Ключі шифрування " +
            "заблоковані в браузері й не можуть бути скопійовані.\n\n" +
            "Після підключення відображається відбиток, який бачать обидві сторони. Вам слід підтвердити " +
            "його усно або іншим каналом — якщо відбитки різні, хтось може намагатися підслуховувати.\n\n" +
            "Сервер обмежує кількість з'єднань, дозволяє лише двох учасників на канал і пересилає лише " +
            "зашифровані дані. Сервер ніколи не може надсилати підроблені системні повідомлення клієнтам.",
        helpLinksTitle: "Вихідний код і хостинг",
        helpLinksText: "Сервер розміщено в ЄС (Швеція). NullPost — відкритий код.",
    },
    pt: {
        title: "NullPost",
        subtitle: "Canal seguro e encriptado entre dois computadores",
        passwordLabel: "Palavra-passe partilhada",
        passwordPlaceholder: "Palavra-passe partilhada",
        connect: "Ligar",
        securityNote:
            "A palavra-passe nunca sai do seu dispositivo. Todas as mensagens são encriptadas no seu browser " +
            "antes de serem retransmitidas — o servidor não as consegue ler. Após a ligação, confirme " +
            "o fingerprint com o seu interlocutor verbalmente antes de enviar informação sensível.",
        securityNoteLabel: "Informação de segurança",
        themeLabel: "Alternar tema",
        langLabel: "Alternar idioma",
        statusWaiting: "À espera que o interlocutor se ligue...",
        statusKeyExchange: "A trocar chaves de sessão...",
        statusConnected: "Interlocutor ligado",
        statusPeerLeft: "Interlocutor desligado",
        statusReconnecting: "A religar...",
        statusDisconnected: "Desligado",
        fingerprintLabel: "Confirmar com o interlocutor: ",
        disconnect: "Desligar",
        messageLabel: "Mensagem",
        messagesLabel: "Mensagens",
        messagePlaceholder: "Escreva uma mensagem… (Enter para enviar, Shift+Enter para nova linha)",
        send: "Enviar",
        you: "Você",
        peer: "Interlocutor",
        copy: "Copiar",
        copied: "Copiado!",
        sysChannelOpen: "Canal aberto — à espera que o interlocutor se ligue.",
        sysPeerConnected: "Interlocutor ligado. A trocar chaves de sessão...",
        sysKeyExchangeTimeout: "Tempo esgotado na troca de chaves — desligue e tente novamente.",
        sysPeerLeft: "Interlocutor desligado.",
        sysRejected: "Ligação rejeitada — o canal já tem dois participantes.",
        sysTimedOut: "Canal fechado — inativo por demasiado tempo.",
        errTimedOut: "Tempo esgotado — o canal foi fechado por inatividade.",
        sysKeysExchanged: "Chaves de sessão trocadas. Confirme o fingerprint verbalmente antes de enviar informação sensível.",
        sysDecryptFailed: "[Não foi possível desencriptar a mensagem — possível adulteração ou chave errada]",
        sysKeyExchangeSendFailed: "[Erro ao enviar a chave — desligue e tente novamente]",
        sysKeyExchangeFailed: "[Troca de chaves falhou — palavra-passe errada ou dados adulterados]",
        sysReconnectFailed: "Não foi possível religar. Desligue e tente novamente manualmente.",
        sysEncryptFailed: "[Encriptação falhou — mensagem não enviada]",
        errKeyExchangeTimeout: "Troca de chaves falhou. O interlocutor não respondeu.",
        errChannelFull: "O canal está cheio — outro dispositivo já está ligado com esta palavra-passe.",
        errKeyExchangeFailed: "Troca de chaves falhou.",
        errKeyExchangePassword: "Troca de chaves falhou — confirme que ambos usam a mesma palavra-passe.",
        passwordWeak: "Palavra-passe fraca",
        passwordFair: "Palavra-passe razoável",
        passwordGood: "Palavra-passe boa",
        passwordStrong: "Palavra-passe forte",
        errNoPassword: "Por favor introduza uma palavra-passe partilhada.",
        errPasswordTooShort: "A palavra-passe tem de ter pelo menos 6 caracteres.",
        errDeriveFailed: "Derivação de chave falhou — o seu browser pode não suportar a Web Crypto API.",
        errKeygenFailed: "Não foi possível gerar as chaves de sessão.",
        attachFile: "Anexar ficheiro",
        dropFileHere: "Largue ficheiro(s) aqui",
        fileSending: "A enviar…",
        fileReceiving: "A receber…",
        fileSent: "Enviado",
        download: "Transferir",
        fileTransferError: "Transferência de ficheiro falhou",
        fileTooLarge: "O ficheiro é demasiado grande. O tamanho máximo é 50 MB.",
        fileEmpty: "Não é possível enviar um ficheiro vazio.",
        fileNotConnected: "Não é possível enviar ficheiro — não está ligado ao interlocutor.",
        fileTransferAborted: "Transferência de ficheiro cancelada — interlocutor desligado.",
        fileDownloadedByPeer: "Transferido pelo interlocutor",
        notifTitle: "Interlocutor ligado",
        notifBody: "O interlocutor ligou-se ao canal",
        typingIndicator: "O interlocutor está a escrever…",
        qrLabel: "Código QR",
        qrHint: "Peça ao interlocutor que leia para partilhar a palavra-passe",
        unsend: "Retirar",
        unsent: "(Retirado)",
        copyLink: "Copiar ligação",
        seen: "Visto",
        expired: "(Expirado)",
        maskToggle: "Mascarar",
        expiryLabel: "Temporizador de expiração",
        expiryPrompt: "Eliminar em:",
        modeRelay: "Retransmissão (servidor)",
        modeP2P: "Direto (P2P)",
        modeRelayDesc: "As mensagens são retransmitidas encriptadas através do servidor",
        modeP2PDesc: "Os dados são enviados diretamente entre os browsers, sem passar pelo servidor",
        sysP2PConnected: "Ligação direta estabelecida — os dados são enviados diretamente entre os browsers.",
        sysP2PFallback: "Ligação direta falhou — a usar retransmissão encriptada.",
        fileTooLargeP2P: "O ficheiro é demasiado grande. O tamanho máximo é 500 MB.",
        statusConnectedP2P: "Interlocutor ligado (P2P)",
        helpLabel: "Ajuda",
        helpClose: "Fechar",
        helpTitle: "Sobre o NullPost",
        helpAboutTitle: "Sobre o projeto",
        helpAboutText:
            "O NullPost é uma ferramenta para partilha segura de texto e ficheiros entre dois dispositivos. Abra o NullPost " +
            "em dois computadores, introduza a mesma palavra-passe e comece a partilhar. É simples.\n\n" +
            "Não precisa de conta. Nada é armazenado no servidor. Não há registos. Tudo o que enviar é " +
            "encriptado no seu browser antes de sair do dispositivo — o servidor nunca vê o conteúdo.\n\n" +
            "Pode escolher entre dois modos de ligação: Retransmissão envia dados encriptados através do servidor, " +
            "enquanto Direto (P2P) envia dados diretamente entre os dois browsers sem passar pelo servidor. Em " +
            "qualquer modo, todos os dados estão completamente encriptados.\n\n" +
            "O NullPost suporta mensagens de texto, ficheiros até 50 MB (500 MB em modo P2P) e imagens com " +
            "pré-visualização. As mensagens podem ter um temporizador de autodestruição, podem ser retiradas e pode " +
            "ver se o interlocutor as leu. A interface está disponível em 28 idiomas e funciona em computador e telemóvel.",
        helpPrivacyTitle: "Privacidade",
        helpPrivacyText:
            "O NullPost foi construído em torno de um princípio: os seus dados pertencem-lhe a si. O servidor funciona " +
            "apenas como retransmissor — reencaminha pacotes encriptados e não tem capacidade para ler, armazenar ou " +
            "registar qualquer conteúdo.\n\n" +
            "A sua palavra-passe nunca sai do seu dispositivo. É usada apenas localmente no browser para estabelecer " +
            "uma ligação segura. O servidor nunca vê a palavra-passe.\n\n" +
            "Não é necessária conta. Não são usados cookies de rastreio. Não há análise de dados nem telemetria. " +
            "Os endereços IP não são registados. O servidor não armazena nada em disco — toda a informação existe " +
            "apenas em memória e desaparece quando o servidor é reiniciado.\n\n" +
            "No modo Direto (P2P) o conteúdo nem sequer passa pelo servidor — é enviado diretamente entre os dois browsers.\n\n" +
            "O NullPost é completamente open source. Pode inspecionar o código, executar a sua própria instância e " +
            "verificar tudo o que aqui é afirmado.",
        helpSecurityTitle: "Segurança",
        helpSecurityText:
            "Toda a comunicação no NullPost é encriptada de ponta a ponta usando criptografia nativa do browser. " +
            "Não são usadas bibliotecas de terceiros para encriptação.\n\n" +
            "Quando introduz uma palavra-passe, o seu browser cria localmente três elementos: um ID de canal para " +
            "encontrar o interlocutor, uma chave de encriptação e um fingerprint para verificação. A palavra-passe " +
            "nunca é enviada para o servidor.\n\n" +
            "Após ambas as partes se ligarem, os browsers criam uma chave de sessão única que só é válida para essa " +
            "sessão. A chave é descartada depois. Isto significa que mesmo que alguém obtenha a sua palavra-passe " +
            "mais tarde, não consegue desencriptar conversas anteriores.\n\n" +
            "Cada mensagem tem um número de sequência que impede a repetição. As chaves de encriptação estão " +
            "bloqueadas no browser e não podem ser copiadas.\n\n" +
            "Após a ligação é apresentado um fingerprint que ambas as partes veem. Deve confirmá-lo verbalmente ou " +
            "por outro canal — se os fingerprints forem diferentes, alguém pode estar a intercetar a comunicação.\n\n" +
            "O servidor limita o número de ligações, permite apenas dois participantes por canal e só retransmite " +
            "dados encriptados. O servidor nunca pode enviar mensagens de sistema falsas aos clientes.",
        helpLinksTitle: "Código fonte e alojamento",
        helpLinksText: "O servidor está alojado na UE (Suécia). O NullPost é open source.",
    },
    nl: {
        title: "NullPost",
        subtitle: "Beveiligd, versleuteld kanaal tussen twee computers",
        passwordLabel: "Gedeeld wachtwoord",
        passwordPlaceholder: "Gedeeld wachtwoord",
        connect: "Verbinden",
        securityNote:
            "Het wachtwoord verlaat nooit uw apparaat. Alle berichten worden versleuteld in uw browser " +
            "voordat ze worden doorgestuurd — de server kan ze niet lezen. Bevestig na verbinding " +
            "de vingerafdruk mondeling met uw gesprekspartner voordat u gevoelige informatie stuurt.",
        securityNoteLabel: "Beveiligingsinformatie",
        themeLabel: "Thema wisselen",
        langLabel: "Taal wisselen",
        statusWaiting: "Wachten tot gesprekspartner verbindt...",
        statusKeyExchange: "Sessiesleutels uitwisselen...",
        statusConnected: "Gesprekspartner verbonden",
        statusPeerLeft: "Gesprekspartner verbroken",
        statusReconnecting: "Opnieuw verbinden...",
        statusDisconnected: "Verbroken",
        fingerprintLabel: "Bevestig met gesprekspartner: ",
        disconnect: "Verbreken",
        messageLabel: "Bericht",
        messagesLabel: "Berichten",
        messagePlaceholder: "Typ een bericht… (Enter om te sturen, Shift+Enter voor nieuwe regel)",
        send: "Sturen",
        you: "U",
        peer: "Gesprekspartner",
        copy: "Kopiëren",
        copied: "Gekopieerd!",
        sysChannelOpen: "Kanaal open — wachten tot gesprekspartner verbindt.",
        sysPeerConnected: "Gesprekspartner verbonden. Sessiesleutels uitwisselen...",
        sysKeyExchangeTimeout: "Sleuteluitwisseling verlopen — verbreek de verbinding en probeer opnieuw.",
        sysPeerLeft: "Gesprekspartner verbroken.",
        sysRejected: "Verbinding geweigerd — het kanaal heeft al twee deelnemers.",
        sysTimedOut: "Kanaal gesloten — te lang inactief.",
        errTimedOut: "Time-out — het kanaal is gesloten wegens inactiviteit.",
        sysKeysExchanged: "Sessiesleutels uitgewisseld. Bevestig de vingerafdruk mondeling voordat u gevoelige informatie stuurt.",
        sysDecryptFailed: "[Kon bericht niet ontsleutelen — mogelijke manipulatie of verkeerde sleutel]",
        sysKeyExchangeSendFailed: "[Fout bij verzenden van sleutel — verbreek de verbinding en probeer opnieuw]",
        sysKeyExchangeFailed: "[Sleuteluitwisseling mislukt — verkeerd wachtwoord of gemanipuleerde data]",
        sysReconnectFailed: "Opnieuw verbinden mislukt. Verbreek de verbinding en probeer handmatig opnieuw.",
        sysEncryptFailed: "[Versleuteling mislukt — bericht niet verzonden]",
        errKeyExchangeTimeout: "Sleuteluitwisseling mislukt. Gesprekspartner reageerde niet.",
        errChannelFull: "Het kanaal is vol — een ander apparaat is al verbonden met dit wachtwoord.",
        errKeyExchangeFailed: "Sleuteluitwisseling mislukt.",
        errKeyExchangePassword: "Sleuteluitwisseling mislukt — controleer of beiden hetzelfde wachtwoord gebruiken.",
        passwordWeak: "Zwak wachtwoord",
        passwordFair: "Matig wachtwoord",
        passwordGood: "Goed wachtwoord",
        passwordStrong: "Sterk wachtwoord",
        errNoPassword: "Voer een gedeeld wachtwoord in.",
        errPasswordTooShort: "Het wachtwoord moet minimaal 6 tekens bevatten.",
        errDeriveFailed: "Sleutelafleiding mislukt — uw browser ondersteunt mogelijk de Web Crypto API niet.",
        errKeygenFailed: "Kon geen sessiesleutels genereren.",
        attachFile: "Bestand bijvoegen",
        dropFileHere: "Zet bestand(en) hier neer",
        fileSending: "Verzenden…",
        fileReceiving: "Ontvangen…",
        fileSent: "Verzonden",
        download: "Downloaden",
        fileTransferError: "Bestandsoverdracht mislukt",
        fileTooLarge: "Het bestand is te groot. Maximale grootte is 50 MB.",
        fileEmpty: "Kan geen leeg bestand verzenden.",
        fileNotConnected: "Kan geen bestand verzenden — niet verbonden met gesprekspartner.",
        fileTransferAborted: "Bestandsoverdracht afgebroken — gesprekspartner verbroken.",
        fileDownloadedByPeer: "Gedownload door gesprekspartner",
        notifTitle: "Gesprekspartner verbonden",
        notifBody: "Gesprekspartner heeft verbinding gemaakt met het kanaal",
        typingIndicator: "Gesprekspartner typt…",
        qrLabel: "QR-code",
        qrHint: "Laat gesprekspartner scannen om wachtwoord te delen",
        unsend: "Intrekken",
        unsent: "(Ingetrokken)",
        copyLink: "Link kopiëren",
        seen: "Gezien",
        expired: "(Verlopen)",
        maskToggle: "Maskeren",
        expiryLabel: "Verlooptimer",
        expiryPrompt: "Verwijder over:",
        modeRelay: "Relay (server)",
        modeP2P: "Direct (P2P)",
        modeRelayDesc: "Berichten worden versleuteld doorgestuurd via de server",
        modeP2PDesc: "Data wordt rechtstreeks tussen browsers verzonden, zonder de server te passeren",
        sysP2PConnected: "Directe verbinding tot stand gebracht — data wordt rechtstreeks tussen browsers verzonden.",
        sysP2PFallback: "Directe verbinding mislukt — gebruik versleutelde relay.",
        fileTooLargeP2P: "Het bestand is te groot. Maximale grootte is 500 MB.",
        statusConnectedP2P: "Gesprekspartner verbonden (P2P)",
        helpLabel: "Help",
        helpClose: "Sluiten",
        helpTitle: "Over NullPost",
        helpAboutTitle: "Over het project",
        helpAboutText:
            "NullPost is een hulpmiddel voor veilig delen van tekst en bestanden tussen twee apparaten. Open NullPost op " +
            "twee computers, voer hetzelfde wachtwoord in en begin met delen. Zo eenvoudig is het.\n\n" +
            "U hebt geen account nodig. Er wordt niets opgeslagen op de server. Er worden geen logboeken bijgehouden. " +
            "Alles wat u verstuurt wordt versleuteld in uw browser voordat het het apparaat verlaat — de server ziet " +
            "de inhoud nooit.\n\n" +
            "U kunt kiezen tussen twee verbindingsmodi: Relay stuurt versleutelde data via de server, terwijl Direct " +
            "(P2P) data rechtstreeks tussen de twee browsers stuurt zonder de server te passeren. In beide gevallen " +
            "zijn alle data volledig versleuteld.\n\n" +
            "NullPost ondersteunt tekstberichten, bestanden tot 50 MB (500 MB in P2P-modus) en afbeeldingen met " +
            "voorvertoning. Berichten kunnen een zelfvernietigingstimer hebben, kunnen worden ingetrokken en u kunt " +
            "zien of de gesprekspartner ze heeft gelezen. De interface is beschikbaar in 28 talen en werkt op desktop en mobiel.",
        helpPrivacyTitle: "Privacy",
        helpPrivacyText:
            "NullPost is gebouwd rond één principe: uw data is van u. De server fungeert alleen als doorstuurpunt — " +
            "het stuurt versleutelde pakketten door en kan de inhoud niet lezen, opslaan of registreren.\n\n" +
            "Uw wachtwoord verlaat nooit uw apparaat. Het wordt alleen lokaal in de browser gebruikt om een beveiligde " +
            "verbinding tot stand te brengen. De server ziet het wachtwoord nooit.\n\n" +
            "Er is geen account nodig. Er worden geen tracking cookies gebruikt. Er is geen analyse of telemetrie. " +
            "IP-adressen worden niet geregistreerd. De server slaat niets op schijf op — alle informatie bestaat " +
            "alleen in geheugen en verdwijnt bij herstart.\n\n" +
            "In Direct (P2P)-modus passeert de inhoud de server niet eens — het wordt rechtstreeks tussen de twee browsers verzonden.\n\n" +
            "NullPost is volledig open source. U kunt de code inspecteren, uw eigen instantie uitvoeren en alles wat " +
            "hier wordt beweerd zelf verifiëren.",
        helpSecurityTitle: "Beveiliging",
        helpSecurityText:
            "Alle communicatie in NullPost is end-to-end versleuteld met ingebouwde browsercryptografie. Er worden " +
            "geen externe bibliotheken gebruikt voor versleuteling.\n\n" +
            "Wanneer u een wachtwoord invoert, maakt uw browser lokaal drie dingen aan: een kanaal-ID om de " +
            "gesprekspartner te vinden, een versleutelingssleutel en een vingerafdruk ter verificatie. Het wachtwoord " +
            "wordt nooit naar de server verzonden.\n\n" +
            "Nadat beide partijen verbinding hebben gemaakt, maken de browsers een unieke sessiesleutel die alleen " +
            "geldig is voor die sessie. De sleutel wordt daarna verwijderd. Dit betekent dat zelfs als iemand later " +
            "uw wachtwoord krijgt, zij eerdere gesprekken niet kunnen ontsleutelen.\n\n" +
            "Elk bericht heeft een volgnummer dat herhaling voorkomt. Versleutelingssleutels zijn vergrendeld in " +
            "de browser en kunnen niet worden gekopieerd.\n\n" +
            "Na verbinding wordt een vingerafdruk weergegeven die beide partijen zien. U moet dit mondeling of via " +
            "een ander kanaal bevestigen — als de vingerafdrukken verschillen, kan iemand proberen mee te luisteren.\n\n" +
            "De server beperkt het aantal verbindingen, staat slechts twee deelnemers per kanaal toe en stuurt alleen " +
            "versleutelde data door. De server kan nooit valse systeemberichten naar clients sturen.",
        helpLinksTitle: "Broncode en hosting",
        helpLinksText: "De server wordt gehost in de EU (Zweden). NullPost is open source.",
    },
    ro: {
        title: "NullPost",
        subtitle: "Canal securizat și criptat între două computere",
        passwordLabel: "Parolă partajată",
        passwordPlaceholder: "Parolă partajată",
        connect: "Conectare",
        securityNote:
            "Parola nu părăsește niciodată dispozitivul dvs. Toate mesajele sunt criptate în browserul dvs. " +
            "înainte de a fi transmise mai departe — serverul nu le poate citi. După conectare, confirmați " +
            "amprenta verbal cu interlocutorul înainte de a trimite informații sensibile.",
        securityNoteLabel: "Informații de securitate",
        themeLabel: "Comutare temă",
        langLabel: "Comutare limbă",
        statusWaiting: "Se așteaptă conectarea interlocutorului...",
        statusKeyExchange: "Se schimbă cheile de sesiune...",
        statusConnected: "Interlocutor conectat",
        statusPeerLeft: "Interlocutor deconectat",
        statusReconnecting: "Se reconectează...",
        statusDisconnected: "Deconectat",
        fingerprintLabel: "Confirmați cu interlocutorul: ",
        disconnect: "Deconectare",
        messageLabel: "Mesaj",
        messagesLabel: "Mesaje",
        messagePlaceholder: "Scrieți un mesaj… (Enter pentru a trimite, Shift+Enter pentru rând nou)",
        send: "Trimite",
        you: "Tu",
        peer: "Interlocutor",
        copy: "Copiază",
        copied: "Copiat!",
        sysChannelOpen: "Canal deschis — se așteaptă conectarea interlocutorului.",
        sysPeerConnected: "Interlocutor conectat. Se schimbă cheile de sesiune...",
        sysKeyExchangeTimeout: "Schimb de chei expirat — deconectați-vă și încercați din nou.",
        sysPeerLeft: "Interlocutor deconectat.",
        sysRejected: "Conexiune respinsă — canalul are deja doi participanți.",
        sysTimedOut: "Canal închis — inactiv prea mult timp.",
        errTimedOut: "Timp expirat — canalul a fost închis din cauza inactivității.",
        sysKeysExchanged: "Chei de sesiune schimbate. Confirmați amprenta verbal înainte de a trimite informații sensibile.",
        sysDecryptFailed: "[Nu s-a putut decripta mesajul — posibilă manipulare sau cheie greșită]",
        sysKeyExchangeSendFailed: "[Eroare la trimiterea cheii — deconectați-vă și încercați din nou]",
        sysKeyExchangeFailed: "[Schimb de chei eșuat — parolă greșită sau date manipulate]",
        sysReconnectFailed: "Reconectarea a eșuat. Deconectați-vă și încercați din nou manual.",
        sysEncryptFailed: "[Criptarea a eșuat — mesajul nu a fost trimis]",
        errKeyExchangeTimeout: "Schimb de chei eșuat. Interlocutorul nu a răspuns.",
        errChannelFull: "Canalul este plin — un alt dispozitiv este deja conectat cu această parolă.",
        errKeyExchangeFailed: "Schimb de chei eșuat.",
        errKeyExchangePassword: "Schimb de chei eșuat — confirmați că ambii folosesc aceeași parolă.",
        passwordWeak: "Parolă slabă",
        passwordFair: "Parolă acceptabilă",
        passwordGood: "Parolă bună",
        passwordStrong: "Parolă puternică",
        errNoPassword: "Vă rugăm introduceți o parolă partajată.",
        errPasswordTooShort: "Parola trebuie să aibă cel puțin 6 caractere.",
        errDeriveFailed: "Derivarea cheii a eșuat — browserul dvs. poate să nu suporte Web Crypto API.",
        errKeygenFailed: "Nu s-au putut genera cheile de sesiune.",
        attachFile: "Atașează fișier",
        dropFileHere: "Trageți fișier(e) aici",
        fileSending: "Se trimite…",
        fileReceiving: "Se primește…",
        fileSent: "Trimis",
        download: "Descarcă",
        fileTransferError: "Transfer de fișier eșuat",
        fileTooLarge: "Fișierul este prea mare. Dimensiunea maximă este 50 MB.",
        fileEmpty: "Nu se poate trimite un fișier gol.",
        fileNotConnected: "Nu se poate trimite fișierul — nu sunteți conectat la interlocutor.",
        fileTransferAborted: "Transfer de fișier anulat — interlocutor deconectat.",
        fileDownloadedByPeer: "Descărcat de interlocutor",
        notifTitle: "Interlocutor conectat",
        notifBody: "Interlocutorul s-a conectat la canal",
        typingIndicator: "Interlocutorul scrie…",
        qrLabel: "Cod QR",
        qrHint: "Cereți interlocutorului să scaneze pentru a partaja parola",
        unsend: "Retrage",
        unsent: "(Retras)",
        copyLink: "Copiază link",
        seen: "Văzut",
        expired: "(Expirat)",
        maskToggle: "Mascați",
        expiryLabel: "Temporizator de expirare",
        expiryPrompt: "Șterge în:",
        modeRelay: "Releu (server)",
        modeP2P: "Direct (P2P)",
        modeRelayDesc: "Mesajele sunt transmise criptat prin server",
        modeP2PDesc: "Datele sunt trimise direct între browsere, fără a trece prin server",
        sysP2PConnected: "Conexiune directă stabilită — datele sunt trimise direct între browsere.",
        sysP2PFallback: "Conexiunea directă a eșuat — se folosește releul criptat.",
        fileTooLargeP2P: "Fișierul este prea mare. Dimensiunea maximă este 500 MB.",
        statusConnectedP2P: "Interlocutor conectat (P2P)",
        helpLabel: "Ajutor",
        helpClose: "Închide",
        helpTitle: "Despre NullPost",
        helpAboutTitle: "Despre proiect",
        helpAboutText:
            "NullPost este un instrument pentru partajarea securizată de text și fișiere între două dispozitive. Deschideți " +
            "NullPost pe două computere, introduceți aceeași parolă și începeți să partajați. Atât de simplu.\n\n" +
            "Nu aveți nevoie de cont. Nimic nu este stocat pe server. Nu se păstrează jurnale. Tot ce trimiteți este " +
            "criptat în browserul dvs. înainte de a părăsi dispozitivul — serverul nu vede niciodată conținutul.\n\n" +
            "Puteți alege între două moduri de conexiune: Releu trimite date criptate prin server, în timp ce Direct " +
            "(P2P) trimite date direct între cele două browsere fără a trece prin server. În orice mod, toate datele " +
            "sunt complet criptate.\n\n" +
            "NullPost suportă mesaje text, fișiere până la 50 MB (500 MB în modul P2P) și imagini cu previzualizare. " +
            "Mesajele pot avea un temporizator de autodistrugere, pot fi retrase și puteți vedea dacă interlocutorul " +
            "le-a citit. Interfața este disponibilă în 28 limbi și funcționează pe desktop și mobil.",
        helpPrivacyTitle: "Confidențialitate",
        helpPrivacyText:
            "NullPost este construit în jurul unui singur principiu: datele dvs. vă aparțin. Serverul funcționează " +
            "doar ca releu — transmite pachete criptate și nu poate citi, stoca sau înregistra niciun conținut.\n\n" +
            "Parola dvs. nu părăsește niciodată dispozitivul dvs. Este folosită doar local în browser pentru a " +
            "stabili o conexiune securizată. Serverul nu vede niciodată parola.\n\n" +
            "Nu este necesar niciun cont. Nu se folosesc cookie-uri de urmărire. Nu există analiză sau telemetrie. " +
            "Adresele IP nu sunt înregistrate. Serverul nu stochează nimic pe disc — toate informațiile există " +
            "doar în memorie și dispar la repornire.\n\n" +
            "În modul Direct (P2P) conținutul nici măcar nu trece prin server — este trimis direct între cele două browsere.\n\n" +
            "NullPost este complet open source. Puteți inspecta codul, rula propria instanță și verifica singur " +
            "tot ceea ce se afirmă aici.",
        helpSecurityTitle: "Securitate",
        helpSecurityText:
            "Toată comunicarea în NullPost este criptată end-to-end folosind criptografia nativă a browserului. " +
            "Nu se folosesc biblioteci terțe pentru criptare.\n\n" +
            "Când introduceți o parolă, browserul dvs. creează local trei lucruri: un ID de canal pentru a găsi " +
            "interlocutorul, o cheie de criptare și o amprentă pentru verificare. Parola nu este niciodată trimisă " +
            "la server.\n\n" +
            "După ce ambele părți se conectează, browserele creează o cheie de sesiune unică valabilă doar pentru " +
            "acea sesiune. Cheia este eliminată după aceea. Aceasta înseamnă că chiar dacă cineva obține parola dvs. " +
            "mai târziu, nu poate decripta conversațiile anterioare.\n\n" +
            "Fiecare mesaj are un număr de secvență care previne reluarea. Cheile de criptare sunt blocate în " +
            "browser și nu pot fi copiate.\n\n" +
            "După conectare este afișată o amprentă pe care o văd ambele părți. Ar trebui să o confirmați verbal " +
            "sau printr-un alt canal — dacă amprentele sunt diferite, cineva poate încerca să intercepteze comunicarea.\n\n" +
            "Serverul limitează numărul de conexiuni, permite doar doi participanți per canal și transmite doar " +
            "date criptate. Serverul nu poate trimite niciodată mesaje de sistem false clienților.",
        helpLinksTitle: "Sursă și găzduire",
        helpLinksText: "Serverul este găzduit în UE (Suedia). NullPost este open source.",
    },
    ru: {
        title: "NullPost",
        subtitle: "Защищённый зашифрованный канал между двумя компьютерами",
        passwordLabel: "Общий пароль",
        passwordPlaceholder: "Общий пароль",
        connect: "Подключиться",
        securityNote:
            "Пароль никогда не покидает ваше устройство. Все сообщения шифруются в вашем браузере " +
            "перед отправкой — сервер не может их прочитать. После подключения устно подтвердите " +
            "отпечаток с собеседником перед отправкой конфиденциальной информации.",
        securityNoteLabel: "Сведения о безопасности",
        themeLabel: "Сменить тему",
        langLabel: "Сменить язык",
        statusWaiting: "Ожидание подключения собеседника...",
        statusKeyExchange: "Обмен сеансовыми ключами...",
        statusConnected: "Собеседник подключён",
        statusPeerLeft: "Собеседник отключился",
        statusReconnecting: "Повторное подключение...",
        statusDisconnected: "Отключено",
        fingerprintLabel: "Подтвердите с собеседником: ",
        disconnect: "Отключиться",
        messageLabel: "Сообщение",
        messagesLabel: "Сообщения",
        messagePlaceholder: "Введите сообщение… (Enter для отправки, Shift+Enter для новой строки)",
        send: "Отправить",
        you: "Вы",
        peer: "Собеседник",
        copy: "Копировать",
        copied: "Скопировано!",
        sysChannelOpen: "Канал открыт — ожидание подключения собеседника.",
        sysPeerConnected: "Собеседник подключён. Обмен сеансовыми ключами...",
        sysKeyExchangeTimeout: "Время обмена ключами истекло — отключитесь и попробуйте снова.",
        sysPeerLeft: "Собеседник отключился.",
        sysRejected: "Подключение отклонено — в канале уже два участника.",
        sysTimedOut: "Канал закрыт — слишком долгое время неактивности.",
        errTimedOut: "Тайм-аут — канал был закрыт из-за неактивности.",
        sysKeysExchanged: "Сеансовые ключи обменены. Устно подтвердите отпечаток перед отправкой конфиденциальной информации.",
        sysDecryptFailed: "[Не удалось расшифровать сообщение — возможно вмешательство или неверный ключ]",
        sysKeyExchangeSendFailed: "[Ошибка при отправке ключа — отключитесь и попробуйте снова]",
        sysKeyExchangeFailed: "[Обмен ключами не удался — неверный пароль или изменённые данные]",
        sysReconnectFailed: "Повторное подключение не удалось. Отключитесь и попробуйте вручную.",
        sysEncryptFailed: "[Шифрование не удалось — сообщение не отправлено]",
        errKeyExchangeTimeout: "Обмен ключами не удался. Собеседник не ответил.",
        errChannelFull: "Канал заполнен — другое устройство уже подключено с этим паролем.",
        errKeyExchangeFailed: "Обмен ключами не удался.",
        errKeyExchangePassword: "Обмен ключами не удался — убедитесь, что оба используют одинаковый пароль.",
        passwordWeak: "Слабый пароль",
        passwordFair: "Средний пароль",
        passwordGood: "Хороший пароль",
        passwordStrong: "Надёжный пароль",
        errNoPassword: "Пожалуйста, введите общий пароль.",
        errPasswordTooShort: "Пароль должен содержать не менее 6 символов.",
        errDeriveFailed: "Получение ключа не удалось — возможно, ваш браузер не поддерживает Web Crypto API.",
        errKeygenFailed: "Не удалось сгенерировать сеансовые ключи.",
        attachFile: "Прикрепить файл",
        dropFileHere: "Перетащите файл(ы) сюда",
        fileSending: "Отправка…",
        fileReceiving: "Получение…",
        fileSent: "Отправлено",
        download: "Скачать",
        fileTransferError: "Передача файла не удалась",
        fileTooLarge: "Файл слишком большой. Максимальный размер — 50 МБ.",
        fileEmpty: "Нельзя отправить пустой файл.",
        fileNotConnected: "Нельзя отправить файл — не подключено к собеседнику.",
        fileTransferAborted: "Передача файла прервана — собеседник отключился.",
        fileDownloadedByPeer: "Скачано собеседником",
        notifTitle: "Собеседник подключился",
        notifBody: "Собеседник подключился к каналу",
        typingIndicator: "Собеседник печатает…",
        qrLabel: "QR-код",
        qrHint: "Попросите собеседника отсканировать для отправки пароля",
        unsend: "Отозвать",
        unsent: "(Отозвано)",
        copyLink: "Копировать ссылку",
        seen: "Просмотрено",
        expired: "(Истекло)",
        maskToggle: "Скрыть",
        expiryLabel: "Таймер истечения",
        expiryPrompt: "Удалить через:",
        modeRelay: "Ретранслятор (сервер)",
        modeP2P: "Прямое (P2P)",
        modeRelayDesc: "Сообщения передаются в зашифрованном виде через сервер",
        modeP2PDesc: "Данные передаются напрямую между браузерами, минуя сервер",
        sysP2PConnected: "Прямое соединение установлено — данные передаются напрямую между браузерами.",
        sysP2PFallback: "Прямое соединение не удалось — используется зашифрованный ретранслятор.",
        fileTooLargeP2P: "Файл слишком большой. Максимальный размер — 500 МБ.",
        statusConnectedP2P: "Собеседник подключён (P2P)",
        helpLabel: "Справка",
        helpClose: "Закрыть",
        helpTitle: "О NullPost",
        helpAboutTitle: "О проекте",
        helpAboutText:
            "NullPost — это инструмент для безопасного обмена текстом и файлами между двумя устройствами. Откройте " +
            "NullPost на двух компьютерах, введите одинаковый пароль и начните обмен. Всё просто.\n\n" +
            "Учётная запись не нужна. На сервере ничего не хранится. Журналы не ведутся. Всё, что вы отправляете, " +
            "шифруется в вашем браузере перед отправкой — сервер никогда не видит содержимое.\n\n" +
            "Вы можете выбрать один из двух режимов подключения: Ретранслятор передаёт зашифрованные данные через " +
            "сервер, а Прямое (P2P) передаёт данные напрямую между двумя браузерами, минуя сервер. В любом режиме " +
            "все данные полностью зашифрованы.\n\n" +
            "NullPost поддерживает текстовые сообщения, файлы до 50 МБ (500 МБ в режиме P2P) и изображения с " +
            "предпросмотром. Сообщения могут иметь таймер самоуничтожения, их можно отозвать, и вы можете видеть, " +
            "прочитал ли их собеседник. Интерфейс доступен на 28 языках и работает на компьютере и мобильном устройстве.",
        helpPrivacyTitle: "Конфиденциальность",
        helpPrivacyText:
            "NullPost построен на одном принципе: ваши данные принадлежат только вам. Сервер выступает лишь как " +
            "ретранслятор — он пересылает зашифрованные пакеты и не может читать, хранить или записывать " +
            "какое-либо содержимое.\n\n" +
            "Ваш пароль никогда не покидает ваше устройство. Он используется только локально в браузере для " +
            "установления защищённого соединения. Сервер никогда не видит пароль.\n\n" +
            "Учётная запись не нужна. Отслеживающие файлы cookie не используются. Аналитика и телеметрия не " +
            "собираются. IP-адреса не записываются. Сервер ничего не хранит на диске — вся информация существует " +
            "только в памяти и исчезает при перезапуске.\n\n" +
            "В режиме Прямое (P2P) содержимое даже не проходит через сервер — оно передаётся напрямую между двумя браузерами.\n\n" +
            "NullPost полностью открытый. Вы можете изучить код, запустить собственный экземпляр и самостоятельно " +
            "проверить всё, что здесь утверждается.",
        helpSecurityTitle: "Безопасность",
        helpSecurityText:
            "Вся коммуникация в NullPost зашифрована сквозным шифрованием с использованием встроенной криптографии " +
            "браузера. Сторонние библиотеки для шифрования не используются.\n\n" +
            "Когда вы вводите пароль, ваш браузер локально создаёт три элемента: идентификатор канала для поиска " +
            "собеседника, ключ шифрования и отпечаток для проверки. Пароль никогда не отправляется на сервер.\n\n" +
            "После подключения обеих сторон браузеры создают уникальный сеансовый ключ, действующий только для " +
            "этого сеанса. Ключ удаляется после завершения. Это означает, что даже если кто-то позже получит ваш " +
            "пароль, он не сможет расшифровать прошлые разговоры.\n\n" +
            "Каждое сообщение содержит порядковый номер, предотвращающий повторное воспроизведение. Ключи шифрования " +
            "заблокированы в браузере и не могут быть скопированы.\n\n" +
            "После подключения отображается отпечаток, видимый обеим сторонам. Его следует подтвердить устно или " +
            "по другому каналу — если отпечатки различаются, кто-то может пытаться перехватить общение.\n\n" +
            "Сервер ограничивает количество подключений, допускает только двух участников на канал и пересылает " +
            "только зашифрованные данные. Сервер никогда не может отправлять поддельные системные сообщения клиентам.",
        helpLinksTitle: "Исходный код и хостинг",
        helpLinksText: "Сервер размещён в ЕС (Швеция). NullPost — открытый исходный код.",
    },
    cs: {
        title: "NullPost",
        subtitle: "Bezpečný, šifrovaný kanál mezi dvěma počítači",
        passwordLabel: "Sdílené heslo",
        passwordPlaceholder: "Sdílené heslo",
        connect: "Připojit",
        securityNote:
            "Vaše heslo nikdy neopustí vaše zařízení. Všechny zprávy jsou zašifrovány ve vašem " +
            "prohlížeči před přenosem — server je nemůže číst. Po připojení ověřte otisk verbálně " +
            "s partnerem před odesláním citlivých informací.",
        securityNoteLabel: "Bezpečnostní informace",
        themeLabel: "Přepnout téma",
        langLabel: "Přepnout jazyk",
        statusWaiting: "Čekám na připojení partnera...",
        statusKeyExchange: "Výměna klíčů relace...",
        statusConnected: "Partner připojen",
        statusPeerLeft: "Partner odpojen",
        statusReconnecting: "Opětovné připojení...",
        statusDisconnected: "Odpojeno",
        fingerprintLabel: "Ověřte s partnerem: ",
        disconnect: "Odpojit",
        messageLabel: "Zpráva",
        messagesLabel: "Zprávy",
        messagePlaceholder: "Napište zprávu… (Enter pro odeslání, Shift+Enter pro nový řádek)",
        send: "Odeslat",
        you: "Vy",
        peer: "Partner",
        copy: "Kopírovat",
        copied: "Zkopírováno!",
        sysChannelOpen: "Kanál otevřen — čekám na připojení partnera.",
        sysPeerConnected: "Partner připojen. Výměna klíčů relace...",
        sysKeyExchangeTimeout: "Výměna klíčů vypršela — odpojte se a zkuste znovu.",
        sysPeerLeft: "Partner odpojen.",
        sysRejected: "Připojení odmítnuto — kanál již má dva účastníky.",
        sysTimedOut: "Kanál uzavřen — příliš dlouho neaktivní.",
        errTimedOut: "Časový limit — kanál uzavřen kvůli nečinnosti.",
        sysKeysExchanged: "Klíče relace vyměněny. Ověřte otisk verbálně před odesláním citlivých informací.",
        sysDecryptFailed: "[Zprávu nelze dešifrovat — možná manipulace nebo špatný klíč]",
        sysKeyExchangeSendFailed: "[Chyba při odesílání klíče — odpojte se a zkuste znovu]",
        sysKeyExchangeFailed: "[Výměna klíčů selhala — špatné heslo nebo manipulovaná data]",
        sysReconnectFailed: "Opětovné připojení selhalo. Odpojte se a zkuste znovu ručně.",
        sysEncryptFailed: "[Šifrování selhalo — zpráva nebyla odeslána]",
        errKeyExchangeTimeout: "Výměna klíčů selhala. Druhá strana neodpověděla.",
        errChannelFull: "Kanál je plný — jiné zařízení je již připojeno s tímto heslem.",
        errKeyExchangeFailed: "Výměna klíčů selhala.",
        errKeyExchangePassword: "Výměna klíčů selhala — ověřte, že obě strany používají stejné heslo.",
        passwordWeak: "Slabé heslo",
        passwordFair: "Průměrné heslo",
        passwordGood: "Dobré heslo",
        passwordStrong: "Silné heslo",
        errNoPassword: "Prosím zadejte sdílené heslo.",
        errPasswordTooShort: "Heslo musí mít alespoň 6 znaků.",
        errDeriveFailed: "Odvozování klíče selhalo — váš prohlížeč možná nepodporuje Web Crypto API.",
        errKeygenFailed: "Nelze vygenerovat klíče relace.",
        attachFile: "Připojit soubor",
        dropFileHere: "Přetáhněte soubor(y) sem",
        fileSending: "Odesílání…",
        fileReceiving: "Přijímání…",
        fileSent: "Odesláno",
        download: "Stáhnout",
        fileTransferError: "Přenos souboru selhal",
        fileTooLarge: "Soubor je příliš velký. Maximální velikost je 50 MB.",
        fileEmpty: "Nelze odeslat prázdný soubor.",
        fileNotConnected: "Nelze odeslat soubor — partner není připojen.",
        fileTransferAborted: "Přenos souboru přerušen — partner odpojen.",
        fileDownloadedByPeer: "Staženo partnerem",
        notifTitle: "Partner připojen",
        notifBody: "Váš partner se připojil ke kanálu",
        typingIndicator: "Partner píše…",
        qrLabel: "QR kód",
        qrHint: "Nechte partnera naskenovat pro sdílení hesla",
        unsend: "Odvolat",
        unsent: "(Odvoláno)",
        copyLink: "Kopírovat odkaz",
        seen: "Přečteno",
        expired: "(Vypršelo)",
        maskToggle: "Maskovat",
        expiryLabel: "Časovač vypršení",
        expiryPrompt: "Smazat za:",
        modeRelay: "Relé (server)",
        modeP2P: "Přímé (P2P)",
        modeRelayDesc: "Šifrované zprávy jsou předávány přes server",
        modeP2PDesc: "Data jsou odesílána přímo mezi prohlížeči, obcházejíc server",
        sysP2PConnected: "Přímé připojení navázáno — data jsou odesílána mezi prohlížeči.",
        sysP2PFallback: "Přímé připojení selhalo — používám šifrované relé místo toho.",
        fileTooLargeP2P: "Soubor je příliš velký. Maximální velikost je 500 MB.",
        statusConnectedP2P: "Partner připojen (P2P)",
        helpLabel: "Nápověda",
        helpClose: "Zavřít",
        helpTitle: "O NullPost",
        helpAboutTitle: "O projektu",
        helpAboutText:
            "NullPost je nástroj pro bezpečné sdílení textu a souborů mezi dvěma zařízeními. Otevřete NullPost " +
            "na dvou počítačích, zadejte stejné heslo a začněte sdílet. Je to tak jednoduché.\n\n" +
            "Není potřeba žádný účet. Na serveru se nic neukládá. Nejsou vedeny žádné záznamy. Vše, co odešlete, " +
            "je zašifrováno ve vašem prohlížeči před opuštěním zařízení — server nikdy nevidí obsah.\n\n" +
            "Můžete si vybrat mezi dvěma režimy připojení: Relé odesílá data zašifrovaná přes server, zatímco " +
            "Přímé (P2P) odesílá data přímo mezi dvěma prohlížeči bez průchodu serverem. V obou případech jsou " +
            "všechna data plně zašifrována po celou dobu.\n\n" +
            "NullPost podporuje textové zprávy, soubory až 50 MB (500 MB v režimu P2P) a obrázky s náhledem. " +
            "Zprávy mohou mít časovač sebezničení, lze je odvolat a vidíte, zda je partner přečetl. " +
            "Rozhraní je dostupné v 28 jazycích a funguje na počítači i mobilu.",
        helpPrivacyTitle: "Ochrana soukromí",
        helpPrivacyText:
            "NullPost je postaven na jediném principu: vaše data patří pouze vám. Server funguje pouze jako " +
            "přenosové místo — přeposílá zašifrované pakety a nemá možnost číst, ukládat ani zaznamenávat obsah.\n\n" +
            "Vaše heslo nikdy neopustí vaše zařízení. Používá se pouze lokálně v prohlížeči pro nastavení " +
            "zabezpečeného připojení. Server heslo nikdy nevidí.\n\n" +
            "Není vyžadován žádný účet. Žádné cookies nejsou používány ke sledování. Nejsou shromažďovány žádné " +
            "analytické údaje ani telemetrie. IP adresy nejsou zaznamenávány. Server neukládá nic na disk — " +
            "všechny informace existují pouze v paměti a zmizí při restartu serveru.\n\n" +
            "V režimu Přímé (P2P) neprocházejí zprávy ani soubory serverem — proudí přímo mezi dvěma prohlížeči.\n\n" +
            "NullPost je plně open source. Můžete zkontrolovat kód, spustit vlastní instanci a sami ověřit " +
            "všechna zde uvedená tvrzení.",
        helpSecurityTitle: "Zabezpečení",
        helpSecurityText:
            "Veškerá komunikace v NullPost je end-to-end šifrována pomocí vestavěné kryptografie prohlížeče. " +
            "Pro šifrování nejsou používány žádné knihovny třetích stran.\n\n" +
            "Když zadáte heslo, prohlížeč lokálně vytvoří tři věci: ID kanálu pro nalezení partnera, šifrovací " +
            "klíč a otisk pro ověření. Heslo není nikdy odesláno na server.\n\n" +
            "Po připojení obou partnerů prohlížeče vytvoří jedinečný klíč relace platný pouze pro danou relaci. " +
            "Klíč je poté zahozen. To znamená, že i kdyby někdo získal vaše heslo, nemůže dešifrovat minulé " +
            "konverzace.\n\n" +
            "Každá zpráva má pořadové číslo, které zabraňuje přehrání stejné zprávy. Šifrovací klíče jsou " +
            "uzamčeny v prohlížeči a nelze je kopírovat.\n\n" +
            "Po připojení se zobrazí otisk viditelný oběma partnerům. Měli byste ho potvrdit verbálně nebo přes " +
            "jiný kanál — pokud se otisky liší, někdo se může pokoušet odposlouchávat.\n\n" +
            "Server omezuje rychlost připojení, povoluje pouze dva účastníky na kanál a přeposílá pouze " +
            "zašifrovaná data. Server nikdy nemůže posílat falešné systémové zprávy klientům.",
        helpLinksTitle: "Zdrojový kód a hosting",
        helpLinksText: "Server je hostován v EU (Švédsko). NullPost je open source.",
    },
    el: {
        title: "NullPost",
        subtitle: "Ασφαλές, κρυπτογραφημένο κανάλι μεταξύ δύο υπολογιστών",
        passwordLabel: "Κοινός κωδικός",
        passwordPlaceholder: "Κοινός κωδικός",
        connect: "Σύνδεση",
        securityNote:
            "Ο κωδικός σας δεν εγκαταλείπει ποτέ τη συσκευή σας. Όλα τα μηνύματα κρυπτογραφούνται στο " +
            "πρόγραμμα περιήγησής σας πριν αναμεταδοθούν — ο διακομιστής δεν μπορεί να τα διαβάσει. Μετά τη " +
            "σύνδεση, επαληθεύστε το αποτύπωμα προφορικά με τον συνομιλητή σας πριν στείλετε ευαίσθητες πληροφορίες.",
        securityNoteLabel: "Πληροφορίες ασφαλείας",
        themeLabel: "Εναλλαγή θέματος",
        langLabel: "Εναλλαγή γλώσσας",
        statusWaiting: "Αναμονή σύνδεσης συνομιλητή...",
        statusKeyExchange: "Ανταλλαγή κλειδιών συνεδρίας...",
        statusConnected: "Συνομιλητής συνδέθηκε",
        statusPeerLeft: "Συνομιλητής αποσυνδέθηκε",
        statusReconnecting: "Επανασύνδεση...",
        statusDisconnected: "Αποσυνδεδεμένος",
        fingerprintLabel: "Επαλήθευση με συνομιλητή: ",
        disconnect: "Αποσύνδεση",
        messageLabel: "Μήνυμα",
        messagesLabel: "Μηνύματα",
        messagePlaceholder: "Γράψτε μήνυμα… (Enter για αποστολή, Shift+Enter για νέα γραμμή)",
        send: "Αποστολή",
        you: "Εσείς",
        peer: "Συνομιλητής",
        copy: "Αντιγραφή",
        copied: "Αντιγράφηκε!",
        sysChannelOpen: "Κανάλι ανοικτό — αναμονή σύνδεσης συνομιλητή.",
        sysPeerConnected: "Συνομιλητής συνδέθηκε. Ανταλλαγή κλειδιών συνεδρίας...",
        sysKeyExchangeTimeout: "Η ανταλλαγή κλειδιών έληξε — αποσυνδεθείτε και δοκιμάστε ξανά.",
        sysPeerLeft: "Συνομιλητής αποσυνδέθηκε.",
        sysRejected: "Η σύνδεση απορρίφθηκε — το κανάλι έχει ήδη δύο συμμετέχοντες.",
        sysTimedOut: "Το κανάλι έκλεισε — ανενεργό για πολύ ώρα.",
        errTimedOut: "Λήξη χρόνου — το κανάλι έκλεισε λόγω αδράνειας.",
        sysKeysExchanged: "Κλειδιά συνεδρίας ανταλλάχθηκαν. Επαληθεύστε το αποτύπωμα προφορικά πριν στείλετε ευαίσθητες πληροφορίες.",
        sysDecryptFailed: "[Αδυναμία αποκρυπτογράφησης — πιθανή παραχάραξη ή λανθασμένο κλειδί]",
        sysKeyExchangeSendFailed: "[Σφάλμα αποστολής κλειδιού — αποσυνδεθείτε και δοκιμάστε ξανά]",
        sysKeyExchangeFailed: "[Αποτυχία ανταλλαγής κλειδιών — λανθασμένος κωδικός ή παραχαραγμένα δεδομένα]",
        sysReconnectFailed: "Αδυναμία επανασύνδεσης. Αποσυνδεθείτε και δοκιμάστε ξανά χειροκίνητα.",
        sysEncryptFailed: "[Αποτυχία κρυπτογράφησης — το μήνυμα δεν εστάλη]",
        errKeyExchangeTimeout: "Αποτυχία ανταλλαγής κλειδιών. Το άλλο μέρος δεν απάντησε.",
        errChannelFull: "Το κανάλι είναι πλήρες — άλλη συσκευή είναι ήδη συνδεδεμένη με αυτόν τον κωδικό.",
        errKeyExchangeFailed: "Αποτυχία ανταλλαγής κλειδιών.",
        errKeyExchangePassword: "Αποτυχία ανταλλαγής κλειδιών — επαληθεύστε ότι και τα δύο μέρη χρησιμοποιούν τον ίδιο κωδικό.",
        passwordWeak: "Αδύναμος κωδικός",
        passwordFair: "Μέτριος κωδικός",
        passwordGood: "Καλός κωδικός",
        passwordStrong: "Ισχυρός κωδικός",
        errNoPassword: "Παρακαλώ εισάγετε έναν κοινό κωδικό.",
        errPasswordTooShort: "Ο κωδικός πρέπει να έχει τουλάχιστον 6 χαρακτήρες.",
        errDeriveFailed: "Αποτυχία παραγωγής κλειδιού — το πρόγραμμα περιήγησής σας ίσως δεν υποστηρίζει το Web Crypto API.",
        errKeygenFailed: "Αδυναμία δημιουργίας κλειδιών συνεδρίας.",
        attachFile: "Επισύναψη αρχείου",
        dropFileHere: "Αποθέστε αρχεία εδώ",
        fileSending: "Αποστολή…",
        fileReceiving: "Λήψη…",
        fileSent: "Εστάλη",
        download: "Λήψη",
        fileTransferError: "Αποτυχία μεταφοράς αρχείου",
        fileTooLarge: "Το αρχείο είναι πολύ μεγάλο. Μέγιστο μέγεθος 50 MB.",
        fileEmpty: "Αδυναμία αποστολής κενού αρχείου.",
        fileNotConnected: "Αδυναμία αποστολής αρχείου — δεν υπάρχει σύνδεση με συνομιλητή.",
        fileTransferAborted: "Μεταφορά αρχείου ακυρώθηκε — συνομιλητής αποσυνδέθηκε.",
        fileDownloadedByPeer: "Λήφθηκε από συνομιλητή",
        notifTitle: "Συνομιλητής συνδέθηκε",
        notifBody: "Ο συνομιλητής σας εντάχθηκε στο κανάλι",
        typingIndicator: "Ο συνομιλητής πληκτρολογεί…",
        qrLabel: "Κωδικός QR",
        qrHint: "Αφήστε τον συνομιλητή να σαρώσει για να μοιραστεί τον κωδικό",
        unsend: "Ανάκληση",
        unsent: "(Ανακλήθηκε)",
        copyLink: "Αντιγραφή συνδέσμου",
        seen: "Διαβάστηκε",
        expired: "(Έληξε)",
        maskToggle: "Απόκρυψη",
        expiryLabel: "Χρονόμετρο λήξης",
        expiryPrompt: "Διαγραφή σε:",
        modeRelay: "Αναμετάδοση (διακομιστής)",
        modeP2P: "Άμεσο (P2P)",
        modeRelayDesc: "Τα κρυπτογραφημένα μηνύματα αναμεταδίδονται μέσω του διακομιστή",
        modeP2PDesc: "Τα δεδομένα αποστέλλονται απευθείας μεταξύ των προγραμμάτων περιήγησης, παρακάμπτοντας τον διακομιστή",
        sysP2PConnected: "Άμεση σύνδεση εγκαταστάθηκε — τα δεδομένα αποστέλλονται μεταξύ των προγραμμάτων περιήγησης.",
        sysP2PFallback: "Η άμεση σύνδεση απέτυχε — χρήση κρυπτογραφημένης αναμετάδοσης.",
        fileTooLargeP2P: "Το αρχείο είναι πολύ μεγάλο. Μέγιστο μέγεθος 500 MB.",
        statusConnectedP2P: "Συνομιλητής συνδέθηκε (P2P)",
        helpLabel: "Βοήθεια",
        helpClose: "Κλείσιμο",
        helpTitle: "Σχετικά με το NullPost",
        helpAboutTitle: "Σχετικά με το έργο",
        helpAboutText:
            "Το NullPost είναι ένα εργαλείο για ασφαλή κοινή χρήση κειμένου και αρχείων μεταξύ δύο συσκευών. " +
            "Ανοίξτε το NullPost σε δύο υπολογιστές, εισάγετε τον ίδιο κωδικό και αρχίστε να μοιράζεστε. Τόσο απλό.\n\n" +
            "Δεν απαιτείται λογαριασμός. Τίποτα δεν αποθηκεύεται στον διακομιστή. Δεν τηρούνται αρχεία καταγραφής. " +
            "Όλα όσα στέλνετε κρυπτογραφούνται στο πρόγραμμα περιήγησής σας πριν φύγουν από τη συσκευή σας — " +
            "ο διακομιστής δεν βλέπει ποτέ το περιεχόμενο.\n\n" +
            "Μπορείτε να επιλέξετε μεταξύ δύο τρόπων σύνδεσης: η Αναμετάδοση στέλνει κρυπτογραφημένα δεδομένα " +
            "μέσω του διακομιστή, ενώ το Άμεσο (P2P) στέλνει δεδομένα απευθείας μεταξύ των δύο προγραμμάτων " +
            "περιήγησης χωρίς να περνάει από τον διακομιστή. Σε κάθε περίπτωση, όλα τα δεδομένα είναι πλήρως " +
            "κρυπτογραφημένα καθ' όλη τη διάρκεια.\n\n" +
            "Το NullPost υποστηρίζει μηνύματα κειμένου, αρχεία έως 50 MB (500 MB σε λειτουργία P2P) και εικόνες " +
            "με προεπισκόπηση. Τα μηνύματα μπορούν να έχουν χρονόμετρο αυτοκαταστροφής, να ανακληθούν και μπορείτε " +
            "να δείτε αν ο συνομιλητής σας τα διάβασε. Η διεπαφή είναι διαθέσιμη σε 28 γλώσσες και λειτουργεί " +
            "σε υπολογιστή και κινητό.",
        helpPrivacyTitle: "Απόρρητο",
        helpPrivacyText:
            "Το NullPost βασίζεται σε μία αρχή: τα δεδομένα σας ανήκουν μόνο σε εσάς. Ο διακομιστής λειτουργεί " +
            "μόνο ως αναμεταδότης — προωθεί κρυπτογραφημένα πακέτα και δεν έχει τη δυνατότητα να διαβάσει, " +
            "να αποθηκεύσει ή να καταγράψει οποιοδήποτε περιεχόμενο.\n\n" +
            "Ο κωδικός σας δεν εγκαταλείπει ποτέ τη συσκευή σας. Χρησιμοποιείται μόνο τοπικά στο πρόγραμμα " +
            "περιήγησής σας για τη ρύθμιση ασφαλούς σύνδεσης. Ο διακομιστής δεν βλέπει ποτέ τον κωδικό.\n\n" +
            "Δεν απαιτείται λογαριασμός. Δεν χρησιμοποιούνται cookies για παρακολούθηση. Δεν συλλέγονται " +
            "αναλυτικά στοιχεία ή τηλεμετρία. Δεν καταγράφονται διευθύνσεις IP. Ο διακομιστής δεν αποθηκεύει " +
            "τίποτα στο δίσκο — όλες οι πληροφορίες υπάρχουν μόνο στη μνήμη και χάνονται όταν ο διακομιστής " +
            "επανεκκινείται.\n\n" +
            "Σε λειτουργία Άμεσο (P2P), το περιεχόμενο μηνυμάτων και αρχείων δεν περνά καν από τον διακομιστή " +
            "— ρέει απευθείας μεταξύ των δύο προγραμμάτων περιήγησης.\n\n" +
            "Το NullPost είναι πλήρως ανοιχτού κώδικα. Μπορείτε να επιθεωρήσετε τον κώδικα, να εκτελέσετε τη " +
            "δική σας εγκατάσταση και να επαληθεύσετε μόνοι σας κάθε ισχυρισμό που γίνεται εδώ.",
        helpSecurityTitle: "Ασφάλεια",
        helpSecurityText:
            "Όλες οι επικοινωνίες στο NullPost είναι κρυπτογραφημένες από άκρο σε άκρο χρησιμοποιώντας την " +
            "ενσωματωμένη κρυπτογραφία του προγράμματος περιήγησης. Δεν χρησιμοποιούνται βιβλιοθήκες τρίτων " +
            "για κρυπτογράφηση.\n\n" +
            "Όταν εισάγετε κωδικό, το πρόγραμμα περιήγησής σας δημιουργεί τοπικά τρία πράγματα: ένα αναγνωριστικό " +
            "καναλιού για την εύρεση του συνομιλητή σας, ένα κλειδί κρυπτογράφησης και ένα αποτύπωμα για επαλήθευση. " +
            "Ο κωδικός δεν αποστέλλεται ποτέ στον διακομιστή.\n\n" +
            "Αφού και οι δύο συνομιλητές συνδεθούν, τα προγράμματα περιήγησης δημιουργούν ένα μοναδικό κλειδί " +
            "συνεδρίας που ισχύει μόνο για εκείνη τη συνεδρία. Το κλειδί απορρίπτεται στη συνέχεια. Αυτό σημαίνει " +
            "ότι ακόμα και αν κάποιος αποκτήσει αργότερα τον κωδικό σας, δεν μπορεί να αποκρυπτογραφήσει " +
            "παλιές συνομιλίες.\n\n" +
            "Κάθε μήνυμα έχει αριθμό ακολουθίας που αποτρέπει την επανάληψη του ίδιου μηνύματος. Τα κλειδιά " +
            "κρυπτογράφησης είναι κλειδωμένα μέσα στο πρόγραμμα περιήγησης και δεν μπορούν να αντιγραφούν.\n\n" +
            "Μετά τη σύνδεση, εμφανίζεται ένα αποτύπωμα που μπορούν να δουν και οι δύο συνομιλητές. Θα πρέπει " +
            "να το επιβεβαιώσετε προφορικά ή μέσω άλλου καναλιού — αν τα αποτυπώματα διαφέρουν, κάποιος μπορεί " +
            "να επιχειρεί υποκλοπή.\n\n" +
            "Ο διακομιστής περιορίζει τους ρυθμούς σύνδεσης, επιτρέπει μόνο δύο συμμετέχοντες ανά κανάλι και " +
            "προωθεί μόνο κρυπτογραφημένα δεδομένα. Ο διακομιστής δεν μπορεί ποτέ να στείλει ψεύτικα μηνύματα " +
            "συστήματος στους πελάτες.",
        helpLinksTitle: "Πηγαίος κώδικας & φιλοξενία",
        helpLinksText: "Ο διακομιστής φιλοξενείται στην ΕΕ (Σουηδία). Το NullPost είναι ανοιχτού κώδικα.",
    },
    hu: {
        title: "NullPost",
        subtitle: "Biztonságos, titkosított csatorna két számítógép között",
        passwordLabel: "Közös jelszó",
        passwordPlaceholder: "Közös jelszó",
        connect: "Kapcsolódás",
        securityNote:
            "A jelszavad soha nem hagyja el az eszközödet. Minden üzenet titkosítva van a böngésződben " +
            "az átvitel előtt — a szerver nem tudja olvasni. Csatlakozás után verbálisan ellenőrizd az " +
            "ujjlenyomatot a partnereddel, mielőtt érzékeny adatokat küldenél.",
        securityNoteLabel: "Biztonsági információk",
        themeLabel: "Téma váltása",
        langLabel: "Nyelv váltása",
        statusWaiting: "Várom a partner csatlakozását...",
        statusKeyExchange: "Munkamenet-kulcsok cseréje...",
        statusConnected: "Partner csatlakozott",
        statusPeerLeft: "Partner lecsatlakozott",
        statusReconnecting: "Újracsatlakozás...",
        statusDisconnected: "Lecsatlakozva",
        fingerprintLabel: "Ellenőrizd a partnerrel: ",
        disconnect: "Lecsatlakozás",
        messageLabel: "Üzenet",
        messagesLabel: "Üzenetek",
        messagePlaceholder: "Írj üzenetet… (Enter a küldéshez, Shift+Enter új sorhoz)",
        send: "Küldés",
        you: "Te",
        peer: "Partner",
        copy: "Másolás",
        copied: "Másolva!",
        sysChannelOpen: "Csatorna nyitva — várom a partner csatlakozását.",
        sysPeerConnected: "Partner csatlakozott. Munkamenet-kulcsok cseréje...",
        sysKeyExchangeTimeout: "Kulcscsere időtúllépés — csatlakozz le és próbáld újra.",
        sysPeerLeft: "Partner lecsatlakozott.",
        sysRejected: "Csatlakozás elutasítva — a csatornán már két résztvevő van.",
        sysTimedOut: "Csatorna bezárva — túl sokáig inaktív volt.",
        errTimedOut: "Időtúllépés — csatorna bezárva inaktivitás miatt.",
        sysKeysExchanged: "Munkamenet-kulcsok kicserélve. Ellenőrizd az ujjlenyomatot verbálisan mielőtt érzékeny adatokat küldenél.",
        sysDecryptFailed: "[Nem sikerült visszafejteni az üzenetet — esetleges manipuláció vagy hibás kulcs]",
        sysKeyExchangeSendFailed: "[Hiba a kulcs küldésekor — csatlakozz le és próbáld újra]",
        sysKeyExchangeFailed: "[Kulcscsere sikertelen — hibás jelszó vagy manipulált adatok]",
        sysReconnectFailed: "Nem sikerült újracsatlakozni. Csatlakozz le és próbáld újra manuálisan.",
        sysEncryptFailed: "[Titkosítás sikertelen — az üzenet nem lett elküldve]",
        errKeyExchangeTimeout: "Kulcscsere sikertelen. A másik fél nem válaszolt.",
        errChannelFull: "A csatorna tele van — egy másik eszköz már csatlakozva van ezzel a jelszóval.",
        errKeyExchangeFailed: "Kulcscsere sikertelen.",
        errKeyExchangePassword: "Kulcscsere sikertelen — ellenőrizd, hogy mindkét fél ugyanazt a jelszót használja.",
        passwordWeak: "Gyenge jelszó",
        passwordFair: "Közepes jelszó",
        passwordGood: "Jó jelszó",
        passwordStrong: "Erős jelszó",
        errNoPassword: "Kérlek adj meg egy közös jelszót.",
        errPasswordTooShort: "A jelszónak legalább 6 karakter hosszúnak kell lennie.",
        errDeriveFailed: "Kulcslevezetés sikertelen — a böngésződ talán nem támogatja a Web Crypto API-t.",
        errKeygenFailed: "Nem sikerült munkamenet-kulcsokat generálni.",
        attachFile: "Fájl csatolása",
        dropFileHere: "Húzz ide fájl(oka)t",
        fileSending: "Küldés…",
        fileReceiving: "Fogadás…",
        fileSent: "Elküldve",
        download: "Letöltés",
        fileTransferError: "Fájlátvitel sikertelen",
        fileTooLarge: "A fájl túl nagy. Maximális méret 50 MB.",
        fileEmpty: "Nem lehet üres fájlt küldeni.",
        fileNotConnected: "Nem lehet fájlt küldeni — nincs kapcsolat a partnerrel.",
        fileTransferAborted: "Fájlátvitel megszakítva — partner lecsatlakozott.",
        fileDownloadedByPeer: "Partner letöltötte",
        notifTitle: "Partner csatlakozott",
        notifBody: "A partnered csatlakozott a csatornához",
        typingIndicator: "A partner gépel…",
        qrLabel: "QR-kód",
        qrHint: "Hagyd a partnered beolvasni a jelszó megosztásához",
        unsend: "Visszavonás",
        unsent: "(Visszavonva)",
        copyLink: "Link másolása",
        seen: "Látva",
        expired: "(Lejárt)",
        maskToggle: "Elrejt",
        expiryLabel: "Lejárati időzítő",
        expiryPrompt: "Törlés:",
        modeRelay: "Relé (szerver)",
        modeP2P: "Közvetlen (P2P)",
        modeRelayDesc: "A titkosított üzenetek a szerveren keresztül kerülnek továbbításra",
        modeP2PDesc: "Az adatok közvetlenül a böngészők között kerülnek küldésre, megkerülve a szervert",
        sysP2PConnected: "Közvetlen kapcsolat létrejött — az adatok a böngészők között kerülnek küldésre.",
        sysP2PFallback: "Közvetlen kapcsolat sikertelen — titkosított relé használata helyette.",
        fileTooLargeP2P: "A fájl túl nagy. Maximális méret 500 MB.",
        statusConnectedP2P: "Partner csatlakozott (P2P)",
        helpLabel: "Súgó",
        helpClose: "Bezárás",
        helpTitle: "A NullPost-ról",
        helpAboutTitle: "A projektről",
        helpAboutText:
            "A NullPost egy eszköz a szövegek és fájlok biztonságos megosztásához két eszköz között. Nyisd meg " +
            "a NullPost-ot két számítógépen, add meg ugyanazt a jelszót, és kezdj el megosztani. Ilyen egyszerű.\n\n" +
            "Nincs szükség fiókra. Semmi sem tárolódik a szerveren. Nem vezet naplókat. Minden, amit küldünk, " +
            "titkosítva van a böngészőben, mielőtt elhagyja az eszközt — a szerver soha nem látja a tartalmat.\n\n" +
            "Két kapcsolódási mód közül választhatsz: a Relé a szerveren keresztül titkosítva küldi az adatokat, " +
            "míg a Közvetlen (P2P) közvetlenül a két böngésző között küldi az adatokat, a szerveren való áthaladás " +
            "nélkül. Mindkét esetben az összes adat teljes egészében titkosítva van.\n\n" +
            "A NullPost szöveges üzeneteket, 50 MB-ig terjedő fájlokat (P2P módban 500 MB-ig) és képeket támogat " +
            "előnézettel. Az üzenetek önmegsemmisítő időzítővel rendelkezhetnek, visszavonhatók, és láthatod, hogy " +
            "a partnered elolvasta-e őket. A felület 28 nyelven érhető el és asztali és mobil eszközökön is működik.",
        helpPrivacyTitle: "Adatvédelem",
        helpPrivacyText:
            "A NullPost egy elv köré épül: az adataid csak a tiéd. A szerver csak közvetítőként működik — " +
            "titkosított csomagokat továbbít, és nem képes olvasni, tárolni vagy naplózni semmilyen tartalmat.\n\n" +
            "A jelszavad soha nem hagyja el az eszközödet. Csak helyben használják a böngésződben a biztonságos " +
            "kapcsolat felállításához. A szerver soha nem látja a jelszót.\n\n" +
            "Nincs szükség fiókra. Nem használnak cookie-kat nyomon követésre. Nem gyűjtenek analitikai adatokat " +
            "vagy telemetriát. IP-címeket nem naplóznak. A szerver semmit sem tárol a lemezen — minden információ " +
            "csak a memóriában létezik, és elveszik, amikor a szerver újraindul.\n\n" +
            "Közvetlen (P2P) módban az üzenetek és fájlok tartalma még a szerveren sem halad át — közvetlenül " +
            "a két böngésző között áramlik.\n\n" +
            "A NullPost teljesen nyílt forráskódú. Megvizsgálhatod a kódot, futtathatod a saját példányodat, " +
            "és saját magad ellenőrizheted az itt tett összes állítást.",
        helpSecurityTitle: "Biztonság",
        helpSecurityText:
            "A NullPost-ban minden kommunikáció végpontok közötti titkosítással van védve a böngésző beépített " +
            "kriptográfiájával. Titkosításhoz nem használnak harmadik féltől származó könyvtárakat.\n\n" +
            "Amikor megadod a jelszót, a böngésző helyben három dolgot hoz létre: egy csatornaazonosítót a " +
            "partner megtalálásához, egy titkosítási kulcsot és egy ujjlenyomatot az ellenőrzéshez. A jelszót " +
            "soha nem küldik el a szervernek.\n\n" +
            "Miután mindkét fél csatlakozik, a böngészők létrehoznak egy egyedi munkamenet-kulcsot, amely csak " +
            "arra az egy munkamenetre vonatkozik. A kulcsot ezután eldobják. Ez azt jelenti, hogy még ha valaki " +
            "később megszerzi is a jelszavadat, nem tudja visszafejteni a korábbi beszélgetéseket.\n\n" +
            "Minden üzenetnek van egy sorszáma, amely megakadályozza ugyanannak az üzenetnek az ismételt " +
            "lejátszását. A titkosítási kulcsok a böngészőbe vannak zárva és nem másolhatók ki.\n\n" +
            "Csatlakozás után megjelenik egy ujjlenyomat, amelyet mindkét fél láthat. Ezt verbálisan vagy egy " +
            "másik csatornán keresztül kell megerősítened — ha az ujjlenyomatok eltérnek, valaki lehallgatást " +
            "kísérelhet meg.\n\n" +
            "A szerver korlátozza a kapcsolódási sebességet, csatornánként csak két résztvevőt engedélyez, " +
            "és csak titkosított adatokat továbbít. A szerver soha nem küldhet hamis rendszerüzeneteket az ügyfeleknek.",
        helpLinksTitle: "Forráskód és tárhelyszolgáltatás",
        helpLinksText: "A szerver az EU-ban (Svédország) van elhelyezve. A NullPost nyílt forráskódú.",
    },
    fi: {
        title: "NullPost",
        subtitle: "Turvallinen, salattu kanava kahden tietokoneen välillä",
        passwordLabel: "Jaettu salasana",
        passwordPlaceholder: "Jaettu salasana",
        connect: "Yhdistä",
        securityNote:
            "Salasanasi ei koskaan poistu laitteeltasi. Kaikki viestit salataan selaimessasi ennen " +
            "lähettämistä — palvelin ei voi lukea niitä. Yhdistämisen jälkeen vahvista sormenjälki " +
            "suullisesti kumppanisi kanssa ennen arkaluonteisten tietojen lähettämistä.",
        securityNoteLabel: "Turvallisuustiedot",
        themeLabel: "Vaihda teema",
        langLabel: "Vaihda kieli",
        statusWaiting: "Odotetaan kumppanin yhdistämistä...",
        statusKeyExchange: "Vaihdetaan istuntoavaimia...",
        statusConnected: "Kumppani yhdistynyt",
        statusPeerLeft: "Kumppani katkaisi yhteyden",
        statusReconnecting: "Yhdistetään uudelleen...",
        statusDisconnected: "Yhteys katkaistu",
        fingerprintLabel: "Vahvista kumppanin kanssa: ",
        disconnect: "Katkaise yhteys",
        messageLabel: "Viesti",
        messagesLabel: "Viestit",
        messagePlaceholder: "Kirjoita viesti… (Enter lähettääksesi, Shift+Enter uudelle riville)",
        send: "Lähetä",
        you: "Sinä",
        peer: "Kumppani",
        copy: "Kopioi",
        copied: "Kopioitu!",
        sysChannelOpen: "Kanava auki — odotetaan kumppanin yhdistämistä.",
        sysPeerConnected: "Kumppani yhdistynyt. Vaihdetaan istuntoavaimia...",
        sysKeyExchangeTimeout: "Avainvaihto aikakatkaisu — katkaise yhteys ja yritä uudelleen.",
        sysPeerLeft: "Kumppani katkaisi yhteyden.",
        sysRejected: "Yhteys hylätty — kanavalla on jo kaksi osallistujaa.",
        sysTimedOut: "Kanava suljettu — liian kauan passiivisena.",
        errTimedOut: "Aikakatkaisu — kanava suljettu passiivisuuden takia.",
        sysKeysExchanged: "Istuntoavaimet vaihdettu. Vahvista sormenjälki suullisesti ennen arkaluonteisten tietojen lähettämistä.",
        sysDecryptFailed: "[Viestin salauksen purku epäonnistui — mahdollinen manipulointi tai väärä avain]",
        sysKeyExchangeSendFailed: "[Virhe avaimen lähettämisessä — katkaise yhteys ja yritä uudelleen]",
        sysKeyExchangeFailed: "[Avainvaihto epäonnistui — väärä salasana tai manipuloitu data]",
        sysReconnectFailed: "Uudelleenyhdistäminen epäonnistui. Katkaise yhteys ja yritä uudelleen manuaalisesti.",
        sysEncryptFailed: "[Salaus epäonnistui — viestiä ei lähetetty]",
        errKeyExchangeTimeout: "Avainvaihto epäonnistui. Toinen osapuoli ei vastannut.",
        errChannelFull: "Kanava on täynnä — toinen laite on jo yhdistetty tällä salasanalla.",
        errKeyExchangeFailed: "Avainvaihto epäonnistui.",
        errKeyExchangePassword: "Avainvaihto epäonnistui — varmista, että molemmat osapuolet käyttävät samaa salasanaa.",
        passwordWeak: "Heikko salasana",
        passwordFair: "Kohtalainen salasana",
        passwordGood: "Hyvä salasana",
        passwordStrong: "Vahva salasana",
        errNoPassword: "Anna jaettu salasana.",
        errPasswordTooShort: "Salasanan on oltava vähintään 6 merkkiä.",
        errDeriveFailed: "Avaimen johtaminen epäonnistui — selaimesi ei ehkä tue Web Crypto API:a.",
        errKeygenFailed: "Istuntoavainten luominen epäonnistui.",
        attachFile: "Liitä tiedosto",
        dropFileHere: "Pudota tiedosto(t) tähän",
        fileSending: "Lähetetään…",
        fileReceiving: "Vastaanotetaan…",
        fileSent: "Lähetetty",
        download: "Lataa",
        fileTransferError: "Tiedostonsiirto epäonnistui",
        fileTooLarge: "Tiedosto on liian suuri. Enimmäiskoko on 50 MB.",
        fileEmpty: "Tyhjää tiedostoa ei voi lähettää.",
        fileNotConnected: "Tiedostoa ei voi lähettää — ei yhteyttä kumppaniin.",
        fileTransferAborted: "Tiedostonsiirto keskeytettiin — kumppani katkaisi yhteyden.",
        fileDownloadedByPeer: "Kumppani latasi",
        notifTitle: "Kumppani yhdistyi",
        notifBody: "Kumppanisi liittyi kanavalle",
        typingIndicator: "Kumppani kirjoittaa…",
        qrLabel: "QR-koodi",
        qrHint: "Anna kumppanisi skannata jakaaksesi salasanan",
        unsend: "Peru lähetys",
        unsent: "(Peruttu)",
        copyLink: "Kopioi linkki",
        seen: "Nähty",
        expired: "(Vanhentunut)",
        maskToggle: "Piilota",
        expiryLabel: "Vanhenemisajastin",
        expiryPrompt: "Poista:",
        modeRelay: "Välitys (palvelin)",
        modeP2P: "Suora (P2P)",
        modeRelayDesc: "Salatut viestit välitetään palvelimen kautta",
        modeP2PDesc: "Data lähetetään suoraan selainten välillä, ohittaen palvelimen",
        sysP2PConnected: "Suora yhteys muodostettu — data lähetetään selainten välillä.",
        sysP2PFallback: "Suora yhteys epäonnistui — käytetään salattua välitystä.",
        fileTooLargeP2P: "Tiedosto on liian suuri. Enimmäiskoko on 500 MB.",
        statusConnectedP2P: "Kumppani yhdistynyt (P2P)",
        helpLabel: "Ohje",
        helpClose: "Sulje",
        helpTitle: "Tietoja NullPost",
        helpAboutTitle: "Tietoja projektista",
        helpAboutText:
            "NullPost on työkalu tekstin ja tiedostojen turvalliseen jakamiseen kahden laitteen välillä. Avaa " +
            "NullPost kahdella tietokoneella, syötä sama salasana ja aloita jakaminen. Se on niin yksinkertaista.\n\n" +
            "Tiliä ei tarvita. Palvelimelle ei tallenneta mitään. Lokeja ei pidetä. Kaikki lähettämäsi on " +
            "salattu selaimessasi ennen kuin se poistuu laitteeltasi — palvelin ei koskaan näe sisältöä.\n\n" +
            "Voit valita kahden yhteystavan välillä: Välitys lähettää datan salattuna palvelimen kautta, kun " +
            "taas Suora (P2P) lähettää datan suoraan kahden selaimen välillä ilman palvelimen läpi kulkemista. " +
            "Kummassakin tapauksessa kaikki data on täysin salattua koko matkan.\n\n" +
            "NullPost tukee tekstiviestejä, jopa 50 MB tiedostoja (500 MB P2P-tilassa) ja kuvia esikatselulla. " +
            "Viesteillä voi olla itsetuhoutuva ajastin, ne voidaan peruuttaa ja näet onko kumppanisi lukenut ne. " +
            "Käyttöliittymä on saatavilla 28 kielellä ja toimii pöytäkoneella ja mobiilissa.",
        helpPrivacyTitle: "Tietosuoja",
        helpPrivacyText:
            "NullPost on rakennettu yhden periaatteen ympärille: tietosi kuuluvat vain sinulle. Palvelin toimii " +
            "vain välittäjänä — se välittää salattuja paketteja eikä pysty lukemaan, tallentamaan tai kirjaamaan " +
            "sisältöä.\n\n" +
            "Salasanasi ei koskaan poistu laitteeltasi. Sitä käytetään vain paikallisesti selaimessasi turvallisen " +
            "yhteyden muodostamiseen. Palvelin ei koskaan näe salasanaa.\n\n" +
            "Tiliä ei vaadita. Evästeitä ei käytetä seurantaan. Analytiikkaa tai telemetriaa ei kerätä. " +
            "IP-osoitteita ei kirjata. Palvelin ei tallenna mitään levylle — kaikki tiedot ovat vain muistissa " +
            "ja katoavat, kun palvelin käynnistyy uudelleen.\n\n" +
            "Suora (P2P) -tilassa viestien ja tiedostojen sisältö ei edes kulje palvelimen kautta — se virtaa " +
            "suoraan kahden selaimen välillä.\n\n" +
            "NullPost on täysin avoimen lähdekoodin. Voit tarkistaa koodin, ajaa oman instanssisi ja varmistaa " +
            "itse kaikki täällä esitetyt väitteet.",
        helpSecurityTitle: "Turvallisuus",
        helpSecurityText:
            "Kaikki NullPost-viestintä on päästä päähän salattu selaimen sisäisellä kryptografialla. " +
            "Salaukseen ei käytetä kolmannen osapuolen kirjastoja.\n\n" +
            "Kun syötät salasanan, selaimesi luo paikallisesti kolme asiaa: kanavan tunnuksen kumppanin " +
            "löytämiseksi, salausavaimen ja sormenjäljen vahvistusta varten. Salasanaa ei koskaan lähetetä " +
            "palvelimelle.\n\n" +
            "Kun molemmat kumppanit yhdistyvät, selaimet luovat ainutlaatuisen istuntoavaimen, joka koskee " +
            "vain kyseistä istuntoa. Avain hylätään sen jälkeen. Tämä tarkoittaa, että vaikka joku myöhemmin " +
            "saisi salasanasi, he eivät voi purkaa aiempien keskustelujen salausta.\n\n" +
            "Jokaisella viestillä on järjestysnumero, joka estää saman viestin toistamisen. Salausavaimet " +
            "ovat lukittuna selaimeen eikä niitä voi kopioida ulos.\n\n" +
            "Yhdistämisen jälkeen näytetään sormenjälki, jonka molemmat kumppanit voivat nähdä. Se pitäisi " +
            "vahvistaa suullisesti tai toista kanavaa käyttäen — jos sormenjäljet eroavat, joku saattaa " +
            "yrittää salakuuntelua.\n\n" +
            "Palvelin rajoittaa yhteysnopeuksia, sallii vain kaksi osallistujaa kanavaa kohden ja välittää " +
            "vain salattua dataa. Palvelin ei voi koskaan lähettää vääriä järjestelmäviestejä asiakkaille.",
        helpLinksTitle: "Lähdekoodi ja isännöinti",
        helpLinksText: "Palvelin sijaitsee EU:ssa (Ruotsi). NullPost on avointa lähdekoodia.",
    },
    bg: {
        title: "NullPost",
        subtitle: "Защитен, криптиран канал между два компютъра",
        passwordLabel: "Споделена парола",
        passwordPlaceholder: "Споделена парола",
        connect: "Свързване",
        securityNote:
            "Вашата парола никога не напуска устройството ви. Всички съобщения се криптират в браузъра " +
            "ви преди да бъдат препратени — сървърът не може да ги прочете. След свързване потвърдете " +
            "пръстовия отпечатък устно с партньора си, преди да изпратите чувствителна информация.",
        securityNoteLabel: "Информация за сигурност",
        themeLabel: "Смяна на тема",
        langLabel: "Смяна на език",
        statusWaiting: "Изчаква се свързване на партньора...",
        statusKeyExchange: "Обмен на ключове на сесията...",
        statusConnected: "Партньорът се свърза",
        statusPeerLeft: "Партньорът се изключи",
        statusReconnecting: "Повторно свързване...",
        statusDisconnected: "Изключен",
        fingerprintLabel: "Потвърдете с партньора: ",
        disconnect: "Изключване",
        messageLabel: "Съобщение",
        messagesLabel: "Съобщения",
        messagePlaceholder: "Напишете съобщение… (Enter за изпращане, Shift+Enter за нов ред)",
        send: "Изпращане",
        you: "Вие",
        peer: "Партньор",
        copy: "Копиране",
        copied: "Копирано!",
        sysChannelOpen: "Каналът е отворен — изчаква се свързване на партньора.",
        sysPeerConnected: "Партньорът се свърза. Обмен на ключове на сесията...",
        sysKeyExchangeTimeout: "Обменът на ключове изтече — изключете се и опитайте отново.",
        sysPeerLeft: "Партньорът се изключи.",
        sysRejected: "Връзката е отхвърлена — каналът вече има двама участника.",
        sysTimedOut: "Каналът е затворен — неактивен твърде дълго.",
        errTimedOut: "Изтекло време — каналът е затворен поради неактивност.",
        sysKeysExchanged: "Ключовете на сесията са обменени. Потвърдете пръстовия отпечатък устно, преди да изпратите чувствителна информация.",
        sysDecryptFailed: "[Не може да се декриптира съобщение — възможна манипулация или грешен ключ]",
        sysKeyExchangeSendFailed: "[Грешка при изпращане на ключ — изключете се и опитайте отново]",
        sysKeyExchangeFailed: "[Обменът на ключове е неуспешен — грешна парола или манипулирани данни]",
        sysReconnectFailed: "Повторното свързване е неуспешно. Изключете се и опитайте ръчно.",
        sysEncryptFailed: "[Криптирането е неуспешно — съобщението не е изпратено]",
        errKeyExchangeTimeout: "Обменът на ключове е неуспешен. Другата страна не отговори.",
        errChannelFull: "Каналът е пълен — друго устройство вече е свързано с тази парола.",
        errKeyExchangeFailed: "Обменът на ключове е неуспешен.",
        errKeyExchangePassword: "Обменът на ключове е неуспешен — проверете дали и двете страни използват една и съща парола.",
        passwordWeak: "Слаба парола",
        passwordFair: "Средна парола",
        passwordGood: "Добра парола",
        passwordStrong: "Силна парола",
        errNoPassword: "Моля въведете споделена парола.",
        errPasswordTooShort: "Паролата трябва да е поне 6 символа.",
        errDeriveFailed: "Извличането на ключ е неуспешно — браузърът ви може да не поддържа Web Crypto API.",
        errKeygenFailed: "Не може да се генерират ключове на сесията.",
        attachFile: "Прикачи файл",
        dropFileHere: "Пуснете файл(ове) тук",
        fileSending: "Изпращане…",
        fileReceiving: "Получаване…",
        fileSent: "Изпратено",
        download: "Изтегляне",
        fileTransferError: "Прехвърлянето на файл е неуспешно",
        fileTooLarge: "Файлът е твърде голям. Максимален размер 50 MB.",
        fileEmpty: "Не може да се изпрати празен файл.",
        fileNotConnected: "Не може да се изпрати файл — не е свързан с партньора.",
        fileTransferAborted: "Прехвърлянето на файл е прекъснато — партньорът се изключи.",
        fileDownloadedByPeer: "Изтеглено от партньора",
        notifTitle: "Партньорът се свърза",
        notifBody: "Партньорът ви се присъедини към канала",
        typingIndicator: "Партньорът пише…",
        qrLabel: "QR код",
        qrHint: "Нека партньорът сканира, за да сподели паролата",
        unsend: "Оттегляне",
        unsent: "(Оттеглено)",
        copyLink: "Копиране на връзка",
        seen: "Видяно",
        expired: "(Изтекло)",
        maskToggle: "Скрий",
        expiryLabel: "Таймер за изтичане",
        expiryPrompt: "Изтриване след:",
        modeRelay: "Ретранслация (сървър)",
        modeP2P: "Директно (P2P)",
        modeRelayDesc: "Криптираните съобщения се препращат през сървъра",
        modeP2PDesc: "Данните се изпращат директно между браузърите, заобикаляйки сървъра",
        sysP2PConnected: "Директна връзка установена — данните се изпращат между браузърите.",
        sysP2PFallback: "Директната връзка е неуспешна — използва се криптирана ретранслация.",
        fileTooLargeP2P: "Файлът е твърде голям. Максимален размер 500 MB.",
        statusConnectedP2P: "Партньорът се свърза (P2P)",
        helpLabel: "Помощ",
        helpClose: "Затваряне",
        helpTitle: "За NullPost",
        helpAboutTitle: "За проекта",
        helpAboutText:
            "NullPost е инструмент за безопасно споделяне на текст и файлове между две устройства. Отворете " +
            "NullPost на два компютъра, въведете същата парола и започнете да споделяте. Толкова е просто.\n\n" +
            "Не е необходим акаунт. Нищо не се съхранява на сървъра. Не се водят журнали. Всичко, което " +
            "изпращате, е криптирано в браузъра ви, преди да напусне устройството ви — сървърът никога не " +
            "вижда съдържанието.\n\n" +
            "Можете да избирате между два режима на свързване: Ретранслацията изпраща данните криптирани " +
            "през сървъра, докато Директно (P2P) изпраща данните директно между двата браузъра, без да " +
            "минава през сървъра. Във всеки случай всички данни са напълно криптирани по целия път.\n\n" +
            "NullPost поддържа текстови съобщения, файлове до 50 MB (500 MB в режим P2P) и изображения с " +
            "предварителен преглед. Съобщенията могат да имат таймер за самоунищожение, могат да бъдат " +
            "оттеглени и можете да видите дали партньорът ви ги е прочел. Интерфейсът е достъпен на " +
            "28 езика и работи на настолен компютър и мобилно устройство.",
        helpPrivacyTitle: "Поверителност",
        helpPrivacyText:
            "NullPost е изграден около един принцип: вашите данни принадлежат само на вас. Сървърът " +
            "действа само като ретранслатор — препраща криптирани пакети и няма възможност да чете, " +
            "съхранява или записва никакво съдържание.\n\n" +
            "Вашата парола никога не напуска устройството ви. Тя се използва само локално в браузъра ви " +
            "за установяване на защитена връзка. Сървърът никога не вижда паролата.\n\n" +
            "Не се изисква акаунт. Бисквитките не се използват за проследяване. Не се събират аналитични " +
            "данни или телеметрия. IP адресите не се записват. Сървърът не съхранява нищо на диск — " +
            "цялата информация съществува само в паметта и изчезва при рестартиране на сървъра.\n\n" +
            "В режим Директно (P2P) съдържанието на съобщенията и файловете дори не преминава през " +
            "сървъра — то се предава директно между двата браузъра.\n\n" +
            "NullPost е напълно с отворен код. Можете да прегледате кода, да стартирате собствен екземпляр " +
            "и сами да проверите всяко твърдение, направено тук.",
        helpSecurityTitle: "Сигурност",
        helpSecurityText:
            "Цялата комуникация в NullPost е криптирана от край до край с помощта на вградената " +
            "криптография на браузъра. За криптиране не се използват библиотеки на трети страни.\n\n" +
            "Когато въведете парола, браузърът ви създава три неща локално: идентификатор на канал за " +
            "намиране на партньора, ключ за криптиране и пръстов отпечатък за проверка. Паролата никога " +
            "не се изпраща до сървъра.\n\n" +
            "След като и двамата партньори се свържат, браузърите създават уникален ключ на сесията, " +
            "приложим само за тази сесия. Ключът се изхвърля след това. Това означава, че дори ако " +
            "някой по-късно получи паролата ви, той не може да декриптира минали разговори.\n\n" +
            "Всяко съобщение има пореден номер, който предотвратява повторното изпращане на същото " +
            "съобщение. Ключовете за криптиране са заключени в браузъра и не могат да бъдат копирани.\n\n" +
            "След свързване се показва пръстов отпечатък, видим и за двамата партньори. Трябва да го " +
            "потвърдите устно или чрез друг канал — ако отпечатъците се различават, някой може да се " +
            "опитва да подслушва.\n\n" +
            "Сървърът ограничава скоростта на свързване, позволява само двама участника на канал и " +
            "препраща само криптирани данни. Сървърът никога не може да изпраща фалшиви системни " +
            "съобщения до клиентите.",
        helpLinksTitle: "Изходен код и хостинг",
        helpLinksText: "Сървърът е хостван в ЕС (Швеция). NullPost е с отворен код.",
    },
    sk: {
        title: "NullPost",
        subtitle: "Bezpečný, šifrovaný kanál medzi dvoma počítačmi",
        passwordLabel: "Zdieľané heslo",
        passwordPlaceholder: "Zdieľané heslo",
        connect: "Pripojiť",
        securityNote:
            "Vaše heslo nikdy neopustí vaše zariadenie. Všetky správy sú zašifrované vo vašom " +
            "prehliadači pred prenosom — server ich nemôže čítať. Po pripojení overte odtlačok verbálne " +
            "s partnerom pred odoslaním citlivých informácií.",
        securityNoteLabel: "Bezpečnostné informácie",
        themeLabel: "Prepnúť tému",
        langLabel: "Prepnúť jazyk",
        statusWaiting: "Čakám na pripojenie partnera...",
        statusKeyExchange: "Výmena kľúčov relácie...",
        statusConnected: "Partner pripojený",
        statusPeerLeft: "Partner odpojený",
        statusReconnecting: "Opätovné pripojenie...",
        statusDisconnected: "Odpojené",
        fingerprintLabel: "Overte s partnerom: ",
        disconnect: "Odpojiť",
        messageLabel: "Správa",
        messagesLabel: "Správy",
        messagePlaceholder: "Napíšte správu… (Enter pre odoslanie, Shift+Enter pre nový riadok)",
        send: "Odoslať",
        you: "Vy",
        peer: "Partner",
        copy: "Kopírovať",
        copied: "Skopírované!",
        sysChannelOpen: "Kanál otvorený — čakám na pripojenie partnera.",
        sysPeerConnected: "Partner pripojený. Výmena kľúčov relácie...",
        sysKeyExchangeTimeout: "Výmena kľúčov vypršala — odpojte sa a skúste znovu.",
        sysPeerLeft: "Partner odpojený.",
        sysRejected: "Pripojenie odmietnuté — kanál už má dvoch účastníkov.",
        sysTimedOut: "Kanál uzavretý — príliš dlho neaktívny.",
        errTimedOut: "Časový limit — kanál uzavretý kvôli nečinnosti.",
        sysKeysExchanged: "Kľúče relácie vymenené. Overte odtlačok verbálne pred odoslaním citlivých informácií.",
        sysDecryptFailed: "[Správu sa nepodarilo dešifrovať — možná manipulácia alebo nesprávny kľúč]",
        sysKeyExchangeSendFailed: "[Chyba pri odosielaní kľúča — odpojte sa a skúste znovu]",
        sysKeyExchangeFailed: "[Výmena kľúčov zlyhala — nesprávne heslo alebo manipulované dáta]",
        sysReconnectFailed: "Opätovné pripojenie zlyhalo. Odpojte sa a skúste znovu manuálne.",
        sysEncryptFailed: "[Šifrovanie zlyhalo — správa nebola odoslaná]",
        errKeyExchangeTimeout: "Výmena kľúčov zlyhala. Druhá strana neodpovedala.",
        errChannelFull: "Kanál je plný — iné zariadenie je už pripojené s týmto heslom.",
        errKeyExchangeFailed: "Výmena kľúčov zlyhala.",
        errKeyExchangePassword: "Výmena kľúčov zlyhala — overte, že obe strany používajú rovnaké heslo.",
        passwordWeak: "Slabé heslo",
        passwordFair: "Priemerné heslo",
        passwordGood: "Dobré heslo",
        passwordStrong: "Silné heslo",
        errNoPassword: "Prosím zadajte zdieľané heslo.",
        errPasswordTooShort: "Heslo musí mať aspoň 6 znakov.",
        errDeriveFailed: "Odvádzanie kľúča zlyhalo — váš prehliadač možno nepodporuje Web Crypto API.",
        errKeygenFailed: "Nepodarilo sa vygenerovať kľúče relácie.",
        attachFile: "Priložiť súbor",
        dropFileHere: "Presuňte súbor(y) sem",
        fileSending: "Odosielanie…",
        fileReceiving: "Prijímanie…",
        fileSent: "Odoslané",
        download: "Stiahnuť",
        fileTransferError: "Prenos súboru zlyhal",
        fileTooLarge: "Súbor je príliš veľký. Maximálna veľkosť je 50 MB.",
        fileEmpty: "Nemožno odoslať prázdny súbor.",
        fileNotConnected: "Nemožno odoslať súbor — partner nie je pripojený.",
        fileTransferAborted: "Prenos súboru prerušený — partner odpojený.",
        fileDownloadedByPeer: "Stiahnuté partnerom",
        notifTitle: "Partner pripojený",
        notifBody: "Váš partner sa pripojil ku kanálu",
        typingIndicator: "Partner píše…",
        qrLabel: "QR kód",
        qrHint: "Nechajte partnera naskenovať pre zdieľanie hesla",
        unsend: "Odvolať",
        unsent: "(Odvolané)",
        copyLink: "Kopírovať odkaz",
        seen: "Prečítané",
        expired: "(Vypršalo)",
        maskToggle: "Skryť",
        expiryLabel: "Časovač vypršania",
        expiryPrompt: "Vymazať za:",
        modeRelay: "Relé (server)",
        modeP2P: "Priame (P2P)",
        modeRelayDesc: "Šifrované správy sú preposielané cez server",
        modeP2PDesc: "Dáta sú odosielané priamo medzi prehliadačmi, obchádzajúc server",
        sysP2PConnected: "Priame pripojenie nadviazané — dáta sú odosielané medzi prehliadačmi.",
        sysP2PFallback: "Priame pripojenie zlyhalo — používam šifrované relé namiesto toho.",
        fileTooLargeP2P: "Súbor je príliš veľký. Maximálna veľkosť je 500 MB.",
        statusConnectedP2P: "Partner pripojený (P2P)",
        helpLabel: "Pomoc",
        helpClose: "Zavrieť",
        helpTitle: "O NullPost",
        helpAboutTitle: "O projekte",
        helpAboutText:
            "NullPost je nástroj na bezpečné zdieľanie textu a súborov medzi dvoma zariadeniami. Otvorte NullPost " +
            "na dvoch počítačoch, zadajte rovnaké heslo a začnite zdieľať. Je to také jednoduché.\n\n" +
            "Nie je potrebný žiadny účet. Na serveri sa nič neuchováva. Nevedú sa žiadne záznamy. Všetko, čo " +
            "odošlete, je zašifrované vo vašom prehliadači pred opustením zariadenia — server nikdy nevidí obsah.\n\n" +
            "Môžete si vybrať medzi dvoma režimami pripojenia: Relé odosiela dáta zašifrované cez server, zatiaľ " +
            "čo Priame (P2P) odosiela dáta priamo medzi dvoma prehliadačmi bez prechodu cez server. V oboch " +
            "prípadoch sú všetky dáta plne zašifrované po celú dobu.\n\n" +
            "NullPost podporuje textové správy, súbory až 50 MB (500 MB v režime P2P) a obrázky s náhľadom. " +
            "Správy môžu mať časovač sebazničenia, možno ich odvolať a vidíte, či ich partner prečítal. " +
            "Rozhranie je dostupné v 28 jazykoch a funguje na počítači aj mobile.",
        helpPrivacyTitle: "Súkromie",
        helpPrivacyText:
            "NullPost je postavený na jedinom princípe: vaše dáta patria len vám. Server funguje iba ako " +
            "prenosové miesto — preposiela zašifrované pakety a nemá možnosť čítať, ukladať ani zaznamenávať obsah.\n\n" +
            "Vaše heslo nikdy neopustí vaše zariadenie. Používa sa iba lokálne v prehliadači na nastavenie " +
            "bezpečného pripojenia. Server heslo nikdy nevidí.\n\n" +
            "Nie je potrebný žiadny účet. Žiadne súbory cookie sa nepoužívajú na sledovanie. Nezhromažďujú sa " +
            "žiadne analytické údaje ani telemetria. IP adresy sa nezaznamenávajú. Server neuchováva nič na " +
            "disku — všetky informácie existujú iba v pamäti a zmiznú pri reštarte servera.\n\n" +
            "V režime Priame (P2P) neprechádzajú správy ani súbory serverom — prúdia priamo medzi dvoma prehliadačmi.\n\n" +
            "NullPost je plne open source. Môžete skontrolovať kód, spustiť vlastnú inštanciu a sami overiť " +
            "všetky tu uvedené tvrdenia.",
        helpSecurityTitle: "Zabezpečenie",
        helpSecurityText:
            "Veškerá komunikácia v NullPost je end-to-end šifrovaná pomocou vstavanej kryptografie prehliadača. " +
            "Na šifrovanie sa nepoužívajú žiadne knižnice tretích strán.\n\n" +
            "Keď zadáte heslo, prehliadač lokálne vytvorí tri veci: ID kanálu na nájdenie partnera, šifrovací " +
            "kľúč a odtlačok na overenie. Heslo sa nikdy neodosiela na server.\n\n" +
            "Po pripojení oboch partnerov prehliadače vytvoria jedinečný kľúč relácie platný iba pre danú " +
            "reláciu. Kľúč je potom zahodený. To znamená, že aj keby niekto získal vaše heslo, nemôže " +
            "dešifrovať minulé rozhovory.\n\n" +
            "Každá správa má poradové číslo, ktoré zabraňuje prehraniu rovnakej správy. Šifrovacie kľúče sú " +
            "uzamknuté v prehliadači a nemožno ich kopírovať.\n\n" +
            "Po pripojení sa zobrazí odtlačok viditeľný obom partnerom. Mali by ste ho potvrdiť verbálne alebo " +
            "cez iný kanál — ak sa odtlačky líšia, niekto sa môže pokúšať odpočúvať.\n\n" +
            "Server obmedzuje rýchlosť pripojenia, povoľuje iba dvoch účastníkov na kanál a preposiela iba " +
            "zašifrované dáta. Server nikdy nemôže posielať falošné systémové správy klientom.",
        helpLinksTitle: "Zdrojový kód a hosting",
        helpLinksText: "Server je hostovaný v EÚ (Švédsko). NullPost je open source.",
    },
    hr: {
        title: "NullPost",
        subtitle: "Siguran, šifrirani kanal između dva računala",
        passwordLabel: "Zajednička lozinka",
        passwordPlaceholder: "Zajednička lozinka",
        connect: "Poveži se",
        securityNote:
            "Vaša lozinka nikada ne napušta vaš uređaj. Sve poruke su šifrirane u vašem pregledniku " +
            "prije prosljeđivanja — server ih ne može čitati. Nakon povezivanja, verbalno potvrdite " +
            "otisak s partnerom prije slanja osjetljivih informacija.",
        securityNoteLabel: "Sigurnosne informacije",
        themeLabel: "Promijeni temu",
        langLabel: "Promijeni jezik",
        statusWaiting: "Čekanje na spajanje partnera...",
        statusKeyExchange: "Razmjena ključeva sesije...",
        statusConnected: "Partner spojen",
        statusPeerLeft: "Partner odspojio se",
        statusReconnecting: "Ponovno spajanje...",
        statusDisconnected: "Odspojeno",
        fingerprintLabel: "Potvrdite s partnerom: ",
        disconnect: "Odspoji se",
        messageLabel: "Poruka",
        messagesLabel: "Poruke",
        messagePlaceholder: "Unesite poruku… (Enter za slanje, Shift+Enter za novi redak)",
        send: "Pošalji",
        you: "Vi",
        peer: "Partner",
        copy: "Kopiraj",
        copied: "Kopirano!",
        sysChannelOpen: "Kanal otvoren — čekanje na spajanje partnera.",
        sysPeerConnected: "Partner spojen. Razmjena ključeva sesije...",
        sysKeyExchangeTimeout: "Razmjena ključeva je istekla — odspojite se i pokušajte ponovo.",
        sysPeerLeft: "Partner odspojio se.",
        sysRejected: "Veza odbijena — kanal već ima dva sudionika.",
        sysTimedOut: "Kanal zatvoren — predugo neaktivan.",
        errTimedOut: "Vremensko ograničenje — kanal zatvoren zbog neaktivnosti.",
        sysKeysExchanged: "Ključevi sesije razmijenjeni. Potvrdite otisak verbalno prije slanja osjetljivih informacija.",
        sysDecryptFailed: "[Nije moguće dešifrirati poruku — moguće neovlašteno mijenjanje ili pogrešan ključ]",
        sysKeyExchangeSendFailed: "[Pogreška pri slanju ključa — odspojite se i pokušajte ponovo]",
        sysKeyExchangeFailed: "[Razmjena ključeva nije uspjela — pogrešna lozinka ili izmijenjeni podaci]",
        sysReconnectFailed: "Nije moguće ponovno se spojiti. Odspojite se i pokušajte ručno.",
        sysEncryptFailed: "[Šifriranje nije uspjelo — poruka nije poslana]",
        errKeyExchangeTimeout: "Razmjena ključeva nije uspjela. Druga strana nije odgovorila.",
        errChannelFull: "Kanal je pun — drugi uređaj je već spojen s ovom lozinkom.",
        errKeyExchangeFailed: "Razmjena ključeva nije uspjela.",
        errKeyExchangePassword: "Razmjena ključeva nije uspjela — provjerite koriste li obje strane istu lozinku.",
        passwordWeak: "Slaba lozinka",
        passwordFair: "Osrednja lozinka",
        passwordGood: "Dobra lozinka",
        passwordStrong: "Jaka lozinka",
        errNoPassword: "Molimo unesite zajedničku lozinku.",
        errPasswordTooShort: "Lozinka mora imati najmanje 6 znakova.",
        errDeriveFailed: "Izvođenje ključa nije uspjelo — vaš preglednik možda ne podržava Web Crypto API.",
        errKeygenFailed: "Nije moguće generirati ključeve sesije.",
        attachFile: "Priloži datoteku",
        dropFileHere: "Povucite datoteku(e) ovdje",
        fileSending: "Slanje…",
        fileReceiving: "Primanje…",
        fileSent: "Poslano",
        download: "Preuzmi",
        fileTransferError: "Prijenos datoteke nije uspio",
        fileTooLarge: "Datoteka je prevelika. Maksimalna veličina je 50 MB.",
        fileEmpty: "Nije moguće poslati praznu datoteku.",
        fileNotConnected: "Nije moguće poslati datoteku — partner nije spojen.",
        fileTransferAborted: "Prijenos datoteke prekinut — partner odspojio se.",
        fileDownloadedByPeer: "Preuzeto od partnera",
        notifTitle: "Partner spojen",
        notifBody: "Vaš partner se spojio na kanal",
        typingIndicator: "Partner piše…",
        qrLabel: "QR kod",
        qrHint: "Neka partner skenira za dijeljenje lozinke",
        unsend: "Povuci",
        unsent: "(Povučeno)",
        copyLink: "Kopiraj vezu",
        seen: "Viđeno",
        expired: "(Isteklo)",
        maskToggle: "Sakrij",
        expiryLabel: "Tajmer isteka",
        expiryPrompt: "Obriši za:",
        modeRelay: "Posrednik (server)",
        modeP2P: "Izravno (P2P)",
        modeRelayDesc: "Šifrirane poruke se prosljeđuju putem servera",
        modeP2PDesc: "Podaci se šalju izravno između preglednika, zaobilazeći server",
        sysP2PConnected: "Izravna veza uspostavljena — podaci se šalju između preglednika.",
        sysP2PFallback: "Izravna veza nije uspjela — koristi se šifrirani posrednik.",
        fileTooLargeP2P: "Datoteka je prevelika. Maksimalna veličina je 500 MB.",
        statusConnectedP2P: "Partner spojen (P2P)",
        helpLabel: "Pomoć",
        helpClose: "Zatvori",
        helpTitle: "O NullPost",
        helpAboutTitle: "O projektu",
        helpAboutText:
            "NullPost je alat za sigurno dijeljenje teksta i datoteka između dva uređaja. Otvorite NullPost na " +
            "dva računala, unesite istu lozinku i počnite dijeliti. Tako je jednostavno.\n\n" +
            "Nije potreban korisnički račun. Na serveru se ništa ne pohranjuje. Ne vode se nikakvi zapisi. Sve " +
            "što pošaljete je šifrirano u vašem pregledniku prije napuštanja uređaja — server nikada ne vidi " +
            "sadržaj.\n\n" +
            "Možete birati između dva načina spajanja: Posrednik šalje podatke šifrirane putem servera, dok " +
            "Izravno (P2P) šalje podatke izravno između dva preglednika bez prolaska kroz server. U svakom " +
            "slučaju, svi su podaci potpuno šifrirani cijelo vrijeme.\n\n" +
            "NullPost podržava tekstualne poruke, datoteke do 50 MB (500 MB u P2P načinu) i slike s " +
            "pretpregledom. Poruke mogu imati tajmer samouništavanja, mogu se povući i možete vidjeti je li ih " +
            "partner pročitao. Sučelje je dostupno na 28 jeziku i radi na stolnom računalu i mobilnom uređaju.",
        helpPrivacyTitle: "Privatnost",
        helpPrivacyText:
            "NullPost je izgrađen oko jednog načela: vaši podaci pripadaju samo vama. Server djeluje samo kao " +
            "posrednik — prosljeđuje šifrirane pakete i nema mogućnost čitati, pohraniti ili bilježiti sadržaj.\n\n" +
            "Vaša lozinka nikada ne napušta vaš uređaj. Koristi se samo lokalno u pregledniku za uspostavljanje " +
            "sigurne veze. Server nikada ne vidi lozinku.\n\n" +
            "Nije potreban korisnički račun. Kolačići se ne koriste za praćenje. Ne prikupljaju se nikakvi " +
            "analitički podaci ni telemetrija. IP adrese se ne bilježe. Server ništa ne pohranjuje na disk — " +
            "sve informacije postoje samo u memoriji i nestaju pri ponovnom pokretanju servera.\n\n" +
            "U načinu Izravno (P2P) sadržaj poruka i datoteka čak ne prolazi kroz server — šalje se izravno " +
            "između dva preglednika.\n\n" +
            "NullPost je potpuno otvorenog koda. Možete pregledati kod, pokrenuti vlastitu instancu i sami " +
            "provjeriti sve tvrdnje navedene ovdje.",
        helpSecurityTitle: "Sigurnost",
        helpSecurityText:
            "Sva komunikacija u NullPost-u je end-to-end šifrirana pomoću ugrađene kriptografije preglednika. " +
            "Za šifriranje se ne koriste knjižnice trećih strana.\n\n" +
            "Kada unesete lozinku, preglednik lokalno stvara tri stvari: ID kanala za pronalaženje partnera, " +
            "ključ za šifriranje i otisak za provjeru. Lozinka se nikada ne šalje na server.\n\n" +
            "Nakon što se oba partnera spoje, preglednici stvaraju jedinstveni ključ sesije koji vrijedi samo " +
            "za tu sesiju. Ključ se potom odbacuje. To znači da čak i ako netko kasnije dobije vašu lozinku, " +
            "ne može dešifrirati prošle razgovore.\n\n" +
            "Svaka poruka ima redni broj koji sprječava reprodukciju iste poruke. Ključevi za šifriranje su " +
            "zaključani u pregledniku i ne mogu se kopirati.\n\n" +
            "Nakon spajanja prikazuje se otisak vidljiv objema stranama. Trebali biste ga potvrditi verbalno " +
            "ili putem drugog kanala — ako se otisci razlikuju, netko može pokušavati prisluškivati.\n\n" +
            "Server ograničava brzinu spajanja, dopušta samo dva sudionika po kanalu i prosljeđuje samo " +
            "šifrirane podatke. Server nikada ne može slati lažne sistemske poruke klijentima.",
        helpLinksTitle: "Izvorni kod i hosting",
        helpLinksText: "Poslužitelj je smješten u EU (Švedska). NullPost je otvorenog koda.",
    },
    ga: {
        title: "NullPost",
        subtitle: "Cainéal slán, criptithe idir dhá ríomhaire",
        passwordLabel: "Pasfhocal comhroinnte",
        passwordPlaceholder: "Pasfhocal comhroinnte",
        connect: "Ceangail",
        securityNote:
            "Ní fhágann do phasfhocal do ghléas riamh. Cripteofar gach teachtaireacht i do bhrabhsálaí " +
            "roimh tharchur — ní féidir leis an bhfreastalaí iad a léamh. Tar éis ceangal, deimhnigh an " +
            "méarloirg go béil le do pháirtí roimh aon fhaisnéis íogair a sheoladh.",
        securityNoteLabel: "Faisnéis shlándála",
        themeLabel: "Athraigh téama",
        langLabel: "Athraigh teanga",
        statusWaiting: "Ag fanacht le ceangal ó pháirtí...",
        statusKeyExchange: "Malartú eochair seisiúin...",
        statusConnected: "Páirtí ceangailte",
        statusPeerLeft: "D'imigh an páirtí",
        statusReconnecting: "Ag athnascadh...",
        statusDisconnected: "Dícheangailte",
        fingerprintLabel: "Deimhnigh le do pháirtí: ",
        disconnect: "Dícheanglail",
        messageLabel: "Teachtaireacht",
        messagesLabel: "Teachtaireachtaí",
        messagePlaceholder: "Scríobh teachtaireacht… (Enter le seoladh, Shift+Enter le líne nua)",
        send: "Seol",
        you: "Tú",
        peer: "Páirtí",
        copy: "Cóipeáil",
        copied: "Cóipeáilte!",
        sysChannelOpen: "Cainéal oscailte — ag fanacht le páirtí.",
        sysPeerConnected: "Páirtí ceangailte. Malartú eochair seisiúin...",
        sysKeyExchangeTimeout: "Tháinig am malaithe eochair — dícheanglail agus déan arís.",
        sysPeerLeft: "D'imigh an páirtí.",
        sysRejected: "Diúltaíodh an ceangal — tá dhá rannpháirtí cheana féin sa chainéal.",
        sysTimedOut: "Cainéal dúnta — ró-fhada neamhghníomhach.",
        errTimedOut: "Am thart — cainéal dúnta mar gheall ar neamhghníomhaíocht.",
        sysKeysExchanged: "Eochair seisiúin malartaithe. Deimhnigh an méarloirg go béil roimh fhaisnéis íogair a sheoladh.",
        sysDecryptFailed: "[Níorbh fhéidir an teachtaireacht a dhíchriptiú — b'fhéidir go ndearnadh ionramháil nó eochair mícheart]",
        sysKeyExchangeSendFailed: "[Earráid ag seoladh eochair — dícheanglail agus déan arís]",
        sysKeyExchangeFailed: "[Theip ar mhalartú eochair — pasfhocal mícheart nó sonraí ionramháilte]",
        sysReconnectFailed: "Theip ar athnascadh. Dícheanglail agus déan arís de láimh.",
        sysEncryptFailed: "[Theip ar chriptiú — níor seoladh an teachtaireacht]",
        errKeyExchangeTimeout: "Theip ar mhalartú eochair. Níor fhreagair an taobh eile.",
        errChannelFull: "Tá an cainéal lán — tá gléas eile ceangailte cheana leis an bpasfhocal seo.",
        errKeyExchangeFailed: "Theip ar mhalartú eochair.",
        errKeyExchangePassword: "Theip ar mhalartú eochair — seiceáil go bhfuil an pasfhocal céanna ag an dá thaobh.",
        passwordWeak: "Pasfhocal lag",
        passwordFair: "Pasfhocal measartha",
        passwordGood: "Pasfhocal maith",
        passwordStrong: "Pasfhocal láidir",
        errNoPassword: "Iontráil pasfhocal comhroinnte le do thoil.",
        errPasswordTooShort: "Ní mór don phasfhocal a bheith ar a laghad 6 charachtar.",
        errDeriveFailed: "Theip ar dhíorthú eochair — b'fhéidir nach dtacaíonn do bhrabhsálaí leis an Web Crypto API.",
        errKeygenFailed: "Níorbh fhéidir eochracha seisiúin a ghiniúint.",
        attachFile: "Ceangail comhad",
        dropFileHere: "Tarraing comhad(aí) anseo",
        fileSending: "Ag seoladh…",
        fileReceiving: "Ag fáil…",
        fileSent: "Seolta",
        download: "Íoslódáil",
        fileTransferError: "Theip ar aistriú comhaid",
        fileTooLarge: "Tá an comhad ró-mhór. Is é 50 MB an uasmhéid.",
        fileEmpty: "Ní féidir comhad folamh a sheoladh.",
        fileNotConnected: "Ní féidir comhad a sheoladh — níl páirtí ceangailte.",
        fileTransferAborted: "Aistriú comhaid cealaithe — d'imigh an páirtí.",
        fileDownloadedByPeer: "Íoslódáilte ag páirtí",
        notifTitle: "Páirtí ceangailte",
        notifBody: "Cheangail do pháirtí leis an gcainéal",
        typingIndicator: "Páirtí ag clóscríobh…",
        qrLabel: "Cód QR",
        qrHint: "Lig don pháirtí scanadh chun pasfhocal a roinnt",
        unsend: "Tarraing siar",
        unsent: "(Tarraingthe siar)",
        copyLink: "Cóipeáil nasc",
        seen: "Feicthe",
        expired: "(Caite)",
        maskToggle: "Masc",
        expiryLabel: "Amadóir féinscriosta",
        expiryPrompt: "Scrios tar éis:",
        modeRelay: "Sealaí (freastalaí)",
        modeP2P: "Díreach (P2P)",
        modeRelayDesc: "Seoltar teachtaireachtaí criptithe tríd an bhfreastalaí",
        modeP2PDesc: "Seoltar sonraí go díreach idir brabhsálaithe, ag seachaint an fhreastalaí",
        sysP2PConnected: "Ceangal díreach bunaithe — sonraí ag sreabhadh idir brabhsálaithe.",
        sysP2PFallback: "Theip ar cheangal díreach — ag úsáid sealaí criptithe.",
        fileTooLargeP2P: "Tá an comhad ró-mhór. Is é 500 MB an uasmhéid.",
        statusConnectedP2P: "Páirtí ceangailte (P2P)",
        helpLabel: "Cabhair",
        helpClose: "Dún",
        helpTitle: "Faoi NullPost",
        helpAboutTitle: "Faoin tionscadal",
        helpAboutText:
            "Is uirlis é NullPost le haghaidh comhroinnt slán téacs agus comhad idir dhá ghléas. Oscail " +
            "NullPost ar dhá ríomhaire, iontráil an pasfhocal céanna agus tosaigh comhroinnt. Chomh " +
            "simplí sin.\n\n" +
            "Ní theastaíonn cuntas úsáideora. Ní stóráiltear aon ní ar an bhfreastalaí. Ní choinnítear " +
            "aon taifid. Cripteofar gach rud a sheolann tú i do bhrabhsálaí sula bhfágann sé do ghléas — " +
            "ní féidir leis an bhfreastalaí an t-ábhar a fheiceáil riamh.\n\n" +
            "Is féidir leat rogha a dhéanamh idir dhá mhód ceangail: seolann Sealaí sonraí criptithe tríd " +
            "an bhfreastalaí, agus seolann Díreach (P2P) sonraí go díreach idir dhá bhrabhsálaí gan dul " +
            "tríd an bhfreastalaí. I ngach cás, tá gach sonra criptithe go hiomlán i gcónaí.\n\n" +
            "Tacaíonn NullPost le teachtaireachtaí téacs, comhaid suas le 50 MB (500 MB i mód P2P) agus " +
            "íomhánna le réamhamharcanna. Is féidir le teachtaireachtaí féinscrios a bheith acu, is féidir " +
            "iad a tharraingt siar agus is féidir leat a fheiceáil ar léigh do pháirtí iad. Tá an comhéadan " +
            "ar fáil i 28 teanga agus oibríonn sé ar ríomhaire agus ar ghléas soghluaiste.",
        helpPrivacyTitle: "Príobháideachas",
        helpPrivacyText:
            "Tógadh NullPost timpeall ar phrionsabal amháin: is leatsa do chuid sonraí. Ní fheidhmíonn an " +
            "freastalaí ach mar shealaí — cuireann sé paicéid chriptithe ar aghaidh agus ní féidir leis " +
            "ábhar a léamh, a stóráil ná a thaifeadadh.\n\n" +
            "Ní fhágann do phasfhocal do ghléas riamh. Úsáidtear é go háitiúil sa bhrabhsálaí amháin chun " +
            "ceangal slán a bhunú. Ní fheiceann an freastalaí an pasfhocal riamh.\n\n" +
            "Ní theastaíonn cuntas úsáideora. Ní úsáidtear fianáin le haghaidh rianú. Ní bhailítear aon " +
            "sonraí anailísíochta ná teileamatrach. Ní thaifeadtar seoltaí IP. Ní stóráileann an freastalaí " +
            "aon ní ar dhiosca — maireann gach faisnéis sa chuimhne amháin agus imeoidh sí nuair a " +
            "atosaítear an freastalaí.\n\n" +
            "I mód Díreach (P2P) ní théann ábhar teachtaireachtaí ná comhad tríd an bhfreastalaí in aon " +
            "chor — seoltar é go díreach idir dhá bhrabhsálaí.\n\n" +
            "Tá NullPost foinse oscailte go hiomlán. Is féidir leat an cód a iniúchadh, d'ásc féin a rith " +
            "agus na héilimh atá liostaithe anseo a fhíorú tú féin.",
        helpSecurityTitle: "Slándáil",
        helpSecurityText:
            "Tá gach cumarsáid i NullPost criptithe ó cheann go ceann ag baint úsáide as cripteagrafaíocht " +
            "ionsuite an bhrabhsálaí. Ní úsáidtear leabharlanna tríú páirtí le haghaidh criptithe.\n\n" +
            "Nuair a iontráileann tú pasfhocal, cruthaíonn an brabhsálaí trí rud go háitiúil: ID cainéil " +
            "chun an páirtí a aimsiú, eochair chriptithe agus méarloirg le haghaidh fíoraithe. Ní sheoltar " +
            "an pasfhocal chuig an bhfreastalaí riamh.\n\n" +
            "Nuair a nascann an dá pháirtí, cruthaíonn na brabhsálaithe eochair seisiúin uathúil a bhfuil " +
            "bailíocht aige don seisiún sin amháin. Diúscraítear an eochair ina dhiaidh sin. Ciallaíonn sé " +
            "seo fiú má fhaigheann duine éigin do phasfhocal ina dhiaidh sin, ní féidir leo comhráite a bhí " +
            "ann roimhe sin a dhíchriptiú.\n\n" +
            "Tá uimhir seicheamhach ag gach teachtaireacht a chuireann cosc ar athsheinm na teachtaireachta " +
            "céanna. Tá eochracha criptithe glasáilte sa bhrabhsálaí agus ní féidir iad a chóipeáil.\n\n" +
            "Taispeántar méarloirg tar éis ceangail atá infheicthe ag an dá pháirtí. Ba cheart duit é a " +
            "dheimhniú go béil nó tríd cainéal eile — má tá na méarloirgí éagsúil, d'fhéadfadh duine éigin " +
            "a bheith ag éisteacht isteach.\n\n" +
            "Cuireann an freastalaí teorainn le ráta ceangail, ní cheadaíonn sé ach dhá rannpháirtí in " +
            "aghaidh an chainéil agus cuireann sé ar aghaidh sonraí criptithe amháin. Ní féidir leis an " +
            "bhfreastalaí teachtaireachtaí córais bréige a sheoladh chuig cliaint riamh.",
        helpLinksTitle: "Foinse & óstáil",
        helpLinksText: "Tá an freastalaí óstáilte san AE (An tSualainn). Tá NullPost foinse oscailte.",
    },
    is: {
        title: "NullPost",
        subtitle: "Örugg, dulkóðuð rás milli tveggja tölva",
        passwordLabel: "Samnýtt lykilorð",
        passwordPlaceholder: "Samnýtt lykilorð",
        connect: "Tengja",
        securityNote:
            "Lykilorðið þitt forlætur aldrei tækið þitt. Öll skilaboð eru dulkóðuð í vafranum þínum " +
            "fyrir sendingu — netþjónninn getur ekki lesið þau. Eftir tengingu skaltu staðfesta " +
            "fingrafarið munnlega við samstarfmann þinn áður en þú sendir viðkvæmar upplýsingar.",
        securityNoteLabel: "Öryggisupplýsingar",
        themeLabel: "Skipta um þema",
        langLabel: "Skipta um tungumál",
        statusWaiting: "Bíð eftir tengingu samstarfsmanns...",
        statusKeyExchange: "Skiptast á lyklum...",
        statusConnected: "Samstarfsmaður tengdur",
        statusPeerLeft: "Samstarfsmaður fór",
        statusReconnecting: "Tengir að nýju...",
        statusDisconnected: "Ótengdur",
        fingerprintLabel: "Staðfestu við samstarfsmann: ",
        disconnect: "Aftengja",
        messageLabel: "Skilaboð",
        messagesLabel: "Skilaboð",
        messagePlaceholder: "Skrifaðu skilaboð… (Enter til að senda, Shift+Enter fyrir nýja línu)",
        send: "Senda",
        you: "Þú",
        peer: "Samstarfsmaður",
        copy: "Afrita",
        copied: "Afritað!",
        sysChannelOpen: "Rás opnuð — bíð eftir samstarfsmanni.",
        sysPeerConnected: "Samstarfsmaður tengdur. Skiptast á lyklum...",
        sysKeyExchangeTimeout: "Lyklaskipti rann út á tíma — aftengdu og reyndu aftur.",
        sysPeerLeft: "Samstarfsmaður fór.",
        sysRejected: "Tengingu hafnað — rásinn hefur þegar tvo þátttakendur.",
        sysTimedOut: "Rás lokuð — of lengi óvirk.",
        errTimedOut: "Tími rann út — rás lokuð vegna óvirkni.",
        sysKeysExchanged: "Lyklar skiptast. Staðfestu fingrafarið munnlega áður en þú sendir viðkvæmar upplýsingar.",
        sysDecryptFailed: "[Tókst ekki að afkóða skilaboðin — möguleg meðhöndlun eða rangur lykill]",
        sysKeyExchangeSendFailed: "[Villa við sendingu lykils — aftengdu og reyndu aftur]",
        sysKeyExchangeFailed: "[Lyklaskipti mistókust — rangt lykilorð eða meðhöndluð gögn]",
        sysReconnectFailed: "Endurtengja mistókust. Aftengdu og reyndu handvirkt.",
        sysEncryptFailed: "[Dulkóðun mistókust — skilaboð ekki send]",
        errKeyExchangeTimeout: "Lyklaskipti mistókust. Hinn aðilinn svaraði ekki.",
        errChannelFull: "Rásinn er fullur — annað tæki er þegar tengt með þessu lykilorði.",
        errKeyExchangeFailed: "Lyklaskipti mistókust.",
        errKeyExchangePassword: "Lyklaskipti mistókust — athugaðu hvort báðar hliðar noti sama lykilorðið.",
        passwordWeak: "Veikt lykilorð",
        passwordFair: "Meðallykilorð",
        passwordGood: "Gott lykilorð",
        passwordStrong: "Sterkt lykilorð",
        errNoPassword: "Sláðu inn samnýtt lykilorð.",
        errPasswordTooShort: "Lykilorðið verður að vera að minnsta kosti 6 stafir.",
        errDeriveFailed: "Lyklaútleiðsla mistókust — vafrinn þinn styður hugsanlega ekki Web Crypto API.",
        errKeygenFailed: "Tókst ekki að mynda lykla.",
        attachFile: "Hengja við skrá",
        dropFileHere: "Dragðu skrá(r) hingað",
        fileSending: "Sendir…",
        fileReceiving: "Tekur við…",
        fileSent: "Sent",
        download: "Hlaða niður",
        fileTransferError: "Skráaflutningur mistókust",
        fileTooLarge: "Skráin er of stór. Hámarksstærð er 50 MB.",
        fileEmpty: "Ekki hægt að senda tóma skrá.",
        fileNotConnected: "Ekki hægt að senda skrá — samstarfsmaður er ekki tengdur.",
        fileTransferAborted: "Skráaflutningur hætt — samstarfsmaður fór.",
        fileDownloadedByPeer: "Hlaðið niður af samstarfsmanni",
        notifTitle: "Samstarfsmaður tengdur",
        notifBody: "Samstarfsmaðurinn þinn tengdist rásnum",
        typingIndicator: "Samstarfsmaður er að skrifa…",
        qrLabel: "QR kóði",
        qrHint: "Láttu samstarfsmann skanna til að deila lykilorði",
        unsend: "Draga til baka",
        unsent: "(Dregið til baka)",
        copyLink: "Afrita tengil",
        seen: "Séð",
        expired: "(Útrunnið)",
        maskToggle: "Hylja",
        expiryLabel: "Sjálfeyðingartímari",
        expiryPrompt: "Eyða eftir:",
        modeRelay: "Milliliður (netþjónn)",
        modeP2P: "Beint (P2P)",
        modeRelayDesc: "Dulkóðuð skilaboð send í gegnum netþjóninn",
        modeP2PDesc: "Gögn send beint milli vafra, sniðganga netþjóninn",
        sysP2PConnected: "Bein tenging komin á — gögn streymandi milli vafra.",
        sysP2PFallback: "Bein tenging mistókust — notar dulkóðaðan millilið.",
        fileTooLargeP2P: "Skráin er of stór. Hámarksstærð er 500 MB.",
        statusConnectedP2P: "Samstarfsmaður tengdur (P2P)",
        helpLabel: "Hjálp",
        helpClose: "Loka",
        helpTitle: "Um NullPost",
        helpAboutTitle: "Um verkefnið",
        helpAboutText:
            "NullPost er tæki til öruggrar deilingar texta og skráa milli tveggja tækja. Opnaðu NullPost " +
            "á tveimur tölvum, sláðu inn sama lykilorðið og byrjaðu að deila. Það er allt.\n\n" +
            "Engin notendareikningur þarf. Ekkert er geymt á netþjóninum. Engar skrár eru hafðar. Allt sem " +
            "þú sendir er dulkóðað í vafranum þínum áður en það forlætur tækið þitt — netþjónninn sér " +
            "innihaldið aldrei.\n\n" +
            "Þú getur valið milli tveggja tengingarmáta: Milliliður sendir gögn dulkóðuð í gegnum " +
            "netþjóninn, en Beint (P2P) sendir gögn beint milli tveggja vafra án þess að fara í gegnum " +
            "netþjóninn. Í öllum tilvikum eru öll gögn fullkóðuð á hverjum tíma.\n\n" +
            "NullPost styður textaskilaboð, skrár allt að 50 MB (500 MB í P2P-ham) og myndir með " +
            "forskoðun. Skilaboð geta haft sjálfeyðingartímara, hægt er að draga þau til baka og þú " +
            "getur séð hvort samstarfsmaður þinn hafi lesið þau. Viðmótið er fáanlegt á 28 tungumálum " +
            "og virkar á skjáborðstölvum og farsímum.",
        helpPrivacyTitle: "Persónuvernd",
        helpPrivacyText:
            "NullPost er byggt á einu meginreglu: gögnin þín tilheyra þér. Netþjónninn virkar eingöngu " +
            "sem milliliður — hann áframsendur dulkóðaðar pakkar og getur ekki lesið, geymt eða skráð " +
            "innihald.\n\n" +
            "Lykilorðið þitt forlætur aldrei tækið þitt. Það er eingöngu notað á staðnum í vafranum til " +
            "að koma á öruggri tengingu. Netþjónninn sér lykilorðið aldrei.\n\n" +
            "Engin notendareikningur þarf. Engar vafrakökur eru notaðar til rekja. Engar greiningargögn " +
            "eða fjarmælingargögn eru safnað. IP-tölur eru ekki skráðar. Netþjónninn geymir ekkert á " +
            "disk — allar upplýsingar eru eingöngu til í minni og hverfa þegar netþjónninn er " +
            "endurræstur.\n\n" +
            "Í Beinum (P2P) ham fer innihald skilaboða og skráa ekki í gegnum netþjóninn — það er sent " +
            "beint milli tveggja vafra.\n\n" +
            "NullPost er opinn hugbúnaður að fullu. Þú getur skoðað kóðann, keyrt þitt eigið tilvik og " +
            "staðfest allar fullyrðingar sem gefnar eru upp hér á eigin spýtur.",
        helpSecurityTitle: "Öryggi",
        helpSecurityText:
            "Öll samskipti í NullPost eru enda-til-enda dulkóðuð með innbyggðri dulritun vafrans. Engar " +
            "þriðja aðila bókasöfn eru notuð til dulkóðunar.\n\n" +
            "Þegar þú slærð inn lykilorð, býr vafrinn staðbundið til þrjár hlutir: rásarkenni til að " +
            "finna samstarfsmanninn, dulkóðunarlykill og fingrafar til staðfestingar. Lykilorðið er aldrei " +
            "sent til netþjónsins.\n\n" +
            "Þegar báðir aðilar tengjast, búa vafrarnir til einstakan lotsalykil sem gildir aðeins fyrir " +
            "þann lot. Lyklinum er svo fargað. Þetta þýðir að jafnvel þótt einhver fái lykilorðið þitt " +
            "síðar, geta þeir ekki afkóðað fyrri samskipti.\n\n" +
            "Hvert skilaboð hefur raðnúmer sem kemur í veg fyrir endursendingu sömu skilaboðanna. " +
            "Dulkóðunarlyklar eru læstir í vafranum og er ekki hægt að afrita þá.\n\n" +
            "Eftir tengingu birtist fingrafar sem er sýnilegt báðum aðilum. Þú ættir að staðfesta það " +
            "munnlega eða í gegnum annan rás — ef fingraför eru mismunandi gæti einhver verið að hlera.\n\n" +
            "Netþjónninn takmarkar tengingatíðni, leyfir aðeins tvo þátttakendur per rás og áframsendur " +
            "eingöngu dulkóðuð gögn. Netþjónninn getur aldrei sent falsaðar kerfisskilaboð til biðlara.",
        helpLinksTitle: "Upprunalegur kóði og hýsing",
        helpLinksText: "Þjónninn er hýstur í ESB (Svíþjóð). NullPost er opinn hugbúnaður.",
    },
    lt: {
        title: "NullPost",
        subtitle: "Saugus, užšifruotas kanalas tarp dviejų kompiuterių",
        passwordLabel: "Bendras slaptažodis",
        passwordPlaceholder: "Bendras slaptažodis",
        connect: "Prisijungti",
        securityNote:
            "Jūsų slaptažodis niekada nepalieka jūsų įrenginio. Visi pranešimai užšifruojami jūsų " +
            "naršyklėje prieš perduodant — serveris negali jų skaityti. Prisijungę žodžiu patvirtinkite " +
            "pirštų atspaudą su pašnekovu prieš siųsdami jautrią informaciją.",
        securityNoteLabel: "Saugos informacija",
        themeLabel: "Perjungti temą",
        langLabel: "Perjungti kalbą",
        statusWaiting: "Laukiama pašnekovo prisijungimo...",
        statusKeyExchange: "Keičiamasi sesijos raktais...",
        statusConnected: "Pašnekovas prisijungė",
        statusPeerLeft: "Pašnekovas atsijungė",
        statusReconnecting: "Jungiamasi iš naujo...",
        statusDisconnected: "Atsijungta",
        fingerprintLabel: "Patvirtinkite su pašnekovu: ",
        disconnect: "Atsijungti",
        messageLabel: "Žinutė",
        messagesLabel: "Žinutės",
        messagePlaceholder: "Rašykite žinutę… (Enter – siųsti, Shift+Enter – nauja eilutė)",
        send: "Siųsti",
        you: "Jūs",
        peer: "Pašnekovas",
        copy: "Kopijuoti",
        copied: "Nukopijuota!",
        sysChannelOpen: "Kanalas atidarytas — laukiama pašnekovo.",
        sysPeerConnected: "Pašnekovas prisijungė. Keičiamasi sesijos raktais...",
        sysKeyExchangeTimeout: "Raktų keitimo laikas baigėsi — atsijunkite ir bandykite dar kartą.",
        sysPeerLeft: "Pašnekovas atsijungė.",
        sysRejected: "Ryšys atmestas — kanale jau yra du dalyviai.",
        sysTimedOut: "Kanalas uždarytas — per ilgai neaktyvus.",
        errTimedOut: "Laikas baigėsi — kanalas uždarytas dėl neaktyvumo.",
        sysKeysExchanged: "Sesijos raktai sukeisti. Žodžiu patvirtinkite pirštų atspaudą prieš siųsdami jautrią informaciją.",
        sysDecryptFailed: "[Nepavyko iššifruoti pranešimo — galbūt klastojimas arba neteisingas raktas]",
        sysKeyExchangeSendFailed: "[Klaida siunčiant raktą — atsijunkite ir bandykite dar kartą]",
        sysKeyExchangeFailed: "[Raktų keitimas nepavyko — neteisingas slaptažodis arba klastoti duomenys]",
        sysReconnectFailed: "Nepavyko prisijungti iš naujo. Atsijunkite ir bandykite rankiniu būdu.",
        sysEncryptFailed: "[Šifravimas nepavyko — pranešimas neišsiųstas]",
        errKeyExchangeTimeout: "Raktų keitimas nepavyko. Kita pusė neatsakė.",
        errChannelFull: "Kanalas pilnas — kitas įrenginys jau prisijungęs su šiuo slaptažodžiu.",
        errKeyExchangeFailed: "Raktų keitimas nepavyko.",
        errKeyExchangePassword: "Raktų keitimas nepavyko — patikrinkite, ar abi pusės naudoja tą patį slaptažodį.",
        passwordWeak: "Silpnas slaptažodis",
        passwordFair: "Vidutinis slaptažodis",
        passwordGood: "Geras slaptažodis",
        passwordStrong: "Stiprus slaptažodis",
        errNoPassword: "Įveskite bendrą slaptažodį.",
        errPasswordTooShort: "Slaptažodis turi būti bent 6 simbolių.",
        errDeriveFailed: "Rakto išvedimas nepavyko — jūsų naršyklė galbūt nepalaiko Web Crypto API.",
        errKeygenFailed: "Nepavyko sugeneruoti sesijos raktų.",
        attachFile: "Pridėti failą",
        dropFileHere: "Nuvilkite failą (-us) čia",
        fileSending: "Siunčiama…",
        fileReceiving: "Gaunama…",
        fileSent: "Išsiųsta",
        download: "Atsisiųsti",
        fileTransferError: "Failo perkėlimas nepavyko",
        fileTooLarge: "Failas per didelis. Didžiausias dydis — 50 MB.",
        fileEmpty: "Negalima siųsti tuščio failo.",
        fileNotConnected: "Negalima siųsti failo — pašnekovas neprisijungęs.",
        fileTransferAborted: "Failo perkėlimas nutrauktas — pašnekovas atsijungė.",
        fileDownloadedByPeer: "Pašnekovas atsisiuntė",
        notifTitle: "Pašnekovas prisijungė",
        notifBody: "Jūsų pašnekovas prisijungė prie kanalo",
        typingIndicator: "Pašnekovas rašo…",
        qrLabel: "QR kodas",
        qrHint: "Leiskite pašnekovui nuskaityti, kad pasidalintumėte slaptažodžiu",
        unsend: "Atšaukti",
        unsent: "(Atšaukta)",
        copyLink: "Kopijuoti nuorodą",
        seen: "Perskaityta",
        expired: "(Pasibaigė)",
        maskToggle: "Slėpti",
        expiryLabel: "Sakinaikinimo laikmatis",
        expiryPrompt: "Ištrinti po:",
        modeRelay: "Tarpinis serveris",
        modeP2P: "Tiesioginis (P2P)",
        modeRelayDesc: "Užšifruoti pranešimai perduodami per serverį",
        modeP2PDesc: "Duomenys siunčiami tiesiogiai tarp naršyklių, apeinant serverį",
        sysP2PConnected: "Tiesioginis ryšys užmegztas — duomenys perduodami tarp naršyklių.",
        sysP2PFallback: "Tiesioginis ryšys nepavyko — naudojamas užšifruotas tarpinis serveris.",
        fileTooLargeP2P: "Failas per didelis. Didžiausias dydis — 500 MB.",
        statusConnectedP2P: "Pašnekovas prisijungė (P2P)",
        helpLabel: "Pagalba",
        helpClose: "Uždaryti",
        helpTitle: "Apie NullPost",
        helpAboutTitle: "Apie projektą",
        helpAboutText:
            "NullPost — tai įrankis saugiam teksto ir failų dalijimusi tarp dviejų įrenginių. Atidarykite " +
            "NullPost dviejuose kompiuteriuose, įveskite tą patį slaptažodį ir pradėkite dalytis. Viskas " +
            "taip paprasta.\n\n" +
            "Nereikia paskyros. Serveris nieko nesaugo. Jokie žurnalai nevedami. Viskas, ką siunčiate, " +
            "užšifruojama jūsų naršyklėje prieš paliekant įrenginį — serveris niekada nemato turinio.\n\n" +
            "Galite rinktis iš dviejų ryšio režimų: Tarpinis serveris perduoda duomenis užšifruotus per " +
            "serverį, o Tiesioginis (P2P) siunčia duomenis tiesiogiai tarp dviejų naršyklių, neeinant per " +
            "serverį. Abiem atvejais visi duomenys visą laiką yra visiškai užšifruoti.\n\n" +
            "NullPost palaiko tekstines žinutes, failus iki 50 MB (500 MB P2P režimu) ir vaizdus su " +
            "peržiūra. Žinutės gali turėti sakinaikinimo laikmatį, jas galima atšaukti ir matyti, ar " +
            "pašnekovas jas perskaitė. Sąsaja prieinama 28 kalbomis ir veikia kompiuteryje bei " +
            "mobiliajame įrenginyje.",
        helpPrivacyTitle: "Privatumas",
        helpPrivacyText:
            "NullPost sukurtas remiantis vienu principu: jūsų duomenys priklauso tik jums. Serveris veikia " +
            "tik kaip tarpinis mazgas — persiunčia užšifruotus paketus ir negali skaityti, saugoti ar " +
            "registruoti jokio turinio.\n\n" +
            "Jūsų slaptažodis niekada nepalieka jūsų įrenginio. Jis naudojamas tik vietinėje naršyklėje " +
            "saugiam ryšiui užmegzti. Serveris niekada nemato slaptažodžio.\n\n" +
            "Paskyra nereikalinga. Slapukai sekimui nenaudojami. Analitikos ar telemetrijos duomenys " +
            "nerenkami. IP adresai neregistruojami. Serveris nieko nerašo į diską — visa informacija " +
            "egzistuoja tik atmintyje ir dingsta paleidus serverį iš naujo.\n\n" +
            "Tiesioginio (P2P) režimu žinučių ir failų turinys net nepereina per serverį — perduodamas " +
            "tiesiogiai tarp dviejų naršyklių.\n\n" +
            "NullPost yra visiškai atviro kodo. Galite patikrinti kodą, paleisti savo egzempliorių ir " +
            "patiems patikrinti visus čia pateiktus teiginius.",
        helpSecurityTitle: "Saugumas",
        helpSecurityText:
            "Visa NullPost komunikacija yra visapusiškai užšifruota naudojant integruotą naršyklės " +
            "kriptografiją. Šifravimui nenaudojamos trečiųjų šalių bibliotekos.\n\n" +
            "Įvedus slaptažodį, naršyklė vietinėje sistemoje sukuria tris dalykus: kanalo ID pašnekovui " +
            "rasti, šifravimo raktą ir pirštų atspaudą patikrinimui. Slaptažodis niekada nesiunčiamas " +
            "į serverį.\n\n" +
            "Abiems pašnekovams prisijungus, naršyklės sukuria unikalų sesijos raktą, galiojantį tik tai " +
            "sesijai. Raktas vėliau sunaikinamas. Tai reiškia, kad net jei kas nors vėliau gautų jūsų " +
            "slaptažodį, jis negalės iššifruoti ankstesnių pokalbių.\n\n" +
            "Kiekviena žinutė turi eilės numerį, kuris neleidžia pakartotinai siųsti tos pačios žinutės. " +
            "Šifravimo raktai užrakinti naršyklėje ir negali būti nukopijuoti.\n\n" +
            "Prisijungus rodomas pirštų atspaudas, matomas abiem pašnekovams. Turėtumėte jį žodžiu " +
            "patvirtinti arba per kitą kanalą — jei pirštų atspaudai skiriasi, kažkas gali bandyti " +
            "pasiklausyti.\n\n" +
            "Serveris riboja prisijungimo dažnį, leidžia tik du dalyvius vienam kanalui ir persiunčia " +
            "tik užšifruotus duomenis. Serveris niekada negali siųsti suklastotų sisteminių pranešimų " +
            "klientams.",
        helpLinksTitle: "Šaltinis ir talpinimas",
        helpLinksText: "Serveris talpinamas ES (Švedija). NullPost yra atvirojo kodo.",
    },
    sl: {
        title: "NullPost",
        subtitle: "Varen, šifriran kanal med dvema računalnikoma",
        passwordLabel: "Skupno geslo",
        passwordPlaceholder: "Skupno geslo",
        connect: "Poveži",
        securityNote:
            "Vaše geslo nikoli ne zapusti vaše naprave. Vsa sporočila so šifrirana v vašem brskalniku " +
            "pred prenosom — strežnik jih ne more brati. Po povezavi ustno potrdite prstni odtis s " +
            "sogovornikom, preden pošljete občutljive informacije.",
        securityNoteLabel: "Varnostne informacije",
        themeLabel: "Preklopi temo",
        langLabel: "Preklopi jezik",
        statusWaiting: "Čakam na povezavo sogovornika...",
        statusKeyExchange: "Izmenjava ključev seje...",
        statusConnected: "Sogovornik povezan",
        statusPeerLeft: "Sogovornik se je odklopil",
        statusReconnecting: "Ponovna povezava...",
        statusDisconnected: "Odklopljeno",
        fingerprintLabel: "Potrdite s sogovornikom: ",
        disconnect: "Odklopi",
        messageLabel: "Sporočilo",
        messagesLabel: "Sporočila",
        messagePlaceholder: "Napišite sporočilo… (Enter za pošiljanje, Shift+Enter za novo vrstico)",
        send: "Pošlji",
        you: "Vi",
        peer: "Sogovornik",
        copy: "Kopiraj",
        copied: "Kopirano!",
        sysChannelOpen: "Kanal odprt — čakam na sogovornika.",
        sysPeerConnected: "Sogovornik povezan. Izmenjava ključev seje...",
        sysKeyExchangeTimeout: "Čas izmenjave ključev je potekel — odklopite se in poskusite znova.",
        sysPeerLeft: "Sogovornik se je odklopil.",
        sysRejected: "Povezava zavrnjena — kanal že ima dva udeleženca.",
        sysTimedOut: "Kanal zaprt — predolgo neaktiven.",
        errTimedOut: "Čas je potekel — kanal zaprt zaradi neaktivnosti.",
        sysKeysExchanged: "Ključi seje izmenjani. Ustno potrdite prstni odtis, preden pošljete občutljive informacije.",
        sysDecryptFailed: "[Sporočila ni bilo mogoče dešifrirati — možna manipulacija ali napačen ključ]",
        sysKeyExchangeSendFailed: "[Napaka pri pošiljanju ključa — odklopite se in poskusite znova]",
        sysKeyExchangeFailed: "[Izmenjava ključev ni uspela — napačno geslo ali manipulirani podatki]",
        sysReconnectFailed: "Ponovne povezave ni bilo mogoče vzpostaviti. Odklopite se in poskusite ročno.",
        sysEncryptFailed: "[Šifriranje ni uspelo — sporočilo ni bilo poslano]",
        errKeyExchangeTimeout: "Izmenjava ključev ni uspela. Druga stran se ni odzvala.",
        errChannelFull: "Kanal je poln — druga naprava je že povezana s tem geslom.",
        errKeyExchangeFailed: "Izmenjava ključev ni uspela.",
        errKeyExchangePassword: "Izmenjava ključev ni uspela — preverite, ali obe strani uporabljata isto geslo.",
        passwordWeak: "Šibko geslo",
        passwordFair: "Srednje geslo",
        passwordGood: "Dobro geslo",
        passwordStrong: "Močno geslo",
        errNoPassword: "Vnesite skupno geslo.",
        errPasswordTooShort: "Geslo mora imeti vsaj 6 znakov.",
        errDeriveFailed: "Izpeljava ključa ni uspela — vaš brskalnik morda ne podpira Web Crypto API.",
        errKeygenFailed: "Ključev seje ni bilo mogoče ustvariti.",
        attachFile: "Priloži datoteko",
        dropFileHere: "Povlecite datoteko(-e) sem",
        fileSending: "Pošiljanje…",
        fileReceiving: "Prejemanje…",
        fileSent: "Poslano",
        download: "Prenesi",
        fileTransferError: "Prenos datoteke ni uspel",
        fileTooLarge: "Datoteka je prevelika. Največja velikost je 50 MB.",
        fileEmpty: "Prazne datoteke ni mogoče poslati.",
        fileNotConnected: "Datoteke ni mogoče poslati — sogovornik ni povezan.",
        fileTransferAborted: "Prenos datoteke prekinjen — sogovornik se je odklopil.",
        fileDownloadedByPeer: "Sogovornik je prenesel",
        notifTitle: "Sogovornik povezan",
        notifBody: "Vaš sogovornik se je pridružil kanalu",
        typingIndicator: "Sogovornik tipka…",
        qrLabel: "QR koda",
        qrHint: "Pustite sogovorniku, da skenira za skupno rabo gesla",
        unsend: "Prekliči",
        unsent: "(Preklicano)",
        copyLink: "Kopiraj povezavo",
        seen: "Videno",
        expired: "(Poteklo)",
        maskToggle: "Skrij",
        expiryLabel: "Časovnik samouničenja",
        expiryPrompt: "Izbriši čez:",
        modeRelay: "Posrednik (strežnik)",
        modeP2P: "Neposredno (P2P)",
        modeRelayDesc: "Šifrirana sporočila se posredujejo prek strežnika",
        modeP2PDesc: "Podatki se pošiljajo neposredno med brskalniki, mimo strežnika",
        sysP2PConnected: "Neposredna povezava vzpostavljena — podatki tečejo med brskalniki.",
        sysP2PFallback: "Neposredna povezava ni uspela — uporabljam šifriranega posrednika.",
        fileTooLargeP2P: "Datoteka je prevelika. Največja velikost je 500 MB.",
        statusConnectedP2P: "Sogovornik povezan (P2P)",
        helpLabel: "Pomoč",
        helpClose: "Zapri",
        helpTitle: "O NullPost",
        helpAboutTitle: "O projektu",
        helpAboutText:
            "NullPost je orodje za varno izmenjavo besedila in datotek med dvema napravama. Odprite " +
            "NullPost na dveh računalnikih, vnesite isto geslo in začnite deliti. Tako preprosto je.\n\n" +
            "Račun ni potreben. Na strežniku se nič ne shranjuje. Dnevniki se ne vodijo. Vse, kar " +
            "pošljete, je šifrirano v vašem brskalniku, preden zapusti napravo — strežnik nikoli ne " +
            "vidi vsebine.\n\n" +
            "Izbirate lahko med dvema načinoma povezave: Posrednik pošilja šifrirane podatke prek " +
            "strežnika, Neposredno (P2P) pa pošilja podatke neposredno med brskalnikoma brez strežnika. " +
            "V vsakem primeru so vsi podatki ves čas popolnoma šifrirani.\n\n" +
            "NullPost podpira besedilna sporočila, datoteke do 50 MB (500 MB v načinu P2P) in slike s " +
            "predogledi. Sporočila imajo lahko časovnik samouničenja, jih je mogoče preklicati in " +
            "vidite, ali jih je sogovornik prebral. Vmesnik je na voljo v 28 jezikih in deluje na " +
            "namiznih računalnikih in mobilnih napravah.",
        helpPrivacyTitle: "Zasebnost",
        helpPrivacyText:
            "NullPost je zgrajen na enem načelu: vaši podatki pripadajo samo vam. Strežnik deluje samo " +
            "kot posredník — posreduje šifrirane pakete in ne more brati, shranjevati ali beležiti " +
            "vsebine.\n\n" +
            "Vaše geslo nikoli ne zapusti vaše naprave. Uporablja se samo lokalno v brskalniku za " +
            "vzpostavitev varne povezave. Strežnik gesla nikoli ne vidi.\n\n" +
            "Račun ni potreben. Piškotki za sledenje se ne uporabljajo. Analitični podatki ali " +
            "telemetrija se ne zbirajo. IP-naslovi se ne beležijo. Strežnik ne zapisuje ničesar na " +
            "disk — vse informacije obstajajo samo v pomnilniku in izginejo ob ponovnem zagonu " +
            "strežnika.\n\n" +
            "V načinu Neposredno (P2P) vsebina sporočil in datotek sploh ne gre skozi strežnik — " +
            "pošilja se neposredno med brskalnikoma.\n\n" +
            "NullPost je popolnoma odprtokoden. Kodo si lahko ogledate, zaženete svojo instanco in " +
            "sami preverite vse tukaj navedene trditve.",
        helpSecurityTitle: "Varnost",
        helpSecurityText:
            "Vsa komunikacija v NullPost je šifrirana od konca do konca z vgrajeno kriptografijo " +
            "brskalnika. Za šifriranje se ne uporabljajo knjižnice tretjih oseb.\n\n" +
            "Ko vnesete geslo, brskalnik lokalno ustvari tri stvari: ID kanala za iskanje sogovornika, " +
            "šifrirni ključ in prstni odtis za preverjanje. Geslo se nikoli ne pošlje strežniku.\n\n" +
            "Ko se oba sogovornika povežeta, brskalnika ustvarita edinstven ključ seje, ki velja samo " +
            "za tisto sejo. Ključ se nato zavrže. To pomeni, da tudi če kdo pozneje pridobi vaše " +
            "geslo, ne more dešifrirati preteklih pogovorov.\n\n" +
            "Vsako sporočilo ima zaporedno številko, ki preprečuje ponavljanje istega sporočila. " +
            "Šifrirni ključi so zaklenjeni v brskalniku in jih ni mogoče kopirati.\n\n" +
            "Po povezavi se prikaže prstni odtis, viden obema sogovornikoma. Potrditi bi ga morali " +
            "ustno ali prek drugega kanala — če se prstna odtisa razlikujeta, vas morda nekdo " +
            "prisluhuje.\n\n" +
            "Strežnik omejuje hitrost povezav, dovoli samo dva udeleženca na kanal in posreduje samo " +
            "šifrirane podatke. Strežnik nikoli ne more pošiljati lažnih sistemskih sporočil odjemalcem.",
        helpLinksTitle: "Izvorna koda in gostovanje",
        helpLinksText: "Strežnik je gostovan v EU (Švedska). NullPost je odprtokodna programska oprema.",
    },
    lv: {
        title: "NullPost",
        subtitle: "Droša, šifrēta kanāls starp diviem datoriem",
        passwordLabel: "Kopīgā parole",
        passwordPlaceholder: "Kopīgā parole",
        connect: "Savienoties",
        securityNote:
            "Jūsu parole nekad neatstāj jūsu ierīci. Visas ziņas tiek šifrētas jūsu pārlūkprogrammā " +
            "pirms nosūtīšanas — serveris tās nevar lasīt. Pēc savienošanās mutiski apstipriniet " +
            "pirkstu nospiedumu ar sarunu partneri pirms jebkādas sensitīvas informācijas sūtīšanas.",
        securityNoteLabel: "Drošības informācija",
        themeLabel: "Pārslēgt tēmu",
        langLabel: "Pārslēgt valodu",
        statusWaiting: "Gaidu partnera savienojumu...",
        statusKeyExchange: "Sesijas atslēgu apmaiņa...",
        statusConnected: "Partners savienots",
        statusPeerLeft: "Partners atvienojās",
        statusReconnecting: "Atkārtota savienošanās...",
        statusDisconnected: "Atvienots",
        fingerprintLabel: "Apstipriniet ar partneri: ",
        disconnect: "Atvienoties",
        messageLabel: "Ziņa",
        messagesLabel: "Ziņas",
        messagePlaceholder: "Rakstiet ziņu… (Enter — sūtīt, Shift+Enter — jauna rinda)",
        send: "Sūtīt",
        you: "Jūs",
        peer: "Partners",
        copy: "Kopēt",
        copied: "Nokopēts!",
        sysChannelOpen: "Kanāls atvērts — gaidu partneri.",
        sysPeerConnected: "Partners savienots. Sesijas atslēgu apmaiņa...",
        sysKeyExchangeTimeout: "Atslēgu apmaiņas laiks beidzās — atvienojieties un mēģiniet vēlreiz.",
        sysPeerLeft: "Partners atvienojās.",
        sysRejected: "Savienojums noraidīts — kanālā jau ir divi dalībnieki.",
        sysTimedOut: "Kanāls aizvērts — pārāk ilgi neaktīvs.",
        errTimedOut: "Laiks beidzās — kanāls aizvērts neaktivitātes dēļ.",
        sysKeysExchanged: "Sesijas atslēgas apmainītas. Mutiski apstipriniet pirkstu nospiedumu pirms sensitīvas informācijas sūtīšanas.",
        sysDecryptFailed: "[Ziņu nevarēja atšifrēt — iespējama viltošana vai nepareiza atslēga]",
        sysKeyExchangeSendFailed: "[Kļūda sūtot atslēgu — atvienojieties un mēģiniet vēlreiz]",
        sysKeyExchangeFailed: "[Atslēgu apmaiņa neizdevās — nepareiza parole vai viltoti dati]",
        sysReconnectFailed: "Atkārtota savienošanās neizdevās. Atvienojieties un mēģiniet manuāli.",
        sysEncryptFailed: "[Šifrēšana neizdevās — ziņa netika nosūtīta]",
        errKeyExchangeTimeout: "Atslēgu apmaiņa neizdevās. Otra puse neatbildēja.",
        errChannelFull: "Kanāls ir pilns — cita ierīce jau ir savienota ar šo paroli.",
        errKeyExchangeFailed: "Atslēgu apmaiņa neizdevās.",
        errKeyExchangePassword: "Atslēgu apmaiņa neizdevās — pārbaudiet, vai abas puses izmanto vienu un to pašu paroli.",
        passwordWeak: "Vāja parole",
        passwordFair: "Vidēja parole",
        passwordGood: "Laba parole",
        passwordStrong: "Stipra parole",
        errNoPassword: "Lūdzu ievadiet kopīgo paroli.",
        errPasswordTooShort: "Parolei jābūt vismaz 6 rakstzīmēm.",
        errDeriveFailed: "Atslēgas atvasināšana neizdevās — jūsu pārlūkprogramma, iespējams, neatbalsta Web Crypto API.",
        errKeygenFailed: "Nevarēja ģenerēt sesijas atslēgas.",
        attachFile: "Pievienot failu",
        dropFileHere: "Velciet failu(-s) šeit",
        fileSending: "Sūta…",
        fileReceiving: "Saņem…",
        fileSent: "Nosūtīts",
        download: "Lejupielādēt",
        fileTransferError: "Faila pārsūtīšana neizdevās",
        fileTooLarge: "Fails ir pārāk liels. Maksimālais izmērs ir 50 MB.",
        fileEmpty: "Nevar nosūtīt tukšu failu.",
        fileNotConnected: "Nevar nosūtīt failu — partneris nav savienots.",
        fileTransferAborted: "Faila pārsūtīšana pārtraukta — partneris atvienojās.",
        fileDownloadedByPeer: "Partners lejupielādēja",
        notifTitle: "Partners savienots",
        notifBody: "Jūsu partneris pievienojās kanālam",
        typingIndicator: "Partners raksta…",
        qrLabel: "QR kods",
        qrHint: "Ļaujiet partnerim skenēt, lai kopīgotu paroli",
        unsend: "Atsaukt",
        unsent: "(Atsaukts)",
        copyLink: "Kopēt saiti",
        seen: "Skatīts",
        expired: "(Beidzies)",
        maskToggle: "Maskēt",
        expiryLabel: "Pašiznīcināšanās taimeris",
        expiryPrompt: "Dzēst pēc:",
        modeRelay: "Starpnieks (serveris)",
        modeP2P: "Tiešais (P2P)",
        modeRelayDesc: "Šifrētas ziņas tiek pārsūtītas caur serveri",
        modeP2PDesc: "Dati tiek sūtīti tieši starp pārlūkprogrammām, apejot serveri",
        sysP2PConnected: "Tiešais savienojums izveidots — dati plūst starp pārlūkprogrammām.",
        sysP2PFallback: "Tiešais savienojums neizdevās — tiek izmantots šifrēts starpnieks.",
        fileTooLargeP2P: "Fails ir pārāk liels. Maksimālais izmērs ir 500 MB.",
        statusConnectedP2P: "Partners savienots (P2P)",
        helpLabel: "Palīdzība",
        helpClose: "Aizvērt",
        helpTitle: "Par NullPost",
        helpAboutTitle: "Par projektu",
        helpAboutText:
            "NullPost ir rīks drošai teksta un failu kopīgošanai starp divām ierīcēm. Atveriet NullPost " +
            "divos datoros, ievadiet vienu un to pašu paroli un sāciet kopīgot. Tik vienkārši.\n\n" +
            "Nav nepieciešams konts. Serverī nekas netiek glabāts. Žurnāli netiek kārtoti. Viss, ko " +
            "sūtāt, tiek šifrēts jūsu pārlūkprogrammā pirms atstāšanas no ierīces — serveris nekad " +
            "neredz saturu.\n\n" +
            "Varat izvēlēties starp diviem savienojuma režīmiem: Starpnieks sūta šifrētus datus caur " +
            "serveri, bet Tiešais (P2P) sūta datus tieši starp divām pārlūkprogrammām bez servera. " +
            "Abos gadījumos visi dati visu laiku ir pilnībā šifrēti.\n\n" +
            "NullPost atbalsta teksta ziņas, failus līdz 50 MB (500 MB P2P režīmā) un attēlus ar " +
            "priekšskatījumiem. Ziņām var būt pašiznīcināšanās taimeris, tās var atsaukt un varat " +
            "redzēt, vai partneris tās ir izlasījis. Interfeiss ir pieejams 28 valodās un darbojas uz " +
            "galddatoriem un mobilajām ierīcēm.",
        helpPrivacyTitle: "Privātums",
        helpPrivacyText:
            "NullPost ir veidots ap vienu principu: jūsu dati pieder tikai jums. Serveris darbojas tikai " +
            "kā starpnieks — pārsūta šifrētas paketes un nevar lasīt, glabāt vai reģistrēt saturu.\n\n" +
            "Jūsu parole nekad neatstāj jūsu ierīci. Tā tiek izmantota tikai lokāli pārlūkprogrammā, " +
            "lai izveidotu drošu savienojumu. Serveris paroli nekad neredz.\n\n" +
            "Nav nepieciešams konts. Sīkfaili izsekošanai netiek izmantoti. Analītika vai telemetrija " +
            "netiek vākta. IP adreses netiek reģistrētas. Serveris neko neraksta diskā — visa " +
            "informācija pastāv tikai atmiņā un pazūd, restartējot serveri.\n\n" +
            "Tiešajā (P2P) režīmā ziņu un failu saturs pat neiet caur serveri — tas tiek sūtīts tieši " +
            "starp divām pārlūkprogrammām.\n\n" +
            "NullPost ir pilnībā atvērtā pirmkoda. Varat pārbaudīt kodu, palaist savu instanci un " +
            "pats pārliecināties par visiem šeit norādītajiem apgalvojumiem.",
        helpSecurityTitle: "Drošība",
        helpSecurityText:
            "Visa NullPost komunikācija ir pilnīgi šifrēta no gala līdz galam, izmantojot pārlūkprogrammas " +
            "iebūvēto kriptogrāfiju. Šifrēšanai netiek izmantotas trešo pušu bibliotēkas.\n\n" +
            "Ievadot paroli, pārlūkprogramma lokāli izveido trīs lietas: kanāla ID partnera atrašanai, " +
            "šifrēšanas atslēgu un pirkstu nospiedumu pārbaudei. Parole nekad netiek nosūtīta serverim.\n\n" +
            "Kad abi partneri savienojas, pārlūkprogrammas izveido unikālu sesijas atslēgu, kas derīga " +
            "tikai tai sesijai. Atslēga pēc tam tiek iznīcināta. Tas nozīmē, ka pat ja kāds vēlāk " +
            "iegūst jūsu paroli, viņš nevarēs atšifrēt iepriekšējās sarunas.\n\n" +
            "Katrai ziņai ir kārtas numurs, kas novērš tās atkārtotu nosūtīšanu. Šifrēšanas atslēgas " +
            "ir bloķētas pārlūkprogrammā un tās nevar nokopēt.\n\n" +
            "Pēc savienošanās tiek parādīts pirkstu nospiedums, kas redzams abiem partneriem. Tas " +
            "jāapstiprina mutiski vai caur citu kanālu — ja pirkstu nospiedumi atšķiras, kāds, " +
            "iespējams, mēģina noklausīties.\n\n" +
            "Serveris ierobežo savienojumu ātrumu, atļauj tikai divus dalībniekus vienā kanālā un " +
            "pārsūta tikai šifrētus datus. Serveris nekad nevar sūtīt viltotus sistēmas ziņojumus " +
            "klientiem.",
        helpLinksTitle: "Pirmkods un mitināšana",
        helpLinksText: "Serveris tiek mitināts ES (Zviedrija). NullPost ir atvērtā pirmkoda programmatūra.",
    },
    et: {
        title: "NullPost",
        subtitle: "Turvaline, krüpteeritud kanal kahe arvuti vahel",
        passwordLabel: "Ühine parool",
        passwordPlaceholder: "Ühine parool",
        connect: "Ühenda",
        securityNote:
            "Teie parool ei lahku kunagi teie seadmest. Kõik sõnumid krüpteeritakse teie brauseris " +
            "enne edastamist — server ei saa neid lugeda. Pärast ühendamist kinnitage sõrmejälg " +
            "suuliselt partneriga enne tundliku teabe saatmist.",
        securityNoteLabel: "Turvateave",
        themeLabel: "Vaheta teemat",
        langLabel: "Vaheta keelt",
        statusWaiting: "Ootan partneri ühendust...",
        statusKeyExchange: "Seansi võtmete vahetus...",
        statusConnected: "Partner ühendatud",
        statusPeerLeft: "Partner lahkus",
        statusReconnecting: "Taasühendamine...",
        statusDisconnected: "Ühendus katkestatud",
        fingerprintLabel: "Kinnitage partneriga: ",
        disconnect: "Katkesta ühendus",
        messageLabel: "Sõnum",
        messagesLabel: "Sõnumid",
        messagePlaceholder: "Kirjuta sõnum… (Enter saatmiseks, Shift+Enter uuele reale)",
        send: "Saada",
        you: "Teie",
        peer: "Partner",
        copy: "Kopeeri",
        copied: "Kopeeritud!",
        sysChannelOpen: "Kanal avatud — ootan partnerit.",
        sysPeerConnected: "Partner ühendatud. Seansi võtmete vahetus...",
        sysKeyExchangeTimeout: "Võtmevahetus aegus — katkestage ühendus ja proovige uuesti.",
        sysPeerLeft: "Partner lahkus.",
        sysRejected: "Ühendus tagasi lükatud — kanalil on juba kaks osalejat.",
        sysTimedOut: "Kanal suletud — liiga kaua mitteaktiivne.",
        errTimedOut: "Aeg lõppes — kanal suletud mitteaktiivsuse tõttu.",
        sysKeysExchanged: "Seansi võtmed vahetatud. Kinnitage sõrmejälg suuliselt enne tundliku teabe saatmist.",
        sysDecryptFailed: "[Sõnumit ei õnnestunud dekrüpteerida — võimalik manipuleerimine või vale võti]",
        sysKeyExchangeSendFailed: "[Viga võtme saatmisel — katkestage ühendus ja proovige uuesti]",
        sysKeyExchangeFailed: "[Võtmevahetus ebaõnnestus — vale parool või manipuleeritud andmed]",
        sysReconnectFailed: "Taasühendamine ebaõnnestus. Katkestage ühendus ja proovige käsitsi.",
        sysEncryptFailed: "[Krüpteerimine ebaõnnestus — sõnumit ei saadetud]",
        errKeyExchangeTimeout: "Võtmevahetus ebaõnnestus. Teine osapool ei vastanud.",
        errChannelFull: "Kanal on täis — teine seade on selle parooliga juba ühendatud.",
        errKeyExchangeFailed: "Võtmevahetus ebaõnnestus.",
        errKeyExchangePassword: "Võtmevahetus ebaõnnestus — kontrollige, kas mõlemad osapooled kasutavad sama parooli.",
        passwordWeak: "Nõrk parool",
        passwordFair: "Keskmine parool",
        passwordGood: "Hea parool",
        passwordStrong: "Tugev parool",
        errNoPassword: "Palun sisestage ühine parool.",
        errPasswordTooShort: "Parool peab olema vähemalt 6 tähemärki.",
        errDeriveFailed: "Võtme tuletus ebaõnnestus — teie brauser ei pruugi toetada Web Crypto API-t.",
        errKeygenFailed: "Seansi võtmeid ei õnnestunud luua.",
        attachFile: "Lisa fail",
        dropFileHere: "Lohista fail(id) siia",
        fileSending: "Saatmine…",
        fileReceiving: "Vastuvõtmine…",
        fileSent: "Saadetud",
        download: "Laadi alla",
        fileTransferError: "Faili edastamine ebaõnnestus",
        fileTooLarge: "Fail on liiga suur. Maksimaalne suurus on 50 MB.",
        fileEmpty: "Tühja faili ei saa saata.",
        fileNotConnected: "Faili ei saa saata — partner ei ole ühendatud.",
        fileTransferAborted: "Faili edastamine katkestati — partner lahkus.",
        fileDownloadedByPeer: "Partner laadis alla",
        notifTitle: "Partner ühendatud",
        notifBody: "Teie partner liitus kanaliga",
        typingIndicator: "Partner kirjutab…",
        qrLabel: "QR-kood",
        qrHint: "Laske partneril skannida parooli jagamiseks",
        unsend: "Tühista",
        unsent: "(Tühistatud)",
        copyLink: "Kopeeri link",
        seen: "Nähtud",
        expired: "(Aegunud)",
        expiryLabel: "Isehävitustaimer",
        expiryPrompt: "Kustuta pärast:",
        modeRelay: "Vahendaja (server)",
        modeP2P: "Otseühendus (P2P)",
        modeRelayDesc: "Krüpteeritud sõnumid edastatakse läbi serveri",
        modeP2PDesc: "Andmed saadetakse otse brauserite vahel, serverit mööda minnes",
        sysP2PConnected: "Otseühendus loodud — andmed voolavad brauserite vahel.",
        sysP2PFallback: "Otseühendus ebaõnnestus — kasutatakse krüpteeritud vahendajat.",
        fileTooLargeP2P: "Fail on liiga suur. Maksimaalne suurus on 500 MB.",
        statusConnectedP2P: "Partner ühendatud (P2P)",
        helpLabel: "Abi",
        helpClose: "Sulge",
        helpTitle: "NullPosti kohta",
        helpAboutTitle: "Projekti kohta",
        helpAboutText:
            "NullPost on tööriist teksti ja failide turvaliseks jagamiseks kahe seadme vahel. Avage " +
            "NullPost kahes arvutis, sisestage sama parool ja alustage jagamist. Nii lihtne see ongi.\n\n" +
            "Kontot pole vaja. Serverile ei salvestata midagi. Logisid ei peeta. Kõik, mida saadate, " +
            "krüpteeritakse teie brauseris enne seadmest lahkumist — server ei näe sisu kunagi.\n\n" +
            "Saate valida kahe ühendusrežiimi vahel: Vahendaja saadab andmed krüpteeritult läbi " +
            "serveri, Otseühendus (P2P) aga saadab andmed otse kahe brauseri vahel ilma serverita. " +
            "Mõlemal juhul on kõik andmed kogu aeg täielikult krüpteeritud.\n\n" +
            "NullPost toetab tekstisõnumeid, faile kuni 50 MB (500 MB P2P-režiimis) ja pilte " +
            "eelvaatega. Sõnumitel võib olla isehävitustaimer, neid saab tühistada ja näete, kas " +
            "partner on need lugenud. Liides on saadaval 28 keeles ja töötab lauaarvutitel ja " +
            "mobiilseadmetel.",
        helpPrivacyTitle: "Privaatsus",
        helpPrivacyText:
            "NullPost on üles ehitatud ühele põhimõttele: teie andmed kuuluvad ainult teile. Server " +
            "toimib ainult vahendajana — edastab krüpteeritud pakette ega suuda sisu lugeda, salvestada " +
            "ega logida.\n\n" +
            "Teie parool ei lahku kunagi teie seadmest. Seda kasutatakse ainult kohalikult brauseris " +
            "turvalise ühenduse loomiseks. Server ei näe parooli kunagi.\n\n" +
            "Kontot pole vaja. Küpsiseid jälgimiseks ei kasutata. Analüütikat ega teleemet ei koguta. " +
            "IP-aadresse ei logita. Server ei salvesta midagi kettale — kogu teave eksisteerib ainult " +
            "mälus ja kaob serveri taaskäivitamisel.\n\n" +
            "Otseühenduse (P2P) režiimis ei läbi sõnumite ja failide sisu isegi serverit — see " +
            "edastatakse otse kahe brauseri vahel.\n\n" +
            "NullPost on täielikult avatud lähtekoodiga. Saate koodi üle vaadata, käitada oma " +
            "eksemplari ja ise kõiki siin esitatud väiteid kontrollida.",
        helpSecurityTitle: "Turvalisus",
        helpSecurityText:
            "Kogu NullPosti side on otsast otsani krüpteeritud, kasutades brauseri sisseehitatud " +
            "krüptograafiat. Krüpteerimiseks ei kasutata kolmandate osapoolte teeke.\n\n" +
            "Parooli sisestamisel loob brauser kohalikult kolm asja: kanali ID partneri leidmiseks, " +
            "krüpteerimisvõtme ja sõrmejälje kontrollimiseks. Parooli ei saadeta kunagi serverile.\n\n" +
            "Kui mõlemad partnerid ühenduvad, loovad brauserid unikaalse seansi võtme, mis kehtib " +
            "ainult selle seansi jaoks. Võti hävitatakse seejärel. See tähendab, et isegi kui keegi " +
            "saab hiljem teie parooli, ei saa ta varasemaid vestlusi dekrüpteerida.\n\n" +
            "Igal sõnumil on järjenumber, mis takistab sama sõnumi kordussaatmist. Krüpteerimisvõtmed " +
            "on brauserisse lukustatud ega ole kopeeritavad.\n\n" +
            "Pärast ühendamist kuvatakse sõrmejälg, mis on nähtav mõlemale partnerile. Peaksite selle " +
            "suuliselt või mõne muu kanali kaudu kinnitama — kui sõrmejäljed erinevad, võib keegi " +
            "üritada pealt kuulata.\n\n" +
            "Server piirab ühendusmäära, lubab kanalil ainult kaks osalejat ja edastab ainult " +
            "krüpteeritud andmeid. Server ei saa kunagi saata klientidele võltsitud süsteemisõnumeid.",
        helpLinksTitle: "Lähtekood ja majutus",
        helpLinksText: "Server asub ELis (Rootsi). NullPost on avatud lähtekoodiga tarkvara.",
    },
    mt: {
        title: "NullPost",
        subtitle: "Kanal sigur u kriptat bejn żewġ kompjuters",
        passwordLabel: "Password komuni",
        passwordPlaceholder: "Password komuni",
        connect: "Qabbad",
        securityNote:
            "Il-password tiegħek qatt ma titlaq mill-apparat tiegħek. Il-messaġġi kollha jiġu kriptati " +
            "fil-browser tiegħek qabel ma jintbagħtu — is-server ma jistax jaqrahom. Wara l-konnessjoni, " +
            "ivverifika l-fingerprint verbalment mal-partner tiegħek qabel ma tibgħat informazzjoni " +
            "sensittiva.",
        securityNoteLabel: "Informazzjoni ta' sigurtà",
        themeLabel: "Ibdel it-tema",
        langLabel: "Ibdel il-lingwa",
        statusWaiting: "Qed nistenna l-konnessjoni tal-partner...",
        statusKeyExchange: "Skambju ta' kjavi tas-sessjoni...",
        statusConnected: "Partner konness",
        statusPeerLeft: "Il-partner telaq",
        statusReconnecting: "Qed nerġa' nqabbad...",
        statusDisconnected: "Maqtugħ",
        fingerprintLabel: "Ivverifika mal-partner: ",
        disconnect: "Aqta' l-konnessjoni",
        messageLabel: "Messaġġ",
        messagesLabel: "Messaġġi",
        messagePlaceholder: "Ikteb messaġġ… (Enter biex tibgħat, Shift+Enter għal linja ġdida)",
        send: "Ibgħat",
        you: "Inti",
        peer: "Partner",
        copy: "Ikkopja",
        copied: "Ikkopjat!",
        sysChannelOpen: "Kanal miftuħ — qed nistenna l-partner.",
        sysPeerConnected: "Partner konness. Skambju ta' kjavi tas-sessjoni...",
        sysKeyExchangeTimeout: "L-iskambju tal-kjavi skada — aqta' l-konnessjoni u erġa' pprova.",
        sysPeerLeft: "Il-partner telaq.",
        sysRejected: "Il-konnessjoni ġiet rifjutata — il-kanal diġà għandu żewġ parteċipanti.",
        sysTimedOut: "Il-kanal ingħalaq — inattiv għal żmien twil wisq.",
        errTimedOut: "Skada l-ħin — il-kanal ingħalaq minħabba inattività.",
        sysKeysExchanged: "Kjavi tas-sessjoni skambjati. Ivverifika l-fingerprint verbalment qabel ma tibgħat informazzjoni sensittiva.",
        sysDecryptFailed: "[Ma setax jiddekriptat il-messaġġ — manipolazzjoni possibbli jew kjavi ħażina]",
        sysKeyExchangeSendFailed: "[Żball fl-invio tal-kjavi — aqta' l-konnessjoni u erġa' pprova]",
        sysKeyExchangeFailed: "[L-iskambju tal-kjavi falla — password ħażina jew dejta manipolata]",
        sysReconnectFailed: "Ma rnexxiex terġa' tqabbad. Aqta' l-konnessjoni u erġa' pprova manwalment.",
        sysEncryptFailed: "[Il-kriptaġġ falla — il-messaġġ ma ntbagħatx]",
        errKeyExchangeTimeout: "L-iskambju tal-kjavi falla. Il-parti l-oħra ma wiġbitx.",
        errChannelFull: "Il-kanal huwa mimli — apparat ieħor diġà konnett b'din il-password.",
        errKeyExchangeFailed: "L-iskambju tal-kjavi falla.",
        errKeyExchangePassword: "L-iskambju tal-kjavi falla — ivverifika li ż-żewġ partijiet jużaw l-istess password.",
        passwordWeak: "Password dgħajfa",
        passwordFair: "Password medja",
        passwordGood: "Password tajba",
        passwordStrong: "Password b'saħħitha",
        errNoPassword: "Jekk jogħġbok daħħal password komuni.",
        errPasswordTooShort: "Il-password trid tkun mill-inqas 6 karattri.",
        errDeriveFailed: "Id-derivazzjoni tal-kjavi falliet — il-browser tiegħek jista' ma jkunx jappoġġa l-Web Crypto API.",
        errKeygenFailed: "Ma setgħetx tiġi ġġenerata l-kjavi tas-sessjoni.",
        attachFile: "Żid fajl",
        dropFileHere: "Iddraġġja fajl(s) hawn",
        fileSending: "Qed jibgħat…",
        fileReceiving: "Qed jirċievi…",
        fileSent: "Mibgħut",
        download: "Niżżel",
        fileTransferError: "It-trasferiment tal-fajl falla",
        fileTooLarge: "Il-fajl huwa kbir wisq. Id-daqs massimu huwa 50 MB.",
        fileEmpty: "Ma tistax tibgħat fajl vojt.",
        fileNotConnected: "Ma tistax tibgħat fajl — il-partner mhuwiex konnett.",
        fileTransferAborted: "It-trasferiment tal-fajl tqata' — il-partner telaq.",
        fileDownloadedByPeer: "Il-partner niżżel",
        notifTitle: "Partner konness",
        notifBody: "Il-partner tiegħek ingħaqad mal-kanal",
        typingIndicator: "Il-partner qed jikteb…",
        qrLabel: "Kodiċi QR",
        qrHint: "Ħalli l-partner jiskan biex jaqsam il-password",
        unsend: "Irrevoka",
        unsent: "(Revokata)",
        copyLink: "Ikkopja l-link",
        seen: "Ara",
        expired: "(Skaduta)",
        expiryLabel: "Timer ta' awtodistruzzjoni",
        expiryPrompt: "Ħassar wara:",
        modeRelay: "Relay (server)",
        modeP2P: "Dirett (P2P)",
        modeRelayDesc: "Il-messaġġi kriptati jintbagħtu permezz tas-server",
        modeP2PDesc: "Id-dejta tintbagħat direttament bejn il-browsers, mingħajr ma tgħaddi mis-server",
        sysP2PConnected: "Konnessjoni diretta stabbilita — id-dejta qed tgħaddi bejn il-browsers.",
        sysP2PFallback: "Il-konnessjoni diretta falliet — qed jintuża relay kriptat.",
        fileTooLargeP2P: "Il-fajl huwa kbir wisq. Id-daqs massimu huwa 500 MB.",
        statusConnectedP2P: "Partner konness (P2P)",
        helpLabel: "Għajnuna",
        helpClose: "Agħlaq",
        helpTitle: "Dwar NullPost",
        helpAboutTitle: "Dwar il-proġett",
        helpAboutText:
            "NullPost huwa għodda għall-qsim sigur ta' test u fajls bejn żewġ apparati. Iftaħ NullPost " +
            "fuq żewġ kompjuters, daħħal l-istess password u ibda taqsam. Daqshekk sempliċi.\n\n" +
            "Ma hemmx bżonn ta' kont. Xejn ma jiġi maħżun fuq is-server. Ma jinżamm l-ebda log. Kulma " +
            "tibgħat jiġi kriptat fil-browser tiegħek qabel ma jitlaq mill-apparat — is-server qatt ma " +
            "jara l-kontenut.\n\n" +
            "Tista' tagħżel bejn żewġ modi ta' konnessjoni: Relay jibgħat id-dejta kriptata permezz " +
            "tas-server, filwaqt li Dirett (P2P) jibgħat id-dejta direttament bejn iż-żewġ browsers " +
            "mingħajr ma jgħaddi mis-server. Fi kwalunkwe każ, id-dejta kollha hija kriptata " +
            "kompletament matul il-ħin kollu.\n\n" +
            "NullPost jappoġġa messaġġi ta' test, fajls sa 50 MB (500 MB fil-modalità P2P) u immaġni " +
            "b'previews. Il-messaġġi jistgħu jkollhom timer ta' awtodistruzzjoni, jistgħu jiġu " +
            "rrevokati u tista' tara jekk il-partner tiegħek qraħomx. L-interface huwa disponibbli " +
            "fi 28 lingwa u jaħdem fuq desktop u apparati mobbli.",
        helpPrivacyTitle: "Privatezza",
        helpPrivacyText:
            "NullPost huwa mibni madwar prinċipju wieħed: id-dejta tiegħek tappartjeni lilek biss. " +
            "Is-server jaġixxi bħala relay biss — jibgħat pakketti kriptati u ma għandu l-ebda ħila " +
            "li jaqra, jaħżen jew jirreġistra l-kontenut.\n\n" +
            "Il-password tiegħek qatt ma titlaq mill-apparat tiegħek. Tintuża biss lokalment fil-browser " +
            "biex tistabbilixxi konnessjoni sigura. Is-server qatt ma jara l-password.\n\n" +
            "Ma hemmx bżonn ta' kont. Il-cookies ma jintużawx għat-traċċar. Ma tinġabarx l-ebda " +
            "analytics jew telemetrija. L-indirizzi IP ma jiġux irreġistrati. Is-server ma jaħżen xejn " +
            "fuq id-disk — l-informazzjoni kollha teżisti biss fil-memorja u tintilef meta s-server " +
            "jerġa' jibda.\n\n" +
            "Fil-modalità Diretta (P2P), il-kontenut tal-messaġġi u l-fajls anke ma jgħaddux mis-server " +
            "— jintbagħat direttament bejn iż-żewġ browsers.\n\n" +
            "NullPost huwa kompletament open source. Tista' tispezzjona l-kodiċi, tħaddem l-istanza " +
            "tiegħek stess u tivverifika int stess kull pretensjoni magħmula hawn.",
        helpSecurityTitle: "Sigurtà",
        helpSecurityText:
            "Il-komunikazzjoni kollha f'NullPost hija kriptata minn tarf għal tarf bl-użu tal-kriptografija " +
            "inkorporata tal-browser. Ma jintużaw l-ebda libreriji ta' partijiet terzi għall-kriptaġġ.\n\n" +
            "Meta ddaħħal password, il-browser tiegħek joħloq tliet affarijiet lokalment: ID tal-kanal " +
            "biex isib il-partner, kjavi ta' kriptaġġ, u fingerprint għall-verifika. Il-password qatt ma " +
            "tintbagħat lis-server.\n\n" +
            "Meta ż-żewġ partners jikkonnettu, il-browsers joħolqu kjavi unika tas-sessjoni li tapplika " +
            "biss għal dik is-sessjoni. Il-kjavi tiġi skartata wara. Dan ifisser li anki jekk xi ħadd " +
            "aktar tard jikseb il-password tiegħek, ma jistax jiddekriptat il-konversazzjonijiet " +
            "tal-passat.\n\n" +
            "Kull messaġġ għandu numru ta' sekwenza li jipprevjeni li l-istess messaġġ jintbagħat " +
            "mill-ġdid. Il-kjavi ta' kriptaġġ huma maqfulin ġewwa l-browser u ma jistgħux jiġu " +
            "kkupjati.\n\n" +
            "Wara l-konnessjoni, jintwera fingerprint li huwa viżibbli liż-żewġ partners. Għandek " +
            "tivverifika dan verbalment jew permezz ta' kanal ieħor — jekk il-fingerprints jvarjaw, " +
            "xi ħadd jista' jkun qed jisma' bil-moħbi.\n\n" +
            "Is-server jillimita r-rati ta' konnessjoni, jippermetti biss żewġ parteċipanti għal kull " +
            "kanal u jibgħat biss dejta kriptata. Is-server qatt ma jista' jibgħat messaġġi tas-sistema " +
            "foloz lill-klijenti.",
        helpLinksTitle: "Kodiċi sors u hosting",
        helpLinksText: "Is-server huwa ospitat fl-UE (L-Iżvezja). NullPost huwa open source.",
    },
};

const HTML_LANGS = { no: "no", en: "en", es: "es", sv: "sv", da: "da", fr: "fr", de: "de", pl: "pl", it: "it", uk: "uk", pt: "pt", nl: "nl", ro: "ro", ru: "ru", cs: "cs", el: "el", hu: "hu", fi: "fi", bg: "bg", sk: "sk", hr: "hr", ga: "ga", is: "is", lt: "lt", sl: "sl", lv: "lv", et: "et", mt: "mt" };

let currentLang = DEFAULT_LANG;

export function t(key) {
    return translations[currentLang][key] ?? key;
}

export function getLang() {
    return currentLang;
}

export function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = HTML_LANGS[lang];
    applyTranslations();
}

function applyTranslations() {
    for (const el of document.querySelectorAll("[data-i18n]")) {
        el.textContent = t(el.dataset.i18n);
    }
    for (const el of document.querySelectorAll("[data-i18n-placeholder]")) {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    }
    for (const el of document.querySelectorAll("[data-i18n-aria]")) {
        el.setAttribute("aria-label", t(el.dataset.i18nAria));
    }
    for (const el of document.querySelectorAll("[data-i18n-html]")) {
        const key = el.dataset.i18nHtml;
        const strong = el.querySelector("strong");
        if (strong) {
            el.firstChild.textContent = t(key);
        } else {
            el.textContent = t(key);
        }
    }
    for (const el of document.querySelectorAll("[data-i18n-title]")) {
        el.title = t(el.dataset.i18nTitle);
    }
}
