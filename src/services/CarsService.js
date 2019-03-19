import { httpService } from "./HttpService";

class CarsService {
  getAllCars() {
    return httpService.get("/api/cars");
  }

  addNewCar(car) {
    return httpService.post("/api/cars", car);
  }
}

export const carsService = new CarsService();
