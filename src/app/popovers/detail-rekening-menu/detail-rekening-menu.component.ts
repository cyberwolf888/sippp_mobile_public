import { Component, OnInit } from '@angular/core';
import { PopoverController } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  templateUrl: './detail-rekening-menu.component.html',
  styleUrls: ['./detail-rekening-menu.component.scss'],
})
export class DetailRekeningMenuComponent implements OnInit {

  constructor(private popover: PopoverController, private router: Router) { }

  ngOnInit() {}

  dismissPopover() {
    this.popover.dismiss();
  }

  openRencanaAksi() {
    console.log('rencana aksi');
    this.popover.dismiss();
    this.router.navigateByUrl('/rencana-aksi');
  }

  openRealisasiFisik() {
    console.log('realisasi fisik');
    this.popover.dismiss();
    this.router.navigateByUrl('/realisasi-fisik');
  }

}
