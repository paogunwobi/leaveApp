import { TodoService } from './../services/todo.service';
import { Router } from '@angular/router';
import { ModalDirective } from 'angular-bootstrap-md';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  leaves = [];
  Todos = [];
  loading: boolean;
  resTodos: any;
  noTodo: string;
  TodosService: TodoService;
  todos: any;
  showing: number;
  showingList = [10, 20, 30, 40, 50];
  pg = 1;
  resultLength: number;
  initial = 0;
  limit = 30;
  today = Date.now();
  public chartType = 'line';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  toggleProBanner(event): void {
    console.log('123');
    event.preventDefault();
    document.querySelector('body').classList.toggle('removeProbanner');
  }

  constructor(private todosService: TodoService) { }

  async ngOnInit(): Promise<void> {
    await this.getTodo();
    this.pg = 1;
    this.showing = 30;
    this.todos = this.Todos.slice((this.pg - 1) * this.showing, this.showing);
  }

  getTodoList(): void {
    // const TodoList = JSON.parse(sessionStorage.getItem('TodoList'));
    // if (TodoList) {
    //   this.Todos = TodoList;
    //   this.resultLength = this.Todos.length; this.initial = (this.pg - 1) * this.showing;
    //   this.limit = this.initial + this.showing;
    //   this.todos = this.Todos.slice((this.pg - 1) + this.showing, this.showing);
    // } else {
      this.getTodo();
    // }
  }

  changeData(value): void {
    this.showing = value;
    this.initial = (this.pg - 1) * Number(this.showing);
    if ((this.initial + Number(this.showing)) < this.Todos.length) {
      this.limit = this.initial + Number(this.showing);
    } else {
      this.limit = this.Todos.length;
    }
    this.todos = this.Todos.slice(this.initial, this.limit);
    console.log('limit: ', this.limit);
  }

  nextPg(): void {
    this.pg++;
    this.changeData(this.showing);
  }

  prevPg(): void {
    this.pg--;
    this.changeData(this.showing);
  }

  async getTodo(): Promise<void> {
    this.loading = true;
    const subscription = this.todosService.getTodos().subscribe(
      async (res): Promise<void> => {
        // this.Todos = [];
        this.Todos = await res;
        sessionStorage.setItem('TodoList', JSON.stringify(this.Todos));
        this.changeData(this.showing);
        this.resultLength = this.Todos.length;
        // this.initial = (this.pg - 1) * this.showing;
        // this.limit = this.initial + this.showing;
        // this.todos = this.Todos.slice((this.pg - 1) + this.showing, this.showing);
        console.log('Todos: ', this.Todos);
        console.log('todos: ', this.todos);
        this.resTodos = this.Todos;
        this.loading = false;
      }
    );
    setTimeout(() => {
      if (this.resTodos.length === 0) {
        subscription.unsubscribe();
        this.loading = false;
        this.noTodo = 'Unable to Connect to the Internet';
        alert('Unable to load Todos... kindly, Check your Internet Connection');
      }
    }, 10000);
  }
}
