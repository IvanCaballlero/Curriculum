import { Injectable } from '@angular/core';
import { Observable, Subject, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShareEventService {
  private event = new Subject<boolean>();
  event$ = this.event.asObservable();
  // private event = new Subject<void>();
  // private lastSubscriber!: Subscriber<void>;

  // event$ = this.event.asObservable().subscribe(subscriber => {
  //   this.lastSubscriber = subscriber;
  // });

  emitEvent(clicked: boolean) {
    this.event.next(clicked);
  }

  constructor() { }
}
