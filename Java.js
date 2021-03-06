/*### SLICK JS ###*/
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
/*### END SLICK ###*/

var iconesPagamento = 'https://cdn.awsli.com.br/2062/2062614/arquivos/icones_pagamento.png';
var iconeCompraSegura = '<svg xmlns="http://www.w3.org/2000/svg" class="comprasegura" xml:space="preserve" width="144px" height="37px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 144 36.92"> <path id="Shape" class="fil0" d="M29.42 6.48l-14.13 -5.87c-0.35,-0.15 -0.75,-0.15 -1.11,0l-14.13 5.87c-0.54,0.22 -0.89,0.75 -0.89,1.33l0 7.13c0,9.82 5.94,18.66 15.03,22.37 0.35,0.14 0.74,0.14 1.09,0 9.09,-3.71 15.03,-12.55 15.03,-22.37l0 -7.13c0,-0.58 -0.35,-1.11 -0.89,-1.33zm-1.99 8.46c0,8.35 -4.91,16.04 -12.69,19.47 -7.58,-3.34 -12.69,-10.89 -12.69,-19.47l0 -6.17 12.69 -5.27 12.69 5.27 0 6.17zm-14.29 4.86l6.2 -6.2c0.56,-0.56 1.48,-0.56 2.04,0 0.56,0.57 0.56,1.48 0,2.04l-7.22 7.22c-0.56,0.57 -1.47,0.56 -2.04,0l-4.03 -4.03c-0.56,-0.56 -0.56,-1.47 0,-2.04 0.56,-0.56 1.48,-0.56 2.04,0l3.01 3.01z"/> <path id="COMPRASEGURA" class="fil1" d="M43.39 6.09c-0.27,-0.27 -0.59,-0.48 -0.95,-0.63 -0.36,-0.15 -0.74,-0.23 -1.12,-0.23 -0.54,0 -1.02,0.13 -1.47,0.39 -0.44,0.25 -0.79,0.6 -1.05,1.05 -0.26,0.44 -0.39,0.92 -0.39,1.45 0,0.52 0.13,1.01 0.39,1.45 0.26,0.44 0.61,0.79 1.05,1.04 0.45,0.26 0.93,0.39 1.47,0.39 0.38,0 0.75,-0.07 1.11,-0.22 0.36,-0.15 0.68,-0.35 0.96,-0.61l0.42 0.44c-0.34,0.31 -0.74,0.56 -1.18,0.75 -0.44,0.18 -0.88,0.27 -1.34,0.27 -0.65,0 -1.25,-0.15 -1.8,-0.47 -0.54,-0.31 -0.97,-0.74 -1.29,-1.28 -0.32,-0.54 -0.48,-1.12 -0.48,-1.76 0,-0.64 0.16,-1.22 0.48,-1.75 0.33,-0.53 0.76,-0.96 1.31,-1.27 0.55,-0.31 1.15,-0.46 1.79,-0.46 0.47,0 0.92,0.08 1.35,0.26 0.44,0.17 0.82,0.41 1.15,0.72l-0.41 0.47zm4.65 -1.45c0.66,0 1.26,0.15 1.81,0.46 0.54,0.31 0.98,0.74 1.3,1.27 0.32,0.53 0.48,1.11 0.48,1.75 0,0.64 -0.16,1.22 -0.48,1.76 -0.32,0.54 -0.76,0.97 -1.3,1.28 -0.55,0.32 -1.15,0.47 -1.81,0.47 -0.66,0 -1.26,-0.15 -1.81,-0.47 -0.55,-0.31 -0.98,-0.74 -1.3,-1.28 -0.32,-0.54 -0.48,-1.12 -0.48,-1.76 0,-0.64 0.16,-1.22 0.48,-1.75 0.32,-0.53 0.75,-0.96 1.3,-1.27 0.55,-0.31 1.15,-0.46 1.81,-0.46zm0.01 0.61c-0.53,0 -1.01,0.12 -1.46,0.38 -0.44,0.26 -0.8,0.6 -1.06,1.04 -0.26,0.44 -0.39,0.92 -0.39,1.45 0,0.52 0.13,1.01 0.39,1.46 0.26,0.44 0.62,0.8 1.06,1.05 0.45,0.26 0.93,0.39 1.46,0.39 0.52,0 1,-0.13 1.44,-0.39 0.44,-0.25 0.8,-0.61 1.06,-1.05 0.26,-0.45 0.39,-0.94 0.39,-1.46 0,-0.53 -0.13,-1.01 -0.39,-1.45 -0.26,-0.44 -0.62,-0.78 -1.06,-1.04 -0.44,-0.26 -0.92,-0.38 -1.44,-0.38zm5.08 -0.57l0.84 0 2.7 5.17 2.67 -5.17 0.85 0 0 6.9 -0.63 0 -0.01 -5.95 -2.7 5.21 -0.37 0 -2.71 -5.21 0 5.95 -0.64 0 0 -6.9zm11.76 0.01c0.86,0 1.52,0.2 1.98,0.6 0.47,0.4 0.7,0.96 0.7,1.69 0,0.75 -0.23,1.34 -0.7,1.75 -0.46,0.41 -1.12,0.62 -1.98,0.62l-1.86 0 0 2.23 -0.68 0 0 -6.89 2.54 0zm-0.03 4.05c0.66,0 1.17,-0.15 1.52,-0.45 0.36,-0.3 0.54,-0.73 0.54,-1.29 0,-0.55 -0.18,-0.97 -0.53,-1.26 -0.36,-0.29 -0.86,-0.44 -1.53,-0.44l-1.83 0 0 3.44 1.83 0zm8.61 2.84l-1.49 -2.25c-0.21,0.01 -0.37,0.02 -0.48,0.02l-1.89 0 0 2.23 -0.68 0 0 -6.89 2.57 0c0.86,0 1.52,0.2 1.99,0.6 0.47,0.4 0.71,0.96 0.71,1.69 0,0.57 -0.14,1.04 -0.42,1.43 -0.27,0.38 -0.67,0.64 -1.18,0.79l1.65 2.38 -0.78 0zm-1.97 -2.84c0.65,0 1.16,-0.15 1.51,-0.45 0.36,-0.3 0.54,-0.73 0.54,-1.29 0,-0.55 -0.18,-0.97 -0.54,-1.26 -0.35,-0.29 -0.86,-0.44 -1.51,-0.44l-1.89 0 0 3.44 1.89 0zm9.69 2.84l-0.82 -1.84 -3.82 0 -0.81 1.84 -0.73 0 3.1 -6.89 0.71 0 3.1 6.89 -0.73 0zm-4.38 -2.45l3.29 0 -1.65 -3.72 -1.64 3.72zm12.77 -3.31c-0.28,-0.18 -0.59,-0.32 -0.92,-0.41 -0.34,-0.1 -0.65,-0.15 -0.95,-0.15 -0.47,0 -0.85,0.1 -1.14,0.28 -0.28,0.19 -0.42,0.45 -0.42,0.77 0,0.28 0.08,0.51 0.23,0.69 0.16,0.17 0.35,0.31 0.58,0.42 0.23,0.1 0.55,0.21 0.95,0.34 0.46,0.13 0.84,0.27 1.13,0.4 0.28,0.14 0.52,0.33 0.72,0.59 0.2,0.26 0.31,0.59 0.31,1.01 0,0.37 -0.11,0.7 -0.32,0.98 -0.2,0.28 -0.49,0.5 -0.87,0.65 -0.37,0.16 -0.8,0.23 -1.29,0.23 -0.48,0 -0.94,-0.09 -1.4,-0.28 -0.46,-0.19 -0.85,-0.44 -1.18,-0.76l0.32 -0.56c0.31,0.3 0.67,0.54 1.07,0.71 0.41,0.17 0.81,0.25 1.2,0.25 0.53,0 0.94,-0.1 1.25,-0.32 0.31,-0.21 0.47,-0.5 0.47,-0.86 0,-0.29 -0.08,-0.52 -0.24,-0.71 -0.16,-0.18 -0.35,-0.32 -0.58,-0.42 -0.23,-0.1 -0.55,-0.21 -0.97,-0.34 -0.46,-0.15 -0.84,-0.28 -1.12,-0.41 -0.28,-0.13 -0.52,-0.32 -0.72,-0.57 -0.19,-0.26 -0.29,-0.59 -0.29,-0.99 0,-0.35 0.1,-0.66 0.29,-0.92 0.2,-0.26 0.48,-0.46 0.83,-0.6 0.35,-0.14 0.77,-0.22 1.23,-0.22 0.38,0 0.75,0.06 1.13,0.17 0.38,0.11 0.71,0.26 1,0.44l-0.3 0.59zm2.17 -1.13l4.6 0 0 0.61 -3.92 0 0 2.47 3.51 0 0 0.61 -3.51 0 0 2.58 4.05 0 0 0.62 -4.73 0 0 -6.89zm11.23 3.52l0.6 0 0 2.52c-0.33,0.28 -0.72,0.5 -1.17,0.66 -0.44,0.16 -0.89,0.24 -1.35,0.24 -0.65,0 -1.25,-0.15 -1.8,-0.47 -0.54,-0.31 -0.98,-0.74 -1.3,-1.28 -0.32,-0.54 -0.48,-1.12 -0.48,-1.76 0,-0.64 0.16,-1.22 0.48,-1.75 0.32,-0.53 0.76,-0.96 1.31,-1.27 0.56,-0.31 1.16,-0.46 1.82,-0.46 0.47,0 0.92,0.08 1.35,0.24 0.44,0.16 0.83,0.39 1.16,0.69l-0.39 0.48c-0.29,-0.26 -0.61,-0.46 -0.98,-0.6 -0.36,-0.14 -0.75,-0.22 -1.14,-0.22 -0.53,0 -1.02,0.13 -1.47,0.39 -0.44,0.26 -0.8,0.61 -1.06,1.05 -0.26,0.44 -0.39,0.92 -0.39,1.45 0,0.53 0.13,1.02 0.39,1.46 0.26,0.44 0.62,0.8 1.07,1.05 0.45,0.26 0.94,0.39 1.47,0.39 0.33,0 0.65,-0.05 0.98,-0.16 0.32,-0.11 0.62,-0.26 0.9,-0.46l0 -2.19zm3.12 0.57c0,0.71 0.19,1.26 0.58,1.65 0.38,0.4 0.91,0.59 1.6,0.59 0.68,0 1.21,-0.19 1.59,-0.59 0.38,-0.39 0.57,-0.94 0.57,-1.65l0 -4.1 0.68 0 0 4.1c0,0.89 -0.25,1.59 -0.75,2.1 -0.5,0.5 -1.2,0.75 -2.09,0.75 -0.9,0 -1.59,-0.25 -2.1,-0.75 -0.51,-0.51 -0.76,-1.21 -0.76,-2.1l0 -4.1 0.68 0 0 4.1zm11.57 2.8l-1.49 -2.25c-0.21,0.01 -0.37,0.02 -0.48,0.02l-1.89 0 0 2.23 -0.68 0 0 -6.89 2.57 0c0.86,0 1.52,0.2 1.99,0.6 0.47,0.4 0.71,0.96 0.71,1.69 0,0.57 -0.14,1.04 -0.42,1.43 -0.27,0.38 -0.67,0.64 -1.18,0.79l1.65 2.38 -0.78 0zm-1.97 -2.84c0.66,0 1.16,-0.15 1.52,-0.45 0.35,-0.3 0.53,-0.73 0.53,-1.29 0,-0.55 -0.18,-0.97 -0.53,-1.26 -0.36,-0.29 -0.86,-0.44 -1.52,-0.44l-1.89 0 0 3.44 1.89 0zm9.69 2.84l-0.82 -1.84 -3.82 0 -0.81 1.84 -0.73 0 3.1 -6.89 0.71 0 3.1 6.89 -0.73 0zm-4.37 -2.45l3.28 0 -1.65 -3.72 -1.63 3.72z"/> <path id="CERTIFICADOSSL" class="fil1" d="M43.39 29.47c-0.27,-0.27 -0.59,-0.48 -0.95,-0.63 -0.36,-0.15 -0.74,-0.22 -1.12,-0.22 -0.54,0 -1.02,0.12 -1.47,0.38 -0.44,0.26 -0.79,0.6 -1.05,1.05 -0.26,0.44 -0.39,0.93 -0.39,1.45 0,0.53 0.13,1.01 0.39,1.45 0.26,0.44 0.61,0.79 1.05,1.05 0.45,0.26 0.93,0.38 1.47,0.38 0.38,0 0.75,-0.07 1.11,-0.22 0.36,-0.15 0.68,-0.35 0.96,-0.61l0.42 0.44c-0.34,0.32 -0.74,0.57 -1.18,0.75 -0.44,0.18 -0.88,0.28 -1.34,0.28 -0.65,0 -1.25,-0.16 -1.8,-0.48 -0.54,-0.31 -0.97,-0.74 -1.29,-1.28 -0.32,-0.54 -0.48,-1.12 -0.48,-1.76 0,-0.64 0.16,-1.22 0.48,-1.75 0.33,-0.53 0.76,-0.96 1.31,-1.27 0.55,-0.31 1.15,-0.46 1.79,-0.46 0.47,0 0.92,0.08 1.35,0.26 0.44,0.17 0.82,0.41 1.15,0.72l-0.41 0.47zm1.9 -1.4l4.61 0 0 0.61 -3.93 0 0 2.47 3.52 0 0 0.61 -3.52 0 0 2.59 4.06 0 0 0.61 -4.74 0 0 -6.89zm10.94 6.89l-1.49 -2.25c-0.21,0.01 -0.37,0.02 -0.48,0.02l-1.89 0 0 2.23 -0.68 0 0 -6.89 2.57 0c0.86,0 1.53,0.2 1.99,0.6 0.47,0.4 0.71,0.96 0.71,1.69 0,0.57 -0.14,1.05 -0.42,1.43 -0.27,0.38 -0.67,0.64 -1.18,0.79l1.66 2.38 -0.79 0zm-1.97 -2.84c0.66,0 1.16,-0.15 1.52,-0.45 0.35,-0.3 0.53,-0.73 0.53,-1.29 0,-0.55 -0.18,-0.97 -0.53,-1.26 -0.36,-0.29 -0.86,-0.44 -1.52,-0.44l-1.89 0 0 3.44 1.89 0zm3.57 -4.06l5.23 0 0 0.62 -2.27 0 0 6.28 -0.68 0 0 -6.28 -2.28 0 0 -0.62zm6.42 0.01l0.68 0 0 6.89 -0.68 0 0 -6.89zm2.85 0l4.31 0 0 0.61 -3.63 0 0 2.65 3.24 0 0 0.61 -3.24 0 0 3.02 -0.68 0 0 -6.89zm5.51 0l0.68 0 0 6.89 -0.68 0 0 -6.89zm7.85 1.4c-0.28,-0.27 -0.6,-0.48 -0.96,-0.63 -0.36,-0.15 -0.73,-0.22 -1.12,-0.22 -0.53,0 -1.02,0.12 -1.46,0.38 -0.45,0.26 -0.8,0.6 -1.06,1.05 -0.25,0.44 -0.38,0.93 -0.38,1.45 0,0.53 0.13,1.01 0.38,1.45 0.26,0.44 0.61,0.79 1.06,1.05 0.44,0.26 0.93,0.38 1.46,0.38 0.38,0 0.75,-0.07 1.11,-0.22 0.36,-0.15 0.68,-0.35 0.97,-0.61l0.41 0.44c-0.34,0.32 -0.73,0.57 -1.17,0.75 -0.44,0.18 -0.89,0.28 -1.35,0.28 -0.65,0 -1.25,-0.16 -1.79,-0.48 -0.55,-0.31 -0.98,-0.74 -1.3,-1.28 -0.31,-0.54 -0.47,-1.12 -0.47,-1.76 0,-0.64 0.16,-1.22 0.48,-1.75 0.32,-0.53 0.75,-0.96 1.3,-1.27 0.55,-0.31 1.15,-0.46 1.8,-0.46 0.47,0 0.91,0.08 1.35,0.26 0.43,0.17 0.81,0.41 1.14,0.72l-0.4 0.47zm7.01 5.49l-0.82 -1.83 -3.82 0 -0.81 1.83 -0.73 0 3.1 -6.89 0.71 0 3.1 6.89 -0.73 0zm-4.38 -2.45l3.29 0 -1.65 -3.72 -1.64 3.72zm9.01 -4.44c0.66,0 1.26,0.15 1.8,0.46 0.54,0.3 0.97,0.71 1.28,1.24 0.31,0.53 0.47,1.11 0.47,1.75 0,0.64 -0.16,1.22 -0.47,1.74 -0.31,0.53 -0.74,0.94 -1.29,1.24 -0.54,0.3 -1.14,0.46 -1.81,0.46l-2.74 0 0 -6.89 2.76 0zm0.02 6.28c0.52,0 1,-0.13 1.43,-0.38 0.43,-0.25 0.78,-0.59 1.03,-1.02 0.25,-0.43 0.38,-0.9 0.38,-1.43 0,-0.52 -0.13,-1 -0.39,-1.44 -0.25,-0.43 -0.6,-0.77 -1.04,-1.02 -0.43,-0.25 -0.91,-0.38 -1.44,-0.38l-2.07 0 0 5.67 2.1 0zm7.81 -6.33c0.65,0 1.26,0.15 1.8,0.46 0.55,0.31 0.99,0.74 1.31,1.27 0.32,0.53 0.48,1.11 0.48,1.75 0,0.64 -0.16,1.22 -0.48,1.76 -0.32,0.54 -0.76,0.97 -1.31,1.28 -0.54,0.32 -1.15,0.48 -1.8,0.48 -0.66,0 -1.26,-0.16 -1.81,-0.48 -0.55,-0.31 -0.98,-0.74 -1.3,-1.28 -0.32,-0.54 -0.48,-1.12 -0.48,-1.76 0,-0.64 0.16,-1.22 0.48,-1.75 0.32,-0.53 0.75,-0.96 1.3,-1.27 0.55,-0.31 1.15,-0.46 1.81,-0.46zm0.01 0.61c-0.53,0 -1.01,0.12 -1.46,0.38 -0.44,0.26 -0.8,0.6 -1.06,1.04 -0.26,0.44 -0.4,0.93 -0.4,1.45 0,0.53 0.14,1.01 0.4,1.46 0.26,0.44 0.62,0.8 1.06,1.05 0.45,0.27 0.93,0.39 1.46,0.39 0.52,0 1,-0.12 1.44,-0.39 0.44,-0.25 0.8,-0.61 1.06,-1.05 0.26,-0.45 0.39,-0.93 0.39,-1.46 0,-0.52 -0.13,-1.01 -0.39,-1.45 -0.26,-0.44 -0.62,-0.78 -1.06,-1.04 -0.44,-0.26 -0.92,-0.38 -1.44,-0.38zm11.6 0.57c-0.28,-0.18 -0.59,-0.32 -0.92,-0.41 -0.34,-0.1 -0.65,-0.14 -0.95,-0.14 -0.47,0 -0.85,0.09 -1.13,0.28 -0.29,0.18 -0.43,0.44 -0.43,0.76 0,0.28 0.08,0.51 0.24,0.69 0.15,0.17 0.35,0.32 0.58,0.42 0.23,0.1 0.54,0.21 0.94,0.34 0.47,0.13 0.84,0.27 1.13,0.4 0.28,0.14 0.53,0.33 0.73,0.59 0.2,0.26 0.3,0.59 0.3,1.01 0,0.37 -0.11,0.7 -0.31,0.98 -0.21,0.28 -0.5,0.5 -0.87,0.65 -0.38,0.16 -0.81,0.23 -1.29,0.23 -0.48,0 -0.95,-0.09 -1.41,-0.28 -0.45,-0.19 -0.84,-0.44 -1.17,-0.76l0.31 -0.56c0.31,0.3 0.67,0.54 1.08,0.71 0.4,0.17 0.8,0.25 1.2,0.25 0.52,0 0.94,-0.1 1.25,-0.31 0.3,-0.22 0.46,-0.51 0.46,-0.87 0,-0.28 -0.08,-0.52 -0.24,-0.71 -0.15,-0.18 -0.35,-0.32 -0.58,-0.42 -0.23,-0.1 -0.55,-0.21 -0.96,-0.34 -0.47,-0.15 -0.84,-0.28 -1.12,-0.41 -0.29,-0.13 -0.53,-0.32 -0.72,-0.57 -0.2,-0.26 -0.3,-0.59 -0.3,-0.99 0,-0.35 0.1,-0.65 0.3,-0.92 0.19,-0.26 0.47,-0.46 0.82,-0.6 0.36,-0.14 0.77,-0.21 1.23,-0.21 0.38,0 0.75,0.05 1.13,0.16 0.38,0.11 0.71,0.26 1,0.45l-0.3 0.58zm5.99 0c-0.28,-0.18 -0.59,-0.32 -0.93,-0.41 -0.33,-0.1 -0.64,-0.14 -0.94,-0.14 -0.47,0 -0.85,0.09 -1.14,0.28 -0.28,0.18 -0.43,0.44 -0.43,0.76 0,0.28 0.08,0.51 0.24,0.69 0.16,0.17 0.35,0.32 0.58,0.42 0.23,0.1 0.55,0.21 0.95,0.34 0.46,0.13 0.84,0.27 1.12,0.4 0.29,0.14 0.53,0.33 0.73,0.59 0.2,0.26 0.3,0.59 0.3,1.01 0,0.37 -0.1,0.7 -0.31,0.98 -0.2,0.28 -0.49,0.5 -0.87,0.65 -0.37,0.16 -0.8,0.23 -1.29,0.23 -0.48,0 -0.94,-0.09 -1.4,-0.28 -0.46,-0.19 -0.85,-0.44 -1.18,-0.76l0.32 -0.56c0.31,0.3 0.66,0.54 1.07,0.71 0.41,0.17 0.81,0.25 1.2,0.25 0.53,0 0.94,-0.1 1.25,-0.31 0.31,-0.22 0.46,-0.51 0.46,-0.87 0,-0.28 -0.07,-0.52 -0.23,-0.71 -0.16,-0.18 -0.35,-0.32 -0.58,-0.42 -0.23,-0.1 -0.55,-0.21 -0.97,-0.34 -0.46,-0.15 -0.84,-0.28 -1.12,-0.41 -0.28,-0.13 -0.52,-0.32 -0.72,-0.57 -0.19,-0.26 -0.29,-0.59 -0.29,-0.99 0,-0.35 0.1,-0.65 0.29,-0.92 0.2,-0.26 0.47,-0.46 0.83,-0.6 0.35,-0.14 0.76,-0.21 1.23,-0.21 0.37,0 0.75,0.05 1.13,0.16 0.37,0.11 0.71,0.26 1,0.45l-0.3 0.58zm2.17 -1.13l0.67 0 0 6.28 3.04 0 0 0.61 -3.71 0 0 -6.89z"/> <path id="SITEPROTEGIDO" class="fil1" d="M44.24 18.04c-0.46,-0.28 -0.97,-0.51 -1.52,-0.69 -0.55,-0.19 -1,-0.29 -1.35,-0.29 -0.22,0 -0.4,0.05 -0.52,0.13 -0.13,0.09 -0.19,0.21 -0.19,0.38 0,0.23 0.12,0.41 0.36,0.53 0.25,0.13 0.64,0.27 1.17,0.42 0.61,0.17 1.11,0.34 1.5,0.52 0.4,0.17 0.74,0.44 1.03,0.8 0.29,0.37 0.44,0.84 0.44,1.43 0,0.6 -0.16,1.11 -0.47,1.52 -0.32,0.42 -0.75,0.73 -1.28,0.93 -0.54,0.21 -1.14,0.31 -1.81,0.31 -0.73,0 -1.48,-0.13 -2.22,-0.38 -0.74,-0.25 -1.38,-0.59 -1.92,-1.02l0.96 -1.95c0.43,0.38 0.96,0.7 1.59,0.95 0.63,0.26 1.17,0.39 1.62,0.39 0.28,0 0.49,-0.05 0.65,-0.16 0.16,-0.1 0.23,-0.26 0.23,-0.45 0,-0.24 -0.12,-0.42 -0.38,-0.55 -0.25,-0.13 -0.65,-0.26 -1.18,-0.4 -0.6,-0.16 -1.09,-0.32 -1.49,-0.49 -0.39,-0.16 -0.73,-0.42 -1.02,-0.78 -0.29,-0.35 -0.43,-0.81 -0.43,-1.39 0,-0.56 0.15,-1.04 0.44,-1.46 0.3,-0.41 0.71,-0.73 1.25,-0.95 0.54,-0.22 1.17,-0.33 1.88,-0.33 0.65,0 1.29,0.09 1.93,0.27 0.64,0.19 1.2,0.43 1.67,0.74l-0.94 1.97zm1.85 -2.79l2.56 0 0 8.63 -2.56 0 0 -8.63zm3.36 0l7.58 0 0 2.05 -2.51 0 0 6.58 -2.57 0 0 -6.58 -2.5 0 0 -2.05zm8.38 0l7.06 0 0 1.97 -4.5 0 0 1.36 4.08 0 0 1.97 -4.08 0 0 1.36 4.62 0 0 1.97 -7.18 0 0 -8.63zm14.92 0c1.11,0 1.98,0.27 2.59,0.8 0.61,0.54 0.92,1.29 0.92,2.27 0,1.02 -0.31,1.82 -0.92,2.39 -0.61,0.56 -1.48,0.84 -2.59,0.84l-1.36 0.02 0 2.31 -2.55 0 0 -8.63 3.91 0zm-0.12 4.34c0.38,0 0.68,-0.11 0.89,-0.31 0.21,-0.21 0.31,-0.5 0.31,-0.89 0,-0.37 -0.1,-0.66 -0.31,-0.86 -0.21,-0.21 -0.51,-0.31 -0.89,-0.31l-1.24 0 0 2.37 1.24 0zm9.67 4.29l-1.15 -2.33 -1.35 0 0 2.33 -2.56 0 0 -8.63 4.02 0c1.16,0 2.06,0.27 2.69,0.8 0.64,0.54 0.96,1.29 0.96,2.27 0,0.63 -0.13,1.18 -0.38,1.64 -0.25,0.46 -0.61,0.83 -1.08,1.1l1.75 2.82 -2.9 0zm-2.5 -4.29l1.46 0c0.39,0 0.69,-0.11 0.9,-0.31 0.2,-0.21 0.31,-0.5 0.31,-0.89 0,-0.37 -0.11,-0.66 -0.31,-0.86 -0.21,-0.21 -0.51,-0.31 -0.9,-0.31l-1.46 0 0 2.37zm10.57 -4.5c0.89,0 1.69,0.2 2.41,0.58 0.71,0.39 1.28,0.92 1.68,1.6 0.41,0.67 0.61,1.43 0.61,2.28 0,0.85 -0.2,1.62 -0.61,2.31 -0.4,0.68 -0.97,1.22 -1.68,1.61 -0.72,0.39 -1.52,0.58 -2.41,0.58 -0.89,0 -1.7,-0.19 -2.41,-0.58 -0.72,-0.39 -1.28,-0.93 -1.68,-1.61 -0.41,-0.69 -0.61,-1.46 -0.61,-2.31 0,-0.85 0.2,-1.61 0.61,-2.28 0.4,-0.68 0.96,-1.21 1.68,-1.6 0.71,-0.38 1.52,-0.58 2.41,-0.58zm0.04 2.13c-0.38,0 -0.73,0.11 -1.06,0.31 -0.32,0.21 -0.58,0.49 -0.77,0.84 -0.19,0.36 -0.29,0.76 -0.29,1.19 0,0.44 0.1,0.83 0.29,1.19 0.19,0.37 0.45,0.65 0.77,0.86 0.33,0.21 0.68,0.31 1.06,0.31 0.37,0 0.71,-0.1 1.02,-0.31 0.32,-0.21 0.57,-0.49 0.75,-0.85 0.18,-0.36 0.27,-0.76 0.27,-1.2 0,-0.43 -0.09,-0.83 -0.27,-1.19 -0.18,-0.35 -0.43,-0.63 -0.74,-0.84 -0.31,-0.2 -0.66,-0.31 -1.03,-0.31zm4.64 -1.97l7.58 0 0 2.05 -2.51 0 0 6.58 -2.58 0 0 -6.58 -2.49 0 0 -2.05zm8.38 0l7.05 0 0 1.97 -4.49 0 0 1.36 4.07 0 0 1.97 -4.07 0 0 1.36 4.61 0 0 1.97 -7.17 0 0 -8.63zm14.04 4.16l2.2 0 0 3.51c-0.47,0.33 -1.05,0.6 -1.74,0.81 -0.69,0.22 -1.34,0.32 -1.95,0.32 -0.88,0 -1.67,-0.19 -2.38,-0.58 -0.7,-0.39 -1.26,-0.93 -1.66,-1.61 -0.4,-0.68 -0.6,-1.44 -0.6,-2.3 0,-0.84 0.21,-1.61 0.62,-2.29 0.41,-0.68 0.99,-1.21 1.72,-1.6 0.74,-0.38 1.56,-0.58 2.47,-0.58 0.66,0 1.31,0.12 1.97,0.36 0.66,0.24 1.21,0.56 1.67,0.97l-1.45 1.75c-0.3,-0.29 -0.64,-0.52 -1.04,-0.69 -0.4,-0.17 -0.78,-0.26 -1.16,-0.26 -0.41,0 -0.78,0.11 -1.12,0.31 -0.33,0.21 -0.59,0.49 -0.78,0.84 -0.19,0.36 -0.28,0.76 -0.28,1.19 0,0.44 0.1,0.85 0.29,1.21 0.19,0.36 0.46,0.64 0.79,0.85 0.34,0.2 0.71,0.3 1.12,0.3 0.37,0 0.81,-0.11 1.31,-0.35l0 -2.16zm3.47 -4.16l2.56 0 0 8.63 -2.56 0 0 -8.63zm7.79 0c0.91,0 1.72,0.18 2.43,0.54 0.7,0.36 1.24,0.86 1.63,1.51 0.38,0.66 0.58,1.41 0.58,2.26 0,0.86 -0.2,1.61 -0.6,2.27 -0.39,0.65 -0.94,1.16 -1.66,1.51 -0.71,0.36 -1.53,0.54 -2.47,0.54l-3.69 0 0 -8.63 3.78 0zm0.07 6.63c0.58,0 1.05,-0.21 1.42,-0.63 0.36,-0.42 0.54,-0.98 0.54,-1.66 0,-0.69 -0.2,-1.25 -0.58,-1.68 -0.39,-0.42 -0.89,-0.64 -1.5,-0.64l-1.17 0 0 4.61 1.29 0zm9.66 -6.79c0.88,0 1.69,0.2 2.41,0.58 0.71,0.39 1.28,0.92 1.68,1.6 0.41,0.67 0.61,1.43 0.61,2.28 0,0.85 -0.2,1.62 -0.61,2.31 -0.4,0.68 -0.97,1.22 -1.68,1.61 -0.72,0.39 -1.53,0.58 -2.41,0.58 -0.89,0 -1.7,-0.19 -2.41,-0.58 -0.72,-0.39 -1.28,-0.93 -1.68,-1.61 -0.41,-0.69 -0.61,-1.46 -0.61,-2.31 0,-0.85 0.2,-1.61 0.61,-2.28 0.4,-0.68 0.96,-1.21 1.68,-1.6 0.71,-0.38 1.52,-0.58 2.41,-0.58zm0.04 2.13c-0.38,0 -0.73,0.11 -1.06,0.31 -0.32,0.21 -0.58,0.49 -0.77,0.84 -0.19,0.36 -0.29,0.76 -0.29,1.19 0,0.44 0.1,0.83 0.29,1.19 0.19,0.37 0.45,0.65 0.77,0.86 0.33,0.21 0.68,0.31 1.06,0.31 0.37,0 0.71,-0.1 1.02,-0.31 0.32,-0.21 0.57,-0.49 0.75,-0.85 0.18,-0.36 0.27,-0.76 0.27,-1.2 0,-0.43 -0.09,-0.83 -0.27,-1.19 -0.18,-0.35 -0.43,-0.63 -0.74,-0.84 -0.31,-0.2 -0.66,-0.31 -1.03,-0.31z"/> </svg>';

