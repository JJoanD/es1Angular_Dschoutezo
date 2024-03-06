import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterOutlet } from '@angular/router';
import { TabellaComponent } from '../tabella/tabella.component';

@Component({
  selector: 'app-prova-c2',
  standalone: true,
  imports: [RouterOutlet, MatSelectModule , MatInputModule , MatFormFieldModule],
  templateUrl: './prova-c2.component.html',
  styleUrl: './prova-c2.component.css'
})
export class ProvaC2Component {

}
