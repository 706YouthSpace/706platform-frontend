<template>
  <div class="mobile-filter">
    <div class="mobile-filter-item">
      全部分类<img src="@/assets/images/arrow_bottom.png"/>
    </div>
    <div class="mobile-filter-item">
      全部时间<img src="@/assets/images/arrow_bottom.png"/>
    </div>
    <div class="mobile-filter-item">
      全部地点<img src="@/assets/images/arrow_bottom.png"/>
    </div>
    <div class="mobile-filter-item">
      推荐排序<img src="@/assets/images/arrow_bottom.png"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MobileFilter'
  }
</script>

<style scoped lang="less">
  .mobile-filter {
    display: flex;
    font-size: 12px;
    align-items: center;

    &-item {
      flex: 1 0 auto;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;

      & > img {
        width: 8px;
        height: 5px;
        margin-left: 5px;
      }
    }
  }
</style>
