import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, map, catchError, EMPTY } from "rxjs";
import { Admin } from "./admin/admin/admin/admin.model";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  baseUrl = "http://localhost:3001/alunos";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  create(aluno: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.baseUrl, aluno).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: any): Observable<Admin> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Admin>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(aluno: Admin): Observable<Admin> {
    const url = `${this.baseUrl}/${aluno.id}`;
    return this.http.put<Admin>(url, aluno).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: any): Observable<Admin> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Admin>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
export { Admin };
