import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSlideToggleModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule } from '@angular/material';
import { DataFormComponent } from './data-form/data-form.component';
import { HeaderComponent } from './header/header.component';
import { UserBarComponent } from './user-bar/user-bar.component';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SubscriptionDetailsComponent } from './subscription-details/subscription-details.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    HeaderComponent,
    UserBarComponent,
    SubscriptionDetailsComponent,
    ImageGalleryComponent,
    routingComponents,
    FooterBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
