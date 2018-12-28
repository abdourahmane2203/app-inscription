import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessage : String;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout( () => {
          this.showSuccessMessage = false;
          form.resetForm();
        }, 4000);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessage = err.error.json('<br/>');
        }
        else {
          this.serverErrorMessage = 'Erreur au niveau du serveur';
        }
      }
    );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      nom: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessage = '';
  }
}
