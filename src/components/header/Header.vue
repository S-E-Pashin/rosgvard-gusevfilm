<script setup>
// import {provide} from 'vue';
import NotificationsLogo from '@/components/NotificationsLogo.vue';

const user = {
  name: 'Саша Опытная',
    img: "src/images/user-foto.png",
    notifications: 5,
}

// provide('notificationsNumber', user.notifications);
</script>

<template>
  <header>
  <div class="header-wrapper">
    <img alt="Логотип Гусев-Фильм" class="header-logo" src="../../images/header-logo-desc.svg" aria-label="Вы находитесь на изображении логотипа Гусев-Фильм"/>
    <search class="search-place" role="search">
      <form method="get" action="/search" class="search-form">
        <button class="search-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs/>
            <mask id="mask_1_274" fill="white">
              <path id="color" d="M10.5 3C14.6421 3 18 6.35785 18 10.5C18 12.2101 17.4276 13.7866 16.464 15.0483L19.7072 18.2929C20.0977 18.6834 20.0977 19.3166 19.7072 19.7071C19.3467 20.0676 18.7794 20.0953 18.3871 19.7903L18.2928 19.7071L15.0482 16.464C13.7866 17.4276 12.2102 18 10.5 18C6.35791 18 3 14.6422 3 10.5C3 6.35785 6.35791 3 10.5 3ZM5 10.5C5 7.46246 7.4624 5 10.5 5C13.5376 5 16 7.46246 16 10.5C16 11.8511 15.5128 13.0885 14.7041 14.0446C14.5536 14.091 14.412 14.1738 14.2928 14.2929C14.1738 14.412 14.0911 14.5536 14.0459 14.7045C13.0885 15.5128 11.8512 16 10.5 16C7.4624 16 5 13.5375 5 10.5Z" clip-rule="evenodd" fill="" fill-opacity="1.000000" fill-rule="evenodd"/>
            </mask>
            <path id="color" d="M10.5 3C14.6421 3 18 6.35785 18 10.5C18 12.2101 17.4276 13.7866 16.464 15.0483L19.7072 18.2929C20.0977 18.6834 20.0977 19.3166 19.7072 19.7071C19.3467 20.0676 18.7794 20.0953 18.3871 19.7903L18.2928 19.7071L15.0482 16.464C13.7866 17.4276 12.2102 18 10.5 18C6.35791 18 3 14.6422 3 10.5C3 6.35785 6.35791 3 10.5 3ZM5 10.5C5 7.46246 7.4624 5 10.5 5C13.5376 5 16 7.46246 16 10.5C16 11.8511 15.5128 13.0885 14.7041 14.0446C14.5536 14.091 14.412 14.1738 14.2928 14.2929C14.1738 14.412 14.0911 14.5536 14.0459 14.7045C13.0885 15.5128 11.8512 16 10.5 16C7.4624 16 5 13.5375 5 10.5Z" clip-rule="evenodd" fill="#7E84A3" fill-opacity="1.000000" fill-rule="evenodd" mask="url(#mask_1_274)"/>
            <path id="color" d="" fill="#979797" fill-opacity="0.000000" fill-rule="nonzero"/>
          </svg>
        </button>
        <input class="search-input"  type="search" name="search-text" placeholder="Поиск..." />
      </form>
    </search>
    <div class="header-support">
      <button class="header-support-button">
        <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
          <defs/>
          <mask id="mask_346_12" fill="white">
            <path id="color" d="M19 3C20.1046 3 21 3.89545 21 5L21 17C21 18.1046 20.1046 19 19 19L9 19L3 22L3 5C3 3.89545 3.89542 3 5 3L19 3ZM5 5L19 5L19 17L8.44604 17L5 18.468L5 5ZM17 10L17 8L7 8L7 10L17 10ZM11 12L11 14L7 14L7 12L11 12Z" clip-rule="evenodd" fill="" fill-opacity="1.000000" fill-rule="evenodd"/>
          </mask>
          <path id="color" d="M19 3C20.1046 3 21 3.89545 21 5L21 17C21 18.1046 20.1046 19 19 19L9 19L3 22L3 5C3 3.89545 3.89542 3 5 3L19 3ZM5 5L19 5L19 17L8.44604 17L5 18.468L5 5ZM17 10L17 8L7 8L7 10L17 10ZM11 12L11 14L7 14L7 12L11 12Z" clip-rule="evenodd" fill="#7E84A3" fill-opacity="1.000000" fill-rule="evenodd" mask="url(#mask_346_12)"/>
          <path id="color" d="" fill="#979797" fill-opacity="0.000000" fill-rule="nonzero"/>
        </svg>
      </button>
    </div>
    <NotificationsLogo :notifications-number="user.notifications" />
    <div class="user-place">
      <div class="user-logo">
        <img :src=user.img alt="Фотография пользователя">
      </div>
      <div class="user-name">{{user.name}}</div>
      <button class="user-menu">
        <svg width="12.000000" height="7.000000" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <defs/>
          <path id="color" d="M0.29 0.29C-0.07 0.65 -0.1 1.22 0.2 1.61L0.29 1.7L5.29 6.7C5.65 7.06 6.22 7.09 6.61 6.79L6.7 6.7L11.7 1.7C12.09 1.31 12.09 0.68 11.7 0.29C11.34 -0.07 10.77 -0.1 10.38 0.2L10.29 0.29L6 4.58L1.7 0.29C1.34 -0.07 0.77 -0.1 0.38 0.2L0.29 0.29Z" fill="#7E84A3" fill-opacity="1.000000" fill-rule="evenodd"/>
          <path id="color" d="M0.2 1.61L0.29 1.7L5.29 6.7C5.65 7.06 6.22 7.09 6.61 6.79L6.7 6.7L11.7 1.7C12.09 1.31 12.09 0.68 11.7 0.29C11.34 -0.07 10.77 -0.1 10.38 0.2L10.29 0.29L6 4.58L1.7 0.29C1.34 -0.07 0.77 -0.1 0.38 0.2L0.29 0.29C-0.07 0.65 -0.1 1.22 0.2 1.61Z" stroke="#979797" stroke-opacity="0" stroke-width="0.000000"/>
        </svg>
      </button>
    </div>
  </div>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    background-color: #FFFFFF;
    width: 100%;
    max-width: 1440px;

    .header-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      padding: 0.88rem 1.25rem;
    }

    .header-logo {
      width: 11.31rem;
      height: 2.38rem;
    }
  }

  .search-place {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    flex-wrap: wrap;
    margin-left: 5.3rem;
    padding-top: 0.1rem;

    .search-form {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    .search-button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      border: none;
      background-color: transparent;

      svg {
        width: 1.46rem;
        height: 1.46rem;
      }
    }

    .search-input {
      color: rgb(90, 96, 127);
      font-size: 0.88rem;
      font-weight: 500;
      line-height: 1.25rem;
      letter-spacing: 0;
      text-align: left;
      border: none;
      background-color: transparent;
    }
  }

  .header-support {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 36.8rem;
    margin-top: 0.1rem;

    .header-support-button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      border: none;
      background: none;
    }
  }

  .user-place {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    margin-left: 2.1rem;
    margin-top: 0.1rem;

    .user-logo {
      width: 2.29rem;
      height: 2.29rem;
      border-radius: 50%;
      background-color: #7E84A3;
      overflow:hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .user-name {
      padding-left: 0.7rem;
      color: rgb(90, 96, 127);
      font-size: 0.88rem;
      font-weight: 500;
      line-height: 1.25rem;
      letter-spacing: 0;
      text-align: left;
    }

    .user-menu {
      width: 1.5rem;
      height: 1.5rem;
      margin-left: 0.6rem;
      border: none;
      background-color: transparent;
    }
  }
</style>
