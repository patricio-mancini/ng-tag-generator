import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss', '../../media/material-icons.css']
})
export class IconComponent {
  @Input() name: string;
}
