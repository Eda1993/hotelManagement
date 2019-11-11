import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UpdateService } from './update.service';
import { Client } from '../client';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  // @Input() el: Client[];

  //clients: Client[];
  client = new Client();

  arrayOne(n: number): any[] {
    return Array(n);
  }

  constructor(private _updateService: UpdateService,
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.client.id = params.get("id");
    //   this.client.name = params.get("name");
    //   this.client.roomNr = params.get("roomNr");
    // });
    this.client=this.sharedService.getData();
  }

  updateClient(): void {
    this._updateService.updateClient(this.client)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['/']);
      },
        (error) => {
          console.log(error);
        });
  }


}
