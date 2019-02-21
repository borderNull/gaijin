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
const modalImage = document.querySelector('.modal__image');
const modalClose = document.querySelector('.modal__close');

// console.log('link', link);
// console.log('link', link.target);
// console.log('link', link.dataset.image);
// console.log('gallery', modalGallery);
// console.log('modalImage', modalImage);
modalClose.addEventListener('click', e => {
    modalGallery.style.display = 'none';
    clearStatus();
})

linksContainer.addEventListener('click', e => {
    console.log('e container', e)

    const path = e.target.dataset.image;

    clearStatus();

    e.target.classList.add('active');

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
