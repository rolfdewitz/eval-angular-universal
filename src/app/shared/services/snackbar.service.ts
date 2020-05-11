import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  private config: MatSnackBarConfig;
  constructor(
    readonly snackBar: MatSnackBar,
    readonly zone: NgZone,
  ) {
    this.initConfig();
  }

  private initConfig() {
    this.config = new MatSnackBarConfig();
    this.config.verticalPosition = 'top';
    this.config.horizontalPosition = 'center';
    this.config.duration = 2000;
  }

  private getConfig(className?) {
    this.config.panelClass = className ? [className] : undefined;
    return this.config;
  }

  openSnackBar(message: string, action: string, className?: string) {
    const config = this.getConfig(className);
    this.zone.run(() => {
      this.snackBar.open(message, action, config);
    });
  }

  error(message: string, action?: string) {
    this.openSnackBar(message, action, 'text-error');
  }

  success(message: string, action?: string) {
    this.openSnackBar(message, action, 'text-success');
  }

  warning(message: string, action?: string) {
    this.openSnackBar(message, action, 'text-warn');
  }

}
