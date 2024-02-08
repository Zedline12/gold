import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { blog } from '../models/blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  blogs:blog[]=[]
   constructor(private blogserv:BlogService){
      
   }
  ngOnInit(): void {
    this.blogserv.getblogs().subscribe(x=>{
      console.log(x)
      this.blogs=x
    })
  }
}
