import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public icons = [
    { name: 'share', ariaLabel: "icon-button with share icon" } , 
    { name: 'favorite', ariaLabel: "icon-button with share icon" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
