import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Aluno } from './aluno/aluno-create/aluno.model';
import { getDatabase } from "firebase/database";


@Injectable({
  providedIn: "root",
})
export class AlunoService {
  

  private apiUrl = "http://localhost:3001/alunos";

  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  create(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.apiUrl, aluno).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.apiUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: any): Observable<Aluno> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Aluno>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(aluno: Aluno): Observable<Aluno> {
    const url = `${this.apiUrl}/${aluno.id}`;
    return this.http.put<Aluno>(url, aluno).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: any): Observable<Aluno> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Aluno>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
 
}
export { Aluno };

