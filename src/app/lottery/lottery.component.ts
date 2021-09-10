import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'



@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent implements OnInit {


 //VARIABLES//
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
   
 
    if(this.dataForm.valid){

    this.error = false;
    
    //split the participants array by the spaces//
    this.participants = this.dataForm.value.participants.split("\n");
    this.amountParticipants = this.dataForm.value.amount_participants
    
    //simple comparation to manage too much participants for few participants error//
    if(this.amountParticipants <= this.participants.length){
    
     
      if(this.amountParticipants == 1){
        this.error = false;

        //if there's only one participant, then we get a random number to get a position in the array and get the winner//
        this.winners = this.participants[Math.floor(Math.random() * this.participants.length)]

      }
      

    if(this.amountParticipants > 1){
      this.error = false;

      //we slice the array of participants from the beggining to the amount of participants//
      this.participants = this.shuffle( this.participants);

      this.winners = this.shuffle( this.participants.slice(0,this.dataForm.value.amount_participants))
      //here we delete the empty fields of the array with filter(boolean), and also split the array by the commas //
      this.winners = this.shuffle(this.winners.filter(Boolean).toString().split(","));
      
      }

    }

    else{
      this.error = true;
    }

  

    
    }
  
    
  
  }


  //this func shuffle the array to get the winners//
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
