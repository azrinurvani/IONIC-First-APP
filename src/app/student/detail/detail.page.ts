import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { AlertController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  dataURL : string = "";
  student: Student | null = null;
  constructor(
    private activatedRoute : ActivatedRoute,
    private studentsService : StudentService,
    private router: Router,
    private alertController : AlertController,
    private toastController : ToastController,
    private navController : NavController
  ) { 

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      this.dataURL = paramMap.get('nim') ?? "";
      //param nim ini menyesuaikan dengan nama param di student.routing.module dengan path = ':nim'
    });
    this.student = this.studentsService.getStudent(this.dataURL) ?? null;

  }  

  deleteMhs(){
    this.studentsService.deleteStudent(this.dataURL);
    this.router.navigate(['/student']);
    this.presentToast('bottom');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Hapus Mahasiswa',
      message: 'Apakah yakin mau menghapus ? Kalau sudah dihapus, tidak bisa dikembalikan lagi',
      backdropDismiss : false,
      buttons: [
        {
          text : 'Batal',
          role : 'cancel'
        },
        {
          text : 'Hapus',
          handler : () => this.deleteMhs()
        }
      ],
    });

    await alert.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Data mahasiswa telah dihapus',
      duration: 1500,
      position: position,
      color : 'secondary'
    });

    await toast.present();
  }

  goBack(){
    // this.router.navigate([
    //   '/student','tabs','all'
    // ])
    // this.router.navigateByUrl('/student/tabs/all')
    this.navController.navigateBack('student/tabs/all')
    // this.navController.pop //bisa digunakan jika page tersebut sudah pasti tidak ada page sebelumnya yang menuju ke page tersebut
  }
  

}
