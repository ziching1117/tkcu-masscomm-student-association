// 手機版：漢堡選單開合
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });
}

// 手機版：下拉選單改用點擊展開（避免 hover 在手機無效）
const mediaQuery = window.matchMedia('(max-width: 860px)');

function bindMobileDropdowns() {
  const dropdownLinks = document.querySelectorAll('[data-dropdown-link]');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (!mediaQuery.matches) return; // 只有手機才攔截
      e.preventDefault();

      const submenu = link.parentElement.querySelector('.submenu');
      if (!submenu) return;

      submenu.classList.toggle('is-open');
    });
  });
}

bindMobileDropdowns();

<script>
function switchTab(id) {
  document.querySelectorAll('.media-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));

  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}

function openLightbox(img) {
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
</script>

<div id="lightbox" onclick="closeLightbox()">
  <img id="lightbox-img">
</div>
