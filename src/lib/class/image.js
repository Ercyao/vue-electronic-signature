/**
 * @Description: 此文件的js是用来管理画笔加载的图片js
 **/

import { createObject, merge } from '../untils/untils'

var obj = createObject('image', function(main) {
  this.main = main
})
merge(obj.prototype, {
  //加载一张图片的方法
  load(url, call) {
    var img = new Image()
    img.src = url
    if (img.complete) {
      call && call(img, url, 1)
    } else {
      img.onload = function() {
        call && call(img, url, 1)
        img.onload = null
      }
      img.onerror = function() {
        var cvs = document.createElement('canvas')
        cvs.width = 20
        cvs.height = 20
        call && call(cvs, url, 0)
      }
    }
  },
  loadArr(arr, call) {
    var i
    var loadIndex = 0
    var imgObj = {}
    for (i = 0; i < arr.length; i++) {
      this.load(arr[i], function(img, url, isSuccess) {
        loadIndex++
        imgObj[url] = {
          img: img,
          isSuccess: isSuccess,
        }
        if (loadIndex === arr.length) {
          call && call(imgObj)
        }
      })
    }
  },
})
export default obj
