
import { AlunoService } from '../../aluno.service'
import { Aluno } from '../aluno-create/aluno.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-read',
  templateUrl: '../aluno-read/aluno-read.component.html',
  styleUrls: ['..//aluno-read/aluno-read.component.css']
})
export class AlunoReadComponent implements OnInit {

  aluno!: Aluno[];
  displayedColumns = ['id', 'name', 'curso', 'action']
  

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.alunoService.read().subscribe(alunos => {
      this.aluno = alunos
    })
  }

}