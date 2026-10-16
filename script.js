const WHATSAPP_NUMBER = '554884569824';
const DEFAULT_MESSAGE = 'Olá, DU PASTEL! Quero fazer um pedido de pastéis congelados.';
const waLink = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

document.getElementById('btnHeader').href = waLink(DEFAULT_MESSAGE);
document.getElementById('btnHero').href = waLink(DEFAULT_MESSAGE);
document.getElementById('btnFooter').href = waLink(DEFAULT_MESSAGE);
document.getElementById('btnFloat').href = waLink(DEFAULT_MESSAGE);

document.querySelectorAll('.btn-combo').forEach(btn => {
  btn.onclick = () => {
    const combo = btn.getAttribute('data-combo');
    window.open(waLink(`Olá, DU PASTEL! Quero pedir o ${combo}.`), '_blank');
  };
});

const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
menuBtn.onclick = () => {
  mobileNav.classList.toggle('open');
  menuBtn.textContent = mobileNav.classList.contains('open') ? '✕' : '☰';
};
mobileNav.querySelectorAll('a').forEach(a => a.onclick = () => {
  mobileNav.classList.remove('open');
  menuBtn.textContent = '☰';
});