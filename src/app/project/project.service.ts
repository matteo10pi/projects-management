import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Project } from '../models/Project';
import { LogService } from '../shared/log.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [
    {
      id: 1,
      code: 'Ped0ro2',
      name: 'Progetto Alpha',
      description: 'lorem ipsum',
      start: new Date(2021, 1, 30),
      end: new Date(2019, 3, 15),
      priority: 'medium',
      done: true,
      tasks: [],
    },
    {
      id: 2,
      code: 'p2oeSSz',
      name: 'Progetto Beta',
      description: 'lorem ipsorum magna',
      start: new Date(2021, 9, 30),
      end: new Date(2019, 6, 15),
      priority: 'low',
      done: true,
      tasks: [],
    },
    {
      id: 3,
      code: 'AAzs23',
      name: 'Progetto Gamma',
      description: 'magna vobis lorem',
      start: new Date(2019, 8, 15),
      priority: 'medium',
      done: false,
      tasks: [],
    },
  ];
  private projectSubject = new BehaviorSubject<Project[]>(this.projects);
  public projects$ = this.projectSubject.asObservable();

  constructor(private logService: LogService) {}

  getAll(): Observable<Project[]> {
    return this.projects$.pipe(
      tap(() => this.logService.log('getAll Eseguito'))
    );
  }

  add(project: Project): void {
    this.logService.log('add Eseguito');
    this.projects.push({
      ...project,
      id: this.projects.length,
      code: Math.random().toString(36).replace('0.', '').substring(2, 9),
      done: false,
      tasks: [],
    });
    this.projectSubject.next(this.projects.slice());
  }
  get(id: number): Project {
    this.logService.log('get Eseguito');

    return this.projects.find((proj) => proj.id === id) as Project;
  }
}
