import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  products: any = {};

  constructor(private httpClient: HttpClient,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.httpClient.get("assets/content.json").subscribe(data =>{
      console.log(data);
      
      this.products = data;

      console.log(this.products["hello"]);
    });

    this.activeRoute.params.subscribe(params => {console.log(params)});

  }

}
