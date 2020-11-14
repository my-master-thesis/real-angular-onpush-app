import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-static-five',
  templateUrl: './static-five.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaticFiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
