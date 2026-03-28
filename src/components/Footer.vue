<template>
  <v-footer class="d-flex flex-column" color="deep-purple-lighten-2">
    <div class="d-flex w-100 align-center px-4 py-2">
      <strong>Conecta en redes sociales</strong>

      <div class="d-flex ga-2 ms-auto">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          size="small"
          variant="plain"
        ></v-btn>
      </div>
    </div>

    <div class="px-4 py-2 bg-surface-variant text-center w-100 rounded-lg">
      {{ new Date().getFullYear() }} — <strong>Barbara Quiroz</strong>
    </div>
  </v-footer>
</template>

<script setup>

  const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ]
</script>

<style scoped>
footer {
    margin-top: 10vw;
}
</style>