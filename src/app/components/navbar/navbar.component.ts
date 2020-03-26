import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user;
  constructor(private _userService: UserService) {
    this.user = this._userService.userLogged();
  }

  ngOnInit() {
    
  }

  logout() {
    localStorage.removeItem('dataUser');
    alert('Sesión cerrada');
  }

}
