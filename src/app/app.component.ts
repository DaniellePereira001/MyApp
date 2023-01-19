import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toppings = new FormControl('');

  toppingList: string[] = [ 'região',  'compra', 'preçoMedio'];

  selectedFile: File | undefined;
onFileSelected(event: { target: { files: (File | undefined)[]; }; }) {
  this.selectedFile = event.target.files[0];
}
onUpload() {}
  title = 'myApp';

 
  } 








