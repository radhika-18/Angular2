import { Component ,Input, Output,EventEmitter } from '@angular/core';
import  {FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
    selector:'model-drivenForm',
    templateUrl:'./advertisement-form.html',
    styles:[`input.ng-invalid {border-left: 5px solid red} input.ng-valid {border-left: 5px solid green}`],
    styleUrls:['styles.css'],
    outputs:['addEvent']
})

export class ModelDrivenFormComponent {

    title:string="Advertisemet Add Form(Model Driven)";
    defaultName:string="My Name";
    category=['Furniture','Hardware','Mobile'];
    adimage:any;
    adObject:Object;
    index:number;

    advForm=new FormGroup({
        adname: new FormControl(null,[Validators.required,Validators.minLength(3)]),
        addescription:new FormControl(null,[Validators.required]),
        adcategory:new FormControl(null,[Validators.required]),
        adimage:new FormControl()
    });

    constructor(){
        this.index=1;
    }
    public addEvent=new EventEmitter<Object>();

    addAdvertisement(){
      this.adObject={
          'id':this.index,
          'name':this.advForm.value['adname'],
          'category':this.advForm.value['adcategory'],
          'description':this.advForm.value['addescription'],
          'image':this.advForm.value['adimage']
        };
      this.index++;
      this.addEvent.emit(this.adObject); 
    }


    onFileChange(fileInput: any){
        this.adimage = fileInput.target.files[0];
        let reader = new FileReader();
        reader.onload = (e: any) => {
            this.adimage = e.target.result;
        }
        reader.readAsDataURL(fileInput.target.files[0]);
    }

}