<template>
  <div class="people">
    <PeopleLeftMenu class="people__menu" />
    <div class="people__inner">
      <router-view />
    </div>
  </div>
</template>

<script>
import PeopleLeftMenu from '@/components/PeopleLeftMenu'

export default {
  name: 'Navigation',
  components: {
    PeopleLeftMenu
  }
}
</script>

<style lang="less" scoped>
.people {
  display: flex;

  &__menu {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  }

  &__inner {
    width: 1200px;
    margin: 0 auto;
    padding: 30px 0;
  }
}
</style>
