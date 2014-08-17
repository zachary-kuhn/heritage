// Compiled by ClojureScript 0.0-2307
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
figwheel.client.log_style = "color:rgb(0,128,0);";
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__10915,args){var map__10917 = p__10915;var map__10917__$1 = ((cljs.core.seq_QMARK_.call(null,map__10917))?cljs.core.apply.call(null,cljs.core.hash_map,map__10917):map__10917);var debug = cljs.core.get.call(null,map__10917__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__10915,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__10915,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__10918){
var p__10915 = cljs.core.first(arglist__10918);
var args = cljs.core.rest(arglist__10918);
return log__delegate(p__10915,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__10919){var map__10921 = p__10919;var map__10921__$1 = ((cljs.core.seq_QMARK_.call(null,map__10921))?cljs.core.apply.call(null,cljs.core.hash_map,map__10921):map__10921);var websocket_url = cljs.core.get.call(null,map__10921__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__10922,callback){var map__10924 = p__10922;var map__10924__$1 = ((cljs.core.seq_QMARK_.call(null,map__10924))?cljs.core.apply.call(null,cljs.core.hash_map,map__10924):map__10924);var msg = map__10924__$1;var dependency_file = cljs.core.get.call(null,map__10924__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__10924__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__10924__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3553__auto__ = dependency_file;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__10924,map__10924__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__10924,map__10924__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__10925,p__10926){var map__10929 = p__10925;var map__10929__$1 = ((cljs.core.seq_QMARK_.call(null,map__10929))?cljs.core.apply.call(null,cljs.core.hash_map,map__10929):map__10929);var opts = map__10929__$1;var url_rewriter = cljs.core.get.call(null,map__10929__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__10930 = p__10926;var map__10930__$1 = ((cljs.core.seq_QMARK_.call(null,map__10930))?cljs.core.apply.call(null,cljs.core.hash_map,map__10930):map__10930);var d = map__10930__$1;var file = cljs.core.get.call(null,map__10930__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__10931,p__10932){var map__10974 = p__10931;var map__10974__$1 = ((cljs.core.seq_QMARK_.call(null,map__10974))?cljs.core.apply.call(null,cljs.core.hash_map,map__10974):map__10974);var opts = map__10974__$1;var on_jsload = cljs.core.get.call(null,map__10974__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__10974__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__10975 = p__10932;var map__10975__$1 = ((cljs.core.seq_QMARK_.call(null,map__10975))?cljs.core.apply.call(null,cljs.core.hash_map,map__10975):map__10975);var files = cljs.core.get.call(null,map__10975__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__6272__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6272__auto__,map__10974,map__10974__$1,opts,on_jsload,before_jsload,map__10975,map__10975__$1,files){
return (function (){var f__6273__auto__ = (function (){var switch__6207__auto__ = ((function (c__6272__auto__,map__10974,map__10974__$1,opts,on_jsload,before_jsload,map__10975,map__10975__$1,files){
return (function (state_10998){var state_val_10999 = (state_10998[(1)]);if((state_val_10999 === (6)))
{var inst_10980 = (state_10998[(7)]);var inst_10989 = (state_10998[(2)]);var inst_10990 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10991 = [inst_10980];var inst_10992 = (new cljs.core.PersistentVector(null,1,(5),inst_10990,inst_10991,null));var inst_10993 = cljs.core.apply.call(null,on_jsload,inst_10992);var state_10998__$1 = (function (){var statearr_11000 = state_10998;(statearr_11000[(8)] = inst_10989);
return statearr_11000;
})();var statearr_11001_11015 = state_10998__$1;(statearr_11001_11015[(2)] = inst_10993);
(statearr_11001_11015[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10999 === (5)))
{var inst_10996 = (state_10998[(2)]);var state_10998__$1 = state_10998;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10998__$1,inst_10996);
} else
{if((state_val_10999 === (4)))
{var state_10998__$1 = state_10998;var statearr_11002_11016 = state_10998__$1;(statearr_11002_11016[(2)] = null);
(statearr_11002_11016[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10999 === (3)))
{var inst_10980 = (state_10998[(7)]);var inst_10983 = console.log("%cFigwheel: loaded these files",figwheel.client.log_style);var inst_10984 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_10980);var inst_10985 = cljs.core.prn_str.call(null,inst_10984);var inst_10986 = console.log(inst_10985);var inst_10987 = cljs.core.async.timeout.call(null,(10));var state_10998__$1 = (function (){var statearr_11003 = state_10998;(statearr_11003[(9)] = inst_10986);
(statearr_11003[(10)] = inst_10983);
return statearr_11003;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10998__$1,(6),inst_10987);
} else
{if((state_val_10999 === (2)))
{var inst_10980 = (state_10998[(7)]);var inst_10980__$1 = (state_10998[(2)]);var inst_10981 = cljs.core.not_empty.call(null,inst_10980__$1);var state_10998__$1 = (function (){var statearr_11004 = state_10998;(statearr_11004[(7)] = inst_10980__$1);
return statearr_11004;
})();if(cljs.core.truth_(inst_10981))
{var statearr_11005_11017 = state_10998__$1;(statearr_11005_11017[(1)] = (3));
} else
{var statearr_11006_11018 = state_10998__$1;(statearr_11006_11018[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10999 === (1)))
{var inst_10976 = before_jsload.call(null,files);var inst_10977 = figwheel.client.add_request_urls.call(null,opts,files);var inst_10978 = figwheel.client.load_all_js_files.call(null,inst_10977);var state_10998__$1 = (function (){var statearr_11007 = state_10998;(statearr_11007[(11)] = inst_10976);
return statearr_11007;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10998__$1,(2),inst_10978);
} else
{return null;
}
}
}
}
}
}
});})(c__6272__auto__,map__10974,map__10974__$1,opts,on_jsload,before_jsload,map__10975,map__10975__$1,files))
;return ((function (switch__6207__auto__,c__6272__auto__,map__10974,map__10974__$1,opts,on_jsload,before_jsload,map__10975,map__10975__$1,files){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_11011 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11011[(0)] = state_machine__6208__auto__);
(statearr_11011[(1)] = (1));
return statearr_11011;
});
var state_machine__6208__auto____1 = (function (state_10998){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_10998);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e11012){if((e11012 instanceof Object))
{var ex__6211__auto__ = e11012;var statearr_11013_11019 = state_10998;(statearr_11013_11019[(5)] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10998);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11012;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11020 = state_10998;
state_10998 = G__11020;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_10998){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_10998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__,c__6272__auto__,map__10974,map__10974__$1,opts,on_jsload,before_jsload,map__10975,map__10975__$1,files))
})();var state__6274__auto__ = (function (){var statearr_11014 = f__6273__auto__.call(null);(statearr_11014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6272__auto__);
return statearr_11014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6274__auto__);
});})(c__6272__auto__,map__10974,map__10974__$1,opts,on_jsload,before_jsload,map__10975,map__10975__$1,files))
);
return c__6272__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__11021,link_href){var map__11023 = p__11021;var map__11023__$1 = ((cljs.core.seq_QMARK_.call(null,map__11023))?cljs.core.apply.call(null,cljs.core.hash_map,map__11023):map__11023);var request_url = cljs.core.get.call(null,map__11023__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__11023__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__6272__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6272__auto__,parent){
return (function (){var f__6273__auto__ = (function (){var switch__6207__auto__ = ((function (c__6272__auto__,parent){
return (function (state_11044){var state_val_11045 = (state_11044[(1)]);if((state_val_11045 === (2)))
{var inst_11041 = (state_11044[(2)]);var inst_11042 = parent.removeChild(orig_link);var state_11044__$1 = (function (){var statearr_11046 = state_11044;(statearr_11046[(7)] = inst_11041);
return statearr_11046;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11044__$1,inst_11042);
} else
{if((state_val_11045 === (1)))
{var inst_11039 = cljs.core.async.timeout.call(null,(200));var state_11044__$1 = state_11044;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11044__$1,(2),inst_11039);
} else
{return null;
}
}
});})(c__6272__auto__,parent))
;return ((function (switch__6207__auto__,c__6272__auto__,parent){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_11050 = [null,null,null,null,null,null,null,null];(statearr_11050[(0)] = state_machine__6208__auto__);
(statearr_11050[(1)] = (1));
return statearr_11050;
});
var state_machine__6208__auto____1 = (function (state_11044){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_11044);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e11051){if((e11051 instanceof Object))
{var ex__6211__auto__ = e11051;var statearr_11052_11054 = state_11044;(statearr_11052_11054[(5)] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11044);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11051;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11055 = state_11044;
state_11044 = G__11055;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_11044){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_11044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__,c__6272__auto__,parent))
})();var state__6274__auto__ = (function (){var statearr_11053 = f__6273__auto__.call(null);(statearr_11053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6272__auto__);
return statearr_11053;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6274__auto__);
});})(c__6272__auto__,parent))
);
return c__6272__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__11056){var map__11058 = p__11056;var map__11058__$1 = ((cljs.core.seq_QMARK_.call(null,map__11058))?cljs.core.apply.call(null,cljs.core.hash_map,map__11058):map__11058);var f_data = map__11058__$1;var request_url = cljs.core.get.call(null,map__11058__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__11058__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__11059,files_msg){var map__11081 = p__11059;var map__11081__$1 = ((cljs.core.seq_QMARK_.call(null,map__11081))?cljs.core.apply.call(null,cljs.core.hash_map,map__11081):map__11081);var opts = map__11081__$1;var on_cssload = cljs.core.get.call(null,map__11081__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__11082_11102 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__11083_11103 = null;var count__11084_11104 = (0);var i__11085_11105 = (0);while(true){
if((i__11085_11105 < count__11084_11104))
{var f_11106 = cljs.core._nth.call(null,chunk__11083_11103,i__11085_11105);figwheel.client.reload_css_file.call(null,f_11106);
{
var G__11107 = seq__11082_11102;
var G__11108 = chunk__11083_11103;
var G__11109 = count__11084_11104;
var G__11110 = (i__11085_11105 + (1));
seq__11082_11102 = G__11107;
chunk__11083_11103 = G__11108;
count__11084_11104 = G__11109;
i__11085_11105 = G__11110;
continue;
}
} else
{var temp__4126__auto___11111 = cljs.core.seq.call(null,seq__11082_11102);if(temp__4126__auto___11111)
{var seq__11082_11112__$1 = temp__4126__auto___11111;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11082_11112__$1))
{var c__4309__auto___11113 = cljs.core.chunk_first.call(null,seq__11082_11112__$1);{
var G__11114 = cljs.core.chunk_rest.call(null,seq__11082_11112__$1);
var G__11115 = c__4309__auto___11113;
var G__11116 = cljs.core.count.call(null,c__4309__auto___11113);
var G__11117 = (0);
seq__11082_11102 = G__11114;
chunk__11083_11103 = G__11115;
count__11084_11104 = G__11116;
i__11085_11105 = G__11117;
continue;
}
} else
{var f_11118 = cljs.core.first.call(null,seq__11082_11112__$1);figwheel.client.reload_css_file.call(null,f_11118);
{
var G__11119 = cljs.core.next.call(null,seq__11082_11112__$1);
var G__11120 = null;
var G__11121 = (0);
var G__11122 = (0);
seq__11082_11102 = G__11119;
chunk__11083_11103 = G__11120;
count__11084_11104 = G__11121;
i__11085_11105 = G__11122;
continue;
}
}
} else
{}
}
break;
}
var c__6272__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6272__auto__,map__11081,map__11081__$1,opts,on_cssload){
return (function (){var f__6273__auto__ = (function (){var switch__6207__auto__ = ((function (c__6272__auto__,map__11081,map__11081__$1,opts,on_cssload){
return (function (state_11092){var state_val_11093 = (state_11092[(1)]);if((state_val_11093 === (2)))
{var inst_11088 = (state_11092[(2)]);var inst_11089 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_11090 = on_cssload.call(null,inst_11089);var state_11092__$1 = (function (){var statearr_11094 = state_11092;(statearr_11094[(7)] = inst_11088);
return statearr_11094;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11092__$1,inst_11090);
} else
{if((state_val_11093 === (1)))
{var inst_11086 = cljs.core.async.timeout.call(null,(100));var state_11092__$1 = state_11092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11092__$1,(2),inst_11086);
} else
{return null;
}
}
});})(c__6272__auto__,map__11081,map__11081__$1,opts,on_cssload))
;return ((function (switch__6207__auto__,c__6272__auto__,map__11081,map__11081__$1,opts,on_cssload){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_11098 = [null,null,null,null,null,null,null,null];(statearr_11098[(0)] = state_machine__6208__auto__);
(statearr_11098[(1)] = (1));
return statearr_11098;
});
var state_machine__6208__auto____1 = (function (state_11092){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_11092);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e11099){if((e11099 instanceof Object))
{var ex__6211__auto__ = e11099;var statearr_11100_11123 = state_11092;(statearr_11100_11123[(5)] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11092);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11099;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11124 = state_11092;
state_11092 = G__11124;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_11092){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_11092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__,c__6272__auto__,map__11081,map__11081__$1,opts,on_cssload))
})();var state__6274__auto__ = (function (){var statearr_11101 = f__6273__auto__.call(null);(statearr_11101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6272__auto__);
return statearr_11101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6274__auto__);
});})(c__6272__auto__,map__11081,map__11081__$1,opts,on_cssload))
);
return c__6272__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__11125){var map__11130 = p__11125;var map__11130__$1 = ((cljs.core.seq_QMARK_.call(null,map__11130))?cljs.core.apply.call(null,cljs.core.hash_map,map__11130):map__11130);var opts = map__11130__$1;var on_compile_fail = cljs.core.get.call(null,map__11130__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__11130__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__11130__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__11130__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__11130,map__11130__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__11131 = cljs.core._EQ_;var expr__11132 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__11131.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__11132)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__11131.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__11132)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__11131.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__11132)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__11130,map__11130__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__11130,map__11130__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__11130,map__11130__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__11130,map__11130__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__11130,map__11130__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__11130,map__11130__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__11130,map__11130__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__11130,map__11130__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__11130,map__11130__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj11137 = {"detail":url};return obj11137;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__11138){var map__11140 = p__11138;var map__11140__$1 = ((cljs.core.seq_QMARK_.call(null,map__11140))?cljs.core.apply.call(null,cljs.core.hash_map,map__11140):map__11140);var class$ = cljs.core.get.call(null,map__11140__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__11140__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__11141){var map__11147 = p__11141;var map__11147__$1 = ((cljs.core.seq_QMARK_.call(null,map__11147))?cljs.core.apply.call(null,cljs.core.hash_map,map__11147):map__11147);var ed = map__11147__$1;var exception_data = cljs.core.get.call(null,map__11147__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__11147__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.log("%cFigwheel: Compile Exception",figwheel.client.log_style);
var seq__11148_11152 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__11149_11153 = null;var count__11150_11154 = (0);var i__11151_11155 = (0);while(true){
if((i__11151_11155 < count__11150_11154))
{var msg_11156 = cljs.core._nth.call(null,chunk__11149_11153,i__11151_11155);console.log(msg_11156);
{
var G__11157 = seq__11148_11152;
var G__11158 = chunk__11149_11153;
var G__11159 = count__11150_11154;
var G__11160 = (i__11151_11155 + (1));
seq__11148_11152 = G__11157;
chunk__11149_11153 = G__11158;
count__11150_11154 = G__11159;
i__11151_11155 = G__11160;
continue;
}
} else
{var temp__4126__auto___11161 = cljs.core.seq.call(null,seq__11148_11152);if(temp__4126__auto___11161)
{var seq__11148_11162__$1 = temp__4126__auto___11161;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11148_11162__$1))
{var c__4309__auto___11163 = cljs.core.chunk_first.call(null,seq__11148_11162__$1);{
var G__11164 = cljs.core.chunk_rest.call(null,seq__11148_11162__$1);
var G__11165 = c__4309__auto___11163;
var G__11166 = cljs.core.count.call(null,c__4309__auto___11163);
var G__11167 = (0);
seq__11148_11152 = G__11164;
chunk__11149_11153 = G__11165;
count__11150_11154 = G__11166;
i__11151_11155 = G__11167;
continue;
}
} else
{var msg_11168 = cljs.core.first.call(null,seq__11148_11162__$1);console.log(msg_11168);
{
var G__11169 = cljs.core.next.call(null,seq__11148_11162__$1);
var G__11170 = null;
var G__11171 = (0);
var G__11172 = (0);
seq__11148_11152 = G__11169;
chunk__11149_11153 = G__11170;
count__11150_11154 = G__11171;
i__11151_11155 = G__11172;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.log("%cFigwheel: loading files",figwheel.client.log_style);
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.log("%cFigwheel: loaded CSS files",figwheel.client.log_style);
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3553__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__11173){var map__11175 = p__11173;var map__11175__$1 = ((cljs.core.seq_QMARK_.call(null,map__11175))?cljs.core.apply.call(null,cljs.core.hash_map,map__11175):map__11175);var opts = map__11175__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__11173 = null;if (arguments.length > 0) {
  p__11173 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__11173);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__11176){
var p__11173 = cljs.core.seq(arglist__11176);
return watch_and_reload__delegate(p__11173);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map