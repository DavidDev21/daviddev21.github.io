import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomUtilService } from 'src/app/services/custom-util.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  navigationItems: any[] = [];
  contentData: any = {};
  pageDescription: string = "";

  constructor(private httpClient: HttpClient, private activedRoute: ActivatedRoute,  private customUtilService: CustomUtilService) { }

  ngOnInit(): void {
      this.httpClient.get("assets/content.json").subscribe(data =>{
        this.contentData = JSON.parse(JSON.stringify(data)).pages.projects;
        // get the list of experiences from content.json
        this.navigationItems = this.customUtilService.generateSubsetList(this.contentData["navigationList"], this.contentData.navigationItemsPerRow);

        console.log("Navigation Items: " + JSON.stringify(this.navigationItems));
        console.log(this.navigationItems);

        this.pageDescription = this.customUtilService.joinStrings(this.contentData.pageDescription);
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
