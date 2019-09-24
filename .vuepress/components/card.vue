<template>
  <div class="card-wrap" @click="to">
    <div class="pic" :style="{'background-image': 'url(' + 'https://pic3.zhuanstatic.com/zhuanzh/n_v2f0263b600d9c4115af272d1dee2458c2.jpg' + ')'}"></div>
    <div class="content">
      <h3>{{ title }}</h3>
      <div>{{ content }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'link', 'content'],
  methods: {
    to() {
      this.link && this.$router.push(this.link.replace('..', '').replace('.md', '.html'))
    }
  },
}
</script>
<style lang="less">
  .card-wrap {
    width: 100%;
    box-shadow: 1px 1px 10px #ddd;
    margin-bottom: 20px;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 10px 24px;
    display: flex;
    .pic {
      width: 100px;
      height: 100px;
      background-size: contain;
      border-radius: 8px;
      box-shadow: 1px 1px 10px #444;
      margin-right: 20px;
    }
    .content {
      width: calc(100% - 120px)
    }
  }
  h3 {
    padding: 0;
    margin: 0
  }
  .card-wrap:hover {
    box-shadow: 1px 1px 10px green;
  }
</style>