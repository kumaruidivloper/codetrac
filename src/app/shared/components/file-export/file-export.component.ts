import { Component, OnInit, Input  } from '@angular/core';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';
import { CommonService } from '../../../core/services/common.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'codetrac-file-export',
  templateUrl: './file-export.component.html',
  styleUrls: ['./file-export.component.scss'],
})
export class FileExportComponent implements OnInit {
  @Input() fileType: string;
  @Input() fileName: string;
  @Input() buttonLabel: string;
  @Input() element: string;
  @Input() exportbatchid: string;

  data = [];
  userTransactionLoading: boolean;
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    headers: [],
    showTitle: false,
    title: '',
    useBom: false,
    removeNewLines: true,
    // keys: ['approved', 'age', 'name' ]
    keys: []
  };
  constructor(
    private commonService: CommonService
    ) {
   }

  ngOnInit() {
  }

  exportToExcel() {
    this.userTransactionLoading = true;
  }

}
