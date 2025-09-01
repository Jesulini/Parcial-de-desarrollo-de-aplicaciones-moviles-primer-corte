import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news';
import { News } from '../models/news';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  principalNews: News | null = null;
  otherNews: News[] = [];
  page = 1; // contador de página

  constructor(
    private newsService: NewsService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews(event?: any) {
    this.newsService.getTopHeadlines('us', this.page).subscribe((data: News[]) => {
      if (this.page === 1) {
        // primera carga
        this.principalNews = data[0];
        this.otherNews = data.slice(1);
      } else {
        // cargas adicionales
        this.otherNews = [...this.otherNews, ...data];
      }

      // Completa el evento de scroll infinito
      if (event) {
        event.target.complete();
      }

      // Si no hay más noticias, desactiva el infinite scroll
      if (data.length === 0 && event) {
        event.target.disabled = true;
      }
    });
  }

  loadMoreNews(event: any) {
    this.page++;
    this.loadNews(event);
  }

  async openNewsModal(news: News) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: { news }
    });
    await modal.present();
  }
}
