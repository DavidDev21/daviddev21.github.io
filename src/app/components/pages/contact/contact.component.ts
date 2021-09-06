import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { OnDestroy } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CustomUtilService } from 'src/app/services/custom-util.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy  {

  headerText: string = "";
  typeWriterSpeed: number = 120; // in milliseconds
  typeVolume: number = .5; // in percentage
  typeDelay: number = 20; // in milliseconds, adds a constant value delay per type
  hasUserClicked: boolean = false;
  isNavigationVisible: boolean = false;
  contentData: any = {};
  pageData: any = {};
  renderBgVideo: boolean = false;
  public screenWidth: any;
  public screenHeight: any;

  typeSoundFiles: string[] = ["assets/sound/keyboard-typing/keyboard-1.mp3",
  "assets/sound/keyboard-typing/keyboard-2.mp3",
  "assets/sound/keyboard-typing/keyboard-3.mp3",
  "assets/sound/keyboard-typing/keyboard-4.mp3",
  "assets/sound/keyboard-typing/keyboard-5.mp3",
  "assets/sound/keyboard-typing/keyboard-6.mp3",
  "assets/sound/keyboard-typing/keyboard-7.mp3",
  "assets/sound/keyboard-typing/keyboard-8.mp3"];

  timeoutList: any[] = [];

  constructor(private httpClient: HttpClient,
              private customUtilService: CustomUtilService) {

                this.hasUserClicked = false;
                this.isNavigationVisible = false;
                this.headerText = "";
                this.contentData= {};
                this.pageData = {};
               }
  
  ngOnDestroy(): void {
    this.hasUserClicked = false;
    this.isNavigationVisible = false;
    this.renderBgVideo = false;
    this.timeoutList.forEach((timeout) => {clearTimeout(timeout);});
  }

  ngOnInit(): void {
    this.httpClient.get("assets/content.json").subscribe(data =>{
      this.pageData = JSON.parse(JSON.stringify(data)).pages.contact;
      this.contentData = this.pageData.contentData;
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
      this.showBackgroundVideo();

      // if we are not showing the video, just init everything. ignore typing animation
      if(this.renderBgVideo === false) {
        this.headerText = this.customUtilService.joinStrings(this.contentData["headerText"])
        this.showContactNavigation();
        this.hasUserClicked = true;
      }
      // this.timeoutList.push(
      //   this.typeWriter(this.customUtilService.joinStrings(this.contentData["headerText"]) , this.typeWriterSpeed, this.typeDelay));
    });
  }

  @HostListener('document:click', ['$event'])
    documentClick(event: MouseEvent) {
      if(this.hasUserClicked === false && this.renderBgVideo === true && this.contentData["headerText"] !== undefined) {
        this.hasUserClicked = true;

        this.timeoutList.push(
          this.typeWriter(this.customUtilService.joinStrings(this.contentData["headerText"]) , this.typeWriterSpeed, this.typeDelay));
      }
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
      this.showBackgroundVideo();

    }

  typeWriter(inputText: string, typeWriterSpeed: number = 150, typeDelay: number = 10, typeWriterIndex: number = 0): void {

    if(this.hasUserClicked === true && inputText !== undefined && typeWriterIndex < inputText.length) {
      this.headerText += inputText.charAt(typeWriterIndex);
      let typeAudio = new Audio(this.typeSoundFiles[Math.round(Math.random() * this.typeSoundFiles.length)]);
      typeAudio.load();
      typeAudio.volume = this.typeVolume;
      typeAudio.play();
      typeWriterIndex++;
      // time delay formula
      // org=  Math.floor((Math.random() * typeWriterSpeed)+typeDelay
      // typeWriterSpeed +/- random(0,1) * typeDelay
      // typeWriterSpeed + ((Math.round(Math.random()) ? 1 : -1) * (Math.random() * typeDelay))
      this.timeoutList.push(
        setTimeout(this.typeWriter.bind(this, inputText, typeWriterSpeed, typeDelay, typeWriterIndex), 
        typeWriterSpeed + ((Math.round(Math.random()) ? 1 : -1) * (Math.random() * typeDelay))));
    } else if(inputText !== undefined && typeWriterIndex >= inputText.length){
      this.showContactNavigation();
    }
  }

  showContactNavigation() : void {
    this.isNavigationVisible = true;
  }

  hideContactNavigation() : void {
    this.isNavigationVisible = false;
  }

  showBackgroundVideo() : void {
    if(this.screenWidth > 425 && this.screenHeight > 640) {
      this.renderBgVideo = true;
    } else {
      this.renderBgVideo = false;
      if(this.contentData !== undefined && this.contentData["headerText"]){
        this.headerText = this.customUtilService.joinStrings(this.contentData["headerText"]);
      }
      this.showContactNavigation();
      this.hasUserClicked = true;
    }
  }
}
