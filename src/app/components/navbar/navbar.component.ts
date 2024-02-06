import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = []
  isUserLoggedIn = false;

  constructor(private readonly keycloak: KeycloakService, private readonly router: Router) {
  }


  public async ngOnInit() {
    this.isUserLoggedIn = await this.keycloak.isLoggedIn();

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigateByUrl('/home')
        }
      },
      {
        label: 'Profile',
        icon: 'pi pi-user',
        visible: this.isUserLoggedIn,
        command: () => {
          this.router.navigateByUrl('/profile')
        }
      },
    ]
  }

  public async logout() {
    await this.keycloak.logout()
  }

  public login() {
    this.keycloak.login()
  }
}
