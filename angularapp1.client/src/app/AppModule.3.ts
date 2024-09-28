import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ProductsComponent } from "./products/products.component";
import { CategoryComponent } from "./category/category.component";





@NgModule({
    declarations: [
        AppComponent,
        ContactUsComponent,
    ],
    imports: [
        BrowserModule, HttpClientModule,
        AppRoutingModule,
        RouterModule.forRoot([
            { path: 'category', component:CategoryComponent },
            { path: 'products', component: ProductsComponent },
            { path: 'about-us', component: AboutUsComponent },
            { path: 'contact-us', component: ContactUsComponent },
            { path: '', redirectTo: '/category', pathMatch: 'full' }, // Default route
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
