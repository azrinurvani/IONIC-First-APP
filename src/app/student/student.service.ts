import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private student: Student[] = [
    {
      nim : '001',
      nama : 'John Doe',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg/800px-John_Doe%2C_born_John_Nommensen_Duchac.jpg',
      prodi : 'Teknik Informatika',
      email : ['john.doe@gmail.com','john.doe1@gmail.com'],
      phone : ['08123456788']
    },
    {
      nim : '002',
      nama : 'John Wick',
      foto : 'https://duet-cdn.vox-cdn.com/thumbor/0x0:6000x3650/828x552/filters:focal(3000x1825:3001x1826):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24685385/john_wick_chapter_4_JW4_Unit_211027_00134_R2_rgb.jpeg',
      prodi : 'Teknik Komputer',
      email : ['john.wick@gmail.com'],
      phone : ['08123456788','081231868361368']
    },
  ]
  constructor() { }

  getAllStudents(){
    return [...this.student];
    //... (titik tiga atau spreads sintaks) berfungsi adalah untuk mengopi nilai yang ada di array lama
    // menjadi array baru dan yang di return adalah array baru
  }

  getStudent(nim:string){
    return this.student.find( mhs =>{
      return mhs.nim === nim
    });
  }

  deleteStudent(nim:string){
    this.student = this.student.filter( mhs => { 
      return mhs.nim !== nim;
    });
  }
}
