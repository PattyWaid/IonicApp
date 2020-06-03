import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.page.html',
  styleUrls: ['./post-form.page.scss'],
})
export class PostFormPage implements OnInit {

  blogForm: FormGroup;

  editorStyle = {
    height: '60%'
  };

  category = [
    'dummy',
    'demey'
  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

    this.blogForm = new FormGroup({
      recId: new FormControl(),
      name: new FormControl('', Validators.required),
      imagePath: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl(this.category,Validators.required),
      user: new FormControl(''),
      ingredients: new FormArray([]),
      comments: new FormControl('')
    });

  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

}