import { Component,OnInit } from '@angular/core';
import { UsersService } from './consume/consume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users;
  userInfo;

  user = {_id: null,
          name: null,
          surname: null,
          poionts: null
  }

  constructor(private _consumeServie: UsersService) {
  }

  ngOnInit() {
   this.getUsers();
  }

  getUsers() {
     this._consumeServie.getUsers().subscribe(
      data => {
        this.users = data;
        console.log(data);
      }
    );
  }

  getUser(id) {
    this._consumeServie.getUserById(id).subscribe(
      data => {
        this.userInfo = data;
        console.log(this.userInfo, 'userInfo');
      }
    );
  }

  editUser(id) {
    this.user._id = id;
    this._consumeServie.saveUser(this.user).subscribe(
      data => {
        this.getUsers();
      }
    );
  }

  deleteUser(id){
    this._consumeServie.deleteUser(id).subscribe(
      data => {
        this.getUsers();
      }
    )
  }

  log() {console.log(this.user)}

  save() {
    this._consumeServie.saveUser(this.user).subscribe(
      data => {
        console.log('success');
        this.getUsers();
      }
    );
  }
}
