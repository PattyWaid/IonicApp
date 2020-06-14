import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { PostserviceService } from 'src/app/postservice.service';
import { Post } from 'src/app/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.page.html',
  styleUrls: ['./post-form.page.scss'],
})
export class PostFormPage implements OnInit {

  blogForm: FormGroup;
  @Input() selectedPost: Post;
  editMode: boolean = false;

  editorStyle = {
    height: '65%'
  };

  categories = [
    'Automobiles',
    'Technology',
    'Food & Recipes',
    'Travel',
    'Animations'
  ];

  constructor(private modalCtrl: ModalController, 
              private postService: PostserviceService,
              private toastCtrl: ToastController) { }

  ngOnInit() {

    if(this.selectedPost){
      this.editMode = true;
      let name = this.selectedPost.name;
      let imagePath = this.selectedPost.imagePath;
      let description = this.selectedPost.description;
      let category = this.selectedPost.category;
      let user = this.selectedPost.user;



      this.blogForm = new FormGroup({

          'name': new FormControl(name, Validators.required),
          'imagePath': new FormControl(imagePath, Validators.required),
          'description': new FormControl(description, Validators.required),
          'category': new FormControl(category,Validators.required),
          'user': new FormControl(user),

        });

    } else {
      this.blogForm = new FormGroup({
        //  recId: new FormControl(),
          name: new FormControl('', Validators.required),
          imagePath: new FormControl('', Validators.required),
          description: new FormControl('', Validators.required),
          category: new FormControl('',Validators.required),
          user: new FormControl('Demo'),
         // comments: new FormArray([]),
        //  comments: new FormControl('')
        });
    }
    

    

  }

  onSubmit() {
    if(!this.editMode){
      console.log("Create");
      this.postService.createPost(this.blogForm.value);      
    } else {
      console.log("Update");
      this.postService.updatePost(this.selectedPost.recId,this.blogForm.value)
    }
    this.presentToast();
    this.modalCtrl.dismiss();

  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: this.editMode === true ? 'Post has been Successfully Updated.' : 'Post has been Successfully Created.',
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