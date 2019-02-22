import 'normalize.css'; 
import './style.scss';
// import fullpage from "fullpage.js"
// import Headroom from "headroom.js"
// import { TweenMax,  } from 'gsap/TweenMax';
// import { TimelineMax } from 'gsap/Timeline';
// // import Icon from './icon.jpg';

const isMobile = document.body.clientWidth >= 1024 ? '0' : '70px';
// const menu = document.querySelector('.header-sticky');

console.log('isMobile', isMobile);




const linksContainer = document.querySelector('.gallery');
const galleryLinks = document.querySelectorAll('.gallery-item');
const modalGallery = document.querySelector('.modal-gallery');
const gallery = document.querySelector('.gallery');
const modalImage = document.querySelector('.modal__image');
const modalClose = document.querySelector('.modal__close');
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
        giftText: '3 дня премиум аккаунта',
        choose: 'или',
        // tank: 'Т-26 (1.ГВ. Т. БР.)',
        // plane: 'Чайка Жуковского И-153 М-62',
        media: 'Видео и скриншоты',
        tankType: '(1.ГВ. Т. БР.)',
        tankName: 'Т-26',
        planeName: 'И-153 М-62',
        planeType: 'Чайка Жуковского',
        header: './assets/images/headers/header_ru.png',
        
    },
    tr: {
        offer: 'Ücretsiz <span class="offer__yellow">bonusunuzu</span> seçin',
        giftText: '3 gün Premium hesap süresi',
        choose: 'ya da',
        tankType: 'Light tank',
        tankName:  'M2A4',
        planeName: 'F2A-1 Buffalo',
        planeType: 'Thach’s',
        media: 'Video & Ekran Görüntüleri',
        header: './assets/images/headers/header_tr.png',
    }
}


function switchLang(element) {

    const target = element.target;
    const lang = target.dataset.lang;
    const selectedLang = langs[lang];

    console.log('target', giftText);
    console.log('tr', selectedLang.offer);

    planeName.innerHTML = selectedLang.planeName;
    planeType.innerHTML = selectedLang.planeType;
    tankName.innerHTML = selectedLang.tankName;
    tankType.innerHTML = selectedLang.tankType;
    choose.innerHTML = selectedLang.choose;
    offer.innerHTML = selectedLang.offer;
    header.src = require(`${selectedLang.header}`);
    giftText.forEach(text => text.innerHTML = selectedLang.giftText);

}

langsContainer.addEventListener('click', e => switchLang(e));

modalClose.addEventListener('click', e => {
    modalGallery.style.display = 'none';
    clearStatus();
    gallery.classList.remove('modal');
})

linksContainer.addEventListener('click', e => {
    console.log('e container', e)
    const path = e.target.dataset.image;

    clearStatus();

    e.target.classList.add('active');
    

    console.log(modalGallery.classList.contains('modal'))
    console.log(offer)
    console.log(modalGallery.classList)

    if (!gallery.classList.contains('modal')) {
        gallery.classList.add('modal');
    }

    // if (modalGallery.style.display === 'none') {
    //     // gallery.classList.add('modal');
    // }
    modalGallery.style.display = 'block';

    modalImage.src = require(`./assets/images/gallery/${path}`);
})


function showModal(item) {
    item.target.preventDefault();

    console.log('item', item);
}

function clearStatus() {
    galleryLinks.forEach(link => {
        link.classList.remove('active')
    })
}
