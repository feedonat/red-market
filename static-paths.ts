export const REDIRECT_ROUTES = [
  
  {
    from: '/auth',
    to: '/auth/login'
  },
  
  {
    from: '/firebase',
    to: '/firebase/auth/sign-in'
  },
  {
    from: '/firebase/auth',
    to: '/firebase/auth/sign-in'
  },
  // We don't store state in the server, redirect to sign-in.
  // [/sign-in] should redirect to profile if the user is logged in the Browser
  {
    from: '/firebase/auth/profile',
    to: '/firebase/auth/sign-in'
  },
  {
    from: '/firebase/crud',
    to: '/firebase/crud/listing'
  },
  
];

export const APP_ROUTES = [
  '/app/user',
  '/app/user/friends',
  '/app/notifications',
  '/firebase/auth/sign-in',
  '/firebase/auth/sign-up',
  '/firebase/crud/listing',
  '/firebase/crud/details/:id',
  '/contact-card',
  '/forms-and-validations',
  '/forms-filters',
];
