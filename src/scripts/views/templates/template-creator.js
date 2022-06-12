import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurants) => `
<div class="restaurant-item">
  <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurants.name}"
      src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
      <div class="restaurant-item__header__rating">
          <p>⭐️<span class="restaurant-item__header__rating__score">${
  restaurants.rating
}</span></p>
      </div>
  </div>
  <div class="restaurant-item__content">
  <h3><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name}</a></h3>
    <p>${restaurants.description}</p>
    </div> 
</div>

`;

const createRestaurantsDetailTemplate = (restaurants) => `
  <h2 class="restaurant__title">${restaurants.name}</h2>
  <img class="restaurant__poster" alt="${restaurants.name}"
      src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
<div class="restaurant__info">
  <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${restaurants.address}</p>
    <h4>Kota</h4>
    <p>${restaurants.city}</p>
    <h4>Description</h4>
    <p>${restaurants.description}</p>

  <h3>Menu</h3>
  <div class="restaurant-menu">
    <div class="restaurant-food">
      <h4>Makanan</h4>
      <ul>
        ${restaurants.menus.foods
    .map(
      (food) => `
          <li><p>${food.name}</p></li>
        `,
    )
    .join('')}
      </ul>
  </div>
    <div class="restaurant-drink">
      <h4>Minuman</h4>
      <ul>
        ${restaurants.menus.drinks
    .map(
      (drink) => `
          <li><p>${drink.name}</p></li>
        `,
    )
    .join('')}
      </ul>
  </div>
  </div>


<h3>Reviews</h3>
  <div class="restaurantInfo">
  ${restaurants.customerReviews
    .map(
      (review) => `
      <div class="restaurantInfoList">
          <h4 tabindex="0">${review.name}</h4>
          <p tabindex="0" class="date-review">${review.date}</p>
          <p tabindex="0">${review.review}</p>
      </div>
  `,
    )
    .join('')}
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantsDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
