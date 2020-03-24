export class Workshop {
  //field
  place: string;

  //constructor
  constructor(place: string) {
    this.place = place;
  }

  //function
  disp(): void {
    console.log("place is  :   " + this.place);
  }
}