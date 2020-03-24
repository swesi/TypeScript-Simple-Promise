import { Workshop } from "./Workshop";

export class WorkshopService {
  constructor() {}

  async GetShops(): Promise<Workshop[]> {
    var promise = new Promise<Workshop[]>((resolve, reject) => {
      console.log("Workshop: Promis created wait 1s");
      setTimeout(() => {
        console.log("Async is done!");
        var workshops: Workshop[] = [new Workshop("LSZ"), new Workshop("LA")];
        resolve(workshops);
      }, 1000);
    });
    return promise;
  }
}
 