import { fetchImages } from './js/pixabay-api';

import {
  clearGallery,
  renderImages,
  showLoadingIndicator,
  hideLoadingIndicator,
  showErrorToast,
  initLightbox,
} from './js/render-functions';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const searchInput = document.getElementById('gallery');

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const searchQuery = searchInput.value.trim();

    if (!searchQuery) {
      showErrorToast('Please enter a search query.');
      return;
    }

    showLoadingIndicator();

    try {
      clearGallery();
      const images = await fetchImages(searchQuery);
      if (images.length === 0) {
        showErrorToast(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
        renderImages(images);
        initLightbox();
      }
    } catch (error) {
      showErrorToast('Failed to fetch images. Please try again later.');
    } finally {
      hideLoadingIndicator();
    }
  });
});
