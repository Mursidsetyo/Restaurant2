import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantsDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div id="restaurants" class="restaurants"></div>
        <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await TheRestaurantDbSource.detailRestaurant(url.id);

    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = createRestaurantsDetailTemplate(restaurants);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurants: {
        id: restaurants.id,
        pictureId: restaurants.pictureId,
        name: restaurants.name,
        description: restaurants.description,
        rating: restaurants.rating,
      },
    });
  },
};

export default Detail;
