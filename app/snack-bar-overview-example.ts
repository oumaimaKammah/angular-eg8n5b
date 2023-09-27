import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

/**
 * @title Basic snack-bar
 */
@Component({
  selector: 'snack-bar-overview-example',
  templateUrl: 'snack-bar-overview-example.html',
  styleUrls: ['snack-bar-overview-example.css'],
})
export class SnackBarOverviewExample {
  isSnackBarOpen: boolean = false;
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar() {
    const message = '404';
    const config = {
      duration: 0,
      panelClass: ['position-snackBar', 'color-snackBar'],
      data: { message: message },
    };
    const snackBarRef = this.snackBar.open(message, 'X', config);
    snackBarRef.afterDismissed().subscribe(() => {
      this.isSnackBarOpen = false;
    });

    this.isSnackBarOpen = true;
  }
}
