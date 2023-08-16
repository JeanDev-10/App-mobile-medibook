import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class EventEmitterService {
  private event:Subject <any>=new Subject<any>();
  getEvent():Observable<any>{
    return this.event.asObservable()
  }
  setEvent(event:any):void{
    this.event.next(event);
  }
}
