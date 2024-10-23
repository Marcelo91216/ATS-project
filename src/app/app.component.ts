import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const LOCAL_COMPONENTS = [
  HeaderComponent
]
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LOCAL_COMPONENTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ATS-project';
}
