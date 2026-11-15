// Pencil Fish Studio hand-drawn icon set
// Usage in HTML:  <i data-icon="fish"></i>   (swapped for an inline SVG on load)
// Usage in JS:    pfIcon('fish')            (returns the SVG markup as a string)
// Colours come from style.css (.pf-icon rules), so icons follow the site palette.

const PF_ICONS = {
  pencil: `
    <path class="g" d="M6.6 20.3 L20.2 6.9 L25.2 11.9 L11.6 25.4 Z"/>
    <path class="w" d="M4 28.2 L6.6 20.3 L11.6 25.4 Z"/>
    <path class="k n" d="M4 28.2 L5.1 24.9 L7.3 27.1 Z"/>
    <path class="r" d="M20.2 6.9 L22.6 4.5 Q24.1 3.1 25.6 4.6 L27.5 6.5 Q28.9 8 27.5 9.5 L25.2 11.9 Z"/>
    <path d="M9.1 22.9 L22.7 9.4"/>`,

  fish: `
    <path class="w bold" d="M2.8 16.2 C6.8 5.6 18.6 5.2 23.4 15.8 C18.8 26.8 7.2 26.6 2.8 16.2 Z"/>
    <path class="tt bold" d="M23.4 15.8 L29.6 9.2 Q28 15.9 29.7 22.8 Z"/>
    <path class="g" d="M12.6 7.9 Q15.2 3.4 19.4 6.4 Q17.4 7.4 16.8 9.2 Z"/>
    <path class="bold" d="M13.6 9.2 C15.9 12.8 15.9 19.4 13.7 23"/>
    <path class="bold" d="M18 10.4 C19.6 13.4 19.6 18.4 18.1 21.4"/>
    <circle class="k n" cx="8.6" cy="14.2" r="1.9"/>
    <path d="M5.8 18.8 Q7.5 20 9.3 19.1"/>`,

  frame: `
    <path class="g" d="M4.8 6.4 L27.3 5.6 L26.8 26.6 L5.3 26.2 Z"/>
    <path class="t" d="M9 10 L23.2 9.7 L23 22.4 L9.2 22.4 Z"/>
    <path class="tt" d="M9.2 22.4 L13.6 16.3 L16.9 19.4 L19.4 16.8 L23 20.6 L23 22.4 Z"/>
    <circle class="g" cx="13.2" cy="13.4" r="1.7"/>`,

  magframe: `
    <path class="g" d="M3.8 9.2 L23.6 8.6 L24 28.2 L4.2 28.4 Z"/>
    <path class="t" d="M7.6 12.6 L20 12.4 L20.2 24.6 L7.8 24.6 Z"/>
    <path class="tt" d="M7.8 24.6 L11.6 19.2 L14.4 21.8 L16.6 19.6 L20.2 23 L20.2 24.6 Z"/>
    <path class="r" d="M20.6 2.4 L20.6 7.4 Q20.7 11.4 24.6 11.4 Q28.5 11.4 28.6 7.4 L28.6 2.4 L25.8 2.4 L25.8 7.4 Q25.8 8.8 24.6 8.8 Q23.4 8.8 23.4 7.4 L23.4 2.4 Z"/>
    <path class="w" d="M20.6 2.4 L23.4 2.4 L23.4 4.6 L20.6 4.6 Z M25.8 2.4 L28.6 2.4 L28.6 4.6 L25.8 4.6 Z"/>`,

  card: `
    <path class="w" d="M4.6 7.4 L16 9.6 L16 27.6 L4.8 25.2 Z"/>
    <path class="t" d="M16 9.6 L27.4 7.2 L27.2 25.2 L16 27.6 Z"/>
    <path class="g" d="M21.6 20.6 C18.6 18.6 18 16.8 18.7 15.6 C19.4 14.4 20.9 14.5 21.6 15.8 C22.3 14.5 23.8 14.4 24.5 15.6 C25.2 16.8 24.6 18.6 21.6 20.6 Z"/>`,

  ornament: `
    <circle class="t" cx="16" cy="19.4" r="9.2"/>
    <path class="g" d="M12.9 8.1 L19.1 8 L19.2 11.1 L12.9 11.2 Z"/>
    <path d="M16 8 Q15.6 4.3 18.6 4.4 Q20.4 4.6 19.6 6.4"/>
    <path d="M7.3 18.1 L10.2 15.8 L13.1 18.3 L16 15.8 L18.9 18.3 L21.8 15.8 L24.8 18.2"/>
    <circle class="g" cx="11.6" cy="23.2" r="1.3"/>
    <circle class="r" cx="16.2" cy="24.6" r="1.3"/>
    <circle class="g" cx="20.6" cy="23" r="1.3"/>`,

  palette: `
    <path class="w" d="M16 4.2 C8.4 4.2 4 10 4.2 16.2 C4.4 23.2 9.4 28 15.2 27.9 C18.3 27.8 18.2 25.1 16.8 23.6 C15.3 22 16.3 19.6 19.1 19.6 L23 19.6 C26.2 19.6 28 17.1 27.9 14 C27.7 8.2 22.4 4.2 16 4.2 Z"/>
    <circle class="g" cx="10.2" cy="12.4" r="2.2"/>
    <circle class="tt" cx="15.6" cy="8.8" r="2.2"/>
    <circle class="r" cx="21.6" cy="10.2" r="2.2"/>
    <circle class="t" cx="9.8" cy="19.2" r="2.2"/>`,

  heart: `
    <path class="g" d="M16 27.2 C6.4 20.6 3.8 14.6 5.9 10.2 C7.9 6 13.1 5.8 16 10.6 C18.9 5.8 24.1 6 26.1 10.2 C28.2 14.6 25.6 20.6 16 27.2 Z"/>
    <path d="M9.4 11.8 Q10.1 9.9 12.2 9.7"/>`,

  star: `
    <path class="g" d="M16 3.6 L19.7 11.2 L28.1 12.3 L21.9 18 L23.6 26.3 L16 22.2 L8.5 26.4 L10.1 18 L3.9 12.2 L12.3 11.2 Z"/>`,

  hi: `
    <path class="t" d="M5 8.4 Q5.1 5.1 8.3 5 L23.8 5.1 Q27 5.2 27 8.4 L26.9 17.8 Q26.8 21 23.6 21 L13.4 21 L7.6 26.6 L8.6 21 L8.2 21 Q5 20.9 5 17.7 Z"/>
    <path d="M11.4 9.2 L11.4 17.2 M11.4 13.8 Q14.6 10.8 15.9 14 L15.9 17.2"/>
    <path d="M20.4 13.2 L20.4 17.2"/>
    <circle class="k n" cx="20.4" cy="10.2" r="1.1"/>`,

  party: `
    <path class="g" d="M4.4 27.6 L10.6 12.6 L19.4 21.4 Z"/>
    <path d="M7 21.4 L12.6 24.6 M8.9 16.8 L16.3 22.6"/>
    <path d="M14.2 10.2 Q15.6 5.6 20.2 6.6 M19.6 14 Q23.9 12.4 26.3 15.8 M22 5 L23.6 3.2 M26.6 9.4 L28.6 8.8"/>
    <circle class="tt" cx="25" cy="21.6" r="1.5"/>
    <circle class="r" cx="12.8" cy="5.6" r="1.4"/>
    <circle class="g" cx="27.6" cy="4" r="1.2"/>`,

  wave: `
    <path class="t" d="M3 18.4 C6 13.2 10 13.2 12.1 17.2 C14.1 21.2 18 21.2 20.1 17.2 C22.2 13.2 26.2 13.2 29 18.4 L29 27 L3 27 Z"/>
    <path d="M3.4 23.4 C6.4 20.6 9.2 20.6 11.4 23.2 C13.6 25.8 16.6 25.8 19 23.2 C21.4 20.6 24.4 20.6 28.6 23.2"/>`,

  camera: `
    <path class="t" d="M4.2 11.2 Q4.2 9.2 6.2 9.2 L10.2 9.2 L12.2 6.2 L19.8 6.2 L21.8 9.2 L25.8 9.2 Q27.8 9.2 27.8 11.2 L27.8 23.8 Q27.8 25.8 25.8 25.8 L6.2 25.8 Q4.2 25.8 4.2 23.8 Z"/>
    <circle class="w" cx="16" cy="17.2" r="5.2"/>
    <circle class="tt" cx="16" cy="17.2" r="2.2"/>
    <circle class="g" cx="23.6" cy="12.6" r="1.1"/>`,

  close: `
    <path class="thick" d="M9 9.6 Q15.8 15.6 22.8 22.6 M22.4 9.2 Q15.6 16.2 9.4 22.8"/>`,

  alert: `
    <path class="rl" d="M16 4.4 C23 4.3 27.7 9.2 27.6 16 C27.5 22.9 22.8 27.7 16 27.6 C9.1 27.5 4.4 22.8 4.4 16 C4.5 9.1 9.1 4.5 16 4.4 Z"/>
    <path class="thick" d="M16.1 9.6 L15.9 17.8"/>
    <circle class="k n" cx="16" cy="22.2" r="1.6"/>`,

  check: `
    <path class="t" d="M16 4.4 C23 4.3 27.7 9.2 27.6 16 C27.5 22.9 22.8 27.7 16 27.6 C9.1 27.5 4.4 22.8 4.4 16 C4.5 9.1 9.1 4.5 16 4.4 Z"/>
    <path class="thick" d="M10.2 16.6 L14.2 20.6 L22.2 11.6"/>`,

  key: `
    <circle class="g" cx="10.4" cy="16" r="6"/>
    <circle class="w" cx="9.4" cy="16" r="2"/>
    <path d="M16.4 16 L28 16 M23.4 16 L23.4 20.4 M27 16 L27 19.2"/>`,

  rocket: `
    <path class="w" d="M16 3.6 C21.4 7.6 22.6 14 20.6 21.2 L11.4 21.2 C9.4 14 10.6 7.6 16 3.6 Z"/>
    <circle class="t" cx="16" cy="12.4" r="2.6"/>
    <path class="r" d="M11.4 17.4 L7.4 22.6 L11.8 22 Z M20.6 17.4 L24.6 22.6 L20.2 22 Z"/>
    <path class="g" d="M13.2 21.2 L16 28.4 L18.8 21.2 Z"/>`,

  refresh: `
    <path d="M25.2 12.6 A9.8 9.8 0 1 0 25.8 19.4"/>
    <path class="thick" d="M25.6 6.8 L25.4 12.8 L19.6 12.4"/>`,

  arrow: `
    <path class="thick" d="M5.4 16.4 Q15 15.6 25.4 16 M19.2 10 L25.6 16 L19.4 22.2"/>`,

  back: `
    <path class="thick" d="M26.6 16.4 Q17 15.6 6.6 16 M12.8 10 L6.4 16 L12.6 22.2"/>`,

  up: `
    <path class="thick" d="M16.2 26.4 Q15.4 16.8 16 6.6 M10 12.8 L16 6.4 L22.2 12.6"/>`,

  down: `
    <path class="thick" d="M15.8 5.6 Q16.6 15.2 16 25.4 M22 19.2 L16 25.6 L9.8 19.4"/>`,
};

function pfIcon(name, cls) {
  const body = PF_ICONS[name];
  if (!body) return '';
  return `<svg class="pf-icon${cls ? ' ' + cls : ''}" viewBox="0 0 32 32" aria-hidden="true" focusable="false">${body}</svg>`;
}

function pfIcons(root) {
  (root || document).querySelectorAll('i[data-icon]').forEach(el => {
    el.outerHTML = pfIcon(el.dataset.icon, el.className);
  });
}

pfIcons();
