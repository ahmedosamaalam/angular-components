import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExportCsvXlsComponent } from "./export-csv-xls/export-csv-xls.component";

@NgModule({
  declarations: [ExportCsvXlsComponent],
  imports: [CommonModule],
  exports: [ExportCsvXlsComponent],
})
export class ExportCsvXlxModule {}
