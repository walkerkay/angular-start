/**
 * Created by walkerkay on 16/9/6.
 */
import {Component, Input} from '@angular/core';
import {People} from '../../model/people.ts';

@Component({
    selector: 'people-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    @Input() Peoples:People[];
    @Input() SearchKey:string;
}
