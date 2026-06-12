// loader.interceptor.ts

import {
  HttpInterceptorFn
} from '@angular/common/http';

import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { spinnerService } from './spinner';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {

  const loaderService = inject(spinnerService);

  loaderService.show();

  return next(req).pipe(
    finalize(() => {
      loaderService.hide();
    })
  );
};