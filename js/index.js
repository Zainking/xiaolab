(function(){
	function loadArticle(name){
		$("article#main").empty();
		window.location.hash = name;
		$.ajax( {  
	        url : "article/article." + name + ".html",  
	        type : 'GET',   
	        success : function(data){
					$("article#main").html(data);
				    $("title").text("XiaoLab - " + name);
				    $("nav a[href='#" + name + "']").addClass('selected');
				},
	        error : function(){  
		            $("article#main").html("<section><p style='text-align: center;'>Page not found</p></section>");
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
	$("#chinese").click(function(){
        window.location.href = "index_CN.html#" + (window.location.hash.split("#")[1] || "")
	});
})()

