(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,n){e.exports=n.p+"static/media/user.8b1dbb1f.png"},119:function(e,t,n){e.exports={userPhoto:"Paginator_userPhoto__31CPu",selectedPage:"Paginator_selectedPage__kDIOz",pageNumber:"Paginator_pageNumber__16kt_",wrap:"Paginator_wrap__3wmGu"}},134:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},140:function(e,t,n){e.exports={item:"ProfileInfo_item__F6mB5",img:"ProfileInfo_img__1lFDW",descriptionBlock:"ProfileInfo_descriptionBlock__2kwuZ",mainPhoto:"ProfileInfo_mainPhoto__oLCOm"}},141:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__1jnKK",posts:"MyPosts_posts__3UDMu"}},148:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i});var a=n(147),r=n(0),o=n.n(r),u=n(89),s=n.n(u),c=function(e){var t=e.input,n=e.meta,r=n.touched,u=n.error,c=Object(a.a)(e,["input","meta"]),i=r&&u;return o.a.createElement("div",{className:s.a.form_control+" "+(i?s.a.error:"")},o.a.createElement("div",null,o.a.createElement("textarea",Object.assign({},t,c))),i&&o.a.createElement("span",null,u))},i=function(e){var t=e.input,n=e.meta,r=n.touched,u=n.error,c=Object(a.a)(e,["input","meta"]),i=r&&u;return o.a.createElement("div",{className:s.a.form_control+" "+(i?s.a.error:"")},o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,c))),i&&o.a.createElement("span",null,u))}},150:function(e,t,n){},151:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(79),r=n(9),o={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andery"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"},{id:7,name:"Kos"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is you"},{id:3,message:"Yo"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},u=function(e){return{type:"ADD-MESSAGE",newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n={id:6,message:t.newMessageText};return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}}},189:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3Hp-D",selectedPage:"users_selectedPage__3exoP"}},193:function(e,t,n){e.exports=n.p+"static/media/Hourglass.6921c9f6.gif"},195:function(e,t,n){e.exports={item:"Post_item__Fqzfp"}},236:function(e,t,n){e.exports=n(363)},32:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return s});var a=n(185),r=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"4e5aee81-42dd-43de-87fa-a601a9c1e88b"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return u.getProfile(e)}},u={getProfile:function(e){return r.get("profile/"+e).then(function(e){return e.data})},getStatus:function(e){return r.get("profile/status/"+e).then(function(e){return e.data})},updateStatus:function(e){return r.put("profile/status",{status:e}).then(function(e){return e.data})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},s={me:function(){return r.get("auth/me").then(function(e){return e.data})},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},322:function(e,t,n){},363:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(150),n(34)),u=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(17),c=n(151),i=n(9),l={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andery"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"},{id:7,name:"Kos"}]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;arguments.length>1&&arguments[1];return Object(i.a)({},e)},p=n(13),m=n.n(p),d=n(29),g=n(79),h=n(32),E={posts:[{id:1,message:"Hi how are you?",likesCount:5},{id:2,message:"It is my First post!",likesCount:23},{id:3,message:"BlaBla",likesCount:65}],profile:null,status:""},b=function(e){return{type:"SET_STATUS",status:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(g.a)(e.posts),[n])});case"SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"SAVE_PHOTO":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}},O=function(e,t,n,a){return e.map(function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),a):e})},P={filter:"",users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},j=function(e){return{type:"SET_FILTER",filter:e}},w=function(e){return{type:"FOLLOW-POST",userId:e}},S=function(e){return{type:"UNFOLLOW",userId:e}},y=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},_=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},k=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},I=function(){var e=Object(d.a)(m.a.mark(function e(t,n,a,r){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(k(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(k(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW-POST":return Object(i.a)(Object(i.a)({},e),{},{users:O(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:O(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"SET_FILTER":return Object(i.a)(Object(i.a)({},e),{},{filter:t.filter});case"SET_CURRENT_PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(g.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!==t.userId})});default:return e}},T=n(65),x=n(186),F=n(184),U={initialized:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U;switch((arguments.length>1?arguments[1]:void 0).type){case"SET_INITIALIZED_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{initialized:!0});default:return e}},A=Object(s.c)({dialogPage:c.b,friendPage:f,profilePage:v,usersPage:C,auth:T.a,form:F.a,app:N}),L=Object(s.e)(A,Object(s.a)(x.a));window.store=L;var D=L,z=n(41),R=n(21),M=n(66),G=n(67),B=n(69),H=n(68),K=(n(322),n(18)),W=n(189),Y=n.n(W),V=function(e){return r.a.createElement("div",{className:Y.a.Y},"News")},Z=n(190),q=n.n(Z),J=function(e){return r.a.createElement("div",{className:q.a.Y},"Music")},X=n(191),$=n.n(X),Q=function(e){return r.a.createElement("div",{className:$.a.Y},"Settings")},ee=n(50),te=n(106),ne=n(119),ae=n.n(ne),re=n(5),oe=n.n(re),ue=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,u=void 0===o?1:o,s=e.onPageChanged,c=void 0===s?function(e){return e}:s,i=e.portionSize,l=void 0===i?10:i,f=Math.ceil(t/n),p=[],m=1;m<=f;m++)p.push(m);var d=Math.ceil(f/l),g=Object(a.useState)(1),h=Object(ee.a)(g,2),E=h[0],b=h[1],v=(E-1)*l+1,O=E*l;return r.a.createElement("div",{className:oe()(ae.a.paginator)},E>1&&r.a.createElement("button",{onClick:function(){b(E-1)}},"PREV"),p.filter(function(e){return e>=v&&e<=O}).map(function(e){return r.a.createElement("span",{className:oe()(Object(te.a)({},ae.a.selectedPage,u===e),ae.a.pageNumber),key:e,onClick:function(t){c(e)}},e)}),d>E&&r.a.createElement("button",{onClick:function(){b(E+1)}},"NEXT"))},se=n(192),ce=n.n(se),ie=n(107),le=n.n(ie),fe=function(e){var t=Object(a.useState)(""),n=Object(ee.a)(t,2),o=n[0];n[1];return r.a.createElement("div",null,e.users.filter(function(e){return e.name.indexOf(o)>-1}).map(function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(z.c,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:le.a,className:ce.a.userPhoto,alt:""}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:e.followingInProgress.some(function(e){return e===t.id}),onClick:function(){e.unfollow(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:e.followingInProgress.some(function(e){return e===t.id}),onClick:function(){e.follow(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"u.location.country"),r.a.createElement("div",null,"u.location.city"))))}))},pe=function(e){for(var t=e.totalUsersCount,n=e.pageSize,o=e.currentPage,u=e.onPageChanged,s=Object(R.c)(),c=Math.ceil(t/n),i=[],l=1;l<=c;l++)i.push(l);var f=Object(a.useState)(""),p=Object(ee.a)(f,2),m=p[0],d=p[1];return r.a.createElement("div",null,r.a.createElement(ue,{totalItemsCount:t,pageSize:n,currentPage:o,onPageChanged:u}),r.a.createElement("input",{placeholder:"search",value:m,onChange:function(e){d(e.target.value),s(j(m))}}),r.a.createElement("div",null,r.a.createElement("strong",null,"Total Users Count: ",t)),r.a.createElement(fe,e))},me=n(193),de=n.n(me),ge=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:de.a,alt:""}))},he=n(194),Ee=Object(he.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),be=function(e){return e.usersPage.pageSize},ve=function(e){return e.usersPage.totalUsersCount},Oe=function(e){return e.usersPage.currentPage},Pe=function(e){return e.usersPage.isFetching},je=function(e){return e.usersPage.followingInProgress},we=function(e){Object(B.a)(n,e);var t=Object(H.a)(n);function n(){var e;Object(M.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={search:""},e.onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(G.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(ge,null):null,r.a.createElement(pe,{onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),Se=Object(s.d)(Object(R.b)(function(e){return{filter:e.usersPage.filter,users:Ee(e),pageSize:be(e),totalUsersCount:ve(e),currentPage:Oe(e),isFetching:Pe(e),followingInProgress:je(e)}},{setFilter:j,follow:function(e){return function(){var t=Object(d.a)(m.a.mark(function t(n){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=h.c.follow.bind(h.c),I(n,e,a,w);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(d.a)(m.a.mark(function t(n){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=h.c.unfollow.bind(h.c),I(n,e,a,S);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},toggleFollowingProgress:k,getUsers:function(e,t){return function(){var n=Object(d.a)(m.a.mark(function n(a){var r;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(_(!0)),a(y(e)),n.next=4,h.c.getUsers(e,t);case 4:r=n.sent,a(_(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount}),a(y(e));case 9:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}))(we),ye=n(140),_e=n.n(ye),ke=function(e){var t=Object(a.useState)(!1),n=Object(ee.a)(t,2),o=n[0],u=n[1],s=Object(a.useState)(e.status),c=Object(ee.a)(s,2),i=c[0],l=c[1];Object(a.useEffect)(function(){l(e.status)},[e.status]);return r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){u(!0)}}," ",e.status||"-------")),o&&r.a.createElement("div",null,r.a.createElement("input",{autoFocus:!0,onBlur:function(){u(!1),e.updateStatus(i)},onChange:function(e){l(e.currentTarget.value)},value:i})))},Ie=function(e){var t=e.profile,n=e.status,a=e.updateStatus,o=e.isOwner,u=e.savePhoto;if(!t)return r.a.createElement(ge,null);return r.a.createElement("div",{className:_e.a.descriptionBlock},r.a.createElement("div",null,r.a.createElement("img",{src:t.photos.large||le.a,alt:"",className:_e.a.mainPhoto}),r.a.createElement(ke,{status:n,updateStatus:a}),o&&r.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&u(e.target.files[0])}})))},Ce=n(141),Te=n.n(Ce),xe=n(195),Fe=n.n(xe),Ue=function(e){return r.a.createElement("div",{className:Fe.a.item},r.a.createElement("img",{src:"https://main-cdn.goods.ru/hlr-system/1722315217/600001112185b0.jpeg",alt:""}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"Like "),e.likesCount))},Ne=n(182),Ae=n(183),Le=n(134),De=n(148),ze=Object(Le.a)(10),Re=Object(Ae.a)({form:"ProfileAddNewPostForm"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(Ne.a,{name:"newPostText",component:De.b,validate:[Le.b,ze],placeholder:"Post Message"}),r.a.createElement("div",null,r.a.createElement("button",null,"Add Post")))}),Me=function(e){var t=e.posts.map(function(e){return r.a.createElement(Ue,{likesCount:e.likesCount,message:e.message})});return r.a.createElement("div",{className:Te.a.postsBlock},r.a.createElement("div",null,r.a.createElement("h3",null,"My posts")),r.a.createElement(Re,{onSubmit:function(t){e.addPost(t.newPostText)}}),r.a.createElement("div",{className:Te.a.posts},t))},Ge=Object(R.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}})(Me),Be=function(e){return r.a.createElement("div",null,r.a.createElement(Ie,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),r.a.createElement(Ge,null))},He=function(e){Object(B.a)(n,e);var t=Object(H.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(G.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUsersProFile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Be,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto})))}}]),n}(r.a.Component),Ke=Object(s.d)(Object(R.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}},{getUsersProFile:function(e){return function(){var t=Object(d.a)(m.a.mark(function t(n){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.c.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(d.a)(m.a.mark(function t(n){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.b.getStatus(e);case 2:a=t.sent,n(b(a));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(d.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(b(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(d.a)(m.a.mark(function t(n){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO",photos:a.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}}),K.f)(He),We=(n(362),n(370)),Ye=n(371),Ve=n(372),Ze=n(146),qe=n(365),Je=n(366),Xe=n(368),$e=n(369),Qe=n(367),et=n(121),tt=function(e){return e.auth.isAuth},nt=function(e){return e.auth.login},at=function(e){var t=Object(R.d)(tt),n=Object(R.d)(nt),a=Object(R.c)(),o=qe.a.Header;return r.a.createElement(o,{className:"header"},r.a.createElement("div",{className:"logo"}),r.a.createElement(Xe.a,null,r.a.createElement($e.a,{span:18},r.a.createElement(Ze.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]},r.a.createElement(Ze.a.Item,{key:"1"},r.a.createElement(z.b,{to:"/developers"},"Developers")))),t?r.a.createElement(r.a.Fragment,null,r.a.createElement($e.a,{span:1},r.a.createElement(Qe.a,{alt:n&&"",style:{backgroundColor:"#87d068"},icon:r.a.createElement(We.a,null)})),r.a.createElement($e.a,{span:5},r.a.createElement(et.a,{onClick:function(){a(Object(T.d)())}},"Log Out"))):r.a.createElement($e.a,{span:6},r.a.createElement(et.a,null,r.a.createElement(z.b,{to:"/login"},"Login")))))},rt=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(e,t))}},ot=r.a.lazy(function(){return n.e(4).then(n.bind(null,374))}),ut=r.a.lazy(function(){return n.e(3).then(n.bind(null,375))}),st=function(e){Object(B.a)(n,e);var t=Object(H.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(G.a)(n,[{key:"componentDidMount",value:function(){this.props.InitializeApp()}},{key:"render",value:function(){var e=Ze.a.SubMenu,t=qe.a.Content,n=qe.a.Footer,a=qe.a.Sider;return r.a.createElement(qe.a,null,r.a.createElement(at,null),r.a.createElement(t,{style:{padding:"0 50px"}},r.a.createElement(Je.a,{style:{margin:"16px 0"}},r.a.createElement(Je.a.Item,null,"Home"),r.a.createElement(Je.a.Item,null,"List"),r.a.createElement(Je.a.Item,null,"App")),r.a.createElement(qe.a,{className:"site-layout-background",style:{padding:"24px 0"}},r.a.createElement(a,{className:"site-layout-background",width:200},r.a.createElement(Ze.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%"}},r.a.createElement(e,{key:"sub1",icon:r.a.createElement(We.a,null),title:"My Profile"},r.a.createElement(Ze.a.Item,{key:"1"},r.a.createElement(z.b,{to:"/profile"},"Profile")," "),r.a.createElement(Ze.a.Item,{key:"2"}," ",r.a.createElement(z.b,{to:"/dialogs"},"Messages"))),r.a.createElement(e,{key:"sub2",icon:r.a.createElement(Ye.a,null),title:"Developers"},r.a.createElement(Ze.a.Item,{key:"5"},r.a.createElement(z.b,{to:"/developers"},"Users"))),r.a.createElement(e,{key:"sub3",icon:r.a.createElement(Ve.a,null),title:"subnav 3"},r.a.createElement(Ze.a.Item,{key:"9"},"option9"),r.a.createElement(Ze.a.Item,{key:"10"},"option10"),r.a.createElement(Ze.a.Item,{key:"11"},"option11"),r.a.createElement(Ze.a.Item,{key:"12"},"option12")))),r.a.createElement(t,{style:{padding:"0 24px",minHeight:200}},r.a.createElement(K.b,{path:"/dialogs/",render:rt(ut)}),r.a.createElement(K.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Ke,null)}}),r.a.createElement(K.b,{path:"/news/",render:function(){return r.a.createElement(V,null)}}),r.a.createElement(K.b,{path:"/music/",render:function(){return r.a.createElement(J,null)}}),r.a.createElement(K.b,{path:"/settings/",render:function(){return r.a.createElement(Q,null)}}),r.a.createElement(K.b,{path:"/developers/",render:function(){return r.a.createElement(Se,null)}}),r.a.createElement(K.b,{path:"/login/",render:rt(ot)})))),r.a.createElement(n,{style:{textAlign:"center"}},"\xa92021 Created by Petrov Konstantin"))}}]),n}(r.a.Component),ct=Object(s.d)(Object(R.b)(function(e){return{initialized:e.initialized}},{InitializeApp:function(){return function(){var e=Object(d.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(T.b)());case 2:e.sent,t({type:"SET_INITIALIZED_SUCCESS"});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}}))(st);u.a.render(r.a.createElement(z.a,null,r.a.createElement(R.a,{store:D},r.a.createElement(ct,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,t,n){"use strict";n.d(t,"b",function(){return f}),n.d(t,"c",function(){return p}),n.d(t,"d",function(){return m});var a=n(13),r=n.n(a),o=n(29),u=n(9),s=n(32),c=n(93),i={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},l=function(e,t,n,a){return{type:"SET_USER_DATA",payload:{id:e,login:n,email:t,isAuth:a}}},f=function(){return function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a,o,u,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.me();case 2:0===(n=e.sent).resultCode&&(a=n.data,o=a.id,u=a.login,c=a.email,t(l(o,c,u,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n){return function(){var a=Object(o.a)(r.a.mark(function a(o){var u,i;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.login(e,t,n);case 2:0===(u=a.sent).data.resultCode?o(f()):(i=u.data.messages.length>0?u.data.messages[0]:"Some error",o(Object(c.a)("login",{_error:i})));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},m=function(){return function(){var e=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.logout();case 2:0===e.sent.data.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(u.a)(Object(u.a)({},e),t.payload);default:return e}}},89:function(e,t,n){e.exports={form_control:"FormsControls_form_control__33ub9",error:"FormsControls_error__LPNa2",formSummaryError:"FormsControls_formSummaryError__27pn9"}}},[[236,1,2]]]);
//# sourceMappingURL=main.b586ec7b.chunk.js.map