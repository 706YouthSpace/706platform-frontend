<template>
    <form class="form">
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name: "SForm",
        props: {
            model: Object,
            rules: Object
        },
        methods: {
            validate() {
                for()
            }
        }
    }
</script>

<style scoped>

</style>
