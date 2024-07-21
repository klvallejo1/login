import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { StorageService } from '../servicios/storage.service';
export const authInterceptor: HttpInterceptorFn = (req, next) =>{
  const storageService = inject(StorageService);
  const token = storageService.getItem('token');
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  }) ;
  return next(authReq);
}
