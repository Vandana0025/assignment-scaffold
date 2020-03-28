import { Component, OnInit } from '@angular/core';
import {MatInputModule,MatSelectModule} from '@angular/material';

import {FetchDataService } from 'src/app/fetch-data.service';

interface Gender {
  value: string;
  viewValue: string;
}

interface State {
  value: string;
  viewValue: string;
}

interface District {
  value: string;
  viewValue: string;
}

interface LGA {
  value: string;
  viewValue: string;
}
interface City {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  path: any = 'https://raw.githubusercontent.com/Vandana-25/vector25/master/CustomerInfo.json';

  primaryIDType: any;
  primaryIDNumber:any;
  firstName: any;
  dob: any;
  email: any;
  altPhone: any;
  addLine1: any;
  addLine2: any;
  addLine3: any;
  postal: any;

  constructor(  private fetchdata: FetchDataService) { }

  ngOnInit() {
    this.fetchdata.getData(this.path)
      .subscribe(data => {
        this.primaryIDType = data.primaryIDType,
        this.primaryIDNumber = data.primaryIDNumber,
        this.firstName = data.firstName,
        this.dob = data.dob,
        this.email = data.email,
        this.gender = data.gender,
        this.altPhone = data.altPhone,
        this.state = data.state,
        this.district = data.district,
        this.lga = data.lga,
        this.city = data.city,
        this.addLine1 = data.addLine1,
        this.addLine2 = data.addLine2,
        this.addLine3 = data.addLine3,
        this.postal = data.postal
      })


    // return this.formBuilder.group({

    // });
  }

  gender: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];

  state: State[] = [
    {value: 'gotham', viewValue: 'Gotham'},
    {value: 'metroCity', viewValue: 'Metro City'},
    {value: 'newYork', viewValue: 'New York'}
  ];

  district: District[] = [
    {value: 'district1', viewValue: 'District 1'},
    {value: 'district12', viewValue: 'District 2'},
    {value: 'district3', viewValue: 'District 3'}
  ];

  lga: LGA[] = [
    {value: 'federal', viewValue: 'Federal'},
    {value: 'public', viewValue: 'Public'},
    {value: 'private', viewValue: 'Private'},
  ];

  city: City[] = [
    {value: 'city1', viewValue: 'City 1'},
    {value: 'city2', viewValue: 'City 2'},
    {value: 'city3', viewValue: 'City 3'}
  ];
}

