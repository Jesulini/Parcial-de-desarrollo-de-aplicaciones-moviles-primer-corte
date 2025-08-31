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

  constructor(
    private newsService: NewsService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.newsService.getNews().subscribe((data: News[]) => {
      this.principalNews = data[0];
      this.otherNews = data.slice(1);
    });
  }

  async openNewsModal(news: News) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: { news }
    });
    await modal.present();
  }
}
