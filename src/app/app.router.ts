import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';

export const router: Routes=[
    {path : '',redirectTo:'',pathMatch:'full'},
    {path : 'login' ,component : LoginComponent}

];

export const routes = RouterModule.forRoot(router);