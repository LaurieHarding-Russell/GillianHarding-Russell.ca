import { Routes } from '@angular/router';
import { AboutComponent } from './about/about';
import { AwardsComponent } from './awards/awards';
import { BookListComponent } from './book-list/book-list';
import { GeneralComponent } from './general/general';

export const routes: Routes = [
    {
      path: "",
      pathMatch: "full",
      component: GeneralComponent
    },
    {
      path: "about",
      component: AboutComponent
    },
    {
      path: "books",
      component: BookListComponent
    },
    {
      path: "awards",
      component: AwardsComponent
    },
    {
      path: "**",
      redirectTo: ""
    }
];