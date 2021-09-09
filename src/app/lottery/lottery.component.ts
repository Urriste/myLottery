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

  constructor(private fb: FormBuilder) { }
  

  ngOnInit(): void {
    this.initForm()

  }

  submit(){
    console.log("click working")
 
    if(this.dataForm.valid){

    this.participants = this.dataForm.value.participants.split("\n");
      
    
    if(this.dataForm.value.amount_participants == 1){

        this.winners = this.participants[Math.floor(Math.random() * this.participants.length)]

    }
      

    if(this.dataForm.value.amount_participants > 1){
  
      this.winners = this.participants.slice(0,this.dataForm.value.amount_participants);
      console.log(this.winners);
      this.winners = this.shuffle(this.winners);
      

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
