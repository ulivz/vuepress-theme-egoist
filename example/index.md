<div class="egoist-name">
  egoist
  <span class="dot">.</span>
  <span class="lily" ref="name">lily</span>
</div>

<script>
import scifi from 'scifi'

const NAMES = [
  'iroha',
  'utaha',
  'mikasa',
  'ena',
  'eriri',
  'rem',
  'asuna',
  'asuka',
  'gahara',
  'fuuka',
  'touka',
  'luna'
]

export default {
  data() {
    return {
      currentNameIndex: null
    }
  },
  mounted() {
    this.loop = setInterval(() => {
      scifi(this.$refs.name, {
        content: this.getName()
      })
    }, 3000)
  },
  methods: {
    getRandomIndex(currentIndex) {
      const nextIndex = Math.floor(Math.random() * NAMES.length)
      if (currentIndex === null) {
        return nextIndex
      }
      return currentIndex === nextIndex ? this.getRandomIndex(currentIndex) : nextIndex
    },
    getName() {
      this.currentNameIndex = this.getRandomIndex(this.currentNameIndex)
      const name = NAMES[this.currentNameIndex]
      return name
    }
  },
  beforeDestroy() {
    if (this.loop) {
      clearInterval(this.loop)
    }
  }
}
</script>

<style scoped lang="stylus">
.egoist-name
  color: #586e75
  font-size: 8rem
  text-transform: uppercase
  line-height: 100%
  margin: 15px 0 35px 0
  /* to eliminate white space */
  display: flex

.egoist-name 
  span
    color: #b58900
  &:hover
    span.dot
      color: #ff69b4

@media screen and (max-width: 768px)
  .egoist-name
    font-size: 1.6rem;
    margin: 5px 0 15px 0;
</style>