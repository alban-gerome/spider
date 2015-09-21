// Set the start URL
var page = require("webpage").create();
var url = "http://www.adobe.com";
var links;
//var url = "http://www.webtrends.com";

page.viewPortSize={
  width: 1280,
  height: 800
};
page.clipRect={
 top:0,
 left:0,
 width:1280,
 height:800
}
phantom.onError=function(){};
page.onError=function(){};
page.onLoadStarted=function(){};
page.onResourceReceived=function(responseData){};

page.onResourceRequested=function(requestData,networkRequest){
  if(requestData.url.match(/\/b\/ss\//)) console.log(requestData.url);//Adobe Analytics
  if(requestData.url.match(/dcs\.gif/)) console.log(requestData.url);//Webtrends
};
page.onLoadFinished=function(status){
  if(status=="success"){	
    var links = page.evaluate(function(){
	  var a=document.createElement("a");
	  return [].map.call(document.querySelectorAll("a[href]"), function(link){
		a.href=link.getAttribute("href");
		return a.href;
      });
    });
	console.log(links.join("\n"));
  }else{
    //log error
  };
  //check next page
};

page.open(url,function (status){
  if(status=="success"){	
  
  }else{
    //log error
  };
  phantom.exit();
});