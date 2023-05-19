import { Aluno } from './aluno.model';
import { Router } from '@angular/router';
import { AlunoService } from '../../aluno.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent implements OnInit {

  aluno: Aluno = {
    name: '',
    curso: 'java'
   
  }
  constructor(private alunoService: AlunoService,
    private router: Router) { }

ngOnInit(): void {
  }
   
        
  createAluno(): void {
    this.alunoService.create(this.aluno).subscribe(() => {
      this.alunoService.showMessage('Aluno cadastrado!')
      this.router.navigate(['/alunos'])
    })  

    }
    cancel(): void {
      this.router.navigate(['/alunos'])
    }
 
}

