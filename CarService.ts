import { Car } from './Car';

export class CarService {
  
  constructor() {}

  async GetCars(): Promise<Car[]> {
    var promise = new Promise<Car[]>((resolve, reject) => {
      console.log("CarService: Promis created wait 3s");
      setTimeout(() => {
        console.log("Async is done!");
        var cars: Car[] = [new Car("BMW"), new Car("VW"), new Car("Mini")];
        resolve(cars);        
      }, 3000);
    });
    return promise
  }
}
 