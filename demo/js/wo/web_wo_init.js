/**
  *	 应用逻辑控制层
  *  
  *  原则：
  *  1.在本页控制每个页面显隐时候应该调用的模块接口
  *  2.在各自的页面模块进行交互、数据等操作，然后暴露接口方便调用
  *  
  */


define('m_poco_wo/web_wo_init',["index","preparations"],function(require, exports){
    
	require('preparations')
})

if(typeof(process_add)=="function")
{
	process_add()
}