var timeId, timeId2, audio = $('#bgmusic').get(0), images, loadNum = 0, musicIndex = 0;

images = [
	'./build/image/favicon.ico',
	'./build/image/bg.jpg',
	'./build/image/address.png',
	'./build/image/bg.png',
	'./build/image/html5game.png',
	'./build/image/huawen.png',
	'./build/image/info.png',
	'./build/image/introduce.png',
	'./build/image/js-pic.png',
	'./build/image/js-pic.png',
	'./build/image/js-title.png',
	'./build/image/left.png',
	'./build/image/logo.png',
	'./build/image/long.png',
	'./build/image/meihua.png',
	'./build/image/minyan.png',
	'./build/image/modian1.png',
	'./build/image/modian2.png',
	'./build/image/modian3.png',
	'./build/image/modian4.png',
	'./build/image/modian5.png',
	'./build/image/music.png',
	'./build/image/niao.png',
	'./build/image/people.png',
	'./build/image/qiang.png',
	'./build/image/right.png',
	'./build/image/shan.png',
	'./build/image/shan2.png',
	'./build/image/wx-title.png',
	'./build/image/yunduo1.png',
	'./build/image/yunduo2.png',
	'./build/image/yunduo3.png',
	'./build/image/yunduo4.png',
	'./build/image/zhiyin1.png',
	'./build/image/zhiyin2.png',
	'./build/image/zhuzi.png'
];

function download() {
	var dtd = $.Deferred();
	$.each(images, function(index, src){
		var $img = $('<img />');
		$img.on({
			load: function() {
				++loadNum;
				$('.percent .num').text(Math.floor(loadNum / images.length * 100));
				if (loadNum === images.length)
					dtd.resolve();
			},
			error: function() {
				//dtd.reject();
			}
		});
		$img.attr('src', src);
	});
	setTimeout(function() {
		dtd.resolve();
	}, 60000);
	return dtd.promise();
}

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

function switchImageStart() {
	$('.skill').eq(0).addClass('show').find('.skill-pic, .skill-title').addClass('bounceIn').siblings('.skill-desc').addClass('fadeIn');
	var length = $('.skill').length;
	$('.switch-btn').on('click', function() {
		var index = $('.skill.show').data('index');
		var nextIndex = (index + 1) % length;
		$('.skill').eq(index).removeClass('show');
		$('.skill').eq(nextIndex).addClass('show').find('.skill-pic, .skill-title').addClass('bounceIn').siblings('.skill-desc').addClass('fadeIn');
	});
}

function switchImageEnd() {
	$('.switch-btn').off('click');
	$('.skill').removeClass('show').find('.skill-pic, .skill-title').removeClass('bounceIn').siblings('.skill-desc').removeClass('fadeIn');
}

function removeAnimation1() {
	clearTimeout(timeId);
	yunduoHide();
	$('.introduce').removeClass('bounceInup');
	$('.people').removeClass('people2');
}

function removeAnimation2() {
	$('.long').removeClass('long2');
	$('.info').removeClass('info2');
	$('.minyan').removeClass('flipInY');
	modianEnd();
	switchImageEnd();
}

function removeAnimation3() {
	$('.niao').removeClass('niao2');
	$('.line').removeClass('lineshow');
	$('.title').removeClass('title2');
	$('.works .item:nth-of-type(1)').removeClass('rollIn1');
	$('.works .item:nth-of-type(2)').removeClass('rollIn2');
	$('.works .item:nth-of-type(3)').removeClass('rollIn3');
	$('.works .item:nth-of-type(4)').removeClass('rollIn4');
}

function removeAnimation4() {
	$('.zhiyin1').removeClass('zhiyin1-show');
	$('.zhiyin2').removeClass('zhiyin2-show');
	$('.address').removeClass('slideup');
}

function addAnimation1(){
	yunduoShow();
	$('.people').addClass('people2');
	$('.introduce').addClass('bounceInup');
	setTimeout(function() {
		shakeHead();
	}, 6000)
}

function addAnimation2(){
	$('.long').addClass('long2');
	$('.info').addClass('info2');
	$('.minyan').addClass('flipInY');
	modianStart();
	switchImageStart();
}

function addAnimation3(){
	$('.niao').addClass('niao2');
	$('.line').addClass('lineshow');
	$('.title').addClass('title2');
	$('.works .item:nth-of-type(1)').addClass('rollIn1');
	$('.works .item:nth-of-type(2)').addClass('rollIn2');
	$('.works .item:nth-of-type(3)').addClass('rollIn3');
	$('.works .item:nth-of-type(4)').addClass('rollIn4');
}

function addAnimation4(){
	$('.zhiyin1').addClass('zhiyin1-show');
	$('.zhiyin2').addClass('zhiyin2-show');
	$('.address').addClass('slideup');
}

function showResume() {
	$('header').show();
	$('.modian').on('animationend', function() {
		$(this).removeClass('modi');
	});
	$('#resume').show().fullpage({
	 	loopBottom: true,
	 	css3: true,//是否启用CSS3动画
	 	verticalCentered: false,//内容是否垂直居中
	 	resize: false,//字体是否随着窗口缩放而缩放
	 	scrollingSpeed: 1000,//滚动速度,
	 	afterLoad: function(anchorLink, index) {
	 		switch (index) {
	 			case 1:
	 				removeAnimation2();
	 				removeAnimation3();
	 				removeAnimation4();
	 				addAnimation1();
	 				break;
	 			case 2:
	 				removeAnimation1();
	 				removeAnimation3();
	 				removeAnimation4();
	 				addAnimation2();
	 				break;
	 			case 3:
	 				removeAnimation1();
	 				removeAnimation2();
	 				removeAnimation4();
	 				addAnimation3();
	 				break;
	 			case 4:
	 				removeAnimation1();
	 				removeAnimation2();
	 				removeAnimation3();
	 				addAnimation4();
	 				break;
	 			default:
	 				break;
	 		}
	 	},
	 	onLeave: function(index, nextIndex, direction) {
	 		$('.nav a').eq(nextIndex - 1).addClass('red').siblings().removeClass('red');
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
	 		if (nextIndex === 1) {
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
}

$('img').attr('draggable', false).on('dragstart', function(e){
	e.preventDefault(0);
});

$('body').on('contextmenu', function(e) {
	e.preventDefault();
});

$(window).on({
	'resize orientationchange': changeFontSize,
	'keydown': function(e) {
		e.preventDefault();
	}
});

$('.music').on('click', function() {
	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
	}
});

$(audio).on({
	playing: function() {
		$('.music').css({
			'animation-play-state': 'running'
		});
	},
	pause: function() {
		$('.music').css({
			'animation-play-state': 'paused'
		});
	},
	canplay: function() {
		$('.music').show();
	},
	ended: function() {
		musicIndex = (musicIndex + 1) % $('source').length;
		audio.src = $('source').eq(musicIndex).attr('src');
	}
});

$.when(download())
.done(function() {
	$('.load').
	animate({
		'left': '5%',
	}, 300, 'linear').
	animate({
		'left': '-100%',
		'opacity': 0
	}, 1000, function() {
		$(this).remove();
	});
	showResume();
})
.fail(function() {
	
});
