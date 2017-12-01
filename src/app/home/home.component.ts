import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('divState', [
          state('in', style({transform: 'translateX(0)'})),
          transition('void => *', [
            style({transform: 'translateX(-100%)'}),
            animate(100)
          ]),
          transition('* => void', [
            animate(100, style({transform: 'translateX(100%)'}))
          ])
        ])
      ]
})

export class HomeComponent implements OnInit {


    status = true;
    public state = 'in';

    toggleState() {
        this.status = !this.status;


    }


    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor() { }

    ngOnInit() {}
}
