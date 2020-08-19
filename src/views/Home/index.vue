<template>
  <div class="home">
    <home-slogan/>
    <home-intro/>
    <home-activity/>
    <home-project/>
    <home-media/>
    <home-join/>
  </div>
</template>

<script>

import HomeSlogan from './components/HomeSlogan'
import HomeIntro from './components/HomeIntro'
import HomeActivity from './components/HomeActivity'
import HomeProject from './components/HomeProject'
import HomeMedia from './components/HomeMedia'
import HomeJoin from './components/HomeJoin'
export default {
  name: 'Home',
  components: { HomeJoin, HomeMedia, HomeProject, HomeActivity, HomeIntro, HomeSlogan },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">
  .home {
  }
</style>
