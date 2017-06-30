import {Component ,Input, Output,EventEmitter} from '@angular/core';
import { AdvertisementService } from '../../services/advertisement.service/advertisement.service';
import { Router } from '@angular/router';


@Component({
    selector:'advertisement-form',
    templateUrl:'./advertisement_add_form.html',
    styleUrls:['styles.css'],
    // outputs:['addEvent']
})

export class AdvertisementAddComponent{

    title:string="Advertisemet Add Form";
    defaultName:string="My Name";
    category:Array<Object>;
    adimages:Array<string>=[];
    adObject:Object;
    index:number;
    temp:any;


    constructor(private adService:AdvertisementService,private router:Router){
        this.index=1;
        this.adService.getAllCategories().subscribe((res:any)=>{
            this.category=res["data"]["itemList"];
       });
    }

  //  public addEvent=new EventEmitter<Object>();


    addAdvertisement(newObject:Object,advForm:any){
        let photoCount=this.adimages.length;
        let i=1;

        this.adObject={
            "title":newObject["adtitle"],
            "name":newObject["adname"],
            "category":newObject["adcategory"],
            "description":newObject["addescription"],
            "photoCount":photoCount
        }

        while(i<=photoCount){
            this.adObject["photo"+(i)]=this.adimages[i-1].split(",")[1];
            i++;
        }
        
        this.adService.addAdvertise(this.adObject).subscribe(receivedResponse=>{
            if(JSON.stringify(receivedResponse["data"])!=null)
                {
                alert("Product Added");       
                window.location.reload();
                 }
        });       
    }

    onFileChange(fileInput: any){
        this.adimages=this.adService.readImage(fileInput);
    }

    clearForm(advForm:any){
        advForm.resetForm();
    }

    removeImage(element:any){
        this.adimages=[];
        this.adimages = this.adService.removeImage(element);
    }

}