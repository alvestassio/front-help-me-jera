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
          <h2 class="logo-title">JeraHelp</h2>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link" href="#">Perguntas</a>
          <a class="nav-link" href="#">Tutoriais</a>
          <a class="nav-link disabled">Deu-Ruim</a>
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
  font-family: 'Montserrat';
  font-weight: 0;
  text-decoration: none;
  padding: 6px 10px;
  font-size: 14px;
  transition: border 0.4s ease-in;
}

.nav-link:hover {
  border-bottom: 1px solid rgb(0, 189, 0);
}

.navbar-expand-lg .navbar-collapse {
  justify-content: flex-end;
  margin-right: 60px;
}

.logo {
  color: aliceblue;
}

.logo-title {
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 28px;
}
</style>