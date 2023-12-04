import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector(".gallery");

galleryDiv.insertAdjacentHTML("beforeend", galleryItem(galleryItems));

function galleryItem(arr) {
    return arr.map(({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
               <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    ).join('');
}

const gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
