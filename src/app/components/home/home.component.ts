import { Component, OnInit } from '@angular/core';
import { AnaylticsService } from '../../services/anayltics.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(
    private analyticsService: AnaylticsService,
  ) {
  }

  ngOnInit(): void {
    this.analyticsService.sendAnalyticPageView("/inicio", "Se entro a inicio")
  }

}