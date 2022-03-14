import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'ngprj-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  @Input() projects: Project[] = [];
  @Output() selected = new EventEmitter<Project>();
  constructor() {}

  getClasses(project: Project) {
    return project.done ? 'border-info' : 'border-danger';
  }

  ngOnInit(): void {}

  select(project: Project) {
    this.selected.emit(project);
  }
}
