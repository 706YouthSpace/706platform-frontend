<template>
  <div class="people">
    <div class="people__background">
      <div class="people__background__img__inner__author__header">
        <div class="block">
          <div class="block__shadow">
            <span class="block__shadow__item"> <i class="fa fa-edit fa"></i></span>
          </div>
          <img class="people__background__img__inner__author__header__img"
               src="@/assets/images/header.png" />
        </div>
      </div>
      <div class="people__background__inner">
        <div class="people__background__img">
          <div class="people__background__img__inner">
            <img src="@/assets/images/activities/activity_bg_1.png" />
            <activity-photo-uploader class="people__background__img__inner__upLoad">
              <svg-icon class="icon"
                        icon-class="upload" />
            </activity-photo-uploader>
            <router-link to='/people/introduction'>
              <CommBtn>完成编辑</CommBtn>
            </router-link>
          </div>
        </div>
      </div>
      <div class="people__content">
        <!-- 个人信息开始 -->
        <div class="people__content__name">{{people.name}}</div>
        <!-- 空白行 -->
        <el-row class="people__content__blank">
          <div>&nbsp;</div>
        </el-row>
        <!-- 编辑一句话描述 -->
        <el-row v-if="editStatus.description==false">
          <el-col :span="4">
            <div class="people__content__title">一句话描述</div>
          </el-col>
          <el-col :span="16">
            <div class="people__content__description"
                 @click="editDescription()">
              {{people.description}}</div>
          </el-col>
          <el-col :span="4">
            <span class="people__content__edit"
                  @click="editDescription()">
              <i class="fa fa-edit fa-2x"></i>
            </span>
            <div>
            </div>
          </el-col>
        </el-row>
        <!-- 编辑个人描述开始 -->
        <el-row v-else>
          <el-col :span="4">
            <div class="people__content__title">一句话描述</div>
          </el-col>
          <el-col :span="16">
            <div class="people__content__input">
              <el-input placeholder="请输入内容"
                        v-model="people.description"></el-input>
            </div>
          </el-col>
          <el-col :span="4">
            <div>
              <el-button type="success"
                         @click="saveDescription()">保存</el-button>
              <el-button type="info"
                         @click="cancleDescription()">取消</el-button>
            </div>
          </el-col>
        </el-row>
        <!-- 空白行 -->
        <el-row class="people__content__blank">
          <div>&nbsp;</div>
        </el-row>
        <!-- 编辑个人性别信息 -->
        <el-row>
          <el-col :span="4">
            <div class="people__content__title">性别</div>
          </el-col>
          <el-col :span="16"
                  class="people__content__gender">
            <el-radio v-model="gender"
                      fill="#090909"
                      label="1">女</el-radio>
            <el-radio v-model="gender"
                      label="2">男</el-radio>
            <el-radio v-model="gender"
                      label="3">其他</el-radio>
            <el-radio v-model="gender"
                      label="4">保密</el-radio>
          </el-col>
          <el-col :span="4">
            <div>
            </div>
          </el-col>
        </el-row>

        <!-- 空白行 -->
        <el-row class="people__content__blank">
          <div>&nbsp;</div>
        </el-row>
        <!-- 编辑自我介绍 -->
        <el-row v-if="editStatus.introduction==false">
          <el-col :span="4">
            <div class="people__content__title">自我介绍</div>
          </el-col>
          <el-col :span="16">
            <div class="people__content__introduction"
                 @click="editIntroduction()">
              {{people.introduction}}</div>
          </el-col>
          <el-col :span="4">
            <span class="people__content__edit"
                  @click="editIntroduction()">
              <i class="fa fa-edit fa-2x"></i>
            </span>
            <div>
            </div>
          </el-col>
        </el-row>
        <!-- 编辑自我介绍开始 -->
        <el-row v-else>
          <el-col :span="4">
            <div class="people__content__title">自我介绍</div>
          </el-col>
          <el-col :span="14">
            <div class="people__content__Linput">
              <ckeditor :editor="editor"
                        @ready="onEditorReady"
                        v-model="people.introduction"
                        :config="editorConfig">
              </ckeditor>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <el-button type="success"
                         @click="saveIntroduction()">保存</el-button>
              <el-button type="info"
                         @click="cancleIntroduction()">取消</el-button>
            </div>
          </el-col>
        </el-row>

        <el-divider class="people__content__divider"></el-divider>

        <!-- 编辑工作经历开始 -->
        <el-row>
          <el-col :span="4">
            <div class="people__content__title">工作经历</div>
          </el-col>
          <el-col :span="16"
                  class="item">
            <div class="people__content__position"><span class="people__content__point">•</span>{{workExperience[0].position}}&nbsp; &nbsp;
              &nbsp; &nbsp; {{workExperience[0].occupation}}
              <span class="people__content__del"> <i class="fa fa-times"
                   @click="delWorkExp(workExperience[0])"></i></span>
            </div>
          </el-col>
          <el-col :span="4">

            <div></div>
          </el-col>
          <el-col :span="16"
                  :offset="4">
            <div class="people__content__story">{{workExperience[0].story}}</div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp; </div>
          </el-col>
        </el-row>
        <!-- 无工作经历时显示空 -->
        <el-row v-if="this.workExperience.length==0">
          <el-col :span="4">
            <div class="people__content__title">工作经历</div>
          </el-col>
          <el-col :span="16">
            <div class="people__content__position"><span class="people__content__point">•</span>空&nbsp; &nbsp;
              &nbsp; &nbsp;</div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>

        <!-- 多条工作经历时 -->
        <el-row v-for="role in newWorkExperience"
                :key="role.Id">
          <el-col :span="16"
                  :offset="4">
            <div class="people__content__position"><span class="people__content__point">•</span>{{role.position}}&nbsp; &nbsp;
              &nbsp; &nbsp; {{role.occupation}}
              <span class="people__content__del"> <i class="fa fa-times"
                   @click="delWorkExp(role)"></i></span>
            </div>
          </el-col>
          <el-col :span="4"
                  class="people__content__del">
            <i class="fa fa-times"
               @click="delWorkExp(role)"></i>
            <div></div>
          </el-col>
          <el-col :span="16"
                  :offset="4">
            <div class="people__content__story">{{role.story}}</div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>

        <!-- 添加按钮 工作经历 -->
        <el-row v-if="editStatus.workExperience==false">
          <el-col :span="16"
                  :offset="4">
            <div class="people__content__plus"
                 @click="openWorkExperience()"><i class="fa fa-plus-circle fa"><span>添加工作经历</span></i></div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>
        <el-row v-else>
          <el-col :span="8"
                  :offset="4">
            <div class="people__content__sinput">
              <el-input placeholder="公司/项目"
                        v-model="tempData.position"
                        clearable>
              </el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="people__content__sinput">
              <el-input placeholder="职位"
                        v-model="tempData.occupation"
                        clearable>
              </el-input>
            </div>
          </el-col>
          <el-col :span="4">
            <div>
              <el-button type="success"
                         @click="addWorkExperience()">保存</el-button>
              <el-button type="info"
                         @click="cancleWorkExperience()">取消</el-button>
            </div>
          </el-col>
          <el-col :span="16"
                  :offset="4">
            <div class="people__content__textarea">
              <el-input type="textarea"
                        :rows="3"
                        placeholder="经历"
                        v-model="tempData.story">
              </el-input>
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
        <!-- 教育经历开始 -->
        <el-row v-if="educationExperience.length>0">
          <el-col :span="4">
            <div class="people__content__title">教育经历</div>
          </el-col>
          <el-col :span="16">
            <div class="people__content__education"><span class="people__content__point">•</span>&nbsp;&nbsp;{{educationExperience[0].education}}&nbsp;•
              {{educationExperience[0].professional}}</div>
          </el-col>
          <el-col :span="4"
                  class="people__content__del">
            <div> <i class="fa fa-times"></i></div>
          </el-col>
        </el-row>
        <!-- 无教育经历时显示空 -->
        <el-row v-else>
          <el-col :span="4">
            <div class="people__content__title">教育经历</div>
          </el-col>
          <el-col :span="16">
            <div class="people__content__education"><span class="people__content__point">•</span>空&nbsp; &nbsp;
              &nbsp; &nbsp;</div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>
        <!-- 多条教育经历时 -->
        <el-row v-for="item in newEducationExperiences"
                :key="item.Id">
          <el-col :span="16"
                  :offset="4">
            <div class="people__content__education"><span class="people__content__point">•</span>&nbsp;&nbsp;{{item.education}}&nbsp;•
              {{item.professional}}</div>
          </el-col>
          <el-col :span="4"
                  class="people__content__del">
            <div> <i class="fa fa-times"></i></div>
          </el-col>
        </el-row>

        <!-- 添加按钮 教育经历 -->
        <el-row v-if="editStatus.educationExperience==false">
          <el-col :span="16"
                  :offset="4">
            <div class="people__content__plus"
                 @click="openEducationExperiencee()"><i class="fa fa-plus-circle fa"><span>添加教育经历</span></i></div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>
        <el-row v-else>
          <el-col :span="8"
                  :offset="4">
            <div class="people__content__sinput">
              <el-input placeholder="学校"
                        v-model="tempData.education"
                        clearable>
              </el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="people__content__sinput">
              <el-input placeholder="专业"
                        v-model="tempData.professional"
                        clearable>
              </el-input>
            </div>
          </el-col>
          <el-col :span="4">
            <div>
              <el-button type="success"
                         @click="addEducationExperience()">保存</el-button>
              <el-button type="info"
                         @click="cancleEducationExperience()">取消</el-button>
            </div>
          </el-col>
        </el-row>

        <!-- 空白行 -->
        <el-row class="people__content__blank">
          <div>&nbsp;</div>
        </el-row>

        <!-- 现居住地开始 -->
        <el-row v-if="editStatus.residencePlace==false">
          <el-col :span="4">
            <div class="people__content__title">现居住地</div>
          </el-col>
          <el-col :span="16">
            <div class="people__content__residencePlace"
                 @click="openEditResidencePlace()">
              <span class="
                 people__content__point">•</span>&nbsp;&nbsp;{{residencePlace.city}}&nbsp;
              •{{residencePlace.region}}
            </div>
          </el-col>
          <el-col :span="4">
            <span class="people__content__reedit"
                  @click="openEditResidencePlace()"><i class="fa fa-edit fa-2x"></i></span>
            <div></div>
          </el-col>
        </el-row>
        <!-- 未填写显示空 -->
        <el-row v-else>
          <el-col :span="4">
            <div class="people__content__title">现居住地</div>
          </el-col>
          <el-col :span="8">
            <div class="people__content__sinput">
              <el-input placeholder="城市"
                        v-model="residencePlace.city"
                        clearable>
              </el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="people__content__sinput">
              <el-input placeholder="区域"
                        v-model="residencePlace.region"
                        clearable>
              </el-input>
            </div>
          </el-col>
          <el-col :span="4">
            <div>
              <div>
                <el-button type="success"
                           @click="editresidencePlace()">保存</el-button>
                <el-button type="info"
                           @click="cancleEditresidencePlace()">取消</el-button>
              </div>
            </div>
          </el-col>
        </el-row>

        <!-- 空白行 -->
        <el-row class="people__content__blank">
          <div>&nbsp;</div>
        </el-row>

        <!-- 社交账号开始 -->
        <el-row v-if="contactAccounts.length>0">
          <el-col :span="4">
            <div class="people__content__title">社交账号</div>
          </el-col>
          <el-col :span="16">
            <div class="people__content__account"><span class="people__content__point">•</span>{{contactAccounts[0].platform}}&nbsp; &nbsp;
              &nbsp; &nbsp; {{contactAccounts[0].account}}</div>
          </el-col>
          <el-col :span="4"
                  class="people__content__del">
            <div> <i class="fa fa-times"></i></div>
          </el-col>
        </el-row>
        <!-- 无社交账号时显示空 -->
        <el-row v-else>
          <el-col :span="4">
            <div class="people__content__title">社交账号</div>
          </el-col>
          <el-col :span="16">
            <div class="people__content__account"><span class="people__content__point">•</span>空&nbsp; &nbsp;
              &nbsp; &nbsp;</div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>
        <!-- 多条社交账号时 -->
        <el-row v-for="account in newContactAccounts"
                :key="account.Id">
          <el-col :span="16"
                  :offset="4">
            <div class="people__content__account"><span class="people__content__point">•</span>{{account.platform}}&nbsp; &nbsp;
              &nbsp; &nbsp; {{account.account}}</div>
          </el-col>
          <el-col :span="4"
                  class="people__content__del">
            <div> <i class="fa fa-times"></i></div>

          </el-col>
        </el-row>

        <!-- 添加按钮 社交账号 -->
        <el-row v-if="editStatus.contactAccount==false">
          <el-col :span="16"
                  :offset="4">
            <div class="people__content__plus"
                 @click="openContactAccount()"><i class="fa fa-plus-circle fa"><span>添加社交账号</span></i></div>
          </el-col>
          <el-col :span="4">
            <div>&nbsp;</div>
          </el-col>
        </el-row>
        <el-row v-else>
          <el-col :span="8"
                  :offset="4">
            <div class="people__content__sinput">
              <el-select v-model="tempData.platform"
                         placeholder="请选择">
                <el-option v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="people__content__sinput">
              <el-input placeholder="账号"
                        v-model="tempData.professional"
                        clearable>
              </el-input>
            </div>
          </el-col>
          <el-col :span="4">
            <div>
              <el-button type="success"
                         @click="addContactAccount()">保存</el-button>
              <el-button type="info"
                         @click="cancleContactAccount()">取消</el-button>
            </div>
          </el-col>
        </el-row>
        <!-- 空白行 -->
        <el-row class="people__content__blank">
          <div>&nbsp;</div>
        </el-row>

        <!-- 邀请人 -->
        <!-- 邀请人开始 -->
        <el-row>
          <el-col :span="4">
            <div class="people__content__title">邀请人</div>
          </el-col>
          <el-col :span="16">
            <div v-if="inviter.isExist==false"
                 class="people__content__plus">

              <InvitationBtn>添加邀请人</InvitationBtn>

              <!-- 添加邀请人 -->
            </div>
            <div v-else
                 class="people__content__inviter"><span class="people__content__point">•
              </span>{{inviter.name}}</div>
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import ActivityPhotoUploader from './components/ActivityPhotoUploader'
import CommBtn from '@/components/CommBtn'
import InvitationBtn from '@/components/InvitationBtn'

