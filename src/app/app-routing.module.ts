import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { RecetasComponent } from './paginas/recetas/recetas.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { InicioComponent } from './paginas/inicio/inicio.component';

const routes: Routes = [
  {path: 'paginas/nosotros', component: NosotrosComponent},
  {path: 'paginas/recetas', component: RecetasComponent},
  {path: 'paginas/formulario', component: FormularioComponent},
  {path: 'paginas/inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
