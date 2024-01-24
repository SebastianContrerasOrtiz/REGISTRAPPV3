import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicComponentPage } from './ionic-component/ionic-component.page';




//import { DbService } from './servicio/db.service';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'historial',
    redirectTo: 'historial',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    redirectTo: 'registro',
    pathMatch: 'full'
  },
 
  {
    path: 'contenido',
    redirectTo: 'contenido',
    pathMatch: 'full'
  },

  {
    path: 'contenido',
    redirectTo: 'contenido',
    pathMatch: 'full'
  },

  {
    path: 'ionic-component',
    component: IonicComponentPage,
  },


  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },
 
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule)

  },

  {
    path: 'contenido',
    loadChildren: () => import('./contenido/contenido.module').then( m => m.ContenidoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('./e404/e404.module').then( m => m.E404PageModule)
  },
  {
    path: 'ionic-component',
    loadChildren: () => import('./ionic-component/ionic-component.module').then( m => m.IonicComponentPageModule)
  },


 

 
 
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