var iconeGoogle = '<svg xmlns="http://www.w3.org/2000/svg" id="googlessl" width="146.021" height="37" viewBox="0 0 146.021 37"> <g transform="translate(-1143.5 -3851)"> <path class="icon-text" d="M6.589-32.724a12.6,12.6,0,0,1-3.781-9.4,12.572,12.572,0,0,1,3.8-9.4,12.816,12.816,0,0,1,9.3-3.707A13.254,13.254,0,0,1,23.345-53.1a11.684,11.684,0,0,1,4.643,5.983h-6.2a6.062,6.062,0,0,0-5.873-3.377,7.476,7.476,0,0,0-5.671,2.294A8.471,8.471,0,0,0,8.057-42.1a8.471,8.471,0,0,0,2.184,6.093A7.111,7.111,0,0,0,15.6-33.715a7.415,7.415,0,0,0,4.992-1.56,6.806,6.806,0,0,0,2.257-4.2H14.334V-43.4H28.392v3.927a12.335,12.335,0,0,1-4.111,7.323A12.411,12.411,0,0,1,15.6-29.016,12.425,12.425,0,0,1,6.589-32.724Zm31.626.04a4.254,4.254,0,0,0,3.152-1.351,5.238,5.238,0,0,0,1.32-3.82,5.22,5.22,0,0,0-1.3-3.8A4.245,4.245,0,0,0,38.23-43a4.146,4.146,0,0,0-3.121,1.336,5.321,5.321,0,0,0-1.273,3.82,5.321,5.321,0,0,0,1.273,3.82A4.128,4.128,0,0,0,38.215-32.684Zm-6.3,1.242a8.577,8.577,0,0,1-2.516-6.429,8.421,8.421,0,0,1,2.547-6.4,8.815,8.815,0,0,1,6.32-2.423,8.815,8.815,0,0,1,6.32,2.423,8.421,8.421,0,0,1,2.547,6.4,8.5,8.5,0,0,1-2.562,6.429,8.827,8.827,0,0,1-6.351,2.454A8.667,8.667,0,0,1,31.91-31.442ZM57-32.684a4.254,4.254,0,0,0,3.152-1.351,5.238,5.238,0,0,0,1.32-3.82,5.22,5.22,0,0,0-1.3-3.8A4.245,4.245,0,0,0,57.021-43,4.146,4.146,0,0,0,53.9-41.66a5.321,5.321,0,0,0-1.273,3.82A5.321,5.321,0,0,0,53.9-34.02,4.128,4.128,0,0,0,57-32.684Zm-6.3,1.242a8.577,8.577,0,0,1-2.516-6.429,8.421,8.421,0,0,1,2.547-6.4,8.815,8.815,0,0,1,6.32-2.423,8.815,8.815,0,0,1,6.32,2.423,8.421,8.421,0,0,1,2.547,6.4,8.5,8.5,0,0,1-2.562,6.429A8.827,8.827,0,0,1,57-28.988,8.667,8.667,0,0,1,50.7-31.442Zm18.557-.047a9.028,9.028,0,0,1-2.314-6.383,8.951,8.951,0,0,1,2.3-6.351,7.629,7.629,0,0,1,5.839-2.469,6.025,6.025,0,0,1,5.4,2.919v-2.671h4.348v17.331a8.533,8.533,0,0,1-2.174,6.041,7.91,7.91,0,0,1-6.1,2.345,10.651,10.651,0,0,1-6.243-1.631A6.169,6.169,0,0,1,67.689-27h4.286a3.356,3.356,0,0,0,1.553,1.817,5.679,5.679,0,0,0,2.888.668,3.969,3.969,0,0,0,2.9-1.149,4.644,4.644,0,0,0,1.165-3.447v-3.013a6.1,6.1,0,0,1-5.435,3.137A7.563,7.563,0,0,1,69.258-31.488Zm9.861-2.64a4.983,4.983,0,0,0,1.367-3.711,4.983,4.983,0,0,0-1.367-3.711,4.406,4.406,0,0,0-3.2-1.351,4.38,4.38,0,0,0-3.183,1.336,4.962,4.962,0,0,0-1.351,3.7,5.036,5.036,0,0,0,1.367,3.727,4.365,4.365,0,0,0,3.183,1.367A4.389,4.389,0,0,0,79.119-34.128Zm9.131,4.892V-52.22h4.379v22.983Zm15.063.248a8.137,8.137,0,0,1-6.118-2.438,8.872,8.872,0,0,1-2.36-6.445,8.732,8.732,0,0,1,2.376-6.414,8.263,8.263,0,0,1,6.15-2.407,8.541,8.541,0,0,1,6.2,2.345,8.309,8.309,0,0,1,2.423,6.258,10.632,10.632,0,0,1-.124,1.677H99.307a4.088,4.088,0,0,0,1.242,2.7,3.868,3.868,0,0,0,2.764,1.025,3.618,3.618,0,0,0,3.354-1.864h4.721a7.553,7.553,0,0,1-2.888,4.007A8.6,8.6,0,0,1,103.313-28.988Zm4.131-10.249a3.75,3.75,0,0,0-1.258-2.733A4.108,4.108,0,0,0,103.375-43a3.882,3.882,0,0,0-2.749,1.025,4.341,4.341,0,0,0-1.32,2.733Z" transform="translate(1177.542 3908.001)"></path> <path class="icon-text" d="M2.428-9.168a.694.694,0,0,0-.451.142.477.477,0,0,0-.175.392.562.562,0,0,0,.128.392.824.824,0,0,0,.339.217,4.288,4.288,0,0,0,.461.135q.25.059.5.145a2.46,2.46,0,0,1,.461.211.913.913,0,0,1,.339.366,1.223,1.223,0,0,1,.128.583,1.272,1.272,0,0,1-.451.975,1.719,1.719,0,0,1-1.2.408A1.938,1.938,0,0,1,1.3-5.554,1.176,1.176,0,0,1,.84-6.545h.988a.607.607,0,0,0,.692.606.724.724,0,0,0,.5-.165.559.559,0,0,0,.184-.438.49.49,0,0,0-.244-.432,1.821,1.821,0,0,0-.59-.237q-.346-.079-.7-.191a1.3,1.3,0,0,1-.593-.392A1.089,1.089,0,0,1,.84-8.535a1.233,1.233,0,0,1,.455-1,1.775,1.775,0,0,1,1.169-.376,1.869,1.869,0,0,1,1.15.326,1.26,1.26,0,0,1,.474.992H3.073a.624.624,0,0,0-.2-.418A.643.643,0,0,0,2.428-9.168Zm5.639,3.92-.3-.863H5.979l-.3.863H4.7L6.328-9.859h1.1L9.049-5.248ZM6.223-6.822H7.534L6.875-8.739ZM9.694-5.248v-4.6h2.846v.712H10.623v1.206h1.463v.712H10.623v1.97Zm6.232-4.612v.712H14.2v1.206h1.528v.712H14.2v1.272h1.726v.712H13.272V-9.859Zm2.925.013h1.864a1.666,1.666,0,0,1,1.11.343,1.089,1.089,0,0,1,.405.87,1.05,1.05,0,0,1-.9,1.034,1.124,1.124,0,0,1,.728.392,1.139,1.139,0,0,1,.273.754,1.071,1.071,0,0,1-.408.873,1.7,1.7,0,0,1-1.107.333h-1.97Zm.929.712v1.192h.837a.731.731,0,0,0,.491-.155.545.545,0,0,0,.181-.438.555.555,0,0,0-.181-.441.721.721,0,0,0-.491-.158Zm0,3.175h.936a.718.718,0,0,0,.5-.168.591.591,0,0,0,.188-.464.6.6,0,0,0-.191-.468.722.722,0,0,0-.5-.171h-.929Zm4.282-1.12v1.832h-.929v-4.6h1.693a1.745,1.745,0,0,1,1.229.4,1.287,1.287,0,0,1,.432.985,1.383,1.383,0,0,1-.264.81,1.359,1.359,0,0,1-.83.514l1.173,1.891h-1.1l-1.1-1.832Zm0-2.056v1.344h.764a.73.73,0,0,0,.534-.181.657.657,0,0,0,.184-.491.657.657,0,0,0-.184-.491.73.73,0,0,0-.534-.181ZM30.52-6.463a1.533,1.533,0,0,0,.389-1.1,1.521,1.521,0,0,0-.389-1.094,1.337,1.337,0,0,0-1.015-.408,1.342,1.342,0,0,0-1.018.412A1.52,1.52,0,0,0,28.1-7.557a1.52,1.52,0,0,0,.392,1.094,1.342,1.342,0,0,0,1.018.412A1.331,1.331,0,0,0,30.52-6.463ZM29.505-5.2a2.3,2.3,0,0,1-1.673-.665,2.266,2.266,0,0,1-.679-1.69,2.26,2.26,0,0,1,.682-1.69,2.3,2.3,0,0,1,1.673-.665,2.293,2.293,0,0,1,1.67.665,2.266,2.266,0,0,1,.679,1.69,2.266,2.266,0,0,1-.679,1.69A2.3,2.3,0,0,1,29.505-5.2Zm8.229-4.645h.995L37.4-5.248H36.344l-.889-3.208-.916,3.208H33.484l-1.3-4.6h.988L34.051-6.3l.929-3.551h1.048L36.9-6.328Zm3.063.679a.694.694,0,0,0-.451.142.477.477,0,0,0-.175.392.562.562,0,0,0,.128.392.824.824,0,0,0,.339.217,4.288,4.288,0,0,0,.461.135q.25.059.5.145a2.46,2.46,0,0,1,.461.211.913.913,0,0,1,.339.366,1.223,1.223,0,0,1,.128.583,1.272,1.272,0,0,1-.451.975,1.719,1.719,0,0,1-1.2.408,1.938,1.938,0,0,1-1.209-.352,1.176,1.176,0,0,1-.461-.992H40.2a.607.607,0,0,0,.692.606.724.724,0,0,0,.5-.165.559.559,0,0,0,.184-.438.49.49,0,0,0-.244-.432,1.821,1.821,0,0,0-.59-.237q-.346-.079-.7-.191a1.3,1.3,0,0,1-.593-.392,1.089,1.089,0,0,1-.244-.741,1.233,1.233,0,0,1,.455-1,1.775,1.775,0,0,1,1.169-.376,1.869,1.869,0,0,1,1.15.326,1.26,1.26,0,0,1,.474.992H41.443a.624.624,0,0,0-.2-.418A.642.642,0,0,0,40.8-9.168Zm2.622,3.92v-4.6h.929v4.6Zm4.928-4.612h.929v4.612h-.929L46.265-8.436v3.189h-.929V-9.859h.929l2.082,3.189Zm2.339,3.986a2.262,2.262,0,0,1-.679-1.687,2.256,2.256,0,0,1,.682-1.687,2.3,2.3,0,0,1,1.67-.665,2.379,2.379,0,0,1,1.334.382,2.1,2.1,0,0,1,.833,1.074H53.413a1.088,1.088,0,0,0-1.054-.606,1.342,1.342,0,0,0-1.018.412,1.52,1.52,0,0,0-.392,1.094,1.52,1.52,0,0,0,.392,1.094,1.276,1.276,0,0,0,.962.412,1.331,1.331,0,0,0,.9-.28,1.222,1.222,0,0,0,.405-.754H52.076v-.7H54.6v.7a2.214,2.214,0,0,1-.738,1.314,2.228,2.228,0,0,1-1.558.563A2.23,2.23,0,0,1,50.686-5.873Z" transform="translate(1207.76 3863.777)"></path> <path class="icon-safe" d="M16.074,37h0v-.1A24.037,24.037,0,0,1,12.5,35.511a24.739,24.739,0,0,1-5.432-3.5,19.959,19.959,0,0,1-4.944-6.248A21.005,21.005,0,0,1,.006,16.129c0-.06-.013-6.037,0-8.871,0-.379,0-.706,0-1C-.01,4.375-.01,4.339,1.243,4.032c.363-.089,1.333-.381,2.675-.786C7.592,2.138,13.743.284,16.044.029V0c.07,0,.145,0,.224.009S16.426,0,16.494,0V.03c2.285.256,8.382,2.11,12.026,3.218,1.329.4,2.29.7,2.649.785,1.242.306,1.242.342,1.229,2.23,0,.29,0,.617,0,1,.013,2.846,0,8.811,0,8.871a21.153,21.153,0,0,1-2.1,9.634,19.932,19.932,0,0,1-4.9,6.247,24.505,24.505,0,0,1-5.385,3.5,23.69,23.69,0,0,1-3.552,1.386V37c-.008,0-.075-.017-.195-.05-.126.035-.193.051-.193.051ZM9.4,15.446a.8.8,0,0,0-.56.226L7.1,17.353a.806.806,0,0,0-.02,1.14l4.751,4.92.01.01,1.681,1.741a.806.806,0,0,0,1.14.02L25.4,14.821a.806.806,0,0,0,.02-1.14l-1.681-1.74a.806.806,0,0,0-1.14-.02l-8.412,8.123-4.2-4.351A.8.8,0,0,0,9.4,15.446Z" transform="translate(1143.5 3851)"></path> </g> </svg>';
var iconePix = '<svg class="pix" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 952.77 338.7"><path d="M393.22,316.26V122a64.71,64.71,0,0,1,64.71-64.71l57.35.08A64.62,64.62,0,0,1,579.77,122v41.34a64.72,64.72,0,0,1-64.71,64.72H434" fill="none" stroke="#939598" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.26"/><path d="M595.8,57.28h24.88a26.56,26.56,0,0,1,26.56,26.56v145.1" fill="none" stroke="#939598" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.26"/><path d="M641.9,34.8,630.62,23.51a7.16,7.16,0,0,1,0-10.13L641.9,2.1a7.18,7.18,0,0,1,10.15,0l11.27,11.28a7.16,7.16,0,0,1,0,10.13L652,34.8a7.17,7.17,0,0,1-10.14,0" fill="#32bcad"/><path d="M695,57.15h24.67a47.85,47.85,0,0,1,33.84,14l57.71,57.71a19.13,19.13,0,0,0,27.07,0l57.5-57.49a47.81,47.81,0,0,1,33.83-14h20.06" fill="none" stroke="#939598" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.26"/><path d="M695,227.67h24.67a47.86,47.86,0,0,0,33.84-14l57.71-57.71a19.15,19.15,0,0,1,27.07,0l57.5,57.5a47.84,47.84,0,0,0,33.83,14h20.06" fill="none" stroke="#939598" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.26"/><path d="M246.13,264.53A46.07,46.07,0,0,1,213.35,251L166,203.62a9,9,0,0,0-12.44,0l-47.51,47.51A46.09,46.09,0,0,1,73.27,264.7H64l60,60a48,48,0,0,0,67.81,0l60.12-60.13Z" fill="#32bcad"/><path d="M73.28,97.09a46.08,46.08,0,0,1,32.78,13.57l47.51,47.52a8.81,8.81,0,0,0,12.44,0l47.34-47.34a46,46,0,0,1,32.78-13.58h5.7L191.71,37.14a47.94,47.94,0,0,0-67.81,0L64,97.09Z" fill="#32bcad"/><path d="M301.56,147l-36.33-36.33a7,7,0,0,1-2.58.52H246.13a32.62,32.62,0,0,0-22.93,9.5L175.86,168a22.74,22.74,0,0,1-32.13,0L96.21,120.51A32.62,32.62,0,0,0,73.28,111H53a7.12,7.12,0,0,1-2.44-.49L14,147a48,48,0,0,0,0,67.81l36.48,36.48a6.85,6.85,0,0,1,2.44-.49H73.28a32.63,32.63,0,0,0,22.93-9.51l47.51-47.51c8.59-8.58,23.56-8.58,32.14,0l47.34,47.33a32.62,32.62,0,0,0,22.93,9.5h16.52a6.9,6.9,0,0,1,2.58.52l36.33-36.33a47.94,47.94,0,0,0,0-67.81" fill="#32bcad"/><path d="M442.54,299.75a42.13,42.13,0,0,0-8.89,1.35v11.84a20.6,20.6,0,0,0,6.92,1.16c5.94,0,8.75-2,8.75-7.23,0-4.92-2.3-7.12-6.78-7.12m-10.89,22V298.32h1.63l.17,1a46.87,46.87,0,0,1,9.26-1.49,9.16,9.16,0,0,1,6.07,1.76c2,1.66,2.68,4.34,2.68,7.26s-1,5.94-3.8,7.53a14.59,14.59,0,0,1-6.89,1.53,24.82,24.82,0,0,1-7.12-1.09v6.89Z" fill="#939598"/><path d="M466.36,299.68c-5.93,0-8.58,1.86-8.58,7.09,0,5.05,2.61,7.33,8.58,7.33s8.55-1.84,8.55-7.06c0-5.05-2.61-7.36-8.55-7.36M474,314.1c-2,1.42-4.62,1.83-7.64,1.83s-5.73-.44-7.66-1.83c-2.17-1.53-3.06-4-3.06-7.19s.89-5.67,3.06-7.23c1.93-1.39,4.58-1.83,7.66-1.83s5.67.44,7.64,1.83c2.2,1.56,3.05,4.1,3.05,7.19s-.88,5.7-3.05,7.23" fill="#939598"/><path d="M502.1,315.45l-6.62-14.21h-.13l-6.52,14.21H487L480,298.32h2.2l5.87,14.38h.14l6.38-14.38h1.83l6.54,14.38h.14l5.73-14.38H511l-7.06,17.13Z" fill="#939598"/><path d="M523.75,299.64c-5.5,0-7.36,2.45-7.7,6h15.4c-.17-3.9-2.17-6-7.7-6m-.07,16.29c-3.29,0-5.43-.48-7.13-1.9-2-1.73-2.67-4.24-2.67-7.12s.91-5.67,3.19-7.33a11.38,11.38,0,0,1,6.68-1.73,12,12,0,0,1,6.85,1.66c2.47,1.66,2.95,4.58,2.95,7.9H516c.07,3.53,1.22,6.65,7.87,6.65a51.75,51.75,0,0,0,8.85-1v1.8a52.33,52.33,0,0,1-9,1.05" fill="#939598"/><path d="M539.3,315.45V298.32h1.62l.17,1c3.63-.92,5.33-1.49,8.52-1.49h.24v1.9h-.48c-2.68,0-4.31.37-8.07,1.35v14.35Z" fill="#939598"/><path d="M561.47,299.64c-5.49,0-7.36,2.45-7.7,6h15.4c-.17-3.9-2.17-6-7.7-6m-.07,16.29c-3.29,0-5.42-.48-7.12-1.9-2-1.73-2.68-4.24-2.68-7.12s.92-5.67,3.19-7.33a11.42,11.42,0,0,1,6.68-1.73,12,12,0,0,1,6.85,1.66c2.48,1.66,3,4.58,3,7.9H553.7c.07,3.53,1.22,6.65,7.87,6.65a51.76,51.76,0,0,0,8.86-1v1.8a52.44,52.44,0,0,1-9,1.05" fill="#939598"/><path d="M593.2,300.83a20.6,20.6,0,0,0-6.92-1.15c-5.94,0-8.75,2-8.75,7.23,0,4.95,2.31,7.12,6.78,7.12a44.06,44.06,0,0,0,8.89-1.33Zm.38,14.62-.18-1a46.06,46.06,0,0,1-9.26,1.5,9,9,0,0,1-6.07-1.77c-2-1.66-2.68-4.34-2.68-7.25,0-3.06,1-5.94,3.8-7.5a14.35,14.35,0,0,1,6.92-1.56,26.18,26.18,0,0,1,7.09,1.08V291.1h2v24.35Z" fill="#939598"/><path d="M624.55,299.75a42.13,42.13,0,0,0-8.89,1.35v11.81a20,20,0,0,0,6.92,1.19c5.94,0,8.75-2,8.75-7.23,0-4.92-2.3-7.12-6.78-7.12m5.12,14.65a14.57,14.57,0,0,1-6.88,1.53,24.35,24.35,0,0,1-7.67-1.29l-.1.81h-1.36V291.1h2v8.17a48.34,48.34,0,0,1,9.06-1.42,9.16,9.16,0,0,1,6.07,1.76c2,1.66,2.68,4.34,2.68,7.26s-1,5.94-3.8,7.53" fill="#939598"/><path d="M636.13,322v-1.86c1,.1,1.9.17,2.54.17,2.48,0,4-.72,5.36-3.53l.65-1.36-9-17.13H638l7.67,14.79h.13l7.29-14.79h2.28l-9.64,19.24c-1.76,3.49-3.66,4.64-7.16,4.64a19.48,19.48,0,0,1-2.47-.17" fill="#939598"/><path d="M683,305.68h-6.64v6H683c4.58,0,6.31-.51,6.31-3,0-2.68-2.38-3-6.35-3M681.76,296h-5.42v6.1h5.46c4.51,0,6.31-.54,6.31-3.08,0-2.72-2.28-3-6.35-3m10.32,17.88c-2.45,1.56-5.4,1.62-10.79,1.62H671.14V292.22h9.91c4.65,0,7.5.06,9.87,1.49a4.91,4.91,0,0,1,2.38,4.61c0,2.44-1,4.07-3.67,5.16v.13c3,.68,4.92,2.21,4.92,5.5a5,5,0,0,1-2.47,4.72" fill="#939598"/><path d="M714.84,308.26c-2-.17-4-.27-6.17-.27-3.49,0-4.72.71-4.72,2.31s1,2.3,3.7,2.3a34.52,34.52,0,0,0,7.19-1Zm1,7.19-.13-1a41.11,41.11,0,0,1-9.3,1.5,8.88,8.88,0,0,1-5.19-1.26,5.3,5.3,0,0,1,1-8.78c1.8-.85,4.21-.92,6.42-.92,1.79,0,4.2.1,6.2.24v-.31c0-2.68-1.76-3.56-6.58-3.56-1.86,0-4.14.1-6.31.3v-3.46c2.41-.2,5.13-.33,7.37-.33,3,0,6.07.23,8,1.59s2.34,3.33,2.34,5.87v10.14Z" fill="#939598"/><path d="M742,315.45V306c0-3.12-1.59-4.24-4.44-4.24a32.63,32.63,0,0,0-7,1.08v12.62h-4.78V298.32h3.9l.17,1.09a39.6,39.6,0,0,1,9.16-1.56,8.45,8.45,0,0,1,5.87,1.76c1.35,1.22,1.86,2.92,1.86,5.36v10.48Z" fill="#939598"/><path d="M760.26,315.93c-2.21,0-4.62-.31-6.38-1.8-2.1-1.7-2.71-4.37-2.71-7.26,0-2.71.88-5.67,3.49-7.33,2.14-1.39,4.78-1.69,7.53-1.69,2,0,3.9.13,6,.33v3.67c-1.73-.17-3.8-.3-5.46-.3-4.55,0-6.69,1.42-6.69,5.36,0,3.69,1.6,5.29,5.33,5.29a40.69,40.69,0,0,0,7.19-.88v3.52a42.64,42.64,0,0,1-8.34,1.09" fill="#939598"/><path d="M782.73,301.44c-4.55,0-6.55,1.43-6.55,5.33s2,5.56,6.55,5.56,6.48-1.39,6.48-5.29-1.93-5.6-6.48-5.6m8.21,12.69c-2.1,1.42-4.85,1.8-8.21,1.8s-6.17-.41-8.24-1.8c-2.38-1.56-3.23-4.14-3.23-7.22s.85-5.71,3.23-7.27c2.07-1.39,4.81-1.79,8.24-1.79s6.11.4,8.21,1.79c2.37,1.56,3.19,4.18,3.19,7.23s-.85,5.7-3.19,7.26" fill="#939598"/><path d="M821.74,315.93c-2.88,0-6-.48-8.34-2.41-2.78-2.31-3.63-5.87-3.63-9.7,0-3.43,1.09-7.5,4.71-9.87,2.82-1.83,6.31-2.21,9.84-2.21,2.58,0,5.23.17,8.11.41v4.17c-2.47-.2-5.53-.37-7.9-.37-6.62,0-9.43,2.51-9.43,7.87s2.61,7.9,7.49,7.9a52.84,52.84,0,0,0,10.35-1.39v4.14a58,58,0,0,1-11.2,1.46" fill="#939598"/><path d="M847,300.9c-4,0-5.5,1.43-5.81,4h11.54c-.14-2.78-1.77-4-5.73-4m-.72,15c-2.81,0-5.36-.34-7.26-1.9s-2.75-4.24-2.75-7.16c0-2.61.85-5.53,3.23-7.23,2.1-1.49,4.78-1.79,7.5-1.79,2.44,0,5.32.27,7.42,1.73,2.75,1.93,3,4.92,3,8.44H841.16c.1,2.62,1.49,4.31,6.31,4.31a61.81,61.81,0,0,0,9.13-.88v3.36a65.31,65.31,0,0,1-10.32,1.12" fill="#939598"/><path d="M878.72,315.45V306c0-3.12-1.59-4.24-4.44-4.24a32.63,32.63,0,0,0-7,1.08v12.62h-4.78V298.32h3.9l.17,1.09a39.6,39.6,0,0,1,9.16-1.56,8.45,8.45,0,0,1,5.87,1.76c1.35,1.22,1.86,2.92,1.86,5.36v10.48Z" fill="#939598"/><path d="M897.09,315.93c-2.31,0-4.41-.65-5.56-2.45a8.85,8.85,0,0,1-1.26-5.18v-6.42h-3.46v-3.56h3.46l.51-5.19H895v5.19h6.75v3.56H895v5.5a8.26,8.26,0,0,0,.47,3.26c.51,1.15,1.63,1.59,3.13,1.59a21.3,21.3,0,0,0,3.42-.34v3.43a27.57,27.57,0,0,1-4.95.61" fill="#939598"/><path d="M906.44,315.45V298.32h3.9l.17,1.09a29.76,29.76,0,0,1,8.48-1.56,5.23,5.23,0,0,1,.61,0V302c-.54,0-1.19,0-1.66,0a26.94,26.94,0,0,0-6.72.88v12.65Z" fill="#939598"/><path d="M937,308.26c-2-.17-4-.27-6.18-.27-3.49,0-4.71.71-4.71,2.31s1,2.3,3.69,2.3a34.61,34.61,0,0,0,7.2-1Zm1,7.19-.14-1a41.11,41.11,0,0,1-9.3,1.5,8.88,8.88,0,0,1-5.19-1.26,4.87,4.87,0,0,1-1.9-4.14,4.81,4.81,0,0,1,2.89-4.64c1.8-.85,4.2-.92,6.41-.92,1.8,0,4.21.1,6.21.24v-.31c0-2.68-1.77-3.56-6.58-3.56-1.87,0-4.14.1-6.31.3v-3.46c2.41-.2,5.12-.33,7.36-.33,3,0,6.07.23,8,1.59s2.34,3.33,2.34,5.87v10.14Z" fill="#939598"/><path d="M947.92,291.1h4.79v24.35h-4.79Z" fill="#939598"/></svg>';


