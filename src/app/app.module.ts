import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ROUTING } from './app.routing';
import { LoginComponent } from './blogo/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './blogo/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './blogo/article/article.component';
import { AddArticleComponent } from './blogo/add-article/add-article.component';
import { HomeComponent } from './blogo/home/home/home.component';
import { ListeArticleComponent } from './blogo/home/liste-article/liste-article.component';
import { ArticleItemComponent } from './blogo/home/article-item/article-item.component';
import { DetailArticleComponent } from './blogo/home/detail-article/detail-article.component';
import { loginGuard } from './guard/login.guard';
import { MyArticlesComponent } from './blogo/my-articles/my-articles/my-articles.component';
import { MyArticleItemComponent } from './blogo/my-articles/my-article-item/my-article-item.component';
import { MyArticleDetailComponent } from './blogo/my-articles/my-article-detail/my-article-detail.component';
import { MyArticleListComponent } from './blogo/my-articles/my-article-list/my-article-list.component';
import { LoginInterceptorProvider } from './interceptors/LoginInterceptor';
import { AdminComponent } from './blogo/admin/admin/admin.component';
import { AdminItemComponent } from './blogo/admin/admin-item/admin-item.component';
import { AdminDetailComponent } from './blogo/admin/admin-detail/admin-detail.component';
import { AdminListComponent } from './blogo/admin/admin-list/admin-list.component';
import { UserCredentialsComponent } from './blogo/user-credentials/user-credentials.component';
import { adminGuard } from './guard/admin.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    ArticleComponent,
    AddArticleComponent,
    HomeComponent,
    ListeArticleComponent,
    ArticleItemComponent,
    DetailArticleComponent,
    MyArticlesComponent,
    MyArticleItemComponent,
    MyArticleDetailComponent,
    MyArticleListComponent,
    AdminComponent,
    AdminItemComponent,
    AdminDetailComponent,
    AdminListComponent,
    UserCredentialsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ROUTING
  ],
  providers: [
    loginGuard,
    adminGuard,
    LoginInterceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
