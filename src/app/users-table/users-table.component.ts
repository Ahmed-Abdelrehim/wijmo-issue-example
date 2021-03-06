import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  data = [];

  constructor() { }

  ngOnInit(): void {
    this.updateGridResources()
  }
  getData2(row, col): any[] {
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
      data = [];
    for (var i = 0; i < row; i++) {
      var temp = {};
      for (var j = 0; j < col; j++) {
        temp['col' + j] = "data" + ((i + j) % 250);
      }
      data.push(temp);
    }
    return data;
  }
  updateGridResources() {

    // this.cvData = new CollectionView([]);
    this.data = this.getData2(300, 25);;

    console.log(this.data)

  }
}
