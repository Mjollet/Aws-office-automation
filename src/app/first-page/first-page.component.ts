import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  
  myControl = new FormControl();
  options: string[] = ['Jean Jacques', 'Camille Philibert', 'Bertrand'];
  filteredOptions: Observable<string[]>;

  

  constructor() {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    

  }
        

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
  

    return this.options.filter(option => option.toLowerCase().includes(filterValue));

  }
  
  

}
