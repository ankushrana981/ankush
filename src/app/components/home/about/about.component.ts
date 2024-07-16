import { Component, OnInit } from '@angular/core';
import { AnaylticsService } from '../../../services/anayltics.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {


  constructor(
    public analyticsService: AnaylticsService
  ) { }

  ngOnInit(): void {
  }

}