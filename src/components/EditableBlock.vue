<script setup>

</script>

<template>
  <div class="block-wrapper">
    <div class="block-header">
      <h2 class="block-heading">
        Первичная настройка
      </h2>
      <button class="btn-edit">
        Редактировать
      </button>
    </div>
    <div class="block-main">
      <div class="block-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis minima necessitatibus ducimus illo sed quo deserunt excepturi sunt non enim inventore aliquam esse asperiores ea dolorem quibusdam labore quos facere iusto, obcaecati doloremque aliquid est.
        </p>
      </div>
    </div>
    <div class="block-recommendations">
      <h3 class="block-recommendations-heading">
        Рекомендации:
      </h3>
      <p>
        Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Fugiat.
      </p>
    </div>
  </div>
</template>

<style scoped>

  .block-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding: 0 1.75rem;
    margin-bottom: 1.5rem;
  }

  .block-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    h2 {
      color: rgb(19, 21, 35);
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.75rem;
      letter-spacing: 0;
      text-align: left;
    }
  }

  .btn-edit {
    width: 9.38rem;
    height: 2.25rem;
    border-radius: 3px;
    color: rgb(255, 255, 255);
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.13rem;
    letter-spacing: 0;
    text-align: center;
    border: none;
    background-color: rgb(30, 94, 255);
  }

  .block-main {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 1.3rem;

    .block-text {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;

      p {
        color: rgb(19, 21, 35);
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: 0;
        text-align: left;
      }
    }
  }

  .block-recommendations {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 100%;
    margin-top: 1.4rem;
    padding: 1.1rem 1rem 1.5rem 1.3rem;
    border-radius: 4px;
    background-color: #F5F6FA;

    h3 {
      color: rgb(90, 96, 127);
      font-size: 1rem;
      font-weight: 500;
      line-height: 2rem;
      letter-spacing: 0;
      text-align: left;
    }

    p {
      color: rgb(90, 96, 127);
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5rem;
      letter-spacing: 0;
      text-align: left;
    }
  }


</style>
