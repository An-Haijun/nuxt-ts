import { Vue, Component } from 'vue-property-decorator'

@Component
class Index extends Vue {
  title: string = ''
  count: number = 1

  bindClickCount() {
    this.count++
  }
}

export default Index
