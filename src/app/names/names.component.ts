import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Person {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
  people: Observable<any[]>;

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.people = this.db.collection('people').valueChanges();
  }
}
