import { NgModule } from '@angular/core';
import { Routes, RouterModule, RoutesRecognized } from '@angular/router';
import {CommonModule} from "@angular/common";
import {ListComponent} from "./list/list.component";
import {NewItemComponent} from "./new-item/new-item.component";

var routes: Routes = [
        {path:"", pathMatch:"full", redirectTo:"/items"},
        {path:"items",component: ListComponent},
        {path:"newItem", component: NewItemComponent}
];

//const routes: Routes = [];

@NgModule({
  exports: [RouterModule],
  imports: [CommonModule,RouterModule.forRoot(routes)], declarations: []
})
export class AppRoutingModule { }
