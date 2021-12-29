import { Component, OnInit } from '@angular/core';
import { PopoverController } from "@ionic/angular";

@Component({
  templateUrl: './detail-rekening-menu.component.html',
  styleUrls: ['./detail-rekening-menu.component.scss'],
})
export class DetailRekeningMenuComponent implements OnInit {

  constructor(private popover: PopoverController) { }

  ngOnInit() {}

  dismissPopover() {
    this.popover.dismiss();
  }

  openRencanaAksi() {
    console.log('rencana aksi');
    
  }

  openRealisasiFisik() {
    console.log('realisasi fisik');
    
  }

}