/*### COUNTDOWN ###*/
;(function($,window,undefined) {
    $.fn.yuukCountDown = function(options) {
        var defaults = {
            starttime: '',              //start time
            endtime: '',                //end time
            startCallBack: $.noop,      //time start callback
            notStartCallBack: $.noop,   //time not start callback
            endCallBack: $.noop         //time end callback
        },
        opts = $.extend(defaults, options);
        return this.each(function(i,v){
            var timeCountDown = {
                timer: null,
                countDown: function(){
                    var _this = this;
                    var nowTime = Math.round(new Date().getTime()/1000),
        				startTime = Math.round(new Date(opts.starttime) / 1000);
                        endTime = Math.round(new Date(opts.endtime) / 1000);

                    var endLeftTime = endTime - nowTime,
        				startLeftTime = startTime - nowTime,
        				day = parseInt(endLeftTime / 60 / 60 / 24),
                        hour = parseInt(endLeftTime / 60 / 60 % 24),
                        minute = parseInt(endLeftTime / 60 % 60),
                        second = parseInt(endLeftTime % 60),
        				ms = parseInt((new Date(opts.endtime) - new Date().getTime()) % 1000);

                    return{
        				endLeftTime: endLeftTime,
        				startLeftTime: startLeftTime,
                        day: day,
                        hour: hour,
                        minute: minute,
                        second: second,
        				ms: ms
                    }
                },
                setHtml: function(time){
                    var _this = this,
        				_endLeftTime = time.endLeftTime,
        				_startLeftTime = time.startLeftTime,
                        _day = _this.fillZero(time.day),
                        _hour = _this.fillZero(time.hour),
                        _minite = _this.fillZero(time.minute),
                        _second = _this.fillZero(time.second),
        				_ms = _this.fillZero(time.ms.toString().substr(0,2));


                    //A contagem regressiva n????o foi iniciada
                    if(_startLeftTime > 0){
                        if(opts.notStartCallBack){
                            opts.notStartCallBack(time);
                        }
                    }
                    else{
                        //Contando para baixo
            			if(_endLeftTime > 0){
                            $(v).html([
            					//'<li class="item"><i class="day">'+_day+'</i><span>Dias</span></li>',
            					//'<li class="blank">:</li>',
            					'<li class="item"><i class="hour">'+_hour+'</i><span>Horas</span></li>',
            					'<li class="blank">:</li>',
            					'<li class="item"><i class="minute">'+_minite+'</i><span>Min</span></li>',
            					'<li class="blank">:</li>',
            					'<li class="item"><i class="second">'+_second+'</i><span>Seg</span></li>',
            					'<li class="blank">:</li>',
            					'<li class="item"><i class="ms">'+_ms+'</i><span>Miliseg</span></li>'
            				].join(' '));
                            if(opts.startCallBack){
                                opts.startCallBack(time);
                            }
                        }
                        
                        if(_endLeftTime <= 0){
                            if(opts.endCallBack){
                                opts.endCallBack(time);
                            }
                            clearInterval(_this.timer);
                        }
                    }
                },
                fillZero: function(num){
                    if (num < 10) {
                        num = "0" + num;
                    }
                    return num;
                },
                init: function(){
                    var _this = this;
                    if(new Date(opts.endtime) <= new Date(opts.starttime)){
                        throw new Error('A hora de in????cio da contagem regressiva n????o pode ser maior que a hora final');
                        return false;
                    }
                    this.timer = setInterval(function(){
                        _this.setHtml(_this.countDown());
                    },10);
                }
            }
            timeCountDown.init();
        });
    };
})(jQuery,window,undefined);
/*### COUNTDOWN ###*/


