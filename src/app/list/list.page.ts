import { Component, OnInit } from '@angular/core';
import { MeddydocService } from './../services/meddydoc.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {

  MeddyDocs: any = [];
  filterTerm!: string;

  constructor( private meddydocService: MeddydocService ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.meddydocService.getMeddyDocs().subscribe((response) => {
      this.MeddyDocs = response;
    });
  }

  removeMeddyDoc(meddydoc, i) {
    if (window.confirm('Are you sure')) {
      this.meddydocService.deleteMeddyDoc(meddydoc._id)
      .subscribe(() => {
          this.MeddyDocs.splice(i, 1);
          console.log('Doctors deleted!');
        }
      );
    }
  }

}
