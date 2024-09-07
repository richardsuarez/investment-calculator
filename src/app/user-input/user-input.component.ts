import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, UserInputComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {  
  initial = 0;
  annual = 0;
  exp_ret = 0;
  duration = 0;

  constructor(private service: AppService){}

  onSubmit(){
    this.service.calculateInvestmentResults(
      this.initial,
      this.duration,
      this.annual,
      this.exp_ret,
    );
  }
}
