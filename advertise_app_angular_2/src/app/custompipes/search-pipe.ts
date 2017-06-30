import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:"search"
})

export class SearchPipe implements PipeTransform{
    updateArray:Array<Object>=[];
    transform(items:Array<Object>,field:string,value:string){
        if (!items) return [];
        else if(value==null) return items;
        return items.filter(it => it[field].indexOf(value)!=-1);
    }
}