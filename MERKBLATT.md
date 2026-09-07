# Merkblatt: Ausbau der Handwerksbetrieb-Template-Seite

## Aktueller Stand

Die Seite ist ein statischer Vite-Onepager mit:

- Hero-Bereich mit CTA und Telefonlink
- Ueber-uns-Bereich
- sechs Leistungsangeboten
- Kontaktformular mit `mailto:`-Versand
- mobiler Navigation per CSS-Checkbox
- Styling in `src/style.css`
- Interaktionen in `src/main.js`

## Aktuelle Luecken


- nur ein Bild und keine Referenzprojekte
- keine FAQ, Kundenstimmen oder Einsatzgebiete
- keine Unterseiten
- keine sichtbare Formular-Erfolgs- oder Fehlermeldung
- Inhalte und Kontaktdaten sind teilweise Platzhalter
- Root-Links muessen wegen der Vite-Basis `/gewerbe_page/` geprueft werden

## Empfohlene Navigation

- Startseite
- Ueber uns
- Leistungen
- Projekte
- Ablauf
- FAQ
- Kontakt

Unterseiten fuer Leistungen:

- Trockenbau & Innenausbau
- Komplettsanierung
- Bodenbelaege
- Malerarbeiten
- Energetische Daemmung
- Reparaturen

Die mobile Navigation sollte `aria-expanded` und `aria-controls` verwenden und sich nach einer Auswahl schliessen.

## Neue Sektionen fuer die Startseite

### Referenzen / Projekte

Vier bis sechs Projekte mit Bild, Ort, Leistungsbereich und Ergebnisbeschreibung.

### Ablauf der Zusammenarbeit

1. Erstgespraech
2. Vor-Ort-Termin
3. Angebot
4. Ausfuehrung
5. Abnahme

### Kundenstimmen

Nur echte Bewertungen oder deutlich gekennzeichnete Platzhalter verwenden.

### Einsatzgebiet

Bediente Staedte oder Regionen als statische Liste. Externe Karten erst nach Datenschutzpruefung einbauen.

### FAQ

Beispiele:

- Wie schnell erhalten wir ein Angebot?
- Arbeiten Sie auch in bewohnten Raeumen?
- Wie werden Zusatzarbeiten abgestimmt?
- Gibt es eine Vor-Ort-Beratung?

### Erreichbarkeit

Oeffnungszeiten, durchschnittliche Rueckmeldezeit und Kontakt-CTA.

## Empfohlene Unterseiten

- `leistungen.html`
- `projekte.html`
- `ueber-uns.html`
- `kontakt.html`
- `impressum.html`
- `datenschutz.html`

Spaeter koennen einzelne Leistungsdetailseiten ergaenzt werden.

## Impressum und Datenschutz

Der Footer sollte Kontakt, Oeffnungszeiten, Einsatzgebiet, Impressum und Datenschutz enthalten.

Das Impressum benoetigt echte Unternehmensdaten:

- Firmenname
- ladungsfaehige Anschrift
- vertretungsberechtigte Person
- Kontaktmoeglichkeiten
- Register- und Umsatzsteuerangaben, falls vorhanden

Die Datenschutzerklaerung muss den tatsaechlichen Ablauf beschreiben:

- Verarbeitung des Kontaktformulars
- Uebergabe per `mailto:`
- Hosting und Server-Logfiles
- Speicherdauer eingehender E-Mails
- Betroffenenrechte
- verantwortliche Stelle
- spaeter eingesetzte externe Dienste

Keine Firmendaten oder rechtlichen Inhalte erfinden.

## Umsetzungsreihenfolge

1. Mehrseitige Struktur und gemeinsame Navigation festlegen
2. Footer ergaenzen
3. Impressum und Datenschutz erstellen
4. Leistungen, Projekte, Ueber uns und Kontakt als Seiten anlegen
5. Referenzen, Ablauf und FAQ auf der Startseite einbauen
6. Formularzustand und mobile Navigation verbessern
7. SEO, Alt-Texte und Accessibility pruefen
8. Mit `npm run build` und Desktop-/Mobile-Ansichten testen

## Technische Referenz

- `index.html`
- `src/main.js`
- `src/style.css`
- `package.json`
- `vite.config.ts`
