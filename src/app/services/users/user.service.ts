import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../interfaces/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private api = 'http://127.0.0.1:8000/usuario/';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    const path = `${this.api}`;
    return this.http.get<User[]>(path);
  }
  createUser(usuario: User) {
    const path = `${this.api}`;
    return this.http.post(path, usuario);
  }

  // getTask(id: string) {
  //   const path = `${this.api}/todos/${id}`;
  //   return this.http.get<Task>(path);
  // }

  // createTask(task: Task) {
  //   const path = `${this.api}/todos`;
  //   return this.http.post(path, task);
  // }

  // updateTask(task: Task) {
  //   const path = `${this.api}/todos/${task.id}`;
  //   return this.http.put<Task>(path, task);
  // }

  // deleteTask(id: string) {
  //   const path = `${this.api}/todos/${id}`;
  //   return this.http.delete(path);
  // }
}
