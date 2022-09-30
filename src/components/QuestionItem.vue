<template>
  <div class="row mt-3 question-item-container" @click="openQuestion(question)">
    <div class="col-md-6">
      <div class="question">
        <h2 class="question-title">{{ question.title }}</h2>
        <p class="question-description">{{ question.description }}</p>
      </div>
    </div>
    <div class="col-md-2 ">
      <div class="additional-information">
        <span class="tag-title same-style">{{ question.tag.title }}</span>
      </div>
    </div>
    <div class="col-md-2">
      <div class="additional-information">
        <!--<span class="user-name same-style">{{ question.user.name }}</span>-->
        <img class="user-avatar" :src="question.user.avatar" :title="question.user.name" alt="Avatar">
      </div>
    </div>
    <div class="col-md-2">
      <div class="additional-information">
        <span class="answers-count same-style">40</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionItem',

  props: {
    question: {
      type: Object,
      default: () => { }
    }
  },
  methods: {
    openQuestion(question) {
      this.$router.push({ name: 'pergunta-detalhes', params: { question } });
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');

.question-item-container {
  background: #f3f3f5 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  padding: 20px 0;
  cursor: pointer;
}

.question {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 30px;
}

.question-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 26px;
}

.question-description {
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 300;
}

.additional-information {
  display: flex;
  align-items: center;
  justify-content: center;
}

.same-style {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
}

.user-avatar {
  max-width: 26px;
  max-height: 26px;
}
</style>