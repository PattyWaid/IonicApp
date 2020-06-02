import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {

  blogForm: FormGroup;

  

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

    this.blogForm = new FormGroup({
      recId: new FormControl(1),
      name: new FormControl('dummy', Validators.required),
      imagePath: new FormControl('dummy', Validators.required),
      description: new FormControl('dummy', Validators.required),
      category: new FormControl('dummy',Validators.required),
      user: new FormControl('dummy'),
      ingredients: new FormArray([]),
      comments: new FormControl('dummy')
    });

  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

}
