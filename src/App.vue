<script setup lang="ts">
const archiveList = [
  {
    title: '蔚蓝档案 ｜ 2周年纪念特设网站',
    url: '/2nd-anniversary/index.html',
    date: '2023/01/22',
    icon: '/2nd-anniversary/img/logo.1b872cbe.svg',
  },
  {
    title: '「晄轮大祭」正式网站',
    url: '/kourintaisai/index.html',
    date: '2022/11/29',
    icon: '/kourintaisai/public/favicon.png',
  },
];
</script>

<template>
  <h1>档案馆</h1>
  <a-timeline>
    <a-timeline-item v-for="archive in archiveList" :label="archive.date" :key="archive.date">
      <a class="item-card rounded-small" :href="archive.url">
        <img class="icon" :src="archive.icon" alt="icon" />
        <div class="title">{{ archive.title }}</div>
      </a>
    </a-timeline-item>
  </a-timeline>
</template>

<style scoped lang="scss">
h1 {
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.item-card {
  display: flex;
  align-items: center;
  border: 1px solid #e5e6eb;
  background-color: var(--color-card-background);
  padding: 1rem;
  color: var(--color-text-main);
  text-decoration: none;

  .icon {
    width: 3rem;
    height: 3rem;
    object-fit: cover;
  }

  .title {
    margin-left: 1rem;
    font-weight: bold;
    font-size: 1.25rem;
  }
}

@media screen and (max-width: 768px) {
  .timeline {
    width: calc(100vw - 2rem);
  }

  .item-card {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icon {
      width: unset;
      height: 3rem;
    }

    .title {
      margin-top: 0.5rem;
      margin-left: 0;
      font-size: 1.25rem;
    }
  }
}
</style>
