import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { TabsPanelComponent } from "./components/tabs-panel/tabs-panel.component";
import { TabComponent } from "./components/tabs-panel/tab//tab.component";
import { WebrtcComponent } from './components/webrtc/webrtc.component';
import { ExportCsvXlsComponent } from './export-csv-xls/export-csv-xls.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TabsPanelComponent,
    TabComponent,
    WebrtcComponent,
    ExportCsvXlsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
