import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatCardModule, CommonModule,ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatRadioModule, MatCheckboxModule, MatDatepickerModule],
  templateUrl: './form.component.html',
  styles: ''
})
export class FormComponent {
  hide = true;
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      ageGroup: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  

  onSubmit() {
    if (this.registrationForm.valid) {
      // Save the data here (e.g., send it to a backend server)
      console.log(this.registrationForm.value);
  
      // Reset the form after successful submission
      this.registrationForm.reset();
    } else {
      // Form is invalid, display error messages or handle accordingly
      console.log("Form is invalid!");
    }
  }
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
}

