import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Project } from '../models/Project';
import { LogService } from '../shared/log.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private logService: LogService, private httpClient: HttpClient) {}

  getAll(): Observable<Project[]> {
    return this.httpClient
      .get<Project[]>('http://localhost:3000/projects')
      .pipe(tap(() => this.logService.log('getAll Eseguito')));
  }

  add(project: Project): Observable<Project> {
    const projectToAdd = {
      ...project,
      code: Math.random().toString(36).replace('0.', '').substring(2, 9),
      done: false,
      tasks: [],
    };
    this.logService.log('add Eseguito');
    return this.httpClient
      .post<Project>('http://localhost:3000/projects', projectToAdd)
      .pipe(tap((data) => this.logService.log('add eseguito')));
  }
  get(id: number): Observable<Project> {
    this.logService.log('get Eseguito');
    return this.httpClient
      .get<Project>(`http://localhost:3000/projects/${id}`)
      .pipe(tap((data) => this.logService.log('get eseguito')));
  }
}
