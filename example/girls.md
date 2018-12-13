---
title: 那些吸引我的女孩子们
subtitle: 来自 EGOIST 的告白
waifus:
  - name: 秋月风夏
    cv: Lynn
  - name: 战场原黑仪
    cv: 斋藤千和
  - name: CC
    cv: 由加奈
  - name: 蕾姆
    cv: 水濑祈
  - name: 三笠·阿克曼
    cv: 石川由依
  - name: 惣流·明日香·兰格雷
    cv: 宫村优子
  - name: 梦梦·贝莉雅·戴比路克
    cv: 丰崎爱生
  - name: 时崎狂三
    cv: 真田麻美
  - name: 董香
    cv: 雨宫天
  - name: 楪祈
    cv: 茅野爱衣
  - name: 阿尔托莉雅·潘德拉贡
    cv: 川澄綾子
  - name: 莫德雷德
    cv: 泽城美雪
  - name: 朝田诗乃
    cv: 泽城美雪
  - name: 小宮惠那
    cv: Lynn
  - name: 碧井风夏
    cv: 无
  - name: 牧濑红莉栖
    cv: 今井麻美
  - name: 雪之下雪乃
    cv: 早见沙织
  - name: 无名
    cv: 千本木彩花
  - name: 亚丝娜
    cv: 户松遥
  - name: 我妻由乃
    cv: 村田知沙
  - name: Zero Two
    cv: 户松遥
  - name: 梅
    cv: 市之濑加那
  - name: 安琪丽莎
    cv: 水树奈奈
  - name: 朝比奈凉风
    cv: 三桥加奈子
  - name: 艾米莉娅
    cv: 高桥李依
  - name: 贞德 (Fate)
    cv: 坂本真绫
  - name: 艾蕾欧诺拉·维尔塔利亚（艾莲）
    cv: 户松遥
  - name: 宫水三叶
    cv: 上白石萌音
  - name: 阿尔泰尔
    cv: 丰崎爱生
  - name: 赫萝
    cv: 小清水亚美
  - name: 生野艾米露
    cv: 雾之峰沙罗
  - name: 艾丝·华伦斯坦
    cv: 大西沙织
  - name: 冰无小雪
    cv: 早见沙织
  - name: 友利奈绪
    cv: 佐仓绫音
  - name: 椎名真白
    cv: 茅野爱衣
  - name: 加贺
    cv: 井口裕香
  - name: 赤城
    cv: 藤田咲
  - name: 霞之丘诗羽
    cv: 茅野爱衣
  - name: 更识楯无（更识刀奈）
    cv: 斋藤千和
  - name: 绚辻词
    cv: 名冢佳织
  - name: 常木耀
    cv: 佐仓绫音
  - name: 水野茜
    cv: 小原好美
  - name: 玛修·基列莱特
    cv: 高桥李依
  - name: 乌丸千岁
    cv: 千本木彩花
  - name: 森岛遥
    cv: 伊藤静
  - name: 绿川花
    cv: 花泽香菜
  - name: 希斯特利亚
    cv: 三上枝织
  - name: 西宫硝子
    cv: 早见沙织
  - name: 西宫结弦
    cv: 悠木碧
  - name: 夏川真涼
    cv: 田村由香里
  - name: 凉风青叶
    cv: 高田忧希
  - name: 山田妖精
    cv: 高桥未奈美
  - name: 和泉纱雾
    cv: 藤田茜
  - name: 千寿村正
    cv: 大西沙织
  - name: 樱宁宁
    cv: 朝日奈丸佳
  - name: 七咲逢
    cv: 由加奈
  - name: 加藤惠
    cv: 安野希世乃
  - name: 一色彩羽
    cv: 佐仓绫音
  - name: 惠惠
    cv: 高桥李依
  - name: 輝夜月
    cv: 不详
---

## 当前

我喜欢小宮惠那的性格，平时是那么灵动、活泼，委屈时的无助却又让人看得心疼。

<!-- ![altair](https://i.loli.net/2017/09/02/59aa9b2fe0303.jpg) -->
<!-- ![saber](https://i.loli.net/2017/09/02/59aa9b9a87d3a.jpg) -->
<!-- ![mordred](https://i.loli.net/2017/11/10/5a0535daceee7.jpg) -->
![ena](https://i.loli.net/2017/12/03/5a23dd8a0870c.jpg)

## 历史

按照声优出现次数排名:

<div class="waifu">
  <ul>
    <li v-for="waifu in orderedWaifus" :key="waifu.name">
      {{ waifu.name }} <span class="cv">{{ waifu.cv }}</span>
    </li>
  </ul> 
</div>

<script>
export default {
  computed: {
    orderedWaifus() {
      const cvStats = {}
      const waifus = this.$page.frontmatter.waifus
      waifus.forEach(waifu => {
        cvStats[waifu.cv] = cvStats[waifu.cv] || []
        cvStats[waifu.cv].push(waifu)
      })
      return Object.keys(cvStats)
        .sort((a, b) => cvStats[b].length - cvStats[a].length)
        .reduce((res, name) => {
          return [...res, ...cvStats[name]]
        }, [])
    }
  }
}
</script>