import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user: User;
  title: string;
  constructor(private _userService: UserService) { 
    this.title = 'Registrate a nuestro sitio';
    this.user = new User();
  }

  ngOnInit() {
  }

  signUp() {
    this._userService.signUp(this.user).subscribe(
      res => {
        console.log(res);
        if(res.statusCode != 200) { 
          alert('Error al regitrar el usuario');
        } else {
          alert('Usuario registrado correctamente');
        }
      }
    );
  }

}
