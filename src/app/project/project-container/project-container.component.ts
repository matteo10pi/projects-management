import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'ngprj-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css'],
})
export class ProjectContainerComponent implements OnInit, OnDestroy {
  selectedProject!: Project;
  projects: Project[] = [];
  subscription!: Subscription;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.subscription = this.projectService
      .getAll()
      .subscribe((data) => (this.projects = data));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  selectProject(project: Project) {
    this.selectedProject = this.projectService.get(project.id);
  }

  submitProjectForm(project: Project) {
    this.projectService.add(project);
  }
}
