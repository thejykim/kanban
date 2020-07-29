import { Component, Input } from '@angular/core';
import { BoardService } from '../board.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Task } from '../board.model';
import { TaskDialogComponent } from '../dialogs/task-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { trigger, transition, useAnimation } from '@angular/animations';
import { jello } from 'ng-animate';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  animations: [
    trigger('jello', [transition('* => *', useAnimation(jello, {
      params: { scale: 10 }
    }))])
  ],
})
export class BoardComponent {
  @Input() board;
  display: Task[];
  editingTitle: boolean;
  boardField: HTMLInputElement;
  oldBoardTitle: string;
  @Input() boardTitle: string;
  jello: any;

  constructor(private boardService: BoardService, public dialog: MatDialog) { }

  taskDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.board.tasks, event.previousIndex, event.currentIndex);
    this.boardService.editTasks(this.board.id, this.board.tasks);
  }

  openDialog(task?: Task, idx?: number): void {
    const newTask = { label: 'purple', isDone: false, completed: 0 };

    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: task
        ? { task: { ...task }, isNew: false, boardId: this.board.id, idx, prevStatus: task.isDone }
        : { task: newTask, isNew: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.isNew) {
          const newTasks = this.board.hasOwnProperty('tasks') ? [ ...this.board.tasks, result.task ] : [ result.task ];

          this.boardService.createTask(this.board.id, newTasks, result.task, result.task.isDone);
        } else if (result.prevStatus !== result.task.isDone) {
          const update = this.board.tasks;
          update.splice(result.idx, 1, result.task);
          this.boardService.toggleTask(this.board.id, this.board.tasks, result.task, task.isDone);
        } else {
          const update = this.board.tasks;
          update.splice(result.idx, 1, result.task);
          this.boardService.editTasks(this.board.id, this.board.tasks);
        }
      }
    });
  }

  handleDelete() {
    this.boardService.deleteBoard(this.board.id);
  }

  parseNewLine(parse) {
    return parse.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }

  toggleTitle() {
    this.oldBoardTitle = this.boardTitle;
    this.editingTitle = true;
  }

  editTitle() {
    if (this.oldBoardTitle !== this.boardTitle) {
      this.boardService.editBoardTitle(this.board.id, this.boardTitle);
    }

    this.editingTitle = false;
  }

  checkTask(event, task: Task, idx: number) {
    event.stopPropagation();
    if (task.hasOwnProperty('isDone')) {
      task.isDone = !task.isDone;
    } else {
      task.isDone = true;
    }

    const update = this.board.tasks;
    update.splice(idx, 1, task);
    this.boardService.toggleTask(this.board.id, this.board.tasks, task, task.isDone);

    return false;
  }

}
