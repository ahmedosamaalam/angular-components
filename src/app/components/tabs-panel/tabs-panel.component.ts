import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterViewInit,
  TemplateRef,
  Input,
} from "@angular/core";
import { TabComponent } from "./tab/tab.component";

@Component({
  selector: "app-tabs-panel",
  templateUrl: "./tabs-panel.component.html",
  styleUrls: ["./tabs-panel.component.scss"],
})
export class TabsPanelComponent implements OnInit, AfterViewInit {
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  @Input()
  headerTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const selectedTab = this.tabs.find((tab) => tab.selected);
    if (!selectedTab && this.tabs.first) {
      this.tabs.first.selected = true;
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach((tab) => (tab.selected = false));
    tab.selected = true;
  }

  get tabContext() {
    return {
      tabs: this.tabs,
    };
  }
}
