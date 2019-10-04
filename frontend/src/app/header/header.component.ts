import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthComponent } from '../auth/auth.component';
import { AuthenticationService } from '../auth/authentication.service';
import { User } from '../model/user.model';
import { VersionService } from 'src/environments/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bsModalRef: BsModalRef;
  loggedUser: User;
  version: string;

  constructor(
    private modalService: BsModalService,
    private authenticationService: AuthenticationService,
    private versionService: VersionService
  ) {}

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(user => {
      this.loggedUser = user;
    });
    this.version = this.versionService.VERSION;
  }

  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(AuthComponent);
  }

  onLogout() {
    this.authenticationService.logout();
  }
}
