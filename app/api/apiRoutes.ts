export class ApiRoutes {
  static BASE_URL = 'http://localhost:5000/api';
  // static BASE_URL = 'https://shoe-store-api-8wnz.onrender.com/api';

  static USER = {
    LOGIN: `${ApiRoutes.BASE_URL}/auth/login`,
    REGISTERCUSTOMER: `${ApiRoutes.BASE_URL}/auth/register`,
    PROFILE: `${ApiRoutes.BASE_URL}/user/profile`,
    PUSH_SUBSCRIPTION: `${ApiRoutes.BASE_URL}/auth/push-subscription`,
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

  static SOCKET_URL = 'http://localhost:5000';
  // static SOCKET_URL = 'https://shoe-store-api-8wnz.onrender.com';
}