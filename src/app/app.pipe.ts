import {Pipe, PipeTransform} from '@angular/core';
import {People} from './model/People';

@Pipe({name: 'sex'})
export class SexPipe implements PipeTransform {
    transform(sex:number) {
        return sex ? '男' : '女';
    }
}

@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform {
    transform(data:People[], key = '') {
        return data.filter((item)=>item.name.indexOf(key) > -1);
    }
}