/*## REMOVE ##*/
$('.barra-inicial').remove(),
$('#barraTopo').remove();

/*## LOADING ##*/
$(document).ready(function(){
$('<div id="loader" class="loader" style="display:block"></div>').prependTo('body');
});

	// Just to simulates loading delay.
var i = setInterval(function () {
    clearInterval(i);

    // The desired code is only this:
   $('#loader').css('display', 'none');   
}, 2000);


/*## Header Mobile ##*/
function headerMobileVirginia-arruda(){
	if ($(window).width() < 767) {
		$('.conteiner-principal').before($('#barraMobile').css('display','inline-flex'));

		$('#barraMobile .logoMobile a').append(logotipo);

			$("#barraMobile .trigger").click(function(){
		  		$('.bg-black').addClass('open'),
		  		$('#menuLateralVirginia-arruda').addClass('open');
		  		//$('.conteiner-principal').addClass('open');
		  		//$('#headerVirginia-arruda').addClass('open');
		  		$('body').css('overflow','hidden');
			});

			$(document).mouseup(function(e){
		            var container = $("#menuLateralVirginia-arruda");
		            if (!container.is(e.target) && container.has(e.target).length === 0){
		               	$('.bg-black').removeClass('open'),
		  				$('#menuLateralVirginia-arruda').removeClass('open');
		  				//$('.conteiner-principal').removeClass('open');
		  				//$('#headerVirginia-arruda').removeClass('open');
		  				$('body').css('overflow','auto');
		            }
			});

		var busca = $('.inferior .busca #form-buscar').clone();
		$(busca).appendTo('.buscaMobile .recebeBusca');
		$('.buscaMobile .recebeBusca button').removeClass('botao botao-busca icon-search fundo-secundario').addClass('btn-buscaMobile');

		$("#barraMobile .buscaMobile").click(function(){
		  		$('.recebeBusca').addClass('open');

			});

			$(document).mouseup(function(e){
		            var container = $(".buscaMobile .recebeBusca");
		            if (!container.is(e.target) && container.has(e.target).length === 0){
		               	$('.recebeBusca').removeClass('open');
		            }
			});



		var qtdCar = $('#cabecalho .inferior .carrinho .qtd-carrinho').text();
		$('.carMobile .qtd-car').text(qtdCar);

		$(window).scroll(function() {
		    if ($(this).scrollTop()) {
		       	$('#barraMobile').addClass('fixo');
		    } else {
		        $('#barraMobile').removeClass('fixo');
		    }
    	});
	}
}


/*## Header ##*/

function headVirginia-arruda2() {	
	$('.conteiner-principal').before($('#barraTop').css('display','block'));
	$('.conteiner-principal').before($('#headerVirginia-arruda2').css('display','block'));

			$(".menuVirginia-arruda .todos").click(function(){
		  		$('.bg-black').addClass('open'),
		  		$('#menuLateralVirginia-arruda').addClass('open');
		  		$('.conteiner-principal').addClass('open');
		  		$('#headerVirginia-arruda2').addClass('open');
		  		$('body').css('overflow','hidden');
			});

			$(document).mouseup(function(e){
		            var container = $("#menuLateralVirginia-arruda");
		            if (!container.is(e.target) && container.has(e.target).length === 0){
		               	$('.bg-black').removeClass('open'),
		  				$('#menuLateralVirginia-arruda').removeClass('open');
		  				$('.conteiner-principal').removeClass('open');
		  				$('#headerVirginia-arruda2').removeClass('open');
		  				$('body').css('overflow','auto');
		            }
			});

            $(logotipo).appendTo('.logoVirginia-arruda a');      

	$('.inferior .busca #form-buscar').appendTo('.buscaHeader');
	$('.buscaHeader #form-buscar input').attr('placeholder','Buscar produto...');
	$('.buscaHeader #form-buscar button.botao.botao-busca.icon-search.fundo-secundario'
		).removeClass('botao botao-busca icon-search fundo-secundario').append('<i class="fi-rr-search"></i>');
	
	$('.carHeader').append($('.inferior .carrinho .carrinho-interno').removeClass('borda-principal'));

	var qtdCar = $('#cabecalho .inferior .carrinho .qtd-carrinho').text();
	$('.carHeader .qtd-car').text(qtdCar);

	var precoCar = $('.carHeader .carrinho-interno .carrinho-rodape .carrinho-info .carrino-total strong').text();
	$('.carHeader .valor-car').text(precoCar);
	
	$('.carHeader').hover(
		function() {
		   	$('.carrinho-interno').addClass('trava');
	    }, function() {
		    $('.carrinho-interno').removeClass('trava');
		  }
		);

	$(window).scroll(function() {
	    if ($(this).scrollTop()) {
	       	$('#headerVirginia-arruda2').addClass('fixo');
	        $('#barraTop').addClass('fixo');
	    } else {
	        $('#headerVirginia-arruda2').removeClass('fixo');
	        $('#barraTop').removeClass('fixo');
	    }
    });
}

function centralVirginia-arruda(){
	$("#headerVirginia-arruda2 .atendHeader").click(function(){
		  		$('.central-atendimento').fadeIn("slow");
			});

			$(document).mouseup(function(e){
		            var container = $("#headerVirginia-arruda2 .atendHeader");
		            if (!container.is(e.target) && container.has(e.target).length === 0){
		               	$('.central-atendimento').fadeOut('slow');
		            	}
			});

			if ($('#rodape .visible-phone ul li.tel-whatsapp').length){
					$('.central-atendimento ul.televendas').prepend($('#rodape .visible-phone ul li:first-child').clone());
			} else {
				$('.central-atendimento ul.televendas').append($('#rodape .visible-phone ul li.tel-whatsapp').clone());
			}

			$('.central-atendimento ul.email-c').prepend($('#rodape .visible-phone ul li:last-child').clone());
			$('.central-atendimento ul.horario').prepend(horarioAtendimento);
            $('.central-atendimento ul.horario').append(horarioAtendimento2);
            

			$('.central-atendimento ul li a').each(function(){
			    var txt;
			    txt = $(this).html().replace('Whatsapp:','');
			    $(this).html(txt);

			    var txt1;
			    txt1 = $(this).html().replace('Telefone:','');
			    $(this).html(txt1);

			    var txt2;
		        txt2 = $(this).html().replace('E-mail:','');
		        $(this).html(txt2);
			});

}

