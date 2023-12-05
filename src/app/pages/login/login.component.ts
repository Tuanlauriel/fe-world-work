import { CommonModule } from '@angular/common';
import {Component, inject} from '@angular/core';
import { Router } from '@angular/router'
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from '../../services/user.service';
import { UserCreate } from '../../dto/user-create';
import {catchError} from "rxjs";
import { AuthService } from '../../services/auth.service';
import { UserLogin } from '../../dto/user-login';
import { JwtService } from '../../services/jwt.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userService: UserService = inject(UserService);
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  jwtService: JwtService = inject(JwtService);

  isHidden: boolean = false;
  messageError?: string;
  loginError?: string;
  successNoti?: boolean;

  displayAction(): void {
    this.isHidden = !this.isHidden;
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get emailLogin() {
    return this.loginForm.get('email');
  }

  get passwordLogin() {
    return this.loginForm.get('password');
  }

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    role: new FormControl('Role', [Validators.required])
  });

  get firstNameRegister() {
    return this.registerForm.get('firstName');
  }

  get lastNameRegister() {
    return this.registerForm.get('lastName');
  }

  get emailRegister() {
    return this.registerForm.get('email');
  }

  get passwordRegister() {
    return this.registerForm.get('password');
  }

  get roleRegister() {
    return this.registerForm.get('role');
  }

  loginSubmit(): void {
    this.loginError = undefined;
    if (this.loginForm.valid) {
      const userLogin: UserLogin = this.loginForm.value as UserLogin;
      this.authService.login(userLogin).subscribe({
        next: (response) => {
          console.log(response);
          this.jwtService.setToken(response.token);
          this.jwtService.setRefreshToken(response.refreshToken);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.log(error);
          this.loginError = 'Invalid Email or Passoword';
        }
      })
    } else {
      this.loginError = 'Invalid Email or Passoword'
    }
  }

  registerSubmit(): void {
    this.messageError = undefined;
    if (this.registerForm.valid) {
      const userCreate: UserCreate = this.registerForm.value as UserCreate;
      if (userCreate.role === 'Role') {
        userCreate.role = 'USER';
      }
      console.log(userCreate);
      this.userService.createUser(userCreate).subscribe({
        next: (response) => {
          console.log(response);
          this.successNoti = true;
          this.messageError = 'Created account successfully';
        },
        error: (error) => {
          if (error.status === 409) {
            this.messageError = 'User already exists.';
          } else {
            this.messageError = "An error occurred while processing your request.";
          }
        }
      })
    } else {
      this.messageError = 'Invalid information.';
    }
  }

}

