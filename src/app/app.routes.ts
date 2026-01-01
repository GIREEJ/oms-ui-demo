import { Routes } from '@angular/router';
import { Layout } from './shared/components/layout/layout';
import { Home } from './features/dashboard/home/home';
import { ProductsList } from './features/products/products-list/products-list';
import { ProductsDetail } from './features/products/products-detail/products-detail';
import { OrdersList } from './features/orders/orders-list/orders-list';
import { OrdersDetails } from './features/orders/orders-details/orders-details';
import { ReportsList } from './features/reports/reports-list/reports-list';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';


export const routes: Routes = [
    {
        path:'',
        component:Layout,
        children:[
            { path:'', component:Home },
            { path:'products', component: ProductsList },
            { path:'products/:id', component: ProductsDetail },
            { path:'orders', component: OrdersList },
            { path:'orders/:id', component: OrdersDetails },
            { path:'reports', component: ReportsList }
        ]
    },
    { path:'login', component:Login },
    { path:'register', component:Register },
    { path:'**', redirectTo:'' }
];
