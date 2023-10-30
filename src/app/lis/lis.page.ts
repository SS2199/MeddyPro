import { Component, OnInit } from '@angular/core';
import { VetdocService } from './../services/vetdoc.service';

@Component({
  selector: 'app-lis',
  templateUrl: './lis.page.html',
  styleUrls: ['./lis.page.scss'],
})

export class LisPage implements OnInit {

  Vetdocs: any = [];
  filterTerm!: string;


  constructor( private vetdocService: VetdocService ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.vetdocService.getVetdocs().subscribe((response) => {
      this.Vetdocs = response;
    });
  }

  removeVetdoc(vetdoc, i) {
    if (window.confirm('Are you sure')) {
      this.vetdocService.deleteVetdoc(vetdoc._id)
      .subscribe(() => {
          this.Vetdocs.splice(i, 1);
          console.log('doctor deleted!');
        }
      );
    }
  }

}
