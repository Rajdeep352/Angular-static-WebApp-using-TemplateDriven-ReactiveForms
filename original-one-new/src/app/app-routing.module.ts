import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent} from './contact/contact.component';
import { AboutComponent } from './about/about.component'; 
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes=[
  {path:'home',component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'register', component:RegisterComponent},
  {path:'sign-in', component:SignInComponent},
  {path:'products', component:ProductsComponent}
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}