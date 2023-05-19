import { AlunoCreateComponent } from './components/aluno/aluno-create/aluno-create.component';
import { AlunoCrudComponent } from './views/aluno-crud/aluno-crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoUpdateComponent } from './components/aluno/aluno-update/aluno-update.component';
import { AlunoDeleteComponent } from './components/aluno/aluno-delete/aluno-delete.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { loginComponent } from './components/admin/login/login/login.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "alunos",
    component: AlunoCrudComponent
  },
  {
    path: "alunos/create",
    component: AlunoCreateComponent
  },
  {
    path: "alunos/update/:id",
    component: AlunoUpdateComponent
  },
  {
    path: "alunos/delete/:id",
    component: AlunoDeleteComponent
  },
  {
    path:"admin",
    component: loginComponent
  },
  {
    path:"pass",
    component: AdminComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
