import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { User } from '../models/user';




@Injectable({
  providedIn: 'root'
})
export class UserService {


  private url = 'http://localhost:3000/api/';

  constructor(private _http: HttpClient) { }


  /**
   * Función para registrar un nuevo usuario
   * @param user Datos del usuario
   */
  signUp(user): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders()
                  .set('Content-Type', 'application/json');
    return this._http.post<User>(this.url + '/createUser', params, {headers}).pipe(res => res);
  }

  /**
   * Función creada para conectarme con la API e iniciar sesión
   * @param userParams Los datos del formulario de login
   */
  login(userParams) {
    const params = JSON.stringify(userParams);
    let headers = new HttpHeaders()
                      .set('Content-Type', 'application/json');
    return this._http.post(this.url + 'loginUser', params, {headers}).pipe(res => res);
  }

  updateUser(userParams) {
    const params = JSON.stringify(userParams);
    const headers = new HttpHeaders()
                    .set('Content-Type','application/json');
    return this._http.put(`${this.url}/updateUser/${userParams._id}`, params, {headers}).pipe(res => res);
  }

  userLogged(){
    if(localStorage.getItem('dataUser')){
      return true;
    } else {
      return false;
    }
  }


}
