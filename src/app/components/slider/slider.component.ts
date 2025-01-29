import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  async ngOnInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const { initFlowbite } = await import('flowbite');
      initFlowbite();
    }
  }
}
