import { ClientService } from './../client/client.service';
import { Component, OnInit, Inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conf',
  templateUrl: './conf.component.html',
})
export class ConfComponent implements OnInit{
  
  // @Input() title: string;
  // @Input() message: string;
  // @Input() btnOkText: string;
  // @Input() btnCancelText: string;

  // @Output() then = new EventEmitter<boolean>();
  // @Output() else = new EventEmitter<boolean>(); 

  constructor(private activeModal: NgbActiveModal,
    private dialogRef: MatDialogRef<ConfComponent>,
    private _clientService: ClientService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //console.log("erry");
  }

  // public decline() {
  //   this.activeModal.close(false);
  // }

  // public accept() {
  //   this.activeModal.close(true);
  // }

  // public dismiss() {
  //   this.activeModal.dismiss();
  // }

  accept(clientId: string){
    this.dialogRef.close("It was deleted");
    this._clientService.deleteClient(clientId)
      .subscribe((response) => {console.log(response);
        this.router.navigate(  ['/'], {relativeTo:this.route });
      },
      (error) => {
          console.log(error);
      });
  }

}
