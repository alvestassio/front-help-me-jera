<template>
  <nav class="navbar navbar-expand-lg bg-light nav-color">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div>
        <div class="logo">
          <h2> Help me Jera</h2>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link" href="#">Perguntas</a>
          <a class="nav-link" href="#">Tutoriais</a>
          <a class="nav-link disabled">Deu Ruim</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
.nav-color {
  background-color: black !important;
  height: 80px;
}

.nav-link {
  color: azure !important;
}

.navbar-expand-lg .navbar-collapse {
  justify-content: flex-end;
  margin-right: 60px;
}

.logo {
  color: aliceblue
}
</style>