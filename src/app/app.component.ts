import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './services/servieFlowbite/flowbite.service';
import { DarkModeService } from './services/servieModes/modes.service';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-app';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private flowbiteService: FlowbiteService,
    private darkModeService: DarkModeService
  ) { }

  ngOnInit(): void {
    this.darkModeService.initializeDarkMode();

    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();

      this.flowbiteService.loadFlowbite((flowbite) => {
        console.log('Flowbite loaded', flowbite);
      });
    }
  }
}
