import { Component, ElementRef, Inject, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ScriptService } from '../script.service';

// declare const loadScript: (src: string) => Promise<void>;

@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [],
  providers: [],
})
export class MfeModule { }

@Component({
  selector: 'app-mfe-container',
  templateUrl: './mfe-container.component.html',
})
export class MfeContainerComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private script: ScriptService,
    // @Inject('MFE_URL') private mfeUrl: string,
    private elementRef: ElementRef<HTMLElement>
  ) { }

  ngOnInit() {
    // this.http
    //   .get(this.mfeUrl, { responseType: 'text' })
    //   .subscribe((response) => {
    //     const parser = new DOMParser();
    //     const doc = parser.parseFromString(response, 'text/html');
    //     const mfeBody = doc.querySelector('body');
    //     this.elementRef.nativeElement.innerHTML = mfeBody.innerHTML;
    //   });
    //   this.script.load('filepicker', 'rangeSlider').then(data => {
    //     console.log('script loaded ', data);
    // }).catch(error => console.log(error));
    this.script.load('my_mfe').then(() => {
      console.log('loaded script')
      // customElements.define('lit-mfe', LitMfeElement);
      // const litMfeContainer = document.getElementById('lit-mfe-container');
      // litMfeContainer?.appendChild(new LitMfeElement());
    });
  }
}

// class LitMfeElement extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = '<h1>Lit MFE</h1><p>Hello from Lit MFE!</p>';
//   }
// }
