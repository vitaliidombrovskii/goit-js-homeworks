// Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне.Превью результата посмотри по ссылке.

// Превью

// Разбей задание на несколько подзадач:

//   Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js - gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data - action = "close-modal"].
// Очистка значения атрибута src элемента img.lightbox__image.Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
// Стартовые файлы
// В папке src ты найдешь стартовые файлы проекта с базовой разметкой и готовыми стилями.
// В файле gallery - items.js есть массив объектов содержащих информацию о изображениях: маленькое изображение, оригинальное и описание.
// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data - атрибуте source на элементе img, и указываться в href ссылки(это необходимо для доступности).

'use strict';
import galleryItems from './gallery-items.js';
let arrayOfImg = [];
const gallery = document.querySelector('.js-gallery');
const lightBox = document.querySelector('.js-lightbox');
const image = document.querySelector('.lightbox__image');
createGalleryItems(galleryItems);
const sliderOfModalWindow = document.querySelectorAll('.js-gallery > li > a');
const modalImage = document.querySelector('.js-lightbox > div > img');
getArrayOfAllOriginalImages(sliderOfModalWindow);
gallery.addEventListener('click', handleClickChangeSizeImg);
lightBox.addEventListener('click', handleClickCloseModal);

function handleClickChangeSizeImg(event) {
  event.preventDefault();
  const currentAttribute = event.target.getAttribute('data-source');
  if (modalImage.getAttribute('src' !== ' ')) {
    return modalImage.removeAttribute('src');
  }
  lightBox.classList.add('is-open');
  modalImage.setAttribute('src', currentAttribute);
  window.addEventListener('keydown', handleKeyPress);
  window.addEventListener('keydown', handleKeyChangeQueueRight);
  window.addEventListener('keydown', handleKeyChangeQueueLeft);
}

function createGalleryItems(items) {
  const markup = items.map(item => {
    const itemOfList = document.createElement('li');
    const linkOfItem = document.createElement('a');
    const imagesOfLink = document.createElement('img');
    itemOfList.classList.add('gallery__item');
    linkOfItem.classList.add('gallery__link');
    linkOfItem.setAttribute('href', `${item.original}`);
    imagesOfLink.classList.add('gallery__image');
    imagesOfLink.setAttribute('src', `${item.preview}`);
    imagesOfLink.setAttribute('data-source', `${item.original}`);
    imagesOfLink.setAttribute('alt', `${item.description}`);
    linkOfItem.append(imagesOfLink);
    itemOfList.append(linkOfItem);
    gallery.append(itemOfList);
  });
}

function handleClickCloseModal(event) {
  if (event.target === image) {
    return;
  }
  lightBox.classList.remove('is-open');
  window.removeEventListener('keydown', handleKeyPress);
  window.removeEventListener('keydown', handleKeyChangeQueueRight);
  window.removeEventListener('keydown', handleKeyChangeQueueLeft);
}

function handleKeyPress(event) {
  if (event.key !== 'Escape') {
    return;
  }
  lightBox.classList.remove('is-open');
}

function getArrayOfAllOriginalImages(items) {
  items.forEach(item => {
    arrayOfImg.push(item.getAttribute('href'));
  });
  return arrayOfImg;
}

function handleKeyChangeQueueRight(event) {
  if (event.key !== 'ArrowRight') {
    return;
  }
  let indexCurrentImg = arrayOfImg.indexOf(event.target.getAttribute('href'));
  let nextLink = arrayOfImg[indexCurrentImg + 1];
  if (indexCurrentImg === arrayOfImg.length - 1) {
    nextLink = arrayOfImg[0];
  }
  return modalImage.setAttribute('src', (event.target.href = nextLink));
}

function handleKeyChangeQueueLeft(event) {
  if (event.key !== 'ArrowLeft') {
    return;
  }
  let indexCurrentImg = arrayOfImg.indexOf(event.target.getAttribute('href'));
  let nextLink = arrayOfImg[indexCurrentImg - 1];
  if (indexCurrentImg === 0) {
    nextLink = arrayOfImg[arrayOfImg.length - 1];
  }
  return modalImage.setAttribute('src', (event.target.href = nextLink));
}