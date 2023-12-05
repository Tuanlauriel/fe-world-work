import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employers-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, RouterLink],
  templateUrl: './employers-layout.component.html',
  styleUrl: './employers-layout.component.scss'
})
export class EmployersLayoutComponent {

}
