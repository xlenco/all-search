export default function (e) {
  var t, a, l, o, h, i,
    n = '<svg><symbol id="icon-disk" viewBox="0 0 1024 1024"><path d="M722.858667 234.666667a64 64 0 0 1 56.533333 33.984L874.666667 448v256a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V448l95.274667-179.349333A64 64 0 0 1 301.141333 234.666667h421.717334zM810.666667 501.333333H213.333333V704h597.333334v-202.666667zM618.666667 576v64H384v-64h234.666667z m128 0v64h-64v-64h64z m-23.808-277.333333H301.141333l-73.685333 138.666666h569.066667L722.858667 298.666667z"  ></path></symbol><symbol id="icon-personal" viewBox="0 0 1024 1024"><path d="M490.261333 173.44a49.066667 49.066667 0 0 1 64.064 19.178667l1.664 3.093333 87.850667 177.813333 196.352 28.501334a49.066667 49.066667 0 0 1 29.717333 81.066666l-2.538666 2.645334L725.333333 624l33.536 195.349333a49.066667 49.066667 0 0 1-68.010666 53.269334l-3.157334-1.514667L512 778.858667l-175.701333 92.266666a49.066667 49.066667 0 0 1-71.637334-48.426666l0.469334-3.328L298.666667 624.021333 156.629333 485.76a49.066667 49.066667 0 0 1 23.893334-83.114667l3.285333-0.597333 196.352-28.501333 87.850667-177.813334a49.066667 49.066667 0 0 1 22.250666-22.272z m-67.626666 258.581333l-199.658667 28.992 144.469333 140.650667-34.133333 198.741333L512 706.56l178.688 93.845333-34.133333-198.741333 144.469333-140.650667-199.658667-28.992L512 251.157333l-89.386667 180.864z"  ></path></symbol><symbol id="icon-shopping" viewBox="0 0 1024 1024"><path d="M330.667 768a53.333 53.333 0 1 1 0 106.667 53.333 53.333 0 0 1 0-106.667z m384 0a53.333 53.333 0 1 1 0 106.667 53.333 53.333 0 0 1 0-106.667zM94.763 160h54.741a96 96 0 0 1 92.907 71.787l1.024 4.394 13.205 62.486h0.213L299.733 504l32.491 157.333h402.219l61.653-298.666H313.813l-13.376-64h495.68a64 64 0 0 1 62.678 76.949L797.14 674.283a64 64 0 0 1-62.698 51.05H332.224a64 64 0 0 1-62.677-51.05L208.96 380.864l-0.405 0.085-27.734-131.562a32 32 0 0 0-28.309-25.238l-2.987-0.149H94.741v-64h54.742z"  ></path></symbol><symbol id="icon-developer" viewBox="0 0 1024 1024"><path d="M541.141333 268.864l61.717334 16.938667-132.394667 482.474666-61.717333-16.938666 132.394666-482.474667zM329.002667 298.666667l44.885333 45.610666-175.36 172.586667 175.04 167.573333-44.266667 46.229334L106.666667 517.504 329.002667 298.666667z m355.882666 0l222.336 218.837333L684.586667 730.666667l-44.266667-46.229334 175.018667-167.573333L640 344.277333 684.885333 298.666667z"  ></path></symbol><symbol id="icon-image" viewBox="0 0 1024 1024"><path d="M817.365333 213.333333a64 64 0 0 1 64 64v469.333334a64 64 0 0 1-64 64h-597.333333a64 64 0 0 1-64-64V277.333333a64 64 0 0 1 64-64h597.333333z m0 64h-597.333333v469.333334h597.333333V277.333333zM746.666667 371.114667v63.957333c-100.608-1.450667-163.306667 30.293333-193.493334 94.229333l-2.304 5.12-2.858666 6.357334c-44.010667 95.146667-129.088 142.464-249.322667 140.842666v-64c96.234667 1.6 157.930667-32.384 190.933333-103.04l2.538667-5.632 2.624-5.845333c41.664-89.664 127.488-133.333333 251.882667-131.989333z m-397.696-17.237334a42.666667 42.666667 0 1 1 0 85.333334 42.666667 42.666667 0 0 1 0-85.333334z"  ></path></symbol><symbol id="icon-social" viewBox="0 0 1024 1024"><path d="M617.216 170.666667c114.24 0 206.869333 92.608 206.869333 206.869333 0 72.533333-37.333333 136.32-93.802666 173.269333l168.746666 196.885334A64 64 0 0 1 850.432 853.333333l-101.888 0.021334c11.221333-19.413333 14.293333-42.496 8.746667-64L850.432 789.333333 634.24 537.109333l60.992-39.872a142.869333 142.869333 0 0 0-75.584-262.549333 251.264 251.264 0 0 0-55.424-57.173333A206.976 206.976 0 0 1 617.216 170.666667z m-61.162667 412.757333l140.8 164.266667A64 64 0 0 1 648.213333 853.333333H181.824a64 64 0 0 1-48.597333-105.642666l140.8-164.266667c18.026667 12.373333 37.76 22.442667 58.773333 29.781333L181.824 789.333333h466.410667l-150.997334-176.128c21.034667-7.338667 40.768-17.386667 58.816-29.781333zM415.04 170.666667c114.24 0 206.869333 92.608 206.869333 206.869333 0 114.24-92.629333 206.869333-206.869333 206.869333-114.261333 0-206.869333-92.629333-206.869333-206.869333C208.170667 263.274667 300.778667 170.666667 415.04 170.666667z m0 64a142.869333 142.869333 0 1 0 0 285.738666 142.869333 142.869333 0 0 0 0-285.738666z"  ></path></symbol><symbol id="icon-news" viewBox="0 0 1024 1024"><path d="M640 170.666667a64 64 0 0 1 64 64v490.666666h-64V234.666667H213.333333v554.666666h597.333334V362.666667h-64v-64h64a64 64 0 0 1 64 64v426.666666a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h426.666667z m-192 320v64h-170.666667v-64h170.666667z m128-128v64H277.333333v-64h298.666667z"  ></path></symbol><symbol id="icon-knowledge" viewBox="0 0 1024 1024"><path d="M168.106667 621.44l120.746666 57.962667 223.274667 108.138666 215.317333-104.32 128.768-61.674666a64 64 0 0 1-29.952 84.970666l-286.229333 138.624a64 64 0 0 1-55.808 0L197.994667 706.517333A64 64 0 0 1 168.106667 621.44z m687.829333-133.930667a64 64 0 0 1-29.674667 85.546667L540.010667 711.68a64 64 0 0 1-55.808 0L197.994667 573.056A64 64 0 0 1 166.826667 490.88l317.013333 149.525333 28.288 13.696 286.229333-138.624-0.149333-0.064 57.728-27.882666zM540.032 185.792l286.208 138.602667a64 64 0 0 1 0 115.2l-286.208 138.624a64 64 0 0 1-55.808 0L197.994667 439.594667a64 64 0 0 1 0-115.2L484.224 185.813333a64 64 0 0 1 55.808 0z m-27.904 57.6l-286.229333 138.602667 286.229333 138.624 286.229333-138.624-286.229333-138.602667z"  ></path></symbol><symbol id="icon-music" viewBox="0 0 1024 1024"><path d="M515.562667 232.91733299c159.061333 0 288 128.938667 288 288v22.250667A85.354667 85.354667 0 0 1 874.666667 627.30666699v93.994666a85.333333 85.333333 0 0 1-85.333334 85.333334h-116.138666V541.97333299h66.346666v-21.056c0-121.685333-97.002667-220.693333-217.92-223.914666l-6.058666-0.085334h-7.125334c-123.712 0-224 100.288-224 224v21.056h66.368v264.661334H234.666667a85.333333 85.333333 0 0 1-85.333334-85.333334v-93.994666a85.354667 85.354667 0 0 1 71.104-84.138667v-22.250667c0-159.061333 128.938667-288 288-288z m27.52 313.813334v256h-62.165334v-256h62.165334z m103.616 42.666666v192H584.533333v-192h62.165334z m-207.232 0v192h-62.165334v-192H439.466667z m-152.661334 16.576H234.666667a21.333333 21.333333 0 0 0-21.333334 21.333334v93.994666a21.333333 21.333333 0 0 0 21.333334 21.333334h52.138666v-136.661334z m502.528 0h-52.138666v136.661334H789.333333a21.333333 21.333333 0 0 0 21.333334-21.333334v-93.994666a21.333333 21.333333 0 0 0-21.333334-21.333334z"  ></path></symbol><symbol id="icon-translate" viewBox="0 0 1024 1024"><path d="M874.666667 192.00000033v64h-42.666667v426.666666c0 35.349333-30.72 64-68.565333 64h-149.354667l113.749333 128h-85.632l-113.770666-128h-11.562667l-113.749333 128h-85.610667l113.728-128h-170.666667C222.72 746.66666633 192 718.01600033 192 682.66666633V256.00000033H149.333333V192.00000033h725.333334z m-106.666667 64H256v426.666666h512V256.00000033zM405.333333 490.66666633v64h-64v-64h64z m277.333334 0v64H448v-64h234.666667z m0-106.666666v64H448v-64h234.666667z m-277.333334 0v64h-64v-64h64z"  ></path></symbol><symbol id="icon-video" viewBox="0 0 1024 1024"><path d="M658.069333 234.66666667a64 64 0 0 1 64 64l-0.021333 33.664 49.28-38.4A64 64 0 0 1 874.666667 344.44799967v338.368a64 64 0 0 1-103.338667 50.474667l-49.28-38.4v26.496a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V298.66666667a64 64 0 0 1 64-64h444.736z m0 64H213.333333v422.698667h444.736l-0.128-157.589334L810.666667 682.79466667V344.42666667l-152.704 118.933333 0.106666-164.693333zM384 375.97866667a42.666667 42.666667 0 0 1 22.741333 6.570667l133.866667 84.330666a42.666667 42.666667 0 0 1 0.32 72l-133.866667 86.016A42.666667 42.666667 0 0 1 341.333333 588.99199967v-170.346666a42.666667 42.666667 0 0 1 42.666667-42.666667z m21.333333 81.322667v92.629333l72.789334-46.762667L405.333333 457.30133367z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M469.333 192c153.174 0 277.334 124.16 277.334 277.333 0 68.054-24.534 130.411-65.216 178.688L846.336 818.24l-48.341 49.877L630.4 695.125a276.053 276.053 0 0 1-161.067 51.542C316.16 746.667 192 622.507 192 469.333S316.16 192 469.333 192z m0 64C351.51 256 256 351.51 256 469.333s95.51 213.334 213.333 213.334 213.334-95.51 213.334-213.334S587.157 256 469.333 256z"  ></path></symbol></svg>',
    v = (v = document.getElementsByTagName('script'))[v.length - 1].getAttribute('data-injectcss')
  if (v && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0
    try {
      document.write('<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>')
    } catch (e) {
      console && console.log(e)
    }
  }

  function m () {
    h || (h = !0, l())
  }

  t = function () {
    var e, t, a;
    (a = document.createElement('div')).innerHTML = n, n = null, (t = a.getElementsByTagName('svg')[0]) && (t.setAttribute('aria-hidden', 'true'), t.style.position = 'absolute', t.style.width = 0, t.style.height = 0, t.style.overflow = 'hidden', e = t, (a = document.body).firstChild ? (t = a.firstChild).parentNode.insertBefore(e, t) : a.appendChild(e))
  }, document.addEventListener ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState) ? setTimeout(t, 0) : (a = function () {
    document.removeEventListener('DOMContentLoaded', a, !1), t()
  }, document.addEventListener('DOMContentLoaded', a, !1)) : document.attachEvent && (l = t, o = e.document, h = !1, (i = function () {
    try {
      o.documentElement.doScroll('left')
    } catch (e) {
      return void setTimeout(i, 50)
    }
    m()
  })(), o.onreadystatechange = function () {
    'complete' == o.readyState && (o.onreadystatechange = null, m())
  })
}
