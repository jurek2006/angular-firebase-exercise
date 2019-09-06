import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from '../person';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
  people: Observable<Person[]>;

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.people = this.db
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
