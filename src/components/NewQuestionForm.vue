<template>
  <div>
    <button id="buttonNewQuestion" type="button" class="btn btn-success btn-lg" data-bs-toggle="modal"
      data-bs-target="#exampleModal" data-bs-whatever="@mdo">+ NOVA PERGUNTA</button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Nova Pergunta</h5>
            <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3 row">
                <div class="form-group col-md-6">
                  <label for="message-text" class="col-form-label">Area</label>
                  <select v-model="question.tagId" class="form-select" id="floatingSelect"
                    aria-label="Floating label select example">
                    <option value="1">web-dev</option>
                    <option value="2">am</option>
                    <option value="3">po</option>
                    <option value="3">designer</option>
                    <option value="3">tester</option>
                    <option value="3">ios</option>
                    <option value="3">android</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="message-text" class="col-form-label">Etiquetas</label>
                  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
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
              <div class="mb-3">
                <label for="message-text" class="col-form-label">Titulo</label>
                <textarea v-model="question.title" class="form-control" id="message-text"></textarea>
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">Descrição</label>
                <textarea v-model="question.description" class="form-control" id="message-text"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button id="buttonCancel" type="button" class="btn btn-secondary btn-size"
              data-bs-dismiss="modal">Cancelar</button>
            <button id="buttonSave" @click="saveQuestion()" type="button"
              class="btn btn-primary btn-size">Salvar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import questionResource from '../api/resources/question';

export default {
  name: 'NewQuestionForm',
  data() {
    return {
      question: {},
    }
  },
  methods: {
    saveQuestion() {
      questionResource.create(this.question)
        .then(() => {
          this.closeModal();
          this.question = {};
          this.$emit('reloadQuestions');
        })
        .catch((error) => {
          console.log(error.response.data)
          alert(error)
        });
    },
    closeModal() {
      document.getElementById('buttonCancel').click();
    },
  }
}
</script>

<style>
#buttonNewQuestion {
  background-color: rgb(0, 189, 0);
  border-bottom: 1px solid rgb(0, 189, 0);
  height: 60px;
}

.modal-header {
  justify-content: center;
}

.modal-footer {
  justify-content: center;
}

.btn-size {
  height: 40px;
  width: 100px;
}

#buttonSave {
  background-color: rgb(0, 189, 0);
  border-bottom: 1px solid rgb(0, 189, 0);
}

#buttonCancel {
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(40, 41, 40);
  color: black;
}
</style>