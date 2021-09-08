import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent implements OnInit {

  @Input() winner!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
