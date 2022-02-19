import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { LogService } from 'src/app/shared/log.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'ngprj-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css'],
})
export class ProjectContainerComponent implements OnInit {
  selectedProject!: Project;
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getAll();
  }

  selectProject(project: Project) {
    this.selectedProject = this.projectService.get(project.id);
  }

  submitProjectForm(project: Project) {
    this.projectService.add(project);
  }
}
