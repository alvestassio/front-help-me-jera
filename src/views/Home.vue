<template>
  <div class="mt-5 container">
    <div class="row">
      <div class="col-md-2">
        <div class="form-group">
          <select class="form-select" id="floating-select" aria-label="Floating label select example">
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
          <input type="text" id="search-questions-input" class="form-control" placeholder="Buscar">
        </div>
      </div>
      <div class="col-md-1">
      </div>
      <div class="col-md-3">
        <div class="form-group float-end">
          <new-question-form @reloadQuestions="listQuestions" />
        </div>
      </div>
    </div>
    <div class="row row-titles-columns mt-5">
      <div class="col-md-6 question-mark">
        Tópicos
      </div>
      <div class="col-md-2 additional-information">
        Time
      </div>
      <div class="col-md-2 additional-information">
        Viking
      </div>
      <div class="col-md-2 additional-information">
        Respostas
      </div>
    </div>
    <question-item v-for="question in questions" :key="question.id" :question="question" />
  </div>
</template>

<script>
import questionResource from '../api/resources/question';

export default {
  name: 'Home',
  components: {
    QuestionItem: () => import('@/components/QuestionItem'),
    NewQuestionForm: () => import('@/components/NewQuestionForm'),
  },
  data() {
    return {
      questions: []
    };
  },
  created() {
    this.listQuestions();
  },
  methods: {
    listQuestions() {
      questionResource.listAll()
        .then(response => {
          this.questions = response.data;
        })
        .catch(response => {
          console.log('erro', response.message)
        });
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

.row-titles-columns {
  background: #EEEFF1 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  height: 60px;
}

.question-mark {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 40px;
  font-family: 'Montserrat';
  font-size: 14px;
}

.additional-information {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat';
  font-size: 12px;
}

#search-questions-input {
  border: none;
  border-bottom: 2px solid #11B654;
  border-radius: 0;
  outline: none;
}

#floating-select {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  border: 3px solid #cacaca;
}
</style>