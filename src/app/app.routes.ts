import { Routes } from '@angular/router';

// import { OrderComponent } from './components/order/order/order.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OrderComponent } from './components/order/order/order.component';
import { NotFoundComponent } from './components/notfound/not-found/not-found.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { authGuard } from './guards/auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';

export const routes: Routes = [
  {
     path: '', 
     component: MainLayoutComponent,
     children:[
      {path:'',redirectTo:'home',pathMatch:'full'},
      { path: 'home', component: OrderComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'contact', component: ContactUsComponent },
      {path:'details/:id',component:ProductsDetailsComponent , canActivate: [authGuard]},
      {path:'login',component:LoginComponent },
      {path:"productadd/add",component:AddProductComponent},
  ]},

  { path: '**', component: NotFoundComponent },
];
