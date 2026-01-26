const images = document.querySelectorAll('.gallery .gallery_foto');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const btnZoomIn = document.getElementById('zoom-in');
const btnZoomOut = document.getElementById('zoom-out');
const btnClose = document.getElementById('close');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let currentIndex = 0;
let scale = 1;

function openModal(index) {
  currentIndex = index;
  modalImg.src = images[currentIndex].src;
  modal.classList.add('active');
  scale = 1;
  modalImg.style.transform = `scale(${scale})`;
}

function closeModal() {
  modal.classList.remove('active');
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  openModal(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openModal(currentIndex);
}

images.forEach((img, index) => {
  img.addEventListener('click', () => openModal(index));
});

btnClose.addEventListener('click', closeModal);
btnNext.addEventListener('click', showNext);
btnPrev.addEventListener('click', showPrev);

btnZoomIn.addEventListener('click', () => {
  scale += 0.2;
  modalImg.style.transform = `scale(${scale})`;
});

btnZoomOut.addEventListener('click', () => {
  scale = Math.max(0.5, scale - 0.2);
  modalImg.style.transform = `scale(${scale})`;
});

// Закрытие по клику вне изображения
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

// Управление с клавиатуры
document.addEventListener('keydown', e => {
  if (!modal.classList.contains('active')) return;
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'Escape') closeModal();
});

// Масштабирование колесиком мыши
modalImg.addEventListener('wheel', e => {
  e.preventDefault();
  if (e.deltaY < 0) scale += 0.1;
  else scale = Math.max(0.5, scale - 0.1);
  modalImg.style.transform = `scale(${scale})`;
});


const toTopBtn = document.getElementById("toTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      toTopBtn.style.display = "block";
    } else {
      toTopBtn.style.display = "none";
    }
  });

  toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });