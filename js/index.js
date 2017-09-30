(function(){
	function loadArticle(name){
		$("article#main").empty();
		window.location.hash = name;
		$.ajax( {  
	        url : "article/article." + name + ".html",  
	        type : 'GET',  
	        jsonpCallback : "略",  
	        success : function(data){
					$("article#main").html(data);
				    $("title").text("XiaoLab - " + name);
				},
	        error : function(){  
		            $("article#main").html("Page not found");
		            $("title").text("XiaoLab - 404");
		            $("nav a").removeClass('selected');
		        }  
	    });  
	}
	loadArticle(window.location.hash.split("#")[1] || "");
	$("nav a").click(function(){
		$("nav a").removeClass('selected');
		this.classList.add('selected');
		loadArticle(this.getAttribute('href').split("#")[1]);
	});
	$("#chinese").click(function(){
        window.location.href = "index_CN.html#" + (window.location.hash.split("#")[1] || "")
	});
})()

