import { galleryItems } from './gallery-items.js';
// Change code below this line
const pictures=document.querySelector(".gallery");
const markup = galleryItems
  .map((galleryItem) => `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</li>`)
  .join("");

  pictures.insertAdjacentHTML("afterbegin",markup);

  const handleClickPicture=(event)=>{
    
    event.preventDefault();

    const instance=basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${event.target.description}" >
`);

instance.show();

  };
  
  pictures.addEventListener("click", handleClickPicture);
  

console.log(galleryItems);
