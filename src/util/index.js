export function getQueryString (name, url) {
  url = url || window.location.href
  const r = new RegExp('(\\?|#|&)' + name + '=([^&#]*)(&|#|$)')
  const m = url.match(r)
  return decodeURIComponent(!m ? '' : m[2])
}

export function getKeyword () {
  const el = document.querySelector('input[type=\'search\'],input[type=\'text\'][autocomplete=\'off\'],input[autocomplete=\'off\']:not([type])') ||
    document.querySelector('input[type=\'text\'][name][value],input[name][value]:not([type])')
  if (el) {
    if (el.nodeName === 'INPUT' || el.localName === 'textarea') {
      return el.value
    } else {
      return el.textContent
    }
  }
  return ''
}

const el = document.createElement('a')

export function parseUrl (url) {
  let val = url
  if (val.indexOf('//') < 0) {
    val = `//${val}`
  } else if (val.indexOf('//') > -1) {
    const lowerCaseVal = val.toLowerCase()
    if (
      !lowerCaseVal.startsWith('http://') &&
      !lowerCaseVal.startsWith('https://') &&
      !lowerCaseVal.startsWith('ftp://') &&
      !lowerCaseVal.startsWith('files://')
    ) {
      val = val.replace(/.*\/\//, '//')
    }
  } else {
    return el
  }
  el.href = val
  return {
    href: el.href, // '包含完整的url'
    origin: el.origin, // '包含协议到pathname之前的内容'
    protocol: el.protocol, //  'url使用的协议，包含末尾的:'
    host: el.host, //  '完整主机名，包含:和端口'
    hostname: el.hostname, //  '主机名，不包含端口'
    port: el.port, //  '端口号'
    pathname: el.pathname, //  '服务器上访问资源的路径/开头'
    search: el.search, //  'query string，?开头'
    hash: el.hash //  '#开头的fragment identifier'
  }
}

export function checkBody () {
  let time = 0
  return new Promise((resolve, reject) => {
    if (document && document.body) {
      resolve()
    } else {
      const id = setInterval(function () {
        time += 1
        if (document && document.body) {
          clearInterval(id)
          resolve()
        }
        if (time === 50) {
          clearInterval(id)
          reject(new Error('timeOut'))
        }
      }, 200)
    }
  })
}

function getName (name) {
  if (name) {
    return `__allSearch__${name}`
  }
  return null
}

export function getSession (name) {
  const formatName = getName(name)
  // eslint-disable-next-line
  if (window.GM_getValue) {
    // eslint-disable-next-line
    return window.GM_getValue(formatName)
  }
  const item = window.localStorage.getItem(formatName)
  if (item) {
    return JSON.parse(item)
  }
  return null
}

export function setSession (name, value) {
  const formatName = getName(name)
  // eslint-disable-next-line
  if (window.GM_setValue) {
    // eslint-disable-next-line
    window.GM_setValue(formatName, value)
  } else {
    const item = JSON.stringify(value)
    if (item) {
      window.localStorage.setItem(formatName, item)
    }
  }
}

// 监听head的节点移除，防止style被干掉
export function domObserve () {
  const targetNode = document.getElementsByTagName('head')[0]
  const config = { childList: true }
  const callback = function (mutationsList) {
    for (const mutation of mutationsList) {
      if (mutation.removedNodes.length &&
        mutation.removedNodes[0].nodeName === 'STYLE' &&
        mutation.removedNodes[0].class === 'as-style'
      ) {
        console.log(mutation)
        addStyle(mutation.removedNodes[0].innerText)
      }
    }
  }
  let MO = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
  let observer
  if (MO) {
    observer = new MO(callback)
    observer.observe(targetNode, config)
  }
}

export function addStyle (styleContent) {
  if (!styleContent) {
    return
  }
  const style = document.createElement('style')
  style.innerHTML = styleContent
  style.class = 'all-search-style'
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(style)
}

export function addLink (url) {
  if (!url) {
    return
  }
  const link = document.createElement('link')
  link.href = url
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.crossorigin = 'anonymous'
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}

export function addStyleResource (name, link) {
  let styleContent
  if (window.GM_getResourceText) {
    styleContent = window.GM_getResourceText(name)
  }
  if (styleContent) {
    ACAddStyle(styleContent, name)
  } else {
    addLink(link)
  }
}

export function RAFInterval (callback, period, runNow) {
  // 一秒60次，对应1秒1000ms
  const needCount = period / 1000 * 60
  let times = 0 // 已经计数的数量

  if (runNow === true) { // 对于立即执行函数的立即判定，否则进行
    const shouldFinish = callback()
    if (shouldFinish) {
      return
    }
  }

  function step () {
    if (times < needCount) {
      // 计数未结束-继续计数
      times++
      requestAnimationFrame(step)
    } else {
      // 计数结束-停止计数，判定结果
      const shouldFinish = callback() || false
      if (!shouldFinish) {
        // 返回值为false，重启计数器
        times = 0
        requestAnimationFrame(step)
      }
    }
  }

  requestAnimationFrame(step)
}

function safeRemove (cssSelectorOrFunction) {
  try {
    if (typeof (cssSelectorOrFunction) === 'string') {
      let removeNodes = document.querySelectorAll(cssSelectorOrFunction)
      for (let i = 0; i < removeNodes.length; i++) {
        removeNodes[i].remove()
      }
    } else if (typeof (cssSelectorOrFunction) === 'function') {
      cssSelectorOrFunction()
    } else {
      console.log('未知命令：' + cssSelectorOrFunction)
    }
  } catch (e) {

  }
}

export function ACAddStyle (css, className, addToTarget, isReload) { // 添加CSS代码，不考虑文本载入时间，只执行一次-无论成功与否，带有className
  RAFInterval(function () {
    /**
     * addToTarget这里不要使用head标签,head标签的css会在html载入时加载，
     * html加载后似乎不会再次加载，body会自动加载
     * **/
    let addTo = document.querySelector(addToTarget)
    if (typeof (addToTarget) === 'undefined') {
      addTo = (document.body || document.head || document.documentElement || document)
    }
    isReload = isReload || false // 默认是非加载型
    // 如果没有目标节点(则直接加) || 有目标节点且找到了节点(进行新增)
    if (typeof (addToTarget) === 'undefined' ||
      (typeof (addToTarget) !== 'undefined' && document.querySelector(addToTarget) !== null)
    ) {
      // clearInterval(tout);
      // 如果true 强行覆盖，不管有没有--先删除
      // 如果false，不覆盖，但是如果有的话，要退出，不存在则新增--无需删除
      if (isReload === true) {
        safeRemove('.' + className)
      } else if (isReload === false && document.querySelector('.' + className) != null) {
        // 节点存在 && 不准备覆盖
        return true
      } else {
        let cssNode = document.createElement('style')
        if (className != null) cssNode.className = className
        cssNode.setAttribute('type', 'text/css')
        cssNode.innerHTML = css
        try {
          addTo.appendChild(cssNode)
        } catch (e) {
          console.log(e.message)
        }
        return true
      }
    }
  }, 20, true)
}

export function getAsEl () {
  let el = null
  const asEl = document.getElementById('all-search')
  if (asEl) {
    el = asEl
  } else {
    el = document.createElement('div')
    el.id = 'all-search'
  }

  el.style.display = 'none'
  return el
}
