import { Car } from './Car';

export class CarService {
  
  constructor() {}

  async GetCars(): Promise<Car[]> {
    var promise = new Promise<Car[]>((res, reject) => {
      console.log("CarService: Promis created wait 3s");
      setTimeout(() => {
        console.log("Async is done!");
        var cars: Car[] = [new Car("BMW"), new Car("VW"), new Car("Mini")];
        res(cars);        
      }, 3000);
    });
    return promise
  }
}
 