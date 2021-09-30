<template>
    <div id="app">
        <div class="elesigncode-content">
            <elesigncode ref="elesigncode" :pen="pen" :bgImg="bgImg" :imgType="imgType" :readOnly="readOnly" />
        </div>

        <div class="btn-box">
            <button @click="setPen">切换画笔</button>
            <button @click="onClear">清空</button>
            <button @click="onClearSign">清空签名</button>
            <button @click="setBgImg">设置背景图片</button>
            <button @click="getImg">获取图片</button>
            <button @click="getFile">获取文件</button>
            <button @click="getData">获取全部数据</button>

            <div>
                <input type="checkbox" class="switch" @click="readOnly = !readOnly" />只读
            </div>
            <div>
                <input type="checkbox" class="switch" @click="imgType = imgType == 'png' ? 'jpg':'png'" />jpg格式
            </div>
        </div>
    </div>
</template>

<script>
import elesigncode from './lib/core/elesigncode.vue'

export default {
    name: 'App',
    components: { elesigncode },
    data() {
        return {
            pen: 'default',
            imgType: 'png',
            readOnly: false,
            bgImg2: 'http://renhua-invoice-oss.oss-cn-shenzhen.aliyuncs.com/file/2021092909/1632907142000_%E7%AD%BE%E5%90%8D.png',
            // bgImg: './assets/img/1.jpg',
            bgImg: ''
        }
    },
    mounted() {},
    methods: {
        setPen() {
            this.pen = this.pen == 'default' ? 'writing' : 'default'
        },
        onClear() {
            this.$refs.elesigncode.clear()
        },
        onClearSign() {
            this.$refs.elesigncode.clearSign()
        },
        setBgImg() {
            this.$refs.elesigncode.setBgImg(this.bgImg)
        },
        getImg() {
            let img = this.$refs.elesigncode.getImg()
            console.log('图片地址', img)
        },
        getFile() {
            let file = this.$refs.elesigncode.getFile()
            console.log('文件', file)
        },
        getData() {
            let data = this.$refs.elesigncode.getData()
            console.log('获取全部数据', data)
        }
    }
}
</script>

<style>
#app {
    margin: 20px;
}
.elesigncode-content {
    height: 400px;
    background: #f5f5f5;
    margin-bottom: 20px;
}
.btn-box {
    display: flex;
    justify-content: space-between;
}
</style>
