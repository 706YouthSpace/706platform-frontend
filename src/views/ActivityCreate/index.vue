<template>
    <div class="post">
        <div class="post__inner">
            <activity-photo-uploader class="post__uploader">
                <svg-icon class="icon" icon-class="upload"/>
            </activity-photo-uploader>
            <div class="post__title">
                <textarea class="post__title__input"
                          rows="1"
                          :placeholder="`请输入标题（最多${title.limit}个字）`"
                          ref="titleInput"
                          v-model="title.value"
                          @input="handleTitleInput">
                </textarea>
                <p class="post__title__alert"
                   :class="{exceed: title.isExceed}">
                    {{`${title.value.length} / ${title.limit}`}}
                </p>
            </div>
            <ckeditor :editor="editor" @ready="onEditorReady" v-model="editorData" :config="editorConfig">
            </ckeditor>
            <el-form class="post__form" label-position="left" label-width="100px">
                <el-form-item v-show="attrsCheckStatus.form" class="post__item large" label="形式：">
                    <el-select v-model="baseInfo.form" placeholder="请选择">
                        <el-option v-for="form in formOptions"
                                   :key="form.value"
                                   :label="form.name"
                                   :value="form.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item v-show="attrsCheckStatus.time" class="post__item large" label="时间：">
                    <el-col :span="11">
                        <el-date-picker placeholder="选择开始时间" v-model="baseInfo.startTime"
                                        style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2" style="text-align: center">——</el-col>
                    <el-col :span="11">
                        <el-date-picker placeholder="选择结束时间" v-model="baseInfo.endTime"
                                        style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item v-show="attrsCheckStatus.site" class="post__item large" label="地点：">
                    <el-input v-model="baseInfo.site" placeholder="请输入活动地点"/>
                </el-form-item>
                <el-form-item v-show="attrsCheckStatus.series" class="post__item large" label="活动类型：">
                    <el-radio-group v-model="baseInfo.type">
                        <el-radio-button label="0">系列大纲</el-radio-button>
                        <el-radio-button label="1">系列子项</el-radio-button>
                    </el-radio-group>
                    <template v-if="baseInfo.type == '0'">
                        <div v-for="(activity, index) in childActivities"
                             :key="activity.id" class="post__activity__item">
                            <el-select v-model="activity.id"
                                       remote
                                       filterable
                                       :remote-method="getChildActivity">
                                <el-option v-for="option in childActivityOptions"
                                           :key="option.id"
                                           :label="option.name"
                                           :value="option.id">
                                </el-option>
                            </el-select>
                            <div class="bin" @click="childActivities.splice(index, 1)">
                                <svg-icon class="icon" icon-class="bin"></svg-icon>
                            </div>
                        </div>
                        <div class="post__activity__item">
                            <el-button @click="childActivities.push({id: ''})">
                                添加已有自活动
                            </el-button>
                            <el-button @click="handleCreateActivityClick">
                                创建系列子活动
                            </el-button>
                        </div>
                    </template>
                    <el-select v-else class="post__activity__item"
                               v-model="fatherActivity.value"
                               clearable
                               placeholder="请选择活动大纲"
                               remote
                               filterable
                               :remote-method="getFatherActivity">
                        <el-option v-for="option in fatherActivity.options"
                                   :key="option.id"
                                   :label="option.name"
                                   :value="option.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item v-show="attrsCheckStatus.pay" class="post__item large" label="报名：">
                    <el-form-item class="post__item large" label="方式：">
                        <el-select v-model="baseInfo.payMethod">
                            <el-option v-for="pay in payOptions"
                                       :key="pay.value"
                                       :label="pay.name"
                                       :value="pay.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item class="post__item" label="最大人数：">
                        <el-input v-model="baseInfo.participantMaxNum" placeholder="请输入最大人数（默认不限人数）"/>
                    </el-form-item>
                    <el-form-item class="post__item align-right" label="最小人数：">
                        <el-input v-model="baseInfo.participantMinNum" placeholder="请输入最小人数（默认为 0）"/>
                    </el-form-item>
                    <el-form-item class="post__item large" label="门票：">
                        <div class="post__ticket">
                            <div class="post__ticket__item"
                                 v-for="(ticket, index) in tickets"
                                 :key="index">
                                <div class="post__ticket__item__inner">
                                    <el-checkbox v-model="ticket.checked"></el-checkbox>
                                    <template v-if="ticket.editable">
                                        <div class="post__ticket__name">
                                            <input placeholder="点击输入票种" v-model="ticket.name"/>
                                        </div>
                                        ¥
                                        <div class="post__ticket__price">
                                            <input placeholder="点击输入价格" v-model="ticket.value"/>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <p class="post__ticket__name">{{ticket.name}}</p>
                                        ¥
                                        <div class="post__ticket__price">
                                            <input placeholder="点击输入价格" v-model="ticket.value"/>
                                        </div>
                                    </template>
                                </div>
                                <div class="bin"
                                     v-if="ticket.editable"
                                     @click="tickets.splice(index, 1)">
                                    <svg-icon class="icon plus" icon-class="bin"/>
                                </div>
                                <div class="bin" v-else>
                                </div>
                            </div>
                        </div>
                        <div class="post__ticket post__ticket__add"
                             @click="tickets.push({name: '',value: '', editable: true, checked: false})">
                            <svg-icon class="icon plus" icon-class="plus"/>
                            添加自定义门票
                        </div>
                    </el-form-item>
                </el-form-item>
                <el-form-item>
                    <div class="post__attributes-control">
                        <p>勾选增加详细信息</p>
                        <el-checkbox v-for="(attr, index) in customAttributes"
                                     :key="index"
                                     v-model="attr.checked">
                            {{attr.name}}
                        </el-checkbox>
                    </div>
                </el-form-item>
            </el-form>
            <div class="post__control">
                <el-button>预览</el-button>
                <el-button>保存</el-button>
                <el-button type="success">发布</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import ActivityPhotoUploader from './components/ActivityPhotoUploader'

