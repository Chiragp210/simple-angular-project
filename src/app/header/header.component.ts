import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styles: `
  .header{
    padding: 20px;
    text-align: center;
    background-color: rgb(0, 182, 248); 
    color: white;

  }
  .ul{
  display: flex;
  list-style-type: none;
  padding: 10px;
  }
  .ex1{
    padding-right: 40px;
    text-decoration: none;
    font-size: 150%;
    color: white;
  }
  a.ex1:hover, a.ex1:active{
    font-size: 180%;
    color: blue;
  }
  `
})
export class HeaderComponent {

}
