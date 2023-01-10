<!-- @format -->

<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostListView :posts="posts" />
    </div>
    <div v-else>
      <SpinnerView />
    </div>
  </div>
</template>

<script>
import PostListView from "@/components/PostListView.vue";
import getPosts from "@/composables/getPosts";
import SpinnerView from "@/components/SpinnerView.vue";

export default {
  name: "HomeView",
  components: {
    PostListView,
    SpinnerView,
  },

  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>
