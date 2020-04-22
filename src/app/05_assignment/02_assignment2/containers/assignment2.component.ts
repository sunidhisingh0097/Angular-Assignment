import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/03_pipes/models/todo.interface';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {

  selectedRow: Todo[]
  
  @Input()
    todos: Todo[] 

    setClickedRow(todo: Todo[]) {
    this.selectedRow = todo
    console.log(todo)
  }

}
