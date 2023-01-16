<!-- @format -->

<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick" class="delete">delete post</button>
  </div>
  <div v-else>
    <SpinnerView />
  </div>
</template>

<script>
import getPost from "@/composables/getPost";
import SpinnerView from "@/components/SpinnerView.vue";
import { projectFirestore } from "@/firebase/config";
import { useRoute, useRouter } from "vue-router";
export default {
  props: ["id"],
  components: { SpinnerView },

  setup(props) {
    const route = useRoute();
    const router = useRouter();
    console.log(route);

    const { post, error, load } = getPost(props.id);

    load();

    const handleClick = async () => {
      await projectFirestore.collection("posts").doc(props.id).delete();
      router.push("/");
    };
    return { post, error, handleClick };
  },
};
</script>

<style scoped>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}

button.delete {
  margin: 10px auto;
}
</style>
