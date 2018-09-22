export default function() {
  document.addEventListener('click', e => {
    const el = e.target;
    if (el.matches('[href=""]') || el.matches('[href="#"]')) {
      e.preventDefault();
    }
  });
}
