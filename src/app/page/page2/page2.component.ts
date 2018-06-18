import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs'
import { map } from 'rxjs/operator/map';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  displayedColumns = ['name', 'location', 'phone', 'level'];
  public items : Observable<any[]>;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  selectedValue: string;

  options = [
    {value: 'profile', viewValue: 'Profile'},
    {value: 'logout', viewValue: 'Logout'}
  ];

  constructor(public database: AngularFireDatabase) { }

  ngOnInit() {
    this.database.list("students").valueChanges().subscribe(values  => {
      values.forEach(value => {
        console.log(value['name']);
        let item : Element = {name : value['name'], location : value['location'], phone : value['phone_number'], level : value['level']};
        ELEMENT_DATA.push(item);
      })
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    });
    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


}

export interface Element {
  name: string;
  location: string;
  phone: string;
  level: string;
}

const ELEMENT_DATA: Element[] = [];