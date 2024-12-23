import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
srting:number=23;
 @Input() valuefromblog: string=""
}
