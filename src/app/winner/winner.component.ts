import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent implements OnInit {

  @Input() winners!:Array<any>;
  @Input() amountParticipants!:number;
  @Input() error!:boolean;
  

  constructor() { }

  ngOnInit(): void {
   
  }

 
}
