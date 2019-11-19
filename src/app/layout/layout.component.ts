import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    isOpenSlider:boolean = true;
    constructor() {}

    ngOnInit() {}
    slidebar()
    {
        // this.isOpenSlider=true;
       this.isOpenSlider = !this.isOpenSlider;
    //     if(this.isOpenSlider=true)  
    //   this.isOpenSlider = false;
    // else
    //   this.isOpenSlider = true;
    }
}
