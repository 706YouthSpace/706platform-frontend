<template>
  <div class="reg">
    <h1>生活实验室</h1>
    <ul class="list">
      <li
        class="item"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="item-image">
          <img :src="item.img" alt="实验室图片" />
        </div>
        <div class="item-content">
          <div class="item-title">
            <p class="title">{{item.title}}</p>
          </div>

          <ul class="item-desc">
            <li class="desc-detail" v-for="(content, index) in item.desc" :key="index">{{ content }}</li>
          </ul>
          <div class="placeholder" />
         <p class="price" v-if="!!item.price">{{ item.price }}</p>
          <p class="address">{{ item.address }}</p>
          <div class="footer">
            <ul>
              <li v-for="(tag, index) in item.tags" :key="index" class="tag" :style="{ backgroundColor: getRandomColor() }">
                {{ tag }}
              </li>
            </ul>
            <a  v-if="!!item.link" :href="item.link.href" class="link" target="_blank">{{ item.link.name  }}</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      list: [
        {
          img: require('@/assets/images/LifeLab/hangzhou_1.png'),
          title: '706杭州生活实验室1.0',
          address: '杭州市拱墅区莫干山路969号蓝钻天成（和睦地铁口，5/10号线）',
          desc: [
            '这个是706在杭州最早的一个生活实验室，起源于2020年疫情期间，当时一帮滞留在国内的留学生参考过去北京706生活实验室的模式在杭州拱墅区和睦一幢商务公寓落地了第一个点。',
            '这个生活实验室，接纳了来来往往各种不同身份、性格与观点的住客。一起在深夜上过网课，躺在沙发上和暖黄色的灯光下开启无底洞般关于留学经历和世界观的对话。在杭州最美好的秋天一起去满觉陇爬山赏桂花，呼吸甜蜜清新的空气，吃上天竺口口相传的特色菜。围成一个圈接受过The World记者的采访，也围成一个圈吃烧烤追《沉默的真相》。',
            '他们开会分工，决定实验室可见未来里的大小事宜，一起跨年，在1月1日零点聊理想与人生、诗歌与远方。也曾在小客厅里弹吉他唱歌、分享最爱的歌单和背后的故事。他们还举办了大大小小的客厅分享活动，在小小的客厅里碰撞着对性别议题、哲学问题的思考。'
          ],
          price: '1000-1500元/月',
          tags: [
            '5个空房间',
            '长租',
            '沙发服务',
            '即日起租'
          ]
        },
        {
          img: require('@/assets/images/LifeLab/hangzhou_2.jpg'),
          title: '706杭州生活实验室2.0 ',
          address: '杭州市锦昌文华苑小区',
          desc: [
            '命运的微风将我们吹落此地，目前长势良好',
            '一群陌生年轻人相聚，组成了新的家庭，他们称这个家为“微风之地”。愿生活永远如明媚五月，窗外微风鸟鸣，窗前大树绿意摇曳，客厅里曼妙悠扬旋律，人谈笑风生——这是微风之地——也不是，“微风之地”在我们这里象征一种美好，是爱，是美，是理想生活。愿每个人都有自己的微风之地。'
          ],
          tags: [
            '130㎡',
            '4室1厅',
            '露天阳台'
          ]
        },
        {
          img: require('@/assets/images/LifeLab/hangzhou_4.jpg'),
          title: '706杭州生活实验室4.0',
          address: '杭州市锦昌文华苑小区',
          desc: [
            '在高压内卷的都市大厦，抵抗物理或精神意义上的鸽子笼、拒绝两点一线的班味生活，似乎已同时成为青年人的刚需与奢望。时代的推搡如何破局？微渺的个体如何自处？在这个夏末的杭州，我们希望于闹市中寻找一处自由的实验场，探索有趣与未知，探索新的居住体验，探索生活与一切我们热爱的事物的结合方式——',
            '人文艺术、科技创新、事业成长……或是亲密的友情。',
            '在原子形态的社会里彼此相爱相助，在摇摆多元的思潮中构筑精神家园，当小小的房间和客厅可以带给你关于“家”的温暖体验，希望“回家”这件事可以变成你美好生活中的一部分期待。'
          ],
          price: '1000-2500元/月',
          tags: [
            '招募长租室友',
            '200㎡',
            '4室2厅',
            '大客厅',
            '大厨房',
            '露天阳台'
          ],
          link: {
            name: '招募链接',
            href: 'https://mp.weixin.qq.com/s/HaUom_FR9XJSKp3fWbbzRQ'
          }
        },
        {
          img: require('@/assets/images/LifeLab/guangzhou_3.jpg'),
          title: '706广州生活实验室3.0·六榕寺',
          desc: [
            '时隔两年，将中断了两年的706广州生活实验室项目再次启动，多少带有一点复杂情结。作为曾经的生活实验室共创者和开放客厅独立实践者，我坚信人与人的美好相处可以产生极强的能量和行动力。',
            '在时代逆流中，我们需要同行者、结伴者，在某个时刻，他们或推、或拉，都可以构成你行动的力量。而共居所构筑的小共同体、所建立的微观团结，更是一种抵抗的艺术——在共居空间中，我们互享喜怒哀乐，交流智识所思，我们都不再是风雨中摇曳的一叶扁舟。当然，你可以在自由的独处中享受自己的发呆时刻。',
            '但亲爱的朋友们，我想说，共居不是目地，而是起点和过程；不是工具，而是探索和方法。它需要彼此之间有一套可以互通互鉴的底层逻辑和价值共识，我们需要从共居出发，去寻得和建设各自在这个空间、乃至这个世界和社会中的恰当位置。它可以是寒冬凛冽下的抱薪取暖，但不希望它被如此塑造的虚假温暖所束缚而陷入某种舒适区。'
          ],
          address: '广州市中山六路六榕寺附近，近2号线中山纪念堂/1号线公园前地铁站',
          price: '39元/天（含水电气）',
          tags: [
            '4室1厅',
            '大客厅',
            '交通便利',
            '采光极佳'
          ]
        },
        {
          img: require('@/assets/images/LifeLab/shenzhen_1.jpg'),
          title: '706深圳生活实验室南山1.0·万象村',
          desc: [
            '我们希望以居住空间，开放客厅的基础，在【深圳南山区班味最重的区域】创造一个以人文精神为基底的精神生活社区，我们不仅仅可以吃饭运动，娱乐生活，还可以一起阅读探讨，深度交流一些与自己人生息息相关又平时不太了解的话题，我们希望能脱离日常又进入日常，通过看到他人，深度对话，在深圳找片文化沙漠，创造出一些有趣有益的精神生活。当然前提是如果你也认同，人的生存是需要意义的。',
            '在706生活实验室，它不仅仅是城市居住方式，它还相关于“生活”、关于“生活的实验”，我们会基于706社区共同创造实验性的生活附近共同体，自治（共治）、开放、平等、有爱、联结，重视人的价值，重视人的自我成长和自我实现是我们非常重视的理念。',
            '我们不欢迎，强烈的自我为中心主义者、不尊重他人边界者、忽略他人感受者。'
          ],
          address: '深圳市英伦名苑一期二层顶层（6楼步梯）',
          price: '3250元/月（长租&单间）｜ 60-120元/月（短租）',
          tags: [
            '250+㎡',
            '大客厅',
            '交通便利',
            '采光极佳'
          ]
        },
        {
          img: require('@/assets/images/LifeLab/shanghai_1_1.png'),
          title: '706上海肇嘉浜路生活实验室1.1',
          desc: [
            '2019年11月成立，至今为止共有超过40位住客参与到实验室的生活与建设，另有几百位访客与沙发客曾到访参观、暂住或参加活动。如生活实验室这一名称所反映的，空间建设伊始，我们就在探索一种能够让共居更有温度的生活方式。',
            '在过去四年的生活中，我们意识到在共居中室友的陪伴和支持能为生活带来巨大的幸福感。我们努力在互相尊重的前提下，保持各自的独立性；通过讨论与投票来建立共识和做出决策；认真对待共居生活中的每个细节：解决问题、探索与思考、辩证地抬杠、交流与分享、一起吃饭、生活记录等。'
          ],
          address: '上海市徐汇区肇嘉浜路288号，距嘉善路地铁站（9,12号线）步行约1分钟',
          tags: [
            '5室1厅',
            '大客厅',
            '交通便利',
            '采光极佳'
          ]
        },
        {
          img: require('@/assets/images/LifeLab/shanghai_2a.png'),
          title: '706上海武宁路路生活实验室2.0A',
          desc: [
            '2022年于疫情期间重建，区隔于在上海的706生活实验室。重建之后的706青年空间，保留了原生活实验室2.0的共居co-living属性的同时，继承了原706上海城市客厅的公共属性和活动场地职能。经过漫长的磨合与尝试，青年空间逐渐诞生出一种区别普通生活实验室的共居氛围，在这里你可以认识包括但不限于室友在内的整个社区的朋友们，同时也可以很方便地参与到各种在空间发起的各类活动中。'
          ],
          address: '上海市普陀区长寿路 998 弄，距离武宁路地铁站1号口200米',
          tags: [
            '250+㎡',
            '超大复式',
            '2梯3户'
          ],
          link: {
            name: '招募链接',
            href: 'https://mp.weixin.qq.com/s/9rSrpaXkdv08bPfZPnpL2Q'
          }
        },
        {
          img: require('@/assets/images/LifeLab/shanghai_2b.jpg'),
          title: '706上海青年空间 2.0B',
          desc: [
            '和706 上海青年空间所在地在同一幢楼，青年空间定期举办即兴戏剧观影、人文理论共学、客厅对话等活动，上楼便可参加社区活动、流动聚餐，无人数限额活动空间住客可享免费权益。',
            '房子格局为一厅三室两卫，此次招租为房子的原主卧，面积20平以上，另有一个5平左右的阳台扫描二维码添加咨询，期待与你一起共创更有活力和互动性的居住环境。'
          ],
          address: '上海市普陀区长寿路 998 弄，距离武宁路地铁站1号口200米',
          tags: [
            '交通便利',
            '采光极佳',
            '2梯3户'
          ],
          link: {
            name: '招募链接',
            href: 'https://mp.weixin.qq.com/s/luY59Pwt0dWFDpc9Mu5vHA'
          }
        },
        {
          img: require('@/assets/images/LifeLab/shanghai_2c.jpg'),
          title: '706上海青年空间2.0C',
          desc: [
            '在去年夏天的「上海空房子2.0」活动期间，我们曾经构想过以706上海青年空间为中心的1+N共居实验，仅仅半年时间，继706上海青年空间2.0A和2.0B后，我们在距离青年空间步行500米的地方又开拓了2.0C！',
            '5分钟的路程之内，生活着十几个彼此熟悉的朋友，可以随时约饭，约晨跑，约扫街，一起追《繁花》，客厅电影马拉松，发起和旁听各种活动，这里的氛围和上海的边界感有奇妙的不同。如果你也想体验共居实验的话，随时欢迎加入～',
            '706上海青年空间定期举办即兴戏剧观影、人文理论共学、客厅对话等活动，上楼便可参加社区活动、流动聚餐，无人数限额活动空间住客可享免费权益。'
          ],
          address: '上海市普陀区长寿路 998 弄，距离武宁路地铁站1号口200米',
          tags: [
            '3室2卫',
            '交通便利',
            '采光极佳'
          ],
          link: {
            name: '招募链接',
            href: 'https://mp.weixin.qq.com/s/Dj0nnNrB1ZycS3bTXc07gA'
          }
        },
        {
          img: require('@/assets/images/LifeLab/shanghai_2d.jpg'),
          title: '706上海青年空间2.0D',
          desc: [
            '目前706上海青年空间在1公里内范围内拥有4个生活实验室空间（2.0A+2.0B+2.0C+2.0D），2.0A为7房复式，2.0B为3房，2.0C为3房，2.0D为5房复式。'
          ],
          address: '上海市普陀区长寿路 998 弄，距离武宁路地铁站1号口200米',
          tags: [
            '250+㎡',
            '超大复式',
            '2梯3户'
          ],
          link: {
            name: '招募链接',
            href: 'https://mp.weixin.qq.com/s/pnXIjpplJNqTG8vPOhlT9A'
          }
        },
        {
          img: require('@/assets/images/LifeLab/shanghai_3_2.jpg'),
          title: '706上海定西路3.2生活实验室',
          desc: [
            '共居空间，是什么?一个大大的客厅、一个即将被改造的室内阳光房、一个室外大阳台.….我们在此喝酒闲谈、办公阅读、玩桌游、看电影。发起活动，呼朋唤友。不俗的灵魂，或长或短地在此停歇。',
            '共居，给你带来的感受是什么？Esther 说，共同的家仿佛几个人一起在公交站台，在彼此驶向下一个目的地之前，一起听几首歌，看看沿路的风景，闲聊、谈笑。此时这里便是乌托邦。Joe 觉得「家」是一个系统的时空，它不是零碎的，而是整体的、持续的。它像一条串起外界各种零碎偶然事件珠子的「线」，它是一个完整的记忆载体、一个平行宇宙。',
            '我们大笑、我们凝神思考、我们拥抱悲伤我们为一个思想热烈探讨。我们打开一部分的自我，融合在一起，成为 「家」。又保持随时离开 「家」的能力，成为一个个比来时更完整的自己。此心安处是吾乡，欢迎你一起回家。'
          ],
          address: '上海市长宁区定西路东方金门花园',
          tags: [
            '256㎡',
            '5室',
            '落地窗客厅',
            '楼顶露台',
            '15分钟社区生活圈'
          ],
          link: {
            name: '招募链接',
            href: 'https://mp.weixin.qq.com/s/5Fc_HllL92qO-87gqs5sFQ'
          }
        },
        {
          img: require('@/assets/images/LifeLab/shanghai_4.png'),
          title: '706上海 4.0生活实验室',
          desc: [
            '电梯次新房，2梯2户，24h安保',
            '小区闹中取静，绿化养护到位，物业管理贴心',
            '151平米大户型，5个房间+2个卫生间（共享）'
          ],
          address: '东淮海公寓，人民路777号',
          price: '3300/月 押一付三',
          tags: [
            '151㎡',
            '5室',
            '2梯2户',
            '交通便利'
          ],
          link: {
            name: '招募链接',
            href: 'https://mp.weixin.qq.com/s/jiJDIPPzCelpE4ZvtQIi-A'
          }
        }
      ]
    }
  },
  methods: {
    getRandomColor () {
      const letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    }
  }
}
</script>

