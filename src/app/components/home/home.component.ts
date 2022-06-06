import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interface/IPost';
import { ClassService } from 'src/app/services/classs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts: IPost[] = []
  public errorMessage: string | null = null
  
  constructor(private classServer: ClassService) { }

  ngOnInit(): void {
    this.classServer.allPost().subscribe((data) => {
      this.posts = data
    }, (error) => {
      this.errorMessage = error
    })
  }

}
