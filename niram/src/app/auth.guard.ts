import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Check if running in the browser
  if (typeof window !== 'undefined') {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    if (isLoggedIn) {
      return true;
    } else {
      window.alert('Access denied. Please login first.');
      window.location.href = '/';
      return false;
    }
  }

  // On server side, block access by default
  return false;
};
