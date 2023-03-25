import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

//* Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

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
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>
    `;
};

const GallaryMarkup = galleryItems.map(makeGalleryItemMarkup).join("");

galleryList.insertAdjacentHTML("beforeend", GallaryMarkup);

//* Реалізація делегування на ul.gallery і отримання url великого зображення.

galleryList.addEventListener("click", openModal);

let instance; // Declare the instance variable here

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const clickOnImg = event.target;
  createLightBox(clickOnImg);
}

function createLightBox(image) {
  instance = basicLightbox.create(`<img src="${image.dataset.source}">`);

  instance.show();

  isVisible(instance);
}

function isVisible(instance) {
  if (instance.visible()) {
    document.addEventListener("keydown", onEscKeyPress);
  } else if (!instance.visible()) {
    document.removeEventListener("keydown", onEscKeyPress);
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";

  if (event.code === ESC_KEY_CODE) {
    instance.close();
  }
}
