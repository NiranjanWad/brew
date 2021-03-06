import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
import {GraphPage} from "../graph/graph";
@Component({
  selector: 'page-about',
  templateUrl: 'batches.html'
})
export class BatchesPage {
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;

  SwipedTabsIndicator :any= null;
  tabs:any=[];
  constructor(public navCtrl: NavController) {
    this.tabs=["BREWING","FERMENTING","BOTTLED"];
  }

  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }

  selectTab(index) {
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
    this.SwipedTabsSlider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
    //avoid passing to incorrect index
    if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
    {
      this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
    }

  }

  animateIndicator($event) {
    if(this.SwipedTabsIndicator)
      this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  }

  viewGraph(){
    this.navCtrl.push(GraphPage)
  }
}
