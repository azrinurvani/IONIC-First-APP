import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {

  student: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() { //ketika halaman pertama kali dijalankan
    console.log('student.page.ts ngOnInit working...')
    console.log(this.student)
  }

  ionViewWillEnter(){ //akan dipanggil setiap transisi page
    this.student = this.studentService.getAllStudents();
    console.log('student.page.ts ionViewWillEnter working...')
    console.log(this.student)
  }

}
