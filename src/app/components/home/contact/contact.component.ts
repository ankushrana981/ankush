import { Component, OnInit } from '@angular/core';
import { AnaylticsService } from '../../../services/anayltics.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  constructor(
    public analyticsService: AnaylticsService
  ) { }

  ngOnInit(): void {
  }

}
