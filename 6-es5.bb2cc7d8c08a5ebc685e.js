var __extends=this&&this.__extends||function(){var t=function(e,c){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var c in e)e.hasOwnProperty(c)&&(t[c]=e[c])})(e,c)};return function(e,c){function o(){this.constructor=e}t(e,c),e.prototype=null===c?Object.create(c):(o.prototype=c.prototype,new o)}}();(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{QFu5:function(t,e,c){var o,n;void 0===(n="function"==typeof(o=function(){var t="undefined"!=typeof window&&void 0!==window.innerHeight,e=function e(c,o){var n,r,i,d,s,a,u,l,p,b,h,f=!1,m={},g={},U=[0,0];if("undefined"!=typeof jQuery&&c instanceof jQuery&&(c=c.get(0)),"object"!=typeof c||1!==c.nodeType)throw new Error("First argument must be an element");for(c.getAttribute("data-withinviewport-settings")&&window.JSON&&(m=JSON.parse(c.getAttribute("data-withinviewport-settings"))),g.container=(n="string"==typeof o?{sides:o}:o||{}).container||m.container||e.defaults.container||window,g.sides=n.sides||m.sides||e.defaults.sides||"all",g.top=n.top||m.top||e.defaults.top||0,g.right=n.right||m.right||e.defaults.right||0,g.bottom=n.bottom||m.bottom||e.defaults.bottom||0,g.left=n.left||m.left||e.defaults.left||0,"undefined"!=typeof jQuery&&g.container instanceof jQuery&&(g.container=g.container.get(0)),g.container!==document.body&&1===g.container.nodeType||(g.container=window),i=g.container===window,r={top:function(){return i?d.top>=g.top:d.top>=a-(a-s.top)+g.top},right:function(){return i?d.right<=s.right+u-g.right:d.right<=s.right-U[0]-g.right},bottom:function(){var e=0;return i?t?e=g.container.innerHeight:document&&document.documentElement&&(e=document.documentElement.clientHeight):e=s.bottom,d.bottom<=e-U[1]-g.bottom},left:function(){return i?d.left>=g.left:d.left>=u-(u-s.left)+g.left},all:function(){return r.top()&&r.bottom()&&r.left()&&r.right()}},d=c.getBoundingClientRect(),i?(s=document.documentElement.getBoundingClientRect(),a=document.body.scrollTop,u=window.scrollX||document.body.scrollLeft):(s=g.container.getBoundingClientRect(),a=g.container.scrollTop,u=g.container.scrollLeft),u&&(U[0]=18),a&&(U[1]=16),l=/^top$|^right$|^bottom$|^left$|^all$/,h=(p=g.sides.split(" ")).length;h--;)if(b=p[h].toLowerCase(),l.test(b)){if(!r[b]()){f=!1;break}f=!0}return f};return e.prototype.defaults={container:"undefined"!=typeof document?document.body:{},sides:"all",top:0,right:0,bottom:0,left:0},e.defaults=e.prototype.defaults,e.prototype.top=function(t){return e(t,"top")},e.prototype.right=function(t){return e(t,"right")},e.prototype.bottom=function(t){return e(t,"bottom")},e.prototype.left=function(t){return e(t,"left")},e})?o.apply(e,[]):o)||(t.exports=n)},ssdw:function(t,e,c){"use strict";c.r(e);var o=c("ofXK"),n=c("fXoL"),r=c("tyNb"),i=c("t+ET"),d=c("1kSV"),s=c("QFu5"),a=c.n(s),u=["tourStep"],l=["tourStep",""],p=[1,"tour-step-content"],b=[1,"tour-step-navigation"],h=["class","btn btn-sm btn-default",3,"click",4,"ngIf"],f=[1,"btn","btn-sm","btn-default",3,"click"];function m(t,e){if(1&t){var c=n.ec();n.dc(0,"button",f),n.oc("click",(function(t){return n.Hc(c),n.rc(2).tourService.prev()})),n.Uc(1),n.bc()}if(2&t){var o=n.rc().step;n.Kc(1),n.Wc(" \xab ",null==o?null:o.prevBtnTitle," ")}}function g(t,e){if(1&t){var c=n.ec();n.dc(0,"button",f),n.oc("click",(function(t){return n.Hc(c),n.rc(2).tourService.next()})),n.Uc(1),n.bc()}if(2&t){var o=n.rc().step;n.Kc(1),n.Wc(" ",null==o?null:o.nextBtnTitle," \xbb ")}}function U(t,e){if(1&t){var c=n.ec();n.dc(0,"p",p),n.Uc(1),n.bc(),n.dc(2,"div",b),n.Sc(3,m,2,1,"button",h),n.Sc(4,g,2,1,"button",h),n.dc(5,"button",f),n.oc("click",(function(t){return n.Hc(c),n.rc().tourService.end()})),n.Uc(6),n.bc(),n.bc()}if(2&t){var o=e.step,r=n.rc();n.Kc(1),n.Vc(null==o?null:o.content),n.Kc(3),n.wc("ngIf",r.tourService.hasPrev(o)),n.Kc(4),n.wc("ngIf",r.tourService.hasNext(o)),n.Kc(6),n.Wc(" ",null==o?null:o.endBtnTitle," ")}}var v,y=((v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e}(i.c)).ngInjectableDef=n.Sb({token:v,factory:function(t){return S(t||v)},providedIn:"root"}),v),S=n.fc(y);y.ngInjectableDef=Object(n.Sb)({factory:function(){return new y(Object(n.mc)(r.b))},token:y,providedIn:"root"});var T,w,I,A,x,D=((w=function(){}).ngInjectableDef=n.Sb({token:w,factory:function(t){return new(t||w)},providedIn:null}),w),k=((T=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e}(d.a)).ngDirectiveDef=n.Rb({type:T,selectors:[["","tourAnchor",""]],factory:function(t){return B(t||T)},features:[n.Fb]}),T),B=n.fc(k),P=((x=function(){function t(t,e,c,o){this.tourService=t,this.tourStepTemplate=e,this.element=c,this.popoverDirective=o,this.popoverDirective.autoClose=!1,this.popoverDirective.triggers="",this.popoverDirective.toggle=function(){}}return t.prototype.ngOnInit=function(){this.tourService.register(this.tourAnchor,this)},t.prototype.ngOnDestroy=function(){this.tourService.unregister(this.tourAnchor)},t.prototype.showTourStep=function(t){this.isActive=!0,this.popoverDirective.ngbPopover=this.tourStepTemplate.template,this.popoverDirective.popoverTitle=t.title,this.popoverDirective.container="body",this.popoverDirective.placement=(t.placement||"top").replace("before","left").replace("after","right").replace("below","bottom").replace("above","top"),t.prevBtnTitle=t.prevBtnTitle||"Prev",t.nextBtnTitle=t.nextBtnTitle||"Next",t.endBtnTitle=t.endBtnTitle||"End",this.popoverDirective.open({step:t}),t.preventScrolling||(a()(this.element.nativeElement,{sides:"bottom"})?a()(this.element.nativeElement,{sides:"left top right"})||this.element.nativeElement.scrollIntoView(!0):this.element.nativeElement.scrollIntoView(!1))},t.prototype.hideTourStep=function(){this.isActive=!1,this.popoverDirective.close()},t}()).ngDirectiveDef=n.Rb({type:x,selectors:[["","tourAnchor",""]],factory:function(t){return new(t||x)(n.Wb(y),n.Wb(D),n.Wb(n.q),n.Wb(k,1))},hostBindings:function(t,e,c){1&t&&(n.Ib(1),n.Qc()),2&t&&(n.Nb("touranchor--is-active",e.isActive),n.Rc())},inputs:{tourAnchor:"tourAnchor"}}),x),E=((A=function(t){function e(e,c){var o=this;return(o=t.call(this,c)||this).tourStepTemplateService=e,o.tourService=c,o}return __extends(e,t),e.prototype.ngAfterContentInit=function(){this.tourStepTemplateService.template=this.stepTemplate||this.stepTemplateContent||this.defaultTourStepTemplate},e}(i.a)).ngComponentDef=n.Qb({type:A,selectors:[["tour-step-template"]],factory:function(t){return new(t||A)(n.Wb(D),n.Wb(y))},contentQueries:function(t,e,c){var o;1&t&&n.Ob(c,n.Z,!0),2&t&&n.Ec(o=n.pc())&&(e.stepTemplateContent=o.first)},viewQuery:function(t,e){var c;1&t&&n.Nc(u,!0,n.Z),2&t&&n.Ec(c=n.qc())&&(e.defaultTourStepTemplate=c.first)},inputs:{stepTemplate:"stepTemplate"},features:[n.Fb],consts:2,vars:0,template:function(t,e){1&t&&n.Sc(0,U,7,4,"ng-template",null,l,n.Tc)},directives:[o.m],encapsulation:2}),A),O=((I=function(){function t(){}return t.forRoot=function(){return{ngModule:t,providers:[D].concat(i.b.forRoot().providers,[y])}},t}()).ngModuleDef=n.Ub({type:I}),I);O.ngInjectorDef=n.Tb({factory:function(t){return new(t||O)},imports:[[o.c,d.b]]});var N,C,R,_=["tourAnchor","angular-ui-tour","href","http://benmarch.github.io/angular-ui-tour"],j=["href","https://ng-bootstrap.github.io"],H=["tourAnchor","installation"],W=["tourAnchor","usage"],$=["tourAnchor","tourService.start"],Q=["href","https://github.com/isaacplmann/ngx-tour/tree/master/src/app/ng-bootstrap"],M=[1,"table"],K=["tourAnchor","config.anchorId"],F=["tourAnchor","config.route"],z=["tourAnchor","config.nextStep"],X=["tourAnchor","config.placement.default"],Y=["href","https://ng-bootstrap.github.io/#/components/popover/api#NgbPopover"],L=["tourAnchor","config.buttons.custom"],V=["tourAnchor","hotkeys"],J=["tourAnchor","events"],q=["tourAnchor","template"],G=((N=function(){}).ngComponentDef=n.Qb({type:N,selectors:[["docs"]],factory:function(t){return new(t||N)},consts:377,vars:8,template:function(t,e){1&t&&(n.dc(0,"h2"),n.Uc(1,"About"),n.bc(),n.dc(2,"p"),n.Uc(3,"This is a product tour library built with Angular (2+). It's inspired by "),n.dc(4,"a",_),n.Uc(5,"angular-ui-tour"),n.bc(),n.Uc(6,"."),n.bc(),n.dc(7,"p"),n.dc(8,"code"),n.Uc(9,"TourNgBootstrapModule"),n.bc(),n.Uc(10," is an implementation of the tour ui that uses "),n.dc(11,"a",j),n.Uc(12,"NgBootstrap"),n.bc(),n.Uc(13," popovers to display tour steps."),n.bc(),n.dc(14,"h2",H),n.Uc(15,"Installation"),n.bc(),n.dc(16,"ol"),n.dc(17,"li"),n.dc(18,"code"),n.Uc(19,"npm install ngx-tour-core ngx-tour-ng-bootstrap @ng-bootstrap/ng-bootstrap"),n.bc(),n.bc(),n.dc(20,"li"),n.Uc(21,"Import "),n.dc(22,"code"),n.Uc(23,"TourNgBootstrapModule.forRoot()"),n.bc(),n.Uc(24," into your app module"),n.bc(),n.dc(25,"li"),n.Uc(26,"Make sure "),n.dc(27,"code"),n.Uc(28,"RouterModule"),n.bc(),n.Uc(29," is imported in your app module"),n.bc(),n.dc(30,"li"),n.Uc(31,"Include bootstrap css somehow - i.e. in your "),n.dc(32,"code"),n.Uc(33,"index.html"),n.bc(),n.Uc(34," add this line: "),n.Xb(35,"br"),n.dc(36,"code"),n.Uc(37,'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">'),n.bc(),n.bc(),n.bc(),n.dc(38,"h2",W),n.Uc(39,"Usage"),n.bc(),n.dc(40,"ol"),n.dc(41,"li"),n.Uc(42,"Add "),n.dc(43,"code"),n.Uc(44,"<tour-step-template></tour-step-template>"),n.bc(),n.Uc(45," to your root app component"),n.bc(),n.dc(46,"li"),n.Uc(47," Define anchor points for the tour steps by adding the "),n.dc(48,"code"),n.Uc(49,"tourAnchor"),n.bc(),n.Uc(50," directive throughout your app. "),n.dc(51,"pre"),n.dc(52,"code"),n.Uc(53,'<div tourAnchor="some.anchor.id">...</div>'),n.bc(),n.bc(),n.bc(),n.dc(54,"li"),n.Uc(55," Define your tour steps using "),n.dc(56,"code"),n.Uc(57,"tourService.initialize(steps)"),n.bc(),n.dc(58,"pre"),n.Uc(59),n.bc(),n.bc(),n.dc(60,"li"),n.Uc(61,"Start the tour with "),n.dc(62,"code",$),n.Uc(63,"tourService.start()"),n.bc(),n.bc(),n.dc(64,"li"),n.Uc(65,"Check out the "),n.dc(66,"a",Q),n.Uc(67,"demo source code"),n.bc(),n.Uc(68," for an example."),n.bc(),n.bc(),n.dc(69,"h2"),n.Uc(70,"TourService"),n.bc(),n.dc(71,"p"),n.Uc(72,"The "),n.dc(73,"code"),n.Uc(74,"TourService"),n.bc(),n.Uc(75," controls the tour. Some key functions include:"),n.bc(),n.dc(76,"dl"),n.dc(77,"dt"),n.Uc(78,"start()"),n.bc(),n.dc(79,"dd"),n.Uc(80,"Starts the tour"),n.bc(),n.dc(81,"dt"),n.Uc(82,"startAt(stepId: number | string)"),n.bc(),n.dc(83,"dd"),n.Uc(84,"Start the tour at the step with stepId or at the specified index"),n.bc(),n.dc(85,"dt"),n.Uc(86,"end()"),n.bc(),n.dc(87,"dd"),n.Uc(88,"Ends the tour"),n.bc(),n.dc(89,"dt"),n.Uc(90,"pause()"),n.bc(),n.dc(91,"dd"),n.Uc(92,"Pauses the tour"),n.bc(),n.dc(93,"dt"),n.Uc(94,"resume()"),n.bc(),n.dc(95,"dd"),n.Uc(96,"Resumes the tour"),n.bc(),n.dc(97,"dt"),n.Uc(98,"next()"),n.bc(),n.dc(99,"dd"),n.Uc(100,"Goes to the next step"),n.bc(),n.dc(101,"dt"),n.Uc(102,"prev()"),n.bc(),n.dc(103,"dd"),n.Uc(104,"Goes to the previous step"),n.bc(),n.bc(),n.dc(105,"h2"),n.Uc(106,"Step Configuration"),n.bc(),n.dc(107,"p"),n.Uc(108,"Each step can have the following properties."),n.bc(),n.dc(109,"table",M),n.dc(110,"thead"),n.dc(111,"tr"),n.dc(112,"th"),n.Uc(113,"Name"),n.bc(),n.dc(114,"th"),n.Uc(115,"Type"),n.bc(),n.dc(116,"th"),n.Uc(117,"Default"),n.bc(),n.dc(118,"th"),n.Uc(119,"Description"),n.bc(),n.bc(),n.bc(),n.dc(120,"tbody"),n.dc(121,"tr"),n.dc(122,"td"),n.Uc(123,"stepId"),n.bc(),n.dc(124,"td"),n.Uc(125,"string"),n.bc(),n.dc(126,"td"),n.Uc(127,'""'),n.bc(),n.dc(128,"td"),n.Uc(129,"A unique identifier for the step"),n.bc(),n.bc(),n.dc(130,"tr",K),n.dc(131,"td"),n.Uc(132,"anchorId"),n.bc(),n.dc(133,"td"),n.Uc(134,"string"),n.bc(),n.dc(135,"td"),n.Uc(136,"required"),n.bc(),n.dc(137,"td"),n.Uc(138,"The anchor to which the step will be attached"),n.bc(),n.bc(),n.dc(139,"tr"),n.dc(140,"td"),n.Uc(141,"title"),n.bc(),n.dc(142,"td"),n.Uc(143,"string"),n.bc(),n.dc(144,"td"),n.Uc(145,'""'),n.bc(),n.dc(146,"td"),n.Uc(147,"The title of the tour step"),n.bc(),n.bc(),n.dc(148,"tr"),n.dc(149,"td"),n.Uc(150,"content"),n.bc(),n.dc(151,"td"),n.Uc(152,"string"),n.bc(),n.dc(153,"td"),n.Uc(154,'""'),n.bc(),n.dc(155,"td"),n.Uc(156,"The content text of the tour step"),n.bc(),n.bc(),n.dc(157,"tr",F),n.dc(158,"td"),n.Uc(159,"route"),n.bc(),n.dc(160,"td"),n.Uc(161,"string | UrlSegment[]"),n.bc(),n.dc(162,"td"),n.Uc(163,"undefined"),n.bc(),n.dc(164,"td"),n.Uc(165," The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted. "),n.bc(),n.bc(),n.dc(166,"tr",z),n.dc(167,"td"),n.Uc(168,"nextStep"),n.bc(),n.dc(169,"td"),n.Uc(170,"number | string"),n.bc(),n.dc(171,"td"),n.Uc(172,"undefined"),n.bc(),n.dc(173,"td"),n.Uc(174,"The step index or stepId of the next step. If undefined, the next step in the steps array is used."),n.bc(),n.bc(),n.dc(175,"tr"),n.dc(176,"td"),n.Uc(177,"prevStep"),n.bc(),n.dc(178,"td"),n.Uc(179,"number | string"),n.bc(),n.dc(180,"td"),n.Uc(181,"undefined"),n.bc(),n.dc(182,"td"),n.Uc(183,"The step index or stepId of the previous step. If undefined, the previous step in the steps array is used."),n.bc(),n.bc(),n.dc(184,"tr"),n.dc(185,"td"),n.Uc(186,"placement"),n.bc(),n.dc(187,"td"),n.Uc(188,'Placement of a popover accepts: "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-top", "left-bottom", "right", "right-top", "right-bottom" and array of above values.'),n.bc(),n.dc(189,"td"),n.dc(190,"span",X),n.Uc(191,"'top'"),n.bc(),n.bc(),n.dc(192,"td"),n.Uc(193," Where the tour step should placed with respect to the anchor. Supports all "),n.dc(194,"a",Y),n.Uc(195,"placement options of ng bootstrap"),n.bc(),n.Uc(196,". "),n.bc(),n.bc(),n.dc(197,"tr"),n.dc(198,"td"),n.Uc(199,"preventScrolling"),n.bc(),n.dc(200,"td"),n.Uc(201,"boolean"),n.bc(),n.dc(202,"td"),n.Uc(203,"false"),n.bc(),n.dc(204,"td"),n.Uc(205," Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to true will disable the scroll behavior. "),n.bc(),n.bc(),n.dc(206,"tr",L),n.dc(207,"td"),n.Uc(208,"prevBtnTitle"),n.bc(),n.dc(209,"td"),n.Uc(210,"string"),n.bc(),n.dc(211,"td"),n.Uc(212,"false"),n.bc(),n.dc(213,"td"),n.Uc(214,' Sets a custom prev button title for a given step. Default is "Prev" '),n.bc(),n.bc(),n.dc(215,"tr"),n.dc(216,"td"),n.Uc(217,"nextBtnTitle"),n.bc(),n.dc(218,"td"),n.Uc(219,"string"),n.bc(),n.dc(220,"td"),n.Uc(221,"false"),n.bc(),n.dc(222,"td"),n.Uc(223,' Sets a custom next button title for a given step. Default is "Next" '),n.bc(),n.bc(),n.dc(224,"tr"),n.dc(225,"td"),n.Uc(226,"endBtnTitle"),n.bc(),n.dc(227,"td"),n.Uc(228,"string"),n.bc(),n.dc(229,"td"),n.Uc(230,"false"),n.bc(),n.dc(231,"td"),n.Uc(232,' Sets a custom end button title for a given step. Default is "End" '),n.bc(),n.bc(),n.bc(),n.bc(),n.dc(233,"h2"),n.Uc(234,"Defaults"),n.bc(),n.dc(235,"p"),n.Uc(236,"You can set default values in the "),n.dc(237,"code"),n.Uc(238,"TourService.initialize"),n.bc(),n.Uc(239," function."),n.bc(),n.dc(240,"pre"),n.Uc(241),n.bc(),n.dc(242,"p"),n.Uc(243,"Any value explicitly defined in a step will override the default value."),n.bc(),n.dc(244,"h2",V),n.Uc(245,"Hotkeys"),n.bc(),n.dc(246,"p"),n.Uc(247," Hotkeys are provided using Angular's "),n.dc(248,"code"),n.Uc(249,"@HostListener"),n.bc(),n.Uc(250," decorator. Hotkeys are enabled when the tour starts and disabled when the tour ends.\n"),n.bc(),n.dc(251,"ul"),n.dc(252,"li"),n.dc(253,"strong"),n.Uc(254,"left arrow"),n.bc(),n.dc(255,"span"),n.Uc(256," - previous step"),n.bc(),n.bc(),n.dc(257,"li"),n.dc(258,"strong"),n.Uc(259,"right arrow"),n.bc(),n.dc(260,"span"),n.Uc(261," - next step"),n.bc(),n.bc(),n.dc(262,"li"),n.dc(263,"strong"),n.Uc(264,"esc"),n.bc(),n.dc(265,"span"),n.Uc(266," - end tour"),n.bc(),n.bc(),n.bc(),n.dc(267,"p"),n.Uc(268," You can disable hotkeys by calling "),n.dc(269,"code"),n.Uc(270,"tourService.disableHotkeys()"),n.bc(),n.Uc(271," or re-enable with "),n.dc(272,"code"),n.Uc(273,"tourService.enableHotkeys()"),n.bc(),n.bc(),n.dc(274,"h2",J),n.Uc(275,"Event Observables"),n.bc(),n.dc(276,"p"),n.Uc(277,"The "),n.dc(278,"code"),n.Uc(279,"TourService"),n.bc(),n.Uc(280," emits events that can be subscribed to like this:"),n.bc(),n.dc(281,"pre"),n.Uc(282),n.bc(),n.dc(283,"table",M),n.dc(284,"thead"),n.dc(285,"tr"),n.dc(286,"th"),n.Uc(287,"Name"),n.bc(),n.dc(288,"th"),n.Uc(289,"Payload"),n.bc(),n.dc(290,"th"),n.Uc(291,"Emitted When"),n.bc(),n.bc(),n.bc(),n.dc(292,"tbody"),n.dc(293,"tr"),n.dc(294,"td"),n.Uc(295,"stepShow$"),n.bc(),n.dc(296,"td"),n.Uc(297,"IStepOption"),n.bc(),n.dc(298,"td"),n.Uc(299,"A step is shown"),n.bc(),n.bc(),n.dc(300,"tr"),n.dc(301,"td"),n.Uc(302,"stepHide$"),n.bc(),n.dc(303,"td"),n.Uc(304,"IStepOption"),n.bc(),n.dc(305,"td"),n.Uc(306,"A step is hidden"),n.bc(),n.bc(),n.dc(307,"tr"),n.dc(308,"td"),n.Uc(309,"initialize$"),n.bc(),n.dc(310,"td"),n.Uc(311,"IStepOption[]"),n.bc(),n.dc(312,"td"),n.Uc(313,"The tour is configured with a set of steps"),n.bc(),n.bc(),n.dc(314,"tr"),n.dc(315,"td"),n.Uc(316,"start$"),n.bc(),n.dc(317,"td"),n.Uc(318,"IStepOption"),n.bc(),n.dc(319,"td"),n.Uc(320,"The tour begins"),n.bc(),n.bc(),n.dc(321,"tr"),n.dc(322,"td"),n.Uc(323,"end$"),n.bc(),n.dc(324,"td"),n.Uc(325,"any"),n.bc(),n.dc(326,"td"),n.Uc(327,"The tour ends"),n.bc(),n.bc(),n.dc(328,"tr"),n.dc(329,"td"),n.Uc(330,"pause$"),n.bc(),n.dc(331,"td"),n.Uc(332,"IStepOption"),n.bc(),n.dc(333,"td"),n.Uc(334,"The tour is paused"),n.bc(),n.bc(),n.dc(335,"tr"),n.dc(336,"td"),n.Uc(337,"resume$"),n.bc(),n.dc(338,"td"),n.Uc(339,"IStepOption"),n.bc(),n.dc(340,"td"),n.Uc(341,"The tour resumes"),n.bc(),n.bc(),n.dc(342,"tr"),n.dc(343,"td"),n.Uc(344,"anchorRegister$"),n.bc(),n.dc(345,"td"),n.Uc(346,"string"),n.bc(),n.dc(347,"td"),n.Uc(348,"An anchor is registered with the tour"),n.bc(),n.bc(),n.dc(349,"tr"),n.dc(350,"td"),n.Uc(351,"anchorUnregister$"),n.bc(),n.dc(352,"td"),n.Uc(353,"string"),n.bc(),n.dc(354,"td"),n.Uc(355,"An anchor is unregistered from the tour"),n.bc(),n.bc(),n.bc(),n.bc(),n.dc(356,"h2",q),n.Uc(357,"Custom template"),n.bc(),n.dc(358,"p"),n.Uc(359," You can also customize the tour step template by providing an "),n.dc(360,"code"),n.Uc(361,'<ng-template let-step="step" >'),n.bc(),n.Uc(362," inside the "),n.dc(363,"code"),n.Uc(364,"<tour-step-template>"),n.bc(),n.bc(),n.dc(365,"p"),n.Uc(366," The default template is equivalent to this:\n"),n.bc(),n.dc(367,"pre"),n.dc(368,"code"),n.Uc(369),n.bc(),n.bc(),n.dc(370,"h2"),n.Uc(371,"Styling Active Tour Anchor"),n.bc(),n.dc(372,"p"),n.Uc(373," The currently active tour anchor element has a "),n.dc(374,"code"),n.Uc(375,"touranchor--is-active"),n.bc(),n.Uc(376," class applied to it, so you can apply your own custom styles to that class to highlight the element being referenced.\n"),n.bc()),2&t&&(n.Kc(59),n.Xc("this.tourService.initialize([","{","\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, ","{","\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);"),n.Kc(241),n.Wc("this.tourService.initialize(steps, ","{","\n  route: '',\n  placement: 'left',\n  preventScrolling: true,\n});\n"),n.Kc(282),n.Wc("this.tourService.initialize$.subscribe((steps: IStepOption[]) => ","{","\n  console.log('tour configured with these steps:', steps);\n});\n"),n.Kc(369),n.Zc('<tour-step-template>\n  <ng-template let-step="step">\n    <p class="tour-step-content">',"{{",'step?.content}}</p>\n    <div class="tour-step-navigation">\n      <button *ngIf="tourService.hasPrev(step)" class="btn btn-sm btn-default" (click)="tourService.prev()">\xab ',"{{",'step?.prevBtnTitle}}</button>\n      <button *ngIf="tourService.hasNext(step)" class="btn btn-sm btn-default" (click)="tourService.next()">',"{{",'step?.nextBtnTitle}} \xbb</button>\n      <button class="btn btn-sm btn-default" (click)="tourService.end()">',"{{","step?.endBtnTitle}}</button>\n    </div>\n  </ng-template>\n</tour-step-template>\n"))},directives:[P,k],encapsulation:2}),N),Z=["href","https://github.com/isaacplmann/ng2-tour",1,"btn","btn-default"],tt=["tourAnchor","start.tour",1,"btn","btn-primary",2,"cursor","pointer",3,"click"],et=((C=function(t){this.tourService=t,this.tourService.events$.subscribe(console.log),this.tourService.initialize([{anchorId:"start.tour",content:"Welcome to the Ngx-Tour tour!",placement:"bottom",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation"},{anchorId:"usage",content:"...then use it.",title:"Usage"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route"},{anchorId:"another.route",content:"Like this!",route:"ng-bootstrap/other",title:"Another Route"},{anchorId:"config.route",content:"And then back again.",placement:"bottom",title:"Route Return"},{anchorId:"config.placement.default",content:"Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.",title:"Placement"},{anchorId:"config.placement.default",content:"Sliiide to the left.",placement:"left",title:"Placement"},{anchorId:"config.placement.default",content:"Sliiide to the right.",placement:"right",title:"Placement"},{anchorId:"config.placement.default",content:"Take it back now y'all.  One hop this time.",placement:"bottom",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - left-top",placement:"left-top",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - top-left",placement:"top-left",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - top-right",placement:"top-right",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - right-top",placement:"right-top",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - right-bottom",placement:"right-bottom",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - bottom-right",placement:"bottom-right",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - bottom-left",placement:"bottom-left",title:"Placement"},{anchorId:"config.placement.default",content:"And on the corners - left-bottom",placement:"left-bottom",title:"Placement"},{anchorId:"config.buttons.custom",content:"You can set custom step button names",title:"Button Titles",prevBtnTitle:"My Prev",nextBtnTitle:"My Next",endBtnTitle:"My End"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys"},{anchorId:"events",content:"You can subscribe to events",title:"Events"}],{route:"ng-bootstrap"}),this.tourService.start()}).ngComponentDef=n.Qb({type:C,selectors:[["ng-bootstrap-route"]],factory:function(t){return new(t||C)(n.Wb(y))},consts:6,vars:0,template:function(t,e){1&t&&(n.dc(0,"a",Z),n.Uc(1,"View on GitHub"),n.bc(),n.dc(2,"a",tt),n.oc("click",(function(t){return e.tourService.toggle()})),n.Uc(3,"Start Demo Tour"),n.bc(),n.Xb(4,"router-outlet"),n.Xb(5,"tour-step-template"))},directives:[P,k,r.f,E],encapsulation:2}),C),ct=["tourAnchor","another.route"],ot=((R=function(){}).ngComponentDef=n.Qb({type:R,selectors:[["other-route"]],factory:function(t){return new(t||R)},consts:5,vars:0,template:function(t,e){1&t&&(n.dc(0,"p"),n.Uc(1,"This is the "),n.dc(2,"strong",ct),n.Uc(3,"another"),n.bc(),n.Uc(4," route"),n.bc())},directives:[P,k],encapsulation:2}),R);c.d(e,"NgBootstrapModule",(function(){return rt}));var nt,rt=((nt=function(){}).ngModuleDef=n.Ub({type:nt}),nt.ngInjectorDef=n.Tb({factory:function(t){return new(t||nt)},imports:[[o.c,r.e.forChild([{component:et,path:"",children:[{component:G,path:""},{component:ot,path:"other"}]}]),O.forRoot()]]}),nt);r.e.forChild([{component:et,path:"",children:[{component:G,path:""},{component:ot,path:"other"}]}]),O.forRoot()}}]);