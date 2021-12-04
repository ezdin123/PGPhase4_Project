import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public checkoutForm: FormGroup;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { }


  ngOnInit(): void {

    this.checkoutForm = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      lname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      address: ['', [Validators.required]],
      cc: ['', Validators.required]
    });

  }



  public hasError(field: any) {
    return (this.checkoutForm.get(field).invalid && this.checkoutForm.get(field).touched
      && this.checkoutForm.get(field).errors);
  }

  public submitForm(form: any) {
    if (form.valid) {
      this.submitted = true;
      this.apiService.addPayment(this.checkoutForm.value).subscribe(res => {
        console.log(res);
           this.router.navigateByUrl('/home');

          })
        } else{
          this.validateForm(form);
        }
        console.log(this.checkoutForm.value);
      }

  validateForm(form: any) {
        Object.keys(form.controls).forEach(field => {
          const control = form.get(field);
          if (control instanceof FormControl) {
            control.markAsTouched({ onlySelf: true })
          } else {
            this.validateForm(control);
          }
        })
      }

}
