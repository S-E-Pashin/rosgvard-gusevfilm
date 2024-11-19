<script setup>

import SectionItem from '@/components/SectionItem.vue';
import EditableBlock from '@/components/EditableBlock.vue';
import EnumerationBlock from '@/components/EnumerationBlock.vue';
import TabsBlock from '@/components/TabsBlock.vue';
import QuestionBlock from '@/components/QuestionBlock.vue';
import FooterArticle from '@/components/FooterArticle.vue';
</script>

<template>
  <div class="page-wrapper">
    <section class="main-first-column">
      <h2>
        Настройки профиля
      </h2>
      <ul class="main-section-info">
        <SectionItem name="Первичная настройка" path="" isActive="active" />
        <SectionItem name="Профиль пользователя" path="" isActive="" />
        <SectionItem name="Изменение общих настроек" path="" isActive="" />
        <SectionItem name="Дополнительные возможности" path="" isActive="" />
        <SectionItem name="Отправка запросов" path="" isActive="" />
        <SectionItem name="Работа со статистикой" path="" isActive="" />
      </ul>
    </section>

    <section class="main-second-column">
      <input class="main-search" type="search" name="search" id="search-input" placeholder="Поиск..." />
      <div class="blocks-wrapper">
        <EditableBlock />
        <EnumerationBlock />
        <TabsBlock />
        <QuestionBlock />
      </div>
      <FooterArticle />
    </section>
  </div>


</template>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  width: 100%;
}

.main-first-column {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-left: 1.8rem;
  width: 17.34rem;
  min-height: 300px;

  h2 {
    color: rgb(19, 21, 35);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.25rem;
    letter-spacing: 0;
    text-align: left;
    padding-right: 0.6rem;
  }
}

.main-section-info {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 1.9rem 0 0 0;
  list-style: none;
}

.main-second-column {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  width: 51.56rem;
  min-height: 400px;
  margin-left: 1.1rem;
}

.main-search {
  width: 100%;
  height: 2.4rem;
  margin-top: 1.4rem;
  padding-left: 3rem;
  color: rgb(161, 167, 196);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: 0;
  text-align: left;

  border: 0.06rem solid rgb(217, 225, 236);
  border-radius: 0.25rem;
  background-color: rgb(255, 255, 255);
  background-image: url('../../images/icon-magnifier.svg');
  background-repeat: no-repeat;
  background-position: 1rem center;
  background-size: 1.5rem 1.5rem;
}

.blocks-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin-top: 0.3rem;
  padding: 1.5rem 0;

  border-radius: 6px;
  box-shadow: 0 0.06rem 0.25rem 0 rgba(21, 34, 50, 0.08);
  background-color: #FFFFFF;

  :nth-child(n + 2)::before {
      content: '';
      width: 100%;
      height: 0.06rem;
      background-color: #E6E9F4;
    }

  :last-child {
    border-top: 0.06rem solid #E6E9F4;
  }

  :last-child::before {
    content: none;
  }

  :first-child {
    border: none;
  }

}
</style>
