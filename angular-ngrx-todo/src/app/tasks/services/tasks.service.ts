import { Task } from './../model/task';
import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TasksService {

  API_BASE_URL: string = 'http://localhost:3001';
  API_TASKS_URL: string = `${this.API_BASE_URL}/tasks`;

  constructor(private http: Http) {}

  loadTasks(): Observable<Task[]> {
    return this.http.get(this.API_TASKS_URL)
      .map((res: Response) => res.json());
  }

  createTask(body: any): Observable<Task> {
    return this.http.post(this.API_TASKS_URL, this.getBody(body))
      .map((res: Response) => res.json());
  }

  updateTask(taskId: string, body: any): Observable<Task> {
    return this.http.put(`${this.API_TASKS_URL}/${taskId}`, this.getBody(body))
      .map((res: Response) => res.json());
  }

  deleteTask(taskId: string): Observable<Task> {
    return this.http.delete(`${this.API_TASKS_URL}/${taskId}`)
      .map((res: Response) => res.json());
  }

  private getBody(body: any){
    //return JSON.stringify(body)
    return body; //node.js does not need stringify
  }
}
