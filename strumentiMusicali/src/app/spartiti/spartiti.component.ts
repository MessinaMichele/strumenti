import { Component } from '@angular/core';
import { DataService } from '/workspace/strumenti/strumentiMusicali/src/app/rest.service';

@Component({
  selector: 'app-spartiti',
  templateUrl: './spartiti.component.html',
  styleUrls: ['./spartiti.component.css']
})
export class SpartitiComponent {
  spartiti: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getScores().subscribe((data: any[]) => {
      this.spartiti = data.sort((a, b) => a.prezzo - b.prezzo);
    });
  }
}
