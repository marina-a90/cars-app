<template>
    <div>
        <h1>Add car</h1>

        <form>
            <div>Brand: <input type="text" v-model="car.brand" placeholder="brand" required="required" minlength="2"/></div>
            <div>Model: <input type="text" v-model="car.model" placeholder="model" required="required" minlength="2"/></div>
            <div>Year: 
                <select id="year" v-model="car.year" value="" required="required">
                    <option v-for="year in years" :key="year">{{ year }}</option>
                </select>
            </div>
            <div>Max speed:<input type="text" v-model="car.maxSpeed" placeholder="max speed"/></div>
            <div>Number of doors: <input type="text" v-model="car.numberOfDoors" placeholder="number of doors" required="required"/></div>
            <div>isAutomatic<input type="checkbox" v-model="car.isAutomatic" name="isAutomatic"></div>
            <div required="required">
                <input v-model="car.engine" type="radio" value="diesel">diesel<br>
                <input v-model="car.engine" type="radio" value="petrol">petrol<br>
                <input v-model="car.engine" type="radio" value="electric">electric<br>
                <input v-model="car.engine" type="radio" value="hybrid">hybrid<br>
            </div>
            <div><button @click.prevent="onSubmit">Add car</button></div>
            <div><button @click.prevent="previewForm">Preview</button></div>
            <div><button @click.prevent="resetForm">Reset</button></div>
        </form>
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

    this.$route.params.id && carsService.get(this.$route.params.id)
      .then((response) => {
        this.car = response.data
      })
  },

  methods: {
    onSubmit() {
      if (this.car.id) {
        this.editCar()
      } else {
        this.addCar()
      }
    },

    addCar() {
      carsService.addNewCar(this.car);
      this.$router.push("/cars");
    },

    async editCar () {
      try {
        const { data } = await carsService.edit(this.car);
        this.cars = data;
        this.$router.push("/cars");
      }
      catch (error) {
        console.log(error);
      }
    },

    // editCar () {
    //   carsService.edit(this.car)
    //     .then((success) => {
    //       this.$router.push("/cars");
    //     }).catch((error) => {
    //       console.log(error)
    //     })
    // },

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
    },

    previewForm() {
      alert(`
      Brand: ${this.car.brand},
      Model: ${this.car.model},
      Year: ${this.car.year},
      Max speed: ${this.car.maxSpeed},
      Automatic: ${this.car.isAutomatic},
      Engine: ${this.car.engine},
      Number of doors: ${this.car.numberOfDoors}`);
    }
  }
};
</script>

<style>
</style>
