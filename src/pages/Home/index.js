import { LayoutPage } from '@/layout'
export default {
    name: 'Home',

    components: {
        LayoutPage
    },

    mounted () {
        this.handleAddObj()
    },

    methods: {
        load () {
            console.log(23)
            const app = this.$refs.iframe.contentWindow.app;
            // console.log(app.$el.innerHTML)
            if (app && app.setContent) {
                app.setContent({
                    question: this.question,
                    items: this.items
                })
            }
            else {
                window._data = {
                    question: this.question,
                    items: this.items
                }
            }
        },

        handleClickTab (i) {
            if (i === undefined) return this.active = 'cur'
            this.active = i
        },

        addObject () {
            this.handleAddObj()
            this.active = this.items.length-1
            this.load()
        },

        handleAddObj () {
            this.items = this.items.concat({
                image_url: '',
                user_name: '',
                lv: '',
                tag: '',
                date: '',
                praise_nu: 0,
                comment_nu: 0,
                collection_nu: 0,
                gold: false,
                content: ''
            })
        }
    },

    data () {
        return {
            title: 'Home',
            active: 'cur',
            question: {
                title: '',          // 标题
                brief: '',          // 简述
                author: '',         // 作者
                date: '',           // 日期
                browse_nu: '',      // 浏览数量
                answer_nu: '',      // 回答数量
                image_url: ''       // 图片地址
            },
            items: []
        }
    }
}
