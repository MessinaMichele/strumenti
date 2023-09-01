import { Component } from '@angular/core';
import { DataService } from '/workspace/strumenti/strumentiMusicali/src/app/rest.service';
@Component({
  selector: 'app-strumenti',
  templateUrl: './strumenti.component.html',
  styleUrls: ['./strumenti.component.css']
})
export class StrumentiComponent {
    strumenti: any[] = [];
  
    constructor(private dataService: DataService) {}
  
    ngOnInit(): void {
      this.dataService.getInstruments().subscribe((data: any[]) => {
        this.strumenti = data.sort((a, b) => a.prezzo - b.prezzo);
      });
    }
  }