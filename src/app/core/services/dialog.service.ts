import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  confirmNavigateAway = new BehaviorSubject(false);

  // confirm(message?: string): Observable<boolean> {
  //   // const confirmation = window.confirm(message || 'Are you sure?');
  //   // return Observable.of(confirmation);
  // };

  /* confirm() {
    this.confirmNavigateAway.subscribe(data => {
      if (data) {
        return Observable.of(true);
      } else {
        return Observable.of(false);
      }
    });
  } */

}
