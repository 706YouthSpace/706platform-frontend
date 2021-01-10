<template>
  <span @click="open">添加邀请人</span>
</template>

<script>

export default {
  name: 'PeopleInvite',
  props: ['value'],
  data () {
    return {
      invitationCode: ''
    }
  },
  methods: {
    open () {
      var self = this
      const h = this.$createElement
      this.$msgbox({
        title: '加入706青年空间',
        message:
          h('el-input', {
            attrs: {
              placeholder: '请输入邀请码'
            },
            domProps: {
              value: self.value,
              type: 'text'
            },
            on: {
              input: function (event) {
                self.$emit('input', event.target.value)
              }
            }
          }),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '激活中...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 3000)
          } else {
            done()
          }
        }
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action
        })
      })
    }
  }

}
</script>
