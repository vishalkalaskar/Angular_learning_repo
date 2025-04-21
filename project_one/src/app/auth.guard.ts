import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  if (isLoggedIn) {
    return true;
  } else {
    // Redirect to login if not logged in
    window.alert('Access denied. Please login first.');
    window.location.href = '/'; // fallback in standalone
    return false;
  }
};
