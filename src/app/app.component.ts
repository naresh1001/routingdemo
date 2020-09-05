import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingdemo';
  students:any[] = [
    {"id":123,"name":"Nirmit","dept":"MCA"},
    {"id":124,"name":"Rajat","dept":"MBA"},
    {"id":125,"name":"Ayushi","dept":"MTech"},
    {"id":126,"name":"Aakash","dept":"MCA"},
    {"id":127,"name":"Ankit","dept":"MCA"},
    {"id":128,"name":"Sumit","dept":"MBA"}
  ];
   getColor(branch){
        switch (branch) {
          case 'MCA':
            return 'green';
          case 'MBA':
            return 'red';
          case 'MTech':
            return 'blue'; 
          default:
            break;
        }
  }

}
