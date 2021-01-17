<template>
  <div class="people">
    <div class="people__background">
      <div class="people__background__img__inner__author__header">
        <img
          class="people__background__img__inner__author__header__img"
          src="@/assets/images/header.png"
        />
      </div>
      <div class="people__background__inner">
        <div class="people__background__img">
          <div class="people__background__img__inner">
            <img src="@/assets/images/activities/activity_bg_1.png" />
            <!--TODO:这个按钮应该写在下面 -->
            <router-link to="/people/edit">
              <CommBtn>编辑个人信息</CommBtn>
            </router-link>
          </div>
        </div>
      </div>

      <div class="people__content">
        <!-- 个人信息开始 -->
        <div class="people__content__name">{{ people.name }}</div>
        <div class="people__content__description">{{ people.description }}</div>
        <div class="people__content__introduction">
          {{ people.introduction }}
        </div>
        <el-divider class="people__content__divider"></el-divider>
        <!-- 工作经历开始 -->
        <el-row v-if="workExperience.length > 0">
          <el-col :span="4">
            <span @click="getTest(1)" class="people__content__title">
              工作经历
            </span>
          </el-col>
          <el-col :span="16">
            <div class="people__content__position">
              <span class="people__content__point">•</span
              >{{ workExperience[0].position }}&nbsp; &nbsp; &nbsp; &nbsp;
              {{ workExperience[0].occupation }}
            </div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>
        <el-row v-if="workExperience.length > 0">
          <el-col :span="16" :offset="4">
            <div class="people__content__story">
              {{ workExperience[0].story }}
            </div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>
        <!-- 无工作经历时显示空 -->
        <el-row v-else>
          <el-col :span="4">
            <div class="people__content__title">工作经历</div>
          </el-col>
          <el-col :span="16">
            <div class="people__content__position">
              <span class="people__content__point">•</span>空&nbsp; &nbsp;
              &nbsp; &nbsp;
            </div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>
        <!-- 多条工作经历时 -->
        <el-row v-for="role in newWorkExperience" :key="role.Id">
          <el-col :span="16" :offset="4">
            <div class="people__content__position">
              <span class="people__content__point">•</span
              >{{ role.position }}&nbsp; &nbsp; &nbsp; &nbsp;
              {{ role.occupation }}
            </div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
          <el-col :span="16" :offset="4">
            <div class="people__content__story">{{ role.story }}</div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>
        <!-- 空白行 -->
        <el-row class="people__content__blank">
          <div>&nbsp;</div>
        </el-row>
        <!-- 教育经历开始 -->
        <el-row v-if="educationExperience.length > 0">
          <el-col :span="4">
            <span class="people__content__title"> 教育经历 </span>
          </el-col>
          <el-col :span="16">
            <div class="people__content__education">
              <span class="people__content__point">•</span>&nbsp;&nbsp;{{
                educationExperience[0].education
              }}&nbsp;• {{ educationExperience[0].professional }}
            </div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>
        <!-- 无教育经历时显示空 -->
        <el-row v-else>
          <el-col :span="4">
            <span class="people__content__title"> 教育经历 </span>
          </el-col>
          <el-col :span="16">
            <div class="people__content__education">
              <span class="people__content__point">•</span>空&nbsp; &nbsp;
              &nbsp; &nbsp;
            </div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>
        <!-- 多条教育经历时 -->
        <el-row v-for="item in newEducationExperiences" :key="item.Id">
          <el-col :span="16" :offset="4">
            <div class="people__content__education">
              <span class="people__content__point">•</span>&nbsp;&nbsp;{{
                item.education
              }}&nbsp;• {{ item.professional }}
            </div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>

        <!-- 空白行 -->
        <el-row class="people__content__blank">
          <div>&nbsp;</div>
        </el-row>

        <!-- 现居住地开始 -->
        <el-row v-if="educationExperience.length > 0">
          <el-col :span="4">
            <span class="people__content__title"> 现居住地 </span>
          </el-col>
          <el-col :span="16">
            <div class="people__content__residencePlace">
              <span class="people__content__point">•</span>&nbsp;&nbsp;{{
                residencePlace.city
              }}&nbsp; •{{ residencePlace.region }}
            </div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>
        <!-- 未填写显示空 -->
        <el-row v-else>
          <el-col :span="4">
            <span class="people__content__title"> 现居住地 </span>
          </el-col>
          <el-col :span="16">
            <div class="people__content__residencePlace">
              <span class="people__content__point">•</span>空&nbsp; &nbsp;
              &nbsp; &nbsp;
            </div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>

        <!-- 空白行 -->
        <el-row class="people__content__blank">
          <div>&nbsp;</div>
        </el-row>

        <!-- 社交账号开始 -->
        <el-row v-if="contactAccounts.length > 0">
          <el-col :span="4">
            <span class="people__content__title"> 社交账号 </span>
          </el-col>
          <el-col :span="16">
            <div class="people__content__account">
              <span class="people__content__point">•</span
              >{{ contactAccounts[0].platform }}&nbsp; &nbsp; &nbsp; &nbsp;
              {{ contactAccounts[0].account }}
            </div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>
        <!-- 无社交账号时显示空 -->
        <el-row v-else>
          <el-col :span="4">
            <span class="people__content__title"> 社交账号 </span>
          </el-col>
          <el-col :span="16">
            <div class="people__content__account">
              <span class="people__content__point">•</span>空&nbsp; &nbsp;
              &nbsp; &nbsp;
            </div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>
        <!-- 多条社交账号时 -->
        <el-row v-for="account in newContactAccounts" :key="account.Id">
          <el-col :span="16" :offset="4">
            <div class="people__content__account">
              <span class="people__content__point">•</span
              >{{ account.platform }}&nbsp; &nbsp; &nbsp; &nbsp;
              {{ account.account }}
            </div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>
        <!-- 空白行 -->
        <el-row class="people__content__blank">
          <div>&nbsp;</div>
        </el-row>
        <DisplayBoard><span slot="center">•</span></DisplayBoard>
        <!-- 邀请人 -->
        <!-- 邀请人开始 -->
        <el-row>
          <el-col :span="4">
            <span class="people__content__title">
              <!-- TODO:如何居右以及DIV的css不生效 -->
              邀请人
            </span>
          </el-col>
          <el-col :span="16">
            <div v-if="inviter.isExist == false" class="people__content__plus">
              <span class="people__content__point">
                <InvitationBtn>添加邀请人</InvitationBtn>
              </span>
              <!-- 添加邀请人 -->
            </div>
            <div v-else class="people__content__inviter">
              <span class="people__content__point">• </span>{{ inviter.name }}
            </div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import CommBtn from '@/components/CommBtn'
