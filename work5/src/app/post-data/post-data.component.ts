import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

  post: BlogPost
  private querySub: any;
  private id;
  private idSub;

  constructor(private data: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
      this.data
        .getPostbyId(params["id"])
        .subscribe(post => (this.post = post));
    });
  }

  ngOnDestroy() {
    if(this.querySub) this.querySub.unsubscribe();
  }

}
