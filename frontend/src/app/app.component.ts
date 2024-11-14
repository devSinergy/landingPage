import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { TitleComponent } from "./components/title/title.component";
import { VideoComponent } from "./components/video/video.component";
import { StrategyWebsitesComponent } from './components/strategy-websites/strategy-websites.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, TitleComponent, VideoComponent, StrategyWebsitesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DEV SINERGY';
  paragraph = 'We innovate to connect ideas and brands into digital experiences that inspire and transform.'
}
