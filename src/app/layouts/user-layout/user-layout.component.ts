import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss'
})
export class UserLayoutComponent {

}
