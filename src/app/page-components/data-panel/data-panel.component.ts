import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-panel',
  templateUrl: './data-panel.component.html',
  styleUrls: ['./data-panel.component.css']
})
export class DataPanelComponent implements OnInit {

  @Input() title: string;

  @Input() content: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
