// Compiled by ClojureScript 0.0-2307
goog.provide('heritage.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
heritage.core.questions = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"answers","answers",-2066449770),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),"Tabs or Spaces?",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),"Tabs",new cljs.core.Keyword(null,"spaces","spaces",365984563),"Spaces"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),"Single quote or Double quote?",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"single","single",1551466437),"Single",new cljs.core.Keyword(null,"double","double",884886883),"Double"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),"Plural or Singular",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"plural","plural",-881591021),"Plural",new cljs.core.Keyword(null,"singular","singular",1409933445),"Singular"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),"Indentation Level: 2 spaces or 4 spaces",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentArrayMap(null, 2, [(2),"2 Spaces",(4),"4 Spaces"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),"Continuation Indent Level: 0.5x, 1.0x or 2.0x",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentArrayMap(null, 3, [0.5,"0.5x",1.0,"1.0x",2.0,"2.0x"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),"Function opening brace placement",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"newline","newline",1790071323),"Next Line",new cljs.core.Keyword(null,"lineend","lineend",1331476285),"Line End"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),"Period separator placement",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"newline","newline",1790071323),"Next Line",new cljs.core.Keyword(null,"lineend","lineend",1331476285),"Line End"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),"Else placement",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"newline","newline",1790071323),"Next Line",new cljs.core.Keyword(null,"currentline","currentline",-2010307164),"With '{'"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),"New block braces",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"always","always",-1772028770),"Always",new cljs.core.Keyword(null,"necessary","necessary",-14945533),"When necessary"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),"Variable naming",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"camel","camel",-126762952),"Camel Case",new cljs.core.Keyword(null,"snake","snake",-244377242),"Snake Case"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),"File naming",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"camel","camel",-126762952),"Camel Case",new cljs.core.Keyword(null,"snake","snake",-244377242),"Snake Case",new cljs.core.Keyword(null,"spinal","spinal",-1543710008),"Spinal Case",new cljs.core.Keyword(null,"pascal","pascal",-892152188),"Pascal Case"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),"Var statements",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"one","one",935007904),"One",new cljs.core.Keyword(null,"multiple","multiple",1244445549),"Multiple"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),"Leading Commas?",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"yes","yes",182838819),"Yes",new cljs.core.Keyword(null,"no","no",-390373634),"No"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),"Semicolons?",new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"yes","yes",182838819),"Yes",new cljs.core.Keyword(null,"no","no",-390373634),"No"], null)], null)], null)], null));
heritage.core.question_el = (function question_el(question,owner){if(typeof heritage.core.t14876 !== 'undefined')
{} else
{
/**
* @constructor
*/
heritage.core.t14876 = (function (owner,question,question_el,meta14877){
this.owner = owner;
this.question = question;
this.question_el = question_el;
this.meta14877 = meta14877;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
heritage.core.t14876.cljs$lang$type = true;
heritage.core.t14876.cljs$lang$ctorStr = "heritage.core/t14876";
heritage.core.t14876.cljs$lang$ctorPrWriter = (function (this__8508__auto__,writer__8509__auto__,opt__8510__auto__){return cljs.core._write.call(null,writer__8509__auto__,"heritage.core/t14876");
});
heritage.core.t14876.prototype.om$core$IRender$ = true;
heritage.core.t14876.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(self__.question));
});
heritage.core.t14876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14878){var self__ = this;
var _14878__$1 = this;return self__.meta14877;
});
heritage.core.t14876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14878,meta14877__$1){var self__ = this;
var _14878__$1 = this;return (new heritage.core.t14876(self__.owner,self__.question,self__.question_el,meta14877__$1));
});
heritage.core.__GT_t14876 = (function __GT_t14876(owner__$1,question__$1,question_el__$1,meta14877){return (new heritage.core.t14876(owner__$1,question__$1,question_el__$1,meta14877));
});
}
return (new heritage.core.t14876(owner,question,question_el,null));
});
heritage.core.questions_el = (function questions_el(data,owner){if(typeof heritage.core.t14882 !== 'undefined')
{} else
{
/**
* @constructor
*/
heritage.core.t14882 = (function (owner,data,questions_el,meta14883){
this.owner = owner;
this.data = data;
this.questions_el = questions_el;
this.meta14883 = meta14883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
heritage.core.t14882.cljs$lang$type = true;
heritage.core.t14882.cljs$lang$ctorStr = "heritage.core/t14882";
heritage.core.t14882.cljs$lang$ctorPrWriter = (function (this__8508__auto__,writer__8509__auto__,opt__8510__auto__){return cljs.core._write.call(null,writer__8509__auto__,"heritage.core/t14882");
});
heritage.core.t14882.prototype.om$core$IRender$ = true;
heritage.core.t14882.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,heritage.core.question_el,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
heritage.core.t14882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14884){var self__ = this;
var _14884__$1 = this;return self__.meta14883;
});
heritage.core.t14882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14884,meta14883__$1){var self__ = this;
var _14884__$1 = this;return (new heritage.core.t14882(self__.owner,self__.data,self__.questions_el,meta14883__$1));
});
heritage.core.__GT_t14882 = (function __GT_t14882(owner__$1,data__$1,questions_el__$1,meta14883){return (new heritage.core.t14882(owner__$1,data__$1,questions_el__$1,meta14883));
});
}
return (new heritage.core.t14882(owner,data,questions_el,null));
});
heritage.core.answer_el = (function answer_el(answer,owner){if(typeof heritage.core.t14888 !== 'undefined')
{} else
{
/**
* @constructor
*/
heritage.core.t14888 = (function (owner,answer,answer_el,meta14889){
this.owner = owner;
this.answer = answer;
this.answer_el = answer_el;
this.meta14889 = meta14889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
heritage.core.t14888.cljs$lang$type = true;
heritage.core.t14888.cljs$lang$ctorStr = "heritage.core/t14888";
heritage.core.t14888.cljs$lang$ctorPrWriter = (function (this__8508__auto__,writer__8509__auto__,opt__8510__auto__){return cljs.core._write.call(null,writer__8509__auto__,"heritage.core/t14888");
});
heritage.core.t14888.prototype.om$core$IRender$ = true;
heritage.core.t14888.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li(null,self__.answer);
});
heritage.core.t14888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14890){var self__ = this;
var _14890__$1 = this;return self__.meta14889;
});
heritage.core.t14888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14890,meta14889__$1){var self__ = this;
var _14890__$1 = this;return (new heritage.core.t14888(self__.owner,self__.answer,self__.answer_el,meta14889__$1));
});
heritage.core.__GT_t14888 = (function __GT_t14888(owner__$1,answer__$1,answer_el__$1,meta14889){return (new heritage.core.t14888(owner__$1,answer__$1,answer_el__$1,meta14889));
});
}
return (new heritage.core.t14888(owner,answer,answer_el,null));
});
heritage.core.answers_el = (function answers_el(data,owner){if(typeof heritage.core.t14894 !== 'undefined')
{} else
{
/**
* @constructor
*/
heritage.core.t14894 = (function (owner,data,answers_el,meta14895){
this.owner = owner;
this.data = data;
this.answers_el = answers_el;
this.meta14895 = meta14895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
heritage.core.t14894.cljs$lang$type = true;
heritage.core.t14894.cljs$lang$ctorStr = "heritage.core/t14894";
heritage.core.t14894.cljs$lang$ctorPrWriter = (function (this__8508__auto__,writer__8509__auto__,opt__8510__auto__){return cljs.core._write.call(null,writer__8509__auto__,"heritage.core/t14894");
});
heritage.core.t14894.prototype.om$core$IRender$ = true;
heritage.core.t14894.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,heritage.core.answer_el,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(self__.data)));
});
heritage.core.t14894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14896){var self__ = this;
var _14896__$1 = this;return self__.meta14895;
});
heritage.core.t14894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14896,meta14895__$1){var self__ = this;
var _14896__$1 = this;return (new heritage.core.t14894(self__.owner,self__.data,self__.answers_el,meta14895__$1));
});
heritage.core.__GT_t14894 = (function __GT_t14894(owner__$1,data__$1,answers_el__$1,meta14895){return (new heritage.core.t14894(owner__$1,data__$1,answers_el__$1,meta14895));
});
}
return (new heritage.core.t14894(owner,data,answers_el,null));
});
heritage.core.add_answer = (function add_answer(app,owner,e){var new_answer = om.core.get_node.call(null,owner,"new-answer").value;if(cljs.core.truth_(new_answer))
{return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"answers","answers",-2066449770),((function (new_answer){
return (function (p1__14897_SHARP_){return cljs.core.conj.call(null,p1__14897_SHARP_,new_answer);
});})(new_answer))
);
} else
{return null;
}
});
heritage.core.empty_answer_el = (function empty_answer_el(app,owner){if(typeof heritage.core.t14901 !== 'undefined')
{} else
{
/**
* @constructor
*/
heritage.core.t14901 = (function (owner,app,empty_answer_el,meta14902){
this.owner = owner;
this.app = app;
this.empty_answer_el = empty_answer_el;
this.meta14902 = meta14902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
heritage.core.t14901.cljs$lang$type = true;
heritage.core.t14901.cljs$lang$ctorStr = "heritage.core/t14901";
heritage.core.t14901.cljs$lang$ctorPrWriter = (function (this__8508__auto__,writer__8509__auto__,opt__8510__auto__){return cljs.core._write.call(null,writer__8509__auto__,"heritage.core/t14901");
});
heritage.core.t14901.prototype.om$core$IRender$ = true;
heritage.core.t14901.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,om.dom.input.call(null,{"type": "text", "ref": "new-answer"}),React.DOM.button({"onClick": cljs.core.partial.call(null,heritage.core.add_answer,self__.app,self__.owner)},"+"));
});
heritage.core.t14901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14903){var self__ = this;
var _14903__$1 = this;return self__.meta14902;
});
heritage.core.t14901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14903,meta14902__$1){var self__ = this;
var _14903__$1 = this;return (new heritage.core.t14901(self__.owner,self__.app,self__.empty_answer_el,meta14902__$1));
});
heritage.core.__GT_t14901 = (function __GT_t14901(owner__$1,app__$1,empty_answer_el__$1,meta14902){return (new heritage.core.t14901(owner__$1,app__$1,empty_answer_el__$1,meta14902));
});
}
return (new heritage.core.t14901(owner,app,empty_answer_el,null));
});
heritage.core.enter_question_el = (function enter_question_el(data,owner){if(typeof heritage.core.t14907 !== 'undefined')
{} else
{
/**
* @constructor
*/
heritage.core.t14907 = (function (owner,data,enter_question_el,meta14908){
this.owner = owner;
this.data = data;
this.enter_question_el = enter_question_el;
this.meta14908 = meta14908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
heritage.core.t14907.cljs$lang$type = true;
heritage.core.t14907.cljs$lang$ctorStr = "heritage.core/t14907";
heritage.core.t14907.cljs$lang$ctorPrWriter = (function (this__8508__auto__,writer__8509__auto__,opt__8510__auto__){return cljs.core._write.call(null,writer__8509__auto__,"heritage.core/t14907");
});
heritage.core.t14907.prototype.om$core$IRender$ = true;
heritage.core.t14907.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.label({"htmlFor": "title"},"Title"),om.dom.input.call(null,{"name": "title", "type": "text"}),React.DOM.label({"htmlFor": "description"},"Description"),om.dom.textarea.call(null,{"name": "description"}),om.core.build.call(null,heritage.core.empty_answer_el,self__.data),om.core.build.call(null,heritage.core.answers_el,self__.data));
});
heritage.core.t14907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14909){var self__ = this;
var _14909__$1 = this;return self__.meta14908;
});
heritage.core.t14907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14909,meta14908__$1){var self__ = this;
var _14909__$1 = this;return (new heritage.core.t14907(self__.owner,self__.data,self__.enter_question_el,meta14908__$1));
});
heritage.core.__GT_t14907 = (function __GT_t14907(owner__$1,data__$1,enter_question_el__$1,meta14908){return (new heritage.core.t14907(owner__$1,data__$1,enter_question_el__$1,meta14908));
});
}
return (new heritage.core.t14907(owner,data,enter_question_el,null));
});
om.core.root.call(null,heritage.core.enter_question_el,heritage.core.questions,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("heritage")], null));

//# sourceMappingURL=core.js.map