import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private TaskService: TaskService
  ) { }

  ngOnInit(): void {
    this.TaskService.getTasks().subscribe((tasks)=> {
    this.tasks = tasks;
  }
    )
}
deleteTask(task: Task){
this.TaskService.deleteTask(task).subscribe(()=>
this.tasks = this.tasks.filter(t => t.id !== task.id)
)
}
modifyReminder(task: Task){
  this.TaskService.modifyReminder(task).subscribe(()=>{
  task.reminder  = !task.reminder;

  })
}
  addTask(task: Task){
    this.TaskService.addTask(task).subscribe((task)=>{
      this.tasks.push(task);
    })
  }
}
