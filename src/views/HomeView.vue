<!-- @format -->

<template>
  <div class="home">
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  setup() {
    // console.log("setup");

    let name = "Mario";
    let age = 30;

    const handleClick = () => {
      console.log("You just clicked me");
    };

    return { name, age, handleClick };
  },
};
</script>
