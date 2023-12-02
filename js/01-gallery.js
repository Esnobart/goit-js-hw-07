import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryDiv = document.querySelector(".gallery");

function galleryItem(arr) {
    return arr.map(({ preview, original, description }) => {
        <li class="gallery__item">
           <a class="gallery__link" href="large-image.jpg">
              <img
                   class="gallery__image"
                   src="${preview}"
                   data-source="${original}"
                   alt="${description}"
               />
           </a>
        </li>
    })
}
console.log(galleryItems);

const galleryMarkup = galleryItem(galleryItems).join('');
galleryDiv.insertAdjacentHTML('beforeend', galleryMarkup);