<style scoped lang="less">
.reg {
  padding: 40px 0px;
  margin: 0 auto;
  max-width: 100%; // 设置一个默认的最大宽度

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1380px) {
    max-width: 1250px;
  }

  @media (min-width: 1480px) {
    max-width: 1410px;
  }
}

.list {
  margin-top: 20px;
}

.item {
  display: flex;
  align-items: flex-start;
  border: 1px solid #eaeaea;
  margin-bottom: 20px;
  transition: box-shadow 0.3s ease;
  background-color: white;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }

  .title {
    font-weight: bold;
    font-size: 24px;
  }

  .address {
    font-size: 14px;
    margin-top: 4px;
    margin-bottom: 8px;
  }

  .item-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    align-items: baseline;
    gap: 8px;
  }

  .item-image {
    position: relative;
    flex: 0 0 320px;
    align-self: stretch;
    min-height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .overlay {
      position: absolute;
      top: 10%;
      left: 0;
      max-width: 80%;
      background: rgba(0, 0, 0, 0.5); /* 黑色半透明蒙层 */
      padding: 4px 12px 8px 12px;
      text-align: left;
      color: #fff;
    }

    .overlay-text {
      font-weight: bold;
      font-size: 20px;
    }

    .overlay-add {
      margin-top: 4px;
      font-size: 12px;
    }
  }

  .item-content {
    padding: 20px 22px 24px 20px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-self: stretch;
  }

  .item-desc {
    font-size: 14px;
  }

  .desc-detail {
    margin-top: 6px;
  }

  .price {
    margin-top: 20px;
    font-weight: bold;
    color: #0b800b;
  }

  .placeholder {
    flex-grow: 1;
  }

  .imgs {
    display: flex;
    img {
      width: 100px;
      height: 100px;
      margin-right: 16px;
      object-fit: cover;
    }
  }

  .tag {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 6px;
    margin-right: 8px;
    font-size: 12px;
    color: white;
    font-weight: bold;
  }

  .footer {
    justify-content: space-between;
  }

  .link {
    display: block;
    color: #0b800b;
    font-weight: bold;
    text-decoration: underline;
    font-size: 16px;
    margin-top: 12px;
    font-style: italic;
  }
}
</style>
