import { Component, OnInit, Input } from '@angular/core';
import { reject } from 'q';
import { resolve } from 'url';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';

  statusOne  = 'eteint';
  statusTwo = 'allumé';
  statusThree = 'eteint';
  @Input() appareilName: String;
  @Input() appareilStatus: String;

  lastUpdate = new Date();
  test: String = 'Test de date from angular';
  appareils = [
    {
      name: 'Ordinateur',
      sattus: 'eteint'
    },
    {
      name: 'Télévision',
      sattus: 'allumé'
    },
    {
      name: 'Ventilo',
      sattus: 'eteint'
    },
    {
      name: 'Frigo',
      sattus: 'allumé'
    }
  ];

  constructor() {}

  ngOnInit() {
  }

  getStatus(): String {
    return this.appareilStatus;
  }

}
