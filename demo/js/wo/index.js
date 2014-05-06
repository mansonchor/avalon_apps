/**
  *	 新版首页
  *	 @author Manson
  *  @version 2013.5.2
  *  @modify 2013.8.27
  */
define("wo/index", function(require, exports)
{
	var $ = require('zepto')
	var page_control = require('page_control')
	var wo_config = require('wo_config')

	var avalon = require('avalon_mobile')
	
	function new_page_entity()
	{
		var page_count = 20;
        var ajax_loading = false;
        var follow_btn;
        var _state;
        var list_index = 1;

		var options = {
			route : { "index": "index"  },
			transition_type : 'none'
		}

		options.initialize = function()
		{
			this.render()
		}

		var footer_view_obj
		options.render = function()
		{  
			var template_control = require('get_template')

			var footer_view = require('footer_view')
			footer_view_obj = new footer_view({ cur : "index" })
			
			var template_obj = template_control.template_obj()
			
			//var init_html = template_obj.index;
			
			var init_html = '<div  ms-controller="test" ><div style="height:300px;background:red" class="test"  ms-on-click="tap_function" ></div>    <div ms-on-tap="tap_function" >{{sss}}</div></div>'						 

			this.$el.append($(init_html))
			
			this.$_('.ui-btn-publish').hide()
		   
			//底部
			this.$_('.footer').append(footer_view_obj.$el)
		}
		
		
		options.events = {

		}
		
		
		options.window_change = function(page_view)
		{
			
		}


        options.page_hide = function()
        {
		   	   
        }
        
		
		//页面显示时
		options.page_before_show = function(page_view)
		{
			
		}

		options.page_before_hide = function()
		{
            
		}
		
		
		//页面初始化时
		options.page_init = function(page_view,state)
		{	
			var model = avalon.define("test", function(vm){
				vm.sss = "sssss"

				vm.tap_function = function()
				{
					alert('tap')
				}
			})

			//model.sss = "阿嘎洒搜噶搜噶搜噶施工"
        }

        
		return options
	}

	return new_page_entity
})

if(typeof(process_add)=="function")
{
	process_add()
}