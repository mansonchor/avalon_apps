/**
  *	 应用逻辑控制层
  *  
  *  原则：
  *  1.在本页控制每个页面显隐时候应该调用的模块接口
  *  2.在各自的页面模块进行交互、数据等操作，然后暴露接口方便调用
  *  
  */


define('m_poco_wo/web_wo_init',['preparations','less_use_page_package','wo_config','commom_function','user_list_view','user_list_controler','index','friend','my','last','theme_pic_list','user_profile','cmt_notice','cmt','like_notice','get_template','base_package','ua','footer_view','edit','recommend','publish','new_tips','notice','news',"user_list_collection","btn_package","setup","frame_package","slider","new_alert_v2","img_process","doorplate_list","doorplate_last","search_result","set_location","show_big_img","dating_list","popup","system_notice_view","world_list_module","category","user_photo","event","theme_join_user_list","select_module","choose_my_image","my_image_wall","message","notice_list","message_list","emoticon_module","get_friends_list","message_nav","weixin_callback","rank_pic_list","encounter_game",'dating_game',"recommend_me","about","rank_nav","pics_rank","charm_rank","wealth_rank","no_login","my_wallet","send_gift","red_package","hot_img","new_img","topic_txt_module","interact_module","my_world","publish_more_topic",'app_function',"world_daliy","theme_act","daily","same_city","gallery","carousel","category_select","my_life_element","register","font_page","category_list","select_wonderful_pics_type","edit_wonderful_pics","setup_common","micro_app","ios_btn","ios_btn_view"],function(require, exports){
    
	require('preparations')
})

if(typeof(process_add)=="function")
{
	process_add()
}