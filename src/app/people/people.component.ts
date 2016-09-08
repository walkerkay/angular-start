/**
 * Created by walkerkay on 16/9/6.
 */
import {Component, OnInit} from '@angular/core';
import {People} from '../model//people.ts';
import {PeopleService} from '../services/people.service'
import {ListComponent} from "./list/list.component";
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'peoples',
    templateUrl: './people.component.html',
    directives: [ListComponent],
    providers: [PeopleService,Title]
})
export class PeopleListComponent implements OnInit {
    peoples:People[];
    searchKey:string;

    constructor(private peopleService:PeopleService,private titleService:Title) {
    }

    getPeoples():void {
        this.peoples = this.peopleService.getPeoples();
    }

    ngOnInit():void {
        this.getPeoples();
        this.titleService.setTitle('人员列表');
    }
}
