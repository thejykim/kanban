import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-task-dialog',
  template: `
    <h1 mat-dialog-title>Task</h1>
    <div mat-dialog-content class="content">
      <mat-form-field>
        <textarea
          placeholder="Task description"
          matInput
          cdkTextareaAutosize
          [(ngModel)]="data.task.description"
        ></textarea>
      </mat-form-field>
      <br>
      <mat-button-toggle-group
        #group="matButtonToggleGroup"
        [(ngModel)]="data.task.label"
      >
        <mat-button-toggle *ngFor="let color of labelOptions" [value]="color">
          <mat-icon [ngClass]="color">{{
            'lens'
          }}</mat-icon>
        </mat-button-toggle>
      </mat-button-toggle-group>
      <br>
      <br>
      <mat-checkbox [(ngModel)]="data.task.isDone">Completed?</mat-checkbox>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="data" cdkFocusInitial>
        {{ data.isNew ? 'Add Task' : 'Update Task' }}
      </button>

      <app-delete-button (delete)="handleTaskDelete()" *ngIf="!data.isNew"></app-delete-button>
    </div>
  `,
  styleUrls: ['./dialog.scss'],
})
export class TaskDialogComponent {
  labelOptions = ['purple', 'blue', 'green', 'yellow', 'red'];

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    private ps: BoardService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  handleTaskDelete() {
    this.ps.removeTask(this.data.boardId, this.data.task);
    this.dialogRef.close();
  }
}
