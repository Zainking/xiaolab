(function(){
	function loadArticle(name){
		$("article#main").empty();
		window.location.hash = name;
		var dict = {
			"bio" : "个人简介",
			"research" : "研究工作",
			"teaching" : "课堂教学",
			"service" : "社会服务",
			"xiaolab" : "炼石补天",
		}
		$.ajax( {  
	        url : "article/article." + name + "_CN.html",  
	        type : 'GET',   
	        success : function(data){
					$("article#main").html(data);
				    $("title").text("XiaoLab - " + dict[name]);
				    $("nav a").removeClass('selected');
				    $("nav a[href='#" + name + "']").addClass('selected');
				},
	        error : function(){  
		            $("article#main").html("<section><p style='text-align: center;'>没有找到页面</p></section>");
		            $("title").text("XiaoLab - 404");
		            $("nav a").removeClass('selected');
		        }  
	    });  
	}
	loadArticle(window.location.hash.split("#")[1] || "bio");
	$("nav a").click(function(){
		$("nav a").removeClass('selected');
		this.classList.add('selected');
		loadArticle(this.getAttribute('href').split("#")[1]);
	});
	$("#english").click(function(){
        window.location.href = "index.html#" + (window.location.hash.split("#")[1] || "")
	});
})()

