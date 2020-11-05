import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public addresses: any[] = [{
    address: '',
    name:''
  }];

  logValue(form)
  {
    console.log(form);  

  }

  addAddress() {
    this.addresses.push({
      id: this.addresses.length + 1,
      address: '',
      name:''
    });
    
  }


  removeAddress(i: number) {
    if(this.addresses.length>1){}
    this.addresses.splice(i, 1);
  }
 }
