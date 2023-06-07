import { galleryItems } from './gallery-items.js';
// Change code below this line
const pictures=document.querySelector(".gallery");


const markup = galleryItems
  .map((galleryItem) => `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
     <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
  </a>
</li>`)
  .join("");

  pictures.insertAdjacentHTML("afterbegin",markup);

  const handleClickPicture=(event)=>{

    event.preventDefault();
   
   new SimpleLightbox('.gallery a', { captionSelector:'img',captionType:String,captionsData:'alt',captionPosition:'bottom',captionDelay:250 });

  
  };
  
  pictures.addEventListener("click", handleClickPicture);

  console.log(galleryItems);
