import { Component ,Input, OnInit,ViewEncapsulation} from '@angular/core';
import { blog } from '../../models/blog';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit{
  constructor(private titleService:Title,private route:ActivatedRoute,private blogserv:BlogService){
  }

  blog!:blog;
  ngOnInit(): void {
    window.scroll(0,0);
   var id:number;
    this.route.params.subscribe(params=>{
      id=params['id']
      this.blogserv.getblog(id).subscribe(x=>{
       this.blog=x;
       this.titleService.setTitle(this.blog.blogname)
      })
    })
  }
}
