import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { UserService } from '../_services/user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
    export class ProfileComponent implements OnInit {
    content: string = ''
    public userProfile: KeycloakProfile | null = null;

    constructor(private readonly keycloak: KeycloakService, private userService: UserService) {}

    public async ngOnInit() {
        const isLoggedIn = await this.keycloak.isLoggedIn();

        if (isLoggedIn) {
            this.userProfile = await this.keycloak.loadUserProfile();
        }
        this.userService.getWeatherForecast().subscribe({
            next: (data) => {
                this.content = data
            },
            error: (err) => {
                console.log(err)
                console.log('error')
            }
        })
    }
}