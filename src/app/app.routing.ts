import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //angular的路由

import { PeopleListComponent } from './people/people.component';

const appRoutes: Routes = [
    {
        path: 'peoples',
        component: PeopleListComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);