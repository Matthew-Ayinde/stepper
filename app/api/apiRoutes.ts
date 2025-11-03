export class ApiRoutes {
  static BASE_URL = 'https://shoe-store-api-8wnz.onrender.com/api';

  static USER = {
    LOGIN: `${ApiRoutes.BASE_URL}/user/login`,
    REGISTERCUSTOMER: `${ApiRoutes.BASE_URL}/auth/register`,
    PROFILE: `${ApiRoutes.BASE_URL}/user/profile`,
  };

  static PRODUCTS = {
    LIST: `${ApiRoutes.BASE_URL}/products`,
    DETAILS: (id: string) => `${ApiRoutes.BASE_URL}/products/${id}`,
  };

  static CART = {
    ADD: `${ApiRoutes.BASE_URL}/cart/add`,
    REMOVE: `${ApiRoutes.BASE_URL}/cart/remove`,
    CHECKOUT: `${ApiRoutes.BASE_URL}/cart/checkout`,
  };
}