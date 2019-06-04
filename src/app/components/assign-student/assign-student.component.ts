import { Component, OnInit } from '@angular/core';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-assign-student',
  templateUrl: './assign-student.component.html',
  styleUrls: ['./assign-student.component.css']
})
export class AssignStudentComponent implements OnInit {
  option:string = "";
  carreers = [];
  constructor(private careerRest: CarreraService) { 
    this.careerRest.getCarreras().subscribe(res=> {
      this.carreers = res.todasLasCarreras;
    })
  }

  ngOnInit() {

  }

}
