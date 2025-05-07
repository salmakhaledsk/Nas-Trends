import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import Swal from 'sweetalert2'; 

export const authGuard: CanActivateFn = (route, state) => {
  let userAuthService = inject(UserAuthService);

  if (userAuthService.isLoggedIn()) {
    return true;
  } else {
    const router = inject(Router);

    Swal.fire({
      icon: 'warning',
      title: 'warning',
      text: 'You Must Login First',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    }).then(() => {
      router.navigate(['/login']);
    });

    return false;
  }
};
