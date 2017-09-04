(function(window){var svgSprite='<svg><symbol id="icon-zhuye" viewBox="0 0 1024 1024"><path d="M845.034667 515.456 527.018667 199.232c-8.298667-8.277333-21.76-8.277333-30.058667 0L178.965333 515.456C170.666667 523.712 170.666667 537.109333 178.965333 545.365333c8.298667 8.256 21.76 8.256 30.058667 0L256 498.666667l0 246.976c0 47.125333 38.208 85.333333 85.333333 85.333333l341.333333 0c47.125333 0 85.333333-38.208 85.333333-85.333333L768 498.666667l46.976 46.72c8.298667 8.256 21.76 8.256 30.058667 0C853.333333 537.109333 853.333333 523.712 845.034667 515.456zM725.333333 745.642667c0 23.552-19.093333 42.666667-42.666667 42.666667L341.333333 788.309333c-23.573333 0-42.666667-19.114667-42.666667-42.666667L298.666667 456.234667l213.333333-212.138667 213.333333 212.138667L725.333333 745.642667z"  ></path></symbol><symbol id="icon-wechat-copy" viewBox="0 0 1024 1024"><path d="M693.12 347.264c11.776 0 23.36 0.896 35.008 2.176-31.36-146.048-187.456-254.528-365.696-254.528-199.232 0-362.432 135.744-362.432 308.224 0 99.52 54.272 181.248 145.024 244.736l-36.224 108.992 126.72-63.488c45.312 8.896 81.664 18.112 126.912 18.112 11.392 0 22.656-0.512 33.792-1.344-7.040-24.256-11.2-49.6-11.2-76.032 0.064-158.336 136-286.848 308.096-286.848zM498.304 249.024c27.392 0 45.376 17.984 45.376 45.248 0 27.136-17.984 45.312-45.376 45.312-27.072 0-54.336-18.176-54.336-45.312 0-27.328 27.2-45.248 54.336-45.248zM244.672 339.584c-27.2 0-54.592-18.176-54.592-45.312 0-27.264 27.392-45.248 54.592-45.248s45.248 17.92 45.248 45.248c0 27.136-18.048 45.312-45.248 45.312z"  ></path><path d="M1024 629.76c0-144.896-145.024-262.976-307.904-262.976-172.48 0-308.224 118.144-308.224 262.976 0 145.28 135.808 262.976 308.224 262.976 36.096 0 72.512-9.024 108.736-18.112l99.392 54.528-27.264-90.624c72.768-54.656 127.040-127.040 127.040-208.768zM616.128 584.384c-17.984 0-36.224-17.92-36.224-36.224 0-18.048 18.24-36.224 36.224-36.224 27.52 0 45.376 18.176 45.376 36.224 0 18.304-17.856 36.224-45.376 36.224zM815.488 584.384c-17.856 0-36.032-17.92-36.032-36.224 0-18.048 18.112-36.224 36.032-36.224 27.264 0 45.376 18.176 45.376 36.224 0 18.304-18.112 36.224-45.376 36.224z"  ></path></symbol><symbol id="icon-qq" viewBox="0 0 1024 1024"><path d="M944.0512 687.232c-6.8096-93.8368-69.7728-172.4672-106.176-213.12 5.056-11.8272 17.344-80.2944-30.1312-127.0272 0.064-1.1136 0.064-2.24 0.064-3.328 0-184.3072-131.1872-316.9792-295.7952-317.5808C347.3664 26.7904 216.192 159.4496 216.192 343.7568c0 1.088-0.0128 2.2016 0.064 3.328-47.4752 46.72-35.1616 115.2-30.1312 127.0272-36.3648 40.6656-99.3536 119.2832-106.176 213.12-1.2288 24.6656 2.5856 60.5952 14.6304 76.5696 14.6816 19.4688 54.9888-3.9168 83.8144-66.1376 8.0128 28.8384 26.5216 72.8448 68.416 128.704-70.0928 16-90.0864 85.12-66.5088 122.9184 16.64 26.624 54.7072 48.5248 120.3328 48.5248 116.7488 0 168.2944-31.3728 191.3088-53.2224 4.6848-4.7616 11.456-7.0656 20.0832-7.0784 8.6144 0.0128 15.3856 2.3168 20.0576 7.0784 23.0016 21.8496 74.5856 53.2224 191.2832 53.2224 65.6512 0 103.7056-21.9008 120.32-48.5248 23.5904-37.7856 3.5968-106.9184-66.4704-122.9184 41.8816-55.8592 60.4032-99.8656 68.416-128.704 28.8256 62.2208 69.1328 85.6064 83.8272 66.1376C941.4912 747.84 945.3184 711.8976 944.0512 687.232L944.0512 687.232z"  ></path></symbol><symbol id="icon-weibo" viewBox="0 0 1267 1024"><path d="M938.447736 498.481389c-49.261013-9.6832-25.287737-36.526384-25.287737-36.526384s48.190665-80.394974-9.561144-138.850959c-71.609989-72.398666-245.600888 9.216879-245.600887 9.21688-66.449163 20.856124-48.822859-9.511068-39.40881-61.216354 0-60.903387-20.643306-163.991601-197.676244-103.097604-176.829509 61.216354-328.681119 275.68015-328.681119 275.680151C-13.366416 586.187273 0.629471 696.345413 0.629471 696.345413c26.383122 243.156615 281.836212 309.899967 480.507691 325.701673 209.005651 16.571605 491.182997-72.868117 576.704371-256.654884 85.546412-184.087215-69.929356-256.964721-119.393797-266.910813zM496.629031 953.482266c-207.537836 9.830295-375.291301-95.411133-375.291301-235.476404 0-140.237403 167.753465-252.664554 375.291301-262.341495 207.631726-9.6832 375.691899 76.839669 375.691898 216.782882 0 140.033974-168.060173 271.50517-375.691898 281.035017zM455.198453 548.014683c-208.680165 24.696229-184.587962 222.435067-184.587962 222.435067s-2.121917 62.621576 55.983545 94.503528c122.079055 66.893576 247.816694 26.39877 311.3803-56.571923 63.53544-83.017638 26.273583-284.909548-182.775883-260.366672z m-52.656705 277.536044c-38.914322 4.610005-70.342473-18.105143-70.342473-51.094999 0-32.839632 27.901012-67.215932 66.871669-71.312671 44.763676-4.328334 73.925945 21.776247 73.925945 54.744195 0.00313 32.811465-31.587764 63.184916-70.455141 67.663475z m123.061771-106.014456c-13.222858 9.977389-29.412643 8.597205-36.410585-3.380044-7.260835-11.67993-4.534892-30.376581 8.800633-40.210006 15.460572-11.629855 31.543948-8.290497 38.519984 3.389433 7.001073 11.945952 1.999859 29.900871-10.910032 40.200617z m514.514691-306.695184c16.803201 0 31.130832-12.593794 33.490603-28.990138 0.325486-1.23309 0.481969-2.290919 0.481969-3.677362 25.472388-231.799041-187.824042-191.889484-187.824041-191.889484-18.943895 0-34.113408 15.47935-34.113408 34.811324 0 19.015878 15.172642 34.495228 34.113408 34.495228 153.213016-34.197909 119.409446 120.730167 119.409445 120.730167 0.006259 19.18488 15.426146 34.520265 34.442024 34.520265zM1015.271756 8.2592c-73.79137-17.479209-149.595117-2.412976-170.854968 1.686893-1.636818 0.165873-3.192264 1.727578-4.700765 2.043674-0.716695 0.150224-1.186145 0.916993-1.186146 0.916994-20.959403 5.996449-36.27288 25.606964-36.27288 48.763395 0 27.63186 22.133029 50.353268 49.755501 50.353268 0 0 26.821276-3.652325 45.039087-10.841179 18.058198-7.354726 170.757949-5.480053 246.661846 123.396646 41.371114 94.027819 18.186515 156.946713 15.313477 167.071197 0 0-9.852203 24.427078-9.852202 48.475466 0 27.785214 22.120511 45.236256 49.542683 45.236256 22.940484 0 42.178568-3.160967 47.824494-42.394516h0.294189c81.468451-274.565987-99.629929-403.589781-231.564316-434.708094z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)