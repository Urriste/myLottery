import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'


@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent implements OnInit {

  dataForm!: FormGroup;
  participants!: any[];
  winner!: string;

  constructor(private fb: FormBuilder) { }
  

  ngOnInit(): void {
    this.initForm()

  }

  submit(){
    console.log("click working")
 
    if(this.dataForm.valid){
     this.participants = this.dataForm.value.participants.split("\n");
     console.log("participants", this.participants)
      this.winner = this.participants[Math.floor(Math.random() * this.participants.length)]
    }
  
    
  
  }


  initForm(){
     this.dataForm = this.fb.group({
    participants:[''],
  })
  }
 

}
