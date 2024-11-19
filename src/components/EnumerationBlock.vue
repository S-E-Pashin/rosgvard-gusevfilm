<script setup>

</script>

<template>
  <div class="block-wrapper">
    <div class="block-header">
      <h2 class="block-heading">
        Начало работы
      </h2>
    </div>
    <div class="block-main">
      <div class="block-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt, iste animi, quia numquam, rerum veritatis itaque tempore facilis repellendus harum reiciendis.
        </p>
      </div>
    </div>
    <div class="block-enumeration">
      <ol class="block-enumeration-list">
        <li class="block-enumeration-item">
          <p class="block-enumeration-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus, nulla. Soluta error repudiandae cumque veniam fugiat, voluptatem repellat provident, pariatur.</p>
        </li>
        <li class="block-enumeration-item">
          <p class="block-enumeration-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis harum delectus nemo iure praesentium amet, maxime veniam.</p>
        </li>
        <li class="block-enumeration-item">
          <p class="block-enumeration-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut nam earum! Lorem ipsum dolor sit amet.</p>
        </li>
      </ol>
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
  padding: 0 1.75rem 0.4rem;
  margin-bottom: 1.3rem;

}

.block-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2.6rem;

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

.block-enumeration {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 1.5rem;

  .block-enumeration-list {
    counter-reset: myCounter;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 0 0 0 3.8rem;

    .block-enumeration-item {
      position: relative;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      margin-bottom: 1.2rem;

      .block-enumeration-text {
        color: rgb(19, 21, 35);
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: 0;
        text-align: left;
      }
    }

    .block-enumeration-item:last-child {
      margin-bottom: 0;
    }

    .block-enumeration-item::before {
      content: counter(myCounter);
      counter-increment: myCounter;
      display: inline-block;
      position: absolute;
      top: 0;
      left: -3.8rem;
      width: 2.25rem;
      height: 2.25rem;
      background-color: #f5f6fa;
      color: rgb(90, 96, 127);
      font-size: 1rem;
      font-weight: 500;
      line-height: 2rem;
      letter-spacing: 0;
      text-align: center;
      border-radius: 50%;
    }
  }
}


</style>
