(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1600:function(module,exports,__webpack_require__){var content=__webpack_require__(1601);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(1603)(content,options);content.locals&&(module.exports=content.locals)},1601:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(1602)(!1)).push([module.i,".custom-right-arrow {\n  position: absolute !important;\n  right: 10px;\n  z-index: 1;\n}\n.custom-left-arrow {\n  position: absolute !important;\n  left: 10px;\n  z-index: 1;\n}\n.container {\n  margin-top: 50px;\n}\n",""])},1696:function(module,exports,__webpack_require__){"use strict";var __rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&(t[p[i]]=s[p[i]])}return t};Object.defineProperty(exports,"__esModule",{value:!0});const React=__webpack_require__(1),style_1=__webpack_require__(1697),utils_1=__webpack_require__(1698),defaultTransitionDuration=500,defaultTransition="transform 500ms ease-in-out";class Container extends React.Component{constructor(props){super(props),this.containerRef=React.createRef(),this.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:React.Children.count(props.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},this.onResize=this.onResize.bind(this),this.handleMouseDown=this.handleMouseDown.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseUp=this.handleMouseUp.bind(this),this.handleTouchStart=this.handleTouchStart.bind(this),this.handleTouchMove=this.handleTouchMove.bind(this),this.handleTouchEnd=this.handleTouchEnd.bind(this),this.onMove=!1,this.initialPosition=0,this.lastPosition=0,this.isAnimationAllowed=!0,this.direction=""}componentDidMount(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize()}setItemsToShow(shouldCorrectItemPosition){const{responsive:responsive}=this.props;Object.keys(responsive).forEach(item=>{const{breakpoint:breakpoint,items:items}=responsive[item],{max:max,min:min}=breakpoint;window.innerWidth>=min&&window.innerWidth<=max&&(this.setState({slidesToShow:items,deviceType:item}),this.setContainerAndItemWidth(items,shouldCorrectItemPosition))})}setContainerAndItemWidth(slidesToShow,shouldCorrectItemPosition){if(this.containerRef&&this.containerRef.current){const containerWidth=this.containerRef.current.offsetWidth,itemWidth=Math.round(this.containerRef.current.offsetWidth/slidesToShow);this.setState({containerWidth:containerWidth,itemWidth:itemWidth}),shouldCorrectItemPosition&&this.setState({transform:-itemWidth*this.state.currentSlide})}}onResize(){this.setItemsToShow()}componentDidUpdate(prevProps,{containerWidth:containerWidth}){this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==containerWidth&&setTimeout(()=>{this.setItemsToShow(!0)},this.props.transitionDuration||defaultTransitionDuration)}resetAllItems(){this.setState({transform:0,currentSlide:0})}next(slidesHavePassed=0){this.isAnimationAllowed=!0;const{slidesToShow:slidesToShow}=this.state,{slidesToSlide:slidesToSlide,infinite:infinite}=this.props,nextMaximumSlides=this.state.currentSlide+1+slidesHavePassed+slidesToShow,nextSlides=this.state.currentSlide+slidesHavePassed+slidesToSlide,nextPosition=-this.state.itemWidth*nextSlides;nextMaximumSlides<=this.state.totalItems?this.setState({transform:nextPosition,currentSlide:nextSlides}):infinite&&this.resetAllItems()}previous(slidesHavePassed=0){this.isAnimationAllowed=!0;const{slidesToShow:slidesToShow}=this.state,{slidesToSlide:slidesToSlide,infinite:infinite}=this.props,nextMaximumSlides=this.state.currentSlide-slidesHavePassed-slidesToSlide,nextSlides=this.state.currentSlide-slidesHavePassed-slidesToSlide,nextPosition=-this.state.itemWidth*nextSlides;if(nextMaximumSlides>=0)this.setState({transform:nextPosition,currentSlide:nextSlides});else{const maxSlides=this.state.totalItems-slidesToShow,maxPosition=-this.state.itemWidth*maxSlides;infinite&&this.setState({transform:maxPosition,currentSlide:maxSlides})}}componentWillUnmount(){window.removeEventListener("resize",this.onResize)}resetMoveStatus(){this.onMove=!1,this.initialPosition=0,this.lastPosition=0,this.direction=""}handleMouseDown(e){this.props.disableDrag||(this.onMove=!0,this.initialPosition=e.pageX,this.lastPosition=e.pageX,this.isAnimationAllowed=!1)}handleMouseMove(e){if(!this.props.disableDrag&&this.onMove){if(this.initialPosition>e.pageX){const translateXLimit=Math.abs(-this.state.itemWidth*(this.state.totalItems-this.state.slidesToShow)),nextTranslate=this.state.transform-(this.lastPosition-e.pageX),isLastSlide=this.state.currentSlide===this.state.totalItems-this.state.slidesToShow;(Math.abs(nextTranslate)<=translateXLimit||isLastSlide&&this.props.infinite)&&this.setState({transform:nextTranslate})}if(e.pageX>this.initialPosition){const nextTranslate=this.state.transform+(e.pageX-this.lastPosition),isFirstSlide=0===this.state.currentSlide;(nextTranslate<=0||isFirstSlide&&this.props.infinite)&&this.setState({transform:nextTranslate})}this.lastPosition=e.pageX}}handleMouseUp(e){if(!this.props.disableDrag&&this.onMove){if(this.initialPosition>e.pageX){const hasTravel=Math.round((this.initialPosition-e.pageX)/this.state.itemWidth)||1;this.next(0===hasTravel||1===hasTravel?0:hasTravel-1)}if(e.pageX>this.initialPosition){const hasTravel=Math.round((e.pageX-this.initialPosition)/this.state.itemWidth);this.previous(0===hasTravel||1===hasTravel?0:hasTravel-1)}this.resetMoveStatus()}}handleTouchStart(e){this.props.disableSwipeOnMobile||(this.onMove=!0,this.initialPosition=e.touches[0].screenX,this.lastPosition=e.touches[0].screenX,this.isAnimationAllowed=!1)}handleTouchMove(e){if(!this.props.disableSwipeOnMobile&&this.onMove){if(this.initialPosition>e.touches[0].screenX){this.direction="right";const translateXLimit=Math.abs(-this.state.itemWidth*(this.state.totalItems-this.state.slidesToShow)),nextTranslate=this.state.transform-(this.lastPosition-e.touches[0].screenX),isLastSlide=this.state.currentSlide===this.state.totalItems-this.state.slidesToShow;(Math.abs(nextTranslate)<=translateXLimit||isLastSlide)&&this.setState({transform:nextTranslate})}if(e.touches[0].screenX>this.initialPosition){this.direction="left";const nextTranslate=this.state.transform+(e.touches[0].screenX-this.lastPosition),isFirstSlide=0===this.state.currentSlide;(nextTranslate<=0||isFirstSlide)&&this.setState({transform:nextTranslate})}this.lastPosition=e.touches[0].screenX}}handleTouchEnd(){if(!this.props.disableSwipeOnMobile&&(this.isAnimationAllowed=!0,this.onMove)){if("right"===this.direction){const hasTravel=Math.round((this.initialPosition-this.lastPosition)/this.state.itemWidth);this.next(1===hasTravel?0:hasTravel-1)}if("left"===this.direction){const hasTravel=Math.round((this.lastPosition-this.initialPosition)/this.state.itemWidth);this.previous(1===hasTravel?0:hasTravel-1)}this.resetMoveStatus()}}renderLeftArrow(){const{customLeftArrow:customLeftArrow}=this.props;return customLeftArrow?React.cloneElement(customLeftArrow,{onClick:()=>this.previous()}):React.createElement("i",{style:style_1.leftArrowStyle,onClick:()=>this.previous()})}renderRightArrow(){const{customRightArrow:customRightArrow}=this.props;return customRightArrow?React.cloneElement(customRightArrow,{onClick:()=>this.next()}):React.createElement("i",{style:style_1.rightArrowStyle,onClick:()=>this.next()})}render(){const{domLoaded:domLoaded,slidesToShow:slidesToShow,containerWidth:containerWidth,itemWidth:itemWidth}=this.state,{deviceType:deviceType,responsive:responsive,forSSR:forSSR,children:children,slidesToSlide:slidesToSlide,customLeftArrow:customLeftArrow,customRightArrow:customRightArrow,disableSwipeOnMobile:disableSwipeOnMobile,removeArrow:removeArrow,removeArrowOnDeviceType:removeArrowOnDeviceType,infinite:infinite,containerClassName:containerClassName,contentClassName:contentClassName,itemClassName:itemClassName,customTransition:customTransition}=this.props;let flexBisis;const domFullLoaded=domLoaded&&slidesToShow&&containerWidth&&itemWidth;forSSR&&deviceType&&!domFullLoaded&&(flexBisis=utils_1.guessWidthFromDeviceType(deviceType,responsive));const shouldRenderOnSSR=forSSR&&deviceType&&!domFullLoaded&&flexBisis,isLeftEndReach=!(this.state.currentSlide-slidesToSlide>=0),isRightEndReach=!(this.state.currentSlide+1+slidesToShow<=this.state.totalItems),shouldShowArrows=!(removeArrow||removeArrowOnDeviceType&&(deviceType&&removeArrowOnDeviceType.indexOf(deviceType)>-1||this.state.deviceType&&removeArrowOnDeviceType.indexOf(this.state.deviceType)>-1)),disableLeftArrow=!infinite&&isLeftEndReach,disableRightArrow=!infinite&&isRightEndReach;return React.createElement("div",{className:containerClassName,ref:this.containerRef,style:style_1.containerStyle},React.createElement("ul",{className:contentClassName,style:Object.assign({},style_1.contentStyle,{listStyle:"none",padding:0,margin:0,transition:this.isAnimationAllowed?customTransition||defaultTransition:"none",overflow:shouldRenderOnSSR?"hidden":"unset",transform:`translate3d(${this.state.transform}px,0,0)`}),onMouseMove:this.handleMouseMove,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseUp,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},React.Children.toArray(children).map((child,index)=>React.createElement("li",{key:index,style:{flex:shouldRenderOnSSR?`1 0 ${flexBisis}%`:"auto",width:domFullLoaded?`${itemWidth}px`:"auto"},className:itemClassName},child))),shouldShowArrows&&!disableLeftArrow&&this.renderLeftArrow(),shouldShowArrows&&!disableRightArrow&&this.renderRightArrow())}}Container.defaultProps={slidesToSlide:1,infinite:!1,containerClassName:"",contentClassName:"",itemClassName:""};exports.default=(_a=>{var{children:children}=_a,rest=__rest(_a,["children"]);return React.createElement(Container,Object.assign({},rest),children)})},1697:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.containerStyle={display:"flex",alignItems:"center",overflow:"hidden"};exports.contentStyle={display:"flex",flexDirection:"row",position:"relative",willChange:"transform"};const arrowStyle={zIndex:1,position:"absolute",border:"solid black",borderWidth:"0 3px 3px 0",display:"inline-block",padding:13,cursor:"pointer"};exports.arrowStyle=arrowStyle;const leftArrowStyle=Object.assign({},arrowStyle,{left:30,transform:"rotate(135deg)"});exports.leftArrowStyle=leftArrowStyle;const rightArrowStyle=Object.assign({},arrowStyle,{right:30,transform:"rotate(-45deg)"});exports.rightArrowStyle=rightArrowStyle},1698:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.guessWidthFromDeviceType=function(deviceType,responsive){let itemWidth;if(responsive[deviceType]){const{items:items}=responsive[deviceType];itemWidth=(100/items).toFixed(1)}return itemWidth}},262:function(module,exports,__webpack_require__){__webpack_require__(263),__webpack_require__(342),module.exports=__webpack_require__(343)},343:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(15),__webpack_require__(11),__webpack_require__(16);var _storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(87),req=__webpack_require__(440);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.configure)(function(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(179)(module))},440:function(module,exports,__webpack_require__){var map={"./index.stories.js":441};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=440},441:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(442),__webpack_require__(52);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),faker__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(46),faker__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_3__),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(61),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__),_storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(87),storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__(1490),__webpack_require__(1595),__webpack_require__(255)),storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_8__),_Card__WEBPACK_IMPORTED_MODULE_10__=(__webpack_require__(1600),__webpack_require__(62)),_src__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(63),_src__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_src__WEBPACK_IMPORTED_MODULE_11__);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.setAddon)(storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_8___default.a);var images=[faker__WEBPACK_IMPORTED_MODULE_3___default.a.image.imageUrl(),faker__WEBPACK_IMPORTED_MODULE_3___default.a.image.fashion(),faker__WEBPACK_IMPORTED_MODULE_3___default.a.image.people(),faker__WEBPACK_IMPORTED_MODULE_3___default.a.image.nature(),faker__WEBPACK_IMPORTED_MODULE_3___default.a.image.city()],fakerData=[,,,,,].fill(0).map(function(item,index){return{image:images[index],headline:faker__WEBPACK_IMPORTED_MODULE_3___default.a.lorem.sentence(),description:faker__WEBPACK_IMPORTED_MODULE_3___default.a.lorem.sentences(3,3)}}),responsive={desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},CustomLeftArrow=function(_ref){var _onClick=_ref.onClick;return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a,{onClick:function(){return _onClick()},className:"custom-left-arrow",variant:"contained",size:"medium",color:"primary"},"Prev")},CustomRightArrow=function(_ref2){var _onClick2=_ref2.onClick;return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a,{className:"custom-right-arrow",onClick:function(){return _onClick2()},variant:"contained",size:"medium",color:"primary"},"Next")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.storiesOf)("Carousel",module).addWithJSX("With infinite mode",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_11___default.a,{containerClassName:"container",infinite:!0,responsive:responsive},fakerData.map(function(card){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_10__.a,card)}))}).addWithJSX("Without infinite mode",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_11___default.a,{containerClassName:"container",responsive:responsive},fakerData.map(function(card){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_10__.a,card)}))}).addWithJSX("Custom arrow",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_11___default.a,{infinite:!0,containerClassName:"container",customLeftArrow:react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CustomLeftArrow,null),customRightArrow:react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CustomRightArrow,null),responsive:responsive},fakerData.map(function(card){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_10__.a,card)}))}).addWithJSX("No drag on desktop",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_11___default.a,{containerClassName:"container",disableDrag:!0,infinite:!0,customLeftArrow:react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CustomLeftArrow,null),customRightArrow:react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CustomRightArrow,null),responsive:responsive},fakerData.map(function(card){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_10__.a,card)}))}).addWithJSX("No swipe on mobile",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_11___default.a,{disableSwipeOnMobile:!0,containerClassName:"container",disableDrag:!0,infinite:!0,customLeftArrow:react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CustomLeftArrow,null),customRightArrow:react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CustomRightArrow,null),responsive:responsive},fakerData.map(function(card){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_10__.a,card)}))}).addWithJSX("Slide two at a time",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_11___default.a,{containerClassName:"container",slidesToSlide:2,responsive:responsive},fakerData.map(function(card){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_10__.a,card)}))})}.call(this,__webpack_require__(179)(module))},62:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(261),_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(256),_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__),_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(257),_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__),_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(260),_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__),_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(259),_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__),_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(258),_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(61),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(156),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);function MediaCard(props){var classes=props.classes,image=props.image,headline=props.headline,description=props.description;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a,{className:classes.card},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3___default.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default.a,{className:classes.media,image:image,title:headline}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a,{gutterBottom:!0,variant:"h5",component:"h2"},headline),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a,{component:"p"},description))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a,{size:"small",color:"primary"},"Share"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a,{size:"small",color:"primary"},"Learn More")))}__webpack_exports__.a=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)({card:{margin:"0 20px"},media:{height:140}})(MediaCard),MediaCard.__docgenInfo={description:"",methods:[],displayName:"MediaCard"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Card.js"]={name:"MediaCard",docgenInfo:MediaCard.__docgenInfo,path:"stories/Card.js"})},63:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const Carousel_1=__webpack_require__(1696);exports.default=Carousel_1.default}},[[262,1,2]]]);
//# sourceMappingURL=main.5b3f84c54758ec60649d.bundle.js.map