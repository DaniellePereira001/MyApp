import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {

  
  toppings = new FormControl('');

  toppingList: string[] = [ 'região', 'geração', 'compra', 'preçoMedio'];

}
