import Detail from '../views/pages/detail';
import ListRestaurant from '../views/pages/list';
import Like from '../views/pages/like';

const routes = {
  '/': ListRestaurant, // default page
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
