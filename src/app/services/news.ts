import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = environment.newsApi.baseUrl;
  private apiKey = environment.newsApi.apiKey;

  constructor(private http: HttpClient) {}

  getTopHeadlines(country: string = 'us', page: number = 1, pageSize: number = 10): Observable<News[]> {
    return this.http
      .get<any>(`${this.baseUrl}/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}&apiKey=${this.apiKey}`)
      .pipe(
        map((res) =>
          res.articles.map((a: any, index: number) => ({
            id: index + (page - 1) * pageSize, // id único por página
            title: a.title,
            description: a.description,
            image: a.urlToImage,
            url: a.url,
            source: a.source?.name
          }))
        )
      );
  }
}
