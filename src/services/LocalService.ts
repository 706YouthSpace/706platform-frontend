import Table from '@/services/LocalDB'

export const series = [
  {
    name: '讲座沙龙'
  },
  {
    name: '圆桌讨论'
  }
]

export const pays = [
  {
    name: '本平台报名'
  },
  {
    name: '其他平台报名'
  }
]

interface ITicket {
    name: string;
    price: number;
}

interface IPay {
    type: '本平台报名'|'其他平台报名';
    min: number;
    max: number;
    tickets: ITicket[];
}

interface IPost {
    title: string;
    content: string;
    imgUrl: string;
    series: string;
    startTime: number;
    endTime: number;
    site: string;
    type: 'outline' | 'default';
    parent: string;
    children: string[];
    pay: IPay;
}

class Post extends Table {
  constructor () {
    super('post')
  }

  add (val: IPost): Table {
    return super.add(val)
  }
}

export const post = new Post()
