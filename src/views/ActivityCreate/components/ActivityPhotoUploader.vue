<template>
    <div class="photo-uploader" @click="handleClick">
        <slot></slot>
        <input ref="input"
               class="photo-uploader__input"
               type="file"
               @change="handleFileChange"/>
    </div>
</template>

<script>
export default {
  name: 'ActivityPhotoUploader',
  props: {
    afterUpload: {
      type: Function
    }
  },
  data () {
    return {}
  },
  methods: {
    handleClick () {
      this.$refs.input.click()
    },
    handleFileChange () {
      // TODO: upload file
      new Promise((resolve) => {
        resolve('imgUrl')
      }).then(res => {
        this.afterUpload(res)
      })
    }
  }
}
</script>

<style scoped lang='less'>
    .photo-uploader {
        cursor: pointer;

        &__input {
            display: none;
        }
    }
</style>
