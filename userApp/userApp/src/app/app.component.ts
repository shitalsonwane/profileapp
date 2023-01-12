import { Component, OnInit } from '@angular/core';
import { UserComponent } from './user/user.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'userApp';
  public UserInfo = {
    name : 'Shital',
    domain: 'shitals177@gmail.com',
    location: 'Madhav baug, Pune',
    gender: 'Female',
    phoneNo: '8983498645',
    dob: 'Tue Feb 11 2020 00:00:00 GMT+0530 (India Standard Time)'
  }
  ngOnInit(): void {
  }
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(UserComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.UserInfo = result;
      console.log(this.UserInfo)
    });
  }
  public editProfile(){

  }
}
