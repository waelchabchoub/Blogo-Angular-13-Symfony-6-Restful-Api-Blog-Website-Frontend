import { RouterModule, Routes } from "@angular/router";
import { AddArticleComponent } from "./blogo/add-article/add-article.component";
import { AdminComponent } from "./blogo/admin/admin/admin.component";
import { ArticleComponent } from "./blogo/article/article.component";
import { HomeComponent } from "./blogo/home/home/home.component";
import { LoginComponent } from "./blogo/login/login.component";
import { MyArticlesComponent } from "./blogo/my-articles/my-articles/my-articles.component";
import { SignupComponent } from "./blogo/signup/signup.component";
import { UserCredentialsComponent } from "./blogo/user-credentials/user-credentials.component";
import { adminGuard } from "./guard/admin.guard";
import { loginGuard } from "./guard/login.guard";

const APP_ROUTING: Routes = [
    {path:'blogo',children:[
        {path:'',component:HomeComponent},
        {path:'login',component:LoginComponent},
        {path:'signup',component:SignupComponent},
        {path:'my_articles',component:MyArticlesComponent,canActivate:[loginGuard]},
        {path:'article/add',component:AddArticleComponent,canActivate:[loginGuard]},
        {path:'article/:id',component:ArticleComponent,canActivate:[loginGuard]},
        {path:'admin',component:AdminComponent,canActivate:[adminGuard]},
        {path:'admin/user/:id',component:UserCredentialsComponent,canActivate:[adminGuard]},
    ]},
    {path:'',redirectTo:'/blogo',pathMatch:'full'},
    
];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);