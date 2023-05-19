import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Aluno } from '../aluno-create/aluno.model';
import { AlunoService } from '../../aluno.service';
@Component({
  selector: "app-aluno-delete",
  templateUrl: "../aluno-delete/aluno-delete.component.html",
  styleUrls: ["../aluno-delete/aluno-delete.component.css"],
})
export class AlunoDeleteComponent implements OnInit {
  aluno!: Aluno;

  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.alunoService.readById(id).subscribe((alunos) => {
      this.aluno = alunos;
    });
  }

  deleteAluno(): void {
    this.alunoService.delete(this.aluno.id).subscribe(() => {
      this.alunoService.showMessage("Aluno excluido com sucesso!");
      this.router.navigate(["/alunos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/alunos"]);
  }
}