import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { PersonalComponent } from './personal/personal.component';


export const appRoutes: Routes = [
 { path: 'Personal', component: PersonalComponent },
 { path: 'Work', component: PersonalComponent },
 

];


/*const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
        children: [
                    {
                        path: 'personal',
                        component: PersonalComponent,
                    },
                    /*{
                        path: 'Summary',
                        component: SchedulerJobsComponent,
                    },
                    {
                        path: 'Parent/:id',
                        component: ParentComponent,
                    },
        ]
    }
];*/

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { /* preloadingStrategy: PreloadAllModules */ })
    ],
    exports: [
        RouterModule
    ],
    providers: [ ]
})
export class AppRouting {
}
