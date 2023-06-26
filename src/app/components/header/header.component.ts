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
  
  public acessarPerfil(): any{
    this.router.navigate(['/usuario'],{queryParamsHandling:'preserve'})
  }

  public irListaLivros(): any{
    this.router.navigate(['/lista_livro'],{queryParamsHandling:'preserve'})
  }

}
