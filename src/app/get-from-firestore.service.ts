import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Person } from './person';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetFromFirestoreService {
  constructor(private db: AngularFirestore) {}
  people: Person[];
  peopleChanged = new Subject<Person[]>();

  public fetchPeople() {
    return this.db
      .collection('people')
      .snapshotChanges()
      .pipe(
        map(docArray => {
          return docArray.map(doc => {
            return {
              id: doc.payload.doc.id,
              firstName: doc.payload.doc.data()['firstName'],
              lastName: doc.payload.doc.data()['lastName']
            };
          });
        })
      );
  }
}
