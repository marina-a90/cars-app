<template>
    <div>
        <h1>Cars</h1>
        <div v-for="car in cars" :key="car.id">
            <div>Brand: {{ car.brand }}</div>
            <div>Model: {{ car.brand }}</div>
            <div>Year: {{ car.year }}</div>
            <div>Max speed: {{ car.maxSpeed }}</div>
            <div>Automatic: {{ car.isAutomatic }}</div>
            <div>Engine: {{ car.engine }}</div>
            <div>Number of doors: {{ car.numberOfDoors }}</div>
            <div><button><router-link :to="`/edit/${car.id}`">Edit</router-link></button></div>
            <hr>
        </div>
    </div>
</template>

<script>
import { carsService } from "../services/CarsService";

export default {
  data() {
    return {
      cars: []
    };
  },

  async created() {
    try {
      const { data } = await carsService.getAllCars();
      this.cars = data;
    } catch (error) {
      console.log(error);
    }
  },

  //   created() {
  //     carsService
  //       .getAllCars()
  //       .then(res => {
  //         this.cars = res.data;
  //         console.log(res.data);
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   }


};
</script>

<style>
</style>