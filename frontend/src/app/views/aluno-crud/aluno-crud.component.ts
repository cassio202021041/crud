
import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-aluno-crud',
  templateUrl: '../aluno-crud/aluno-crud.component.html',
  styleUrls: ['../aluno-crud/aluno-crud.component.css']
})
export class AlunoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Lista de Alunos',
      icon: 'group',
      routeUrl: '/alunos'
    }
  }

  ngOnInit(): void {
  }

  navigateToAlunoCreate(): void {
    this.router.navigate(['/alunos/create'])
  }

}