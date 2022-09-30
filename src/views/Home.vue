<template>
  <div class="mt-5">
    <div class="row">
      <div class="col-md-2">
        <div class="form-group">
          <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option selected>Todas</option>
            <option value="1">web-dev</option>
            <option value="2">am</option>
            <option value="3">po</option>
            <option value="3">designer</option>
            <option value="3">tester</option>
            <option value="3">ios</option>
            <option value="3">android</option>
          </select>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Buscar">
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <button type="button" class="btn btn-success btn-lg float-end"> Nova Pergunta </button>
        </div>
      </div>
    </div>
    <div class="row row-titles-coluns mt-5">
      <div class="col-md-6">
        Tópicos
      </div>
      <div class="col-md-2">
        Area
      </div>
      <div class="col-md-2">
        Usuário
      </div>
      <div class="col-md-2">
        Respostas
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.row-titles-coluns {
  background: #EEEFF1 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  height: 60px;
}
</style>