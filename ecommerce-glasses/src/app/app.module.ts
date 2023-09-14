import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeadersComponent } from './componentes/headers/headers.component';
import { ScrollComponent } from './componentes/scroll/scroll.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HeadersComponent,
    ScrollComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
