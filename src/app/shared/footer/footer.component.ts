import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
    // moduleId: module.id,
    selector: 'codetrac-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent{
    currentDate : Date = new Date();

    constructor(
        private translate: TranslateService,
      ) {}


}
