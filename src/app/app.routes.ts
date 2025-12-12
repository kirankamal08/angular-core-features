import { Routes } from '@angular/router';
import { RegisterComponent } from './core/features/auth/register/register.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent : () => import('./home-component/home-component.component').then(c => c.HomeComponentComponent)
    },
    {
        path:'register',
        loadComponent : () => import('./core/features/auth/register/register.component').then(c => c.RegisterComponent)
    },
    {
        path:'parent',
        loadComponent:() => import('./lifecycle-hooks/parent/parent.component').then(c => c.ParentComponent)
    },
    {
        path:'feedback',
        loadComponent:() => import('./feedback/feedback.component').then(c => c.FeedbackComponent)
    },
    {
        path:'task-board',
        loadComponent: () => import('./core/board-component/board-component.component').then(c => c.BoardComponentComponent)
    },
    {
        path:'rxjs-operators',
        loadComponent: () => import('./core/rxjs-features/rxjs-operators/rxjs-operators.component').then(c => c.RxjsOperatorsComponent)
    }
];
