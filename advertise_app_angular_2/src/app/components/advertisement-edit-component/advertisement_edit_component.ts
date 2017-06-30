import {Component,Input,Output,EventEmitter,OnInit} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { AdvertisementService } from '../../services/advertisement.service/advertisement.service';

@Component({
    selector:'edit-ad',
    templateUrl:'./advertisement_edit_component.html',
    styleUrls:['styles.css']
    // inputs:['currObject'],
    // outputs:['updateEvent']
})

export class AdvertisementEditComponent implements OnInit{
    title:string="Advertisement Edit Form";
    currObject:Object={};
    postId:string;
    category:Array<Object>=[];
    // updateEvent=new EventEmitter<Object>();

    constructor (private adService:AdvertisementService,private activateRoute:ActivatedRoute,private router:Router){
    }
    
    ngOnInit(){
        this.postId=this.activateRoute.snapshot.params['postId'];
        this.adService.getAllCategories().
                        subscribe(res=>this.category=res["data"]["itemList"]);
        this.adService.getAdvertise(this.postId)
                    .subscribe(res=>
                    {   
                        this.currObject=res["data"]["mypost"];
                    });
    }

    editAdvertisement(editObject:Object){
        this.currObject["title"]=editObject['adtitle'];
        // this.currObject["title"]=editObject["title"];
        this.currObject["name"]=editObject["adname"];
        this.currObject["category"]=editObject["adcategory"];
        this.currObject["description"]=editObject["addescription"];
        
        this.adService.updateAdvertise(this.currObject)
                    .subscribe(res=>{   
                        return res;
                    });
        this.router.navigate(['/display']);
        // this.updateEvent.emit(this.currObject);
    }   

    backToHomePage(){
        // this.updateEvent.emit("MAIN");
        this.router.navigate(['/display']);
    }


}