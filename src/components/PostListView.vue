<!-- @format -->

<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePostView :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePostView from "@/components/SingPostView.vue";

export default {
  components: { SinglePostView },
  props: ["posts"],
  setup(props) {
    // console.log(props.posts[0]);
  },
};
</script>

<style scoped></style>
