import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-static-eight',
  templateUrl: './static-eight.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaticEightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
