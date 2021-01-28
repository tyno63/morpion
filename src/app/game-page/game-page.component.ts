import { Component, OnInit } from '@angular/core';
import { Cell } from '../cell';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  public grid: Array<Cell> = [];

  private gridsize = 9;

  constructor() { 
    for (let i = 0; i < this.gridsize; i++) {
        this.grid.push({
          empty: true,
          cross: false,
          circle: false,
        });
      }
  }
  ngOnInit(): void {
  }
  public clickOnCell(cell: Cell): void {
    cell.empty = false;
    cell.cross = true;
  }
}


