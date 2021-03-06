import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getTasks() {
    return this._http.get('/tasks');
  }

  registerTask(data) {
    return this._http.post('/tasks', data);
  }

  getTask(id) {
    return this._http.get('/tasks/' + id);
  }

  editTask(task) {
    console.log('EDITTOTOTOOTTOT', task);
    const id = task._id;
    return this._http.put(`/tasks/${id}`, task);
  }

  deleteTask(task) {
    console.log('Task to delete: ', task);
    return this._http.delete(`/tasks/${task}`);
  }
}
