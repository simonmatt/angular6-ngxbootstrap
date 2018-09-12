import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal'

import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { DemoAccordionOpenEventComponent } from './demo-accordion-open-event/demo-accordion-open-event.component';
import { DynamicAccordionComponent } from './dynamic-accordion/dynamic-accordion.component';
import { DemoCarouselCustomContentComponent } from './demo-carousel-custom-content/demo-carousel-custom-content.component';
import { DemoCollapseBasicComponent } from './demo-collapse-basic/demo-collapse-basic.component';
import { DemoDatepickerBasicComponent } from './demo-datepicker-basic/demo-datepicker-basic.component';
import { DemoDatepickerInitialStateComponent } from './demo-datepicker-initial-state/demo-datepicker-initial-state.component';
import { DemoModalBasicComponent } from './demo-modal-basic/demo-modal-basic.component';
import { DemoModalUseComponentComponent, ModalContentComponent } from './demo-modal-use-component/demo-modal-use-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    DemoAccordionOpenEventComponent,
    DynamicAccordionComponent,
    DemoCarouselCustomContentComponent,
    DemoCollapseBasicComponent,
    DemoDatepickerBasicComponent,
    DemoDatepickerInitialStateComponent,
    DemoModalBasicComponent,
    DemoModalUseComponentComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
  ],
  entryComponents:[ModalContentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
