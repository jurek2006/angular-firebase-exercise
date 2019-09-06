import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { Person } from '../person';
import { GetFromFirestoreService } from '../get-from-firestore.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit, OnDestroy {
  people: Person[];
  peopleChangeSubscr: Subscription;

  constructor(
    private db: AngularFirestore,
    private getFromFirestoreService: GetFromFirestoreService
  ) {}

  ngOnInit() {
    this.peopleChangeSubscr = this.getFromFirestoreService.peopleChanged.subscribe(
      (people: Person[]) => {
        this.people = people;
      }
    );

    this.getFromFirestoreService.fetchPeople();
  }

  ngOnDestroy() {
    this.peopleChangeSubscr.unsubscribe();
  }
}
