import { CreateBookingComponent } from './../../../bookings/create-booking/create-booking.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(
    private router: Router,
    private navController: NavController,
    private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onBookPlace() {
    //this.navController.navigateBack('/places/tabs/discover');
    this.modalCtrl
      .create({component: CreateBookingComponent})
      .then(modalEl => {
        modalEl.present();
      });
  }
}
