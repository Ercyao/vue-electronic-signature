/**
 * @Description: 此文件是一个绘图对象的描述文件 绘图对象 分发不同的笔的绘制方法 让此签名core变得更加丰富多彩
 **/

import { createObject, merge } from '../untils/untils'

/**
 * 创建一个绘制类型的构造函数
 * @param {cvs节点} cvs
 * @param {中心对象} main
 */

var isFirstOnloadImg = false // 判断是不是第一次加载图片

var obj = createObject('draw', function(cvs, main) {
  this.cvs = cvs //cvs节点
  this.c2d = cvs.getContext('2d') //canvas绘制上下文
  this.main = main //中心对象
  this.memCvs = document.createElement('canvas')
  this.memCvs2d = this.memCvs.getContext('2d')
  this.scalc = 1
  this.isLock = false
})
merge(obj.prototype, {
  init() {},
  lock() {
    this.isLock = true
  },
  unlock() {
    this.isLock = false
    this.draw()
  },
  resize(w, h) {
    this.cvs.setAttribute('width', w)
    this.cvs.setAttribute('height', h)
    this.c2d = this.cvs.getContext('2d')
    this.memCvs.setAttribute('width', w * this.scalc)
    this.memCvs.setAttribute('height', h * this.scalc)
    this.memCvs2d = this.memCvs.getContext('2d')
    this.draw()
  },
  draw() {
    if (this.main.destoryKey) {
      return console.log('object is destory!!')
    }
    if (this.isLock) {
      return
    }
    this.main.penList[this.main.pen] &&
      this.main.penList[this.main.pen].penCall(
        this.main,
        this.main.penList[this.main.pen]
      )
    this.c2d.clearRect(0, 0, this.cvs.width, this.cvs.height)

    if (this.main.option.bgColor != -1) {
      this.c2d.fillStyle = this.main.option.bgColor
      this.c2d.fillRect(0, 0, this.cvs.width, this.cvs.height)
    }

    if (this.main.option && this.main.option.bgImg) {
      this.setDrawImage(this.main.option.bgImg, this.cvs.width, this.cvs.height)
    }

    this.c2d.drawImage(this.memCvs, 0, 0, this.cvs.width, this.cvs.height)
  },
  drawImage(url) {
    this.setDrawImage(url, this.cvs.width, this.cvs.height)
  },

  setDrawImage(url, width, height) {
    let self = this
    let img = new Image()
    img.src = url || null
    img.setAttribute('crossOrigin', 'Anonymous')
    self.c2d.drawImage(img, 0, 0, width, height)

    if (!isFirstOnloadImg) {
      // 处理第一次加载问题
      isFirstOnloadImg = true
      img.onload = () => {
        self.c2d.drawImage(img, 0, 0, width, height)
      }
    }

    img.onerror = (err) => {
      console.error('图片加载失败：', err)
    }
  },
})
export default obj
