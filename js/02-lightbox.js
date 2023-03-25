import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// * Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї
const galleryList = document.querySelector("ul.gallery");

const makeGalleryItemMarkup = ({
  preview,
  original,
  description,
} = galleryItems) => {
  return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
    </li>
    `;
};

const GallaryMarkup = galleryItems.map(makeGalleryItemMarkup).join("");

galleryList.insertAdjacentHTML("beforeend", GallaryMarkup);

//* Застосування SimpleLightbox
new SimpleLightbox("ul.gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
