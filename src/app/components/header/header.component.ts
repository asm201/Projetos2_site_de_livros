import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  url: string
  constructor(private router: Router) {
    this.url = ''
   }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      console.log(window.location.pathname) 
      this.url = window.location.pathname
  })
  }
  

  telaCadastro(){
    this.router.navigate(['cadastro'])
  }

}
