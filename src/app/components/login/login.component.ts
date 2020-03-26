import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo = 'Inicio de sesión';
  public user: User;

  constructor(private _userService: UserService) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  login() {
    this._userService.login(this.user).subscribe(
      (res: any )=> {
        console.log(res);
        switch(res.statusCode){
          case 400:
            alert('El usuario no esta registrado');
            break;
          case 401:
            alert('Los datos no son correctos');
            break;
          case 200:
            alert('Bienvenido');
            localStorage.setItem('dataUser', JSON.stringify(res.dataUser));
            break;
          default:
            alert('Error de conexión');
        }
      }
    )
  }

}
