import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-icon',
  templateUrl: './star-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
