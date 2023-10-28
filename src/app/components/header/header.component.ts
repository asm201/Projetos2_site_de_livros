import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  url: string
  constructor(private router: Router, private auth: AuthService) {
    this.url = ''
   }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      this.url = window.location.pathname
  })
  }
  
  public acessarPerfil(): any{
    this.router.navigate(['/usuario'],{queryParamsHandling:'preserve'})
  }

  public irListaLivros(): any{
    this.router.navigate(['/lista_livro'],{queryParamsHandling:'preserve'})
  }

  signOut(){
    this.auth.signOut().subscribe({
      next: () => this.router.navigate(['home'])
    })
  }

}
