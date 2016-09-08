import {Injectable} from '@angular/core';
import {People} from '../model/People';

@Injectable()
export class PeopleService {
    getPeoples():People[] {
        return [
            {
                name: '张三',
                age: 20,
                sex: 1,
                address: '北京',
                phone: '18801110111'
            }, {
                name: '李四',
                age: 20,
                sex: 1,
                address: '江苏',
                phone: '18801110111'
            }, {
                name: '张雪',
                age: 20,
                sex: 1,
                address: '上海',
                phone: '18801110111'
            }, {
                name: '大笨',
                age: 20,
                sex: 1,
                address: '成都',
                phone: '18801110111'
            }, {
                name: '珊珊',
                age: 20,
                sex: 0,
                address: '北京',
                phone: '18801110111'
            }
        ];
    }
}