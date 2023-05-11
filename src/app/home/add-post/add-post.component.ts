import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';
import { TagsService } from 'src/app/services/tags.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{

  user_id : any
  data :any ; 



    newpost : Post = new Post();
    dropdownList :any = [];
    selectedItems :any = [];
    dropdownSettings: any = {
      labelKey:"name",
      singleSelection: false,
      text: "Select Tags",
      selectAllText: "Select All",
      unSelectAllText: "Unselect All",
      enableFilterSearch: true,
      classes: "myclass custom-class",
      disabled: false
    };
    selectedImage:any= File;

    constructor(private service : TagsService, private postservice : PostService ,private authservice : AuthService , private toastr: ToastrService , private router : Router ) {
      this.data = JSON.parse(this.authservice.getuserid());
      this.user_id = this.data.id
   
    }
    ngOnInit(){

      this.getlistofTags()
      
    }
    

    getlistofTags() {
      this.service.getAllTags().subscribe(
        result => {
          this.dropdownList = result;
        },
        error => {
          console.log(error); 
        }
      );
    }
    

    AddPost(f:any){

      const formData = new FormData();
      formData.append('Image', this.selectedImage)
      const imageName = this.selectedImage.name;
      this.newpost.tagIds = []
      this.newpost.postimageurl = this.selectedImage.name ;
      this.newpost.authorId = this.user_id 
      this.selectedItems.map((tag: any)=> {
        this.newpost.tagIds.push(tag.id)
      });
      //console.log(this.newpost)
      this.service.UploadImage(formData).subscribe(
        () => {
          
          this.postservice.AddPost(this.newpost).subscribe(
            (response)=>{
              this.toastr.success(response, 'Done');
            },
            (error)=>{
              this.toastr.error(error, 'Error');
            }
          )

        },
        (error) => {
          console.error('Error uploading image', error);
        }
      )
    
      console.log(imageName);
    }

    onFileChange(event: any) {
      this.selectedImage = event.target.files[0];
    }
}
