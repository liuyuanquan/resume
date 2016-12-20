/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var timeId, timeId2;

	function changeFontSize() {
		$('html').css({
			'font-size': $('html').width() / 16 + 'px'
		});
	}
	changeFontSize();

	function shakeHead() {
		$('.people').toggleClass('people1');
		timeId = setTimeout(function() {
			shakeHead();
		}, 700);
	};

	function yunduoShow() {
		$('.yunduo1').addClass('yunduo1Move');
		$('.yunduo2').addClass('yunduo2Move');
		$('.yunduo3').addClass('yunduo3Move');
		$('.yunduo4').addClass('yunduo4Move');
	}

	function yunduoHide() {
		$('.yunduo1').removeClass('yunduo1Move');
		$('.yunduo2').removeClass('yunduo2Move');
		$('.yunduo3').removeClass('yunduo3Move');
		$('.yunduo4').removeClass('yunduo4Move');
	}

	function yunduoMove() {
		$('#section1').on('mousemove', function(e) {
			var La = -e.pageX *0.03;
		    var Lb = e.pageX * 0.03;
		    var Lc = -e.pageX * 0.1;
		    var Ld = e.pageX * 0.1;
		    $('.yunduo1').css({'transform': 'translate3d(' + La + 'px, 0px, 0px)'});
		    $('.yunduo2').css({'transform': 'translate3d(' + Lb + 'px, 0px, 0px)'});
		    $('.yunduo3').css({'transform': 'translate3d(' + Lc + 'px, 0px, 0px)'});
		    $('.yunduo4').css({'transform': 'translate3d(' + Ld + 'px, 0px, 0px)'});
		});
	}

	function yunduoStop() {
		$('#section1').off('mousemove');
		$('.yunduo').css({
			transform: 'translate3d(0, 0, 0)'
		});
	}

	function num() {
		return Math.floor(Math.random() * 5 + 1);
	}

	function modianStart () {
		var modian = $('.modian' + num());
		modian.addClass('modi');
		timeId2 = setTimeout(function() {
			modianStart();
		}, 10000);
	}

	function modianEnd () {
		clearTimeout(timeId2);
	}

	$(window).on('resize orientationchange', changeFontSize);

	$('.modian').on('animationend', function() {
		$(this).removeClass('modi');
	});

	$('#resume').fullpage({
	 	loopBottom: false,
	 	css3: true,//是否启用CSS3动画
	 	verticalCentered: false,//内容是否垂直居中
	 	resize: false,//字体是否随着窗口缩放而缩放
	 	scrollingSpeed: 1000,//滚动速度
	 	afterLoad: function(anchorLink, index) {
	 		switch (index) {
	 			case 1:
	 				//清除index2动画	
	 				$('.long').removeClass('long2');
	 				$('.info').removeClass('info2');
	 				$('.minyan').removeClass('flipInY');
	 				modianEnd();

	 				//添加index1动画
	 				shakeHead();
	 				yunduoShow();
	 				$('.introduce').addClass('bounceInup');
	 				break;
	 			case 2:
	 				//清除index1动画
	 				clearTimeout(timeId);
	 				yunduoHide();
	 				$('.introduce').removeClass('bounceInup');
	 				//清除index3动画
	 				$('.niao').removeClass('niao2');

	 				//添加index2动画
	 				$('.long').addClass('long2');
	 				$('.info').addClass('info2');
	 				$('.minyan').addClass('flipInY');
	 				modianStart();
	 				break;
	 			case 3:
	 				//清除index2动画
	 				$('.long').removeClass('long2');
	 				$('.info').removeClass('info2');
	 				$('.minyan').removeClass('flipInY');
	 				modianEnd();
	 				//清除index4动画
	 				
	 				//添加index3动画
	 				$('.niao').addClass('niao2');
	 				break;
	 			default:
	 				break;
	 		}
	 	},
	 	onLeave: function(index, nextIndex, direction) {
	 		$('.nav li').eq(nextIndex - 1).addClass('red').siblings().removeClass('red');
	 		if(index === 1) {
	 			$('.logo').css({
	 				left: '7%',
	 				top: '2%'
	 			});
	 			$('.nav').css({
	 				left: '77%',
	 				top: '2%'
	 			});
	 		} 
	 		if (index === 2 && nextIndex === 1) {
	 			$('.logo').css({
	 				left: '50%',
	 				top: '1%'
	 			});
	 			$('.nav').css({
	 				left: '50%',
	 				top: '10%'
	 			});
	 		}
	 	}
	});


/***/ }
/******/ ]);