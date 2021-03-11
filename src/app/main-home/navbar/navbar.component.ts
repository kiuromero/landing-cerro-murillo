import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  categories : any = [];
  constructor(private categoryServices: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryServices.getCategories().subscribe(
      (res) => {
        this.categories = res.map((obj : any) => {
          return { id: obj.id, nom: obj.nom };
        });console.log(this.categories)
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
