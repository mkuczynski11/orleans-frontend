import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
    export class ProfileComponent implements OnInit {
    public userProfile: KeycloakProfile | null = null;

    constructor(private readonly keycloak: KeycloakService) {}

    public async ngOnInit() {
        const isLoggedIn = await this.keycloak.isLoggedIn();

        if (isLoggedIn) {
            this.userProfile = await this.keycloak.loadUserProfile();
        }
    }
}