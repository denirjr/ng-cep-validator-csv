import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  public isDisabled = false;
  @Input()
  public title = '';
  @Input()
  public type = 'text';

  @Output()
  public onAction = new EventEmitter();

  public action(): void {
    this.onAction.emit();
  }
}
