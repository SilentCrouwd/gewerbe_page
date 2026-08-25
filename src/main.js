document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      // Empfänger-Adresse
      const recipient = "info@handwerk-beispiel.de";

      // Formulardaten auslesen
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value || "Nicht angegeben";
      const service = document.getElementById("service-select").value;
      const message = document.getElementById("message").value;

      // Mailto-Inhalte aufbauen
      const subject = encodeURIComponent(`Neue Anfrage von ${name}`);
      const bodyText = `Hallo,

es ist eine neue Anfrage über das Webformular eingegangen:

--------------------------------------------------
Name / Firma: ${name}
E-Mail: ${email}
Telefon: ${phone}
Leistungsbereich: ${service}
--------------------------------------------------

Nachricht:
${message}`;

      const body = encodeURIComponent(bodyText);

      // E-Mail-Client öffnen
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }
});
