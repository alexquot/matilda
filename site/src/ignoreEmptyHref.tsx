export function ignoreEmptyHref() {
  document.addEventListener('click', e => {
    const el = e.target as HTMLElement;
    if (el.matches('[href=""]') || el.matches('[href="#"]')) {
      e.preventDefault();
    }
  });
}
