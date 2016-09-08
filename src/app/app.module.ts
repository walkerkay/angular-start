import {NgModule}      from '@angular/core'; //框架中关键的运行期部件
import {BrowserModule} from '@angular/platform-browser'; // 与 DOM 和浏览器相关的一些东西
import {FormsModule}   from '@angular/forms'; //angular的表单
import {AppComponent}  from './app.component';
import {routing} from './app.routing';
import {PeopleListComponent}  from './people/people.component';
import * as AppPipe from './app.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        PeopleListComponent,
        AppPipe.SexPipe,
        AppPipe.SearchPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
