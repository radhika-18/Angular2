import { Component } from '@angular/core';
import { AdvertisementService } from './services/advertisement.service/advertisement.service';

@Component({
  selector: 'my-app',
  template: `<div class="container">
             <nav>
              <a routerLink="/add" class="btn btn-white btn-default active">Add Ad</a>
              <a routerLink="/display" class="btn btn-white btn-default active">Display Ads</a>
             </nav>
             <router-outlet></router-outlet>          
             </div>
            `,

   providers:[AdvertisementService],  
})

export class AppComponent  { 

  advertisementList:Array<Object>=[]; 
  currObject:Object;

  // VIEW_PAGE:string="ADVERTISE LIST";  

  constructor(private adService:AdvertisementService){
     
  }

  // getAdvertisementList(){
  //   //  this.advertisementList=this.adService.getAllAdvertisement();
  // }

  // addAdvertisement(currObject:Object){
  //   this.adService.addAdvertise(currObject);
  //   this.getAdvertisementList();
  // }

  // editObject(index:number){
  //   this.getObjectByValue(index);
  //   // this.VIEW_PAGE="EDIT AD";
  // }

  // updateList(currObject:any){
  //   if(typeof(currObject)===typeof(Object)){
  //       this.adService.updateAdvertise(currObject);
  //   }         
  //   // this.VIEW_PAGE="ADVERTISE LIST";
  //   this.getAdvertisementList();
  // }

  // deleteObject(postId:number){
  //   this.adService.deleteAdvertise(index);
  //   this.getAdvertisementList();
  // }

  getObjectByValue(value:number){
    this.currObject={};
    this.advertisementList.forEach((o)=>{
      if(o['id']==value)
        this.currObject=o;
    });
  }

}


