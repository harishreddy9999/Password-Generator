import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FacetsCloud';
  checkboxes:any =[];
  dictionary: any[] = [];

  lowercase: boolean = false;
  numbers: boolean = false;
  symbols: boolean = false;

  passwordLenght: Number = 4;
  buttonLabel: string = "Generate Password";
  newPassword: string = "";
  constructor(){
    this.checkboxes = [
      {
        "id": "lowercase",
        "label": "a-z",
        "library": "abcdefghijklmnopqrstuvwxyz",
        "checked": true
      }, {
        "id": "numbers",
        "label": "0-9",
        "library": "0123456789",
        "checked": true
      }, {
        "id": "symbols",
        "label": "!-?",
        "library": "!@#$%^&*-_=+\\|:;',.\<>/?~",
        "checked": false
      }
    ]

    this.lowercase = this.checkboxes[0].checked;
    this.numbers = this.checkboxes[1].checked;
    this.symbols = this.checkboxes[2].checked;
  }

  updatePasswordLength(event:any) {
    this.passwordLenght = event.target.value;
  }

  updateCheckboxValue(event:any) {
    if (event.target.id == "lowercase")
      this.lowercase = event.target.checked;

    if (event.target.id == "numbers")
      this.numbers = event.target.checked;

    if (event.target.id == "symbols")
      this.symbols = event.target.checked;
  }

  generatePassword() {
    if (this.lowercase === false  && this.numbers === false && this.symbols === false) {
      this.newPassword = "...";
    }
    this.dictionary = [].concat(
      this.lowercase ? this.checkboxes[0].library.split("") : [],
      this.numbers ? this.checkboxes[1].library.split("") : [],
      this.symbols ? this.checkboxes[2].library.split("") : []
    );

    var newPassword = "";
    for (var i = 0; i < this.passwordLenght; i++) {
      newPassword += this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
    }
    this.newPassword = newPassword;

  
    
  }
}
