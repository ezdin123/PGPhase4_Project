import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public productForm :FormGroup;
  submitted: boolean;


  // DI -> by adding properties in constrctor.
  constructor(private formBuilder:FormBuilder, private apiService:ApiService,private router :Router) { }

  ngOnInit(): void {

    this.productForm = this.formBuilder.group({
      cusine : ['',[Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      name :['',[Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      desc: ['',[Validators.required]],
      price:['',Validators.required]
    });

  }

  public hasError(field:any){
    return (this.productForm.get(field).invalid && this.productForm.get(field).touched 
    && this.productForm.get(field).errors);
  }

  public submitForm(form:any){
    if(form.valid) {
      this.submitted  = true;
      this.apiService.addProduct(this.productForm.value).subscribe(res=> {
        console.log(res);
        this.router.navigateByUrl('/admin')

      
      })
    } else{
      this.validateForm(form);
    }
    console.log(this.productForm.value);
  }

  validateForm(form:any){
    Object.keys(form.controls).forEach(field=>{
      const control = form.get(field);
      if( control instanceof FormControl){
        control.markAsTouched({ onlySelf : true })
      } else{
        this.validateForm(control);
      }
    })
  }

  get cusine() { return this.productForm.get('cusine')}
  get name() { return this.productForm.get('name')}
  get desc() { return this.productForm.get('descr')}
  get price() { return this.productForm.get('price')}
 

}
