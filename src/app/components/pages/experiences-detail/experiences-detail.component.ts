import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { CustomUtilService } from 'src/app/services/custom-util.service';
import { SiteRouterService } from 'src/app/services/site-router.service';

@Component({
  selector: 'app-experiences-detail',
  templateUrl: './experiences-detail.component.html',
  styleUrls: ['./experiences-detail.component.scss']
})
export class ExperiencesDetailComponent implements OnInit {

  contentDataList: any[] = [];

  contentData: any = {};
  contentId: string = "";
  contentFound: boolean = false;
  formattedToolList: any[] = [];
  toolListColWidth: number = 0;
  returnUrl: string = "";

  description: string = "";

  constructor(private httpClient: HttpClient, 
    private activedRoute: ActivatedRoute, 
    private customUtilService: CustomUtilService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      // console.log(params);
      this.contentId = params["contentId"];

      this.httpClient.get("assets/content.json").subscribe(data =>{
        let mainPageObj = JSON.parse(JSON.stringify(data)).pages.experiences;

        this.returnUrl = mainPageObj["metadata"].contentUrl;
        // get the list of experiences from content.json
        this.contentDataList = mainPageObj["navigationList"];

        // loading in and finding content based on content id on url
        for(let entry of this.contentDataList) {
          console.log("Entry: " + JSON.stringify(entry));
          console.log("Entry Content ID: " + entry["contentId"]);
          console.log("Entry contentData: " + JSON.stringify(entry["contentData"]));

          if(this.contentId === entry["contentId"]){
            this.contentData = entry["contentData"];
            this.contentFound = true;
            break;
          }
        }

        console.log("Content Loaded Successful: " + this.contentFound);
        console.log("Content ID: " + this.contentId);
        console.log("Content Data: " + JSON.stringify(this.contentData));

        this.formattedToolList = this.customUtilService.generateSubsetList(this.contentData.toolList, this.contentData.toolsPerRow);
        this.toolListColWidth = Math.floor(12 / this.contentData.toolsPerRow);

        this.description = this.customUtilService.joinStrings(this.contentData.description);
      });
    });
  }

  // generateSubsetList(inputArray: any[], itemsPerRow: number) : any[][] {
  //   let subList:any[] = [];
  //   let resultList:any[][] = [];
  //   console.log("input array: " + inputArray);
  //   if(inputArray !== null || inputArray !== undefined) {
  //     for(let i = 0; i < inputArray.length; i++) {
  //       if(i !== 0 && i % itemsPerRow === 0) {
  //         resultList.push(subList);
  //         subList = [];
  //       } 
  //       subList.push(inputArray[i]);
  //     }
  //     resultList.push(subList);
  //   } else {
  //     console.log("generateFormattedTooList - Input array is empty");
  //   }
  //   console.log("resultList After: " +JSON.stringify(resultList) );
  //   return resultList;
  // }
}
