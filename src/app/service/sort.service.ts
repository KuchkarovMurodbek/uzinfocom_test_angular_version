import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  constructor() {}
  sortMinusPlus(toggleSort: boolean, orderBy: string) {
    if (toggleSort) return `${orderBy}`;
    return `-${orderBy}`;
  }
}
