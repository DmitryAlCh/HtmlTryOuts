// all pictures must be at least 900px width (originally)

var infoPages={};
infoPages.pages=[];
infoPages.pages[0]={
	"header":"SCADA Supervisory Control And Data Acquistion",
	"image":"process.svg",	
	"text":"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"+
	"lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum",
	"footer":"SIA ZRA ELLAT, \n Rīga, 2016."
};
infoPages.pages[1]={
	"header":"SCADA Supervisory Control And Data Acquistion",
	"image":"page1.bmp",	
	"text":"BanaRama BanaRama BanaRama BanaRama BanaRama BanaRama",
	"footer":"SIA ZRA ELLAT."
}



var Layout=function(){
		this.myHeader=document.getElementById("myHeader");
		this.myMain=document.getElementById("mainInfo");
		this.myFooter=document.getElementById("myFooter");
		this.imgDiv=document.getElementById("myMainImage");
		this.imgItself=document.getElementById("imgItself");
		this.myMainText=document.getElementById("myMainText");
		
		
		this.myWidth=function(){
			return window.innerWidth;
		}
		this.myHeight=function(){
			return window.innerHeight;
		}
		this.myUnit=function(divide){
			return (((window.innerHeight)/divide).toString()+"px");
		}
		this.myHorUnit=function(divide){
			return (((window.innerWidth)/divide).toString()+"px");
		}
};
