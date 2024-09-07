import { Component, inject, Input, ɵsetInjectorProfilerContext } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { AppService } from '../app.service';

@Component({
  selector: 'app-investment-input',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-input.component.html',
  styleUrl: './investment-input.component.css'
})
export class InvestmentInputComponent {

  private service = inject(AppService);

  get dataTable(){
    return this.service.data;
  }
}
