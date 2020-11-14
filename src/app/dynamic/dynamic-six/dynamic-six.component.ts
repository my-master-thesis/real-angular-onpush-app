import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-dynamic-six',
  templateUrl: './dynamic-six.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicSixComponent implements OnInit, OnDestroy {

  showContent = false;
  currentDate = new Date();
  currentDate2 = new Date();
  private timerSubscription: Subscription;
  private timer2Subscription: Subscription;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.resetTimer(1);
    this.resetTimer(2);
  }

  ngOnDestroy() {
    this.stopTimer(1);
    this.stopTimer(2);
  }

  resetTimer(nr) {
    this.stopTimer(nr);
    if (nr === 1) {
      this.timerSubscription = interval(1000)
        .subscribe(() => {
          this.currentDate = new Date();
          this.cdr.markForCheck();
        });
    } else {
      this.timer2Subscription = interval(200)
        .subscribe(() => {
          this.currentDate2 = new Date();
          this.cdr.markForCheck();
        });
    }
  }

  stopTimer(nr) {
    if (nr === 1 && this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    if (nr === 2 && this.timer2Subscription) {
      this.timer2Subscription.unsubscribe();
    }
  }
}
