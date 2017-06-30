import {Injectable} from '@angular/core';
import { Http, RequestOptions, Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdvertisementService{

    URL:string="http://10.20.14.83:9000";

    advertisementList:Array<Object>=[];
    error:string;
    currObject:Object={};
    auth_token:string="5940f477590591edb9cd3149";
    imageArray:Array<string>=[];
    temp:any;
    constructor(private http:Http){}

    // createAuthorizationHeader(headers: Headers) {
    // headers.append('Authorization', 'Basic ' +
    //   btoa("auth-token:593e270f5905bd6737b257f6")); 
    // } 


    /* GET ALL ADVERTISEMENTS*/
    getAllAdvertisement(startIndex=0){
        let headers=new Headers();
        headers.append("auth-token",this.auth_token); 
        let options=new RequestOptions({headers:headers});
          // ...using get request
         return this.http.get(this.URL+"/posts/search?startIndex="+startIndex,options)
                         .map((res:Response) => {
                            //  console.log(res.json());
                             return res.json()
                         });
    }

    /* GET ALL CATEGORIES*/
    getAllCategories(){
        let headers=new Headers();
        headers.append("auth-token",this.auth_token); 
        let options=new RequestOptions({headers:headers});
        return this.http.get(this.URL+"/categories",options)
                         .map((res:Response) => {
                            //  console.log(res.json())
                            return res.json();
                             });
    
    }   

    /* GET AN ADVERTISE */
    getAdvertise(postId:string){
        let headers=new Headers();
        headers.append("auth-token",this.auth_token); 
        let options=new RequestOptions({headers:headers});
        return this.http.get(this.URL+"/viewAd?postId="+postId,options)
                    .map((res:Response)=>
                    {
                        // console.log(res.json());
                        return res.json()
                    });
        //    this.advertisementList.forEach((o)=>{
        //         if(o['id']==index)
        //             this.currObject=o;
        //     });            
        // return this.currObject;
    }

    /* ADD AN ADVERTISE */
    addAdvertise(adObject:Object){
        // console.log(adObject);
        let headers = new Headers();
        headers.append("Content-Type","application/json");
        headers.append("auth-token",this.auth_token);                 
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.URL+'/postAd',JSON.stringify(adObject),options)
                .map((response:Response)=>{
                    // console.log(response.json());
                    return response.json()});
    }

    /*DELETE AN ADVERTISE */
    deleteAdvertise(postId:string){
        let headers=new Headers();
        headers.append('auth-token',this.auth_token);
        let options=new RequestOptions({headers:headers});
        return this.http.delete(this.URL+"/post?postId="+postId,options)
                        .map((response:Response)=>{
                                // console.log(response.json());
                                return response.json()});
    //     var i = this.advertisementList.length;
    //     while(i--){
    //     if( this.advertisementList[i] && this.advertisementList[i].hasOwnProperty('id') && ( this.advertisementList[i]['id'] === index ) ){
    //         this.advertisementList.splice(i,1);
    //     }
    //   }
    //   return this.advertisementList;
    }

    /*UPDATE AN ADVERTISE */
    updateAdvertise(updateObject:Object){
        let headers=new Headers();
        headers.append('auth-token',this.auth_token);
        let options=new RequestOptions({headers:headers});
        return this.http.put(this.URL+"/postAd",JSON.stringify(updateObject),options)
                        .map((res:Response)=>
                        {
                            // console.log(res.json());
                            return res.json()
                        });
        // this.advertisementList.forEach((element)=>{
        //     if(element['id']==updateObject['id']){
        //         element['name']=updateObject['name'];
        //         element['description']=updateObject['description'];
        //         element['category']=updateObject['category'];        
        //     }
        // });
    }

    readImage(fileInput:any){
        let length=fileInput.target.files.length;
        let reader:FileReader;
        for(let i=0;i<length;i++){
            let file=fileInput.target.files[i];
            reader=new FileReader();
            reader.onload = (e: any) => {
                this.imageArray.push(e.target.result);
            }
            reader.readAsDataURL(file);
        }  
        return this.imageArray;  
    }

    removeImage(image:any){
        // this.imageArray=this.imageArray.splice(this.imageArray.indexOf(image),1);
        let index:number=this.imageArray.indexOf(image);
        this.imageArray.splice(index,1);
        return this.imageArray;
    }

}