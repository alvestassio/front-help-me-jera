<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="user-information">
          <img class="user-avatar" :src="question.user.avatar" :title="question.user.name" alt="Avatar" />
          <h2 class="user-name">{{ question.user.name }}</h2>
        </div>
        <div class="mt-3">
          <h2>{{ question.title }}</h2>
          <p class="question-description">{{ question.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: this.$route.params.question,
    }
  }
}
</script>

<style>
.user-avatar {
  max-width: 26px;
  max-height: 26px;
}

.user-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 24px;
}

.user-information {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>