import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'gsv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuStatus = true;
  @Output() sideNavToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  SideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
}
