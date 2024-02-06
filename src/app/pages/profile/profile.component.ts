import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
    export class ProfileComponent implements OnInit {
    content: string = ''
    public userProfile: KeycloakProfile | null = null;
    public token: string | null = null;

    constructor(private readonly keycloak: KeycloakService) {}

    public async ngOnInit() {
        const isLoggedIn = await this.keycloak.isLoggedIn();

        if (isLoggedIn) {
            this.userProfile = await this.keycloak.loadUserProfile();
            this.token = await this.keycloak.getToken()
        }
    }
}