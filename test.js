$(function () {
	var index = 0 // 记录下标
	var interval // 自动播放定时器
	var lunboList = $('#lunbo_list')
	var LEFT_ADD_VAL = -576
	var STARTL_EFT=-288

	// 切换动画效果
	function manimate() {
		lunboList
			.stop()
			.animate(
				{
					left:
						LEFT_ADD_VAL +
						Number(
							lunboList
								.css('left')
								.replace('px', ''),
						),
				},
				500,
			)
	}

	// 自动轮播
	function autoplay() {
		interval = setInterval(() => {
			index++
			if (index > 3) {
				lunboList.css('left', STARTL_EFT + 'px')
				index = 1
			}
			manimate(index)
		}, 2000)
	}

	// 鼠标移入停止自动轮播
	$('#lunbo_wrap').mouseover(function () {
		clearInterval(interval)
	})
	//鼠标移出开始轮播
	$('#lunbo_wrap').mouseleave(function () {
		autoplay()
	})
	autoplay()
})
