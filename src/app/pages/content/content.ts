import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content implements OnInit {
   Id = ""
   photoCover = ""
   contentTitle = ""
   contentDescription = ""

  private id: string | null = "0";

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValueToComponent(this.id ? this.id : "0");
  }

  setValueToComponent(id: string) {
    const result = dataFake.filter(article => article.Id == id)[0];
    this.photoCover = result.photo;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }


}
