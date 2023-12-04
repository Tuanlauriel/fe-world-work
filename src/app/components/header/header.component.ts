import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { User } from '../../dto/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  jwtService: JwtService = inject(JwtService);
  userService: UserService = inject(UserService);
  router: Router = inject(Router);

  isLogged: boolean = false;
  user?: User;

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkLoginStatus();
      }
    });
    
  }

  private checkLoginStatus() {
    this.isLogged = this.jwtService.isLogged();
    if (this.isLogged) {
      const email = this.jwtService.getEmail();
      if (email) {
        this.userService.getUserByEmail(email).subscribe(data => this.user = data);
      }
    }
    console.log(this.user?.role);
  }

  logout(): void {
    this.jwtService.logout();
    this.router.navigate(['/home']);
  }
}
