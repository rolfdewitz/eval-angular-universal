import {
  Directive,
  OnInit,
  ViewContainerRef,
  TemplateRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Directive({ selector: '[appDynamic]' })
export class DynamicDirective implements OnInit {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    @Inject(PLATFORM_ID) private platformId
  ) {}

  ngOnInit() {
    // console.log('************************* platformId', this.platformId);
    // if (this.platformId) {
    //   console.log('************************* server?', isPlatformServer(this.platformId));
    // }
    if (this.platformId && isPlatformServer(this.platformId)) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
