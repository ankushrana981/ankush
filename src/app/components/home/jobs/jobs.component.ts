import { Component, OnInit } from '@angular/core';
import { AnaylticsService } from '../../../services/anayltics.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit {
  
  active = 0
  
  constructor(
    public analyticsService: AnaylticsService
  ) { }

  ngOnInit(): void {
  }

}
