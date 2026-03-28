<script setup>
import Navbar from "./Navbar.vue";
</script>

<template>
  <div
    v-motion
    :initial="{
      y: 100,
    }"
    :enter="{
      y: 0,
      delay: 1000,
    }"
    class="container-fluid"
  >
    <Navbar></Navbar>
    <div
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
      class="container text-center"
    >
      <div class="row">
        <div class="col align-self-start">
          <h2>Editorial Nova</h2>
        </div>
        <div class="col align-self-center">
          <h1>BookList</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  position: relative;
  /* Set the background image and properties */
  background-image: url("/assets/books banner.jpg"); /* */
  background-size: cover; /* Ensures the image covers the entire container */
  background-position: center; /* Centers the image */
  height: 50vw; /* Set a height for the container */
}

.container {
  position: absolute;
  top: 20vw;
  max-width: 60vw;
  height: 20vw;
  transform: skew(20deg);
  background: rgba(99, 97, 97, 0.5);
  border-radius: 0 100px 0 100px;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
}

h2 {
  position: absolute; /* Position the text absolutely within the container */
  top: 30%; /* Move the top edge to the middle */
  left: 40%; /* Move the left edge to the middle */
  transform: translate(-100%, -50%); /* Center the text precisely */
  font-size: 3vw;
  color: purple;
  text-shadow:
    0 0 1px #4d475e,
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px rgb(119, 85, 146),
    0 0 40px rgb(121, 89, 139),
    0 0 40px rgb(148, 210, 238),
    0 0 50px rgb(164, 232, 235),
    0 0 51px rgb(160, 226, 221);
  animation: pulsate 2.5s infinite alternate;
}

h1 {
  position: absolute; /* Position the text absolutely within the container */
  top: 55%; /* Move the top edge to the middle */
  left: 50%; /* Move the left edge to the middle */
  transform: translate(-30%, -50%); /* Center the text precisely */
  font-size: 8vw;
  color: rgb(120, 67, 141);
  text-shadow:
    0 0 1px #4d475e,
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px rgb(119, 85, 146),
    0 0 40px rgb(121, 89, 139),
    0 0 40px rgb(0, 247, 255),
    0 0 50px rgb(0, 247, 255),
    0 0 51px rgb(0, 247, 255);
  animation: pulsate 2.5s infinite alternate;
}
/* Flickering animation */
@keyframes pulsate {
  100% {
    /* Larger blur radius */
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px rgb(0, 247, 255),
      0 0 80px rgb(0, 247, 255),
      0 0 90px rgb(0, 247, 255),
      0 0 100px rgb(0, 247, 255),
      0 0 150px rgb(0, 247, 255),
  }
  0% {
    /* Smaller blur radius */
    text-shadow:
      0 0 2px #fff,
      0 0 4px #fff,
      0 0 6px #fff,
      0 0 10px #0fa,
      0 0 45px #0fa,
      0 0 55px #0fa,
      0 0 70px #0fa,
      0 0 80px #0fa;
  }
}
</style>
