import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private usrv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onsubmit(form: NgForm) {
    try {
      await this.usrv.register(form.value).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/'])
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  async onsubmitClub(form: NgForm) {
    try {
      await this.usrv.registerClub(form.value).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/'])
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

}
