import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  public title: string;
  public user: User;

  constructor(private _userService: UserService) { 
    this.title = 'Actualización de datos';
    this.user = new User();
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('dataUser'));
  }

  updateUser() {
    this._userService.updateUser(this.user).subscribe(
      (res: any) => {
        switch(res.statusCode) {
          case 500:
            alert('Error en el servidor');
            break;
          case 400:
            alert('Error al modificar el usuario');
            break;
          case 200:
            alert('Datos actualizados correctamente');
            break;
          default:
            alert('Algo salio mal');
        }
      }
    )
  }

}
