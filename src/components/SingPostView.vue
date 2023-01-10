<!-- @format -->

<template>
  <div>
    <h3>{{ post.title }}</h3>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  // Tack props as a first argument
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + "....";
    });

    return { snippet };
  },
};
</script>

<style scoped></style>
