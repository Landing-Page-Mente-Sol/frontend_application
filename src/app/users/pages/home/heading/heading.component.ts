import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  keyword: string = '';

  constructor(private route: Router){}

  ngOnInit(): void {
  }

  search(keyword: string) {
    if(this.currentUrlHas('course')){
      let coursePath = '';
      if(this.currentUrlHas('search')){
        this.route.url.split('/').forEach((item, i)=>{
          if(i < 3)
            coursePath += item + '/';
        })
      }
      else coursePath = this.route.url + '/';
      coursePath += 'search/' + keyword;
      this.route.navigateByUrl(coursePath).then();

      return;
    }
    this.route.navigateByUrl('/search/' + keyword).then();
  }

  currentUrlHas(keyword: string){
    return this.route.url.search(keyword) !== -1;
  }
}
