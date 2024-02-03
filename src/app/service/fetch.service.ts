import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response, TContest } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor(private httpClient: HttpClient) {}

  fetchData(
    page: number,
    page_size: number,
    search: string,
    ordering: string,
    has_checker:string,
    has_check_input:string,
    has_solution:string,
    partial_solvable:string,
    difficulty:string
  ): Observable<Response<TContest>> {
    const params = new HttpParams()
      .set('page_size', page_size.toString())
      .set('page', page.toString())
      .set('title', search)
      .set('ordering', ordering)
      .set('has_checker', has_checker)
      .set('has_check_input', has_check_input)
      .set('has_solution', has_solution)
      .set('partial_solvable', partial_solvable)
      .set('difficulty', difficulty);
    return this.httpClient.get<Response<TContest>>(
      'https://kep.uz/api/problems',
      { params }
    );
  }
}
