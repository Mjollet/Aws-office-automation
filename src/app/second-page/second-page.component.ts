import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  employeId: number,
  name: string; 
  deviceId: number,
  devicedescription: string,
}

const ELEMENT_DATA: PeriodicElement[] = [
  {employeId: 1, name: 'Jean Jacques', deviceId: 103, devicedescription: 'hearphone'},
  {employeId: 2, name: 'Camille Philibert', deviceId: 101, devicedescription:  'screen'},
  {employeId: 3, name: 'Bertrand', deviceId: 102, devicedescription:  'laptop'}
];
 
 

/**
 * @title Table with filtering
 */

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})

export class SecondPageComponent implements OnInit {
  displayedColumns: string[] = ['employeId', 'name', 'deviceId', 'devicedescription'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
  }

}
