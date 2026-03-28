<script setup>
import Header from "./components/Header.vue";
import Carrusel from "./components/Carrusel.vue";
import Footer from "./components/Footer.vue";
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>
  <Header></Header>

  <v-btn
    color="deep-purple-lighten-2"
    text="VER MI LISTA"
    block
    border
    @click="scrollToElement(); router.push('/catalog')"
  ></v-btn>

  <hr />

  <Motion is="h2" preset="slideVisibleLeft">
    <h2>¡Realiza tu propio catálogo de libros!</h2>
    <h4>
      Esta aplicación te ayudará a registrar tus libros y visualizar tu catálogo
      de manera ordenada.
    </h4>
  </Motion>

  <hr />

  <Carrusel></Carrusel>

  <hr />

  <Motion is="div" preset="slideVisibleRight">
    <h3>Agrega un libro</h3>
    <div class="container-fluid">
      <!-- Importa el componente CardForm -->
      <card-form @card-added="addNewCard"></card-form>
    </div>
  </Motion>

  <hr />

  <div ref="targetElement" class="target">
    <Motion is="h2" preset="slideVisibleLeft">Tu catálogo</Motion>
  </div>

  <!-- Display de las tarjetas -->
  <div class="container text-center">
    <div
      class="row row-cols-auto"
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          delay: 1000,
        },
      }"
    >
      <div v-for="(card, index) in cards" :key="index" class="card">
        <v-card class="mx-auto" width="335">
          <v-img height="250" src="https://picsum.photos/200/300" cover></v-img>

          <v-card-item>
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-subtitle>
              <span class="me-1">{{ card.author }}</span>
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <div>{{ card.content }}</div>
          </v-card-text>

          <v-divider class="mx-4 mb-1"></v-divider>

          <v-card-subtitle>Categorías</v-card-subtitle>

          <div class="px-4 mb-2">
            <v-chip-group selected-class="bg-deep-purple-lighten-2">
              <v-chip v-for="item in card.category" :key="item" :text="item">
              </v-chip>
            </v-chip-group>
          </div>
          <v-card-actions>
            <v-btn
              color="deep-purple-lighten-2"
              text="Eliminar"
              block
              border
              @click="deleteCard(index)"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import CardForm from "./components/CardForm.vue";
import { useRouter } from "vue-router";
export default {
  components: {
    CardForm,
  },
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    addNewCard(newCardData) {
      // Push una nueva carta al array cards
      this.cards.push(newCardData);
      localStorage.setItem("cards", JSON.stringify(this.cards)); //crea un JSON en localstorage
    },
    deleteCard(index) {
      // Elimina la tarjeta en base al index
      this.cards.splice(index, 1);
      localStorage.setItem("cards", JSON.stringify(this.cards));
    },
    scrollToElement() {
      // Funcion para hacer scroll hasta el elemento target
      this.$refs.targetElement.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  created() { //display de las tarjetas guardadas en localstorage
    let data = localStorage.getItem("cards");
    if (data != null) {
      this.cards = JSON.parse(data);
    }
  },
};
</script>

<style scoped>
.target {
  padding: 5vw;
}
.card {
  padding: 1vw;
  border: none;
}
</style>
