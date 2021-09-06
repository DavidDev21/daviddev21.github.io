import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomUtilService } from 'src/app/services/custom-util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageData: any = {};
  contentData: any = {};
  summaryText: string = "";

  constructor(private httpClient: HttpClient,  
    private customUtilService: CustomUtilService) { }

  ngOnInit(): void {
    this.httpClient.get("assets/content.json").subscribe(data =>{
      this.pageData = JSON.parse(JSON.stringify(data)).pages.home;
      this.contentData = this.pageData.contentData;

      this.summaryText = this.customUtilService.joinStrings(this.contentData.personalSummary);
      console.log(this.pageData);
      console.log(this.contentData);
      console.log(this.summaryText);
    });
  }

}
