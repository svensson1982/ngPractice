import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { BasicHighlightDirective } from './highlight-directive/basic-highlight-directive';
import { BetterHighlightDirective } from './better-highlight-directive/better-highlight.directive';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UsersService } from './users.service';
import { AppRoutingModule } from './app-routing.module';
import { GetdataService } from './getdata.service';
import { KeysPipe } from './keys.pipe';
import { RemoveemptyPipe } from './removeempty.pipe';
import { CreateServerComponent } from './create-server/create-server.component';
import { ServerService } from './server.service';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    HomeComponent,
    UserComponent,
    KeysPipe,
    RemoveemptyPipe,
    CreateServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UsersService, GetdataService, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
