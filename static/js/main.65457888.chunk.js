(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,n){e.exports=n.p+"static/media/user.8b1dbb1f.png"},119:function(e,t,n){e.exports={userPhoto:"Paginator_userPhoto__31CPu",selectedPage:"Paginator_selectedPage__kDIOz",pageNumber:"Paginator_pageNumber__16kt_",wrap:"Paginator_wrap__3wmGu"}},120:function(e,t,n){e.exports={item:"ProfileInfo_item__F6mB5",img:"ProfileInfo_img__1lFDW",descriptionBlock:"ProfileInfo_descriptionBlock__2kwuZ",mainPhoto:"ProfileInfo_mainPhoto__oLCOm",padding:"ProfileInfo_padding__3VccA"}},135:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},141:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__1jnKK",posts:"MyPosts_posts__3UDMu"}},148:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return l});var a=n(147),r=n(0),o=n.n(r),u=n(89),c=n.n(u),s=function(e){var t=e.input,n=e.meta,r=n.touched,u=n.error,s=Object(a.a)(e,["input","meta"]),l=r&&u;return o.a.createElement("div",{className:c.a.form_control+" "+(l?c.a.error:"")},o.a.createElement("div",null,o.a.createElement("textarea",Object.assign({},t,s))),l&&o.a.createElement("span",null,u))},l=function(e){var t=e.input,n=e.meta,r=n.touched,u=n.error,s=Object(a.a)(e,["input","meta"]),l=r&&u;return o.a.createElement("div",{className:c.a.form_control+" "+(l?c.a.error:"")},o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,s))),l&&o.a.createElement("span",null,u))}},150:function(e,t,n){},151:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(79),r=n(9),o={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andery"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"},{id:7,name:"Kos"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is you"},{id:3,message:"Yo"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},u=function(e){return{type:"ADD-MESSAGE",newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n={id:6,message:t.newMessageText};return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}}},189:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3Hp-D",selectedPage:"users_selectedPage__3exoP"}},193:function(e,t,n){e.exports=n.p+"static/media/Hourglass.6921c9f6.gif"},195:function(e,t,n){e.exports={item:"Post_item__Fqzfp"}},236:function(e,t,n){e.exports=n(363)},32:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return c});var a=n(185),r=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"4e5aee81-42dd-43de-87fa-a601a9c1e88b"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return u.getProfile(e)}},u={getProfile:function(e){return r.get("profile/"+e).then(function(e){return e.data})},getStatus:function(e){return r.get("profile/status/"+e).then(function(e){return e.data})},updateStatus:function(e){return r.put("profile/status",{status:e}).then(function(e){return e.data})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},c={me:function(){return r.get("auth/me").then(function(e){return e.data})},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},322:function(e,t,n){},363:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(150),n(34)),u=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(17),s=n(151),l=n(9),i={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andery"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"},{id:7,name:"Kos"}]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;arguments.length>1&&arguments[1];return Object(l.a)({},e)},f=n(13),p=n.n(f),d=n(29),g=n(79),E=n(32),h={posts:[{id:1,message:"Hi how are you?",likesCount:5},{id:2,message:"It is my First post!",likesCount:23},{id:3,message:"BlaBla",likesCount:65}],profile:null,status:""},b=function(e){return{type:"SET_STATUS",status:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(l.a)(Object(l.a)({},e),{},{posts:[].concat(Object(g.a)(e.posts),[n])});case"SET_USER_PROFILE":return Object(l.a)(Object(l.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(l.a)(Object(l.a)({},e),{},{status:t.status});case"SAVE_PHOTO":return Object(l.a)(Object(l.a)({},e),{},{profile:Object(l.a)(Object(l.a)({},e.profile),{},{photos:t.photos})});default:return e}},O=function(e,t,n,a){return e.map(function(e){return e[n]===t?Object(l.a)(Object(l.a)({},e),a):e})},P={filter:"",users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},j=function(e){return{type:"SET_FILTER",filter:e}},w=function(e){return{type:"FOLLOW-POST",userId:e}},y=function(e){return{type:"UNFOLLOW",userId:e}},S=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},_=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},k=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},I=function(){var e=Object(d.a)(p.a.mark(function e(t,n,a,r){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(k(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(k(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW-POST":return Object(l.a)(Object(l.a)({},e),{},{users:O(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(l.a)(Object(l.a)({},e),{},{users:O(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(l.a)(Object(l.a)({},e),{},{users:t.users});case"SET_FILTER":return Object(l.a)(Object(l.a)({},e),{},{filter:t.filter});case"SET_CURRENT_PAGE":return Object(l.a)(Object(l.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(l.a)(Object(l.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(l.a)(Object(l.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(g.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!==t.userId})});default:return e}},T=n(65),F=n(186),x=n(184),A={initialized:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;switch((arguments.length>1?arguments[1]:void 0).type){case"SET_INITIALIZED_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{initialized:!0});default:return e}},N=Object(c.c)({dialogPage:s.b,friendPage:m,profilePage:v,usersPage:C,auth:T.a,form:x.a,app:U}),L=Object(c.e)(N,Object(c.a)(F.a));window.store=L;var D=L,M=n(41),z=n(21),R=n(66),G=n(67),B=n(69),H=n(68),V=(n(322),n(18)),K=n(189),W=n.n(K),J=function(e){return r.a.createElement("div",{className:W.a.Y},"News")},Y=n(190),Z=n.n(Y),q=function(e){return r.a.createElement("div",{className:Z.a.Y},"Music")},X=n(191),$=n.n(X),Q=function(e){return r.a.createElement("div",{className:$.a.Y},"Settings")},ee=n(44),te=n(106),ne=n(119),ae=n.n(ne),re=n(5),oe=n.n(re),ue=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,u=void 0===o?1:o,c=e.onPageChanged,s=void 0===c?function(e){return e}:c,l=e.portionSize,i=void 0===l?10:l,m=Math.ceil(t/n),f=[],p=1;p<=m;p++)f.push(p);var d=Math.ceil(m/i),g=Object(a.useState)(1),E=Object(ee.a)(g,2),h=E[0],b=E[1],v=(h-1)*i+1,O=h*i;return r.a.createElement("div",{className:oe()(ae.a.paginator)},h>1&&r.a.createElement("button",{onClick:function(){b(h-1)}},"PREV"),f.filter(function(e){return e>=v&&e<=O}).map(function(e){return r.a.createElement("span",{className:oe()(Object(te.a)({},ae.a.selectedPage,u===e),ae.a.pageNumber),key:e,onClick:function(t){s(e)}},e)}),d>h&&r.a.createElement("button",{onClick:function(){b(h+1)}},"NEXT"))},ce=n(192),se=n.n(ce),le=n(107),ie=n.n(le),me=function(e){var t=Object(a.useState)(""),n=Object(ee.a)(t,2),o=n[0];n[1];return r.a.createElement("div",null,e.users.filter(function(e){return e.name.indexOf(o)>-1}).map(function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(M.c,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:ie.a,className:se.a.userPhoto,alt:""}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:e.followingInProgress.some(function(e){return e===t.id}),onClick:function(){e.unfollow(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:e.followingInProgress.some(function(e){return e===t.id}),onClick:function(){e.follow(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"u.location.country"),r.a.createElement("div",null,"u.location.city"))))}))},fe=function(e){for(var t=e.totalUsersCount,n=e.pageSize,o=e.currentPage,u=e.onPageChanged,c=Object(z.c)(),s=Math.ceil(t/n),l=[],i=1;i<=s;i++)l.push(i);var m=Object(a.useState)(""),f=Object(ee.a)(m,2),p=f[0],d=f[1];return r.a.createElement("div",null,r.a.createElement(ue,{totalItemsCount:t,pageSize:n,currentPage:o,onPageChanged:u}),r.a.createElement("input",{placeholder:"search",value:p,onChange:function(e){d(e.target.value),c(j(p))}}),r.a.createElement("div",null,r.a.createElement("strong",null,"Total Users Count: ",t)),r.a.createElement(me,e))},pe=n(193),de=n.n(pe),ge=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:de.a,alt:""}))},Ee=n(194),he=Object(Ee.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),be=function(e){return e.usersPage.pageSize},ve=function(e){return e.usersPage.totalUsersCount},Oe=function(e){return e.usersPage.currentPage},Pe=function(e){return e.usersPage.isFetching},je=function(e){return e.usersPage.followingInProgress},we=function(e){Object(B.a)(n,e);var t=Object(H.a)(n);function n(){var e;Object(R.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={search:""},e.onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(G.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(ge,null):null,r.a.createElement(fe,{onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),ye=Object(c.d)(Object(z.b)(function(e){return{filter:e.usersPage.filter,users:he(e),pageSize:be(e),totalUsersCount:ve(e),currentPage:Oe(e),isFetching:Pe(e),followingInProgress:je(e)}},{setFilter:j,follow:function(e){return function(){var t=Object(d.a)(p.a.mark(function t(n){var a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=E.c.follow.bind(E.c),I(n,e,a,w);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(d.a)(p.a.mark(function t(n){var a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=E.c.unfollow.bind(E.c),I(n,e,a,y);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},toggleFollowingProgress:k,getUsers:function(e,t){return function(){var n=Object(d.a)(p.a.mark(function n(a){var r;return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(_(!0)),a(S(e)),n.next=4,E.c.getUsers(e,t);case 4:r=n.sent,a(_(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount}),a(S(e));case 9:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}))(we),Se=n(120),_e=n.n(Se),ke=function(e){var t=Object(a.useState)(!1),n=Object(ee.a)(t,2),o=n[0],u=n[1],c=Object(a.useState)(e.status),s=Object(ee.a)(c,2),l=s[0],i=s[1];Object(a.useEffect)(function(){i(e.status)},[e.status]);return r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("strong",null,"Status: "),r.a.createElement("span",{onDoubleClick:function(){u(!0)}}," ",e.status||"-------")),o&&r.a.createElement("div",null,r.a.createElement("input",{autoFocus:!0,onBlur:function(){u(!1),e.updateStatus(l)},onChange:function(e){i(e.currentTarget.value)},value:l})))},Ie=function(e){var t=e.profile,n=e.isOwner,a=e.goToEditMode;return r.a.createElement("div",null,n&&r.a.createElement("div",null,r.a.createElement("button",{onClick:a},"Edit")),r.a.createElement("div",null,r.a.createElement("strong",null,"Full name: "),t.fullName),r.a.createElement("div",null,r.a.createElement("strong",null,"Looking for a job:"),t.lookingForAJob?"yes":"no"),t.lookingForAJob&&r.a.createElement("div",null,r.a.createElement("strong",null,"My professional skills:",t.lookingForAJobDescription)),r.a.createElement("div",null,r.a.createElement("strong",null,"About me:"),t.aboutMe),r.a.createElement("div",null,r.a.createElement("strong",null,"Contacts :"),Object.keys(t.contacts).map(function(e){return r.a.createElement(Te,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},Ce=function(e){var t=e.profile;return r.a.createElement("div",null,"FORM",r.a.createElement("div",null,r.a.createElement("strong",null,"Full name: "),t.fullName),r.a.createElement("div",null,r.a.createElement("strong",null,"Looking for a job:"),t.lookingForAJob?"yes":"no"),t.lookingForAJob&&r.a.createElement("div",null,r.a.createElement("strong",null,"My professional skills:",t.lookingForAJobDescription)),r.a.createElement("div",null,r.a.createElement("strong",null,"About me:"),t.aboutMe),r.a.createElement("div",null,r.a.createElement("strong",null,"Contacts :"),Object.keys(t.contacts).map(function(e){return r.a.createElement(Te,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},Te=function(e){var t=e.contactTitle,n=e.contactValue;return r.a.createElement("div",{className:_e.a.padding},r.a.createElement("strong",null,t," :")," ",n)},Fe=function(e){var t=e.profile,n=e.status,o=e.updateStatus,u=e.isOwner,c=e.savePhoto,s=Object(a.useState)(!1),l=Object(ee.a)(s,2),i=l[0],m=l[1];if(!t)return r.a.createElement(ge,null);return r.a.createElement("div",{className:_e.a.descriptionBlock},r.a.createElement("div",null,r.a.createElement("img",{src:t.photos.large||ie.a,alt:"",className:_e.a.mainPhoto}),r.a.createElement(ke,{status:n,updateStatus:o}),u&&r.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&c(e.target.files[0])}}),i?r.a.createElement(Ce,{profile:t}):r.a.createElement(Ie,{profile:t,isOwner:u,goToEditMode:function(){m(!0)}})))},xe=n(141),Ae=n.n(xe),Ue=n(195),Ne=n.n(Ue),Le=function(e){return r.a.createElement("div",{className:Ne.a.item},r.a.createElement("img",{src:"https://main-cdn.goods.ru/hlr-system/1722315217/600001112185b0.jpeg",alt:""}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"Like "),e.likesCount))},De=n(182),Me=n(183),ze=n(135),Re=n(148),Ge=Object(ze.a)(10),Be=Object(Me.a)({form:"ProfileAddNewPostForm"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(De.a,{name:"newPostText",component:Re.b,validate:[ze.b,Ge],placeholder:"Post Message"}),r.a.createElement("div",null,r.a.createElement("button",null,"Add Post")))}),He=function(e){var t=e.posts.map(function(e){return r.a.createElement(Le,{likesCount:e.likesCount,message:e.message})});return r.a.createElement("div",{className:Ae.a.postsBlock},r.a.createElement("div",null,r.a.createElement("h3",null,"My posts")),r.a.createElement(Be,{onSubmit:function(t){e.addPost(t.newPostText)}}),r.a.createElement("div",{className:Ae.a.posts},t))},Ve=Object(z.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}})(He),Ke=function(e){return r.a.createElement("div",null,r.a.createElement(Fe,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),r.a.createElement(Ve,null))},We=function(e){Object(B.a)(n,e);var t=Object(H.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(G.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUsersProFile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ke,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto})))}}]),n}(r.a.Component),Je=Object(c.d)(Object(z.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}},{getUsersProFile:function(e){return function(){var t=Object(d.a)(p.a.mark(function t(n){var a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.c.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(d.a)(p.a.mark(function t(n){var a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.b.getStatus(e);case 2:a=t.sent,n(b(a));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(d.a)(p.a.mark(function t(n){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(b(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(d.a)(p.a.mark(function t(n){var a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO",photos:a.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}}),V.f)(We),Ye=(n(362),n(370)),Ze=n(371),qe=n(372),Xe=n(146),$e=n(365),Qe=n(366),et=n(368),tt=n(369),nt=n(367),at=n(122),rt=function(e){return e.auth.isAuth},ot=function(e){return e.auth.login},ut=function(e){var t=Object(z.d)(rt),n=Object(z.d)(ot),a=Object(z.c)(),o=$e.a.Header;return r.a.createElement(o,{className:"header"},r.a.createElement("div",{className:"logo"}),r.a.createElement(et.a,null,r.a.createElement(tt.a,{span:18},r.a.createElement(Xe.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]},r.a.createElement(Xe.a.Item,{key:"1"},r.a.createElement(M.b,{to:"/developers"},"Developers")))),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(tt.a,{span:1},r.a.createElement(nt.a,{alt:n&&"",style:{backgroundColor:"#87d068"},icon:r.a.createElement(Ye.a,null)})),r.a.createElement(tt.a,{span:5},r.a.createElement(at.a,{onClick:function(){a(Object(T.d)())}},"Log Out"))):r.a.createElement(tt.a,{span:6},r.a.createElement(at.a,null,r.a.createElement(M.b,{to:"/login"},"Login")))))},ct=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(e,t))}},st=r.a.lazy(function(){return n.e(4).then(n.bind(null,374))}),lt=r.a.lazy(function(){return n.e(3).then(n.bind(null,375))}),it=function(e){Object(B.a)(n,e);var t=Object(H.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(G.a)(n,[{key:"componentDidMount",value:function(){this.props.InitializeApp()}},{key:"render",value:function(){var e=Xe.a.SubMenu,t=$e.a.Content,n=$e.a.Footer,a=$e.a.Sider;return r.a.createElement($e.a,null,r.a.createElement(ut,null),r.a.createElement(t,{style:{padding:"0 50px"}},r.a.createElement(Qe.a,{style:{margin:"16px 0"}},r.a.createElement(Qe.a.Item,null,"Home"),r.a.createElement(Qe.a.Item,null,"List"),r.a.createElement(Qe.a.Item,null,"App")),r.a.createElement($e.a,{className:"site-layout-background",style:{padding:"24px 0"}},r.a.createElement(a,{className:"site-layout-background",width:200},r.a.createElement(Xe.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%"}},r.a.createElement(e,{key:"sub1",icon:r.a.createElement(Ye.a,null),title:"My Profile"},r.a.createElement(Xe.a.Item,{key:"1"},r.a.createElement(M.b,{to:"/profile"},"Profile")," "),r.a.createElement(Xe.a.Item,{key:"2"}," ",r.a.createElement(M.b,{to:"/dialogs"},"Messages"))),r.a.createElement(e,{key:"sub2",icon:r.a.createElement(Ze.a,null),title:"Developers"},r.a.createElement(Xe.a.Item,{key:"5"},r.a.createElement(M.b,{to:"/developers"},"Users"))),r.a.createElement(e,{key:"sub3",icon:r.a.createElement(qe.a,null),title:"subnav 3"},r.a.createElement(Xe.a.Item,{key:"9"},"option9"),r.a.createElement(Xe.a.Item,{key:"10"},"option10"),r.a.createElement(Xe.a.Item,{key:"11"},"option11"),r.a.createElement(Xe.a.Item,{key:"12"},"option12")))),r.a.createElement(t,{style:{padding:"0 24px",minHeight:200}},r.a.createElement(V.b,{path:"/dialogs/",render:ct(lt)}),r.a.createElement(V.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Je,null)}}),r.a.createElement(V.b,{path:"/news/",render:function(){return r.a.createElement(J,null)}}),r.a.createElement(V.b,{path:"/music/",render:function(){return r.a.createElement(q,null)}}),r.a.createElement(V.b,{path:"/settings/",render:function(){return r.a.createElement(Q,null)}}),r.a.createElement(V.b,{path:"/developers/",render:function(){return r.a.createElement(ye,null)}}),r.a.createElement(V.b,{path:"/login/",render:ct(st)})))),r.a.createElement(n,{style:{textAlign:"center"}},"\xa92021 Created by Petrov Konstantin"))}}]),n}(r.a.Component),mt=Object(c.d)(Object(z.b)(function(e){return{initialized:e.initialized}},{InitializeApp:function(){return function(){var e=Object(d.a)(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(T.b)());case 2:e.sent,t({type:"SET_INITIALIZED_SUCCESS"});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}}))(it);u.a.render(r.a.createElement(M.a,null,r.a.createElement(z.a,{store:D},r.a.createElement(mt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,t,n){"use strict";n.d(t,"b",function(){return m}),n.d(t,"c",function(){return f}),n.d(t,"d",function(){return p});var a=n(13),r=n.n(a),o=n(29),u=n(9),c=n(32),s=n(93),l={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},i=function(e,t,n,a){return{type:"SET_USER_DATA",payload:{id:e,login:n,email:t,isAuth:a}}},m=function(){return function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a,o,u,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.me();case 2:0===(n=e.sent).resultCode&&(a=n.data,o=a.id,u=a.login,s=a.email,t(i(o,s,u,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},f=function(e,t,n){return function(){var a=Object(o.a)(r.a.mark(function a(o){var u,l;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.login(e,t,n);case 2:0===(u=a.sent).data.resultCode?o(m()):(l=u.data.messages.length>0?u.data.messages[0]:"Some error",o(Object(s.a)("login",{_error:l})));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},p=function(){return function(){var e=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.logout();case 2:0===e.sent.data.resultCode&&t(i(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(u.a)(Object(u.a)({},e),t.payload);default:return e}}},89:function(e,t,n){e.exports={form_control:"FormsControls_form_control__33ub9",error:"FormsControls_error__LPNa2",formSummaryError:"FormsControls_formSummaryError__27pn9"}}},[[236,1,2]]]);
//# sourceMappingURL=main.65457888.chunk.js.map