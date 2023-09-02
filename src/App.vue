<script setup lang="ts">
const archiveList = [
  {
    title: 'ブルーアーカイブ ｜ 2周年記念特設サイト',
    url: '/2nd-anniversary/index.html',
    date: '2022/01/22',
    icon: '/2nd-anniversary/img/logo.1b872cbe.svg',
  },
  {
    title: '「晄輪大祭」公式サイト',
    url: '/kourintaisai/index.html',
    date: '2022/10/22',
    icon: '/2nd-anniversary/img/logo.1b872cbe.svg',
  },
];
</script>

<template>
  <h1>档案馆</h1>
  <el-timeline class="timeline">
    <el-timeline-item
      v-for="archive in archiveList"
      :timestamp="archive.date"
      placement="top"
      color="#3f88f2"
      size="large"
    >
      <a class="item-card rounded-small shadow-farther" :href="archive.url">
        <img class="icon" :src="archive.icon" alt="icon" />
        <div class="title">{{ archive.title }}</div>
      </a>
    </el-timeline-item>
  </el-timeline>
</template>

<style scoped lang="scss">
h1 {
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.item-card {
  display: flex;
  align-items: center;
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
