import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ThemeService } from 'src/app/services/theme.service'; // Update the path accordingly

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})
export class CustomHeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private themeService: ThemeService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  shouldShowBackButton(): boolean {
    const currentRoute = this.router.url;
    return !['/movies', '/tv-shows'].includes(currentRoute);
  }

  goBack() {
    this.navCtrl.back();
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
