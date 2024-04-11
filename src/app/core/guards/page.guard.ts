import { CanActivateFn } from '@angular/router';
import { FooterService } from '../services/footer.service';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export const pageGuard: CanActivateFn = (route, state) => {
 return true;
};
