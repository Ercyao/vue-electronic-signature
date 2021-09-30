<template>
    <div class="elesigncode-content"></div>
</template>

<script>
import ElesignCode from './main.js'
export default {
    name: 'VueElesignCode',
    props: {
        pen: {
            type: String,
            default: 'default'
        },
        color: {
            type: String,
            default: '#333'
        },
        lineWidth: {
            type: Number,
            default: 4
        },
        bgColor: {
            default: -1
        },
        writingMaxLine: {
            type: Number,
            default: 20
        },
        writingMinLine: {
            type: Number,
            default: 10
        },
        bgImg: {
            type: String,
            default: ''
        },
        imgType: {
            type: String,
            default: 'jpg'
        },
        imgUrl: {
            type: String,
            default: ''
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        datas: null
    },
    data() {
        return {
            signcodeEx: null
        }
    },
    mounted() {
        this.signcodeEx = new ElesignCode({
            writingMaxLine: this.writingMaxLine,
            writingMinLine: this.writingMinLine
        })
        this.signcodeEx.init()
        this.signcodeEx.moutedEle(this.$el)
        this.signcodeEx.setPen(this.pen)
        this.signcodeEx.setColor(this.color)
        this.signcodeEx.setLineWidth(this.lineWidth)
        this.signcodeEx.setBgColor(this.bgColor)
        this.signcodeEx.setBgImg(this.bgImg)
        this.signcodeEx.setReadOnly(this.readOnly)
        this.datas && this.signcodeEx.jsonTo(this.datas)
    },
    methods: {
        undo() {
            this.signcodeEx.undo()
        },
        redo() {
            this.signcodeEx.redo()
        },
        resize() {
            this.signcodeEx.resize()
        },
        resizeWithNumber(w, h) {
            this.signcodeEx.resizeWithNumber(w, h)
        },
        getJson() {
            return this.signcodeEx.toJson()
        },
        toJson() {
            return this.getJson()
        },
        jsonTo(json) {
            return this.signcodeEx.jsonTo(json)
        },
        toPng() {
            return this.signcodeEx.toPng()
        },
        toJpeg() {
            return this.signcodeEx.toJpeg()
        },
        setPen(pen) {
            return this.signcodeEx.setPen(pen)
        },
        setReadOnly(type) {
            return this.signcodeEx.setReadOnly(type)
        },
        imgTo(url) {
            return this.signcodeEx.imgTo(url)
        },
        setBgImg(url) {
            return this.signcodeEx.setBgImg(url)
        },
        clear(pen) {
            return this.signcodeEx.clear(pen)
        },
        clearSign(pen) {
            return this.signcodeEx.clearSign(pen)
        },
        getData(filename) {
            let imgData = this.getImg()
            let jsonData = this.getJson()
            return { file: this.base64ImgtoFile(imgData, filename), url: imgData, datas: jsonData }
        },
        getImg() {
            if (this.imgType == 'png') {
                return this.toPng()
            }
            return this.toJpeg()
        },
        getFile(filename) {
            let imgData = this.getImg()
            return this.base64ImgtoFile(imgData, filename)
        },
        // base64转成file文件
        base64ImgtoFile(dataurl, filename = '签名') {
            const arr = dataurl.split(',')
            const mime = arr[0].match(/:(.*?);/)[1]
            const suffix = mime.split('/')[1]
            const bstr = atob(arr[1])
            let n = bstr.length
            const u8arr = new Uint8Array(n)
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n)
            }
            return new File([u8arr], `${filename}.${suffix}`, {
                type: mime
            })
        }
    },
    watch: {
        '$props.datas': {
            deep: true,
            handler() {
                this.datas && this.signcodeEx.jsonTo(this.datas)
            }
        },
        bgImg() {
            this.signcodeEx.imgTo(this.bgImg)
        },
        '$props.readOnly': {
            deep: true,
            handler() {
                this.signcodeEx.setReadOnly(this.readOnly)
            }
        },
        '$props.writingMaxLine': {
            deep: true,
            handler() {
                this.signcodeEx.option.writingMaxLine = this.writingMaxLine
                this.signcodeEx.draw.draw()
            }
        },
        '$props.writingMinLine': {
            deep: true,
            handler() {
                this.signcodeEx.option.writingMinLine = this.writingMinLine
                this.signcodeEx.draw.draw()
            }
        },
        '$props.bgColor': {
            deep: true,
            handler() {
                this.signcodeEx.setBgColor(this.bgColor)
            }
        },
        '$props.lineWidth': {
            deep: true,
            handler() {
                this.signcodeEx.setLineWidth(this.lineWidth)
            }
        },
        '$props.color': {
            deep: true,
            handler() {
                this.signcodeEx.setColor(this.color)
            }
        },
        '$props.pen': {
            deep: true,
            handler() {
                this.signcodeEx.setPen(this.pen)
            }
        }
    },
    beforeDestroy() {
        this.signcodeEx.destory()
        this.signcodeEx = null
    }
}
</script>

<style>
.elesigncode-content {
    width: 100%;
    height: 100%;
    cursor: default;
}
</style>