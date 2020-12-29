<template>
  <!-- TODO最小宽度 -->
  <div>
    <span type="text"
          @click="dialogVisible = true"><span class="nbsp"><i class="fa fa-plus-circle "></i></span>
      <slot></slot>
    </span>
    <el-dialog title="加入706青年空间"
               :visible.sync="dialogVisible"
               width="30%"
               center>
      <yth-input v-model="input"
                 class="reg__form-item"
                 placeholder="邀请码">
        <span slot="suffix">
          <span>如何获取</span><i class="fa fa-question-circle reg__form-icon"></i>
        </span>
      </yth-input>
      <span slot="footer"
            class="dialog-footer">
        <el-button class="editBtn"
                   @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'InvitationBtn',
  data () {
    return {
      dialogVisible: false,
      input: ''
    }
  },
  methods: {
    // handleClose (done) {
    //   this.$confirm('确认关闭？')
    //     .then(_ => {
    //       done()
    //     })
    //     .catch(_ => { })
    // }
  }
}

</script>

<style lang="less" scoped>
.nbsp {
  margin-right: 10px;
}
.input {
  width: 100%;
}
.editBtn {
  text-align: center;
  line-height: 40px;
  margin-top: -10px;
  padding: 0;
  width: 98%;
  color: #ffffff;
  background-color: #0b800b;
}
.editBtn:hover {
  color: #0b800b;
  background-color: #0b800b11;
}
</style>
