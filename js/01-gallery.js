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

//* Встановлення прослуховувача подій
galleryList.addEventListener("click", openModal);

//* Відкриття модального вікна по кліку на елементі галереї.
let instance; // Declare the instance variable here

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const clickOnImg = event.target;
  createLightBox(clickOnImg);
}

//* Створення модалього вікна basicLightbox
function createLightBox(image) {
  instance = basicLightbox.create(`<img src="${image.dataset.source}">`, {
    onShow: (instance) => {
      document.addEventListener("keydown", onEscKeyPress);
    },

    onClose: (instance) => {
      document.removeEventListener("keydown", onEscKeyPress);
    },
  });

  instance.show();
}

//* Закриття модали при натисненні на "Escape"
function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";

  if (event.code === ESC_KEY_CODE) {
    console.log("listen");
    instance.close();
  }
}
