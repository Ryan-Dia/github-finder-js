import fetchUserData from './data.js';
import {
  renderProfile,
  renderUserFollowers,
  renderUserRepositories,
  userNotFound,
} from './render.js';

const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__button');

const run = async (userName) => {
  const data = await fetchUserData(userName);

  if (data.login === undefined) {
    userNotFound();
    return;
  }

  renderProfile(data);
  renderUserRepositories(userName);
  renderUserFollowers(userName);
};

// Event Listeners
searchButton.addEventListener('click', () => {
  run(searchInput.value);
});

searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    run(searchInput.value);
  }
});
