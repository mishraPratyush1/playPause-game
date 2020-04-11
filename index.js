var playPause=anime({
	targets:'div.box',
	translateY : 
	[
	
		{value:200,duration:500},
		
		{value:0,duration:600}
		
	],
	rotate: 
	{
		value:'1turn',
		easing:'easeInOutSine',
		
	},
	borderRadius: ['0%', '50%','0%'],

	delay:function (el,i,l) 
	{
		return i*1000
	},
	autoplay:false,
	loop:true
});
 

function play() 
{
	playPause.play();
}
function pause() {
	playPause.pause();
}
