import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Person } from './model/person';
import { CommonModule, NgFor } from '@angular/common';
import { ProvaComponent } from './prova/prova.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , RouterLink, FormsModule , CommonModule , ProvaComponent ] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'es1Angular_Dschoutezo';
  numClick = 0;
  buttonDisabled : boolean = false;
  editMode : boolean = false;

  person : Person = {
    name: "Joan" , surname : "Dschoutezo" , age : 19
  }

  persone : Person[] = [
    {name : "A" , surname: "B" , age:18},
    {name : "C" , surname: "D" , age:18},
  ]

  newPerson : Person = {
     name : " ",
     surname : " ",
     age : 0
  }
  
  

  add = () => {
    this.persone.push(this.newPerson);
    this.persone.splice(0,1);
    this.newPerson = {name : " " , surname: " " , age : 0};
  }

  delete = (i: number) => {
    this.persone.splice(i,1) ;
  }

  edit = (i: number) => {
    this.editMode = !this.editMode;
    this.newPerson = this.persone[i];
  }

  completaEdit = () =>{
    this.editMode = false;
    this.newPerson = {name : " " , surname: " " , age : 0};
  }
}
