import { Variable } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core";



@Component({
  selector:'app-property-card',
  templateUrl:'property-card.component.html',
  styleUrls:['property-card.component.css']

})
export class PropertyCardComponent{

  //object of type any with inside different variables
  property: any={
    "Id":1,
    "Name":"Ali",
    "Type":"House",
    "Price":12000
  }


}

