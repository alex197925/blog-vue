<!-- @format -->

<template>
  <div class="home">
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click</button>
    <button @click="age++">Add 1 to age</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomeView",

  setup() {
    let name = ref("Mario");
    let age = ref(30);

    const handleClick = () => {
      name.value = "Alex";
      age.value = 40;
    };

    return { name, age, handleClick };
  },
};
</script>
