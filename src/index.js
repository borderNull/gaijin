import 'normalize.css'; 
import './style.scss';


// const isMobile = document.body.clientWidth >= 1024;
// const menu = document.querySelector('.header-sticky');

// console.log('isMobile', isMobile);


const gallery = document.querySelector('.gallery');
const galleryLinks = document.querySelectorAll('.gallery-item');
const mobileGallery = document.querySelector('.gallery-mobile');
const mobileGalleryLinks = document.querySelectorAll('.gallery-mobile-item');
const mobileGalleryTitle = document.querySelector('.gallery__title');
const modalGallery = document.querySelector('.modal-gallery');
const modalImage = document.querySelector('.modal__image');
const modalClose = document.querySelector('.modal__close');
let modalNext = document.querySelector('.modal__next');
let modalPrev = document.querySelector('.modal__prev');
const offer = document.querySelector('.offer');
const planeType = document.querySelector('.plane-type');
const planeName = document.querySelector('.plane-name');
const tankName = document.querySelector('.tank-name');
const tankType = document.querySelector('.tank-type');
const header = document.querySelector('.header');
const choose = document.querySelector('.gifts-choose__text');
const giftText = document.querySelectorAll('.gifts-item-content__text');
const langsContainer = document.querySelector('.lang');
const langs = {
    ru: {
        offer: 'Выбери свой <span class="offer__yellow">бесплатный</span> бонус',
        giftText: '+ 3 дня премиум аккаунта',
        choose: 'или',
        media: 'Видео и скриншоты',
        tankType: '(1.ГВ. Т. БР.)',
        tankName: 'Т-26',
        planeName: 'И-153 М-62',
        planeType: 'Чайка Жуковского',
        header: './assets/images/headers/header_ru.png',
        mobileHeader: './assets/images/headers/header_ru_m.png',
        
    },
    tr: {
        offer: 'Ücretsiz <span class="offer__yellow">bonusunuzu</span> seçin',
        giftText: '+ 3 gün Premium hesap süresi',
        choose: 'ya da',
        tankType: 'Light tank',
        tankName:  'M2A4',
        planeName: 'F2A-1 Buffalo',
        planeType: 'Thach’s',
        media: 'Video & Ekran Görüntüleri',
        header: './assets/images/headers/header_tr.png',
        mobileHeader: './assets/images/headers/header_tr_m.png',
    }
}
let currentLang = 'ru';
let isMobile = document.body.clientWidth < 1024;

window.addEventListener('resize', e => {
  const isMobileResized = document.body.clientWidth < 1024;
  isMobile = isMobileResized;
})

window.addEventListener('DOMContentLoaded', () => {
  console.log('isMobile', isMobile);

  if (isMobile) {
    header.src = require(`${langs[currentLang].mobileHeader}`);
    // mobileGalleryTitle = langs[currentLang].media;
  }
})


langsContainer.addEventListener('click', e => switchLang(e));

modalClose.addEventListener('click', () => {
    modalGallery.style.display = 'none';
    clearStatus();
    gallery.classList.remove('modal');
    mobileGallery.classList.remove('visible');
})

gallery.addEventListener('click', e => setImage(e));
modalNext.addEventListener('click', e => setImage(e));
modalPrev.addEventListener('click', e => setImage(e));

function switchLang(element) {
    const target = element.target;
    const lang = target.dataset.lang;
    const selectedLang = langs[lang];
    currentLang = lang;

    planeName.innerHTML = selectedLang.planeName;
    planeType.innerHTML = selectedLang.planeType;
    tankName.innerHTML = selectedLang.tankName;
    tankType.innerHTML = selectedLang.tankType;
    choose.innerHTML = selectedLang.choose;
    offer.innerHTML = selectedLang.offer;

    if (isMobile) {
      header.src = require(`${selectedLang.mobileHeader}`);
      mobileGalleryTitle.innerHTML = selectedLang.media;
    } else {
      header.src = require(`${selectedLang.header}`);
    }
    giftText.forEach(text => text.innerHTML = selectedLang.giftText);

  }


function setImage(el) {
    const currentIndex = +el.target.dataset.index;
    const path = galleryLinks[currentIndex].dataset.image;

    clearStatus();
    galleryLinks[currentIndex].classList.add('active');
    mobileGalleryLinks[currentIndex].classList.add('active');

    if (!gallery.classList.contains('modal')) {
      gallery.classList.add('modal');
    }

    if (modalGallery.style.display == 'none' || !modalGallery.style.display){
      modalGallery.style.display = 'block';
    }

    if (isMobile) {
      mobileGallery.classList.add('visible');
    }

    checkNext(currentIndex);
    checkPrev(currentIndex);
    modalImage.src = require(`./assets/images/gallery/${path}`);
  }


function clearStatus() {

    galleryLinks.forEach(link => {
        link.classList.remove('active')
    })

    mobileGalleryLinks.forEach(link => {
      link.classList.remove('active');
    })
  }

function checkNext(index) {
    if (index === galleryLinks.length - 1) {
        modalNext.dataset.index = 0;
    } else {
        modalNext.dataset.index = ++index;
    }
  }

function checkPrev(index) {
    if (index === 0) {
        modalPrev.dataset.index = galleryLinks.length - 1;
    } else {
        modalPrev.dataset.index = --index;
    }
  }
