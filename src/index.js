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


const link = document.querySelector('.gallery-item');
const modalGallery = document.querySelector('.modal-gallery');
const modalImage = document.querySelector('.modal__image');

console.log('link', link);
console.log('link', link.target);
console.log('link', link.dataset.image);
console.log('gallery', modalGallery);
console.log('modalImage', modalImage)

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('e', e);
    // const path = e.dataset.image;

    // console.log('path', path);

    modalGallery.style.display = 'block';
    // modalImage.style.src = `.assets/images/gallery/${path}`;
})