export default {
  name: 'PeopleIntroduction',
  components: { ActivityPhotoUploader, CommBtn, InvitationBtn },
  data () {
    return {
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
      },
      people: {
        name: '张三',
        introduction: '大家好，我是xxx，来自麻瓜家庭，不过父母之中可能有一人是巫师但没有披露。目前还没有接到霍格沃茨魔法学校的通知书，拥有一定的魔法才能，由于魔法部法律的约束不能向各位展示。家有一头鹰头马身有翼兽，魔杖有十又十四分之一英寸长，由紫杉木制成，内芯是一根独角兽的羽毛，守护神是一只天鹅。我认为我应该是格兰芬多的勇士。平时喜欢运动，下棋和读书，如果各位有兴趣了解魁地奇和巫师棋的话，我乐意效劳。家里藏书有《霍格沃茨：一段校史》、《游吟诗人比伯的故事》还有魔法部和格兰杰学姐推荐的《五年O.W.Ls三年模拟》。最后告诉大家，如果看见学校白天平白无故飞进一只猫头鹰的话，请尽快通知我，这很有可能是魔法学院晚来的给我的入学通知书，这对我很重要，谢谢（鞠躬）。',
        description: '发布者的描述信息',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.',
        time: '2020-05-06(周三) 21:00 ~ 2020-06-07(周五) 17:00 | 持续 30天',
        site: '广东 深圳 南山区华侨城创意文化园e6栋马兰戈尼培训中心'
      },
      gender: '1',
      workExperience: [
        {
          Id: 0,
          position: '项目1',
          occupation: '角色1 ',
          story: '大家好，我是xxx，来自麻瓜家庭，不过父母之中可能有一人是巫师但没有披露。目前还没有接到霍格沃茨魔法学校的通知书大家好，我是xxx，来自麻瓜家庭，不过父母之中可能有一人是巫师但没有披露。目前还没有接到霍格沃茨魔法学校的通知书'
        },
        {
          Id: 1,
          position: '项目2',
          occupation: '角色2',
          story: '大家好，我是，来自麻瓜家庭，不过父母之中可能有一人是巫师但没有披露。目前还没有接到霍格沃茨魔法学校的通知书大家好，我是xxx，来自麻瓜家庭，不过父母之中可能有一人是巫师但没有披露。目前还没有接到霍格沃茨魔法学校的通知书'
        },
        {
          Id: 2,
          position: '项目3',
          occupation: '角色',
          story: '大家好，我是，来自麻瓜家庭，不过父母之中可能有一人是巫师但没有披露。目前还没有接到霍格沃茨魔法学校的通知书大家好，我是xxx，来自麻瓜家庭，不过父母之中可能有一人是巫师但没有披露。目前还没有接到霍格沃茨魔法学校的通知书'
        }
      ],
      educationExperience: [
        {
          Id: 4,
          education: '翻斗大学',
          professional: '土豆专业 '
        }, {
          Id: 5,
          education: '翻斗大学研究生',
          professional: '土豆专业 '
        }
      ],
      residencePlace: {
        city: '北京',
        region: '海淀区'
      },
      contactAccounts: [{
        Id: 6,
        platform: 'QQ',
        account: '2505807508 '
      },
      {
        Id: 7,
        platform: '微信',
        account: '12346546456 '
      }, {
        Id: 8,
        platform: '即刻',
        account: '123336 '
      }],
      inviter: {
        isExist: false,
        name: '706生活空间',
        URL: ''
      },
      options: [{
        value: '电话',
        label: '电话'
      }, {
        value: '微信',
        label: '微信'
      }, {
        value: 'QQ',
        label: 'QQ'
      }, {
        value: 'FaceBook',
        label: 'FaceBook'
      }, {
        value: '领英',
        label: '领英'
      },
      {
        value: '微博',
        label: '微博'
      },
      {
        value: 'Steam',
        label: 'Steam'
      }],
      editStatus: {
        description: false,
        introduction: false,
        workExperience: false,
        educationExperience: false,
        residencePlace: false,
        contactAccount: false

      },
      tempData: {
        description: '',
        introduction: '',
        occupation: '',
        position: '',
        story: '',
        education: '',
        professional: '',
        city: '',
        region: '',
        platform: '',
        account: ''
      }
    }
  },
  methods: {
    cancleDescription () {
      this.people.description = this.tempData.description
      this.editStatus.description = false
    },
    editDescription () {
      this.tempData.description = this.people.description
      this.editStatus.description = true
    },
    saveDescription () {
      this.editStatus.description = false
    },
    cancleIntroduction () {
      this.people.introduction = this.tempData.introduction
      this.editStatus.introduction = false
    },
    editIntroduction () {
      this.tempData.introduction = this.people.introduction
      this.editStatus.introduction = true
    },
    saveIntroduction () {
      this.editStatus.introduction = false
    },
    cancleWorkExperience () {
      this.editStatus.workExperience = false
    },
    addWorkExperience () {
      if (this.tempData.position !== '' && this.tempData.occupation !== '' && this.tempData.story) {
        var jsonObj = {
          Id: this.workExperience.length,
          position: this.tempData.position,
          occupation: this.tempData.occupation,
          story: this.tempData.story
        }
        this.workExperience.push(jsonObj)
        this.editStatus.workExperience = false
      } else {
        this.$message.error('职位或活动、职位、经历不能为空')
      }
    },
    openWorkExperience () {
      this.tempData.story = ''
      this.tempData.position = ''
      this.tempData.occupation = ''
      this.editStatus.workExperience = true
    },
    delWorkExp (item) {
      this.$confirm('确定要删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.workExperience = this.workExperience.filter(x => x.Id !== item.Id)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    openEducationExperiencee () {
      this.editStatus.educationExperience = true
    },
    cancleEducationExperience () {
      this.editStatus.educationExperience = false
    },
    openEditResidencePlace () {
      this.tempData.city = this.residencePlace.city
      this.tempData.region = this.residencePlace.region
      this.editStatus.residencePlace = true
    },
    cancleEditresidencePlace () {
      this.residencePlace.city = this.tempData.city
      this.residencePlace.region = this.tempData.region
      this.editStatus.residencePlace = false
    },
    editresidencePlace () {
      this.tempData.residencePlace = this.people.residencePlace

      this.editStatus.residencePlace = false
    },
    openContactAccount () {
      this.editStatus.contactAccount = true
    },
    cancleContactAccount () {
      this.editStatus.contactAccount = false
    },
    addContactAccount () {
      this.editStatus.contactAccount = false
    }
  },
  computed: {
    newWorkExperience () {
      if (this.workExperience.length > 1) {
        return this.workExperience.slice(1)
      } else {
        return []
      }
    },
    newEducationExperiences () {
      if (this.educationExperience.length > 1) {
        return this.educationExperience.slice(1)
      } else {
        return []
      }
    },
    newContactAccounts () {
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
@import url("//at.alicdn.com/t/font_1223885_a68qqkvtjgr.css");
.iconfont {
  font-size: 24px;
}

.people {
  height: 100%;
  // 要问的 为什么要显示设置高度
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  &__author__header {
    position: absolute;
    display: flex;
    width: 183px;
    height: 183px;
    top: 280px;
    left: 512px;
  }
  &__inner {
    width: 1200px;
    margin: 0 auto;
  }
  &__background {
    position: relative;
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
        &__editBtn {
          position: absolute;
          bottom: 22px;
          right: 25px;
        }
        &__upLoad {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 60%;
          font-size: 100px;
          height: 100px;
          line-height: 100px;
          text-align: center;
          color: #d7d7d7;
          border-radius: 50%;
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
      text-align: center;
    }
    &__gender {
      text-align: left;
    }
    &__blank {
      height: 25px;
    }
    &__edit {
      color: grey;
      margin-top: 3px;
      line-height: 20px;
    }
    &__reedit {
      color: grey;
      margin-left: 15px;
      margin-top: 3px;
      line-height: 20px;
    }
    &__point {
      margin-right: 18px;
    }
    &__Linput {
      width: 800px;
    }
    &__name {
      font-size: 32px;
      font-weight: bold;
      color: #212121;
      line-height: 20px;
    }
    &__description {
      text-align: left;
      width: 0 auto;
      font-size: 14px;
      font-weight: 400;
      color: #383838;
      line-height: 24px;
    }
    &__description:hover {
      text-align: left;
      font-size: 14px;
      font-weight: 400;
      line-height: 40px;
      color: #383838;
      background-color: lightgray;
      line-height: 24px;
    }
    &__input {
      text-align: left;
      width: 560px;
      font-size: 14px;
      font-weight: 400;
      color: #383838;
      line-height: 24px;
    }
    &__introduction {
      margin-top: 24px;
      text-align: left;
      width: 80%;
      font-size: 14px;
      font-weight: 400;
      color: #383838;
      line-height: 24px;
    }
    &__introduction:hover {
      background-color: lightgray;
    }
    &__divider {
      margin-top: 35px;
    }
    &__position {
      text-align: left;
      color: #222222;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
    &__position:hover {
      background-color: lightgray;
    }
    &__education {
      text-align: left;
      color: #222222;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      margin-bottom: 20px;
    }
    &__story {
      margin-top: 5px;
      font-size: 12px;
      text-align: left;
      font-weight: 400;
      color: #383838;
      line-height: 18px;
      margin-left: 24px;
      margin-bottom: 20px;
    }
    &__residencePlace {
      text-align: left;
      color: #222222;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
    &__residencePlace:hover {
      text-align: left;
      color: #222222;
      background-color: lightgrey;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
    &__account {
      text-align: left;
      color: #222222;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 20px;
      line-height: 20px;
    }
    &__account:hover {
      background-color: #ddd;
    }
    &__plus {
      span {
        margin-left: 10px;
      }
      margin-top: 20px;
      text-align: left;
      color: #555;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
    &__plus:hover {
      color: #0b800b;
    }
    &__del {
      color: #fff;
      text-align: right;
      margin-left: 80%;
    }
    &__del :hover {
      color: #111;
    }

    &__input {
      width: 70%;
      margin-bottom: 10px;
    }
    &__sinput {
      width: 70%;
    }
    &__unverified {
      text-align: left;
      font-weight: 400;
      line-height: 20px;
    }
    &__textarea {
      margin-top: 11px;
      width: 85%;
    }
    &__inviter {
      text-align: left;
      color: #222222;
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
.block {
  position: relative;
}
.block__shadow {
  display: flex;
  align-items: center;
  position: absolute;
  width: 183px;
  height: 183px;
  border-radius: 50%;
  opacity: 0;
  background: rgba(0, 0, 0, 0.4);

  &__item {
    color: #fff;
    margin-left: 50%;
    transform: translateX(-50%);
  }
}

.block:hover .block__shadow {
  opacity: 1;
}
</style>
