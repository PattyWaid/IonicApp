import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { PostserviceService } from 'src/app/postservice.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.page.html',
  styleUrls: ['./post-form.page.scss'],
})
export class PostFormPage implements OnInit {

  blogForm: FormGroup;

  editorStyle = {
    height: '65%'
  };

  category = [
    'dummy',
    'demey'
  ];

  constructor(private modalCtrl: ModalController, 
              private postService: PostserviceService,
              private toastCtrl: ToastController) { }

  ngOnInit() {

    this.blogForm = new FormGroup({
    //  recId: new FormControl(),
      name: new FormControl('', Validators.required),
      imagePath: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl(this.category,Validators.required),
      user: new FormControl('Demo'),
     // comments: new FormArray([]),
    //  comments: new FormControl('')
    });

  }

  onSubmit() {
    this.postService.createPost(this.blogForm.value);
    this.presentToast();
    this.modalCtrl.dismiss();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Post has been Successfully created.',
      duration: 2000,
      buttons: [
        {
          icon: "checkmark-circle-outline"
        }
        
      ]
    });
    toast.present();
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

}