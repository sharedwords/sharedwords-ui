import { Component, OnInit } from '@angular/core';
import {Language} from './language';

@Component({
  selector: 'sw-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.less']
})
export class LanguagesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  getLanguages(): Language[] {
    return [];
  }

}
