import { Component} from '@angular/core';

@Component({
  selector: 'loading-panel',
  template: `
    <div class="wrapper">
      <h2>Loading...</h2>
    </div>
  `,
  styles: [`
    .wrapper { 
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.4);
      color: white;
    }
  `]
})
  export class LoadingPanelComponent {
  }
