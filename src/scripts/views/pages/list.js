import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
      <div class="img-container">
      <img src="./images/heros/hero-image_1.jpg" alt="">
  </div>
  <div class="content">
  <h2 class="content__heading">List Restaurants</h2>
  <div id="restaurants" class="restaurants">

  </div>
</div>

      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await TheRestaurantDbSource.listRestaurant();
    // console.log(restaurant);
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurants) => {
      restaurantsContainer.innerHTML
        += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default ListRestaurant;
