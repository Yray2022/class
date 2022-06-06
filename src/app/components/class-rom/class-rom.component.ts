import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interface/IPost';
import { ClassService } from 'src/app/services/classs.service';

@Component({
  selector: 'app-class-rom',
  templateUrl: './class-rom.component.html',
  styleUrls: ['./class-rom.component.css']
})
export class ClassRomComponent implements OnInit {

  public posts: IPost[] = []
  public errorMessage: string | null = null
  
  constructor(private classServer: ClassService) { }

  ngOnInit(): void {
    this.deletePosts()
  }

  public deletePosts() {
    this.classServer.allPost().subscribe((data) => {
      this.posts = data
    }, (error) => {
      this.errorMessage = error
    })
  }

  clickDeleteContact(contactId: string | undefined) {
    if (contactId) {
      this.classServer.deletePost(contactId).subscribe((data) => {
        this.deletePosts()
      })
    }
  }

}
