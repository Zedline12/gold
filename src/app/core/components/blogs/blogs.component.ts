import { Component } from '@angular/core';
import { blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  constructor(private blogserv:BlogService){
     
  }
 ngOnInit(): void {
  
 }
}
