import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfComponent } from './conf.component';
import { MatDialogConfig, MatDialog } from '@angular/material';

@Injectable()
export class ConfService {

    constructor(private modalService: MatDialog) { }

  //  public confirm(
  //     title: string,
  //     message: string,
  //     btnOkText: string = 'OK',
  //     btnCancelText: string = 'Cancel')
  //     {
  //     const modalRef = this.modalService.open(ConfComponent, { width: "250px" });
  //     modalRef.componentInstance.title = title;
  //     modalRef.componentInstance.message = message;
  //     modalRef.componentInstance.btnOkText = btnOkText;
  //     modalRef.componentInstance.btnCancelText = btnCancelText;
  
  //   }

}
