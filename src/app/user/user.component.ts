import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { providerToFactory } from '@angular/core/src/di/r3_injector';
import { ProvidersFeature } from '@angular/core/src/render3';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
