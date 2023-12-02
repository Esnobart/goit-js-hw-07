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
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`
    ).join('');
}

function handleClick(event) {
    event.preventDefault()

    if (event.target === event.currentTarget) {
        return;
    }

    const image = event.target.closest(".gallery__link").getAttribute("href");

    const modal = basicLightbox.create(`
       <img class="gallery__image" src="${image}" alt="${image.description}" />
    `)

    modal.show()

    document.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            return modal.close();
        }

        return;
    })
}