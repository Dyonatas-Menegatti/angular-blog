import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.html',
  styleUrl: './small-card.css',
})
export class SmallCard implements OnInit {
  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string = '';

  constructor() {}

  ngOnInit(): void {
  }
}
