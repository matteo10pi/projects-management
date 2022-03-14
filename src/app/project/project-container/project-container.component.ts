import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Project } from 'src/app/models/Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'ngprj-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css'],
})
export class ProjectContainerComponent implements OnInit, OnDestroy {
  selectedProject!: Project;
  subscription!: Subscription;
  projects$!: Observable<Project[]>;
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects$ = this.projectService.getAll();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  selectProject(project: Project) {
    this.subscription = this.projectService
      .get(project.id)
      .subscribe((data) => (this.selectedProject = data));
  }

  submitProjectForm(project: Project) {
    this.projectService
      .add(project)
      .subscribe((data) => (this.projects$ = this.projectService.getAll()));
  }
}
