import { Component ,Input, Output,EventEmitter } from '@angular/core';


@Component({
    selector:'template-drivenForm',
    templateUrl:'./advertisement-form.html',
    styleUrls:['styles.css'],
    outputs:['addEvent']
})

export class TemplateDrivenFormComponent {

    title:string="Advertisemet Add Form(Template Driven)";
    defaultName:string="My Name";
    category=['Furniture','Hardware','Mobile'];
    adimage:any;
    adObject:Object;
    index:number;

    constructor(){
        this.index=1;
    }
    public addEvent=new EventEmitter<Object>();

    // addAdvertisement(name:string,categoryValue:string,description:string,image:any){
    //   this.adObject={
    //       'id':this.index,
    //       'name':name,
    //       'category':categoryValue,
    //       'description':description,
    //       'image':image
    //     };
    //   this.index++;
    //   this.a
    // }
    addAdvertisement(currObj:Object){
      this.adObject={
          'id':this.index,
          'name':currObj['adname'],
          'category':currObj['adcategory'],
          'description':currObj['addescription'],
          'image':currObj['adimage']
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