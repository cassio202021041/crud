import { Component, OnInit } from '@angular/core';
import { Aluno, AlunoService } from '../../aluno.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  implements OnInit {

  aluno!: Aluno[];
  displayedColumns = ['id', 'name', 'curso', 'action']
  

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.alunoService.read().subscribe(alunos => {
      this.aluno = alunos
    })
  }

}