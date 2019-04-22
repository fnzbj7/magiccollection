import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthComponent } from '../auth/auth.component';
import { AuthenticationService } from '../auth/authentication.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  bsModalRef: BsModalRef;
  loggedUser: User;

  constructor(private modalService: BsModalService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe( user => {
      this.loggedUser = user;
    });
  }

  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(AuthComponent);
  }

  onLogout() {
    this.authenticationService.logout();
  }

}
