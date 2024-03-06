import { Component } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-tabella',
  standalone: true,
  imports: [LiveAnnouncer , MatTableDataSource , MatTableModule , MatSort , MatSortModule ],
  templateUrl: './tabella.component.html',
  styleUrl: './tabella.component.css'
})
export class TabellaComponent {
  displayedColumns = ["nome" , "cognome" , "eta"];

  persone  = [
    {name : "A" , surname: "B" , age:18},
    {name : "C" , surname: "D" , age:18},
  ]
}
