import { AppRoutingModule } from './app-routing.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule }from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { AlunoCrudComponent } from './views/aluno-crud/aluno-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { AlunoCreateComponent } from './components/aluno/aluno-create/aluno-create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule }from '@angular/material/form-field';
import { MatInputModule  }from '@angular/material/input';
import { AlunoReadComponent } from './components/aluno/aluno-read/aluno-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import lacalePt from '@angular/common/locales/pt'; //local e data portugues
import { registerLocaleData } from '@angular/common';
import { AlunoUpdateComponent } from './components/aluno/aluno-update/aluno-update.component';
import { AlunoDeleteComponent } from './components/aluno/aluno-delete/aluno-delete.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { loginComponent } from './components/admin/login/login/login.component'; //local e data e separador em portugues
import { RouterModule } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';



export const firebase = {
  apiKey: "AIzaSyAC7LozKjhgtSrnAcNlmCVFFFiXesq4m-4",
  authDomain: "projetointegradocassio.firebaseapp.com",
  databaseURL: "https://projetointegradocassio-default-rtdb.firebaseio.com",
  projectId: "projetointegradocassio",
  storageBucket: "projetointegradocassio.appspot.com",
  messagingSenderId: "830035014062",
  appId: "1:830035014062:web:d1998f407fbd75ea84183f"
};


registerLocaleData(lacalePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AlunoCrudComponent,
    RedDirective,
    ForDirective,
    AlunoCreateComponent,
    AlunoReadComponent,
    AlunoUpdateComponent,
    AlunoDeleteComponent,
    AdminComponent,
    loginComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule ,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    BrowserModule,
    provideFirebaseApp(() => initializeApp({})),
    provideFirestore(() => getFirestore())
  ],
  providers: [{
    provide:LOCALE_ID, //local e data em portugues 
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
