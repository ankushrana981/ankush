import { Component, OnInit } from '@angular/core';
import { AnaylticsService } from '../../../services/anayltics.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit {
  
  active = 0
  
  constructor(
    public analyticsService: AnaylticsService,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

}
