<template>
    <footer class="footer" :class="{mobile: this.device === 'mobile'}">
        <p class="footer__copyright">
            706文化传播有限公司 版权所有 Copyright 2012-2020 All Rights Reserved
        </p>
        <p class="footer__icp">
            京ICP证03157号｜京ICP备11043884号｜京公网安备110105023734号
        </p>
    </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheFooter',
  computed: {
    ...mapState([
      'device'
    ])
  }
}
</script>

<style scoped lang="less">
    .footer {
        padding: 40px 0 30px 0;
        font-size: 13px;
        text-align: center;
        background: #000;
        color: #fff;

        &__copyright {
            margin-bottom: 5px;
        }

        &.mobile {
            font-size: 9px;
        }
    }
</style>
