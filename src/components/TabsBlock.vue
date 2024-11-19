<script setup>

</script>

<template>
  <div class="block-wrapper">
    <div class="block-header">
      <h2 class="block-heading">
        Дополнительная информация
      </h2>
    </div>
    <div class="block-main">
        <div  class="tabs">
          <input id="tab-btn-0" name="tab-btn" type="radio" checked value="">
          <label for="tab-btn-0">Пункт 11</label>
          <input id="tab-btn-1" name="tab-btn" type="radio" value="">
          <label for="tab-btn-1">Пункт 10</label>
          <input id="tab-btn-2" name="tab-btn" type="radio" value="">
          <label for="tab-btn-2">Пункт 9</label>
          <div class="tab-content" id="content-0">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis minima necessitatibus ducimus illo sed quo deserunt excepturi sunt non enim inventore aliquam esse asperiores ea dolorem quibusdam est.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus, nulla. Soluta error repudiandae cumque veniam fugiat.
            </p>
          </div>
          <div  class="tab-content" id="content-1">
            <p>
              10 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div  class="tab-content" id="content-2">
            <p>
              9 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
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
  margin-bottom: 0.4rem;
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
  align-items: start;
  margin-top: 1.6rem;
  min-width: 100%;
  min-height: 10rem;
}

.tabs {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  min-width: 100%;
  p {
    margin-bottom: 1.3rem;
    color: rgb(19, 21, 35);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0;
    text-align: left;
  }
}

.tabs>input[type="radio"] {
  display: none;
}

.tab-content {
  display: none;
  width: 100%;
}

#tab-btn-0:checked~#content-0,
#tab-btn-1:checked~#content-1,
#tab-btn-2:checked~#content-2 {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 1.2rem;
}

.tabs>label {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 4.55rem;
  height: 2.6rem;
  margin-right: 2.3rem;
  padding-top: 0;
  padding-bottom: 0.9rem;
  cursor: pointer;
  transition: color .15s ease-in-out, border-color .15s ease-in-out;
  color: #5A607F;
  background: 0 0;
  border-bottom: 0.125rem solid transparent;
}

.tabs>input[type="radio"]:checked+label {
  cursor: default;
  font-weight: bold;
  color: #1E5EFF;
  border-bottom-color: #1E5EFF;
}
</style>
