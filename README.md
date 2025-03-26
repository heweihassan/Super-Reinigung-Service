# Super Reinigung Service Website

Diese Website wurde für Super Reinigung Service (SRS) erstellt, ein Unternehmen, das professionelle Reinigungs- und Gartenpflegedienste anbietet.

## Projektstruktur

```
Super Reinigung Service/
├── css/                  # CSS-Dateien
│   ├── normalize.css     # CSS-Reset für einheitliches Rendering
│   ├── style.css         # Hauptstildatei
│   └── responsive.css    # Responsive Stile für verschiedene Geräte
├── js/                   # JavaScript-Dateien
│   └── main.js           # Hauptskriptdatei für interaktive Elemente
├── images/               # Bilderordner
│   ├── favicon.png       # Website-Favicon
│   └── hero-bg.jpg       # Hintergrundbild für Hero-Bereich
├── fonts/                # Schriftarten (falls lokal gehostet)
├── pages/                # HTML-Dateien für Unterseiten
│   ├── leistungen.html   # Leistungsseite
│   ├── ueber-uns.html    # Über-uns-Seite
│   └── kontakt.html      # Kontaktseite
├── index.html            # Startseite
└── README.md             # Projektdokumentation
```

## Funktionalitäten

Die Website besteht aus vier Hauptseiten:

1. **Startseite** (index.html): Übersicht über die Dienstleistungen und Vorteile
2. **Leistungsseite** (leistungen.html): Detaillierte Informationen zu allen angebotenen Dienstleistungen mit Vorher-Nachher-Ergebnissen
3. **Über-uns-Seite** (ueber-uns.html): Informationen über das Unternehmen, das Team und die Werte
4. **Kontaktseite** (kontakt.html): Kontaktinformationen, Kontaktformular und häufig gestellte Fragen

### Wichtige Features:

- Vollständig responsive Design, optimiert für alle Bildschirmgrößen
- Mobiles Menü für kleinere Bildschirme
- FAQ-Akkordeon auf der Kontaktseite
- Formularvalidierung für das Kontaktformular
- Smooth Scroll für eine bessere Benutzererfahrung
- Optimiert für Barrierefreiheit (ARIA-Attribute)
- Druckoptimiert mit speziellen Print-Stilen

## Technologien

- HTML5
- CSS3 (mit CSS-Variablen und Flexbox/Grid-Layout)
- Vanilla JavaScript (ES6+)
- Font Awesome für Icons
- Moderne Responsive Design-Techniken

## Anpassung

### Bilder hinzufügen

Platzieren Sie Ihre Bilder im `images/`-Ordner und aktualisieren Sie die entsprechenden Bildpfade in den HTML-Dateien. Die folgenden Bilder sollten hinzugefügt werden:

- `images/favicon.png` - Favicon der Website
- `images/hero-bg.jpg` - Hintergrundbild für den Hero-Bereich
- Vorher-/Nachher-Bilder für die Leistungsseite
- Team-Bilder für die Über-uns-Seite

### Farben anpassen

Um das Farbschema anzupassen, ändern Sie die CSS-Variablen am Anfang der `style.css`-Datei:

```css
:root {
    --primary-color: #0066cc; /* Hauptblau */
    --secondary-color: #f8b500; /* Goldakzente */
    --dark-blue: #004d99;
    --light-blue: #e6f2ff;
    /* ... weitere Farben ... */
}
```

## Kontaktinformationen

Bei Fragen zur Website wenden Sie sich bitte an den Ersteller.

---

© 2025 Super Reinigung Service. Alle Rechte vorbehalten. 