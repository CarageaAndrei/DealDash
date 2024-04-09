import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})

export class LoginComponent {
  title = 'frontend';
  signUpUsers: any[] = [];
  signUpObj: any = { 
    email: '', 
    username: '', 
    password: '' };
  loginObject: any = { 
    email: '', 
    username: '', 
    password: '' };
  passwordErrorMessages: string[] = [];
  usersObject: any;
  signUpU: any;

  
  
  onSignUp() {  
    this.signUpU
  }

  changeToLogin() {
    if(document.getElementById('signUp')?.classList.contains('hidden')) {
      document.getElementById('signUp')?.classList.remove('hidden');
      document.getElementById('loginButton')?.classList.add('hidden');
      document.getElementById('changeToLogin')?.classList.remove('hidden');
      document.getElementById('changeToSignup')?.classList.add('hidden');
      document.getElementById('usernameLabel')?.classList.remove('hidden');
      document.getElementById('usernameInput')?.classList.remove('hidden');
    }
    else {
          document.getElementById('signUp')?.classList.add('hidden');
          document.getElementById('loginButton')?.classList.remove('hidden');
          document.getElementById('changeToLogin')?.classList.add('hidden');
          document.getElementById('changeToSignup')?.classList.remove('hidden');
          document.getElementById('usernameLabel')?.classList.add('hidden');
          document.getElementById('usernameInput')?.classList.add('hidden');
    }

  }

  onLogin() {
    
  }

  saveData() {
    if (this.passwordMeetsRequirements()) {
      // Proceed with saving data
      this.usersObject.push({ email: this.loginObject.email, username: this.loginObject.username, password: this.loginObject.password });
      localStorage.setItem('userData', JSON.stringify(this.usersObject));
      // Reset form
      this.loginObject = { email: '', username: '', password: '' };
      this.passwordErrorMessages = [];
    } else {
      // Display error messages
      this.passwordErrorMessages = [];
      if (!this.loginObject.password) {
        this.passwordErrorMessages.push('Password is required.');
      }
      if (this.loginObject.password && this.loginObject.password.length < 8) {
        this.passwordErrorMessages.push('Password must be at least 8 characters long.');
      }
      if (this.loginObject.password && this.loginObject.password.length > 32) {
        this.passwordErrorMessages.push('Password cannot be more than 32 characters long.');
      }
      if (!/[a-z]/.test(this.loginObject.password)) {
        this.passwordErrorMessages.push('Password must contain at least one lowercase letter.');
      }
      if (!/[A-Z]/.test(this.loginObject.password)) {
        this.passwordErrorMessages.push('Password must contain at least one uppercase letter.');
      }
      if (!/\d/.test(this.loginObject.password)) {
        this.passwordErrorMessages.push('Password must contain at least one number.');
      }
      if (!/[$@$!%*?&]/.test(this.loginObject.password)) {
        this.passwordErrorMessages.push('Password must contain at least one special character ($, @, !, %, *, ?, &).');
      }
    }
  }

  passwordMeetsRequirements(): boolean {
    const password = this.loginObject.password;
    return password && password.length >= 8 && password.length <= 32 &&
      /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password) && /[$@$!%*?&]/.test(password);
  }
}


