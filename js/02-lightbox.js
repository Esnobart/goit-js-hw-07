import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector(".gallery");

galleryDiv.insertAdjacentHTML("beforeend", galleryItem(galleryItems));
galleryDiv.addEventListener("click", handleClick);

function galleryItem(arr) {
    return arr.map(({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
               <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    ).join('');
}

function handleClick(event) {
    event.preventDefault()

    if (event.target === event.currentTarget) {
        return gallery.next();
    }

    let overlay = new SimpleLightbox('.gallery__item a', { captionsData: "alt", captionDelay: 250 });
    overlay.on('show.simplelightbox', function () {
        `
        <img class="gallery__image " src="${galleryItems.original}" alt="${galleryItems.description}">
        `
    });

    document.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            return overlay.close();
        }

        return;
    })
}
