import FavoriteRestaurantIdb from '../data/favorite-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurants }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurants = restaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurants;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurants = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurants;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurants);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurants.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
