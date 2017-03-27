var content = document.getElementById("content");
var input = document.getElementById("input_text");
var userName = document.getElementById("userName");
var go = document.getElementById("go");
var bottom = document.getElementById("bottom");
var resule = document.getElementById("resule");
var Tmg = document.getElementById("Tmg");
var leave = document.getElementById("leave");


window.onload = function(){
	var arr = [{title:"结婚后想生男孩还是女孩，说出原因？",imgSrc:"./images/3.png"},
	{title:"背一位异性让场地n圈",imgSrc:"./images/4.jpg"},
	{title:"做一个大家都满意的鬼脸 ",imgSrc:"./images/5.jpg"},
	{title:"与一位异性十指相扣，对视10秒 ",imgSrc:"./images/6.jpg"},
	{title:"谈过几次恋爱？",imgSrc:"./images/7.jpg"},
	{title:"做过最丢脸的事情？",imgSrc:"./images/8.jpg"},
	{title:"你会为了爱情牺牲一切，包括生命吗？",imgSrc:"./images/9.jpg"},
	{title:"你对自己的梦中情的要求是什么？ ",imgSrc:"./images/10.jpg"},
	{title:"向一位异性表白3分钟 ",imgSrc:"./images/11.jpg"}
	];
	var length = arr.length;
	userName.style.left = "21%";
	go.style.left = "31%";
	var newImg;
	userName.onfocus = function(){
		this.value = "";
	}
	go.addEventListener("click",function(){

		var randomNum;
		if (userName.value==""||userName.value=="请输入您的名字"  ) {
			result.innerHTML = "你叫乜嘢名字啊";
			result.style.display = "block";


			leave.addEventListener("click",function(){
			userName.value="请输入您的名字";
			Tmg.style.display = "none";
			result.style.display = "none";
			userName.style.top = "210px";
			go.style.top = "350px";
			bottom.style.transform = "scale(0)";
			bottom.style.top = "100%";		
			content.style.backgroundColor = "rgba(255,255,255,0)";
	})
		}else{
			randomNum = parseInt(Math.random()*length);
			newImg = document.createElement("img");
			newImg.src = arr[randomNum].imgSrc;
			Tmg.appendChild(newImg);
			result.innerHTML = userName.value+":"+arr[randomNum].title;
			Tmg.style.display = "block";
			result.style.display = "block";
		};
		content.style.backgroundColor = "rgba(255,255,255,0.8)";
		bottom.style.transform = "scale(1)";
		bottom.style.top = "0%";
		userName.style.top = "-200px";
		go.style.top = "-200px";
	})
	leave.addEventListener("click",function(){
		Tmg.removeChild(newImg);
		userName.value="请输入您的名字";
		Tmg.style.display = "none";
		result.style.display = "none";
		userName.style.top = "210px";
		go.style.top = "350px";
		bottom.style.transform = "scale(0)";
		bottom.style.top = "100%";
		content.style.backgroundColor = "rgba(255,255,255,0)";
	})
}


