import { httpService } from "./HttpService";

class CarsService {
  getAllCars() {
    return httpService.get("/api/cars");
  }

  addNewCar(car) {
    return httpService.post("/api/cars", car);
  }

  get (id) {
    return httpService.get(`/api/cars/${id}`)
  }
  
  edit (car) {
    return httpService.edit(`/api/cars/${car.id}`, car)
  }

  delete (car) {
    return httpService.delete(`/api/cars/${car.id}`)
  }

}

export const carsService = new CarsService();

