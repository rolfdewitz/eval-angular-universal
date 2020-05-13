import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-station-free-bikes',
  templateUrl: './station-free-bikes.component.html',
  styleUrls: ['./station-free-bikes.component.scss'],
})
export class StationFreeBikesComponent implements OnInit {
  /** Station to show */
  @Input()
  station: any;

  constructor() {}

  ngOnInit(): void {}
}
