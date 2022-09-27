import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {

  title: string = 'ng2-pdf-viewer';
  src: string = 'assets/Augry_Teo_CV_FR.pdf';

  constructor() { }

  ngOnInit(): void {
  }
  DLClick(){
    window.open('assets/Augry_Teo_CV_FR.pdf', '_blank');
  }

}
