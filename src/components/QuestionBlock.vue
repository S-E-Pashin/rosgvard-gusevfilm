<script setup>

</script>

<template>
  <div class="block-wrapper">
    <div class="block-header">
      <h2 class="block-heading">
        Вам помогла эта статья?
      </h2>
    </div>
    <div class="block-main">
      <div class="question-wrapper-btn">
        <button>Да</button>
        <button>Нет</button>
      </div>
      <div class="question-counter">
        <p>
          50 людям помогла эта статья
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  padding: 0 1.75rem;
  margin-bottom: 1rem;
}

.block-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2.5rem;

  h2 {
    color: rgb(19, 21, 35);
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.75rem;
    letter-spacing: 0;
    text-align: left;
  }
}

.block-main {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-top: 1.3rem;
  min-width: 100%;
}

.question-wrapper-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 8.8rem;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 4.06rem;
    height: 2.25rem;
    border: 0.06rem solid rgb(215, 219, 236);
    border-radius: 4px;
    background: rgb(255, 255, 255);
    color: rgb(30, 94, 255);
    font-size: 0.88rem;
    font-weight: 500;
    line-height: 1.25rem;
    letter-spacing: 0;
    text-align: left;
  }
}

.question-counter {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0.7rem;

  p {
    color: rgb(90, 96, 127);
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0;
    text-align: left;
  }
}
</style>