import InvitationBtn from '@/components/InvitationBtn'
import DisplayBoard from '@/components/People/DisplayBoard'

import { getProfile, signIn } from '@/http/people'

export default {
  name: 'PeopleIntroduction',
  components: { InvitationBtn, CommBtn, DisplayBoard },
  data() {
    return {
      people: {
        name: '张三',
        introduction:
          '大家好，我是xxx，来自麻瓜家庭，不过父母之中可能有一人是巫师但没有披露。目前还没有接到霍格沃茨魔法学校的通知书，拥有一定的魔法才能，由于魔法部法律的约束不能向各位展示。家有一头鹰头马身有翼兽，魔杖有十又十四分之一英寸长，由紫杉木制成，内芯是一根独角兽的羽毛，守护神是一只天鹅。我认为我应该是格兰芬多的勇士。平时喜欢运动，下棋和读书，如果各位有兴趣了解魁地奇和巫师棋的话，我乐意效劳。家里藏书有《霍格沃茨：一段校史》、《游吟诗人比伯的故事》还有魔法部和格兰杰学姐推荐的《五年O.W.Ls三年模拟》。最后告诉大家，如果看见学校白天平白无故飞进一只猫头鹰的话，请尽快通知我，这很有可能是魔法学院晚来的给我的入学通知书，这对我很重要，谢谢（鞠躬）。',
        description: '发布者的描述信息',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.',
        time: '2020-05-06(周三) 21:00 ~ 2020-06-07(周五) 17:00 | 持续 30天',
        site: '广东 深圳 南山区华侨城创意文化园e6栋马兰戈尼培训中心'
      },
      workExperience: [
        {
          Id: 1,
          position: '项目1',
          occupation: '角色1 ',
          story:
            '大家好，我是xxx，来自麻瓜家庭，不过父母之中可能有一人是巫师但没有披露。目前还没有接到霍格沃茨魔法学校的通知书大家好，我是xxx，来自麻瓜家庭，不过父母之中可能有一人是巫师但没有披露。目前还没有接到霍格沃茨魔法学校的通知书'
        },
        {
          Id: 2,
          position: '项目2',
          occupation: '角色2',
          story:
            '大家好，我是，来自麻瓜家庭，不过父母之中可能有一人是巫师但没有披露。目前还没有接到霍格沃茨魔法学校的通知书大家好，我是xxx，来自麻瓜家庭，不过父母之中可能有一人是巫师但没有披露。目前还没有接到霍格沃茨魔法学校的通知书'
        },
        {
          Id: 3,
          position: '项目3',
          occupation: '角色',
          story:
            '大家好，我是，来自麻瓜家庭，不过父母之中可能有一人是巫师但没有披露。目前还没有接到霍格沃茨魔法学校的通知书大家好，我是xxx，来自麻瓜家庭，不过父母之中可能有一人是巫师但没有披露。目前还没有接到霍格沃茨魔法学校的通知书'
        }
      ],
      educationExperience: [
        {
          Id: 4,
          education: '翻斗大学',
          professional: '土豆专业 '
        },
        {
          Id: 5,
          education: '翻斗大学研究生',
          professional: '土豆专业 '
        }
      ],
      residencePlace: {
        city: '北京',
        region: '海淀区'
      },
      contactAccounts: [
        {
          Id: 6,
          platform: 'QQ',
          account: '2505807508 '
        },
        {
          Id: 7,
          platform: '微信',
          account: '12346546456 '
        },
        {
          Id: 8,
          platform: '即刻',
          account: '123336 '
        }
      ],
      inviter: {
        isExist: false,
        name: '706生活空间',
        URL: ''
      }
    }
  },
  created: function() {
    var id = this.$route.params
    var data = this._data
    console.log(id.id)
    getProfile(id.id).then(res => {
      console.log(res)
      var resData = res.data
      data.people.name = resData.firstName + resData.lastName
      data.people.description = resData.description
      // data.people.name=res.data.
    })
  },
  methods: {
    getTest(id) {
      console.log('登入尝试')
      var loginData = {
        username: 'guest@example.com',
        password: 'guest'
      }
      signIn(loginData).then(res => {
        console.log(res)
      })
    }
  },
  computed: {
    newWorkExperience() {
      if (this.workExperience.length > 1) {
        return this.workExperience.slice(1)
      } else {
        return []
      }
    },
    newEducationExperiences() {
      if (this.educationExperience.length > 1) {
        return this.educationExperience.slice(1)
      } else {
        return []
      }
    },
    newContactAccounts() {
      if (this.contactAccounts.length > 1) {
        return this.contactAccounts.slice(1)
      } else {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.people {
  height: 100%;
  // 要问的 为什么要显示设置高度
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  &__inner {
    width: 100%;
    margin: 0 auto;
  }
  &__background {
    position: relative;
    width: 100%;
    height: 450px;
    &__img {
      height: 450px;
      width: 100%;
      &__inner {
        height: 450px;
        img {
          height: 450px;
          width: 100%;
          object-fit: cover;
          z-index: 100;
        }
        &__author__header {
          position: absolute;
          bottom: -18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 192px;
          height: 192px;
          border-radius: 50%;
          background-color: #fff;
          &__img {
            width: 183px;
            bottom: -18px;
            height: 183px;
            border-radius: 50%;
            z-index: 100;
          }
        }
      }
    }
  }
  &__content {
    text-align: center;
    padding-top: 27px;
    &__title {
      color: #111;
      font-weight: bold;
      text-align: right;
    }

    &__blank {
      height: 25px;
    }
    &__point {
      margin-right: 18px;
    }
    &__name {
      font-size: 32px;
      margin-top: 10px;
      font-weight: bold;
      color: #111;
      line-height: 20px;
    }
    &__description {
      margin-top: 25px;
      font-size: 16px;
      font-weight: 400;
      color: #111;
      line-height: 20px;
    }
    &__introduction {
      padding-top: 20px;
      text-align: left;
      width: 80%;
      margin: 0 auto;
      font-size: 14px;
      font-weight: 400;
      color: #383838;
      line-height: 24px;
    }
    &__divider {
      margin-top: 35px;
    }
    &__position {
      text-align: left;
      color: #111;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
    &__education {
      text-align: left;
      color: #111;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      margin-bottom: 20px;
    }
    &__story {
      margin-top: 5px;
      font-size: 14px;
      text-align: left;
      font-weight: 400;
      color: #727272;
      line-height: 18px;
      margin-left: 24px;
      margin-bottom: 20px;
    }
    &__residencePlace {
      text-align: left;
      color: #111;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
    &__account {
      text-align: left;
      color: #111;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 20px;
      line-height: 20px;
    }
    &__account:hover {
      text-align: left;
      color: #111;
      background-color: #ddd;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 20px;
      line-height: 20px;
    }
    &__unverified {
      text-align: left;
      color: #027db4;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
    &__inviter {
      text-align: left;
      color: #111;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
  }
  &__article {
    margin: 10px 0;
  }

  &__info {
    &__item {
      display: flex;
      font-size: 16px;
    }
  }
}
</style>
