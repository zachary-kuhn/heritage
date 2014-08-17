// Compiled by ClojureScript 0.0-2307
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11305 = (function (f,fn_handler,meta11306){
this.f = f;
this.fn_handler = fn_handler;
this.meta11306 = meta11306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11305.cljs$lang$type = true;
cljs.core.async.t11305.cljs$lang$ctorStr = "cljs.core.async/t11305";
cljs.core.async.t11305.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11305");
});
cljs.core.async.t11305.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11305.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11305.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11307){var self__ = this;
var _11307__$1 = this;return self__.meta11306;
});
cljs.core.async.t11305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11307,meta11306__$1){var self__ = this;
var _11307__$1 = this;return (new cljs.core.async.t11305(self__.f,self__.fn_handler,meta11306__$1));
});
cljs.core.async.__GT_t11305 = (function __GT_t11305(f__$1,fn_handler__$1,meta11306){return (new cljs.core.async.t11305(f__$1,fn_handler__$1,meta11306));
});
}
return (new cljs.core.async.t11305(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11309 = buff;if(G__11309)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__11309.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11309.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11309);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11309);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11310 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11310);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11310,ret){
return (function (){return fn1.call(null,val_11310);
});})(val_11310,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4409__auto___11311 = n;var x_11312 = (0);while(true){
if((x_11312 < n__4409__auto___11311))
{(a[x_11312] = (0));
{
var G__11313 = (x_11312 + (1));
x_11312 = G__11313;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11314 = (i + (1));
i = G__11314;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11318 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11318 = (function (flag,alt_flag,meta11319){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11319 = meta11319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11318.cljs$lang$type = true;
cljs.core.async.t11318.cljs$lang$ctorStr = "cljs.core.async/t11318";
cljs.core.async.t11318.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11318");
});})(flag))
;
cljs.core.async.t11318.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11318.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11318.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11318.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11320){var self__ = this;
var _11320__$1 = this;return self__.meta11319;
});})(flag))
;
cljs.core.async.t11318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11320,meta11319__$1){var self__ = this;
var _11320__$1 = this;return (new cljs.core.async.t11318(self__.flag,self__.alt_flag,meta11319__$1));
});})(flag))
;
cljs.core.async.__GT_t11318 = ((function (flag){
return (function __GT_t11318(flag__$1,alt_flag__$1,meta11319){return (new cljs.core.async.t11318(flag__$1,alt_flag__$1,meta11319));
});})(flag))
;
}
return (new cljs.core.async.t11318(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11324 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11324 = (function (cb,flag,alt_handler,meta11325){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11325 = meta11325;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11324.cljs$lang$type = true;
cljs.core.async.t11324.cljs$lang$ctorStr = "cljs.core.async/t11324";
cljs.core.async.t11324.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11324");
});
cljs.core.async.t11324.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11324.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11324.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11326){var self__ = this;
var _11326__$1 = this;return self__.meta11325;
});
cljs.core.async.t11324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11326,meta11325__$1){var self__ = this;
var _11326__$1 = this;return (new cljs.core.async.t11324(self__.cb,self__.flag,self__.alt_handler,meta11325__$1));
});
cljs.core.async.__GT_t11324 = (function __GT_t11324(cb__$1,flag__$1,alt_handler__$1,meta11325){return (new cljs.core.async.t11324(cb__$1,flag__$1,alt_handler__$1,meta11325));
});
}
return (new cljs.core.async.t11324(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11327_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11327_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11328_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11328_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3553__auto__ = wport;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11329 = (i + (1));
i = G__11329;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3553__auto__ = ret;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3541__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3541__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3541__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11330){var map__11332 = p__11330;var map__11332__$1 = ((cljs.core.seq_QMARK_.call(null,map__11332))?cljs.core.apply.call(null,cljs.core.hash_map,map__11332):map__11332);var opts = map__11332__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__11330 = null;if (arguments.length > 1) {
  p__11330 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11330);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11333){
var ports = cljs.core.first(arglist__11333);
var p__11330 = cljs.core.rest(arglist__11333);
return alts_BANG___delegate(ports,p__11330);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11341 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11341 = (function (ch,f,map_LT_,meta11342){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11342 = meta11342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11341.cljs$lang$type = true;
cljs.core.async.t11341.cljs$lang$ctorStr = "cljs.core.async/t11341";
cljs.core.async.t11341.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11341");
});
cljs.core.async.t11341.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11341.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11344 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11344 = (function (fn1,_,meta11342,ch,f,map_LT_,meta11345){
this.fn1 = fn1;
this._ = _;
this.meta11342 = meta11342;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11345 = meta11345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11344.cljs$lang$type = true;
cljs.core.async.t11344.cljs$lang$ctorStr = "cljs.core.async/t11344";
cljs.core.async.t11344.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11344");
});})(___$1))
;
cljs.core.async.t11344.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11344.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11334_SHARP_){return f1.call(null,(((p1__11334_SHARP_ == null))?null:self__.f.call(null,p1__11334_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11346){var self__ = this;
var _11346__$1 = this;return self__.meta11345;
});})(___$1))
;
cljs.core.async.t11344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11346,meta11345__$1){var self__ = this;
var _11346__$1 = this;return (new cljs.core.async.t11344(self__.fn1,self__._,self__.meta11342,self__.ch,self__.f,self__.map_LT_,meta11345__$1));
});})(___$1))
;
cljs.core.async.__GT_t11344 = ((function (___$1){
return (function __GT_t11344(fn1__$1,___$2,meta11342__$1,ch__$2,f__$2,map_LT___$2,meta11345){return (new cljs.core.async.t11344(fn1__$1,___$2,meta11342__$1,ch__$2,f__$2,map_LT___$2,meta11345));
});})(___$1))
;
}
return (new cljs.core.async.t11344(fn1,___$1,self__.meta11342,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3541__auto__ = ret;if(cljs.core.truth_(and__3541__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3541__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11341.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11341.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11343){var self__ = this;
var _11343__$1 = this;return self__.meta11342;
});
cljs.core.async.t11341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11343,meta11342__$1){var self__ = this;
var _11343__$1 = this;return (new cljs.core.async.t11341(self__.ch,self__.f,self__.map_LT_,meta11342__$1));
});
cljs.core.async.__GT_t11341 = (function __GT_t11341(ch__$1,f__$1,map_LT___$1,meta11342){return (new cljs.core.async.t11341(ch__$1,f__$1,map_LT___$1,meta11342));
});
}
return (new cljs.core.async.t11341(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11350 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11350 = (function (ch,f,map_GT_,meta11351){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11351 = meta11351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11350.cljs$lang$type = true;
cljs.core.async.t11350.cljs$lang$ctorStr = "cljs.core.async/t11350";
cljs.core.async.t11350.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11350");
});
cljs.core.async.t11350.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11350.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11350.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11352){var self__ = this;
var _11352__$1 = this;return self__.meta11351;
});
cljs.core.async.t11350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11352,meta11351__$1){var self__ = this;
var _11352__$1 = this;return (new cljs.core.async.t11350(self__.ch,self__.f,self__.map_GT_,meta11351__$1));
});
cljs.core.async.__GT_t11350 = (function __GT_t11350(ch__$1,f__$1,map_GT___$1,meta11351){return (new cljs.core.async.t11350(ch__$1,f__$1,map_GT___$1,meta11351));
});
}
return (new cljs.core.async.t11350(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11356 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11356 = (function (ch,p,filter_GT_,meta11357){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11357 = meta11357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11356.cljs$lang$type = true;
cljs.core.async.t11356.cljs$lang$ctorStr = "cljs.core.async/t11356";
cljs.core.async.t11356.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11356");
});
cljs.core.async.t11356.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11356.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11356.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11356.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11356.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11356.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11356.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11358){var self__ = this;
var _11358__$1 = this;return self__.meta11357;
});
cljs.core.async.t11356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11358,meta11357__$1){var self__ = this;
var _11358__$1 = this;return (new cljs.core.async.t11356(self__.ch,self__.p,self__.filter_GT_,meta11357__$1));
});
cljs.core.async.__GT_t11356 = (function __GT_t11356(ch__$1,p__$1,filter_GT___$1,meta11357){return (new cljs.core.async.t11356(ch__$1,p__$1,filter_GT___$1,meta11357));
});
}
return (new cljs.core.async.t11356(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6272__auto___11441 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6272__auto___11441,out){
return (function (){var f__6273__auto__ = (function (){var switch__6207__auto__ = ((function (c__6272__auto___11441,out){
return (function (state_11420){var state_val_11421 = (state_11420[(1)]);if((state_val_11421 === (7)))
{var inst_11416 = (state_11420[(2)]);var state_11420__$1 = state_11420;var statearr_11422_11442 = state_11420__$1;(statearr_11422_11442[(2)] = inst_11416);
(statearr_11422_11442[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11421 === (1)))
{var state_11420__$1 = state_11420;var statearr_11423_11443 = state_11420__$1;(statearr_11423_11443[(2)] = null);
(statearr_11423_11443[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11421 === (4)))
{var inst_11402 = (state_11420[(7)]);var inst_11402__$1 = (state_11420[(2)]);var inst_11403 = (inst_11402__$1 == null);var state_11420__$1 = (function (){var statearr_11424 = state_11420;(statearr_11424[(7)] = inst_11402__$1);
return statearr_11424;
})();if(cljs.core.truth_(inst_11403))
{var statearr_11425_11444 = state_11420__$1;(statearr_11425_11444[(1)] = (5));
} else
{var statearr_11426_11445 = state_11420__$1;(statearr_11426_11445[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11421 === (6)))
{var inst_11402 = (state_11420[(7)]);var inst_11407 = p.call(null,inst_11402);var state_11420__$1 = state_11420;if(cljs.core.truth_(inst_11407))
{var statearr_11427_11446 = state_11420__$1;(statearr_11427_11446[(1)] = (8));
} else
{var statearr_11428_11447 = state_11420__$1;(statearr_11428_11447[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11421 === (3)))
{var inst_11418 = (state_11420[(2)]);var state_11420__$1 = state_11420;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11420__$1,inst_11418);
} else
{if((state_val_11421 === (2)))
{var state_11420__$1 = state_11420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11420__$1,(4),ch);
} else
{if((state_val_11421 === (11)))
{var inst_11410 = (state_11420[(2)]);var state_11420__$1 = state_11420;var statearr_11429_11448 = state_11420__$1;(statearr_11429_11448[(2)] = inst_11410);
(statearr_11429_11448[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11421 === (9)))
{var state_11420__$1 = state_11420;var statearr_11430_11449 = state_11420__$1;(statearr_11430_11449[(2)] = null);
(statearr_11430_11449[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11421 === (5)))
{var inst_11405 = cljs.core.async.close_BANG_.call(null,out);var state_11420__$1 = state_11420;var statearr_11431_11450 = state_11420__$1;(statearr_11431_11450[(2)] = inst_11405);
(statearr_11431_11450[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11421 === (10)))
{var inst_11413 = (state_11420[(2)]);var state_11420__$1 = (function (){var statearr_11432 = state_11420;(statearr_11432[(8)] = inst_11413);
return statearr_11432;
})();var statearr_11433_11451 = state_11420__$1;(statearr_11433_11451[(2)] = null);
(statearr_11433_11451[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11421 === (8)))
{var inst_11402 = (state_11420[(7)]);var state_11420__$1 = state_11420;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11420__$1,(11),out,inst_11402);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6272__auto___11441,out))
;return ((function (switch__6207__auto__,c__6272__auto___11441,out){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_11437 = [null,null,null,null,null,null,null,null,null];(statearr_11437[(0)] = state_machine__6208__auto__);
(statearr_11437[(1)] = (1));
return statearr_11437;
});
var state_machine__6208__auto____1 = (function (state_11420){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_11420);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e11438){if((e11438 instanceof Object))
{var ex__6211__auto__ = e11438;var statearr_11439_11452 = state_11420;(statearr_11439_11452[(5)] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11420);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11438;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11453 = state_11420;
state_11420 = G__11453;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_11420){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_11420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__,c__6272__auto___11441,out))
})();var state__6274__auto__ = (function (){var statearr_11440 = f__6273__auto__.call(null);(statearr_11440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6272__auto___11441);
return statearr_11440;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6274__auto__);
});})(c__6272__auto___11441,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6272__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6272__auto__){
return (function (){var f__6273__auto__ = (function (){var switch__6207__auto__ = ((function (c__6272__auto__){
return (function (state_11619){var state_val_11620 = (state_11619[(1)]);if((state_val_11620 === (7)))
{var inst_11615 = (state_11619[(2)]);var state_11619__$1 = state_11619;var statearr_11621_11662 = state_11619__$1;(statearr_11621_11662[(2)] = inst_11615);
(statearr_11621_11662[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11620 === (20)))
{var inst_11585 = (state_11619[(7)]);var inst_11596 = (state_11619[(2)]);var inst_11597 = cljs.core.next.call(null,inst_11585);var inst_11571 = inst_11597;var inst_11572 = null;var inst_11573 = (0);var inst_11574 = (0);var state_11619__$1 = (function (){var statearr_11622 = state_11619;(statearr_11622[(8)] = inst_11572);
(statearr_11622[(9)] = inst_11571);
(statearr_11622[(10)] = inst_11574);
(statearr_11622[(11)] = inst_11573);
(statearr_11622[(12)] = inst_11596);
return statearr_11622;
})();var statearr_11623_11663 = state_11619__$1;(statearr_11623_11663[(2)] = null);
(statearr_11623_11663[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11620 === (1)))
{var state_11619__$1 = state_11619;var statearr_11624_11664 = state_11619__$1;(statearr_11624_11664[(2)] = null);
(statearr_11624_11664[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11620 === (4)))
{var inst_11560 = (state_11619[(13)]);var inst_11560__$1 = (state_11619[(2)]);var inst_11561 = (inst_11560__$1 == null);var state_11619__$1 = (function (){var statearr_11625 = state_11619;(statearr_11625[(13)] = inst_11560__$1);
return statearr_11625;
})();if(cljs.core.truth_(inst_11561))
{var statearr_11626_11665 = state_11619__$1;(statearr_11626_11665[(1)] = (5));
} else
{var statearr_11627_11666 = state_11619__$1;(statearr_11627_11666[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11620 === (15)))
{var state_11619__$1 = state_11619;var statearr_11631_11667 = state_11619__$1;(statearr_11631_11667[(2)] = null);
(statearr_11631_11667[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11620 === (21)))
{var state_11619__$1 = state_11619;var statearr_11632_11668 = state_11619__$1;(statearr_11632_11668[(2)] = null);
(statearr_11632_11668[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11620 === (13)))
{var inst_11572 = (state_11619[(8)]);var inst_11571 = (state_11619[(9)]);var inst_11574 = (state_11619[(10)]);var inst_11573 = (state_11619[(11)]);var inst_11581 = (state_11619[(2)]);var inst_11582 = (inst_11574 + (1));var tmp11628 = inst_11572;var tmp11629 = inst_11571;var tmp11630 = inst_11573;var inst_11571__$1 = tmp11629;var inst_11572__$1 = tmp11628;var inst_11573__$1 = tmp11630;var inst_11574__$1 = inst_11582;var state_11619__$1 = (function (){var statearr_11633 = state_11619;(statearr_11633[(8)] = inst_11572__$1);
(statearr_11633[(9)] = inst_11571__$1);
(statearr_11633[(14)] = inst_11581);
(statearr_11633[(10)] = inst_11574__$1);
(statearr_11633[(11)] = inst_11573__$1);
return statearr_11633;
})();var statearr_11634_11669 = state_11619__$1;(statearr_11634_11669[(2)] = null);
(statearr_11634_11669[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11620 === (22)))
{var state_11619__$1 = state_11619;var statearr_11635_11670 = state_11619__$1;(statearr_11635_11670[(2)] = null);
(statearr_11635_11670[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11620 === (6)))
{var inst_11560 = (state_11619[(13)]);var inst_11569 = f.call(null,inst_11560);var inst_11570 = cljs.core.seq.call(null,inst_11569);var inst_11571 = inst_11570;var inst_11572 = null;var inst_11573 = (0);var inst_11574 = (0);var state_11619__$1 = (function (){var statearr_11636 = state_11619;(statearr_11636[(8)] = inst_11572);
(statearr_11636[(9)] = inst_11571);
(statearr_11636[(10)] = inst_11574);
(statearr_11636[(11)] = inst_11573);
return statearr_11636;
})();var statearr_11637_11671 = state_11619__$1;(statearr_11637_11671[(2)] = null);
(statearr_11637_11671[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11620 === (17)))
{var inst_11585 = (state_11619[(7)]);var inst_11589 = cljs.core.chunk_first.call(null,inst_11585);var inst_11590 = cljs.core.chunk_rest.call(null,inst_11585);var inst_11591 = cljs.core.count.call(null,inst_11589);var inst_11571 = inst_11590;var inst_11572 = inst_11589;var inst_11573 = inst_11591;var inst_11574 = (0);var state_11619__$1 = (function (){var statearr_11638 = state_11619;(statearr_11638[(8)] = inst_11572);
(statearr_11638[(9)] = inst_11571);
(statearr_11638[(10)] = inst_11574);
(statearr_11638[(11)] = inst_11573);
return statearr_11638;
})();var statearr_11639_11672 = state_11619__$1;(statearr_11639_11672[(2)] = null);
(statearr_11639_11672[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11620 === (3)))
{var inst_11617 = (state_11619[(2)]);var state_11619__$1 = state_11619;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11619__$1,inst_11617);
} else
{if((state_val_11620 === (12)))
{var inst_11605 = (state_11619[(2)]);var state_11619__$1 = state_11619;var statearr_11640_11673 = state_11619__$1;(statearr_11640_11673[(2)] = inst_11605);
(statearr_11640_11673[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11620 === (2)))
{var state_11619__$1 = state_11619;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11619__$1,(4),in$);
} else
{if((state_val_11620 === (23)))
{var inst_11613 = (state_11619[(2)]);var state_11619__$1 = state_11619;var statearr_11641_11674 = state_11619__$1;(statearr_11641_11674[(2)] = inst_11613);
(statearr_11641_11674[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11620 === (19)))
{var inst_11600 = (state_11619[(2)]);var state_11619__$1 = state_11619;var statearr_11642_11675 = state_11619__$1;(statearr_11642_11675[(2)] = inst_11600);
(statearr_11642_11675[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11620 === (11)))
{var inst_11585 = (state_11619[(7)]);var inst_11571 = (state_11619[(9)]);var inst_11585__$1 = cljs.core.seq.call(null,inst_11571);var state_11619__$1 = (function (){var statearr_11643 = state_11619;(statearr_11643[(7)] = inst_11585__$1);
return statearr_11643;
})();if(inst_11585__$1)
{var statearr_11644_11676 = state_11619__$1;(statearr_11644_11676[(1)] = (14));
} else
{var statearr_11645_11677 = state_11619__$1;(statearr_11645_11677[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11620 === (9)))
{var inst_11607 = (state_11619[(2)]);var inst_11608 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11619__$1 = (function (){var statearr_11646 = state_11619;(statearr_11646[(15)] = inst_11607);
return statearr_11646;
})();if(cljs.core.truth_(inst_11608))
{var statearr_11647_11678 = state_11619__$1;(statearr_11647_11678[(1)] = (21));
} else
{var statearr_11648_11679 = state_11619__$1;(statearr_11648_11679[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11620 === (5)))
{var inst_11563 = cljs.core.async.close_BANG_.call(null,out);var state_11619__$1 = state_11619;var statearr_11649_11680 = state_11619__$1;(statearr_11649_11680[(2)] = inst_11563);
(statearr_11649_11680[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11620 === (14)))
{var inst_11585 = (state_11619[(7)]);var inst_11587 = cljs.core.chunked_seq_QMARK_.call(null,inst_11585);var state_11619__$1 = state_11619;if(inst_11587)
{var statearr_11650_11681 = state_11619__$1;(statearr_11650_11681[(1)] = (17));
} else
{var statearr_11651_11682 = state_11619__$1;(statearr_11651_11682[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11620 === (16)))
{var inst_11603 = (state_11619[(2)]);var state_11619__$1 = state_11619;var statearr_11652_11683 = state_11619__$1;(statearr_11652_11683[(2)] = inst_11603);
(statearr_11652_11683[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11620 === (10)))
{var inst_11572 = (state_11619[(8)]);var inst_11574 = (state_11619[(10)]);var inst_11579 = cljs.core._nth.call(null,inst_11572,inst_11574);var state_11619__$1 = state_11619;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11619__$1,(13),out,inst_11579);
} else
{if((state_val_11620 === (18)))
{var inst_11585 = (state_11619[(7)]);var inst_11594 = cljs.core.first.call(null,inst_11585);var state_11619__$1 = state_11619;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11619__$1,(20),out,inst_11594);
} else
{if((state_val_11620 === (8)))
{var inst_11574 = (state_11619[(10)]);var inst_11573 = (state_11619[(11)]);var inst_11576 = (inst_11574 < inst_11573);var inst_11577 = inst_11576;var state_11619__$1 = state_11619;if(cljs.core.truth_(inst_11577))
{var statearr_11653_11684 = state_11619__$1;(statearr_11653_11684[(1)] = (10));
} else
{var statearr_11654_11685 = state_11619__$1;(statearr_11654_11685[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6272__auto__))
;return ((function (switch__6207__auto__,c__6272__auto__){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_11658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11658[(0)] = state_machine__6208__auto__);
(statearr_11658[(1)] = (1));
return statearr_11658;
});
var state_machine__6208__auto____1 = (function (state_11619){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_11619);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e11659){if((e11659 instanceof Object))
{var ex__6211__auto__ = e11659;var statearr_11660_11686 = state_11619;(statearr_11660_11686[(5)] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11619);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11659;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11687 = state_11619;
state_11619 = G__11687;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_11619){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_11619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__,c__6272__auto__))
})();var state__6274__auto__ = (function (){var statearr_11661 = f__6273__auto__.call(null);(statearr_11661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6272__auto__);
return statearr_11661;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6274__auto__);
});})(c__6272__auto__))
);
return c__6272__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6272__auto___11782 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6272__auto___11782){
return (function (){var f__6273__auto__ = (function (){var switch__6207__auto__ = ((function (c__6272__auto___11782){
return (function (state_11758){var state_val_11759 = (state_11758[(1)]);if((state_val_11759 === (7)))
{var inst_11754 = (state_11758[(2)]);var state_11758__$1 = state_11758;var statearr_11760_11783 = state_11758__$1;(statearr_11760_11783[(2)] = inst_11754);
(statearr_11760_11783[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11759 === (1)))
{var state_11758__$1 = state_11758;var statearr_11761_11784 = state_11758__$1;(statearr_11761_11784[(2)] = null);
(statearr_11761_11784[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11759 === (4)))
{var inst_11737 = (state_11758[(7)]);var inst_11737__$1 = (state_11758[(2)]);var inst_11738 = (inst_11737__$1 == null);var state_11758__$1 = (function (){var statearr_11762 = state_11758;(statearr_11762[(7)] = inst_11737__$1);
return statearr_11762;
})();if(cljs.core.truth_(inst_11738))
{var statearr_11763_11785 = state_11758__$1;(statearr_11763_11785[(1)] = (5));
} else
{var statearr_11764_11786 = state_11758__$1;(statearr_11764_11786[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11759 === (13)))
{var state_11758__$1 = state_11758;var statearr_11765_11787 = state_11758__$1;(statearr_11765_11787[(2)] = null);
(statearr_11765_11787[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11759 === (6)))
{var inst_11737 = (state_11758[(7)]);var state_11758__$1 = state_11758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11758__$1,(11),to,inst_11737);
} else
{if((state_val_11759 === (3)))
{var inst_11756 = (state_11758[(2)]);var state_11758__$1 = state_11758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11758__$1,inst_11756);
} else
{if((state_val_11759 === (12)))
{var state_11758__$1 = state_11758;var statearr_11766_11788 = state_11758__$1;(statearr_11766_11788[(2)] = null);
(statearr_11766_11788[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11759 === (2)))
{var state_11758__$1 = state_11758;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11758__$1,(4),from);
} else
{if((state_val_11759 === (11)))
{var inst_11747 = (state_11758[(2)]);var state_11758__$1 = state_11758;if(cljs.core.truth_(inst_11747))
{var statearr_11767_11789 = state_11758__$1;(statearr_11767_11789[(1)] = (12));
} else
{var statearr_11768_11790 = state_11758__$1;(statearr_11768_11790[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11759 === (9)))
{var state_11758__$1 = state_11758;var statearr_11769_11791 = state_11758__$1;(statearr_11769_11791[(2)] = null);
(statearr_11769_11791[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11759 === (5)))
{var state_11758__$1 = state_11758;if(cljs.core.truth_(close_QMARK_))
{var statearr_11770_11792 = state_11758__$1;(statearr_11770_11792[(1)] = (8));
} else
{var statearr_11771_11793 = state_11758__$1;(statearr_11771_11793[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11759 === (14)))
{var inst_11752 = (state_11758[(2)]);var state_11758__$1 = state_11758;var statearr_11772_11794 = state_11758__$1;(statearr_11772_11794[(2)] = inst_11752);
(statearr_11772_11794[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11759 === (10)))
{var inst_11744 = (state_11758[(2)]);var state_11758__$1 = state_11758;var statearr_11773_11795 = state_11758__$1;(statearr_11773_11795[(2)] = inst_11744);
(statearr_11773_11795[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11759 === (8)))
{var inst_11741 = cljs.core.async.close_BANG_.call(null,to);var state_11758__$1 = state_11758;var statearr_11774_11796 = state_11758__$1;(statearr_11774_11796[(2)] = inst_11741);
(statearr_11774_11796[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6272__auto___11782))
;return ((function (switch__6207__auto__,c__6272__auto___11782){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_11778 = [null,null,null,null,null,null,null,null];(statearr_11778[(0)] = state_machine__6208__auto__);
(statearr_11778[(1)] = (1));
return statearr_11778;
});
var state_machine__6208__auto____1 = (function (state_11758){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_11758);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e11779){if((e11779 instanceof Object))
{var ex__6211__auto__ = e11779;var statearr_11780_11797 = state_11758;(statearr_11780_11797[(5)] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11758);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11779;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11798 = state_11758;
state_11758 = G__11798;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_11758){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_11758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__,c__6272__auto___11782))
})();var state__6274__auto__ = (function (){var statearr_11781 = f__6273__auto__.call(null);(statearr_11781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6272__auto___11782);
return statearr_11781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6274__auto__);
});})(c__6272__auto___11782))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6272__auto___11899 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6272__auto___11899,tc,fc){
return (function (){var f__6273__auto__ = (function (){var switch__6207__auto__ = ((function (c__6272__auto___11899,tc,fc){
return (function (state_11874){var state_val_11875 = (state_11874[(1)]);if((state_val_11875 === (7)))
{var inst_11870 = (state_11874[(2)]);var state_11874__$1 = state_11874;var statearr_11876_11900 = state_11874__$1;(statearr_11876_11900[(2)] = inst_11870);
(statearr_11876_11900[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11875 === (1)))
{var state_11874__$1 = state_11874;var statearr_11877_11901 = state_11874__$1;(statearr_11877_11901[(2)] = null);
(statearr_11877_11901[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11875 === (4)))
{var inst_11851 = (state_11874[(7)]);var inst_11851__$1 = (state_11874[(2)]);var inst_11852 = (inst_11851__$1 == null);var state_11874__$1 = (function (){var statearr_11878 = state_11874;(statearr_11878[(7)] = inst_11851__$1);
return statearr_11878;
})();if(cljs.core.truth_(inst_11852))
{var statearr_11879_11902 = state_11874__$1;(statearr_11879_11902[(1)] = (5));
} else
{var statearr_11880_11903 = state_11874__$1;(statearr_11880_11903[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11875 === (13)))
{var state_11874__$1 = state_11874;var statearr_11881_11904 = state_11874__$1;(statearr_11881_11904[(2)] = null);
(statearr_11881_11904[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11875 === (6)))
{var inst_11851 = (state_11874[(7)]);var inst_11857 = p.call(null,inst_11851);var state_11874__$1 = state_11874;if(cljs.core.truth_(inst_11857))
{var statearr_11882_11905 = state_11874__$1;(statearr_11882_11905[(1)] = (9));
} else
{var statearr_11883_11906 = state_11874__$1;(statearr_11883_11906[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11875 === (3)))
{var inst_11872 = (state_11874[(2)]);var state_11874__$1 = state_11874;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11874__$1,inst_11872);
} else
{if((state_val_11875 === (12)))
{var state_11874__$1 = state_11874;var statearr_11884_11907 = state_11874__$1;(statearr_11884_11907[(2)] = null);
(statearr_11884_11907[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11875 === (2)))
{var state_11874__$1 = state_11874;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11874__$1,(4),ch);
} else
{if((state_val_11875 === (11)))
{var inst_11851 = (state_11874[(7)]);var inst_11861 = (state_11874[(2)]);var state_11874__$1 = state_11874;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11874__$1,(8),inst_11861,inst_11851);
} else
{if((state_val_11875 === (9)))
{var state_11874__$1 = state_11874;var statearr_11885_11908 = state_11874__$1;(statearr_11885_11908[(2)] = tc);
(statearr_11885_11908[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11875 === (5)))
{var inst_11854 = cljs.core.async.close_BANG_.call(null,tc);var inst_11855 = cljs.core.async.close_BANG_.call(null,fc);var state_11874__$1 = (function (){var statearr_11886 = state_11874;(statearr_11886[(8)] = inst_11854);
return statearr_11886;
})();var statearr_11887_11909 = state_11874__$1;(statearr_11887_11909[(2)] = inst_11855);
(statearr_11887_11909[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11875 === (14)))
{var inst_11868 = (state_11874[(2)]);var state_11874__$1 = state_11874;var statearr_11888_11910 = state_11874__$1;(statearr_11888_11910[(2)] = inst_11868);
(statearr_11888_11910[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11875 === (10)))
{var state_11874__$1 = state_11874;var statearr_11889_11911 = state_11874__$1;(statearr_11889_11911[(2)] = fc);
(statearr_11889_11911[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11875 === (8)))
{var inst_11863 = (state_11874[(2)]);var state_11874__$1 = state_11874;if(cljs.core.truth_(inst_11863))
{var statearr_11890_11912 = state_11874__$1;(statearr_11890_11912[(1)] = (12));
} else
{var statearr_11891_11913 = state_11874__$1;(statearr_11891_11913[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6272__auto___11899,tc,fc))
;return ((function (switch__6207__auto__,c__6272__auto___11899,tc,fc){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_11895 = [null,null,null,null,null,null,null,null,null];(statearr_11895[(0)] = state_machine__6208__auto__);
(statearr_11895[(1)] = (1));
return statearr_11895;
});
var state_machine__6208__auto____1 = (function (state_11874){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_11874);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e11896){if((e11896 instanceof Object))
{var ex__6211__auto__ = e11896;var statearr_11897_11914 = state_11874;(statearr_11897_11914[(5)] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11874);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11896;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11915 = state_11874;
state_11874 = G__11915;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_11874){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_11874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__,c__6272__auto___11899,tc,fc))
})();var state__6274__auto__ = (function (){var statearr_11898 = f__6273__auto__.call(null);(statearr_11898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6272__auto___11899);
return statearr_11898;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6274__auto__);
});})(c__6272__auto___11899,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6272__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6272__auto__){
return (function (){var f__6273__auto__ = (function (){var switch__6207__auto__ = ((function (c__6272__auto__){
return (function (state_11962){var state_val_11963 = (state_11962[(1)]);if((state_val_11963 === (7)))
{var inst_11958 = (state_11962[(2)]);var state_11962__$1 = state_11962;var statearr_11964_11980 = state_11962__$1;(statearr_11964_11980[(2)] = inst_11958);
(statearr_11964_11980[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (6)))
{var inst_11951 = (state_11962[(7)]);var inst_11948 = (state_11962[(8)]);var inst_11955 = f.call(null,inst_11948,inst_11951);var inst_11948__$1 = inst_11955;var state_11962__$1 = (function (){var statearr_11965 = state_11962;(statearr_11965[(8)] = inst_11948__$1);
return statearr_11965;
})();var statearr_11966_11981 = state_11962__$1;(statearr_11966_11981[(2)] = null);
(statearr_11966_11981[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (5)))
{var inst_11948 = (state_11962[(8)]);var state_11962__$1 = state_11962;var statearr_11967_11982 = state_11962__$1;(statearr_11967_11982[(2)] = inst_11948);
(statearr_11967_11982[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (4)))
{var inst_11951 = (state_11962[(7)]);var inst_11951__$1 = (state_11962[(2)]);var inst_11952 = (inst_11951__$1 == null);var state_11962__$1 = (function (){var statearr_11968 = state_11962;(statearr_11968[(7)] = inst_11951__$1);
return statearr_11968;
})();if(cljs.core.truth_(inst_11952))
{var statearr_11969_11983 = state_11962__$1;(statearr_11969_11983[(1)] = (5));
} else
{var statearr_11970_11984 = state_11962__$1;(statearr_11970_11984[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (3)))
{var inst_11960 = (state_11962[(2)]);var state_11962__$1 = state_11962;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11962__$1,inst_11960);
} else
{if((state_val_11963 === (2)))
{var state_11962__$1 = state_11962;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11962__$1,(4),ch);
} else
{if((state_val_11963 === (1)))
{var inst_11948 = init;var state_11962__$1 = (function (){var statearr_11971 = state_11962;(statearr_11971[(8)] = inst_11948);
return statearr_11971;
})();var statearr_11972_11985 = state_11962__$1;(statearr_11972_11985[(2)] = null);
(statearr_11972_11985[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6272__auto__))
;return ((function (switch__6207__auto__,c__6272__auto__){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_11976 = [null,null,null,null,null,null,null,null,null];(statearr_11976[(0)] = state_machine__6208__auto__);
(statearr_11976[(1)] = (1));
return statearr_11976;
});
var state_machine__6208__auto____1 = (function (state_11962){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_11962);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e11977){if((e11977 instanceof Object))
{var ex__6211__auto__ = e11977;var statearr_11978_11986 = state_11962;(statearr_11978_11986[(5)] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11962);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11977;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11987 = state_11962;
state_11962 = G__11987;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_11962){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_11962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__,c__6272__auto__))
})();var state__6274__auto__ = (function (){var statearr_11979 = f__6273__auto__.call(null);(statearr_11979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6272__auto__);
return statearr_11979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6274__auto__);
});})(c__6272__auto__))
);
return c__6272__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6272__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6272__auto__){
return (function (){var f__6273__auto__ = (function (){var switch__6207__auto__ = ((function (c__6272__auto__){
return (function (state_12061){var state_val_12062 = (state_12061[(1)]);if((state_val_12062 === (7)))
{var inst_12043 = (state_12061[(2)]);var state_12061__$1 = state_12061;var statearr_12063_12086 = state_12061__$1;(statearr_12063_12086[(2)] = inst_12043);
(statearr_12063_12086[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12062 === (1)))
{var inst_12037 = cljs.core.seq.call(null,coll);var inst_12038 = inst_12037;var state_12061__$1 = (function (){var statearr_12064 = state_12061;(statearr_12064[(7)] = inst_12038);
return statearr_12064;
})();var statearr_12065_12087 = state_12061__$1;(statearr_12065_12087[(2)] = null);
(statearr_12065_12087[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12062 === (4)))
{var inst_12038 = (state_12061[(7)]);var inst_12041 = cljs.core.first.call(null,inst_12038);var state_12061__$1 = state_12061;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12061__$1,(7),ch,inst_12041);
} else
{if((state_val_12062 === (13)))
{var inst_12055 = (state_12061[(2)]);var state_12061__$1 = state_12061;var statearr_12066_12088 = state_12061__$1;(statearr_12066_12088[(2)] = inst_12055);
(statearr_12066_12088[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12062 === (6)))
{var inst_12046 = (state_12061[(2)]);var state_12061__$1 = state_12061;if(cljs.core.truth_(inst_12046))
{var statearr_12067_12089 = state_12061__$1;(statearr_12067_12089[(1)] = (8));
} else
{var statearr_12068_12090 = state_12061__$1;(statearr_12068_12090[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12062 === (3)))
{var inst_12059 = (state_12061[(2)]);var state_12061__$1 = state_12061;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12061__$1,inst_12059);
} else
{if((state_val_12062 === (12)))
{var state_12061__$1 = state_12061;var statearr_12069_12091 = state_12061__$1;(statearr_12069_12091[(2)] = null);
(statearr_12069_12091[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12062 === (2)))
{var inst_12038 = (state_12061[(7)]);var state_12061__$1 = state_12061;if(cljs.core.truth_(inst_12038))
{var statearr_12070_12092 = state_12061__$1;(statearr_12070_12092[(1)] = (4));
} else
{var statearr_12071_12093 = state_12061__$1;(statearr_12071_12093[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12062 === (11)))
{var inst_12052 = cljs.core.async.close_BANG_.call(null,ch);var state_12061__$1 = state_12061;var statearr_12072_12094 = state_12061__$1;(statearr_12072_12094[(2)] = inst_12052);
(statearr_12072_12094[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12062 === (9)))
{var state_12061__$1 = state_12061;if(cljs.core.truth_(close_QMARK_))
{var statearr_12073_12095 = state_12061__$1;(statearr_12073_12095[(1)] = (11));
} else
{var statearr_12074_12096 = state_12061__$1;(statearr_12074_12096[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12062 === (5)))
{var inst_12038 = (state_12061[(7)]);var state_12061__$1 = state_12061;var statearr_12075_12097 = state_12061__$1;(statearr_12075_12097[(2)] = inst_12038);
(statearr_12075_12097[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12062 === (10)))
{var inst_12057 = (state_12061[(2)]);var state_12061__$1 = state_12061;var statearr_12076_12098 = state_12061__$1;(statearr_12076_12098[(2)] = inst_12057);
(statearr_12076_12098[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12062 === (8)))
{var inst_12038 = (state_12061[(7)]);var inst_12048 = cljs.core.next.call(null,inst_12038);var inst_12038__$1 = inst_12048;var state_12061__$1 = (function (){var statearr_12077 = state_12061;(statearr_12077[(7)] = inst_12038__$1);
return statearr_12077;
})();var statearr_12078_12099 = state_12061__$1;(statearr_12078_12099[(2)] = null);
(statearr_12078_12099[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6272__auto__))
;return ((function (switch__6207__auto__,c__6272__auto__){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_12082 = [null,null,null,null,null,null,null,null];(statearr_12082[(0)] = state_machine__6208__auto__);
(statearr_12082[(1)] = (1));
return statearr_12082;
});
var state_machine__6208__auto____1 = (function (state_12061){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_12061);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e12083){if((e12083 instanceof Object))
{var ex__6211__auto__ = e12083;var statearr_12084_12100 = state_12061;(statearr_12084_12100[(5)] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12061);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12083;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12101 = state_12061;
state_12061 = G__12101;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_12061){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_12061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__,c__6272__auto__))
})();var state__6274__auto__ = (function (){var statearr_12085 = f__6273__auto__.call(null);(statearr_12085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6272__auto__);
return statearr_12085;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6274__auto__);
});})(c__6272__auto__))
);
return c__6272__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12103 = {};return obj12103;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3541__auto__ = _;if(and__3541__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4180__auto__ = (((_ == null))?null:_);return (function (){var or__3553__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12105 = {};return obj12105;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12327 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12327 = (function (cs,ch,mult,meta12328){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12328 = meta12328;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12327.cljs$lang$type = true;
cljs.core.async.t12327.cljs$lang$ctorStr = "cljs.core.async/t12327";
cljs.core.async.t12327.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t12327");
});})(cs))
;
cljs.core.async.t12327.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12327.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12327.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12327.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12327.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12327.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12327.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12329){var self__ = this;
var _12329__$1 = this;return self__.meta12328;
});})(cs))
;
cljs.core.async.t12327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12329,meta12328__$1){var self__ = this;
var _12329__$1 = this;return (new cljs.core.async.t12327(self__.cs,self__.ch,self__.mult,meta12328__$1));
});})(cs))
;
cljs.core.async.__GT_t12327 = ((function (cs){
return (function __GT_t12327(cs__$1,ch__$1,mult__$1,meta12328){return (new cljs.core.async.t12327(cs__$1,ch__$1,mult__$1,meta12328));
});})(cs))
;
}
return (new cljs.core.async.t12327(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6272__auto___12548 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6272__auto___12548,cs,m,dchan,dctr,done){
return (function (){var f__6273__auto__ = (function (){var switch__6207__auto__ = ((function (c__6272__auto___12548,cs,m,dchan,dctr,done){
return (function (state_12460){var state_val_12461 = (state_12460[(1)]);if((state_val_12461 === (7)))
{var inst_12456 = (state_12460[(2)]);var state_12460__$1 = state_12460;var statearr_12462_12549 = state_12460__$1;(statearr_12462_12549[(2)] = inst_12456);
(statearr_12462_12549[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (20)))
{var inst_12361 = (state_12460[(7)]);var inst_12371 = cljs.core.first.call(null,inst_12361);var inst_12372 = cljs.core.nth.call(null,inst_12371,(0),null);var inst_12373 = cljs.core.nth.call(null,inst_12371,(1),null);var state_12460__$1 = (function (){var statearr_12463 = state_12460;(statearr_12463[(8)] = inst_12372);
return statearr_12463;
})();if(cljs.core.truth_(inst_12373))
{var statearr_12464_12550 = state_12460__$1;(statearr_12464_12550[(1)] = (22));
} else
{var statearr_12465_12551 = state_12460__$1;(statearr_12465_12551[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (27)))
{var inst_12401 = (state_12460[(9)]);var inst_12332 = (state_12460[(10)]);var inst_12403 = (state_12460[(11)]);var inst_12408 = (state_12460[(12)]);var inst_12408__$1 = cljs.core._nth.call(null,inst_12401,inst_12403);var inst_12409 = cljs.core.async.put_BANG_.call(null,inst_12408__$1,inst_12332,done);var state_12460__$1 = (function (){var statearr_12466 = state_12460;(statearr_12466[(12)] = inst_12408__$1);
return statearr_12466;
})();if(cljs.core.truth_(inst_12409))
{var statearr_12467_12552 = state_12460__$1;(statearr_12467_12552[(1)] = (30));
} else
{var statearr_12468_12553 = state_12460__$1;(statearr_12468_12553[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (1)))
{var state_12460__$1 = state_12460;var statearr_12469_12554 = state_12460__$1;(statearr_12469_12554[(2)] = null);
(statearr_12469_12554[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (24)))
{var inst_12361 = (state_12460[(7)]);var inst_12378 = (state_12460[(2)]);var inst_12379 = cljs.core.next.call(null,inst_12361);var inst_12341 = inst_12379;var inst_12342 = null;var inst_12343 = (0);var inst_12344 = (0);var state_12460__$1 = (function (){var statearr_12470 = state_12460;(statearr_12470[(13)] = inst_12343);
(statearr_12470[(14)] = inst_12342);
(statearr_12470[(15)] = inst_12344);
(statearr_12470[(16)] = inst_12378);
(statearr_12470[(17)] = inst_12341);
return statearr_12470;
})();var statearr_12471_12555 = state_12460__$1;(statearr_12471_12555[(2)] = null);
(statearr_12471_12555[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (39)))
{var state_12460__$1 = state_12460;var statearr_12475_12556 = state_12460__$1;(statearr_12475_12556[(2)] = null);
(statearr_12475_12556[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (4)))
{var inst_12332 = (state_12460[(10)]);var inst_12332__$1 = (state_12460[(2)]);var inst_12333 = (inst_12332__$1 == null);var state_12460__$1 = (function (){var statearr_12476 = state_12460;(statearr_12476[(10)] = inst_12332__$1);
return statearr_12476;
})();if(cljs.core.truth_(inst_12333))
{var statearr_12477_12557 = state_12460__$1;(statearr_12477_12557[(1)] = (5));
} else
{var statearr_12478_12558 = state_12460__$1;(statearr_12478_12558[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (15)))
{var inst_12343 = (state_12460[(13)]);var inst_12342 = (state_12460[(14)]);var inst_12344 = (state_12460[(15)]);var inst_12341 = (state_12460[(17)]);var inst_12357 = (state_12460[(2)]);var inst_12358 = (inst_12344 + (1));var tmp12472 = inst_12343;var tmp12473 = inst_12342;var tmp12474 = inst_12341;var inst_12341__$1 = tmp12474;var inst_12342__$1 = tmp12473;var inst_12343__$1 = tmp12472;var inst_12344__$1 = inst_12358;var state_12460__$1 = (function (){var statearr_12479 = state_12460;(statearr_12479[(13)] = inst_12343__$1);
(statearr_12479[(18)] = inst_12357);
(statearr_12479[(14)] = inst_12342__$1);
(statearr_12479[(15)] = inst_12344__$1);
(statearr_12479[(17)] = inst_12341__$1);
return statearr_12479;
})();var statearr_12480_12559 = state_12460__$1;(statearr_12480_12559[(2)] = null);
(statearr_12480_12559[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (21)))
{var inst_12382 = (state_12460[(2)]);var state_12460__$1 = state_12460;var statearr_12484_12560 = state_12460__$1;(statearr_12484_12560[(2)] = inst_12382);
(statearr_12484_12560[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (31)))
{var inst_12408 = (state_12460[(12)]);var inst_12412 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12413 = cljs.core.async.untap_STAR_.call(null,m,inst_12408);var state_12460__$1 = (function (){var statearr_12485 = state_12460;(statearr_12485[(19)] = inst_12412);
return statearr_12485;
})();var statearr_12486_12561 = state_12460__$1;(statearr_12486_12561[(2)] = inst_12413);
(statearr_12486_12561[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (32)))
{var inst_12401 = (state_12460[(9)]);var inst_12400 = (state_12460[(20)]);var inst_12403 = (state_12460[(11)]);var inst_12402 = (state_12460[(21)]);var inst_12415 = (state_12460[(2)]);var inst_12416 = (inst_12403 + (1));var tmp12481 = inst_12401;var tmp12482 = inst_12400;var tmp12483 = inst_12402;var inst_12400__$1 = tmp12482;var inst_12401__$1 = tmp12481;var inst_12402__$1 = tmp12483;var inst_12403__$1 = inst_12416;var state_12460__$1 = (function (){var statearr_12487 = state_12460;(statearr_12487[(9)] = inst_12401__$1);
(statearr_12487[(20)] = inst_12400__$1);
(statearr_12487[(22)] = inst_12415);
(statearr_12487[(11)] = inst_12403__$1);
(statearr_12487[(21)] = inst_12402__$1);
return statearr_12487;
})();var statearr_12488_12562 = state_12460__$1;(statearr_12488_12562[(2)] = null);
(statearr_12488_12562[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (40)))
{var inst_12428 = (state_12460[(23)]);var inst_12432 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12433 = cljs.core.async.untap_STAR_.call(null,m,inst_12428);var state_12460__$1 = (function (){var statearr_12489 = state_12460;(statearr_12489[(24)] = inst_12432);
return statearr_12489;
})();var statearr_12490_12563 = state_12460__$1;(statearr_12490_12563[(2)] = inst_12433);
(statearr_12490_12563[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (33)))
{var inst_12419 = (state_12460[(25)]);var inst_12421 = cljs.core.chunked_seq_QMARK_.call(null,inst_12419);var state_12460__$1 = state_12460;if(inst_12421)
{var statearr_12491_12564 = state_12460__$1;(statearr_12491_12564[(1)] = (36));
} else
{var statearr_12492_12565 = state_12460__$1;(statearr_12492_12565[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (13)))
{var inst_12351 = (state_12460[(26)]);var inst_12354 = cljs.core.async.close_BANG_.call(null,inst_12351);var state_12460__$1 = state_12460;var statearr_12493_12566 = state_12460__$1;(statearr_12493_12566[(2)] = inst_12354);
(statearr_12493_12566[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (22)))
{var inst_12372 = (state_12460[(8)]);var inst_12375 = cljs.core.async.close_BANG_.call(null,inst_12372);var state_12460__$1 = state_12460;var statearr_12494_12567 = state_12460__$1;(statearr_12494_12567[(2)] = inst_12375);
(statearr_12494_12567[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (36)))
{var inst_12419 = (state_12460[(25)]);var inst_12423 = cljs.core.chunk_first.call(null,inst_12419);var inst_12424 = cljs.core.chunk_rest.call(null,inst_12419);var inst_12425 = cljs.core.count.call(null,inst_12423);var inst_12400 = inst_12424;var inst_12401 = inst_12423;var inst_12402 = inst_12425;var inst_12403 = (0);var state_12460__$1 = (function (){var statearr_12495 = state_12460;(statearr_12495[(9)] = inst_12401);
(statearr_12495[(20)] = inst_12400);
(statearr_12495[(11)] = inst_12403);
(statearr_12495[(21)] = inst_12402);
return statearr_12495;
})();var statearr_12496_12568 = state_12460__$1;(statearr_12496_12568[(2)] = null);
(statearr_12496_12568[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (41)))
{var inst_12419 = (state_12460[(25)]);var inst_12435 = (state_12460[(2)]);var inst_12436 = cljs.core.next.call(null,inst_12419);var inst_12400 = inst_12436;var inst_12401 = null;var inst_12402 = (0);var inst_12403 = (0);var state_12460__$1 = (function (){var statearr_12497 = state_12460;(statearr_12497[(9)] = inst_12401);
(statearr_12497[(20)] = inst_12400);
(statearr_12497[(11)] = inst_12403);
(statearr_12497[(21)] = inst_12402);
(statearr_12497[(27)] = inst_12435);
return statearr_12497;
})();var statearr_12498_12569 = state_12460__$1;(statearr_12498_12569[(2)] = null);
(statearr_12498_12569[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (43)))
{var state_12460__$1 = state_12460;var statearr_12499_12570 = state_12460__$1;(statearr_12499_12570[(2)] = null);
(statearr_12499_12570[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (29)))
{var inst_12444 = (state_12460[(2)]);var state_12460__$1 = state_12460;var statearr_12500_12571 = state_12460__$1;(statearr_12500_12571[(2)] = inst_12444);
(statearr_12500_12571[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (44)))
{var inst_12453 = (state_12460[(2)]);var state_12460__$1 = (function (){var statearr_12501 = state_12460;(statearr_12501[(28)] = inst_12453);
return statearr_12501;
})();var statearr_12502_12572 = state_12460__$1;(statearr_12502_12572[(2)] = null);
(statearr_12502_12572[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (6)))
{var inst_12392 = (state_12460[(29)]);var inst_12391 = cljs.core.deref.call(null,cs);var inst_12392__$1 = cljs.core.keys.call(null,inst_12391);var inst_12393 = cljs.core.count.call(null,inst_12392__$1);var inst_12394 = cljs.core.reset_BANG_.call(null,dctr,inst_12393);var inst_12399 = cljs.core.seq.call(null,inst_12392__$1);var inst_12400 = inst_12399;var inst_12401 = null;var inst_12402 = (0);var inst_12403 = (0);var state_12460__$1 = (function (){var statearr_12503 = state_12460;(statearr_12503[(9)] = inst_12401);
(statearr_12503[(20)] = inst_12400);
(statearr_12503[(11)] = inst_12403);
(statearr_12503[(29)] = inst_12392__$1);
(statearr_12503[(21)] = inst_12402);
(statearr_12503[(30)] = inst_12394);
return statearr_12503;
})();var statearr_12504_12573 = state_12460__$1;(statearr_12504_12573[(2)] = null);
(statearr_12504_12573[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (28)))
{var inst_12419 = (state_12460[(25)]);var inst_12400 = (state_12460[(20)]);var inst_12419__$1 = cljs.core.seq.call(null,inst_12400);var state_12460__$1 = (function (){var statearr_12505 = state_12460;(statearr_12505[(25)] = inst_12419__$1);
return statearr_12505;
})();if(inst_12419__$1)
{var statearr_12506_12574 = state_12460__$1;(statearr_12506_12574[(1)] = (33));
} else
{var statearr_12507_12575 = state_12460__$1;(statearr_12507_12575[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (25)))
{var inst_12403 = (state_12460[(11)]);var inst_12402 = (state_12460[(21)]);var inst_12405 = (inst_12403 < inst_12402);var inst_12406 = inst_12405;var state_12460__$1 = state_12460;if(cljs.core.truth_(inst_12406))
{var statearr_12508_12576 = state_12460__$1;(statearr_12508_12576[(1)] = (27));
} else
{var statearr_12509_12577 = state_12460__$1;(statearr_12509_12577[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (34)))
{var state_12460__$1 = state_12460;var statearr_12510_12578 = state_12460__$1;(statearr_12510_12578[(2)] = null);
(statearr_12510_12578[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (17)))
{var state_12460__$1 = state_12460;var statearr_12511_12579 = state_12460__$1;(statearr_12511_12579[(2)] = null);
(statearr_12511_12579[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (3)))
{var inst_12458 = (state_12460[(2)]);var state_12460__$1 = state_12460;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12460__$1,inst_12458);
} else
{if((state_val_12461 === (12)))
{var inst_12387 = (state_12460[(2)]);var state_12460__$1 = state_12460;var statearr_12512_12580 = state_12460__$1;(statearr_12512_12580[(2)] = inst_12387);
(statearr_12512_12580[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (2)))
{var state_12460__$1 = state_12460;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12460__$1,(4),ch);
} else
{if((state_val_12461 === (23)))
{var state_12460__$1 = state_12460;var statearr_12513_12581 = state_12460__$1;(statearr_12513_12581[(2)] = null);
(statearr_12513_12581[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (35)))
{var inst_12442 = (state_12460[(2)]);var state_12460__$1 = state_12460;var statearr_12514_12582 = state_12460__$1;(statearr_12514_12582[(2)] = inst_12442);
(statearr_12514_12582[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (19)))
{var inst_12361 = (state_12460[(7)]);var inst_12365 = cljs.core.chunk_first.call(null,inst_12361);var inst_12366 = cljs.core.chunk_rest.call(null,inst_12361);var inst_12367 = cljs.core.count.call(null,inst_12365);var inst_12341 = inst_12366;var inst_12342 = inst_12365;var inst_12343 = inst_12367;var inst_12344 = (0);var state_12460__$1 = (function (){var statearr_12515 = state_12460;(statearr_12515[(13)] = inst_12343);
(statearr_12515[(14)] = inst_12342);
(statearr_12515[(15)] = inst_12344);
(statearr_12515[(17)] = inst_12341);
return statearr_12515;
})();var statearr_12516_12583 = state_12460__$1;(statearr_12516_12583[(2)] = null);
(statearr_12516_12583[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (11)))
{var inst_12361 = (state_12460[(7)]);var inst_12341 = (state_12460[(17)]);var inst_12361__$1 = cljs.core.seq.call(null,inst_12341);var state_12460__$1 = (function (){var statearr_12517 = state_12460;(statearr_12517[(7)] = inst_12361__$1);
return statearr_12517;
})();if(inst_12361__$1)
{var statearr_12518_12584 = state_12460__$1;(statearr_12518_12584[(1)] = (16));
} else
{var statearr_12519_12585 = state_12460__$1;(statearr_12519_12585[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (9)))
{var inst_12389 = (state_12460[(2)]);var state_12460__$1 = state_12460;var statearr_12520_12586 = state_12460__$1;(statearr_12520_12586[(2)] = inst_12389);
(statearr_12520_12586[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (5)))
{var inst_12339 = cljs.core.deref.call(null,cs);var inst_12340 = cljs.core.seq.call(null,inst_12339);var inst_12341 = inst_12340;var inst_12342 = null;var inst_12343 = (0);var inst_12344 = (0);var state_12460__$1 = (function (){var statearr_12521 = state_12460;(statearr_12521[(13)] = inst_12343);
(statearr_12521[(14)] = inst_12342);
(statearr_12521[(15)] = inst_12344);
(statearr_12521[(17)] = inst_12341);
return statearr_12521;
})();var statearr_12522_12587 = state_12460__$1;(statearr_12522_12587[(2)] = null);
(statearr_12522_12587[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (14)))
{var state_12460__$1 = state_12460;var statearr_12523_12588 = state_12460__$1;(statearr_12523_12588[(2)] = null);
(statearr_12523_12588[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (45)))
{var inst_12450 = (state_12460[(2)]);var state_12460__$1 = state_12460;var statearr_12524_12589 = state_12460__$1;(statearr_12524_12589[(2)] = inst_12450);
(statearr_12524_12589[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (26)))
{var inst_12392 = (state_12460[(29)]);var inst_12446 = (state_12460[(2)]);var inst_12447 = cljs.core.seq.call(null,inst_12392);var state_12460__$1 = (function (){var statearr_12525 = state_12460;(statearr_12525[(31)] = inst_12446);
return statearr_12525;
})();if(inst_12447)
{var statearr_12526_12590 = state_12460__$1;(statearr_12526_12590[(1)] = (42));
} else
{var statearr_12527_12591 = state_12460__$1;(statearr_12527_12591[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (16)))
{var inst_12361 = (state_12460[(7)]);var inst_12363 = cljs.core.chunked_seq_QMARK_.call(null,inst_12361);var state_12460__$1 = state_12460;if(inst_12363)
{var statearr_12528_12592 = state_12460__$1;(statearr_12528_12592[(1)] = (19));
} else
{var statearr_12529_12593 = state_12460__$1;(statearr_12529_12593[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (38)))
{var inst_12439 = (state_12460[(2)]);var state_12460__$1 = state_12460;var statearr_12530_12594 = state_12460__$1;(statearr_12530_12594[(2)] = inst_12439);
(statearr_12530_12594[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (30)))
{var state_12460__$1 = state_12460;var statearr_12531_12595 = state_12460__$1;(statearr_12531_12595[(2)] = null);
(statearr_12531_12595[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (10)))
{var inst_12342 = (state_12460[(14)]);var inst_12344 = (state_12460[(15)]);var inst_12350 = cljs.core._nth.call(null,inst_12342,inst_12344);var inst_12351 = cljs.core.nth.call(null,inst_12350,(0),null);var inst_12352 = cljs.core.nth.call(null,inst_12350,(1),null);var state_12460__$1 = (function (){var statearr_12532 = state_12460;(statearr_12532[(26)] = inst_12351);
return statearr_12532;
})();if(cljs.core.truth_(inst_12352))
{var statearr_12533_12596 = state_12460__$1;(statearr_12533_12596[(1)] = (13));
} else
{var statearr_12534_12597 = state_12460__$1;(statearr_12534_12597[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (18)))
{var inst_12385 = (state_12460[(2)]);var state_12460__$1 = state_12460;var statearr_12535_12598 = state_12460__$1;(statearr_12535_12598[(2)] = inst_12385);
(statearr_12535_12598[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (42)))
{var state_12460__$1 = state_12460;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12460__$1,(45),dchan);
} else
{if((state_val_12461 === (37)))
{var inst_12419 = (state_12460[(25)]);var inst_12332 = (state_12460[(10)]);var inst_12428 = (state_12460[(23)]);var inst_12428__$1 = cljs.core.first.call(null,inst_12419);var inst_12429 = cljs.core.async.put_BANG_.call(null,inst_12428__$1,inst_12332,done);var state_12460__$1 = (function (){var statearr_12536 = state_12460;(statearr_12536[(23)] = inst_12428__$1);
return statearr_12536;
})();if(cljs.core.truth_(inst_12429))
{var statearr_12537_12599 = state_12460__$1;(statearr_12537_12599[(1)] = (39));
} else
{var statearr_12538_12600 = state_12460__$1;(statearr_12538_12600[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12461 === (8)))
{var inst_12343 = (state_12460[(13)]);var inst_12344 = (state_12460[(15)]);var inst_12346 = (inst_12344 < inst_12343);var inst_12347 = inst_12346;var state_12460__$1 = state_12460;if(cljs.core.truth_(inst_12347))
{var statearr_12539_12601 = state_12460__$1;(statearr_12539_12601[(1)] = (10));
} else
{var statearr_12540_12602 = state_12460__$1;(statearr_12540_12602[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6272__auto___12548,cs,m,dchan,dctr,done))
;return ((function (switch__6207__auto__,c__6272__auto___12548,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_12544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12544[(0)] = state_machine__6208__auto__);
(statearr_12544[(1)] = (1));
return statearr_12544;
});
var state_machine__6208__auto____1 = (function (state_12460){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_12460);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e12545){if((e12545 instanceof Object))
{var ex__6211__auto__ = e12545;var statearr_12546_12603 = state_12460;(statearr_12546_12603[(5)] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12460);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12545;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12604 = state_12460;
state_12460 = G__12604;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_12460){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_12460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__,c__6272__auto___12548,cs,m,dchan,dctr,done))
})();var state__6274__auto__ = (function (){var statearr_12547 = f__6273__auto__.call(null);(statearr_12547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6272__auto___12548);
return statearr_12547;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6274__auto__);
});})(c__6272__auto___12548,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12606 = {};return obj12606;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12726 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12726 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12727){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12727 = meta12727;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12726.cljs$lang$type = true;
cljs.core.async.t12726.cljs$lang$ctorStr = "cljs.core.async/t12726";
cljs.core.async.t12726.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t12726");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12726.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12726.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12726.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12726.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12726.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12726.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12726.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12726.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12728){var self__ = this;
var _12728__$1 = this;return self__.meta12727;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12728,meta12727__$1){var self__ = this;
var _12728__$1 = this;return (new cljs.core.async.t12726(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12727__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12726 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12726(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12727){return (new cljs.core.async.t12726(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12727));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12726(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6272__auto___12845 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6272__auto___12845,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6273__auto__ = (function (){var switch__6207__auto__ = ((function (c__6272__auto___12845,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12798){var state_val_12799 = (state_12798[(1)]);if((state_val_12799 === (7)))
{var inst_12742 = (state_12798[(7)]);var inst_12747 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12742);var state_12798__$1 = state_12798;var statearr_12800_12846 = state_12798__$1;(statearr_12800_12846[(2)] = inst_12747);
(statearr_12800_12846[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (20)))
{var inst_12757 = (state_12798[(8)]);var state_12798__$1 = state_12798;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12798__$1,(23),out,inst_12757);
} else
{if((state_val_12799 === (1)))
{var inst_12732 = (state_12798[(9)]);var inst_12732__$1 = calc_state.call(null);var inst_12733 = cljs.core.seq_QMARK_.call(null,inst_12732__$1);var state_12798__$1 = (function (){var statearr_12801 = state_12798;(statearr_12801[(9)] = inst_12732__$1);
return statearr_12801;
})();if(inst_12733)
{var statearr_12802_12847 = state_12798__$1;(statearr_12802_12847[(1)] = (2));
} else
{var statearr_12803_12848 = state_12798__$1;(statearr_12803_12848[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (24)))
{var inst_12750 = (state_12798[(10)]);var inst_12742 = inst_12750;var state_12798__$1 = (function (){var statearr_12804 = state_12798;(statearr_12804[(7)] = inst_12742);
return statearr_12804;
})();var statearr_12805_12849 = state_12798__$1;(statearr_12805_12849[(2)] = null);
(statearr_12805_12849[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (4)))
{var inst_12732 = (state_12798[(9)]);var inst_12738 = (state_12798[(2)]);var inst_12739 = cljs.core.get.call(null,inst_12738,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12740 = cljs.core.get.call(null,inst_12738,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12741 = cljs.core.get.call(null,inst_12738,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12742 = inst_12732;var state_12798__$1 = (function (){var statearr_12806 = state_12798;(statearr_12806[(11)] = inst_12741);
(statearr_12806[(12)] = inst_12740);
(statearr_12806[(7)] = inst_12742);
(statearr_12806[(13)] = inst_12739);
return statearr_12806;
})();var statearr_12807_12850 = state_12798__$1;(statearr_12807_12850[(2)] = null);
(statearr_12807_12850[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (15)))
{var state_12798__$1 = state_12798;var statearr_12808_12851 = state_12798__$1;(statearr_12808_12851[(2)] = null);
(statearr_12808_12851[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (21)))
{var inst_12750 = (state_12798[(10)]);var inst_12742 = inst_12750;var state_12798__$1 = (function (){var statearr_12809 = state_12798;(statearr_12809[(7)] = inst_12742);
return statearr_12809;
})();var statearr_12810_12852 = state_12798__$1;(statearr_12810_12852[(2)] = null);
(statearr_12810_12852[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (13)))
{var inst_12794 = (state_12798[(2)]);var state_12798__$1 = state_12798;var statearr_12811_12853 = state_12798__$1;(statearr_12811_12853[(2)] = inst_12794);
(statearr_12811_12853[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (22)))
{var inst_12792 = (state_12798[(2)]);var state_12798__$1 = state_12798;var statearr_12812_12854 = state_12798__$1;(statearr_12812_12854[(2)] = inst_12792);
(statearr_12812_12854[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (6)))
{var inst_12796 = (state_12798[(2)]);var state_12798__$1 = state_12798;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12798__$1,inst_12796);
} else
{if((state_val_12799 === (25)))
{var state_12798__$1 = state_12798;var statearr_12813_12855 = state_12798__$1;(statearr_12813_12855[(2)] = null);
(statearr_12813_12855[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (17)))
{var inst_12772 = (state_12798[(14)]);var state_12798__$1 = state_12798;var statearr_12814_12856 = state_12798__$1;(statearr_12814_12856[(2)] = inst_12772);
(statearr_12814_12856[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (3)))
{var inst_12732 = (state_12798[(9)]);var state_12798__$1 = state_12798;var statearr_12815_12857 = state_12798__$1;(statearr_12815_12857[(2)] = inst_12732);
(statearr_12815_12857[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (12)))
{var inst_12758 = (state_12798[(15)]);var inst_12772 = (state_12798[(14)]);var inst_12753 = (state_12798[(16)]);var inst_12772__$1 = inst_12753.call(null,inst_12758);var state_12798__$1 = (function (){var statearr_12816 = state_12798;(statearr_12816[(14)] = inst_12772__$1);
return statearr_12816;
})();if(cljs.core.truth_(inst_12772__$1))
{var statearr_12817_12858 = state_12798__$1;(statearr_12817_12858[(1)] = (17));
} else
{var statearr_12818_12859 = state_12798__$1;(statearr_12818_12859[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (2)))
{var inst_12732 = (state_12798[(9)]);var inst_12735 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12732);var state_12798__$1 = state_12798;var statearr_12819_12860 = state_12798__$1;(statearr_12819_12860[(2)] = inst_12735);
(statearr_12819_12860[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (23)))
{var inst_12783 = (state_12798[(2)]);var state_12798__$1 = state_12798;if(cljs.core.truth_(inst_12783))
{var statearr_12820_12861 = state_12798__$1;(statearr_12820_12861[(1)] = (24));
} else
{var statearr_12821_12862 = state_12798__$1;(statearr_12821_12862[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (19)))
{var inst_12780 = (state_12798[(2)]);var state_12798__$1 = state_12798;if(cljs.core.truth_(inst_12780))
{var statearr_12822_12863 = state_12798__$1;(statearr_12822_12863[(1)] = (20));
} else
{var statearr_12823_12864 = state_12798__$1;(statearr_12823_12864[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (11)))
{var inst_12757 = (state_12798[(8)]);var inst_12763 = (inst_12757 == null);var state_12798__$1 = state_12798;if(cljs.core.truth_(inst_12763))
{var statearr_12824_12865 = state_12798__$1;(statearr_12824_12865[(1)] = (14));
} else
{var statearr_12825_12866 = state_12798__$1;(statearr_12825_12866[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (9)))
{var inst_12750 = (state_12798[(10)]);var inst_12750__$1 = (state_12798[(2)]);var inst_12751 = cljs.core.get.call(null,inst_12750__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12752 = cljs.core.get.call(null,inst_12750__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12753 = cljs.core.get.call(null,inst_12750__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12798__$1 = (function (){var statearr_12826 = state_12798;(statearr_12826[(10)] = inst_12750__$1);
(statearr_12826[(17)] = inst_12752);
(statearr_12826[(16)] = inst_12753);
return statearr_12826;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12798__$1,(10),inst_12751);
} else
{if((state_val_12799 === (5)))
{var inst_12742 = (state_12798[(7)]);var inst_12745 = cljs.core.seq_QMARK_.call(null,inst_12742);var state_12798__$1 = state_12798;if(inst_12745)
{var statearr_12827_12867 = state_12798__$1;(statearr_12827_12867[(1)] = (7));
} else
{var statearr_12828_12868 = state_12798__$1;(statearr_12828_12868[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (14)))
{var inst_12758 = (state_12798[(15)]);var inst_12765 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12758);var state_12798__$1 = state_12798;var statearr_12829_12869 = state_12798__$1;(statearr_12829_12869[(2)] = inst_12765);
(statearr_12829_12869[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (26)))
{var inst_12788 = (state_12798[(2)]);var state_12798__$1 = state_12798;var statearr_12830_12870 = state_12798__$1;(statearr_12830_12870[(2)] = inst_12788);
(statearr_12830_12870[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (16)))
{var inst_12768 = (state_12798[(2)]);var inst_12769 = calc_state.call(null);var inst_12742 = inst_12769;var state_12798__$1 = (function (){var statearr_12831 = state_12798;(statearr_12831[(18)] = inst_12768);
(statearr_12831[(7)] = inst_12742);
return statearr_12831;
})();var statearr_12832_12871 = state_12798__$1;(statearr_12832_12871[(2)] = null);
(statearr_12832_12871[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (10)))
{var inst_12757 = (state_12798[(8)]);var inst_12758 = (state_12798[(15)]);var inst_12756 = (state_12798[(2)]);var inst_12757__$1 = cljs.core.nth.call(null,inst_12756,(0),null);var inst_12758__$1 = cljs.core.nth.call(null,inst_12756,(1),null);var inst_12759 = (inst_12757__$1 == null);var inst_12760 = cljs.core._EQ_.call(null,inst_12758__$1,change);var inst_12761 = (inst_12759) || (inst_12760);var state_12798__$1 = (function (){var statearr_12833 = state_12798;(statearr_12833[(8)] = inst_12757__$1);
(statearr_12833[(15)] = inst_12758__$1);
return statearr_12833;
})();if(cljs.core.truth_(inst_12761))
{var statearr_12834_12872 = state_12798__$1;(statearr_12834_12872[(1)] = (11));
} else
{var statearr_12835_12873 = state_12798__$1;(statearr_12835_12873[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (18)))
{var inst_12758 = (state_12798[(15)]);var inst_12752 = (state_12798[(17)]);var inst_12753 = (state_12798[(16)]);var inst_12775 = cljs.core.empty_QMARK_.call(null,inst_12753);var inst_12776 = inst_12752.call(null,inst_12758);var inst_12777 = cljs.core.not.call(null,inst_12776);var inst_12778 = (inst_12775) && (inst_12777);var state_12798__$1 = state_12798;var statearr_12836_12874 = state_12798__$1;(statearr_12836_12874[(2)] = inst_12778);
(statearr_12836_12874[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12799 === (8)))
{var inst_12742 = (state_12798[(7)]);var state_12798__$1 = state_12798;var statearr_12837_12875 = state_12798__$1;(statearr_12837_12875[(2)] = inst_12742);
(statearr_12837_12875[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6272__auto___12845,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6207__auto__,c__6272__auto___12845,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_12841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12841[(0)] = state_machine__6208__auto__);
(statearr_12841[(1)] = (1));
return statearr_12841;
});
var state_machine__6208__auto____1 = (function (state_12798){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_12798);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e12842){if((e12842 instanceof Object))
{var ex__6211__auto__ = e12842;var statearr_12843_12876 = state_12798;(statearr_12843_12876[(5)] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12798);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12842;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12877 = state_12798;
state_12798 = G__12877;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_12798){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_12798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__,c__6272__auto___12845,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6274__auto__ = (function (){var statearr_12844 = f__6273__auto__.call(null);(statearr_12844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6272__auto___12845);
return statearr_12844;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6274__auto__);
});})(c__6272__auto___12845,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12879 = {};return obj12879;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3553__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3553__auto__,mults){
return (function (p1__12880_SHARP_){if(cljs.core.truth_(p1__12880_SHARP_.call(null,topic)))
{return p1__12880_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12880_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3553__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12995 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12995 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12996){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12996 = meta12996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12995.cljs$lang$type = true;
cljs.core.async.t12995.cljs$lang$ctorStr = "cljs.core.async/t12995";
cljs.core.async.t12995.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t12995");
});})(mults,ensure_mult))
;
cljs.core.async.t12995.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12995.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12995.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12995.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12995.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12995.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12995.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12995.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12997){var self__ = this;
var _12997__$1 = this;return self__.meta12996;
});})(mults,ensure_mult))
;
cljs.core.async.t12995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12997,meta12996__$1){var self__ = this;
var _12997__$1 = this;return (new cljs.core.async.t12995(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12996__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12995 = ((function (mults,ensure_mult){
return (function __GT_t12995(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12996){return (new cljs.core.async.t12995(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12996));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12995(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6272__auto___13109 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6272__auto___13109,mults,ensure_mult,p){
return (function (){var f__6273__auto__ = (function (){var switch__6207__auto__ = ((function (c__6272__auto___13109,mults,ensure_mult,p){
return (function (state_13065){var state_val_13066 = (state_13065[(1)]);if((state_val_13066 === (7)))
{var inst_13061 = (state_13065[(2)]);var state_13065__$1 = state_13065;var statearr_13067_13110 = state_13065__$1;(statearr_13067_13110[(2)] = inst_13061);
(statearr_13067_13110[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (20)))
{var state_13065__$1 = state_13065;var statearr_13068_13111 = state_13065__$1;(statearr_13068_13111[(2)] = null);
(statearr_13068_13111[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (1)))
{var state_13065__$1 = state_13065;var statearr_13069_13112 = state_13065__$1;(statearr_13069_13112[(2)] = null);
(statearr_13069_13112[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (4)))
{var inst_13000 = (state_13065[(7)]);var inst_13000__$1 = (state_13065[(2)]);var inst_13001 = (inst_13000__$1 == null);var state_13065__$1 = (function (){var statearr_13070 = state_13065;(statearr_13070[(7)] = inst_13000__$1);
return statearr_13070;
})();if(cljs.core.truth_(inst_13001))
{var statearr_13071_13113 = state_13065__$1;(statearr_13071_13113[(1)] = (5));
} else
{var statearr_13072_13114 = state_13065__$1;(statearr_13072_13114[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (15)))
{var inst_13042 = (state_13065[(2)]);var state_13065__$1 = state_13065;var statearr_13073_13115 = state_13065__$1;(statearr_13073_13115[(2)] = inst_13042);
(statearr_13073_13115[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (21)))
{var inst_13048 = (state_13065[(8)]);var inst_13056 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13048);var state_13065__$1 = state_13065;var statearr_13074_13116 = state_13065__$1;(statearr_13074_13116[(2)] = inst_13056);
(statearr_13074_13116[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (13)))
{var inst_13024 = (state_13065[(9)]);var inst_13026 = cljs.core.chunked_seq_QMARK_.call(null,inst_13024);var state_13065__$1 = state_13065;if(inst_13026)
{var statearr_13075_13117 = state_13065__$1;(statearr_13075_13117[(1)] = (16));
} else
{var statearr_13076_13118 = state_13065__$1;(statearr_13076_13118[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (22)))
{var inst_13058 = (state_13065[(2)]);var state_13065__$1 = (function (){var statearr_13077 = state_13065;(statearr_13077[(10)] = inst_13058);
return statearr_13077;
})();var statearr_13078_13119 = state_13065__$1;(statearr_13078_13119[(2)] = null);
(statearr_13078_13119[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (6)))
{var inst_13000 = (state_13065[(7)]);var inst_13048 = (state_13065[(8)]);var inst_13048__$1 = topic_fn.call(null,inst_13000);var inst_13049 = cljs.core.deref.call(null,mults);var inst_13050 = cljs.core.get.call(null,inst_13049,inst_13048__$1);var inst_13051 = cljs.core.async.muxch_STAR_.call(null,inst_13050);var state_13065__$1 = (function (){var statearr_13079 = state_13065;(statearr_13079[(8)] = inst_13048__$1);
return statearr_13079;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13065__$1,(19),inst_13051,inst_13000);
} else
{if((state_val_13066 === (17)))
{var inst_13024 = (state_13065[(9)]);var inst_13033 = cljs.core.first.call(null,inst_13024);var inst_13034 = cljs.core.async.muxch_STAR_.call(null,inst_13033);var inst_13035 = cljs.core.async.close_BANG_.call(null,inst_13034);var inst_13036 = cljs.core.next.call(null,inst_13024);var inst_13010 = inst_13036;var inst_13011 = null;var inst_13012 = (0);var inst_13013 = (0);var state_13065__$1 = (function (){var statearr_13080 = state_13065;(statearr_13080[(11)] = inst_13011);
(statearr_13080[(12)] = inst_13012);
(statearr_13080[(13)] = inst_13010);
(statearr_13080[(14)] = inst_13035);
(statearr_13080[(15)] = inst_13013);
return statearr_13080;
})();var statearr_13081_13120 = state_13065__$1;(statearr_13081_13120[(2)] = null);
(statearr_13081_13120[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (3)))
{var inst_13063 = (state_13065[(2)]);var state_13065__$1 = state_13065;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13065__$1,inst_13063);
} else
{if((state_val_13066 === (12)))
{var inst_13044 = (state_13065[(2)]);var state_13065__$1 = state_13065;var statearr_13082_13121 = state_13065__$1;(statearr_13082_13121[(2)] = inst_13044);
(statearr_13082_13121[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (2)))
{var state_13065__$1 = state_13065;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13065__$1,(4),ch);
} else
{if((state_val_13066 === (19)))
{var inst_13053 = (state_13065[(2)]);var state_13065__$1 = state_13065;if(cljs.core.truth_(inst_13053))
{var statearr_13083_13122 = state_13065__$1;(statearr_13083_13122[(1)] = (20));
} else
{var statearr_13084_13123 = state_13065__$1;(statearr_13084_13123[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (11)))
{var inst_13010 = (state_13065[(13)]);var inst_13024 = (state_13065[(9)]);var inst_13024__$1 = cljs.core.seq.call(null,inst_13010);var state_13065__$1 = (function (){var statearr_13085 = state_13065;(statearr_13085[(9)] = inst_13024__$1);
return statearr_13085;
})();if(inst_13024__$1)
{var statearr_13086_13124 = state_13065__$1;(statearr_13086_13124[(1)] = (13));
} else
{var statearr_13087_13125 = state_13065__$1;(statearr_13087_13125[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (9)))
{var inst_13046 = (state_13065[(2)]);var state_13065__$1 = state_13065;var statearr_13088_13126 = state_13065__$1;(statearr_13088_13126[(2)] = inst_13046);
(statearr_13088_13126[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (5)))
{var inst_13007 = cljs.core.deref.call(null,mults);var inst_13008 = cljs.core.vals.call(null,inst_13007);var inst_13009 = cljs.core.seq.call(null,inst_13008);var inst_13010 = inst_13009;var inst_13011 = null;var inst_13012 = (0);var inst_13013 = (0);var state_13065__$1 = (function (){var statearr_13089 = state_13065;(statearr_13089[(11)] = inst_13011);
(statearr_13089[(12)] = inst_13012);
(statearr_13089[(13)] = inst_13010);
(statearr_13089[(15)] = inst_13013);
return statearr_13089;
})();var statearr_13090_13127 = state_13065__$1;(statearr_13090_13127[(2)] = null);
(statearr_13090_13127[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (14)))
{var state_13065__$1 = state_13065;var statearr_13094_13128 = state_13065__$1;(statearr_13094_13128[(2)] = null);
(statearr_13094_13128[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (16)))
{var inst_13024 = (state_13065[(9)]);var inst_13028 = cljs.core.chunk_first.call(null,inst_13024);var inst_13029 = cljs.core.chunk_rest.call(null,inst_13024);var inst_13030 = cljs.core.count.call(null,inst_13028);var inst_13010 = inst_13029;var inst_13011 = inst_13028;var inst_13012 = inst_13030;var inst_13013 = (0);var state_13065__$1 = (function (){var statearr_13095 = state_13065;(statearr_13095[(11)] = inst_13011);
(statearr_13095[(12)] = inst_13012);
(statearr_13095[(13)] = inst_13010);
(statearr_13095[(15)] = inst_13013);
return statearr_13095;
})();var statearr_13096_13129 = state_13065__$1;(statearr_13096_13129[(2)] = null);
(statearr_13096_13129[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (10)))
{var inst_13011 = (state_13065[(11)]);var inst_13012 = (state_13065[(12)]);var inst_13010 = (state_13065[(13)]);var inst_13013 = (state_13065[(15)]);var inst_13018 = cljs.core._nth.call(null,inst_13011,inst_13013);var inst_13019 = cljs.core.async.muxch_STAR_.call(null,inst_13018);var inst_13020 = cljs.core.async.close_BANG_.call(null,inst_13019);var inst_13021 = (inst_13013 + (1));var tmp13091 = inst_13011;var tmp13092 = inst_13012;var tmp13093 = inst_13010;var inst_13010__$1 = tmp13093;var inst_13011__$1 = tmp13091;var inst_13012__$1 = tmp13092;var inst_13013__$1 = inst_13021;var state_13065__$1 = (function (){var statearr_13097 = state_13065;(statearr_13097[(11)] = inst_13011__$1);
(statearr_13097[(12)] = inst_13012__$1);
(statearr_13097[(16)] = inst_13020);
(statearr_13097[(13)] = inst_13010__$1);
(statearr_13097[(15)] = inst_13013__$1);
return statearr_13097;
})();var statearr_13098_13130 = state_13065__$1;(statearr_13098_13130[(2)] = null);
(statearr_13098_13130[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (18)))
{var inst_13039 = (state_13065[(2)]);var state_13065__$1 = state_13065;var statearr_13099_13131 = state_13065__$1;(statearr_13099_13131[(2)] = inst_13039);
(statearr_13099_13131[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (8)))
{var inst_13012 = (state_13065[(12)]);var inst_13013 = (state_13065[(15)]);var inst_13015 = (inst_13013 < inst_13012);var inst_13016 = inst_13015;var state_13065__$1 = state_13065;if(cljs.core.truth_(inst_13016))
{var statearr_13100_13132 = state_13065__$1;(statearr_13100_13132[(1)] = (10));
} else
{var statearr_13101_13133 = state_13065__$1;(statearr_13101_13133[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6272__auto___13109,mults,ensure_mult,p))
;return ((function (switch__6207__auto__,c__6272__auto___13109,mults,ensure_mult,p){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_13105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13105[(0)] = state_machine__6208__auto__);
(statearr_13105[(1)] = (1));
return statearr_13105;
});
var state_machine__6208__auto____1 = (function (state_13065){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_13065);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e13106){if((e13106 instanceof Object))
{var ex__6211__auto__ = e13106;var statearr_13107_13134 = state_13065;(statearr_13107_13134[(5)] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13065);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13106;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13135 = state_13065;
state_13065 = G__13135;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_13065){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_13065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__,c__6272__auto___13109,mults,ensure_mult,p))
})();var state__6274__auto__ = (function (){var statearr_13108 = f__6273__auto__.call(null);(statearr_13108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6272__auto___13109);
return statearr_13108;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6274__auto__);
});})(c__6272__auto___13109,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6272__auto___13272 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6272__auto___13272,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6273__auto__ = (function (){var switch__6207__auto__ = ((function (c__6272__auto___13272,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13242){var state_val_13243 = (state_13242[(1)]);if((state_val_13243 === (7)))
{var state_13242__$1 = state_13242;var statearr_13244_13273 = state_13242__$1;(statearr_13244_13273[(2)] = null);
(statearr_13244_13273[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13243 === (1)))
{var state_13242__$1 = state_13242;var statearr_13245_13274 = state_13242__$1;(statearr_13245_13274[(2)] = null);
(statearr_13245_13274[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13243 === (4)))
{var inst_13206 = (state_13242[(7)]);var inst_13208 = (inst_13206 < cnt);var state_13242__$1 = state_13242;if(cljs.core.truth_(inst_13208))
{var statearr_13246_13275 = state_13242__$1;(statearr_13246_13275[(1)] = (6));
} else
{var statearr_13247_13276 = state_13242__$1;(statearr_13247_13276[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13243 === (15)))
{var inst_13238 = (state_13242[(2)]);var state_13242__$1 = state_13242;var statearr_13248_13277 = state_13242__$1;(statearr_13248_13277[(2)] = inst_13238);
(statearr_13248_13277[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13243 === (13)))
{var inst_13231 = cljs.core.async.close_BANG_.call(null,out);var state_13242__$1 = state_13242;var statearr_13249_13278 = state_13242__$1;(statearr_13249_13278[(2)] = inst_13231);
(statearr_13249_13278[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13243 === (6)))
{var state_13242__$1 = state_13242;var statearr_13250_13279 = state_13242__$1;(statearr_13250_13279[(2)] = null);
(statearr_13250_13279[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13243 === (3)))
{var inst_13240 = (state_13242[(2)]);var state_13242__$1 = state_13242;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13242__$1,inst_13240);
} else
{if((state_val_13243 === (12)))
{var inst_13228 = (state_13242[(8)]);var inst_13228__$1 = (state_13242[(2)]);var inst_13229 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13228__$1);var state_13242__$1 = (function (){var statearr_13251 = state_13242;(statearr_13251[(8)] = inst_13228__$1);
return statearr_13251;
})();if(cljs.core.truth_(inst_13229))
{var statearr_13252_13280 = state_13242__$1;(statearr_13252_13280[(1)] = (13));
} else
{var statearr_13253_13281 = state_13242__$1;(statearr_13253_13281[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13243 === (2)))
{var inst_13205 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13206 = (0);var state_13242__$1 = (function (){var statearr_13254 = state_13242;(statearr_13254[(7)] = inst_13206);
(statearr_13254[(9)] = inst_13205);
return statearr_13254;
})();var statearr_13255_13282 = state_13242__$1;(statearr_13255_13282[(2)] = null);
(statearr_13255_13282[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13243 === (11)))
{var inst_13206 = (state_13242[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13242,(10),Object,null,(9));var inst_13215 = chs__$1.call(null,inst_13206);var inst_13216 = done.call(null,inst_13206);var inst_13217 = cljs.core.async.take_BANG_.call(null,inst_13215,inst_13216);var state_13242__$1 = state_13242;var statearr_13256_13283 = state_13242__$1;(statearr_13256_13283[(2)] = inst_13217);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13242__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13243 === (9)))
{var inst_13206 = (state_13242[(7)]);var inst_13219 = (state_13242[(2)]);var inst_13220 = (inst_13206 + (1));var inst_13206__$1 = inst_13220;var state_13242__$1 = (function (){var statearr_13257 = state_13242;(statearr_13257[(10)] = inst_13219);
(statearr_13257[(7)] = inst_13206__$1);
return statearr_13257;
})();var statearr_13258_13284 = state_13242__$1;(statearr_13258_13284[(2)] = null);
(statearr_13258_13284[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13243 === (5)))
{var inst_13226 = (state_13242[(2)]);var state_13242__$1 = (function (){var statearr_13259 = state_13242;(statearr_13259[(11)] = inst_13226);
return statearr_13259;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13242__$1,(12),dchan);
} else
{if((state_val_13243 === (14)))
{var inst_13228 = (state_13242[(8)]);var inst_13233 = cljs.core.apply.call(null,f,inst_13228);var state_13242__$1 = state_13242;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13242__$1,(16),out,inst_13233);
} else
{if((state_val_13243 === (16)))
{var inst_13235 = (state_13242[(2)]);var state_13242__$1 = (function (){var statearr_13260 = state_13242;(statearr_13260[(12)] = inst_13235);
return statearr_13260;
})();var statearr_13261_13285 = state_13242__$1;(statearr_13261_13285[(2)] = null);
(statearr_13261_13285[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13243 === (10)))
{var inst_13210 = (state_13242[(2)]);var inst_13211 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13242__$1 = (function (){var statearr_13262 = state_13242;(statearr_13262[(13)] = inst_13210);
return statearr_13262;
})();var statearr_13263_13286 = state_13242__$1;(statearr_13263_13286[(2)] = inst_13211);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13242__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13243 === (8)))
{var inst_13224 = (state_13242[(2)]);var state_13242__$1 = state_13242;var statearr_13264_13287 = state_13242__$1;(statearr_13264_13287[(2)] = inst_13224);
(statearr_13264_13287[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6272__auto___13272,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6207__auto__,c__6272__auto___13272,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_13268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13268[(0)] = state_machine__6208__auto__);
(statearr_13268[(1)] = (1));
return statearr_13268;
});
var state_machine__6208__auto____1 = (function (state_13242){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_13242);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e13269){if((e13269 instanceof Object))
{var ex__6211__auto__ = e13269;var statearr_13270_13288 = state_13242;(statearr_13270_13288[(5)] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13242);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13269;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13289 = state_13242;
state_13242 = G__13289;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_13242){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_13242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__,c__6272__auto___13272,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6274__auto__ = (function (){var statearr_13271 = f__6273__auto__.call(null);(statearr_13271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6272__auto___13272);
return statearr_13271;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6274__auto__);
});})(c__6272__auto___13272,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6272__auto___13397 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6272__auto___13397,out){
return (function (){var f__6273__auto__ = (function (){var switch__6207__auto__ = ((function (c__6272__auto___13397,out){
return (function (state_13373){var state_val_13374 = (state_13373[(1)]);if((state_val_13374 === (7)))
{var inst_13353 = (state_13373[(7)]);var inst_13352 = (state_13373[(8)]);var inst_13352__$1 = (state_13373[(2)]);var inst_13353__$1 = cljs.core.nth.call(null,inst_13352__$1,(0),null);var inst_13354 = cljs.core.nth.call(null,inst_13352__$1,(1),null);var inst_13355 = (inst_13353__$1 == null);var state_13373__$1 = (function (){var statearr_13375 = state_13373;(statearr_13375[(9)] = inst_13354);
(statearr_13375[(7)] = inst_13353__$1);
(statearr_13375[(8)] = inst_13352__$1);
return statearr_13375;
})();if(cljs.core.truth_(inst_13355))
{var statearr_13376_13398 = state_13373__$1;(statearr_13376_13398[(1)] = (8));
} else
{var statearr_13377_13399 = state_13373__$1;(statearr_13377_13399[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13374 === (1)))
{var inst_13344 = cljs.core.vec.call(null,chs);var inst_13345 = inst_13344;var state_13373__$1 = (function (){var statearr_13378 = state_13373;(statearr_13378[(10)] = inst_13345);
return statearr_13378;
})();var statearr_13379_13400 = state_13373__$1;(statearr_13379_13400[(2)] = null);
(statearr_13379_13400[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13374 === (4)))
{var inst_13345 = (state_13373[(10)]);var state_13373__$1 = state_13373;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13373__$1,(7),inst_13345);
} else
{if((state_val_13374 === (6)))
{var inst_13369 = (state_13373[(2)]);var state_13373__$1 = state_13373;var statearr_13380_13401 = state_13373__$1;(statearr_13380_13401[(2)] = inst_13369);
(statearr_13380_13401[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13374 === (3)))
{var inst_13371 = (state_13373[(2)]);var state_13373__$1 = state_13373;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13373__$1,inst_13371);
} else
{if((state_val_13374 === (2)))
{var inst_13345 = (state_13373[(10)]);var inst_13347 = cljs.core.count.call(null,inst_13345);var inst_13348 = (inst_13347 > (0));var state_13373__$1 = state_13373;if(cljs.core.truth_(inst_13348))
{var statearr_13382_13402 = state_13373__$1;(statearr_13382_13402[(1)] = (4));
} else
{var statearr_13383_13403 = state_13373__$1;(statearr_13383_13403[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13374 === (11)))
{var inst_13345 = (state_13373[(10)]);var inst_13362 = (state_13373[(2)]);var tmp13381 = inst_13345;var inst_13345__$1 = tmp13381;var state_13373__$1 = (function (){var statearr_13384 = state_13373;(statearr_13384[(10)] = inst_13345__$1);
(statearr_13384[(11)] = inst_13362);
return statearr_13384;
})();var statearr_13385_13404 = state_13373__$1;(statearr_13385_13404[(2)] = null);
(statearr_13385_13404[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13374 === (9)))
{var inst_13353 = (state_13373[(7)]);var state_13373__$1 = state_13373;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13373__$1,(11),out,inst_13353);
} else
{if((state_val_13374 === (5)))
{var inst_13367 = cljs.core.async.close_BANG_.call(null,out);var state_13373__$1 = state_13373;var statearr_13386_13405 = state_13373__$1;(statearr_13386_13405[(2)] = inst_13367);
(statearr_13386_13405[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13374 === (10)))
{var inst_13365 = (state_13373[(2)]);var state_13373__$1 = state_13373;var statearr_13387_13406 = state_13373__$1;(statearr_13387_13406[(2)] = inst_13365);
(statearr_13387_13406[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13374 === (8)))
{var inst_13354 = (state_13373[(9)]);var inst_13353 = (state_13373[(7)]);var inst_13345 = (state_13373[(10)]);var inst_13352 = (state_13373[(8)]);var inst_13357 = (function (){var c = inst_13354;var v = inst_13353;var vec__13350 = inst_13352;var cs = inst_13345;return ((function (c,v,vec__13350,cs,inst_13354,inst_13353,inst_13345,inst_13352,state_val_13374,c__6272__auto___13397,out){
return (function (p1__13290_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13290_SHARP_);
});
;})(c,v,vec__13350,cs,inst_13354,inst_13353,inst_13345,inst_13352,state_val_13374,c__6272__auto___13397,out))
})();var inst_13358 = cljs.core.filterv.call(null,inst_13357,inst_13345);var inst_13345__$1 = inst_13358;var state_13373__$1 = (function (){var statearr_13388 = state_13373;(statearr_13388[(10)] = inst_13345__$1);
return statearr_13388;
})();var statearr_13389_13407 = state_13373__$1;(statearr_13389_13407[(2)] = null);
(statearr_13389_13407[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6272__auto___13397,out))
;return ((function (switch__6207__auto__,c__6272__auto___13397,out){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_13393 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13393[(0)] = state_machine__6208__auto__);
(statearr_13393[(1)] = (1));
return statearr_13393;
});
var state_machine__6208__auto____1 = (function (state_13373){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_13373);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e13394){if((e13394 instanceof Object))
{var ex__6211__auto__ = e13394;var statearr_13395_13408 = state_13373;(statearr_13395_13408[(5)] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13373);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13394;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13409 = state_13373;
state_13373 = G__13409;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_13373){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_13373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__,c__6272__auto___13397,out))
})();var state__6274__auto__ = (function (){var statearr_13396 = f__6273__auto__.call(null);(statearr_13396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6272__auto___13397);
return statearr_13396;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6274__auto__);
});})(c__6272__auto___13397,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6272__auto___13502 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6272__auto___13502,out){
return (function (){var f__6273__auto__ = (function (){var switch__6207__auto__ = ((function (c__6272__auto___13502,out){
return (function (state_13479){var state_val_13480 = (state_13479[(1)]);if((state_val_13480 === (7)))
{var inst_13461 = (state_13479[(7)]);var inst_13461__$1 = (state_13479[(2)]);var inst_13462 = (inst_13461__$1 == null);var inst_13463 = cljs.core.not.call(null,inst_13462);var state_13479__$1 = (function (){var statearr_13481 = state_13479;(statearr_13481[(7)] = inst_13461__$1);
return statearr_13481;
})();if(inst_13463)
{var statearr_13482_13503 = state_13479__$1;(statearr_13482_13503[(1)] = (8));
} else
{var statearr_13483_13504 = state_13479__$1;(statearr_13483_13504[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13480 === (1)))
{var inst_13456 = (0);var state_13479__$1 = (function (){var statearr_13484 = state_13479;(statearr_13484[(8)] = inst_13456);
return statearr_13484;
})();var statearr_13485_13505 = state_13479__$1;(statearr_13485_13505[(2)] = null);
(statearr_13485_13505[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13480 === (4)))
{var state_13479__$1 = state_13479;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13479__$1,(7),ch);
} else
{if((state_val_13480 === (6)))
{var inst_13474 = (state_13479[(2)]);var state_13479__$1 = state_13479;var statearr_13486_13506 = state_13479__$1;(statearr_13486_13506[(2)] = inst_13474);
(statearr_13486_13506[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13480 === (3)))
{var inst_13476 = (state_13479[(2)]);var inst_13477 = cljs.core.async.close_BANG_.call(null,out);var state_13479__$1 = (function (){var statearr_13487 = state_13479;(statearr_13487[(9)] = inst_13476);
return statearr_13487;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13479__$1,inst_13477);
} else
{if((state_val_13480 === (2)))
{var inst_13456 = (state_13479[(8)]);var inst_13458 = (inst_13456 < n);var state_13479__$1 = state_13479;if(cljs.core.truth_(inst_13458))
{var statearr_13488_13507 = state_13479__$1;(statearr_13488_13507[(1)] = (4));
} else
{var statearr_13489_13508 = state_13479__$1;(statearr_13489_13508[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13480 === (11)))
{var inst_13456 = (state_13479[(8)]);var inst_13466 = (state_13479[(2)]);var inst_13467 = (inst_13456 + (1));var inst_13456__$1 = inst_13467;var state_13479__$1 = (function (){var statearr_13490 = state_13479;(statearr_13490[(8)] = inst_13456__$1);
(statearr_13490[(10)] = inst_13466);
return statearr_13490;
})();var statearr_13491_13509 = state_13479__$1;(statearr_13491_13509[(2)] = null);
(statearr_13491_13509[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13480 === (9)))
{var state_13479__$1 = state_13479;var statearr_13492_13510 = state_13479__$1;(statearr_13492_13510[(2)] = null);
(statearr_13492_13510[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13480 === (5)))
{var state_13479__$1 = state_13479;var statearr_13493_13511 = state_13479__$1;(statearr_13493_13511[(2)] = null);
(statearr_13493_13511[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13480 === (10)))
{var inst_13471 = (state_13479[(2)]);var state_13479__$1 = state_13479;var statearr_13494_13512 = state_13479__$1;(statearr_13494_13512[(2)] = inst_13471);
(statearr_13494_13512[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13480 === (8)))
{var inst_13461 = (state_13479[(7)]);var state_13479__$1 = state_13479;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13479__$1,(11),out,inst_13461);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6272__auto___13502,out))
;return ((function (switch__6207__auto__,c__6272__auto___13502,out){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_13498 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13498[(0)] = state_machine__6208__auto__);
(statearr_13498[(1)] = (1));
return statearr_13498;
});
var state_machine__6208__auto____1 = (function (state_13479){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_13479);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e13499){if((e13499 instanceof Object))
{var ex__6211__auto__ = e13499;var statearr_13500_13513 = state_13479;(statearr_13500_13513[(5)] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13479);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13499;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13514 = state_13479;
state_13479 = G__13514;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_13479){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_13479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__,c__6272__auto___13502,out))
})();var state__6274__auto__ = (function (){var statearr_13501 = f__6273__auto__.call(null);(statearr_13501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6272__auto___13502);
return statearr_13501;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6274__auto__);
});})(c__6272__auto___13502,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6272__auto___13611 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6272__auto___13611,out){
return (function (){var f__6273__auto__ = (function (){var switch__6207__auto__ = ((function (c__6272__auto___13611,out){
return (function (state_13586){var state_val_13587 = (state_13586[(1)]);if((state_val_13587 === (7)))
{var inst_13581 = (state_13586[(2)]);var state_13586__$1 = state_13586;var statearr_13588_13612 = state_13586__$1;(statearr_13588_13612[(2)] = inst_13581);
(statearr_13588_13612[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13587 === (1)))
{var inst_13563 = null;var state_13586__$1 = (function (){var statearr_13589 = state_13586;(statearr_13589[(7)] = inst_13563);
return statearr_13589;
})();var statearr_13590_13613 = state_13586__$1;(statearr_13590_13613[(2)] = null);
(statearr_13590_13613[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13587 === (4)))
{var inst_13566 = (state_13586[(8)]);var inst_13566__$1 = (state_13586[(2)]);var inst_13567 = (inst_13566__$1 == null);var inst_13568 = cljs.core.not.call(null,inst_13567);var state_13586__$1 = (function (){var statearr_13591 = state_13586;(statearr_13591[(8)] = inst_13566__$1);
return statearr_13591;
})();if(inst_13568)
{var statearr_13592_13614 = state_13586__$1;(statearr_13592_13614[(1)] = (5));
} else
{var statearr_13593_13615 = state_13586__$1;(statearr_13593_13615[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13587 === (6)))
{var state_13586__$1 = state_13586;var statearr_13594_13616 = state_13586__$1;(statearr_13594_13616[(2)] = null);
(statearr_13594_13616[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13587 === (3)))
{var inst_13583 = (state_13586[(2)]);var inst_13584 = cljs.core.async.close_BANG_.call(null,out);var state_13586__$1 = (function (){var statearr_13595 = state_13586;(statearr_13595[(9)] = inst_13583);
return statearr_13595;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13586__$1,inst_13584);
} else
{if((state_val_13587 === (2)))
{var state_13586__$1 = state_13586;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13586__$1,(4),ch);
} else
{if((state_val_13587 === (11)))
{var inst_13566 = (state_13586[(8)]);var inst_13575 = (state_13586[(2)]);var inst_13563 = inst_13566;var state_13586__$1 = (function (){var statearr_13596 = state_13586;(statearr_13596[(10)] = inst_13575);
(statearr_13596[(7)] = inst_13563);
return statearr_13596;
})();var statearr_13597_13617 = state_13586__$1;(statearr_13597_13617[(2)] = null);
(statearr_13597_13617[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13587 === (9)))
{var inst_13566 = (state_13586[(8)]);var state_13586__$1 = state_13586;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13586__$1,(11),out,inst_13566);
} else
{if((state_val_13587 === (5)))
{var inst_13566 = (state_13586[(8)]);var inst_13563 = (state_13586[(7)]);var inst_13570 = cljs.core._EQ_.call(null,inst_13566,inst_13563);var state_13586__$1 = state_13586;if(inst_13570)
{var statearr_13599_13618 = state_13586__$1;(statearr_13599_13618[(1)] = (8));
} else
{var statearr_13600_13619 = state_13586__$1;(statearr_13600_13619[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13587 === (10)))
{var inst_13578 = (state_13586[(2)]);var state_13586__$1 = state_13586;var statearr_13601_13620 = state_13586__$1;(statearr_13601_13620[(2)] = inst_13578);
(statearr_13601_13620[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13587 === (8)))
{var inst_13563 = (state_13586[(7)]);var tmp13598 = inst_13563;var inst_13563__$1 = tmp13598;var state_13586__$1 = (function (){var statearr_13602 = state_13586;(statearr_13602[(7)] = inst_13563__$1);
return statearr_13602;
})();var statearr_13603_13621 = state_13586__$1;(statearr_13603_13621[(2)] = null);
(statearr_13603_13621[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6272__auto___13611,out))
;return ((function (switch__6207__auto__,c__6272__auto___13611,out){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_13607 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13607[(0)] = state_machine__6208__auto__);
(statearr_13607[(1)] = (1));
return statearr_13607;
});
var state_machine__6208__auto____1 = (function (state_13586){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_13586);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e13608){if((e13608 instanceof Object))
{var ex__6211__auto__ = e13608;var statearr_13609_13622 = state_13586;(statearr_13609_13622[(5)] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13586);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13608;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13623 = state_13586;
state_13586 = G__13623;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_13586){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_13586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__,c__6272__auto___13611,out))
})();var state__6274__auto__ = (function (){var statearr_13610 = f__6273__auto__.call(null);(statearr_13610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6272__auto___13611);
return statearr_13610;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6274__auto__);
});})(c__6272__auto___13611,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6272__auto___13758 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6272__auto___13758,out){
return (function (){var f__6273__auto__ = (function (){var switch__6207__auto__ = ((function (c__6272__auto___13758,out){
return (function (state_13728){var state_val_13729 = (state_13728[(1)]);if((state_val_13729 === (7)))
{var inst_13724 = (state_13728[(2)]);var state_13728__$1 = state_13728;var statearr_13730_13759 = state_13728__$1;(statearr_13730_13759[(2)] = inst_13724);
(statearr_13730_13759[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13729 === (1)))
{var inst_13691 = (new Array(n));var inst_13692 = inst_13691;var inst_13693 = (0);var state_13728__$1 = (function (){var statearr_13731 = state_13728;(statearr_13731[(7)] = inst_13693);
(statearr_13731[(8)] = inst_13692);
return statearr_13731;
})();var statearr_13732_13760 = state_13728__$1;(statearr_13732_13760[(2)] = null);
(statearr_13732_13760[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13729 === (4)))
{var inst_13696 = (state_13728[(9)]);var inst_13696__$1 = (state_13728[(2)]);var inst_13697 = (inst_13696__$1 == null);var inst_13698 = cljs.core.not.call(null,inst_13697);var state_13728__$1 = (function (){var statearr_13733 = state_13728;(statearr_13733[(9)] = inst_13696__$1);
return statearr_13733;
})();if(inst_13698)
{var statearr_13734_13761 = state_13728__$1;(statearr_13734_13761[(1)] = (5));
} else
{var statearr_13735_13762 = state_13728__$1;(statearr_13735_13762[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13729 === (15)))
{var inst_13718 = (state_13728[(2)]);var state_13728__$1 = state_13728;var statearr_13736_13763 = state_13728__$1;(statearr_13736_13763[(2)] = inst_13718);
(statearr_13736_13763[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13729 === (13)))
{var state_13728__$1 = state_13728;var statearr_13737_13764 = state_13728__$1;(statearr_13737_13764[(2)] = null);
(statearr_13737_13764[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13729 === (6)))
{var inst_13693 = (state_13728[(7)]);var inst_13714 = (inst_13693 > (0));var state_13728__$1 = state_13728;if(cljs.core.truth_(inst_13714))
{var statearr_13738_13765 = state_13728__$1;(statearr_13738_13765[(1)] = (12));
} else
{var statearr_13739_13766 = state_13728__$1;(statearr_13739_13766[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13729 === (3)))
{var inst_13726 = (state_13728[(2)]);var state_13728__$1 = state_13728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13728__$1,inst_13726);
} else
{if((state_val_13729 === (12)))
{var inst_13692 = (state_13728[(8)]);var inst_13716 = cljs.core.vec.call(null,inst_13692);var state_13728__$1 = state_13728;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13728__$1,(15),out,inst_13716);
} else
{if((state_val_13729 === (2)))
{var state_13728__$1 = state_13728;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13728__$1,(4),ch);
} else
{if((state_val_13729 === (11)))
{var inst_13708 = (state_13728[(2)]);var inst_13709 = (new Array(n));var inst_13692 = inst_13709;var inst_13693 = (0);var state_13728__$1 = (function (){var statearr_13740 = state_13728;(statearr_13740[(7)] = inst_13693);
(statearr_13740[(10)] = inst_13708);
(statearr_13740[(8)] = inst_13692);
return statearr_13740;
})();var statearr_13741_13767 = state_13728__$1;(statearr_13741_13767[(2)] = null);
(statearr_13741_13767[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13729 === (9)))
{var inst_13692 = (state_13728[(8)]);var inst_13706 = cljs.core.vec.call(null,inst_13692);var state_13728__$1 = state_13728;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13728__$1,(11),out,inst_13706);
} else
{if((state_val_13729 === (5)))
{var inst_13693 = (state_13728[(7)]);var inst_13701 = (state_13728[(11)]);var inst_13692 = (state_13728[(8)]);var inst_13696 = (state_13728[(9)]);var inst_13700 = (inst_13692[inst_13693] = inst_13696);var inst_13701__$1 = (inst_13693 + (1));var inst_13702 = (inst_13701__$1 < n);var state_13728__$1 = (function (){var statearr_13742 = state_13728;(statearr_13742[(12)] = inst_13700);
(statearr_13742[(11)] = inst_13701__$1);
return statearr_13742;
})();if(cljs.core.truth_(inst_13702))
{var statearr_13743_13768 = state_13728__$1;(statearr_13743_13768[(1)] = (8));
} else
{var statearr_13744_13769 = state_13728__$1;(statearr_13744_13769[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13729 === (14)))
{var inst_13721 = (state_13728[(2)]);var inst_13722 = cljs.core.async.close_BANG_.call(null,out);var state_13728__$1 = (function (){var statearr_13746 = state_13728;(statearr_13746[(13)] = inst_13721);
return statearr_13746;
})();var statearr_13747_13770 = state_13728__$1;(statearr_13747_13770[(2)] = inst_13722);
(statearr_13747_13770[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13729 === (10)))
{var inst_13712 = (state_13728[(2)]);var state_13728__$1 = state_13728;var statearr_13748_13771 = state_13728__$1;(statearr_13748_13771[(2)] = inst_13712);
(statearr_13748_13771[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13729 === (8)))
{var inst_13701 = (state_13728[(11)]);var inst_13692 = (state_13728[(8)]);var tmp13745 = inst_13692;var inst_13692__$1 = tmp13745;var inst_13693 = inst_13701;var state_13728__$1 = (function (){var statearr_13749 = state_13728;(statearr_13749[(7)] = inst_13693);
(statearr_13749[(8)] = inst_13692__$1);
return statearr_13749;
})();var statearr_13750_13772 = state_13728__$1;(statearr_13750_13772[(2)] = null);
(statearr_13750_13772[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6272__auto___13758,out))
;return ((function (switch__6207__auto__,c__6272__auto___13758,out){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_13754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13754[(0)] = state_machine__6208__auto__);
(statearr_13754[(1)] = (1));
return statearr_13754;
});
var state_machine__6208__auto____1 = (function (state_13728){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_13728);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e13755){if((e13755 instanceof Object))
{var ex__6211__auto__ = e13755;var statearr_13756_13773 = state_13728;(statearr_13756_13773[(5)] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13728);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13755;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13774 = state_13728;
state_13728 = G__13774;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_13728){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_13728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__,c__6272__auto___13758,out))
})();var state__6274__auto__ = (function (){var statearr_13757 = f__6273__auto__.call(null);(statearr_13757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6272__auto___13758);
return statearr_13757;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6274__auto__);
});})(c__6272__auto___13758,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6272__auto___13917 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6272__auto___13917,out){
return (function (){var f__6273__auto__ = (function (){var switch__6207__auto__ = ((function (c__6272__auto___13917,out){
return (function (state_13887){var state_val_13888 = (state_13887[(1)]);if((state_val_13888 === (7)))
{var inst_13883 = (state_13887[(2)]);var state_13887__$1 = state_13887;var statearr_13889_13918 = state_13887__$1;(statearr_13889_13918[(2)] = inst_13883);
(statearr_13889_13918[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13888 === (1)))
{var inst_13846 = [];var inst_13847 = inst_13846;var inst_13848 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13887__$1 = (function (){var statearr_13890 = state_13887;(statearr_13890[(7)] = inst_13848);
(statearr_13890[(8)] = inst_13847);
return statearr_13890;
})();var statearr_13891_13919 = state_13887__$1;(statearr_13891_13919[(2)] = null);
(statearr_13891_13919[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13888 === (4)))
{var inst_13851 = (state_13887[(9)]);var inst_13851__$1 = (state_13887[(2)]);var inst_13852 = (inst_13851__$1 == null);var inst_13853 = cljs.core.not.call(null,inst_13852);var state_13887__$1 = (function (){var statearr_13892 = state_13887;(statearr_13892[(9)] = inst_13851__$1);
return statearr_13892;
})();if(inst_13853)
{var statearr_13893_13920 = state_13887__$1;(statearr_13893_13920[(1)] = (5));
} else
{var statearr_13894_13921 = state_13887__$1;(statearr_13894_13921[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13888 === (15)))
{var inst_13877 = (state_13887[(2)]);var state_13887__$1 = state_13887;var statearr_13895_13922 = state_13887__$1;(statearr_13895_13922[(2)] = inst_13877);
(statearr_13895_13922[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13888 === (13)))
{var state_13887__$1 = state_13887;var statearr_13896_13923 = state_13887__$1;(statearr_13896_13923[(2)] = null);
(statearr_13896_13923[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13888 === (6)))
{var inst_13847 = (state_13887[(8)]);var inst_13872 = inst_13847.length;var inst_13873 = (inst_13872 > (0));var state_13887__$1 = state_13887;if(cljs.core.truth_(inst_13873))
{var statearr_13897_13924 = state_13887__$1;(statearr_13897_13924[(1)] = (12));
} else
{var statearr_13898_13925 = state_13887__$1;(statearr_13898_13925[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13888 === (3)))
{var inst_13885 = (state_13887[(2)]);var state_13887__$1 = state_13887;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13887__$1,inst_13885);
} else
{if((state_val_13888 === (12)))
{var inst_13847 = (state_13887[(8)]);var inst_13875 = cljs.core.vec.call(null,inst_13847);var state_13887__$1 = state_13887;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13887__$1,(15),out,inst_13875);
} else
{if((state_val_13888 === (2)))
{var state_13887__$1 = state_13887;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13887__$1,(4),ch);
} else
{if((state_val_13888 === (11)))
{var inst_13855 = (state_13887[(10)]);var inst_13851 = (state_13887[(9)]);var inst_13865 = (state_13887[(2)]);var inst_13866 = [];var inst_13867 = inst_13866.push(inst_13851);var inst_13847 = inst_13866;var inst_13848 = inst_13855;var state_13887__$1 = (function (){var statearr_13899 = state_13887;(statearr_13899[(11)] = inst_13867);
(statearr_13899[(7)] = inst_13848);
(statearr_13899[(12)] = inst_13865);
(statearr_13899[(8)] = inst_13847);
return statearr_13899;
})();var statearr_13900_13926 = state_13887__$1;(statearr_13900_13926[(2)] = null);
(statearr_13900_13926[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13888 === (9)))
{var inst_13847 = (state_13887[(8)]);var inst_13863 = cljs.core.vec.call(null,inst_13847);var state_13887__$1 = state_13887;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13887__$1,(11),out,inst_13863);
} else
{if((state_val_13888 === (5)))
{var inst_13848 = (state_13887[(7)]);var inst_13855 = (state_13887[(10)]);var inst_13851 = (state_13887[(9)]);var inst_13855__$1 = f.call(null,inst_13851);var inst_13856 = cljs.core._EQ_.call(null,inst_13855__$1,inst_13848);var inst_13857 = cljs.core.keyword_identical_QMARK_.call(null,inst_13848,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13858 = (inst_13856) || (inst_13857);var state_13887__$1 = (function (){var statearr_13901 = state_13887;(statearr_13901[(10)] = inst_13855__$1);
return statearr_13901;
})();if(cljs.core.truth_(inst_13858))
{var statearr_13902_13927 = state_13887__$1;(statearr_13902_13927[(1)] = (8));
} else
{var statearr_13903_13928 = state_13887__$1;(statearr_13903_13928[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13888 === (14)))
{var inst_13880 = (state_13887[(2)]);var inst_13881 = cljs.core.async.close_BANG_.call(null,out);var state_13887__$1 = (function (){var statearr_13905 = state_13887;(statearr_13905[(13)] = inst_13880);
return statearr_13905;
})();var statearr_13906_13929 = state_13887__$1;(statearr_13906_13929[(2)] = inst_13881);
(statearr_13906_13929[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13888 === (10)))
{var inst_13870 = (state_13887[(2)]);var state_13887__$1 = state_13887;var statearr_13907_13930 = state_13887__$1;(statearr_13907_13930[(2)] = inst_13870);
(statearr_13907_13930[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13888 === (8)))
{var inst_13855 = (state_13887[(10)]);var inst_13851 = (state_13887[(9)]);var inst_13847 = (state_13887[(8)]);var inst_13860 = inst_13847.push(inst_13851);var tmp13904 = inst_13847;var inst_13847__$1 = tmp13904;var inst_13848 = inst_13855;var state_13887__$1 = (function (){var statearr_13908 = state_13887;(statearr_13908[(7)] = inst_13848);
(statearr_13908[(14)] = inst_13860);
(statearr_13908[(8)] = inst_13847__$1);
return statearr_13908;
})();var statearr_13909_13931 = state_13887__$1;(statearr_13909_13931[(2)] = null);
(statearr_13909_13931[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6272__auto___13917,out))
;return ((function (switch__6207__auto__,c__6272__auto___13917,out){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_13913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13913[(0)] = state_machine__6208__auto__);
(statearr_13913[(1)] = (1));
return statearr_13913;
});
var state_machine__6208__auto____1 = (function (state_13887){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_13887);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e13914){if((e13914 instanceof Object))
{var ex__6211__auto__ = e13914;var statearr_13915_13932 = state_13887;(statearr_13915_13932[(5)] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13887);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13914;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13933 = state_13887;
state_13887 = G__13933;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_13887){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_13887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__,c__6272__auto___13917,out))
})();var state__6274__auto__ = (function (){var statearr_13916 = f__6273__auto__.call(null);(statearr_13916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6272__auto___13917);
return statearr_13916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6274__auto__);
});})(c__6272__auto___13917,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map