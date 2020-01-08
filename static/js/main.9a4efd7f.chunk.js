(this.webpackJsonpreactspa=this.webpackJsonpreactspa||[]).push([[0],{36:function(e,t,a){e.exports=a(57)},48:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);a(37);var n=a(0),r=a.n(n),s=a(17),c=a.n(s),i=a(15),o=a(5),u=a(6),l=a(9),h=a(8),p=a(10),d=a(11),g=a(61),b=a(18),f=a(60),v=a(62),m=a(63),w=a(64),k=a(58),y=a(59),x=a(2),E=a.n(x),O=a(34),S=a(22),j={stsUrl:"https://aspnetcorests.herokuapp.com",apiUrl:"https://aspnetcorespa.herokuapp.com"},U=document.baseURI.replace(/\//g,"").replace(/:/g,"").split(".").join(""),R="returnUrl",A="message",I="logout-callback",C="logout",L="logged-out",P="login",_="login-callback",M="login-failed",N="profile",T="register",z="/authentication",F={DefaultLoginRedirectPath:"/",ApiAuthorizationClientConfigurationUrl:"".concat(j.stsUrl,"/_configuration/").concat(U),ApiAuthorizationPrefix:z,Login:"".concat(z,"/").concat(P),LoginFailed:"".concat(z,"/").concat(M),LoginCallback:"".concat(z,"/").concat(_),Register:"".concat(z,"/").concat(T),Profile:"".concat(z,"/").concat(N),LogOut:"".concat(z,"/").concat(C),LoggedOut:"".concat(z,"/").concat(L),LogOutCallback:"".concat(z,"/").concat(I),IdentityRegisterPath:"/Identity/Account/Register",IdentityManagePath:"/Identity/Account/Manage"},D=new(function(){function e(){Object(o.a)(this,e),this._callbacks=[],this._nextSubscriptionId=0,this._user=null,this._isAuthenticated=!1,this._popUpDisabled=!0}return Object(u.a)(e,[{key:"isAuthenticated",value:function(){var e;return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.awrap(this.getUser());case 2:return e=t.sent,t.abrupt("return",!!e);case 4:case"end":return t.stop()}}),null,this)}},{key:"getUser",value:function(){var e;return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._user||!this._user.profile){t.next=2;break}return t.abrupt("return",this._user.profile);case 2:return t.next=4,E.a.awrap(this.ensureUserManagerInitialized());case 4:return t.next=6,E.a.awrap(this.userManager.getUser());case 6:return e=t.sent,t.abrupt("return",e&&e.profile);case 8:case"end":return t.stop()}}),null,this)}},{key:"getAccessToken",value:function(){var e;return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.awrap(this.ensureUserManagerInitialized());case 2:return t.next=4,E.a.awrap(this.userManager.getUser());case 4:return e=t.sent,t.abrupt("return",e&&e.access_token);case 6:case"end":return t.stop()}}),null,this)}},{key:"signIn",value:function(e){var t,a;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.awrap(this.ensureUserManagerInitialized());case 2:return n.prev=2,n.next=5,E.a.awrap(this.userManager.signinSilent(this.createArguments()));case 5:return t=n.sent,this.updateState(t),n.abrupt("return",this.success(e));case 10:if(n.prev=10,n.t0=n.catch(2),console.log("Silent authentication error: ",n.t0),n.prev=13,!this._popUpDisabled){n.next=16;break}throw new Error("Popup disabled. Change 'AuthorizeService.js:AuthorizeService._popupDisabled' to false to enable it.");case 16:return n.next=18,E.a.awrap(this.userManager.signinPopup(this.createArguments()));case 18:return a=n.sent,this.updateState(a),n.abrupt("return",this.success(e));case 23:if(n.prev=23,n.t1=n.catch(13),"Popup window closed"!==n.t1.message){n.next=29;break}return n.abrupt("return",this.error("The user closed the window."));case 29:this._popUpDisabled||console.log("Popup authentication error: ",n.t1);case 30:return n.prev=30,n.next=33,E.a.awrap(this.userManager.signinRedirect(this.createArguments(e)));case 33:return n.abrupt("return",this.redirect());case 36:return n.prev=36,n.t2=n.catch(30),console.log("Redirect authentication error: ",n.t2),n.abrupt("return",this.error(n.t2));case 40:case"end":return n.stop()}}),null,this,[[2,10],[13,23],[30,36]])}},{key:"completeSignIn",value:function(e){var t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.awrap(this.ensureUserManagerInitialized());case 3:return a.next=5,E.a.awrap(this.userManager.signinCallback(e));case 5:return t=a.sent,this.updateState(t),a.abrupt("return",this.success(t&&t.state));case 10:return a.prev=10,a.t0=a.catch(0),console.log("There was an error signing in: ",a.t0),a.abrupt("return",this.error("There was an error signing in."));case 14:case"end":return a.stop()}}),null,this,[[0,10]])}},{key:"signOut",value:function(e){return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.awrap(this.ensureUserManagerInitialized());case 2:if(t.prev=2,!this._popUpDisabled){t.next=5;break}throw new Error("Popup disabled. Change 'AuthorizeService.js:AuthorizeService._popupDisabled' to false to enable it.");case 5:return t.next=7,E.a.awrap(this.userManager.signoutPopup(this.createArguments()));case 7:return this.updateState(void 0),t.abrupt("return",this.success(e));case 11:return t.prev=11,t.t0=t.catch(2),console.log("Popup signout error: ",t.t0),t.prev=14,t.next=17,E.a.awrap(this.userManager.signoutRedirect(this.createArguments(e)));case 17:return t.abrupt("return",this.redirect());case 20:return t.prev=20,t.t1=t.catch(14),console.log("Redirect signout error: ",t.t1),t.abrupt("return",this.error(t.t1));case 24:case"end":return t.stop()}}),null,this,[[2,11],[14,20]])}},{key:"completeSignOut",value:function(e){var t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.a.awrap(this.ensureUserManagerInitialized());case 2:return a.prev=2,a.next=5,E.a.awrap(this.userManager.signoutCallback(e));case 5:return t=a.sent,this.updateState(null),a.abrupt("return",this.success(t&&t.data));case 10:return a.prev=10,a.t0=a.catch(2),console.log("There was an error trying to log out '".concat(a.t0,"'.")),a.abrupt("return",this.error(a.t0));case 14:case"end":return a.stop()}}),null,this,[[2,10]])}},{key:"updateState",value:function(e){this._user=e,this._isAuthenticated=!!this._user,this.notifySubscribers()}},{key:"subscribe",value:function(e){return this._callbacks.push({callback:e,subscription:this._nextSubscriptionId++}),this._nextSubscriptionId-1}},{key:"unsubscribe",value:function(e){var t=this._callbacks.map((function(t,a){return t.subscription===e?{found:!0,index:a}:{found:!1}})).filter((function(e){return!0===e.found}));if(1!==t.length)throw new Error("Found an invalid number of subscriptions ".concat(t.length));this._callbacks.splice(t[0].index,1)}},{key:"notifySubscribers",value:function(){for(var e=0;e<this._callbacks.length;e++){(0,this._callbacks[e].callback)()}}},{key:"createArguments",value:function(e){return{useReplaceToNavigate:!0,data:e}}},{key:"error",value:function(e){return{status:V.Fail,message:e}}},{key:"success",value:function(e){return{status:V.Success,state:e}}},{key:"redirect",value:function(){return{status:V.Redirect}}},{key:"ensureUserManagerInitialized",value:function(){var e,t,a=this;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0===this.userManager){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,E.a.awrap(fetch(F.ApiAuthorizationClientConfigurationUrl));case 4:if((e=n.sent).ok){n.next=7;break}throw new Error("Could not load settings for '".concat(U,"'"));case 7:return n.next=9,E.a.awrap(e.json());case 9:(t=n.sent).automaticSilentRenew=!0,t.includeIdTokenInSilentRenew=!0,t.userStore=new S.WebStorageStateStore({prefix:U}),this.userManager=new S.UserManager(t),this.userManager.events.addUserSignedOut((function(){return E.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.awrap(a.userManager.removeUser());case 2:a.updateState(void 0);case 3:case"end":return e.stop()}}))}));case 15:case"end":return n.stop()}}),null,this)}}],[{key:"instance",get:function(){return D}}]),e}()),W=D,V={Redirect:"redirect",Success:"success",Fail:"fail"},B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={isAuthenticated:!1,userName:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._subscription=W.subscribe((function(){return e.populateState()})),this.populateState()}},{key:"componentWillUnmount",value:function(){W.unsubscribe(this._subscription)}},{key:"populateState",value:function(){var e,t,a,n;return E.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,E.a.awrap(Promise.all([W.isAuthenticated(),W.getUser()]));case 2:e=r.sent,t=Object(O.a)(e,2),a=t[0],n=t[1],this.setState({isAuthenticated:a,userName:n&&n.name});case 7:case"end":return r.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.isAuthenticated,a=e.userName;if(t){var n="".concat(F.Profile),r={pathname:"".concat(F.LogOut),state:{local:!0}};return this.authenticatedView(a,n,r)}var s="".concat(F.Register),c="".concat(F.Login);return this.anonymousView(s,c)}},{key:"authenticatedView",value:function(e,t,a){return r.a.createElement(n.Fragment,null,r.a.createElement(k.a,null,r.a.createElement(y.a,{tag:i.b,className:"text-dark",to:t},e)),r.a.createElement(k.a,null,r.a.createElement(y.a,{tag:i.b,className:"text-dark",to:a},"Logout")))}},{key:"anonymousView",value:function(e,t){return r.a.createElement(n.Fragment,null,r.a.createElement(k.a,null,r.a.createElement(y.a,{tag:i.b,className:"text-dark",to:e},"Register")),r.a.createElement(k.a,null,r.a.createElement(y.a,{tag:i.b,className:"text-dark",to:t},"Login")))}}]),t}(n.Component),J=(a(48),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).toggleNavbar=a.toggleNavbar.bind(Object(b.a)(a)),a.state={collapsed:!0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement(f.a,{className:"navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3",light:!0},r.a.createElement(g.a,null,r.a.createElement(v.a,{tag:i.b,to:"/"},r.a.createElement("img",{src:"./icons/favicon-32x32.png",className:"d-inline-block align-top",alt:"Logo"}),"\xa0 ReactSpa"),r.a.createElement(m.a,{onClick:this.toggleNavbar,className:"mr-2"}),r.a.createElement(w.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:!this.state.collapsed,navbar:!0},r.a.createElement("ul",{className:"navbar-nav flex-grow"},r.a.createElement(k.a,null,r.a.createElement(y.a,{tag:i.b,className:"text-dark",to:"/"},"Home")),r.a.createElement(k.a,null,r.a.createElement(y.a,{tag:i.b,className:"text-dark",to:"/examples"},"Examples")),r.a.createElement(B,null))))))}}]),t}(n.Component));J.displayName=J.name;var Y=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement(g.a,null,this.props.children))}}]),t}(n.Component);Y.displayName=Y.name;var H=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"React Spa"),r.a.createElement("p",null,"Single page application built using ReactJs"))}}]),t}(n.Component);H.displayName=H.name;var $=a(35),q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={ready:!1,authenticated:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._subscription=W.subscribe((function(){return e.authenticationChanged()})),this.populateAuthenticationState()}},{key:"componentWillUnmount",value:function(){W.unsubscribe(this._subscription)}},{key:"render",value:function(){var e=this.state,t=e.ready,a=e.authenticated,n="".concat(F.Login,"?").concat(R,"=").concat(encodeURI(window.location.href));if(t){var s=this.props,c=s.component,i=Object($.a)(s,["component"]);return r.a.createElement(d.b,Object.assign({},i,{render:function(e){return a?r.a.createElement(c,e):r.a.createElement(d.a,{to:n})}}))}return r.a.createElement("div",null)}},{key:"populateAuthenticationState",value:function(){var e;return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.awrap(W.isAuthenticated());case 2:e=t.sent,this.setState({ready:!0,authenticated:e});case 4:case"end":return t.stop()}}),null,this)}},{key:"authenticationChanged",value:function(){return E.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({ready:!1,authenticated:!1}),e.next=3,E.a.awrap(this.populateAuthenticationState());case 3:case"end":return e.stop()}}),null,this)}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={message:void 0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.action;switch(e){case P:this.login(this.getReturnUrl());break;case _:this.processLoginCallback();break;case M:var t=new URLSearchParams(window.location.search).get(A);this.setState({message:t});break;case N:this.redirectToProfile();break;case T:this.redirectToRegister();break;default:throw new Error("Invalid action '".concat(e,"'"))}}},{key:"render",value:function(){var e=this.props.action,t=this.state.message;if(t)return r.a.createElement("div",null,t);switch(e){case P:return r.a.createElement("div",null,"Processing login");case _:return r.a.createElement("div",null,"Processing login callback");case N:case T:return r.a.createElement("div",null);default:throw new Error("Invalid action '".concat(e,"'"))}}},{key:"login",value:function(e){var t,a;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={returnUrl:e},n.next=3,E.a.awrap(W.signIn(t));case 3:a=n.sent,n.t0=a.status,n.next=n.t0===V.Redirect?7:n.t0===V.Success?8:n.t0===V.Fail?11:13;break;case 7:return n.abrupt("break",14);case 8:return n.next=10,E.a.awrap(this.navigateToReturnUrl(e));case 10:return n.abrupt("break",14);case 11:return this.setState({message:a.message}),n.abrupt("break",14);case 13:throw new Error("Invalid status result ".concat(a.status,"."));case 14:case"end":return n.stop()}}),null,this)}},{key:"processLoginCallback",value:function(){var e,t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=window.location.href,a.next=3,E.a.awrap(W.completeSignIn(e));case 3:t=a.sent,a.t0=t.status,a.next=a.t0===V.Redirect?7:a.t0===V.Success?8:a.t0===V.Fail?11:13;break;case 7:throw new Error("Should not redirect.");case 8:return a.next=10,E.a.awrap(this.navigateToReturnUrl(this.getReturnUrl(t.state)));case 10:return a.abrupt("break",14);case 11:return this.setState({message:t.message}),a.abrupt("break",14);case 13:throw new Error("Invalid authentication result status '".concat(t.status,"'."));case 14:case"end":return a.stop()}}),null,this)}},{key:"getReturnUrl",value:function(e){var t=new URLSearchParams(window.location.search).get(R);if(t&&!t.startsWith("".concat(window.location.origin,"/")))throw new Error("Invalid return url. The return url needs to have the same origin as the current page.");return e&&e.returnUrl||t||"".concat(window.location.origin,"/")}},{key:"redirectToRegister",value:function(){this.redirectToApiAuthorizationPath("".concat(F.IdentityRegisterPath,"?").concat(R,"=").concat(encodeURI(F.Login)))}},{key:"redirectToProfile",value:function(){this.redirectToApiAuthorizationPath(F.IdentityManagePath)}},{key:"redirectToApiAuthorizationPath",value:function(e){var t="".concat(j.stsUrl).concat(e);window.location.replace(t)}},{key:"navigateToReturnUrl",value:function(e){window.location.replace(e)}}]),t}(n.Component),K=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={message:void 0,isReady:!1,authenticated:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.action;switch(e){case C:window.history.state.state.local?this.logout(this.getReturnUrl()):this.setState({isReady:!0,message:"The logout was not initiated from within the page."});break;case I:this.processLogoutCallback();break;case L:this.setState({isReady:!0,message:"You successfully logged out!"});break;default:throw new Error("Invalid action '".concat(e,"'"))}this.populateAuthenticationState()}},{key:"render",value:function(){var e=this.state,t=e.isReady,a=e.message;if(!t)return r.a.createElement("div",null);if(a)return r.a.createElement("div",null,a);var n=this.props.action;switch(n){case C:return r.a.createElement("div",null,"Processing logout");case I:return r.a.createElement("div",null,"Processing logout callback");case L:return r.a.createElement("div",null,a);default:throw new Error("Invalid action '".concat(n,"'"))}}},{key:"logout",value:function(e){var t,a;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={returnUrl:e},n.next=3,E.a.awrap(W.isAuthenticated());case 3:if(!n.sent){n.next=20;break}return n.next=7,E.a.awrap(W.signOut(t));case 7:a=n.sent,n.t0=a.status,n.next=n.t0===V.Redirect?11:n.t0===V.Success?12:n.t0===V.Fail?15:17;break;case 11:return n.abrupt("break",18);case 12:return n.next=14,E.a.awrap(this.navigateToReturnUrl(e));case 14:return n.abrupt("break",18);case 15:return this.setState({message:a.message}),n.abrupt("break",18);case 17:throw new Error("Invalid authentication result status.");case 18:n.next=21;break;case 20:this.setState({message:"You successfully logged out!"});case 21:case"end":return n.stop()}}),null,this)}},{key:"processLogoutCallback",value:function(){var e,t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=window.location.href,a.next=3,E.a.awrap(W.completeSignOut(e));case 3:t=a.sent,a.t0=t.status,a.next=a.t0===V.Redirect?7:a.t0===V.Success?8:a.t0===V.Fail?11:13;break;case 7:throw new Error("Should not redirect.");case 8:return a.next=10,E.a.awrap(this.navigateToReturnUrl(this.getReturnUrl(t.state)));case 10:return a.abrupt("break",14);case 11:return this.setState({message:t.message}),a.abrupt("break",14);case 13:throw new Error("Invalid authentication result status.");case 14:case"end":return a.stop()}}),null,this)}},{key:"populateAuthenticationState",value:function(){var e;return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.awrap(W.isAuthenticated());case 2:e=t.sent,this.setState({isReady:!0,authenticated:e});case 4:case"end":return t.stop()}}),null,this)}},{key:"getReturnUrl",value:function(e){var t=new URLSearchParams(window.location.search).get(R);if(t&&!t.startsWith("".concat(window.location.origin,"/")))throw new Error("Invalid return url. The return url needs to have the same origin as the current page.");return e&&e.returnUrl||t||"".concat(window.location.origin).concat(F.LoggedOut)}},{key:"navigateToReturnUrl",value:function(e){return window.location.replace(e)}}]),t}(n.Component),Q=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(d.b,{path:F.Login,render:function(){return X(P)}}),r.a.createElement(d.b,{path:F.LoginFailed,render:function(){return X(M)}}),r.a.createElement(d.b,{path:F.LoginCallback,render:function(){return X(_)}}),r.a.createElement(d.b,{path:F.Profile,render:function(){return X(N)}}),r.a.createElement(d.b,{path:F.Register,render:function(){return X(T)}}),r.a.createElement(d.b,{path:F.LogOut,render:function(){return Z(C)}}),r.a.createElement(d.b,{path:F.LogOutCallback,render:function(){return Z(I)}}),r.a.createElement(d.b,{path:F.LoggedOut,render:function(){return Z(L)}}))}}]),t}(n.Component);function X(e){return r.a.createElement(G,{action:e})}function Z(e){return r.a.createElement(K,{action:e})}var ee=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Examples"),r.a.createElement("p",null,"Coming soon..."))}}]),t}(n.Component),te=(a(56),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(Y,null,r.a.createElement(d.b,{exact:!0,path:"/",component:H}),r.a.createElement(d.b,{path:F.ApiAuthorizationPrefix,component:Q}),r.a.createElement(q,{path:"/examples",component:ee}))}}]),t}(n.Component));te.displayName=te.name;var ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var re=document.getElementsByTagName("base")[0].getAttribute("href"),se=document.getElementById("root");c.a.render(r.a.createElement(i.a,{basename:re},r.a.createElement(te,null)),se),function(){if("serviceWorker"in navigator){if(new URL("/reactspa",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/reactspa","/service-worker.js");ae?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ne(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):ne(e)}))}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.9a4efd7f.chunk.js.map