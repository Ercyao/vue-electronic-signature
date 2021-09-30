<template>
    <div id="app">
        <div class="elesigncode-content">
            <elesigncode ref="elesigncode" :imgUrl="imgUrl" :readOnly="readOnly" />
        </div>

        <button @click="onClear">清空</button>
        <button @click="getImg">获取图片</button>
        <input type="checkbox" class="switch" @click="readOnly = !readOnly" />是否只读
    </div>
</template>

<script>
import elesigncode from './lib/core/elesigncode.vue'

export default {
    name: 'App',
    components: { elesigncode },
    data() {
        return {
            readOnly: false,
            imgUrl: 'http://renhua-invoice-oss.oss-cn-shenzhen.aliyuncs.com/file/2021092909/1632907142000_%E7%AD%BE%E5%90%8D.png'
        }
    },
    methods: {
        onClear() {
            this.imgUrl = ''
            this.$refs.elesigncode.clearBgImg()
            this.$refs.elesigncode.clear()
        },
        getImg() {
            console.log(333, this.$refs.elesigncode.toPng())
            this.$refs.elesigncode.toPng()
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
</style>
