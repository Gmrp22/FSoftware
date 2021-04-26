import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import { User } from '../../interfaces/user';

let products: User[] = [];
@Component({
    selector: 'app-users',
    styleUrls: ['./users.component.css'],
    templateUrl: './users.component.html',
  })
export class UsersComponent implements OnInit {
  p: User[] = [];
  constructor(private UserService: UserService) {
    this.getAllUsers();
  }

  getAllUsers() {
    this.UserService.getAllUsers().subscribe((response: any) => {
      this.data = response;
    });
  }
  ngOnInit(): void {}
  displayedColumns: string[] = [
    'nombre',
    'usuario',
    'Acciones',
  ];
  columnsToDisplayP: string[] = this.displayedColumns.slice();
  data: User[] = products;
}
