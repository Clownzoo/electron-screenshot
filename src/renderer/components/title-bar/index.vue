<template>
  <div class="title-bar">
    <div class="tools">
      <span class="item-tool close" title="关闭"></span>
      <span class="item-tool min" title="最小化" @click="hello"></span>
      <span class="item-tool full" title="最大化"></span>
    </div>
    <span class="title">{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// const { ipcRenderer } = require('electron');
export default defineComponent({
  name: 'TitleBar',
  props: {
    title: { type: String, required: true },
  },
  methods: {
    hello() {
      // ipcRenderer.send('window-minimize', 'home');
    },
  },
});
</script>

<style lang="scss" scoped>
.title-bar{
  height: 20px;
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 5px;
  border-bottom: 1px solid #111;
  .title{
    color: #ccc;
    flex: 1;
    margin-right: 45px;
    text-align: center;
  }
  .logo{
    height: 15px;
    width: 15px;
    >img{
      height: 15px;
      width: 15px;
    }
  }
  .tools{
    height: 20px;
    display: flex;
    align-items: center;
    .item-tool{
      width: 10px;
      height: 10px;
      -webkit-app-region: no-drag;
      border-radius: 50%;
      &.close{
        background: #fe5f58;
      }
      &.min{
        background: #febc2e;
        margin: 0 5px;
      }
      &.full{
        background: #40ed61;
      }
    }
  }
}
</style>
