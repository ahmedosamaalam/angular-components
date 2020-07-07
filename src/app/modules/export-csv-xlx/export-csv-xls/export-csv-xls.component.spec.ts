import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCsvXlsComponent } from './export-csv-xls.component';

describe('ExportCsvXlsComponent', () => {
  let component: ExportCsvXlsComponent;
  let fixture: ComponentFixture<ExportCsvXlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportCsvXlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportCsvXlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
