import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from 'src/app/interface/IPost';
import { IText } from 'src/app/interface/IText';
import { ClassService } from 'src/app/services/classs.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public post: IPost = {} as IPost
  public Post: IText[] = []
  public errorMessage: string | null = null

  constructor(private postServer: ClassService, private router: Router) {}

  ngOnInit(): void {
    this.postServer.allPost().subscribe((data) => {
      this.Post = data
    }, (error) => {
      this.errorMessage = error
    })
  }

  public createPosts() {
    this.postServer.createPost(this.post).subscribe((data) => {
      this.router.navigate(['/class']).then()
    }, (error) => {
      this.errorMessage = error
      this.router.navigate(['/home/add']).then()
    })
  }

}
