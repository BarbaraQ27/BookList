<script setup>
import { shallowRef } from "vue";
</script>

<template>
  <div class="form-card">
    <form @submit.prevent="handleSubmit">
      <v-text-field
        v-model="newCard.title"
        label="Nombre del libro"
      ></v-text-field>
      <v-text-field
        v-model="newCard.author"
        label="Nombre del autor"
      ></v-text-field>
      <v-textarea v-model="newCard.content" label="Resumen"></v-textarea>

      <v-select
        v-model="categories"
        :items="type"
        hint="Puedes seleccionar mas de una categoria"
        label="Selecciona categoria"
        multiple
        persistent-hint
      ></v-select>

      <v-btn
        color="deep-purple-lighten-2"
        class="addBtn"
        text="Add book"
        block
        border
        type="submit"
      ></v-btn>
    </form>
  </div>
</template>

<script>
const categories = shallowRef([]);

const type = [
  "Action and Adventure",
  "Contemporary Fiction",
  "Fantasy",
  "Historical Fiction",
  "Horror",
  "Literary Fiction",
  "Mystery/Crime",
  "Romance",
  "Science Fiction (Sci-Fi)",
  "Thriller/Suspense",
  "Biography/Memoir",
  "Business/Economics",
  "Cookbooks/Food & Drink",
  "History",
  "Self-Help/Wellness",
  "True Crime",
  "Travel",
  "Religion & Spirituality",
];
export default {
  data() {
    return {
      newCard: {
        title: "",
        author: "",
        content: "",
        category: categories,
      },
    };
  },
  methods: {
    handleSubmit() {
      // emite la data de newCard al padre
      this.$emit("card-added", { ...this.newCard });
      // para resetear los elementos del formulario
      this.newCard.title = "";
      this.newCard.author = "";
      this.newCard.content = "";
      this.newCard.category = "";
    },
  },
};
</script>

<style scoped>
.form-card {
  margin: 5vw 20vw 5vw 20vw;
}
.addBtn {
  margin-top: 2vw;
  border-radius: 20px;
}
</style>
