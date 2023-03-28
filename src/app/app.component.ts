import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ScriptService } from './script.service';
import { AppState, loadUser } from './store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user$ = this.store.select(state => state.user);
  title = 'lib-test';

  constructor(private store: Store<AppState>, private script: ScriptService,) { }

  ngOnInit() {
    this.store.dispatch(loadUser());
    this.script.load('my_mfe').then(() => {
      console.log('loaded script')
    });

  }

}