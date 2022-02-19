import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [
    {
      id: 1,
      code: 'Ped0ro2',
      name: 'Progetto Alpha',
      description: 'lorem sto c a peris',
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
      description: 'lorem accio pacaccio sto paccio',
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
      description: 'rotfl lel omg zzz',
      start: new Date(2019, 8, 15),
      priority: 'medium',
      done: false,
      tasks: [],
    },
  ];
  constructor() {}
  getAll(): Project[] {
    return this.projects;
  }
  add(project: Project): void {
    this.projects.push({
      ...project,
      id: this.projects.length,
      code: Math.random().toString(36).replace('0.', '').substring(2, 9),
      done: false,
      tasks: [],
    });
  }
  get(id: number): Project {
    return this.projects.find((proj) => proj.id === id) as Project;
  }
}
