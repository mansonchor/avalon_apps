define("wo/preparations",function(require, exports)
{
	var $ = require('zepto')
	var Backbone = require('backbone')   
    var wo_config = require('wo_config') 
	var ua = require('ua')
	var cookies = require('cookies') 
	var app_function = require('app_function')
    
	//内部内容高度
	var page_container_obj = $('.page_container');
    
	
	//世界自主框架初始化 add by manson 2014.2.10
	app_function.init_world_app_bridge()
	

	var ori_window_height = window.innerHeight
	
	//针对IPHONE safari 隐藏地址栏优化  add by manson 2013.6.12
	fixed_safari_nav_height(false)
	if(ua.is_iphone_safari_no_fullscreen)
	{
		$(document.body).on("swipeup",function(){
		
			fixed_safari_nav_height(true,function()
			{
				page_control.window_change_page_triger()
			})
		})
	}
	

	//显影顶部导航 add by manson 2013.7.16
	if( app_function.is_poco_app() )
	{
		$(document.body).on("swipeup",function()
		{
			fixed_header_pos(false,true)
		})

		$(document.body).on("swipedown",function()
		{
			fixed_header_pos(true,true)
		})
	}
	
	
	var is_first_time_to_app = window.localStorage.getItem('is_first_time_to_app');
	
	
	
	var page_control = require('page_control')
	page_control.init(page_container_obj,{
		default_title : "世界·POCO",
		default_index_route : "index",
		//页面PV统计
		before_route : function()
		{
			//IOS safari高度调整处理
			fixed_safari_nav_height(true,false)
			
			//页面PV统计
			//common_function.page_pv_stat_action()

		},
		after_route : function()
		{
			//显示顶部导航 add by manson 2013.7.16
			fixed_header_pos(true)
		}
	})
	
	// 配置页面的key
	var page_controller_key_arr = 
    [   
		"index"
    ]
	
	//add_page方法改进  modify by manson 2014.4.9
	var page_controller_arr = []
	$(page_controller_key_arr).each(function(i , string)
	{
		page_controller_arr.push( require(string) )
	})
	
	page_control.add_page(page_controller_arr) 

		
	window.addEventListener('resize', function()
	{
		//ori_window_height = window.innerHeight
		if(ua.is_iphone_safari_no_fullscreen)
		{
			page_container_obj.height(window.innerHeight)
			window.scrollTo(0,0)
		}
		

		page_control.window_change_page_triger()

	}, false)
	
	
	hide_bg_buffer()
	page_control.route_start()
	
	function fixed_safari_nav_height(judge_ori_height,callback)
	{
		var safari_nav_height = 60
		var fixed_height = ori_window_height + safari_nav_height

		if(judge_ori_height==true &&  fixed_height==window.innerHeight)
		{
			return false
		}

		if(ua.is_iphone_safari_no_fullscreen)
		{
			page_container_obj.height(fixed_height)
			window.scrollTo(0,0)
			
			if(typeof(callback)=="function")
			{
				callback.call(this)
			}
		}
	}

	//显影顶部导航 add by manson 2013.7.16
	function fixed_header_pos(show , animate)
	{
		var animate = animate || false

		var url_hash = window.location.hash 
		url_hash = url_hash.replace("#","")
		
		var slash_pos = url_hash.indexOf('/')
		if(slash_pos>0) url_hash = url_hash.substr(0,slash_pos)
		

		if($.inArray(url_hash, wo_config.fixed_header_pos_page) != -1)
		{
			var current_page_view = page_control.return_current_page_view()

			if(current_page_view.$el)
			{
				var header_obj = current_page_view.$el.find('header')
			
				if(animate && !ua.isAndroid)
				{
					animate_time = 150
				}
				else
				{
					animate_time = 0
				}

				if(show==true)
				{
					header_obj.animate({'translate3d':'0px, 0px, 0px'},animate_time,'ease-in')
				}
				else
				{
					header_obj.animate({'translate3d':'0px, -47px, 0px'},animate_time,'ease-out')
				}
			}
		}
	}


	
	function hide_bg_buffer()
	{
		setTimeout(function(){
			$('.font_page').hide()
			$('.page_container').show()
		},200)
	}
	

})

if(typeof(process_add)=="function")
{
	process_add()
}