import { Component ,Input, OnInit,ViewEncapsulation} from '@angular/core';
import { blog } from '../../models/blog';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit{
  constructor(private route:ActivatedRoute,private blogserv:BlogService){
  }
  html!:string;
  blog!:blog;
  ngOnInit(): void {
   var id:number;
    this.route.params.subscribe(params=>{
      id=params['id']
      this.blogserv.getblog(id).subscribe(x=>{
       this.blog=x;
       this.html=x.bloghtml
       console.log(this.html)
      })
    })
  }
}
