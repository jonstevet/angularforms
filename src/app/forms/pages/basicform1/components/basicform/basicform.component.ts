import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.scss']
})
export class BasicformComponent {
  nameField = new FormControl('soy un control', [Validators.required, Validators.minLength(3)]);


}
