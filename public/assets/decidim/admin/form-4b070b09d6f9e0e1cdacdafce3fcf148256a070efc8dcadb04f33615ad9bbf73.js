"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();!function(e){var n=function(){function e(){var n=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];_classCallCheck(this,e),this.ruleCheckboxes=n.ruleCheckboxes,this._runAll()}return _createClass(e,[{key:"_runAll",value:function(){var e=this;this.ruleCheckboxes.each(function(n,t){e._bindEvent(t),e.run(t)})}},{key:"_bindEvent",value:function(e){var n=this;$(e).on("change",function(e){n.run(e.target)})}},{key:"run",value:function(e){var n=this;this.toggleTextInput(e),$(e).prop("checked")&&this.ruleCheckboxes.filter(function(n,t){return t!==e}).prop("checked",!1).each(function(e,t){n.toggleTextInput(t)})}},{key:"toggleTextInput",value:function(e){var n=$(e).closest("div").next();$(e).prop("checked")?n.slideDown():n.slideUp()}}]),e}();e.DecidimAdmin=e.DecidimAdmin||{},e.DecidimAdmin.BudgetRuleTogglerComponent=n}(window),new(0,window.DecidimAdmin.BudgetRuleTogglerComponent)({ruleCheckboxes:$("input[id^='component_settings_vote_rule_']")}).run(),$(function(){$(".readonly_container input").click(function(e){return e.preventDefault(),!1});var e,n=$("input#component_settings_amendments_enabled");n.length>0&&(e=$(".amendments_wizard_help_text_container, .amendments_visibility_container, .amendment_creation_enabled_container, .amendment_reaction_enabled_container, .amendment_promotion_enabled_container"),n.is(":not(:checked)")&&e.hide(),n.click(function(){e.toggle()}))});