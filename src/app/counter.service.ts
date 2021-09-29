export class CounterService {
  activeToInActiveCounter = 0;
  inActiveToActiveCounter = 0;

  incrementActiveToInActive() {
    this.activeToInActiveCounter++;
    console.log('Active to InActive ' + this.activeToInActiveCounter);
  }

  incrementInActiveToActive() {
    this.inActiveToActiveCounter++;
    console.log('InActive to Active ' + this.inActiveToActiveCounter);
  }
}
