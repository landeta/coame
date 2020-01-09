import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  menu: any = [
    {
      titulo: 'inicio',
      url: '/dashboard',
    },
    {
      titulo: 'organizacion',
      url: '/dashboard',
      submenu: [
        {titulo: 'COAME', url: '/dashboard'},
        {titulo: 'objetivo', url: '/objetivo'},
        {titulo: 'sobre nosotros', url: '/about'},
      ]
    }
  ];

  constructor() { }
}
