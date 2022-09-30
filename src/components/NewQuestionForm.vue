<template>
  <div>
    <button id="buttonNewQuestion" type="button" class="btn btn-success btn-lg" data-bs-toggle="modal"
      data-bs-target="#newQuestionModal" data-bs-whatever="@mdo">
      + Nova pergunta
    </button>

    <div class="modal fade" id="newQuestionModal" tabindex="-1" aria-labelledby="modal-title" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modal-title">Nova pergunta</h5>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3 row">
                <div class="form-group col-md-6">
                  <label for="message-text" class="col-form-label">Time</label>
                  <select v-model="question.tagId" class="form-select" id="floatingSelect"
                    aria-label="Floating label select example">
                    <option value="1">web-dev</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="message-text" class="col-form-label">Tags</label>
                  <select class="form-select" id="floatingSelect" aria-label="Floating label select example" disabled>
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
                <label for="message-text" class="col-form-label">Título</label>
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
      tags: []
    }
  },
  mounted() {
    this.listTags();
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');

#buttonNewQuestion {
  background-color: #11B654;
  padding: 12px;
  border: 1px solid #11B654;
  border-radius: 8px;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
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
  background-color: #11B654;
  border: 1px solid #11B654;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

#buttonCancel {
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  color: black;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

.modal-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>