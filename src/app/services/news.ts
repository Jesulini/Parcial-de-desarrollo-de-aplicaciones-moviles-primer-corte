import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private news: News[] = [
    {
      id: 1,
      title: 'Noticia Principal',
      description: 'Esta es la noticia principal del día.',
      image: 'https://via.placeholder.com/300x150',
      url: 'https://www.example.com/news/1'
    },
    {
      id: 2,
      title: 'Segunda Noticia',
      description: 'Descripción de la segunda noticia.',
      image: 'https://via.placeholder.com/300x150',
      url: 'https://www.example.com/news/2'
    },
    {
      id: 3,
      title: 'Tercera Noticia',
      description: 'Descripción de la tercera noticia.',
      image: 'https://via.placeholder.com/300x150',
      url: 'https://www.example.com/news/3'
    }
  ];

  constructor() { }

  getNews(): Observable<News[]> {
    return of(this.news);
  }
}
