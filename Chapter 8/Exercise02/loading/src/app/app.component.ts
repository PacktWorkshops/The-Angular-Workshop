import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ViewContainerRef } from '@angular/core';;
import { LoadingPanelComponent } from './loading-panel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loading';

  
  constructor(public overlay: Overlay, public viewContainerRef: ViewContainerRef) { }

  openPanel() {
    let config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
        .global()
   .centerHorizontally()
        .centerVertically()


    config.hasBackdrop = true;

    let overlayRef = this.overlay.create(config);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
  
    overlayRef.attach(new ComponentPortal(LoadingPanelComponent, this.viewContainerRef));

  this.hide(overlayRef);
  }

  hide(overlay: OverlayRef) {
    setTimeout(() => overlay.detach(), 3000);

  }


}
