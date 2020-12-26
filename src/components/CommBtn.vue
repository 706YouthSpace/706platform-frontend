<template>
  <span class="editBtn">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'CommBtn'
}
</script>

<style lang="less" scoped>
.editBtn {
  width: 140px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #888;
  border-radius: 10px;
  opacity: 0.7;
  border: 1px solid #888;
  position: absolute;
  bottom: -60px;
  right: 25px;
}
.editBtn:hover {
  color: #0b800b;
  opacity: 1;
  background-color: #0b800b11;
  border: 1px solid #0b800b;
}
</style>
