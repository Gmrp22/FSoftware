import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import { User } from '../../interfaces/user';
import { FormBuilder, FormGroup } from '@angular/forms';
let products: User[] = [];
@Component({
  selector: 'app-users',
  styleUrls: ['./users.component.css'],
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  p: User[] = [];
  UserForm: FormGroup;
  constructor(
    private UserService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.getAllUsers();
    this.UserForm = this.formBuilder.group({
      nombre: '',
      usuario: '',
      password: '',
    });
  }

  delete(id: number) {
    this.UserService.deleteUser(id).subscribe((data) => {
      this.getAllUsers();
    });
  }

  getAllUsers() {
    this.UserService.getAllUsers().subscribe((response: any) => {
      this.data = response;
    });
  }

  createUser() {
    const user = {
      id: 0,
      nombre: this.UserForm.get('nombre')?.value,
      usuario: this.UserForm.get('usuario')?.value,
      password: this.UserForm.get('password')?.value,
    };
    console.log(user);
    this.UserService.createUser(user).subscribe((newuser) => {});
    this.UserForm.reset();
    this.ngOnInit();
  }
  resetTable() {
    this.getAllUsers();
  }
  ngOnInit(): void {}
  displayedColumns: string[] = ['nombre', 'usuario', 'Acciones'];
  columnsToDisplayP: string[] = this.displayedColumns.slice();
  data: User[] = products;
}
