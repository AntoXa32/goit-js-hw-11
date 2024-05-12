import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43780784-35e4285ec8f2021d0fe97b31d';

export async function fetchImages(searchQuery) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '43780784-35e4285ec8f2021d0fe97b31d';

// export const fetchPhotosByQuery = (query = 'pug') => {
//   const searchParams = new URLSearchParams({
//     key: API_KEY,
//     q: searchQuery,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   });

//   return fetch(`${BASE_URL}?${searchParams}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     return response.json();
//   });
// };
