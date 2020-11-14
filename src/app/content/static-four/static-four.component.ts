import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-static-four',
  templateUrl: './static-four.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaticFourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
