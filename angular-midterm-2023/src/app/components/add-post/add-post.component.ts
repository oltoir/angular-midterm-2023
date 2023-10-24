import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from "../../services/post.service";
import {Post} from "../post-details/post.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const newPost: any = {
        title: this.postForm.value.title,
        content: this.postForm.value.content,
      };

      this.postService.addPost(newPost).subscribe((result) => {
        console.log('New post added:', result);

        // navigate to the post-details page
        this.router.navigate(['/posts', result.id]);

        this.postForm.reset();
      });
    }
  }
}
