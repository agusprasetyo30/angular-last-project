import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// Environment
import { environment } from '../environments/environment';
// Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ContentComponent } from './home/content/content.component';
import { SquadComponent } from './squad/squad.component';
import { GoalkeeperComponent } from './squad/goalkeeper/goalkeeper.component';
import { MidfielderComponent } from './squad/midfielder/midfielder.component';
import { DefenderComponent } from './squad/defender/defender.component';
import { ForwardComponent } from './squad/forward/forward.component';
import { HistoryComponent } from './history/history.component';
import { TropiesComponent } from './tropies/tropies.component';
import { TropiesAddComponent } from './tropies/tropies-add/tropies-add.component';
import { TropiesListComponent } from './tropies/tropies-list/tropies-list.component';
import { TropiesListAddComponent } from './tropies/tropies-list-add/tropies-list-add.component';
// Item
import { GoalkeeperItemComponent } from './squad/goalkeeper/goalkeeper-item/goalkeeper-item.component';
import { DefenderItemComponent } from './squad/defender/defender-item/defender-item.component';
import { MidfielderItemComponent } from './squad/midfielder/midfielder-item/midfielder-item.component';
import { ForwardItemComponent } from './squad/forward/forward-item/forward-item.component';
import { SquadDetailComponent } from './squad/squad-detail/squad-detail.component';
import { HistoryAddComponent } from './history/history-add/history-add.component';
import { HistoryListComponent } from './history/history-list/history-list.component';
// Service
import { HistoryService } from './service/history.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    ContentComponent,
    SquadComponent,
    GoalkeeperComponent,
    MidfielderComponent,
    DefenderComponent,
    ForwardComponent,
    HistoryComponent,
    TropiesComponent,
    GoalkeeperItemComponent,
    DefenderItemComponent,
    MidfielderItemComponent,
    ForwardItemComponent,
    SquadDetailComponent,
    HistoryAddComponent,
    HistoryListComponent,
    TropiesAddComponent,
    TropiesListComponent,
    TropiesListAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
