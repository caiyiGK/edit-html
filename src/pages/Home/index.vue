<template lang="html">
    <layout-page class="clearfix">

        <div class="edit clearfix">
            <div class="menu">
                <a :class="[active === 'cur' ? 'active' : '']"
                    @click.stop="handleClickTab()">提问</a>
                <a :class="[active === i ? 'active' : '']"
                    v-for="(v, i) in items"
                    @click.stop="handleClickTab(i)"
                    :key="i">回答{{i + 1}}</a>
                <a @click.stop="addObject">添加</a>
            </div>

            <!-- 标题 -->
            <div class="frombox" v-if="active === 'cur'">
                <div class="qesiton">
                    <div class="group-input">
                        <label>问题</label>
                        <div>
                            <textarea v-model="question.title" rows="4" cols="80"></textarea>
                        </div>
                    </div>
                    <div class="group-input">
                        <label>简述</label>
                        <div>
                            <textarea v-model="question.brief" rows="4" cols="80"></textarea>
                        </div>
                    </div>
                    <div class="group-input group-input-line">
                        <label>作者</label>
                        <div>
                            <input type="text" v-model="question.author"  value="">
                        </div>
                        <label>日期</label>
                        <div>
                            <input type="text" v-model="question.date" value="">
                        </div>
                    </div>
                    <div class="group-input group-input-line">
                        <label>浏览</label>
                        <div>
                            <input type="text" v-model="question.browse_nu"  value="">
                        </div>
                        <label>回答</label>
                        <div>
                            <input type="text" v-model="question.answer_nu" value="">
                        </div>
                    </div>
                    <div class="group-input group-input-line">
                        <label>图片</label>
                        <div>
                            <input type="text" v-model="question.image_url" value="">
                        </div>
                        <label></label>
                        <div></div>
                    </div>
                </div>
            </div>

            <!-- answer -->
            <div class="frombox"
                v-if="active === i"
                v-for="(v, i) in items"
                :key="i">
                <div class="qesiton">
                    <div class="group-input group-input-line">
                        <label>头像</label>
                        <div>
                            <input type="text" v-model="v.image_url"  value="">
                        </div>
                        <label>账户</label>
                        <div>
                            <input type="text" v-model="v.user_name" value="">
                        </div>
                    </div>
                    <div class="group-input group-input-line">
                        <label>等级</label>
                        <div>
                            <input type="text" v-model="v.lv"  value="">
                        </div>
                        <label>标签</label>
                        <div>
                            <input type="text" v-model="v.tag" value="">
                        </div>
                    </div>
                    <div class="group-input group-input-line">
                        <label>日期</label>
                        <div>
                            <input type="text" v-model="v.date" value="">
                        </div>
                        <label>点赞</label>
                        <div><input type="text" v-model="v.praise_nu" value=""></div>
                    </div>
                    <div class="group-input group-input-line">
                        <label>评论</label>
                        <div>
                            <input type="text" v-model="v.comment_nu" value="">
                        </div>
                        <label>收藏</label>
                        <div><input type="text" v-model="v.collection_nu" value=""></div>
                    </div>
                    <div class="group-input">
                        <label>内容</label>
                        <div>
                            <textarea v-model="v.content" rows="8" cols="80"></textarea>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- iframe begin -->
        <div class="iframe-box">
            <iframe ref="iframe" @load="load" src="/static/index.html" width="320" height="568"></iframe>
        </div>
        <!-- iframe end -->

    </layout-page>
</template>
<script type="text/javascript" src="./index.js"></script>
<style lang="less" scoped>
@import './index.less';

/** edit 样式 **/
.edit {
    float: left;
    width: 750px;
    float: left;
    /** menu **/
    .menu {
        width: 100px;
        float: left;
        border: 1px solid #f1f1f1;
        a {
            font-size: 16px;
            color: #333;
            display: block;
            height: 50px;
            line-height: 50px;
            box-sizing: border-box;
            border-bottom: 1px solid #f1f1f1;
            text-align: center;
            cursor: pointer;
            transition: all .3s;
            &:last-child {
                border: none;
            }
            &.active,
            &:hover {
                background: #f60;
                color: #fff;
            }
        }
    }
    /** frombox **/
    .frombox {
        float: left;
        width: 600px;
        height: 400px;
        margin-left: 20px;
        border-left: none;
        .qesiton {
            .group-input {
                margin-bottom: 15px;
                display: flex;
                label {
                    display: block;
                    width: 60px;
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                }
                > div {
                    box-sizing: border-box;
                    padding: 0 20px 0 10px;
                    width: 100%;
                    flex: 1;
                    display: flex;
                }
                textarea,
                input {
                    border: 1px solid #d9d9d9;
                    border-radius: 4px;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 14px;
                }
                textarea {
                    padding: 10px;
                    resize: none;
                }
                input{
                    padding: 0 10px;
                    height: 35px;
                }
            }
        }
    }
}

.iframe-box {
    width: 320px;
    float: right;
    margin: 30px;
    iframe {
        border: 1px solid #f1f1f1;
    }
}

</style>
