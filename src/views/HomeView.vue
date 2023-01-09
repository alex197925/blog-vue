<!-- @format -->

<template>
  <div class="home">
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomeView",

  setup() {
    let name = "Mario";
    let age = 30;

    const p = ref(null);

    const handleClick = () => {
      console.log(p.value);
      p.value.classList.add("test");
      p.value.textContent = "Hello Alex";
    };

    return { name, age, handleClick, p };
  },
};
</script>
