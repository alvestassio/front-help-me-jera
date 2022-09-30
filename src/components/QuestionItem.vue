<template>
  <div class="row mt-2 question-item-container">
    <div class="col-md-6">
      <div class="question">
        <h2>{{ question.title }}</h2>
        <p>{{ question.description }}</p>
      </div>
    </div>
    <div class="col-md-2 ">
      <div class="additional-information">
        <span>{{ question.tag.title }}</span>
      </div>
    </div>
    <div class="col-md-2">
      <div class="additional-information">
        <span>{{ question.user.name }}</span>
      </div>
    </div>
    <div class="col-md-2">
      <div class="additional-information">
        <span>40</span>
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
      default: () => {}
    }
  }
}
</script>

<style>
.question-item-container {
  background: #e5e6e9 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  padding: 20px 0;
}

.question {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 32px;
}

.additional-information {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>