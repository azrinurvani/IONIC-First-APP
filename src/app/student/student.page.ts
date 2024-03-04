import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {
  
  student: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() { //ketika halaman pertama kali dijalankan

  }

  ionViewWillEnter(){ //akan dipanggil setiap transisi page
    this.student = this.studentService.getAllStudents();
  }

}
