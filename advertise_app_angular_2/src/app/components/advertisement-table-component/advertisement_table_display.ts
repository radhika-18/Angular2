import {Component,Input, Output,EventEmitter ,ElementRef,AfterViewInit,ViewChild} from '@angular/core';
import { AdvertisementService } from '../../services/advertisement.service/advertisement.service';
import { Router } from '@angular/router';
import {ModalModule} from 'ng2-modal';  

@Component({
    selector:'display-ad',
    templateUrl:'./advertisement_table_display.html',    
    styleUrls:['styles.css']
    // inputs:['advertisementList'],
    // outputs:['deleteEvent','editEvent']

})

export class AdvertisementDisplayComponent implements AfterViewInit{
    title:string="Advertisement List"
    advertisementList:Array<Object>=[];
    keyword:string="";
    start=0;
    deleteSuccess:boolean=false;
    constructor(private adService:AdvertisementService,private router:Router){

    }

    ngAfterViewInit(){
       this.adService.getAllAdvertisement(this.start)
                    .subscribe(res=>{
                        // console.log("in display\n",res);
                        this.advertisementList=res["data"]["advertiseList"];
                        
       });
       this.deleteSuccess=false;
    //    console.log("in display\n",this.advertisementList);
    }
       
    editAd(postId:string){
        this.router.navigate(['/edit',postId]);
    }

    deleteAd(postId:string){
        this.adService.deleteAdvertise(postId)
                        .subscribe((res)=>
                            {
                                if(res["data"]["result"]==true)
                                this.deleteSuccess=true;
                                this.ngAfterViewInit();                                
                            });
    }

    getNextSet(){
        this.start+=10;
        this.adService.getAllAdvertisement(this.start)
                    .subscribe(res=>{
                        // console.log("in display\n",res);
                        this.advertisementList=res["data"]["advertiseList"];
                        
       });
    }

    getPreviousSet(){
        this.start-=10;
        this.adService.getAllAdvertisement(this.start)
                    .subscribe(res=>{
                        // console.log("in display\n",res);
                        this.advertisementList=res["data"]["advertiseList"];
                        
       });
    }    

}