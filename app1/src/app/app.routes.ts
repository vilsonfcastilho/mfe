import { Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: '**', component: EmptyRouteComponent },
];
