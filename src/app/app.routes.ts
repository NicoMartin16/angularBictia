import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'registrate', component: SignupComponent },
    { path: 'update', component: UpdateUserComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'routePath' }
];

export const appRouting = RouterModule.forRoot(ROUTES);