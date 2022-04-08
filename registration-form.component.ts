import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  listOfCountry=['India','England','russia'];

  registrationModel={
    firstname:'amu',
    lastname:'A',
    gender:'Female',
    country:'India'

  }

  constructor() { }

  ngOnInit(): void {
  }

}
