import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {
  @Input() currentIndex = 1;
  @Input() totalItem = 3;
  width: any;

  constructor() { }

  ngOnInit() {
    this.width = Math.round(((this.currentIndex / this.totalItem) * 100));
  }
}
