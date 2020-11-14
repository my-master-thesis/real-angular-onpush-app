import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-trash-icon',
  templateUrl: './trash-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrashIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
