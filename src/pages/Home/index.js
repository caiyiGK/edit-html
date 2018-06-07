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
                    setting: this.setting,
                    items: this.items
                })
            }
            else {
                window._data = {
                    question: this.question,
                    setting: this.setting,
                    items: this.items
                }
            }
        },

        handleClickTab (i) {
            this.active = i
        },

        changePage () {
            const app = this.$refs.iframe.contentWindow.app;
            this.html = app.$el.innerHTML
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
                praise_nu: 100,
                comment_nu: 100,
                collection_nu: 100,
                gold: 0,
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
            setting: {
                imgPath: '',
            },
            items: [],
            html: '',
            heads: `<!DOCTYPE html>
            <html>

            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <title></title>
                <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0" name="viewport">
                <meta name="apple-mobile-web-app-capable" content="yes">
                <meta name="apple-mobile-web-app-status-bar-style" content="black">
                <meta name="apple-mobile-web-app-title" content="myhd">
                <meta content="yes" name="apple-touch-fullscreen">
                <meta name="App-Config" content="fullscreen=yes,useHistoryState=yes,transition=yes">
                <meta name="msapplication-tap-highlight" content="no">
                <link rel="stylesheet" href="./css/style.css">
            </head>
            <body>`,
            footers: '</body></html>'
        }
    }
}
