import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../person';
import { GetFromFirestoreService } from '../get-from-firestore.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
  people: Observable<Person[]>;

  constructor(private getFromFirestoreService: GetFromFirestoreService) {}

  ngOnInit() {
    this.people = this.getFromFirestoreService.fetchPeople();
  }
}
