// Import stylesheets
import "./style.css";
import { Car } from "./Car";
import { CarService } from "./CarService";
import { Workshop } from "./Workshop";
import { WorkshopService } from "./WorkshopService";

function htmlLog(msg: string) {
  const appDiv: HTMLElement = document.getElementById("app");
  appDiv.innerHTML = appDiv.innerHTML + `<h5>${msg}</h5>`;
}

async function demo() {
  var worksops = await new WorkshopService().GetShops();

  try {
    var cars = await new CarService().GetCars();
    cars.forEach(car => htmlLog(car.engine));
  } catch (error) {
    htmlLog(error);
  }
  worksops.forEach(ws => htmlLog(ws.place));
}
//demo();

var request = require('request');
request('www.random.org/integers, function (error, response, body) {
            console.log(response.statusCode);
            cb(response.statusCode);
           });
