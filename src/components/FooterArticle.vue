<script setup>

</script>

<template>
  <article class="footer">
    <div class="footer-block">
      <h4 class="footer-heading">
        Сообщество GusevFilm
      </h4>
      <p class="footer-text">
        Обращайтесь за помощью к членам сообщества, задавайте любые вопросы и получайте ответы.
      </p>
      <a href="#" class="footer-link">
        Присоединиться к сообществу
      </a>
    </div>

    <div class="footer-block">
      <h4 class="footer-heading">
        GusevFilm Connect
      </h4>
      <p class="footer-text">
        Пользуйтесь всеми возможностями GB. Пройдите регистрацию в GB Connect.
      </p>
      <a href="#" class="footer-link">
        Регистрация
      </a>
    </div>
  </article>
</template>

<style scoped>

.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 1.8rem;
  padding-bottom: 2.5rem;
}

.footer-block {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 24.88rem;
  padding: 1.8rem 1.7rem;
  border-radius: 6px;
  box-shadow: 0 0.06rem 0.25rem 0 rgba(21, 34, 50, 0.08);
  background: rgb(255, 255, 255);
}

.footer-heading {
  color: rgb(19, 21, 35);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.75rem;
  letter-spacing: 0;
  text-align: left;
}

.footer-text {
  margin-top: 0.8rem;
  color: rgb(19, 21, 35);
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
}

.footer-link {
  margin-top: 1.2rem;
  color: rgb(30, 94, 255);
  font-size: 0.88rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
}


























</style>
