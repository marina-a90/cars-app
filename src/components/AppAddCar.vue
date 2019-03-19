<template>
    <div>
        <h1>Add car</h1>

        <form @submit.prevent="addCar">
            <!-- @submit.prevent="addCar" -->
            <!-- v-model="car.brand" -->
            <div>Brand: <input type="text" v-model="car.brand" placeholder="brand"/></div>
            <div>Model: <input type="text" v-model="car.model" placeholder="model"/></div>
            <div>Year: 
                <select id="year" v-model="car.year" value="" >
                    <option v-for="year in years" :key="year">{{ year }}</option>
                </select>
            </div>
            <div>Max speed:<input type="text" v-model="car.maxSpeed" placeholder="max speed"/></div>
            <div>Number of doors: <input type="text" v-model="car.numberOfDoors" placeholder="number of doors"/></div>
            <div>isAutomatic<input type="checkbox" v-model="car.isAutomatic" name="isAutomatic"></div>
            <div>
                <input v-model="car.engine" type="radio" value="diesel">diesel<br>
                <input v-model="car.engine" type="radio" value="petrol">petrol<br>
                <input v-model="car.engine" type="radio" value="electric">electric<br>
                <input v-model="car.engine" type="radio" value="hybrid">hybrid<br>
            </div>
            <div><button type="submit">Add car</button></div>
        </form>
        <div><button @click="resetForm">Reset</button></div>
    </div>
</template>

<script>
import { carsService } from "../services/CarsService";

export default {
  props: ["cars"],
  data() {
    return {
      years: [],

      car: {
        brand: "",
        model: "",
        year: 0,
        maxSpeed: 0,
        isAutomatic: false,
        engine: "",
        numberOfDoors: 0
        // id: 0
      }
    };
  },

  created() {
    let start = 1990;
    let end = new Date().getFullYear();
    for (let year = start; year <= end; year++) {
      this.years.push(year);
    }
  },

  methods: {
    addCar() {
      carsService.addNewCar(this.car);
      this.$router.push("/cars");
    },
    resetForm() {
      this.car.brand = "";
      this.car.model = "";
      this.car.year = 0;
      this.car.maxSpeed = 0;
      this.car.isAutomatic = false;
      this.car.engine = "";
      this.car.numberOfDoors = 0;

      //   this.car = {
      //     ...this.car,
      //     brand: "",
      //     model: "",
      //     year: 0,
      //     maxSpeed: 0,
      //     isAutomatic: false,
      //     engine: "",
      //     numberOfDoors: 0
      //   };
    }
  }
};
</script>

<style>
</style>
