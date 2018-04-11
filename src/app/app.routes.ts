import { Page1Component } from "./page/page1/page1.component";
import { Page2Component } from "./page/page2/page2.component";
import { Page3Component } from "./page/page3/page3.component";

export const AppRoutes = [
    {path: "", component: Page1Component},
    {path: "page2", component: Page2Component},
    {path: "page3", component: Page3Component},
]