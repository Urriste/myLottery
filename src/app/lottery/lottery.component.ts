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
  winners!: any[];
  amountParticipants!:number;
  error!:boolean;
  
  constructor(private fb: FormBuilder) { }
  

  ngOnInit(): void {
    this.initForm()

  }

  submit(){
    console.log("click working")
 
    if(this.dataForm.valid){

    this.error = false;

    this.participants = this.dataForm.value.participants.split("\n");
    this.amountParticipants = this.dataForm.value.amount_participants
    
    if(this.amountParticipants <= this.participants.length){
    
     
      if(this.amountParticipants == 1){
        this.error = false;
        this.winners = this.participants[Math.floor(Math.random() * this.participants.length)]

      }
      

    if(this.amountParticipants > 1){
      this.error = false;
      this.winners = this.participants.slice(0,this.dataForm.value.amount_participants);
      console.log(this.winners);
      this.winners = this.shuffle(this.winners.filter(Boolean).toString().split(","));
      
      }

    }

    else{
      this.error = true;
    }

  

    
    }
  
    
  
  }



  shuffle(arr: any): Array<any> {
    var i,j,temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
  }

  initForm(){
     this.dataForm = this.fb.group({
    participants:[''],
    amount_participants:['']
  })
  }
 

}
