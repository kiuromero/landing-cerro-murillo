import { Component, OnInit } from '@angular/core';
import { NewsService } from '../core/services/news.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {
  news: any = [];
  newHome: any = [];

  constructor(private newsService : NewsService) { }

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews() {
    this.newsService.getNews().subscribe(
      (res) => {
        console.log(res);
        this.newHome.id = res[0].id;
        this.newHome.tittle = res[0].tittle;
        this.newHome.image = res[0].image;
        this.newHome.created_at = res[0].created_at;
        this.newHome.short_content = res[0].short_content; 
        this.newHome.category = res[0].nom;       
        this.news = res.map((obj : any) => {
          return {
            id: obj.id,
            tittle: obj.tittle,
            content: obj.content,
            image: obj.image,
            created_at: obj.created_at,
            short_content: obj.short_content,
            category: obj.nom,
          };
        });        
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
