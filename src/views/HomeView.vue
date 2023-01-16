<!-- @format -->

<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostListView :posts="posts" />
      <TagCloudView :posts="posts" />
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
import TagCloudView from "@/components/TagCloudView.vue";

export default {
  name: "HomeView",
  components: {
    PostListView,
    SpinnerView,
    TagCloudView,
  },

  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
