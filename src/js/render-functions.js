import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    gallery.innerHTML = '';
  }
}

export function renderImages(images) {
  clearGallery();
  const gallery = document.querySelector('.gallery');

  images.forEach(image => {
    const card = document.createElement('a');
    card.href = image.largeImageURL;
    card.classList.add('gallery-item');

    card.innerHTML = `
      <div class="card">
        <img src="${image.webformatURL}" alt="${image.tags}" />
        <div class="image-info">
          <span>Likes: ${image.likes}</span>
          <span>Views: ${image.views}</span>
          <span>Comments: ${image.comments}</span>
          <span>Downloads: ${image.downloads}</span>
        </div>
      </div>
    `;

    gallery.appendChild(card);
  });

  const lightbox = new SimpleLightbox('.gallery-item');
  lightbox.refresh();
}

export function showLoadingIndicator() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.style.display = 'block';
  }
}

export function hideLoadingIndicator() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.style.display = 'none';
  }
}

export function showErrorToast(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
  });
}
export function initLightbox() {
  const lightbox = new SimpleLightbox('.gallery-item');
  lightbox.on('show.simplelightbox', function (e) {
    const currentImage = e.currentImage;
    if (currentImage) {
      const { likes, views, comments, downloads } = currentImage;
      const caption = `
        <div>
          <span>Likes: ${likes}</span>
          <span>Views: ${views}</span>
          <span>Comments: ${comments}</span>
          <span>Downloads: ${downloads}</span>
        </div>
      `;
      this.$caption.html(caption);
    }
  });
}
