import { Page1Component } from "./page/page1/page1.component";
import { Page2Component } from "./page/page2/page2.component";
import { Page3Component } from "./page/page3/page3.component";
import { LoginComponent } from "./page/login/login.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { ServicesPageComponent } from "./services-page/services-page.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";

export const AppRoutes = [
    {path: "", component: Page1Component},
    {path: "about", component: AboutPageComponent},
    {path: "services", component: ServicesPageComponent},
    {path: "contact", component: ContactPageComponent}
]