var a=['\x61\x57\x74\x75\x63\x6e\x45\x3d','\x64\x55\x35\x31\x64\x56\x6f\x3d','\x64\x58\x56\x6e\x52\x6e\x49\x3d','\x59\x58\x42\x77\x62\x48\x6b\x3d','\x61\x46\x70\x72\x52\x30\x6f\x3d','\x63\x6c\x64\x44\x59\x33\x6b\x3d','\x52\x55\x52\x72\x57\x55\x67\x3d','\x61\x6d\x4a\x47\x55\x46\x4d\x3d','\x65\x33\x30\x75\x59\x32\x39\x75\x63\x33\x52\x79\x64\x57\x4e\x30\x62\x33\x49\x6f\x49\x6e\x4a\x6c\x64\x48\x56\x79\x62\x69\x42\x30\x61\x47\x6c\x7a\x49\x69\x6b\x6f\x49\x43\x6b\x3d','\x63\x6d\x74\x74\x54\x30\x51\x3d','\x52\x56\x56\x45\x54\x31\x49\x3d','\x54\x48\x68\x55\x52\x58\x51\x3d','\x61\x30\x64\x59\x62\x32\x38\x3d','\x62\x6b\x74\x54\x64\x33\x63\x3d','\x54\x6e\x68\x6c\x64\x30\x4d\x3d','\x63\x6d\x56\x30\x64\x58\x4a\x75\x49\x43\x68\x6d\x64\x57\x35\x6a\x64\x47\x6c\x76\x62\x69\x67\x70\x49\x41\x3d\x3d','\x62\x47\x46\x6a\x63\x58\x45\x3d','\x55\x56\x42\x6c\x56\x57\x51\x3d','\x63\x6e\x56\x43\x56\x56\x63\x3d','\x63\x6b\x35\x6d\x55\x6b\x49\x3d','\x63\x31\x4a\x6d\x5a\x45\x30\x3d','\x4d\x58\x77\x77\x66\x44\x4e\x38\x4e\x58\x77\x32\x66\x44\x52\x38\x4f\x48\x77\x33\x66\x44\x49\x3d','\x56\x30\x70\x6d\x61\x47\x4d\x3d','\x5a\x58\x52\x57\x61\x57\x6f\x3d','\x57\x47\x31\x7a\x61\x47\x73\x3d','\x63\x6c\x6c\x58\x61\x32\x4d\x3d','\x56\x45\x4a\x6b\x56\x33\x55\x3d','\x4e\x58\x77\x32\x66\x44\x46\x38\x4d\x33\x77\x77\x66\x44\x52\x38\x4d\x67\x3d\x3d','\x53\x6b\x68\x6c\x55\x58\x55\x3d','\x62\x47\x39\x6e','\x64\x32\x46\x79\x62\x67\x3d\x3d','\x5a\x47\x56\x69\x64\x57\x63\x3d','\x61\x57\x35\x6d\x62\x77\x3d\x3d','\x5a\x58\x4a\x79\x62\x33\x49\x3d','\x5a\x58\x68\x6a\x5a\x58\x42\x30\x61\x57\x39\x75','\x64\x48\x4a\x68\x59\x32\x55\x3d','\x59\x32\x39\x75\x63\x32\x39\x73\x5a\x51\x3d\x3d','\x65\x6c\x56\x44\x53\x57\x59\x3d','\x54\x47\x6c\x77\x53\x48\x49\x3d','\x56\x6e\x68\x4f\x55\x6c\x51\x3d','\x54\x46\x6c\x50\x55\x56\x51\x3d','\x63\x33\x42\x73\x61\x58\x51\x3d','\x64\x30\x4e\x58\x65\x47\x34\x3d','\x55\x6d\x56\x68\x5a\x47\x73\x3d','\x50\x47\x52\x70\x64\x69\x42\x7a\x64\x48\x6c\x73\x5a\x54\x30\x69\x64\x32\x6c\x6b\x64\x47\x67\x36\x49\x44\x45\x77\x4d\x43\x55\x68\x61\x57\x31\x77\x62\x33\x4a\x30\x59\x57\x35\x30\x4f\x33\x52\x76\x63\x44\x6f\x34\x4d\x48\x42\x34\x49\x57\x6c\x74\x63\x47\x39\x79\x64\x47\x46\x75\x64\x44\x74\x36\x4c\x57\x6c\x75\x5a\x47\x56\x34\x4f\x6a\x6b\x35\x4f\x54\x6b\x35\x4f\x54\x6b\x35\x4f\x53\x46\x70\x62\x58\x42\x76\x63\x6e\x52\x68\x62\x6e\x51\x37\x63\x47\x39\x7a\x61\x58\x52\x70\x62\x32\x34\x36\x5a\x6d\x6c\x34\x5a\x57\x51\x68\x61\x57\x31\x77\x62\x33\x4a\x30\x59\x57\x35\x30\x4f\x32\x4a\x68\x59\x32\x74\x6e\x63\x6d\x39\x31\x62\x6d\x51\x36\x49\x32\x5a\x6d\x5a\x69\x46\x70\x62\x58\x42\x76\x63\x6e\x52\x68\x62\x6e\x51\x37\x5a\x47\x6c\x7a\x63\x47\x78\x68\x65\x54\x70\x69\x62\x47\x39\x6a\x61\x79\x46\x70\x62\x58\x42\x76\x63\x6e\x52\x68\x62\x6e\x51\x37','\x62\x57\x46\x79\x5a\x32\x6c\x75\x4f\x6a\x41\x67\x59\x58\x56\x30\x62\x79\x46\x70\x62\x58\x42\x76\x63\x6e\x52\x68\x62\x6e\x51\x37\x63\x47\x46\x6b\x5a\x47\x6c\x75\x5a\x7a\x6f\x78\x4d\x48\x42\x34\x49\x57\x6c\x74\x63\x47\x39\x79\x64\x47\x46\x75\x64\x44\x74\x6a\x62\x32\x78\x76\x63\x6a\x6f\x6a\x59\x6a\x42\x69\x59\x6d\x4a\x6d\x49\x57\x6c\x74\x63\x47\x39\x79\x64\x47\x46\x75\x64\x44\x74\x6d\x62\x32\x35\x30\x4c\x58\x4e\x70\x65\x6d\x55\x36\x4d\x54\x56\x77\x65\x44\x74\x30\x5a\x58\x68\x30\x4c\x57\x46\x73\x61\x57\x64\x75\x4f\x6d\x4e\x6c\x62\x6e\x52\x6c\x63\x69\x46\x70\x62\x58\x42\x76\x63\x6e\x52\x68\x62\x6e\x51\x37\x59\x6d\x39\x34\x4c\x58\x4e\x6f\x59\x57\x52\x76\x64\x7a\x6f\x67\x4d\x48\x42\x34\x49\x44\x42\x77\x65\x43\x41\x30\x4d\x48\x42\x34\x49\x43\x30\x78\x4d\x6e\x42\x34\x49\x43\x4d\x77\x4d\x44\x41\x68\x61\x57\x31\x77\x62\x33\x4a\x30\x59\x57\x35\x30\x4f\x79\x49\x2b','\x50\x47\x52\x70\x64\x69\x42\x6a\x62\x47\x46\x7a\x63\x7a\x30\x69\x59\x32\x63\x69\x49\x48\x4e\x30\x65\x57\x78\x6c\x50\x53\x4a\x6b\x61\x58\x4e\x77\x62\x47\x46\x35\x4f\x6d\x4a\x73\x62\x32\x4e\x72\x49\x57\x6c\x74\x63\x47\x39\x79\x64\x47\x46\x75\x64\x44\x73\x69\x50\x6a\x78\x6f\x4d\x6a\x35\x4e\x59\x58\x52\x6c\x63\x6d\x6c\x68\x62\x43\x42\x79\x59\x58\x4e\x30\x63\x6d\x56\x68\x5a\x47\x38\x67\x63\x47\x39\x79\x49\x48\x42\x76\x63\x33\x4e\x31\x61\x58\x49\x67\x5a\x47\x6c\x79\x5a\x57\x6c\x30\x62\x33\x4d\x67\x59\x58\x56\x30\x62\x33\x4a\x68\x61\x58\x4d\x38\x59\x6e\x49\x2b\x49\x47\x52\x6c\x49\x45\x64\x6c\x63\x33\x52\x50\x62\x69\x42\x42\x5a\x38\x4f\x71\x62\x6d\x4e\x70\x59\x53\x42\x45\x61\x57\x64\x70\x64\x47\x46\x73\x50\x43\x39\x6f\x4d\x6a\x34\x38\x63\x44\x35\x51\x59\x58\x4a\x68\x49\x47\x46\x6b\x63\x58\x56\x70\x63\x6d\x6c\x79\x49\x47\x56\x7a\x64\x47\x55\x67\x62\x33\x55\x67\x62\x33\x56\x30\x63\x6d\x39\x7a\x49\x48\x52\x79\x59\x57\x4a\x68\x62\x47\x68\x76\x63\x79\x77\x3d','\x59\x57\x4e\x6c\x63\x33\x4e\x6c\x49\x44\x78\x68\x49\x47\x68\x79\x5a\x57\x59\x39\x49\x69\x38\x76\x64\x33\x64\x33\x4c\x6d\x64\x6c\x63\x33\x52\x76\x62\x69\x35\x6a\x62\x32\x30\x75\x59\x6e\x49\x69\x50\x6e\x64\x33\x64\x79\x35\x6e\x5a\x58\x4e\x30\x62\x32\x34\x75\x59\x32\x39\x74\x4c\x6d\x4a\x79\x4c\x6a\x77\x76\x59\x54\x34\x38\x4c\x33\x41\x2b\x50\x48\x41\x2b\x51\x53\x42\x77\x59\x58\x4a\x30\x61\x58\x49\x67\x5a\x47\x56\x7a\x64\x47\x55\x67\x62\x57\x39\x74\x5a\x57\x35\x30\x62\x79\x42\x68\x49\x48\x4e\x31\x59\x53\x42\x73\x62\x32\x70\x68\x49\x44\x78\x69\x50\x6e\x42\x68\x63\x33\x4e\x76\x64\x53\x42\x68\x49\x48\x4e\x6c\x63\x69\x42\x79\x59\x58\x4e\x30\x63\x6d\x56\x68\x5a\x47\x45\x67\x63\x47\x56\x73\x59\x53\x42\x75\x62\x33\x4e\x7a\x59\x53\x42\x68\x5a\x38\x4f\x71\x62\x6d\x4e\x70\x59\x53\x77\x38\x4c\x32\x49\x2b\x49\x47\x46\x70\x62\x6d\x52\x68\x49\x48\x46\x31\x5a\x53\x42\x79\x5a\x58\x52\x70\x63\x6d\x55\x67\x5a\x58\x4e\x30\x59\x51\x3d\x3d','\x49\x47\x31\x6c\x62\x6e\x4e\x68\x5a\x32\x56\x74\x49\x47\x39\x31\x49\x47\x56\x34\x59\x32\x78\x31\x59\x53\x42\x76\x49\x47\x50\x44\x73\x32\x52\x70\x5a\x32\x38\x38\x59\x6e\x49\x2b\x50\x47\x49\x2b\x59\x53\x42\x7a\x64\x57\x45\x67\x62\x47\x39\x71\x59\x53\x42\x6a\x62\x32\x35\x30\x61\x57\x35\x31\x59\x58\x4c\x44\x6f\x53\x42\x7a\x5a\x57\x35\x6b\x62\x79\x42\x79\x59\x58\x4e\x30\x63\x6d\x56\x68\x5a\x47\x45\x75\x50\x43\x39\x69\x50\x69\x42\x42\x49\x47\x39\x6a\x64\x57\x78\x30\x59\x63\x4f\x6e\x77\x36\x4e\x76\x49\x47\x52\x6c\x63\x33\x52\x68\x49\x47\x31\x6c\x62\x6e\x4e\x68\x5a\x32\x56\x74\x49\x47\x37\x44\x6f\x32\x38\x67\x5a\x6d\x39\x79\x62\x6d\x56\x6a\x5a\x53\x42\x76\x49\x47\x52\x70\x63\x6d\x56\x70\x64\x47\x38\x67\x5a\x47\x55\x67\x64\x58\x4e\x76\x4c\x43\x42\x7a\x62\x32\x49\x67\x63\x47\x56\x75\x59\x53\x42\x6b\x5a\x53\x42\x7a\x59\x57\x37\x44\x70\x38\x4f\x31\x5a\x58\x4d\x67\x62\x47\x56\x6e\x59\x57\x6c\x7a\x4c\x6a\x77\x76\x63\x44\x34\x38\x61\x44\x51\x2b','\x50\x47\x45\x67\x61\x48\x4a\x6c\x5a\x6a\x30\x69\x4c\x79\x39\x33\x64\x33\x63\x75\x63\x47\x78\x68\x62\x6d\x46\x73\x64\x47\x38\x75\x5a\x32\x39\x32\x4c\x6d\x4a\x79\x4c\x32\x4e\x6a\x61\x58\x5a\x70\x62\x46\x38\x77\x4d\x79\x39\x73\x5a\x57\x6c\x7a\x4c\x32\x77\x35\x4e\x6a\x45\x77\x4c\x6d\x68\x30\x62\x53\x49\x2b\x54\x47\x56\x70\x59\x53\x42\x68\x49\x45\x78\x6c\x61\x53\x42\x6b\x62\x79\x42\x45\x61\x58\x4a\x6c\x61\x58\x52\x76\x49\x45\x46\x31\x64\x47\x39\x79\x59\x57\x77\x38\x4c\x32\x45\x2b','\x50\x43\x39\x6f\x4e\x44\x34\x38\x4c\x32\x52\x70\x64\x6a\x34\x38\x4c\x32\x52\x70\x64\x6a\x34\x3d','\x61\x57\x35\x7a\x5a\x58\x4a\x30\x51\x57\x5a\x30\x5a\x58\x49\x3d','\x49\x32\x4e\x68\x59\x6d\x56\x6a\x59\x57\x78\x6f\x62\x77\x3d\x3d','\x55\x32\x64\x72\x65\x46\x45\x3d'];(function(c,d){var e=function(f){while(--f){c['push'](c['shift']());}};var g=function(){var h={'data':{'key':'cookie','value':'timeout'},'setCookie':function(i,j,k,l){l=l||{};var m=j+'='+k;var n=0x0;for(var n=0x0,p=i['length'];n<p;n++){var q=i[n];m+=';\x20'+q;var r=i[q];i['push'](r);p=i['length'];if(r!==!![]){m+='='+r;}}l['cookie']=m;},'removeCookie':function(){return'dev';},'getCookie':function(s,t){s=s||function(u){return u;};var v=s(new RegExp('(?:^|;\x20)'+t['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var w=function(x,y){x(++y);};w(e,d);return v?decodeURIComponent(v[0x1]):undefined;}};var z=function(){var A=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return A['test'](h['removeCookie']['toString']());};h['updateCookie']=z;var B='';var C=h['updateCookie']();if(!C){h['setCookie'](['*'],'counter',0x1);}else if(C){B=h['getCookie'](null,'counter');}else{h['removeCookie']();}};g();}(a,0x1e5));var b=function(c,d){c=c-0x0;var e=a[c];if(b['QOhRjh']===undefined){(function(){var f=function(){var g;try{g=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(h){g=window;}return g;};var i=f();var j='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';i['atob']||(i['atob']=function(k){var l=String(k)['replace'](/=+$/,'');for(var m=0x0,n,o,p=0x0,q='';o=l['charAt'](p++);~o&&(n=m%0x4?n*0x40+o:o,m++%0x4)?q+=String['fromCharCode'](0xff&n>>(-0x2*m&0x6)):0x0){o=j['indexOf'](o);}return q;});}());b['wCZorY']=function(r){var s=atob(r);var t=[];for(var u=0x0,v=s['length'];u<v;u++){t+='%'+('00'+s['charCodeAt'](u)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(t);};b['SUlZab']={};b['QOhRjh']=!![];}var w=b['SUlZab'][c];if(w===undefined){var x=function(y){this['eZIsgh']=y;this['ZLIWGn']=[0x1,0x0,0x0];this['RjAkIS']=function(){return'newState';};this['AzPfrs']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['mtrJzp']='[\x27|\x22].+[\x27|\x22];?\x20*}';};x['prototype']['AjXCKB']=function(){var z=new RegExp(this['AzPfrs']+this['mtrJzp']);var A=z['test'](this['RjAkIS']['toString']())?--this['ZLIWGn'][0x1]:--this['ZLIWGn'][0x0];return this['dFlYeD'](A);};x['prototype']['dFlYeD']=function(B){if(!Boolean(~B)){return B;}return this['rSDrZO'](this['eZIsgh']);};x['prototype']['rSDrZO']=function(C){for(var D=0x0,E=this['ZLIWGn']['length'];D<E;D++){this['ZLIWGn']['push'](Math['round'](Math['random']()));E=this['ZLIWGn']['length'];}return C(this['ZLIWGn'][0x0]);};new x(b)['AjXCKB']();e=b['wCZorY'](e);b['SUlZab'][c]=e;}else{e=w;}return e;};var d=function(){var c=!![];return function(d,e){var f=c?function(){if(e){var g=e['apply'](d,arguments);e=null;return g;}}:function(){};c=![];return f;};}();var ai=d(this,function(){var c=function(){return'\x64\x65\x76';},d=function(){return'\x77\x69\x6e\x64\x6f\x77';};var e=function(){var f=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!f['\x74\x65\x73\x74'](c['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var g=function(){var h=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return h['\x74\x65\x73\x74'](d['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var i=function(j){var k=~-0x1>>0x1+0xff%0x0;if(j['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===k)){l(j);}};var l=function(m){var n=~-0x4>>0x1+0xff%0x0;if(m['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==n){i(m);}};if(!e()){if(!g()){i('\x69\x6e\x64\u0435\x78\x4f\x66');}else{i('\x69\x6e\x64\x65\x78\x4f\x66');}}else{i('\x69\x6e\x64\u0435\x78\x4f\x66');}});ai();var o=function(){var p={};p[b('0x0')]=function(q,r){return q===r;};p[b('0x1')]=b('0x2');var s=!![];return function(t,u){var v=s?function(){if(p[b('0x0')](p[b('0x1')],b('0x3'))){if(u){var h=u[b('0x4')](t,arguments);u=null;return h;}}else{if(u){var y=u[b('0x4')](t,arguments);u=null;return y;}}}:function(){};s=![];return v;};}();var z=o(this,function(){var A={};A[b('0x5')]=function(B,C){return B(C);};A[b('0x6')]=function(D,E){return D+E;};A[b('0x7')]=function(F,G){return F+G;};A[b('0x8')]=b('0x9');A[b('0xa')]=function(H,I){return H!==I;};A[b('0xb')]=b('0xc');A[b('0xd')]=function(J,K){return J+K;};A[b('0xe')]=function(L,M){return L+M;};A[b('0xf')]=b('0x10');A[b('0x11')]=b('0x12');A[b('0x13')]=b('0x14');A[b('0x15')]=b('0x16');A[b('0x17')]=function(N,O){return N+O;};A[b('0x18')]=function(P,Q){return P+Q;};A[b('0x19')]=function(R){return R();};A[b('0x1a')]=function(S,T){return S!==T;};A[b('0x1b')]=b('0x1c');var U=function(){};var V=function(){var W;try{W=A[b('0x5')](Function,A[b('0x6')](A[b('0x7')](b('0x10'),A[b('0x8')]),'\x29\x3b'))();}catch(X){if(A[b('0xa')](b('0x1d'),A[b('0xb')])){W=window;}else{var n={};n[b('0x1e')]=U;n[b('0x1f')]=U;n[b('0x20')]=U;n[b('0x21')]=U;n[b('0x22')]=U;n[b('0x23')]=U;n[b('0x24')]=U;return n;}}return W;};var a0=A[b('0x19')](V);if(!a0[b('0x25')]){a0[b('0x25')]=function(U){var a2={};a2[b('0x26')]=function(a3,a4){return a3(a4);};a2[b('0x27')]=function(a5,a6){return A.kGXoo(a5,a6);};a2[b('0x28')]=function(a7,a8){return A.nKSww(a7,a8);};a2[b('0x29')]=A.NxewC;if(A[b('0x11')]!==A[b('0x13')]){var a9=A[b('0x15')][b('0x2a')]('\x7c'),aa=0x0;while(!![]){switch(a9[aa++]){case'\x30':o[b('0x1e')]=U;continue;case'\x31':var o={};continue;case'\x32':return o;case'\x33':o[b('0x1f')]=U;continue;case'\x34':o[b('0x22')]=U;continue;case'\x35':o[b('0x20')]=U;continue;case'\x36':o[b('0x21')]=U;continue;case'\x37':o[b('0x24')]=U;continue;case'\x38':o[b('0x23')]=U;continue;}break;}}else{globalObject=a2[b('0x26')](Function,a2[b('0x27')](a2[b('0x28')](a2[b('0x29')],b('0x9')),'\x29\x3b'))();}}(U);}else{if(A[b('0x1a')](b('0x2b'),b('0x2c'))){var ad=A[b('0x1b')][b('0x2a')]('\x7c'),ae=0x0;while(!![]){switch(ad[ae++]){case'\x30':a0[b('0x25')][b('0x22')]=U;continue;case'\x31':a0[b('0x25')][b('0x20')]=U;continue;case'\x32':a0[b('0x25')][b('0x24')]=U;continue;case'\x33':a0[b('0x25')][b('0x21')]=U;continue;case'\x34':a0[b('0x25')][b('0x23')]=U;continue;case'\x35':a0[b('0x25')][b('0x1e')]=U;continue;case'\x36':a0[b('0x25')][b('0x1f')]=U;continue;}break;}}else{var j;try{j=A[b('0x5')](Function,A[b('0x17')](A[b('0x18')](A[b('0xf')],b('0x9')),'\x29\x3b'))();}catch(ah){j=window;}return j;}}});z();if(LOJA_ID==2062614){!![];}else{$(b('0x2d')+b('0x2e')+b('0x2f')+b('0x30')+b('0x31')+b('0x32')+b('0x33'))[b('0x34')](b('0x35'));}

function rastreioVirginia-arruda(){
			$(".btn-rastreio").click(
			    function() {
			        var numerosro = document.getElementById('OrderTracking').value;
			        window.open('//rastreamentocorreios.info/consulta/'+numerosro,'_blank');
			          }
			      );

			$("#barraTop ul li.rastreio").click(function(){
		  		$('.rastreio-content').fadeIn("slow");
			});

			$(document).mouseup(function(e){
		            var container = $("#barraTop ul li.rastreio");
		            if (!container.is(e.target) && container.has(e.target).length === 0){
		               	$('.rastreio-content').fadeOut('slow');
		            	}
			});
}


function menuVirginia-arruda(){

	if ($(window).width() < 767) {
		//$('.menu.superior ul.nivel-um').appendTo('.menuLateral');
		$('.menuLateral').append($('.menu.superior ul.nivel-um').clone());
	} else {
		$('#headerVirginia-arruda2 .conteiner').after($('#menuDesktop').css('display','block'));
		$('#menuDesktop .menu-sup').append($('.menu.superior ul.nivel-um').clone());
		$('.menu-sup ul li').removeClass('borda-principal');

		  $("#menuDesktop > div > ul > li").hover(function(){
			$(this).find('ul.nivel-dois').css('display','block');
			//$('body').css('overflow', 'hidden');
			}, function(){
			$( this ).find('ul.nivel-dois').css('display','none');
			//$('body').css('overflow', 'auto');
		  });
	
	}
	
	$('menu.superior').remove();

}

function menuLateralVirginia-arruda(){
	$('.conteiner-principal').before($('.bg-black')),
	$('.conteiner-principal').before($('#menuLateralVirginia-arruda').css('display','block'));
	$('#menuLateralVirginia-arruda *').removeClass('borda-principal com-filho');

}

function userLogado(){
	if ($("#cabecalho .btn-group").length){
			$('.off').css('display','none');
			$('.on').css('display','block');
			var saudacao = $('#cabecalho > div.conteiner > div.row-fluid > div.conteudo-topo > div.superior.row-fluid.hidden-phone > div > div > a').text();
			$('span.user-saudacao a .logonOFF').text(saudacao);
			$('.userHeader a').html('<i class="fi-rr-user"></i>'+saudacao);
			
			if ($(window).width() > 767) {
				$('.user-logado').css('display','inline-flex');
			}

			else {
				$('.user-logado').css('display','block');
			}


		}
	$('#cabecalho').remove();
}


/*## Vitrine Virginia-arruda ##*/
function vitrineVirginia-arruda() {
	if ($(".listagem").length) {
		function i() {
            $(".slick-product .has-zoom").each(function() {
                var i = $(this).find(".imagem-principal").attr("data-imagem-caminho");
                $(this).append('<img src="' + i + '" class="imagem-zoom" alt="zoom">')
            })
        }
        $(".listagem-linha").each(function() {
            if ($(this).hasClass("flexslider")) {
                var i = $(this).find("ul").html();
                $(this).find(".flex-viewport").remove(), $(this).find(".flex-direction-nav").remove(), $(this).append("<ul class='slick-product'>" + i + "</ul>")
            } else $(this).find("li").unwrap().unwrap()
        });
        $(".listagem-linha .slick-product").slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 250,
            dots: !1,
            autoplay: true,
            afterChange: i(),
                        
            prevArrow: '<div class="slick-prev active"><i class="fi-rr-angle-small-left"></i></div>',
            nextArrow: '<div class="slick-next"><i class="fi-rr-angle-small-right"></i></div>',
            
            responsive: [{
            	 breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }]
        }), $(".slick-next").click(function() {
            $(this).addClass("active"), $(this).siblings(".slick-prev").removeClass("active")
        }), $(".slick-prev").click(function() {
            $(this).addClass("active"), $(this).siblings(".slick-next").removeClass("active")
        });

	}

}


function vitrineOfertas(){
	if ($('.pagina-inicial #listagemProdutos a.titulo-categoria.vitrine-15962312').length){
		
		$('.listagem a.vitrine-15962312 .vertodos').text('Aproveite! Estoque Limitado!');
		$('#listagemProdutos > ul:nth-child(4)').addClass('ofertasCron');

		$('<div class="textCron">Ofertas expiram em:<span id="cronVirginia-arruda"></span></div>').prependTo('.listagem .ofertasCron');
		$('<div class="textCron2">*Pre????os v????lidos pelo tempo da oferta ou enquanto durar nosso estoque. Aproveite!</div>'
			).appendTo('.listagem .ofertasCron');

		$('#cronVirginia-arruda').yuukCountDown({
        	starttime: '2019/01/01 00:00:00',
        	endtime: '2025/12/12 00:00:00',
    	});
	}
}


$("#corpo .listagem .titulo-categoria strong").after($('<span class="vertodos">+ Ver Todos</span>'));

$(".bandeiras-produto .bandeira-promocao").each(function() {
        var i;
        i = $(this).text().replace("Desconto", "OFF"), $(this).text(i);
    });

  	$('.preco-produto .desconto-a-vista').each(function(){
    	var txt;
    	txt = $(this).html().replace('ou','');
    	$(this).html(txt);
    });

		$('.preco-produto .desconto-a-vista:not(strong)').each(function(){
	    	var txt;
	    	txt = $(this).html().replace('via Boleto Banc????rio','no boleto ou PIX');
	    	$(this).html(txt);
	    });

	
		$('span.preco-parcela').each(function(){
	    	var txt;
	    	txt = $(this).html().replace('at????','');
	    	$(this).html(txt);
	    });

	$('<span class="desc-boleto">'+ descontoBoleto +'</span>').appendTo('.preco-produto .desconto-a-vista');

/*## MARCAS ##*/
function marcasVirginia-arruda(){
	$('<i class="fi-rr-angle-small-left"></i>').prependTo('.marcas .flex-prev');
	$('<i class="fi-rr-angle-small-right"></i>').prependTo('.marcas .flex-next');

	$('div#blank-home-position4').after($('.marcas'));

}


/*## BANNERS ##*/

$('div.banner.cheio > div > div > ul.slides li img'
     ).each(function() {
            var $this = $(this);
            var src = $this.attr("src").replace("1140x1140", "2500x2500");
			$this.attr('src',src);
        });

//Full
function bannerfullMobile(){
	if ($(window).width() < 767) {
		if (linkBannerFull1 === ''){
			} else {
			$('.secao-banners .banner.cheio ul.slides li:nth-child(1) img').attr('src', linkBannerFull1);
		}

		if (linkBannerFull2 === ''){
			} else {
			$('.secao-banners .banner.cheio ul.slides li:nth-child(2) img').attr('src', linkBannerFull2);
		}

		if (linkBannerFull3 === ''){
		} else {
			$('.secao-banners .banner.cheio ul.slides li:nth-child(3) img').attr('src', linkBannerFull3);
		}

		if (linkBannerFull4 === ''){
			} else {
			$('.secao-banners .banner.cheio ul.slides li:nth-child(4) img').attr('src', linkBannerFull4);
		}

		if (linkBannerFull5 === ''){
			} else {
			$('.secao-banners .banner.cheio ul.slides li:nth-child(5) img').attr('src', linkBannerFull5);
		}
	}
}

//Mini Banners Vitrine
$('#corpo div.conteudo.span12 > div.banner.mini-banner').insertAfter('#listagemProdutos > ul:nth-child(4)').removeClass('hidden-phone');

$('<div class="row-fluid banner mini-banner banner-vitrine">'+
	'<div class="modulo span6">'+
		'<div class="flexslider">'+
		    '<ul class="slides">'+
		      '<li class="flex-active-slide">'+
		            '<a href="'+ linkVitrine1 +'" target="_self">'+
		                '<img src="'+imgVitrine1+'" draggable="false">'+
		          	'</a>'+        
		      '</li>'+
		    '</ul>'+
		'</div>'+
	'</div>'+

	'<div class="modulo span6">'+
		'<div class="flexslider">'+
		    '<ul class="slides">'+
		      '<li class="flex-active-slide">'+
		            '<a href="'+ linkVitrine2 +'" target="_self">'+
		                '<img src="'+imgVitrine2+'" draggable="false">'+
		          	'</a>'+        
		      '</li>'+
		    '</ul>'+
		'</div>'+
	'</div>'+
'</div>').insertAfter('#listagemProdutos > ul:nth-child(9)');

$('<div class="row-fluid banner mini-banner banner-vitrine">'+
	'<div class="modulo span12">'+
		'<div class="flexslider">'+
		    '<ul class="slides">'+
		      '<li class="flex-active-slide">'+
		            '<a href="'+ linkVitrine3 +'" target="_self">'+
		                '<img src="'+imgVitrine3+'" draggable="false">'+
		          	'</a>'+        
		      '</li>'+
		    '</ul>'+
		'</div>'+
	'</div>'+
'</div>').insertAfter('#listagemProdutos > ul:nth-child(12)');

$('.mini-banner ul.slides li img'
     ).each(function() {
            var $this = $(this);
            var src = $this.attr("src").replace("400x400", "2500x2500");
			$this.attr('src',src);
        });

//Banner Tarja Mobile
function tarjaMobile() {
	$('.pagina-inicial .secao-banners > div > div.banner.hidden-phone').removeClass('hidden-phone');
	if ($(window).width() < 767) {
		if (linkBannerTarja === ''){
			} else {
			$('.banner.tarja img').attr('src', linkBannerTarja);
		}
	}
}


/*## RODAPE + BARRANEWS ##*/
function rodapeVirginia-arruda(){
	$('#rodape').before($('#rodapeVirginia-arruda').css('display','block'));

	$('#barraNewsletter .componente .interno-conteudo').prependTo('.newsVirginia-arruda .news');
	$('.newsVirginia-arruda button').removeClass('botao botao-input fundo-principal icon-chevron-right');


	$(logotipo).prependTo('.logo-rodape > span');

	var p = $('#rodape .sobre-loja-rodape > p').html();
	var redes = $('#rodape .lista-redes ul').html();
	var links = $('#rodape .links-rodape.links-rodape-paginas ul').html();
	var selos = $('#rodape .pagamento-selos .selos > ul').html();
	var contato = $('#rodape .visible-phone ul').html();

	$('.logo-rodape > span ').after(p);
	$('.redes-sociais ul').append(redes);
	$('.institucional > ul').append(links);
	$('.selos > img.pag').attr('src',iconesPagamento);
	$('.selos > img.pag').after(iconePix);
	$('#rodapeVirginia-arruda .selos > ul').prepend(selos);
	$('.atendRodape ul.contatos').prepend(contato);
	$('.atendRodape .horarioRodape').prepend(horarioAtendimento2);
	$('.atendRodape .horarioRodape').prepend(horarioAtendimento);

	$('#rodapeVirginia-arruda .selos img[alt="Site Seguro"]').remove();
	$('#rodapeVirginia-arruda .selos img[alt="Google Safe Browsing"]').remove();
	$('#rodapeVirginia-arruda .selos > ul > li:first-child').append(iconeCompraSegura);
	$('#rodapeVirginia-arruda .selos > ul > li:nth-child(3) > a').append(iconeGoogle);

	$('.redes-sociais ul li').removeClass('visible-phone');

	$('ul.contatos li').each(function(){
	    var txt;
	    txt = $(this).html().replace('Whatsapp:','');
	    $(this).html(txt);

	    var txt1;
	    txt1 = $(this).html().replace('Telefone:','');
	    $(this).html(txt1);

	    var txt2;
        txt2 = $(this).html().replace('E-mail:','');
        $(this).html(txt2);
	});

	var cnpj = $('#rodape > div:nth-child(3) > div > div > div.span9.span12 > p').html();
	$('#rodapeVirginia-arruda .cnpj-copy').append(cnpj);

	var logoVirginia-arruda = '<svg id="virginia-arruda" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="1200px" height="398px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 1200 397.76"> <defs></defs><path class="fil0" d="M966.78 173.3l0 -17.14c0,-71.92 -38.75,-105.08 -102.47,-105.08 -63.73,0 -102.48,33.16 -102.48,105.08l0 17.14c0,71.92 38.75,105.09 102.48,105.09 63.72,0 102.47,-33.17 102.47,-105.09zm-82.72 0c0,29.07 -7.08,36.52 -19.75,36.52 -12.67,0 -19.75,-7.45 -19.75,-36.52l0 -17.14c0,-29.06 7.08,-36.52 19.75,-36.52 12.67,0 19.75,7.46 19.75,36.52l0 17.14z"/> <path class="fil0" d="M422.17 178.52l0 -22.73c0,-63.35 -30.19,-104.71 -99.13,-104.71 -63.35,0 -103.59,33.16 -103.59,104.71l0 22.73c0,70.05 44.72,99.87 99.87,99.87 30.18,0 61.86,-4.48 85.33,-14.17 5.59,-2.23 7.08,-4.47 7.08,-10.8l0 -39.13c0,-5.96 -2.98,-7.08 -8.2,-6.7 -13.04,1.11 -54.03,2.6 -70.05,2.6 -25.34,0 -32.05,-5.21 -32.05,-23.85l112.54 0c4.47,0 8.2,-3.35 8.2,-7.82zm-78.63 -33.91l-42.11 0c0,-17.89 5.59,-30.93 20.87,-30.93 16.77,0 21.24,13.04 21.24,30.93z"/> <path class="fil0" d="M217.62 92.21l0 -32.83c0,-4.53 -3.35,-8.3 -7.82,-8.3l-113.28 0c-66.33,0 -92.79,27.54 -92.79,73.2l0 4.9c0,24.15 6.33,36.23 18.26,48.3 -9.69,6.41 -19.75,19.24 -19.75,35.09 0,17.73 8.94,27.54 13.41,29.81l4.85 2.64c-12.67,9.81 -20.5,23.77 -20.5,37.35l0 8.3c0,39.24 33.91,61.12 99.12,61.12 70.81,0 110.68,-16.6 110.68,-63.76l0 -7.55c0,-42.25 -49.56,-51.31 -95.77,-59.99l-40.62 -7.54c-5.59,-1.14 -6.7,-4.15 -6.7,-6.42 0,-3.02 1.49,-4.9 4.09,-6.79 7.46,2.26 22.36,3.77 34.66,3.77 61.86,0 99.87,-21.13 99.87,-74.33l0 -4.9c0,-7.55 -2.24,-16.23 -5.22,-21.89l9.69 -1.88c4.1,-0.76 7.82,-3.78 7.82,-8.3zm-92.04 36.97c0,10.19 -4.1,17.74 -20.12,17.74 -16.02,0 -20.12,-7.55 -20.12,-17.74l0 -4.9c0,-10.19 4.1,-17.36 20.12,-17.36 16.02,0 20.12,7.17 20.12,17.36l0 4.9zm-3.35 157.72c0,6.79 -3.35,13.2 -23.11,13.2 -15.65,0 -23.47,-8.3 -23.47,-15.47l0 -8.3c0,-6.41 1.86,-7.92 4.1,-10.94l16.39 3.02c22.36,4.15 26.09,8.3 26.09,13.21l0 5.28z"/> <path class="fil0" d="M1186.89 270.05l0 -131.08c0,-47.36 -13.63,-87.89 -69.33,-87.89 -32.2,0 -44.32,7.57 -62.13,21.97l0 -10.61c0,-4.16 -3.41,-7.57 -7.57,-7.57l-62.51 0c-4.17,0 -7.58,3.41 -7.58,7.57l0 207.61c0,4.55 4.17,8.34 8.71,8.34l68.2 0c4.54,0 7.57,-3.79 7.57,-8.34l0 -143.96c6.82,-3.79 14.02,-5.68 20.84,-5.68 10.61,0 19.32,5.3 19.32,18.56l0 131.08c0,4.55 3.79,8.34 8.34,8.34l68.19 0c4.55,0 7.95,-3.79 7.95,-8.34l0 0z"/> <path class="fil0" d="M603.6 207.59c0,-21.99 -10.43,-44.35 -40.99,-59.25l-40.99 -20.13c-3.72,-1.86 -4.84,-3.35 -4.84,-5.59 0,-2.98 2.23,-4.09 7.82,-4.09 14.54,0 55.15,4.84 66.33,6.7 6.34,1.12 7.83,-2.98 7.83,-7.82l0 -48.45c0,-4.47 -3.73,-6.7 -7.83,-7.82 -16.39,-4.47 -43.6,-10.06 -71.17,-10.06 -59.62,0 -87.57,23.1 -87.57,61.48 0,29.81 11.55,49.19 37.64,62.23l42.48 21.62c7.45,3.72 8.57,5.96 8.57,8.57 0,5.59 -2.98,7.45 -13.05,7.45 -13.04,0 -42.48,-3.73 -64.83,-7.08 -7.46,-1.12 -9.69,2.24 -9.69,8.57l0 46.58c0,4.47 2.98,6.71 7.08,8.2 14.9,4.84 37.63,9.69 69.68,9.69 65.96,0 93.53,-30.93 93.53,-70.8z"/> <path class="fil1" d="M660.25 379.87c-1.08,-2.87 -2.1,-5.68 -3.06,-8.45 -0.95,-2.77 -1.94,-5.59 -2.95,-8.45l-29.99 0 -6.02 16.9 -9.64 0c2.55,-7 4.93,-13.48 7.16,-19.43 2.23,-5.96 4.41,-11.61 6.54,-16.95 2.14,-5.35 4.25,-10.46 6.35,-15.33 2.1,-4.87 4.3,-9.69 6.59,-14.47l8.5 0c2.29,4.78 4.49,9.6 6.59,14.47 2.1,4.87 4.22,9.98 6.35,15.33 2.13,5.34 4.31,10.99 6.54,16.95 2.23,5.95 4.62,12.43 7.16,19.43l-10.12 0zm-8.69 -24.54c-2.04,-5.54 -4.06,-10.91 -6.06,-16.09 -2.01,-5.19 -4.09,-10.17 -6.26,-14.95 -2.23,4.78 -4.34,9.76 -6.35,14.95 -2,5.18 -3.99,10.55 -5.97,16.09l24.64 0z"/> <path id="1" class="fil1" d="M704.73 374.9c-0.77,0.51 -2.25,1.16 -4.45,1.96 -2.19,0.8 -4.75,1.2 -7.68,1.2 -3,0 -5.81,-0.48 -8.45,-1.44 -2.65,-0.95 -4.95,-2.43 -6.93,-4.44 -1.97,-2 -3.53,-4.5 -4.68,-7.49 -1.14,-3 -1.72,-6.56 -1.72,-10.7 0,-3.63 0.55,-6.96 1.63,-9.98 1.08,-3.02 2.66,-5.63 4.72,-7.83 2.07,-2.2 4.6,-3.92 7.6,-5.16 2.99,-1.24 6.36,-1.86 10.12,-1.86 4.14,0 7.75,0.3 10.84,0.91 3.09,0.6 5.68,1.16 7.78,1.67l0 44.31c0,7.64 -1.97,13.18 -5.92,16.62 -3.95,3.43 -9.93,5.15 -17.95,5.15 -3.12,0 -6.07,-0.25 -8.84,-0.76 -2.77,-0.51 -5.17,-1.12 -7.21,-1.82l1.63 -7.73c1.78,0.7 3.96,1.32 6.54,1.86 2.58,0.54 5.27,0.81 8.07,0.81 5.28,0 9.09,-1.05 11.41,-3.15 2.32,-2.1 3.49,-5.44 3.49,-10.03l0 -2.1zm-0.1 -36.86c-0.89,-0.25 -2.09,-0.49 -3.58,-0.71 -1.5,-0.23 -3.52,-0.34 -6.07,-0.34 -4.77,0 -8.45,1.56 -11.02,4.68 -2.58,3.12 -3.87,7.26 -3.87,12.42 0,2.86 0.36,5.31 1.1,7.35 0.73,2.04 1.71,3.72 2.96,5.06 1.24,1.34 2.67,2.32 4.29,2.96 1.63,0.64 3.3,0.96 5.02,0.96 2.35,0 4.52,-0.34 6.49,-1.01 1.97,-0.67 3.53,-1.45 4.68,-2.34l0 -29.03z"/> <path id="2" class="fil1" d="M722.36 355.14c0,-4.4 0.64,-8.23 1.91,-11.51 1.28,-3.28 2.97,-6 5.07,-8.17 2.1,-2.16 4.52,-3.78 7.25,-4.87 2.74,-1.08 5.54,-1.62 8.41,-1.62 6.68,0 11.81,2.09 15.37,6.26 3.57,4.17 5.35,10.52 5.35,19.05 0,0.38 0,0.87 0,1.48 0,0.6 -0.03,1.16 -0.1,1.67l-33.99 0c0.38,5.15 1.88,9.07 4.49,11.74 2.61,2.68 6.68,4.01 12.22,4.01 3.12,0 5.75,-0.27 7.88,-0.81 2.13,-0.54 3.74,-1.06 4.82,-1.57l1.24 7.45c-1.08,0.57 -2.97,1.17 -5.68,1.81 -2.71,0.64 -5.78,0.95 -9.21,0.95 -4.33,0 -8.07,-0.65 -11.23,-1.95 -3.15,-1.31 -5.74,-3.11 -7.78,-5.4 -2.04,-2.29 -3.55,-5.01 -4.54,-8.16 -0.98,-3.15 -1.48,-6.61 -1.48,-10.36zm34.1 -4.87c0.06,-4.01 -0.94,-7.31 -3.01,-9.89 -2.07,-2.58 -4.92,-3.87 -8.55,-3.87 -2.03,0 -3.83,0.4 -5.39,1.2 -1.56,0.79 -2.88,1.83 -3.97,3.1 -1.08,1.28 -1.92,2.74 -2.53,4.4 -0.6,1.65 -1,3.34 -1.19,5.06l24.64 0zm-11.65 -43.84l12.98 13.66 -3.72 4.2 -9.26 -8.4 -9.27 8.4 -3.72 -4.2 12.99 -13.66z"/> <path id="3" class="fil1" d="M774.86 331.64c2.04,-0.5 4.74,-1.05 8.12,-1.62 3.37,-0.57 7.25,-0.86 11.65,-0.86 3.94,0 7.22,0.56 9.83,1.67 2.61,1.12 4.7,2.68 6.26,4.68 1.56,2.01 2.66,4.41 3.29,7.21 0.64,2.8 0.96,5.89 0.96,9.26l0 27.89 -8.88 0 0 -25.98c0,-3.05 -0.21,-5.66 -0.62,-7.83 -0.42,-2.16 -1.1,-3.91 -2.06,-5.25 -0.95,-1.33 -2.23,-2.31 -3.82,-2.91 -1.59,-0.61 -3.56,-0.91 -5.92,-0.91 -0.95,0 -1.94,0.03 -2.96,0.1 -1.02,0.06 -1.99,0.14 -2.91,0.24 -0.92,0.09 -1.75,0.2 -2.48,0.33 -0.73,0.13 -1.26,0.22 -1.58,0.29l0 41.92 -8.88 0 0 -48.23z"/> <path id="4" class="fil1" d="M847.6 381.01c-4.01,0 -7.53,-0.63 -10.55,-1.9 -3.03,-1.28 -5.57,-3.06 -7.64,-5.35 -2.07,-2.29 -3.61,-5.02 -4.63,-8.17 -1.02,-3.15 -1.53,-6.63 -1.53,-10.45 0,-3.82 0.56,-7.32 1.67,-10.51 1.12,-3.18 2.69,-5.94 4.73,-8.26 2.03,-2.32 4.53,-4.14 7.49,-5.44 2.96,-1.31 6.26,-1.96 9.89,-1.96 2.23,0 4.45,0.19 6.68,0.57 2.23,0.39 4.36,0.99 6.4,1.82l-2.01 7.54c-1.33,-0.64 -2.88,-1.14 -4.63,-1.53 -1.75,-0.38 -3.61,-0.57 -5.58,-0.57 -4.97,0 -8.77,1.56 -11.42,4.68 -2.64,3.12 -3.96,7.67 -3.96,13.66 0,2.67 0.3,5.12 0.91,7.35 0.6,2.23 1.56,4.14 2.86,5.73 1.31,1.59 2.98,2.82 5.02,3.68 2.03,0.86 4.52,1.28 7.45,1.28 2.35,0 4.48,-0.22 6.39,-0.66 1.91,-0.45 3.41,-0.93 4.49,-1.44l1.25 7.45c-0.51,0.32 -1.25,0.62 -2.2,0.91 -0.96,0.29 -2.04,0.54 -3.25,0.76 -1.21,0.23 -2.5,0.42 -3.87,0.58 -1.37,0.16 -2.69,0.23 -3.96,0.23z"/> <path id="5" class="fil1" d="M875.65 379.87l-8.88 0 0 -49.66 8.88 0 0 49.66zm-4.49 -58.63c-1.59,0 -2.94,-0.53 -4.06,-1.58 -1.11,-1.05 -1.67,-2.47 -1.67,-4.25 0,-1.78 0.56,-3.2 1.67,-4.25 1.12,-1.05 2.47,-1.57 4.06,-1.57 1.59,0 2.95,0.52 4.06,1.57 1.11,1.05 1.67,2.47 1.67,4.25 0,1.78 -0.56,3.2 -1.67,4.25 -1.11,1.05 -2.47,1.58 -4.06,1.58z"/> <path id="6" class="fil1" d="M904.08 373.47c2.1,0 3.96,-0.05 5.59,-0.14 1.62,-0.1 2.97,-0.27 4.06,-0.53l0 -14.8c-0.64,-0.32 -1.68,-0.59 -3.11,-0.81 -1.43,-0.22 -3.16,-0.33 -5.2,-0.33 -1.34,0 -2.75,0.09 -4.25,0.28 -1.5,0.19 -2.87,0.59 -4.11,1.2 -1.24,0.6 -2.27,1.43 -3.1,2.48 -0.83,1.05 -1.24,2.43 -1.24,4.15 0,3.19 1.02,5.4 3.05,6.64 2.04,1.24 4.81,1.86 8.31,1.86zm-0.76 -44.5c3.56,0 6.57,0.46 9.02,1.38 2.45,0.93 4.43,2.23 5.92,3.92 1.5,1.69 2.56,3.69 3.2,6.02 0.64,2.32 0.96,4.88 0.96,7.68l0 31.04c-0.77,0.13 -1.83,0.3 -3.2,0.52 -1.37,0.23 -2.92,0.43 -4.63,0.63 -1.72,0.19 -3.59,0.36 -5.59,0.52 -2.01,0.16 -4,0.24 -5.97,0.24 -2.8,0 -5.38,-0.29 -7.73,-0.86 -2.36,-0.57 -4.4,-1.48 -6.12,-2.72 -1.71,-1.24 -3.05,-2.88 -4.01,-4.92 -0.95,-2.04 -1.43,-4.49 -1.43,-7.35 0,-2.74 0.56,-5.1 1.67,-7.07 1.12,-1.97 2.63,-3.56 4.54,-4.77 1.91,-1.21 4.14,-2.1 6.68,-2.68 2.55,-0.57 5.22,-0.86 8.02,-0.86 0.9,0 1.82,0.05 2.77,0.15 0.96,0.09 1.87,0.22 2.73,0.38 0.85,0.16 1.6,0.3 2.24,0.43 0.64,0.13 1.08,0.22 1.34,0.28l0 -2.48c0,-1.46 -0.16,-2.91 -0.48,-4.34 -0.32,-1.44 -0.89,-2.71 -1.72,-3.82 -0.83,-1.12 -1.96,-2.01 -3.39,-2.68 -1.43,-0.67 -3.29,-1 -5.59,-1 -2.93,0 -5.49,0.21 -7.68,0.62 -2.2,0.41 -3.84,0.84 -4.92,1.29l-1.05 -7.35c1.14,-0.51 3.05,-1.01 5.73,-1.48 2.67,-0.48 5.57,-0.72 8.69,-0.72z"/> <path id="7" class="fil1" d="M1000.86 346.73c0,5.73 -0.89,10.71 -2.68,14.95 -1.78,4.23 -4.29,7.73 -7.54,10.5 -3.25,2.77 -7.13,4.84 -11.65,6.21 -4.52,1.37 -9.49,2.05 -14.9,2.05 -2.67,0 -5.62,-0.11 -8.83,-0.33 -3.22,-0.23 -6.13,-0.65 -8.74,-1.29l0 -64.17c2.61,-0.64 5.52,-1.07 8.74,-1.29 3.21,-0.23 6.16,-0.34 8.83,-0.34 5.41,0 10.38,0.69 14.9,2.06 4.52,1.37 8.4,3.43 11.65,6.2 3.25,2.77 5.76,6.27 7.54,10.51 1.79,4.23 2.68,9.21 2.68,14.94zm-36 25.6c8.78,0 15.34,-2.25 19.67,-6.74 4.33,-4.48 6.49,-10.77 6.49,-18.86 0,-8.08 -2.16,-14.37 -6.49,-18.86 -4.33,-4.49 -10.89,-6.73 -19.67,-6.73 -2.62,0 -4.64,0.03 -6.07,0.1 -1.43,0.06 -2.43,0.12 -3.01,0.19l0 50.61c0.58,0.06 1.58,0.13 3.01,0.19 1.43,0.06 3.45,0.1 6.07,0.1z"/> <path id="8" class="fil1" d="M1019.26 379.87l-8.88 0 0 -49.66 8.88 0 0 49.66zm-4.49 -58.63c-1.59,0 -2.94,-0.53 -4.06,-1.58 -1.11,-1.05 -1.67,-2.47 -1.67,-4.25 0,-1.78 0.56,-3.2 1.67,-4.25 1.12,-1.05 2.47,-1.57 4.06,-1.57 1.59,0 2.95,0.52 4.06,1.57 1.12,1.05 1.67,2.47 1.67,4.25 0,1.78 -0.55,3.2 -1.67,4.25 -1.11,1.05 -2.47,1.58 -4.06,1.58z"/> <path id="9" class="fil1" d="M1062.02 374.9c-0.77,0.51 -2.25,1.16 -4.44,1.96 -2.2,0.8 -4.76,1.2 -7.69,1.2 -2.99,0 -5.81,-0.48 -8.45,-1.44 -2.65,-0.95 -4.95,-2.43 -6.93,-4.44 -1.97,-2 -3.53,-4.5 -4.68,-7.49 -1.14,-3 -1.71,-6.56 -1.71,-10.7 0,-3.63 0.54,-6.96 1.62,-9.98 1.08,-3.02 2.66,-5.63 4.73,-7.83 2.07,-2.2 4.6,-3.92 7.59,-5.16 2.99,-1.24 6.36,-1.86 10.12,-1.86 4.14,0 7.75,0.3 10.84,0.91 3.09,0.6 5.68,1.16 7.78,1.67l0 44.31c0,7.64 -1.97,13.18 -5.92,16.62 -3.95,3.43 -9.93,5.15 -17.95,5.15 -3.12,0 -6.07,-0.25 -8.84,-0.76 -2.76,-0.51 -5.17,-1.12 -7.21,-1.82l1.63 -7.73c1.78,0.7 3.96,1.32 6.54,1.86 2.58,0.54 5.27,0.81 8.07,0.81 5.28,0 9.09,-1.05 11.41,-3.15 2.32,-2.1 3.49,-5.44 3.49,-10.03l0 -2.1zm-0.1 -36.86c-0.89,-0.25 -2.08,-0.49 -3.58,-0.71 -1.5,-0.23 -3.52,-0.34 -6.06,-0.34 -4.78,0 -8.46,1.56 -11.03,4.68 -2.58,3.12 -3.87,7.26 -3.87,12.42 0,2.86 0.36,5.31 1.1,7.35 0.73,2.04 1.72,3.72 2.96,5.06 1.24,1.34 2.67,2.32 4.29,2.96 1.63,0.64 3.3,0.96 5.02,0.96 2.35,0 4.52,-0.34 6.49,-1.01 1.97,-0.67 3.53,-1.45 4.68,-2.34l0 -29.03z"/> <path id="10" class="fil1" d="M1091.31 379.87l-8.89 0 0 -49.66 8.89 0 0 49.66zm-4.49 -58.63c-1.59,0 -2.95,-0.53 -4.06,-1.58 -1.11,-1.05 -1.67,-2.47 -1.67,-4.25 0,-1.78 0.56,-3.2 1.67,-4.25 1.11,-1.05 2.47,-1.57 4.06,-1.57 1.59,0 2.94,0.52 4.06,1.57 1.11,1.05 1.67,2.47 1.67,4.25 0,1.78 -0.56,3.2 -1.67,4.25 -1.12,1.05 -2.47,1.58 -4.06,1.58z"/> <path id="11" class="fil1" d="M1111.24 330.21l18.81 0 0 7.45 -18.81 0 0 22.92c0,2.48 0.19,4.53 0.57,6.16 0.38,1.62 0.96,2.89 1.72,3.82 0.76,0.92 1.72,1.57 2.86,1.96 1.15,0.38 2.49,0.57 4.02,0.57 2.67,0 4.82,-0.3 6.44,-0.91 1.63,-0.6 2.76,-1.03 3.39,-1.29l1.72 7.36c-0.89,0.44 -2.45,1 -4.68,1.67 -2.23,0.67 -4.77,1 -7.64,1 -3.37,0 -6.16,-0.43 -8.35,-1.29 -2.2,-0.86 -3.97,-2.15 -5.3,-3.87 -1.34,-1.72 -2.28,-3.83 -2.82,-6.35 -0.54,-2.51 -0.81,-5.42 -0.81,-8.73l0 -44.32 8.88 -1.52 0 15.37z"/> <path id="12" class="fil1" d="M1154.47 373.47c2.1,0 3.96,-0.05 5.59,-0.14 1.62,-0.1 2.97,-0.27 4.06,-0.53l0 -14.8c-0.64,-0.32 -1.67,-0.59 -3.11,-0.81 -1.43,-0.22 -3.16,-0.33 -5.2,-0.33 -1.34,0 -2.75,0.09 -4.25,0.28 -1.5,0.19 -2.86,0.59 -4.11,1.2 -1.24,0.6 -2.27,1.43 -3.1,2.48 -0.83,1.05 -1.24,2.43 -1.24,4.15 0,3.19 1.02,5.4 3.05,6.64 2.04,1.24 4.81,1.86 8.31,1.86zm-0.76 -44.5c3.56,0 6.57,0.46 9.02,1.38 2.45,0.93 4.43,2.23 5.92,3.92 1.5,1.69 2.57,3.69 3.2,6.02 0.64,2.32 0.96,4.88 0.96,7.68l0 31.04c-0.77,0.13 -1.83,0.3 -3.2,0.52 -1.37,0.23 -2.91,0.43 -4.63,0.63 -1.72,0.19 -3.58,0.36 -5.59,0.52 -2.01,0.16 -3.99,0.24 -5.97,0.24 -2.8,0 -5.38,-0.29 -7.73,-0.86 -2.36,-0.57 -4.4,-1.48 -6.12,-2.72 -1.71,-1.24 -3.05,-2.88 -4.01,-4.92 -0.95,-2.04 -1.43,-4.49 -1.43,-7.35 0,-2.74 0.56,-5.1 1.67,-7.07 1.12,-1.97 2.63,-3.56 4.54,-4.77 1.91,-1.21 4.14,-2.1 6.68,-2.68 2.55,-0.57 5.22,-0.86 8.02,-0.86 0.9,0 1.82,0.05 2.77,0.15 0.96,0.09 1.87,0.22 2.73,0.38 0.86,0.16 1.6,0.3 2.24,0.43 0.64,0.13 1.08,0.22 1.34,0.28l0 -2.48c0,-1.46 -0.16,-2.91 -0.48,-4.34 -0.32,-1.44 -0.89,-2.71 -1.72,-3.82 -0.83,-1.12 -1.96,-2.01 -3.39,-2.68 -1.43,-0.67 -3.29,-1 -5.59,-1 -2.92,0 -5.49,0.21 -7.68,0.62 -2.2,0.41 -3.84,0.84 -4.92,1.29l-1.05 -7.35c1.14,-0.51 3.05,-1.01 5.73,-1.48 2.67,-0.48 5.57,-0.72 8.69,-0.72z"/> <path id="13" class="fil1" d="M1198.76 380.82c-5.48,-0.12 -9.36,-1.3 -11.66,-3.53 -2.29,-2.23 -3.43,-5.7 -3.43,-10.41l0 -59.59 8.88 -1.52 0 59.68c0,1.46 0.12,2.67 0.38,3.63 0.26,0.95 0.67,1.72 1.24,2.29 0.57,0.57 1.34,1 2.29,1.29 0.96,0.29 2.14,0.52 3.54,0.72l-1.24 7.44z"/> <path class="fil0" d="M756.35 104.83l0 -45.85c0,-4.55 -3.36,-7.96 -7.83,-7.96l-26.83 0 0 -42.82c0,-4.55 -2.23,-9.1 -8.2,-7.96l-67.07 11.75c-4.47,0.76 -8.2,3.41 -8.2,7.96l0 31.07 -21.24 0c-4.47,0 -8.2,3.41 -8.2,7.96l0 42.06c0,4.55 3.73,7.58 8.2,8.34l21.24 3.79 0 91.32c0,59.5 30.93,73.9 69.68,73.9 16.77,0 24.6,-1.14 39.5,-3.79 4.48,-0.76 7.83,-3.79 7.83,-8.34l0 -41.31c0,-4.54 -3.35,-7.95 -7.83,-7.95l-17.88 0c-7.08,0 -7.83,-3.41 -7.83,-10.99l0 -92.84 26.83 0c4.47,0 7.83,-3.79 7.83,-8.34z"/></svg>';
	var logoLi = '<svg width="215" height="32" viewBox="0 0 215 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M28.1929 10.8083C29.2648 10.8083 30.3126 10.4913 31.2038 9.89751C32.0951 9.3037 32.7897 8.45969 33.1999 7.47221C33.6101 6.48474 33.7174 5.39814 33.5083 4.34984C33.2992 3.30154 32.783 2.33862 32.0251 1.58284C31.2672 0.827055 30.3015 0.312361 29.2502 0.103841C28.1989 -0.104678 27.1093 0.00234152 26.119 0.411368C25.1287 0.820394 24.2823 1.51306 23.6868 2.40176C23.0913 3.29047 22.7734 4.3353 22.7734 5.40414C22.7734 6.83741 23.3444 8.21197 24.3608 9.22544C25.3771 10.2389 26.7556 10.8083 28.1929 10.8083Z" fill="#371E56"/> <path d="M22.5532 26.7469C19.7663 26.7463 17.0629 25.7981 14.8891 24.059C12.7154 22.3198 11.2013 19.8936 10.5966 17.1808C10.4033 16.5645 10.305 15.9225 10.3049 15.2768V7.9733C10.3049 6.61066 9.76206 5.30383 8.79579 4.34029C7.82952 3.37676 6.51897 2.83545 5.15246 2.83545C3.78594 2.83545 2.47539 3.37676 1.50912 4.34029C0.542846 5.30383 0 6.61066 0 7.9733L0 15.0228C0 24.3766 7.63915 32.0649 17.0164 31.8786C20.0228 31.8187 22.9569 30.9489 25.508 29.3616C28.0591 27.7743 30.1321 25.5284 31.5075 22.862C30.3632 24.089 28.9774 25.0673 27.4367 25.7357C25.8959 26.4042 24.2334 26.7485 22.5532 26.7469Z" fill="#2BC4C3"/> <path d="M33.3511 15.0705C33.3511 14.6782 33.1948 14.3019 32.9166 14.0245C32.6384 13.7471 32.2611 13.5913 31.8677 13.5913H24.5095C24.1161 13.5913 23.7388 13.7471 23.4606 14.0245C23.1824 14.3019 23.0261 14.6782 23.0261 15.0705V15.2767C23.0249 16.7916 22.4802 18.2561 21.4904 19.4054C20.5006 20.5547 19.1311 21.3128 17.6295 21.5428C16.1279 21.7728 14.5933 21.4595 13.3033 20.6594C12.0132 19.8594 11.0528 18.6254 10.5957 17.1807C11.0786 19.3529 12.1475 21.3521 13.6869 22.9625C15.2264 24.5729 17.1779 25.7332 19.3306 26.3181C21.4833 26.903 23.7554 26.8901 25.9013 26.281C28.0472 25.6719 29.9854 24.4896 31.5065 22.8619C32.7218 20.5091 33.3543 17.9002 33.3511 15.2536V15.0705Z" fill="url(#paint0_linear)"/> <path d="M96.9259 6.07959C95.9997 6.11037 95.2773 6.73683 95.2773 7.69267C95.2773 8.64851 95.9966 9.30575 96.9259 9.30575C97.8829 9.30575 98.6022 8.64851 98.6022 7.69267C98.6022 6.73683 97.8829 6.07959 96.9259 6.07959Z" fill="#371E56"/> <path d="M108.341 11.9043C105.827 11.9043 104.03 13.188 103.248 14.741L103.19 12.6216C103.191 12.5601 103.178 12.4993 103.154 12.4428C103.13 12.3864 103.094 12.3356 103.049 12.2935C103.004 12.2515 102.951 12.2191 102.893 12.1985C102.835 12.1779 102.773 12.1694 102.712 12.1737H101.877C101.817 12.1696 101.756 12.1784 101.7 12.1994C101.643 12.2205 101.592 12.2533 101.549 12.2957C101.506 12.338 101.473 12.389 101.452 12.4452C101.43 12.5014 101.421 12.5615 101.425 12.6216V25.4616C101.421 25.5213 101.43 25.5812 101.451 25.6371C101.473 25.6931 101.506 25.7439 101.548 25.7863C101.591 25.8286 101.642 25.8615 101.698 25.8827C101.754 25.9039 101.814 25.9131 101.874 25.9095H103.13C103.19 25.9131 103.25 25.9039 103.306 25.8827C103.362 25.8615 103.413 25.8286 103.456 25.7863C103.498 25.7439 103.531 25.6931 103.553 25.6371C103.574 25.5812 103.583 25.5213 103.579 25.4616V17.7656C103.789 15.8847 105.228 13.8529 107.982 13.8529C110.527 13.8237 112.234 15.6753 112.234 18.5721V25.4693C112.231 25.529 112.24 25.5889 112.261 25.6448C112.282 25.7008 112.315 25.7516 112.358 25.794C112.4 25.8363 112.451 25.8692 112.507 25.8904C112.564 25.9116 112.624 25.9208 112.683 25.9172H113.918C113.978 25.9208 114.038 25.9116 114.094 25.8904C114.151 25.8692 114.201 25.8363 114.244 25.794C114.286 25.7516 114.319 25.7008 114.341 25.6448C114.362 25.5889 114.371 25.529 114.368 25.4693V18.2935C114.361 14.4424 111.935 11.9043 108.341 11.9043Z" fill="#371E56"/> <path d="M133.718 11.9043C129.584 11.9043 126.771 15.0089 126.771 19.04C126.771 23.162 129.826 26.1773 134.079 26.1773C136.474 26.1773 138.003 25.4308 139.08 24.655C139.128 24.6207 139.169 24.5768 139.2 24.5261C139.231 24.4754 139.252 24.419 139.26 24.3602C139.268 24.3015 139.265 24.2416 139.249 24.1843C139.234 24.1271 139.206 24.0735 139.169 24.0271L138.66 23.2205C138.506 22.9527 138.302 22.9527 138.061 23.1312C136.973 23.9429 135.648 24.3756 134.289 24.3626C131.323 24.3626 129.138 22.4509 128.838 19.7034H139.643C139.705 19.7102 139.768 19.7034 139.827 19.6837C139.886 19.664 139.94 19.6318 139.986 19.5892C140.031 19.5467 140.067 19.4948 140.091 19.4372C140.114 19.3796 140.125 19.3176 140.122 19.2555V18.7784C140.125 14.681 137.49 11.9043 133.718 11.9043ZM138.089 17.9657H128.889C129.308 15.4275 131.195 13.7252 133.77 13.7252C136.076 13.7252 137.873 15.3675 138.083 17.9056L138.089 17.9657Z" fill="#371E56"/> <path d="M155.268 12.172H154.309C154.249 12.1684 154.189 12.1776 154.133 12.1989C154.076 12.2203 154.025 12.2533 153.983 12.2958C153.94 12.3383 153.907 12.3893 153.886 12.4454C153.865 12.5016 153.856 12.5616 153.86 12.6215L153.8 14.6517C152.841 13.1587 151.021 11.9058 148.318 11.9058C144.575 11.9042 141.701 14.9488 141.701 19.04C141.701 23.1312 144.634 26.1772 148.379 26.1772C150.774 26.1772 152.512 25.0998 153.59 23.6391V25.3969C153.59 28.0843 151.673 30.1438 148.349 30.1438C146.728 30.1616 145.133 29.7357 143.737 28.9124C143.469 28.7585 143.259 28.7923 143.109 29.0663L142.6 29.9021C142.445 30.1715 142.51 30.3808 142.754 30.5301C143.989 31.2766 145.719 31.9923 148.473 31.9923C153.175 31.9923 155.728 29.0371 155.728 25.1537V12.6215C155.728 12.5616 155.716 12.5023 155.693 12.4471C155.67 12.3918 155.636 12.3418 155.593 12.2999C155.55 12.258 155.499 12.2251 155.443 12.2031C155.387 12.1812 155.328 12.1706 155.268 12.172ZM148.738 24.2363C146.043 24.2363 143.827 22.026 143.827 19.04C143.827 16.0539 146.043 13.8436 148.738 13.8436C151.704 13.8436 153.71 16.0539 153.71 19.04C153.71 22.0568 151.704 24.2363 148.738 24.2363Z" fill="#371E56"/> <path d="M198.274 7.69607H197.105C197.045 7.69248 196.985 7.70161 196.929 7.72285C196.873 7.74409 196.822 7.77696 196.779 7.81929C196.737 7.86162 196.704 7.91245 196.683 7.96842C196.661 8.02439 196.652 8.08423 196.656 8.14398V14.6502C195.702 13.111 193.877 11.9043 191.295 11.9043C187.552 11.9043 184.678 14.9488 184.678 19.04C184.678 23.1312 187.611 26.1773 191.355 26.1773C193.93 26.1773 195.758 24.9828 196.806 23.4067L196.866 25.4662C196.862 25.5259 196.871 25.5857 196.893 25.6417C196.914 25.6977 196.947 25.7485 196.989 25.7908C197.032 25.8332 197.083 25.866 197.139 25.8873C197.195 25.9085 197.255 25.9177 197.315 25.9141H198.274C198.334 25.9177 198.394 25.9085 198.45 25.8873C198.506 25.866 198.557 25.8332 198.599 25.7908C198.642 25.7485 198.675 25.6977 198.696 25.6417C198.717 25.5857 198.726 25.5259 198.723 25.4662V8.1409C198.726 8.0814 198.716 8.0219 198.695 7.9663C198.673 7.9107 198.64 7.86026 198.598 7.81827C198.556 7.77628 198.505 7.74369 198.449 7.72263C198.393 7.70157 198.333 7.69252 198.274 7.69607ZM191.712 24.2363C189.017 24.2363 186.8 22.026 186.8 19.04C186.8 16.0539 189.017 13.8436 191.712 13.8436C194.677 13.8436 196.682 16.0539 196.682 19.04C196.685 22.0568 194.68 24.2363 191.712 24.2363Z" fill="#371E56"/> <path d="M214.557 12.1721H213.598C213.538 12.1685 213.478 12.1777 213.422 12.1989C213.366 12.2201 213.315 12.253 213.273 12.2953C213.23 12.3377 213.197 12.3885 213.176 12.4445C213.155 12.5004 213.145 12.5603 213.149 12.62L213.083 14.6502C212.156 13.1418 210.275 11.9043 207.58 11.9043C203.835 11.9043 200.961 14.9488 200.961 19.04C200.961 23.1312 203.894 26.1773 207.638 26.1773C210.215 26.1773 212.041 25.0121 213.089 23.4298L213.149 25.46C213.145 25.5198 213.155 25.5796 213.176 25.6356C213.197 25.6916 213.23 25.7424 213.273 25.7847C213.315 25.8271 213.366 25.8599 213.422 25.8812C213.478 25.9024 213.538 25.9115 213.598 25.908H214.557C214.617 25.9115 214.677 25.9024 214.733 25.8812C214.789 25.8599 214.84 25.8271 214.882 25.7847C214.925 25.7424 214.958 25.6916 214.979 25.6356C215 25.5796 215.009 25.5198 215.006 25.46V12.6216C215.01 12.5617 215.001 12.5017 214.98 12.4455C214.958 12.3894 214.925 12.3383 214.883 12.2958C214.84 12.2533 214.789 12.2203 214.733 12.199C214.677 12.1777 214.617 12.1685 214.557 12.1721ZM207.998 24.2364C205.303 24.2364 203.088 22.0261 203.088 19.04C203.088 16.054 205.303 13.8437 207.998 13.8437C210.963 13.8437 212.97 16.054 212.97 19.04C212.964 22.0569 210.957 24.2364 207.992 24.2364H207.998Z" fill="#371E56"/> <path d="M97.5841 12.1719H96.3554C96.1073 12.1719 95.9062 12.3724 95.9062 12.6198V25.4598C95.9062 25.7072 96.1073 25.9077 96.3554 25.9077H97.5841C97.8322 25.9077 98.0333 25.7072 98.0333 25.4598V12.6198C98.0333 12.3724 97.8322 12.1719 97.5841 12.1719Z" fill="#371E56"/> <path d="M181.653 12.1721H180.694C180.634 12.1685 180.574 12.1777 180.518 12.1989C180.462 12.2201 180.411 12.253 180.368 12.2953C180.326 12.3377 180.293 12.3885 180.272 12.4445C180.25 12.5004 180.241 12.5603 180.245 12.62L180.185 14.621C179.228 13.128 177.371 11.9043 174.676 11.9043C170.932 11.9043 168.057 14.9488 168.057 19.04C168.057 23.1312 170.989 26.1773 174.734 26.1773C177.31 26.1773 179.136 25.0121 180.185 23.4298L180.245 25.46C180.241 25.5198 180.25 25.5796 180.272 25.6356C180.293 25.6916 180.326 25.7424 180.368 25.7847C180.411 25.8271 180.462 25.8599 180.518 25.8812C180.574 25.9024 180.634 25.9115 180.694 25.908H181.653C181.712 25.9115 181.772 25.9024 181.829 25.8812C181.885 25.8599 181.936 25.8271 181.978 25.7847C182.021 25.7424 182.054 25.6916 182.075 25.6356C182.096 25.5796 182.105 25.5198 182.102 25.46V12.6216C182.106 12.5617 182.097 12.5017 182.075 12.4455C182.054 12.3894 182.021 12.3383 181.979 12.2958C181.936 12.2533 181.885 12.2203 181.829 12.199C181.773 12.1777 181.713 12.1685 181.653 12.1721ZM175.094 24.2364C172.399 24.2364 170.184 22.0261 170.184 19.04C170.184 16.054 172.399 13.8437 175.094 13.8437C178.059 13.8437 180.066 16.054 180.066 19.04C180.066 22.0569 178.059 24.2364 175.094 24.2364Z" fill="#371E56"/> <path d="M167.605 12.6216C166.812 12.1506 165.765 11.9506 164.623 12.0645C163.062 12.2184 161.738 12.988 161.082 14.6472L160.996 12.6216C160.996 12.5603 160.983 12.4995 160.959 12.4432C160.934 12.3869 160.899 12.3361 160.854 12.2941C160.809 12.2521 160.756 12.2198 160.698 12.1991C160.64 12.1783 160.579 12.1697 160.517 12.1737H159.559C159.439 12.1737 159.325 12.2209 159.241 12.3049C159.157 12.3889 159.109 12.5029 159.109 12.6216V25.4617C159.109 25.5805 159.157 25.6944 159.241 25.7784C159.325 25.8624 159.439 25.9096 159.559 25.9096H160.786C160.905 25.9096 161.019 25.8624 161.103 25.7784C161.188 25.6944 161.235 25.5805 161.235 25.4617V17.9196C161.399 15.8063 162.402 14.0716 164.606 13.7314C165.325 13.6441 166.055 13.7649 166.707 14.0793C166.804 14.1304 166.917 14.1442 167.024 14.1181C167.131 14.0921 167.225 14.0279 167.287 13.9377L167.75 13.265C167.786 13.214 167.81 13.1563 167.822 13.0955C167.833 13.0347 167.832 12.9721 167.819 12.9117C167.805 12.8513 167.779 12.7944 167.742 12.7445C167.706 12.6945 167.659 12.6527 167.605 12.6216Z" fill="#371E56"/> <path d="M125.902 23.7035C125.727 23.428 125.551 23.3325 125.318 23.5203C124.784 23.9498 123.863 24.4639 122.722 24.2515C121.233 23.9744 120.195 22.6045 120.195 21.093V13.9034H124.763C124.848 13.9038 124.931 13.88 125.003 13.8347C125.075 13.7895 125.132 13.7246 125.169 13.6479L125.567 12.8121C125.599 12.7438 125.614 12.6684 125.61 12.5929C125.605 12.5174 125.581 12.4443 125.541 12.3804C125.5 12.3164 125.444 12.2638 125.378 12.2273C125.311 12.1908 125.237 12.1717 125.161 12.1718H120.195V8.14063C120.194 8.02237 120.147 7.90923 120.063 7.8259C119.978 7.74257 119.865 7.6958 119.746 7.6958H118.579C118.46 7.6958 118.346 7.74299 118.262 7.82699C118.177 7.91099 118.13 8.02492 118.13 8.14371V12.1718H115.733C115.674 12.1718 115.616 12.1834 115.561 12.2059C115.507 12.2285 115.457 12.2615 115.416 12.3031C115.374 12.3447 115.341 12.3941 115.319 12.4484C115.296 12.5027 115.285 12.561 115.285 12.6197V13.4555C115.285 13.5743 115.332 13.6882 115.417 13.7722C115.501 13.8562 115.615 13.9034 115.734 13.9034H118.099V21.4286C118.099 24.4746 120.135 26.177 122.921 26.177C124.852 26.177 125.991 25.3366 126.285 25.0718C126.373 25.0057 126.433 24.9093 126.454 24.8013C126.476 24.6933 126.456 24.5813 126.399 24.4869C126.285 24.3069 126.204 24.176 125.902 23.7035Z" fill="#371E56"/> <path d="M91.7928 12.1721H89.4064C89.2531 12.1721 89.1041 12.2227 88.9827 12.316C88.8612 12.4093 88.7741 12.54 88.7349 12.6878L88.4988 13.5728C87.4877 12.4245 86.2251 11.9043 84.4638 11.9043C80.6389 11.9043 77.7539 14.9673 77.7539 19.0308C77.7539 23.0943 80.6003 26.1573 84.3759 26.1573C85.1801 26.1706 85.9781 26.0154 86.7183 25.7017C87.4586 25.388 88.1246 24.9229 88.6732 24.3364L88.7334 25.2169C88.7343 25.3119 88.7549 25.4056 88.7939 25.4923C88.833 25.579 88.8896 25.6566 88.9602 25.7204C89.0308 25.7842 89.1139 25.8326 89.2043 25.8628C89.2946 25.893 89.3902 25.9042 89.4851 25.8956H91.7928C92.2311 25.8956 92.5151 25.6232 92.5151 25.203V12.8648C92.5151 12.4446 92.2311 12.1721 91.7928 12.1721ZM87.7254 21.589C87.0926 22.2293 86.2173 22.5679 85.1955 22.5679C83.2089 22.5679 81.7101 21.0472 81.7101 19.0277C81.7101 17.0083 83.2089 15.4876 85.1955 15.4876C87.2793 15.4876 88.6794 16.9098 88.6794 19.0277C88.6999 19.4965 88.6261 19.9647 88.4622 20.4046C88.2984 20.8445 88.0479 21.2472 87.7254 21.589Z" fill="#371E56"/> <path d="M61.0629 11.9072C56.9307 11.9072 53.6074 14.9856 53.6074 19.043C53.6074 23.1003 56.9307 26.1772 61.0629 26.1772C65.195 26.1772 68.5168 23.0988 68.5168 19.043C68.5168 14.9872 65.1935 11.9072 61.0629 11.9072ZM61.0629 22.6247C59.0856 22.6247 57.559 21.0424 57.559 19.043C57.559 17.0712 59.0856 15.4597 61.0629 15.4597C63.0695 15.4597 64.5653 17.0712 64.5653 19.043C64.5653 21.0424 63.068 22.6262 61.0629 22.6262V22.6247Z" fill="#371E56"/> <path d="M74.7202 12.1719H70.5016C70.3175 12.1723 70.1411 12.2454 70.0109 12.3752C69.8807 12.505 69.8074 12.6809 69.807 12.8645V14.4422C69.8074 14.6258 69.8807 14.8017 70.0109 14.9315C70.1411 15.0613 70.3175 15.1344 70.5016 15.1348H71.4278V26.0031C71.4265 26.5356 71.214 27.046 70.8365 27.4227C70.4591 27.7994 69.9474 28.0117 69.4134 28.0133C69.2975 28.0133 69.1864 28.0592 69.1045 28.1409C69.0226 28.2226 68.9766 28.3334 68.9766 28.4489V31.5535C68.9766 31.6688 69.0224 31.7793 69.104 31.861C69.1856 31.9426 69.2963 31.9887 69.4119 31.9891C71.0037 31.9887 72.5302 31.3578 73.6556 30.2353C74.781 29.1128 75.4133 27.5904 75.4133 26.0031V12.8645C75.4133 12.6811 75.3403 12.5051 75.2104 12.3753C75.0804 12.2454 74.9042 12.1723 74.7202 12.1719Z" fill="#371E56"/> <path d="M73.384 5.36865C72.0349 5.39636 70.9961 6.31988 70.9961 7.69284C70.9961 9.06581 72.0349 10.017 73.384 10.017C74.7593 10.017 75.8275 9.06427 75.8275 7.69284C75.8275 6.32142 74.7593 5.36865 73.384 5.36865Z" fill="#371E56"/> <path d="M52.2572 22.4906C52.2092 22.3762 52.1236 22.2813 52.0146 22.2215C51.9056 22.1617 51.7795 22.1405 51.6568 22.1612C51.4785 22.1969 51.2968 22.2124 51.115 22.2074C49.9758 22.115 49.3106 21.3054 49.3106 20.1926V8.38536C49.3097 8.20326 49.2371 8.0288 49.1082 7.89974C48.9794 7.77068 48.8047 7.69742 48.6221 7.6958H46.0227C45.8385 7.6958 45.6618 7.76878 45.5316 7.89867C45.4013 8.02857 45.3281 8.20474 45.3281 8.38844V20.1957C45.3281 23.6943 47.8303 26.1816 51.3311 26.1816C51.8546 26.1782 52.3747 26.0978 52.8747 25.943C52.9676 25.9145 53.0536 25.8669 53.1269 25.8032C53.2003 25.7395 53.2595 25.6612 53.3006 25.5733C53.3418 25.4854 53.364 25.3899 53.3659 25.2929C53.3678 25.196 53.3492 25.0997 53.3115 25.0103L52.2572 22.4906Z" fill="#371E56"/> <defs> <linearGradient id="paint0_linear" x1="14.2648" y1="35.1432" x2="23.1722" y2="15.2225" gradientUnits="userSpaceOnUse"> <stop offset="0.29" stop-color="#0C9898"/> <stop offset="1" stop-color="#2BC4C3"/> </linearGradient> <clipPath id="clip0"> <rect width="215" height="32" fill="white"/> </clipPath> </defs> </svg>';

	$('.logosCopy .virginia-arruda a').append(logoVirginia-arruda);
	$('.logosCopy .li a').append(logoLi);

	$('#rodape').remove();
	$('#barraNewsletter').remove();

}

/*## PAGINA BUSCA ##*/
$('.pagina-busca .conteudo.span9').removeClass('span9').addClass('span12');

/*## PAGINA PRODUTO ##*/
$('<span class="desc-parc">'+iconePix+''+ descontoBoleto +'</span>'
	).insertAfter('.parcelas-produto .accordion .accordion-group .accordion-heading img[alt="Boleto Banc????rio"]');

/*## PAGINA CHECKOUT ##*/
$('<span class="desc-parc">'+iconePix+'</span>'
	).insertAfter('.forma-conteiner img[alt="Pague com Boleto Banc????rio"]');

//Video
function videoProduto(){
		if ($(".produto-video").length) {
		var urlVideo =  document.getElementById("playerVideo").src;
		$('<div id="trailer" class="row-fluid trailer"><div class="span12"><a class="titulo-categoria cor-principal"><strong class="titulo-video">V????deo e Descri????????o</strong></a>'+
			'<iframe width="1140" height="500" src="'+urlVideo+'?controls=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div>'
			).insertAfter('#corpo > div > div.secao-principal.row-fluid.sem-coluna > div.span12.produto > div:nth-child(1)');
		}
	}

/*## PAGINA CATEGORIA ##*/
$('.pagina-categoria .coluna .componente').insertBefore('.pagina-categoria div#listagemProdutos').addClass('descricao-categoria');
$('<div class="mostrar-mais"><span class="botao">ver mais</span></div>').insertAfter('.descricao-categoria .interno');

$('.mostrar-mais .botao').click(function() {
    $('.descricao-categoria .interno').toggleClass('mostra');
  });


  if ($(window).width() <= 767){
	$('<div class="filtrar">FILTRAR <i class="icon-caret-down"></i></div>').insertBefore('.pagina-categoria #corpo .coluna.span3');

	$('.filtrar').click(function() {
		$('.pagina-categoria #corpo .coluna.span3').toggleClass('mostra');
		$('.pagina-categoria #corpo .filtrar i').toggleClass('cima');
	  });
  }



/*### TO TOP ###*/
function toTop() {
$('<div id="toTop"><i class="fi-rr-angle-small-up"></i></div>').appendTo('body');
        $(window).scroll(function() {
            if ($(this).scrollTop()) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $("#toTop").click(function () {
        $("html, body").animate({scrollTop: 0}, 500);
    });
}

/*### WHATSAPP ###*/
var url_atual = window.location.href;
function btnWhatsApp() {
	if (ativaWhatsApp == true) {
		$('<div id="btnWhatsApp"><a href="//api.whatsapp.com/send?phone=55'+NumWhatsApp+'&text=Ol????%20estou%20na%20p????gina%20'+url_atual+'%20na%20Amo%20Personagem%20e%20estou%20com%20d????vidas.%20Poderia%20me%20ajudar?" target="new"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m439.277344 72.722656c-46.898438-46.898437-109.238282-72.722656-175.566406-72.722656-.003907 0-.019532 0-.023438 0-32.804688.00390625-64.773438 6.355469-95.011719 18.882812-30.242187 12.527344-57.335937 30.640626-80.535156 53.839844-46.894531 46.894532-72.71875 109.246094-72.71875 175.566406 0 39.550782 9.542969 78.855469 27.625 113.875l-41.734375 119.226563c-2.941406 8.410156-.859375 17.550781 5.445312 23.851563 4.410157 4.414062 10.214844 6.757812 16.183594 6.757812 2.558594 0 5.144532-.429688 7.667969-1.3125l119.226563-41.730469c35.019531 18.082031 74.324218 27.625 113.875 27.625 66.320312 0 128.667968-25.828125 175.566406-72.722656 46.894531-46.894531 72.722656-109.246094 72.722656-175.566406 0-66.324219-25.824219-128.675781-72.722656-175.570313zm-21.234375 329.902344c-41.222657 41.226562-96.035157 63.925781-154.332031 63.925781-35.664063 0-71.09375-8.820312-102.460938-25.515625-5.6875-3.023437-12.410156-3.542968-18.445312-1.429687l-108.320313 37.910156 37.914063-108.320313c2.113281-6.042968 1.589843-12.765624-1.433594-18.449218-16.691406-31.359375-25.515625-66.789063-25.515625-102.457032 0-58.296874 22.703125-113.109374 63.925781-154.332031 41.21875-41.21875 96.023438-63.921875 154.316406-63.929687h.019532c58.300781 0 113.109374 22.703125 154.332031 63.929687 41.226562 41.222657 63.929687 96.03125 63.929687 154.332031 0 58.300782-22.703125 113.113282-63.929687 154.335938zm0 0"/><path d="m355.984375 270.46875c-11.421875-11.421875-30.007813-11.421875-41.429687 0l-12.492188 12.492188c-31.019531-16.902344-56.121094-42.003907-73.027344-73.023438l12.492188-12.492188c11.425781-11.421874 11.425781-30.007812 0-41.429687l-33.664063-33.664063c-11.421875-11.421874-30.007812-11.421874-41.429687 0l-26.929688 26.929688c-15.425781 15.425781-16.195312 41.945312-2.167968 74.675781 12.179687 28.417969 34.46875 59.652344 62.761718 87.945313 28.292969 28.292968 59.527344 50.582031 87.945313 62.761718 15.550781 6.664063 29.695312 9.988282 41.917969 9.988282 13.503906 0 24.660156-4.058594 32.757812-12.15625l26.929688-26.933594v.003906c5.535156-5.535156 8.582031-12.890625 8.582031-20.714844 0-7.828124-3.046875-15.183593-8.582031-20.714843zm-14.5 80.792969c-4.402344 4.402343-17.941406 5.945312-41.609375-4.195313-24.992188-10.710937-52.886719-30.742187-78.542969-56.398437s-45.683593-53.546875-56.394531-78.539063c-10.144531-23.667968-8.601562-37.210937-4.199219-41.613281l26.414063-26.414063 32.625 32.628907-15.636719 15.640625c-7.070313 7.070312-8.777344 17.792968-4.242187 26.683594 20.558593 40.3125 52.734374 72.488281 93.046874 93.046874 8.894532 4.535157 19.617188 2.832032 26.6875-4.242187l15.636719-15.636719 32.628907 32.628906zm0 0"/></svg></a></div>').appendTo('body');
		        $(window).scroll(function() {
		            if ($(this).scrollTop()) {
		                $('#btnWhatsApp').fadeIn();
		            } else {
		                $('#btnWhatsApp').fadeOut();
		            }
		        });

		        $("#btnWhatsApp").click(function () {
		        //$("html, body").animate({scrollTop: 0}, 1000);
		    });
	} else {
		return
	}
}


/*## PAGINA PRODUTO ##*/
$(document).ready(function() {

	var codigoOV = $('.pagina-produto .produto .codigo-produto .trustvox-stars div').attr('data-trustvox-product-code-js');
	var skuOV = $('.pagina-produto .produto .principal .codigo-produto > span > span').html();
	  
	  $('<div class="NETREVIEWS_PRODUCT_STARS" data-product-id="'+codigoOV+','+skuOV+'"></div>'
		).insertAfter('.produto .codigo-produto .trustvox-stars');
  
	  
	  $('<div class="NETREVIEWS_PRODUCT_REVIEWS" data-product-id="'+codigoOV+'"></div>'
		).insertAfter('.pagina-produto #corpo > div > div.secao-principal.row-fluid.sem-coluna > div > div:nth-child(2)');
  
	  /*$(function(){nrSearchForStars();nrSearchForReviews();});*/
  
  });


  /*### PAGINA LOGIN CARRINHO ###*/
	$(document).ready(function() {
	$('.pagina-carrinho #login-content > div > div > div > h3'
		).html('Ol????! A Amo agradece pela sua compra! Para proceder com o pagamento, primeiramente insira seu e-mail');
	});


/*Pagina Conta*/
$('<li><a href="logout" title="Sair da conta"><i class="icon-close cor-secundaria"></i> Sair</a></li>').appendTo('.pagina-conta .menu-simples');

/*Carrossel Opini????es Verificas*/
$('<div id="opinioes"><div class="conteiner"></div></div>').insertAfter('.pagina-inicial #corpo');
$('#opinioes .conteiner').append($('iframe#AV_widget_iframe'));

/*## Banners GIFs ##*/

if (Full1 === ''){
} else {
    $('.secao-banners .banner.cheio .flexslider .slides li img[alt="Full1"]').attr('src',Full1);
}

if (Full2 === ''){
} else {
    $('.secao-banners .banner.cheio .flexslider .slides li img[alt="Full2"]').attr('src',Full2);
}

if (Full3 === ''){
} else {
    $('.secao-banners .banner.cheio .flexslider .slides li img[alt="Full3"]').attr('src',Full3);
}

if (Full1_interna === ''){
} else {
    $('.secao-banners .banner.cheio .flexslider .slides li img[alt="Full1-interna"]').attr('src',Full1_interna);
}


if (Full2_interna === ''){
} else {
    $('.secao-banners .banner.cheio .flexslider .slides li img[alt="Full2-interna"]').attr('src',Full2_interna);
}

if (Full3_interna === ''){
} else {
    $('.secao-banners .banner.cheio .flexslider .slides li img[alt="Full3-interna"]').attr('src',Full3_interna);
}

$(function(){headerMobileVirginia-arruda();bannerfullMobile();tarjaMobile();headVirginia-arruda2();menuVirginia-arruda();menuLateralVirginia-arruda();
	centralVirginia-arruda();rastreioVirginia-arruda();userLogado();vitrineVirginia-arruda();marcasVirginia-arruda();videoProduto();
	vitrineOfertas();rodapeVirginia-arruda();toTop();btnWhatsApp();});

$(function(){nrSearchForStars();nrSearchForReviews();});
