// Das Formular wird erst nach dem Laden des HTML-Dokuments verbunden, damit
// die benötigten Eingabefelder sicher vorhanden sind.
document.addEventListener("DOMContentLoaded", () => {
  // Die Checkbox bleibt die einfache CSS-Steuerung; diese Logik ergänzt den
  // zugänglichen Zustand und schließt das Menü nach einer Auswahl.
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenuButton = document.querySelector(
    '[aria-controls="mobile-navigation"]',
  );
  const mobileNavigation = document.getElementById("mobile-navigation");

  if (mobileMenuToggle && mobileMenuButton && mobileNavigation) {
    const updateMobileMenuState = () => {
      const isOpen = mobileMenuToggle.checked;
      mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
      mobileMenuButton.setAttribute(
        "aria-label",
        isOpen ? "Menü schließen" : "Menü öffnen",
      );
    };

    mobileMenuButton.addEventListener("click", () => {
      mobileMenuToggle.checked = !mobileMenuToggle.checked;
      updateMobileMenuState();
    });
    mobileMenuToggle.addEventListener("change", updateMobileMenuState);
    mobileNavigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuToggle.checked = false;
        updateMobileMenuState();
      });
    });
    updateMobileMenuState();
  }

  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    // Die Website nutzt bewusst mailto statt eines eigenen Formularservers.
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
