import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-level-three',
  templateUrl: './level-three.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
