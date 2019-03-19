import { httpService } from "./HttpService";

class CarsService {
  getAllCars() {
    return httpService.get("/api/cars");
  }
}

export const carsService = new CarsService();