export default {
  name: 'publish',
  components: {
    ActivityPhotoUploader
  },
  data () {
    return {
      title: {
        value: '',
        limit: 50,
        isExceed: false
      },
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
      },
      baseInfo: {
        form: '',
        startTime: '',
        endTime: '',
        type: '0',
        site: '',
        payMethod: '',
        participantMaxNum: '',
        participantMinNum: ''
      },
      formOptions: [
        {
          name: '讲座沙龙',
          value: 1
        }, {
          name: '圆桌讨论',
          value: 2
        }
      ],
      payOptions: [
        {
          name: '本平台报名',
          value: 1
        }, {
          name: '其他平台报名',
          value: 2
        }
      ],
      childActivities: [
        {
          id: 0
        }
      ],
      childActivityOptions: [
        {
          id: 0,
          name: '0.测试',
          url: 'https://baidu.com'
        },
        {
          id: 1,
          name: '1.迈向星空（一）：空间与时间',
          url: 'https://baidu.com'
        },
        {
          id: 2,
          name: '2.迈向星空（二）：未来与过去',
          url: 'https://baidu.com'
        }
      ],
      fatherActivity: {
        value: '',
        options: [
          {
            id: 1,
            name: '宇宙新青年'
          }, {
            id: 2,
            name: '共享客厅'
          }
        ]
      },
      tickets: [
        {
          name: '标准票',
          value: '',
          checked: true,
          editable: false
        }, {
          name: '学生票',
          value: '',
          checked: true,
          editable: false
        }, {
          name: '会员票',
          value: '',
          checked: true,
          editable: false
        }, {
          name: '终身会员',
          value: '',
          checked: true,
          editable: false
        }, {
          name: '测试',
          value: '',
          checked: true,
          editable: true
        }
      ],
      customAttributes: [
        {
          name: '摘要',
          prop: 'summary',
          checked: true
        }, {
          name: '时间',
          prop: 'time',
          checked: true
        }, {
          name: '地点',
          prop: 'site',
          checked: true
        }, {
          name: '形式',
          prop: 'form',
          checked: true
        }, {
          name: '报名',
          prop: 'pay',
          checked: true
        }, {
          name: '系列',
          prop: 'series',
          checked: true
        }, {
          name: '学科领域',
          prop: 'area',
          checked: true
        }, {
          name: '标签',
          prop: 'label',
          checked: true
        }, {
          name: '主办方',
          prop: 'host',
          checked: true
        }, {
          name: '赞助方',
          prop: 'sponsor',
          checked: true
        }, {
          name: '开启赞赏',
          prop: 'reward',
          checked: true
        }
      ]
    }
  },
  computed: {
    attrsCheckStatus: function () {
      const result = {}
      this.customAttributes.forEach(v => {
        result[v.prop] = v.checked
      })
      return result
    }
  },
  methods: {
    handleTitleInput (ele) {
      const value = ele.target.value
      if (value.length > this.title.limit) {
        this.title.value = value.slice(0, this.title.limit)
      }
      this.$nextTick(() => {
        this.$refs.titleInput.style.height = 'auto'
        this.$refs.titleInput.style.height = this.$refs.titleInput.scrollHeight + 'px'
      })
    },
    onEditorReady (editor) {
      console.log(editor)
    },
    handleCreateActivityClick () {
      this.$confirm('即将保存正在编辑的系列大纲，并前往新的页面编辑系列子项', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const url = location.href
        window.open(url)
      }).catch(() => {
      })
    },
    getChildActivity (query) {
      if (query === '') {
        return
      }
      setTimeout(() => {
        this.childActivityOptions = [
          {
            id: 1,
            name: '1.迈向星空（一）：空间与时间',
            url: 'https://baidu.com'
          }
        ]
      })
    },
    getFatherActivity (query) {
      if (query === '') {
        return
      }
      setTimeout(() => {
        this.fatherActivity.options = [
          {
            id: 2,
            name: '共享客厅'
          }
        ]
      })
    }
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

        &__uploader {
            width: 100%;
            font-size: 100px;
            height: 300px;
            line-height: 300px;
            text-align: center;
            color: #d7d7d7;
            background: #f2f2f2;
            border-radius: 5px;
        }

        &__title {
            position: relative;
            margin: 20px 0;
            padding-bottom: 20px;

            &__input {
                width: 100%;
                color: #1a1a1a;
                font-size: 32px;
                font-weight: bold;
                line-height: 1.4;
                border: none;
                outline: none;
                resize: none;
            }

            &__alert {
                position: absolute;
                right: 10px;
                bottom: 10px;
                font-size: 13px;
                line-height: 15px;
                color: #7d7d7b;
                text-align: right;
            }
        }

        &__form {
            margin-top: 30px;
        }

        &__item {
            display: inline-block;
            width: 50%;
            box-sizing: border-box;

            &.large {
                width: 100%;
            }

            &.align-right {
                /deep/ .el-form-item__label {
                    text-align: right;
                }
            }

            & /deep/ .el-select {
                width: 100%;
            }
        }

        /deep/ .el-form-item .el-form-item {
            margin-bottom: 20px;
        }

        &__activity {
            &__item {
                display: flex;

                &:nth-child(n+2) {
                    margin-top: 20px;
                }

                .bin {
                    color: red;
                    cursor: pointer;
                }

                .icon {
                    margin-left: 10px;
                }
            }

            &__name {
                flex: 1;
            }
        }

        &__ticket {
            width: 50%;
            margin-bottom: 10px;

            &__item {
                width: 100%;
                display: flex;
                align-items: center;
                margin-bottom: 20px;
                box-sizing: border-box;

                &__inner {
                    display: flex;
                    width: 100%;
                    padding-left: 10px;
                    align-items: center;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                }

                .bin {
                    width: 24px;
                    color: red;
                    cursor: pointer;
                }
            }

            &__name, &__price {
                flex: 1 1;
                padding: 5px 10px;
                line-height: 40px;

                & > input {
                    display: block;
                    width: 100%;
                    height: 40px;
                    box-sizing: border-box;
                    border: none;
                    outline: none;
                    padding: 5px 10px;
                    color: #606266;
                }
            }

            &__add {
                justify-content: center;
                font-size: 12px;
                cursor: pointer;

                .icon {
                    font-size: 10px;
                    margin-right: 10px;
                }

                &:hover {
                    font-weight: bold;
                }
            }

            .icon {
                font-size: 14px;
                margin-left: 10px;
            }
        }

        &__attributes-control {
            border: 1px solid #ddd;
            border-radius: 3px;
            padding: 10px 20px;
        }

        &__control {
            margin-top: 30px;
            text-align: center;
        }

        & /deep/ .ck-editor__editable {
            min-height: 400px;
        }
    }
</style>
