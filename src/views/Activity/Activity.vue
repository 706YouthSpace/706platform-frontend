<template>
    <div class="post">
        <PostLeftMenu class="post__menu"/>
        <div class="post__inner">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import PostLeftMenu from "@/components/PostLeftMenu";

    export default {
        name: 'publish',
        components: {
            PostLeftMenu
        }
    }
</script>

<style lang="less" scoped>
    .post {
        display: flex;

        &__menu {
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
        }

        &__inner {
            width: 840px;
            margin: 0 auto;
            padding: 30px 0;
        }
    }
</style>
