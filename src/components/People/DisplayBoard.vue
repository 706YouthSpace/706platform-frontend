<template>
  <div class="dp">
    <div v-if="data.length > 0">
      <el-row v-for="(item, index) in data" :key="item.id" class="row">
        <el-col :span="4" v-if="index == 0 && item.editStatus == false">
          <span class="title"> {{ infoType }} </span>
        </el-col>
        <el-col
          :span="16"
          class="content"
          v-if="index == 0 && item.editStatus == false"
        >
          <span class="point">•</span>{{ item.leftData }}
          <slot name="center"></slot>
          {{ item.rightData }}
          <span class="edit" v-if="readOnly == false"
            ><i class="fa fa-edit" @click="editRow(index)"></i
          ></span>
          <span class="del" v-if="readOnly == false"
            ><i class="fa fa-times"></i
          ></span>
        </el-col>
        <el-col
          :span="16"
          :offset="4"
          class="content"
          v-if="index > 0 && item.editStatus == false"
        >
          <span class="point">•</span>{{ item.leftData }}
          <slot name="center"></slot>
          {{ item.rightData }}
          <span class="edit" v-if="readOnly == false"
            ><i class="fa fa-edit" @click="editRow(index)"></i
          ></span>
          <span class="del" v-if="readOnly == false"
            ><i class="fa fa-times"></i
          ></span>
        </el-col>
        <el-col :span="16" :offset="4" v-if="item.editStatus == false">
          <div class="detail">{{ item.detail }}</div>
        </el-col>
        <el-col :span="4">
          <div>&nbsp;</div>
        </el-col>
        <!-- 行内编辑开始 -->

        <!-- 首行行内编辑 -->
        <el-col :span="4" v-if="index == 0 && item.editStatus == true">
          <span class="title"> {{ infoType }} </span>
        </el-col>
        <el-col :span="8" v-if="item.editStatus == true && index == 0">
          <div class="sinput">
            <el-input :placeholder="leftTip" v-model="item.leftData" clearable>
            </el-input>
          </div>
        </el-col>
        <el-col :span="8" v-if="item.editStatus == true && index == 0">
          <div class="sinput">
            <el-input
              :placeholder="rightTip"
              v-model="item.rightData"
              clearable
            >
            </el-input>
          </div>
        </el-col>
        <el-col :span="4" v-if="item.editStatus == true && index == 0">
          <div>
            <el-button type="success" @click="addData()">保存</el-button>
            <el-button type="info" @click="cancleEditRow(index)"
              >取消</el-button
            >
          </div>
        </el-col>
        <!-- 不存在类别行内编辑 -->
        <el-col
          :span="8"
          :offset="4"
          v-if="item.editStatus == true && index > 0"
        >
          <div class="sinput">
            <el-input :placeholder="leftTip" v-model="item.leftData" clearable>
            </el-input>
          </div>
        </el-col>
        <el-col :span="8" v-if="item.editStatus == true && index > 0">
          <div class="sinput">
            <el-input
              :placeholder="rightTip"
              v-model="item.rightData"
              clearable
            >
            </el-input>
          </div>
        </el-col>
        <el-col :span="4" v-if="item.editStatus == true && index > 0">
          <div>
            <el-button type="success" @click="addData()">保存</el-button>
            <el-button type="info" @click="cancleEditRow(index)"
              >取消</el-button
            >
          </div>
        </el-col>
        <el-col
          :span="16"
          :offset="4"
          v-if="item.editStatus == true && isMultipleRows == true"
        >
          <div class="textarea">
            <el-input
              class="textarea"
              type="textarea"
              :rows="3"
              placeholder="经历"
              v-model="item.detail"
            >
            </el-input>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 无数据显示空 -->
    <el-row v-else>
      <el-col :span="4">
        <span class="title"> {{ infoType }} </span>
      </el-col>
      <el-col :span="16">
        <div class="content"><span class="point">•</span>空</div>
      </el-col>
      <el-col :span="4">
        <div>&nbsp;</div>
      </el-col>
    </el-row>

    <!-- 添加按钮 工作经历 -->
    <el-row v-if="isShowAddbtn == true">
      <el-col :span="16" :offset="4">
        <div class="plus" @click="openAddOpen()">
          <i class="fa fa-plus-circle fa"
            ><span class="plus__addTip">{{ addTip }}</span></i
          >
        </div>
      </el-col>
      <el-col :span="4">
        <div>&nbsp;</div>
      </el-col>
    </el-row>
    <el-row v-if="isShowAddInputData == true">
      <el-col :span="8" :offset="4">
        <div class="sinput">
          <el-input
            :placeholder="leftTip"
            v-model="tempData.leftData"
            clearable
          >
          </el-input>
        </div>
      </el-col>
      <el-col :span="8" v-if="isShowAddInputData == true">
        <div class="sinput">
          <el-input
            :placeholder="rightTip"
            v-model="tempData.rightData"
            clearable
          >
          </el-input>
        </div>
      </el-col>
      <el-col :span="4">
        <div>
          <el-button type="success" @click="addData()">保存</el-button>
          <el-button type="info" @click="cancleAdd()">取消</el-button>
        </div>
      </el-col>
      <el-col :span="16" :offset="4">
        <div
          class="textarea"
          v-if="isShowAddInputData == true && isMultipleRows == true"
        >
          <el-input
            class="textarea"
            type="textarea"
            :rows="3"
            placeholder="经历"
            v-model="tempData.detail"
          >
          </el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    readOnly: {
      type: Boolean,
      default: false
    },
    isMultipleRows: {
      type: Boolean,
      default: true
    },
    isShowAddbtn: {
      type: Boolean,
      default: true
    },
    isShowAddInput: {
      type: Boolean,
      default: false
    },
    infoType: {
      type: String,
      default: '类别'
    },
    leftTip: {
      type: String,
      default: '左提示'
    },
    rightTip: {
      type: String,
      default: '右提示'
    },
    addTip: {
      type: String,
      default: '添加按钮'
    }
  },
  data() {
    return {
      tempData: {
        leftData: 'QQ',
        rightData: '2505807508 ',
        detail: ''
      },
      isShowAddInputData: this.isShowAddInput,
      data: [
        {
          Id: 6,
          leftData: 'QQ',
          rightData: '2505807508 ',
          editStatus: false,
          detail:
            '，如果各位有兴趣了解魁地奇和巫师棋的话，我乐意效劳。家里藏书有《霍格沃茨：一段校史》、《游吟诗人比伯的故事》还有魔法部和格兰杰学姐推荐的《五年O.W.Ls三年模拟》。'
        },
        {
          Id: 7,
          leftData: '微信',
          rightData: '12346546456 ',
          editStatus: false,
          detail:
            '，如果各位有兴趣了解魁地奇和巫师棋的话，我乐意效劳。家里藏书有《霍格沃茨：一段校史》、《游吟诗人比伯的故事》还有魔法部和格兰杰学姐推荐的《五年O.W.Ls三年模拟》。'
        }
      ]
    }
  },
  components: {},
  mounted() {},
  methods: {
    openAddOpen() {
      this.data.forEach(item => (item.editStatus = false))
      this.isShowAddInputData = true
    },
    cancleAdd() {
      this.tempData.leftData = ''
      this.tempData.rightData = ''
      this.tempData.detail = ''
      this.isShowAddInputData = false
    },
    editRow(index) {
      this.data.forEach(item => (item.editStatus = false))
      this.cancleAdd()
      this.data[index].editStatus = true
    },
    cancleEditRow(index) {
      this.data[index].editStatus = false
    }
  }
}
</script>

<style lang="less" scoped>
.row {
  margin-bottom: 20px;
}
.detail {
  font-size: 12px;
  text-align: left;
  font-weight: 400;
  color: #383838;
  line-height: 18px;
  margin-left: 24px;
}
.point {
  margin-right: 18px;
}
.title {
  color: #111;
  font-weight: bold;
  text-align: right;
}
.content {
  text-align: left;
  position: relative;
  color: #111;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.content:hover {
  background-color: #c9c9c9;
}
.edit {
  position: absolute;
  right: 10px;
  color: white;
}
.textarea {
  margin-top: 20px;
}
.edit:hover {
  color: grey;
}
.del {
  position: absolute;
  right: 35px;
  color: white;
}
.del:hover {
  color: grey;
}
.plus {
  text-align: left;
  &__addTip {
    margin-left: 10px;
  }
}
.plus:hover {
  color: #0b800b;
}
.sinput {
  width: 70%;
  margin-top: 20px;
}
</style>
