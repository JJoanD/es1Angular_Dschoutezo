import { Component } from '@angular/core';
import { ProvaC2Component } from '../prova-c2/prova-c2.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { TabellaComponent } from '../tabella/tabella.component';

@Component({
  selector: 'app-prova',
  standalone: true,
  imports: [RouterOutlet, ProvaC2Component , TabellaComponent, MatIconModule , MatButtonModule ,MatToolbarModule],
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent {

}
