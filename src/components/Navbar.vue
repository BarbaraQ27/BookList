<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/">Home</RouterLink>
            <!-- prueba de router -->
          </li>
          <li class="nav-item">
            <RouterLink to="/about">About</RouterLink>
            <!-- prueba de router -->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: transparent;
  font-size: 1.5vw;
}

.collapse {
  justify-content: center;
}
.nav-item {
  padding: 1vw;
  font-size: 2vw;
}
</style>
