import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isHidden: boolean = false;

  hidden(): void {
    this.isHidden = true;
  }

  noHidden(): void {
    this.isHidden = false;
  }
}

