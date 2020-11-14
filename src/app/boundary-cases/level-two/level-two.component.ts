import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-level-two',
  templateUrl: './level-two.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
