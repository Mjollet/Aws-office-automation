import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { Http, Response } from '@angular/http';

interface DEVICE {
  deviceid: number,
  version: number,
  employeid: number,
  nom: string,
  prenom: string,
  accounttype: string,
  startdate: string,
  enddate: string
}

 
/**
 * @title Table with filtering
 */

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})

export class SecondPageComponent implements OnInit {
  displayedColumns: string[] = ['deviceid', 'version', 'employeid', 'nom' , 'prenom', 'accounttype','startdate', 'enddate'];
  dataSource: MatTableDataSource<DEVICE>;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

  ngOnInit() {
  this.getContacts();
  }

  private apiUrl = 'https://1k2qqyg3tj.execute-api.eu-west-1.amazonaws.com/dev2/';

  constructor(private http: Http){
    console.log('Hello');
  }

  getData(){
    return this.http.get(this.apiUrl + 'user/GetTableDevice')
      .map((res: Response) => res.json ())
  }

  getContacts(){
    this.getData().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data.message.Items);
    })
  }
}
