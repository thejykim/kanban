import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent {

  canDelete: boolean;

  @Output() delete = new EventEmitter<boolean>();

  confirmDelete() {
    this.canDelete = true;
  }

  cancelDelete() {
    this.canDelete = false;
  }

  emitDelete() {
    this.delete.emit(true);
    this.canDelete = false;
  }

}
