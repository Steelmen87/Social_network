(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){e.exports=n.p+"static/media/user.8b1dbb1f.png"},121:function(e,t,n){e.exports={userPhoto:"Paginator_userPhoto__31CPu",selectedPage:"Paginator_selectedPage__kDIOz",pageNumber:"Paginator_pageNumber__16kt_",wrap:"Paginator_wrap__3wmGu"}},138:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},141:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3Hp-D",selectedPage:"users_selectedPage__3exoP",shadow:"users_shadow__2D0Sd"}},147:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__1jnKK",posts:"MyPosts_posts__3UDMu"}},153:function(e,t,n){},154:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(83),r=n(9),o={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andery"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"},{id:7,name:"Kos"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is you"},{id:3,message:"Yo"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},c=function(e){return{type:"ADD-MESSAGE",newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n={id:6,message:t.newMessageText};return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}}},191:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){e.exports=n.p+"static/media/Hourglass.6921c9f6.gif"},199:function(e,t,n){e.exports={item:"Post_item__Fqzfp"}},236:function(e,t,n){e.exports=n(363)},28:function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return u}),n.d(t,"c",function(){return s});var a=n(187),r=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"4e5aee81-42dd-43de-87fa-a601a9c1e88b"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return c.getProfile(e)}},c={getProfile:function(e){return r.get("profile/"+e).then(function(e){return e.data})},getStatus:function(e){return r.get("profile/status/"+e).then(function(e){return e.data})},updateStatus:function(e){return r.put("profile/status",{status:e}).then(function(e){return e.data})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e).then(function(e){return e.data})}},u={me:function(){return r.get("auth/me").then(function(e){return e.data})},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}},s={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},322:function(e,t,n){},35:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return f});var a=n(150),r=n(0),o=n.n(r),c=n(51),u=n.n(c),s=n(139),l=function(e){var t=e.input,n=e.meta,r=n.touched,c=n.error,s=Object(a.a)(e,["input","meta"]),l=r&&c;return o.a.createElement("div",{className:u.a.form_control+" "+(l?u.a.error:"")},o.a.createElement("div",null,o.a.createElement("textarea",Object.assign({},t,s))),l&&o.a.createElement("span",null,c))},i=function(e){var t=e.input,n=e.meta,r=n.touched,c=n.error,s=Object(a.a)(e,["input","meta"]),l=r&&c;return o.a.createElement("div",{className:u.a.form_control+" "+(l?u.a.error:"")},o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,s))),l&&o.a.createElement("span",null,c))},f=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(s.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r))," ",c)}},363:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(153),n(34)),c=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(17),s=n(154),l=n(9),i={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andery"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"},{id:7,name:"Kos"}]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;arguments.length>1&&arguments[1];return Object(l.a)({},e)},m=n(12),p=n.n(m),d=n(26),g=n(83),E=n(28),h=n(56),b={posts:[{id:1,message:"Hi how are you?",likesCount:5},{id:2,message:"It is my First post!",likesCount:23},{id:3,message:"BlaBla",likesCount:65}],profile:null,status:""},v=function(e){return{type:"SET_STATUS",status:e}},O=function(e){return function(){var t=Object(d.a)(p.a.mark(function t(n){var a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.d.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(l.a)(Object(l.a)({},e),{},{posts:[].concat(Object(g.a)(e.posts),[n])});case"SET_USER_PROFILE":return Object(l.a)(Object(l.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(l.a)(Object(l.a)({},e),{},{status:t.status});case"SAVE_PHOTO":return Object(l.a)(Object(l.a)({},e),{},{profile:Object(l.a)(Object(l.a)({},e.profile),{},{photos:t.photos})});default:return e}},j=function(e,t,n,a){return e.map(function(e){return e[n]===t?Object(l.a)(Object(l.a)({},e),a):e})},w={filter:"",users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},S=function(e){return{type:"SET_FILTER",filter:e}},y=function(e){return{type:"FOLLOW-POST",userId:e}},_=function(e){return{type:"UNFOLLOW",userId:e}},k=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},C=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},I=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},T=function(){var e=Object(d.a)(p.a.mark(function e(t,n,a,r){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(I(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(I(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW-POST":return Object(l.a)(Object(l.a)({},e),{},{users:j(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(l.a)(Object(l.a)({},e),{},{users:j(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(l.a)(Object(l.a)({},e),{},{users:t.users});case"SET_FILTER":return Object(l.a)(Object(l.a)({},e),{},{filter:t.filter});case"SET_CURRENT_PAGE":return Object(l.a)(Object(l.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(l.a)(Object(l.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(l.a)(Object(l.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(g.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!==t.userId})});default:return e}},U=n(69),F=n(188),A=n(186),N={initialized:!1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N;switch((arguments.length>1?arguments[1]:void 0).type){case"SET_INITIALIZED_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{initialized:!0});default:return e}},D=Object(u.c)({dialogPage:s.b,friendPage:f,profilePage:P,usersPage:x,auth:U.a,form:A.a,app:L}),M=Object(u.e)(D,Object(u.a)(F.a));window.store=M;var z=M,R=n(38),G=n(18),H=n(70),B=n(71),V=n(73),W=n(72),K=(n(322),n(19)),Y=n(191),J=n.n(Y),Z=function(e){return r.a.createElement("div",{className:J.a.Y},"News")},q=n(192),X=n.n(q),$=function(e){return r.a.createElement("div",{className:X.a.Y},"Music")},Q=n(193),ee=n.n(Q),te=function(e){return r.a.createElement("div",{className:ee.a.Y},"Settings")},ne=n(45),ae=n(108),re=n(121),oe=n.n(re),ce=n(5),ue=n.n(ce),se=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=void 0===o?1:o,u=e.onPageChanged,s=void 0===u?function(e){return e}:u,l=e.portionSize,i=void 0===l?10:l,f=Math.ceil(t/n),m=[],p=1;p<=f;p++)m.push(p);var d=Math.ceil(f/i),g=Object(a.useState)(1),E=Object(ne.a)(g,2),h=E[0],b=E[1],v=(h-1)*i+1,O=h*i;return r.a.createElement("div",{className:ue()(oe.a.paginator)},h>1&&r.a.createElement("button",{onClick:function(){b(h-1)}},"PREV"),m.filter(function(e){return e>=v&&e<=O}).map(function(e){return r.a.createElement("span",{className:ue()(Object(ae.a)({},oe.a.selectedPage,c===e),oe.a.pageNumber),key:e,onClick:function(t){s(e)}},e)}),d>h&&r.a.createElement("button",{onClick:function(){b(h+1)}},"NEXT"))},le=n(141),ie=n.n(le),fe=n(109),me=n.n(fe),pe=function(e){var t=Object(a.useState)(""),n=Object(ne.a)(t,2),o=n[0];n[1];return r.a.createElement("div",null,e.users.filter(function(e){return e.name.indexOf(o)>-1}).map(function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("span",null,r.a.createElement("div",{className:ie.a.shadow},r.a.createElement(R.c,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:me.a,className:ie.a.userPhoto,alt:""}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:e.followingInProgress.some(function(e){return e===t.id}),onClick:function(){e.unfollow(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:e.followingInProgress.some(function(e){return e===t.id}),onClick:function(){e.follow(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status))))}))},de=function(e){for(var t=e.totalUsersCount,n=e.pageSize,o=e.currentPage,c=e.onPageChanged,u=Object(G.c)(),s=Math.ceil(t/n),l=[],i=1;i<=s;i++)l.push(i);var f=Object(a.useState)(""),m=Object(ne.a)(f,2),p=m[0],d=m[1];return r.a.createElement("div",null,r.a.createElement(se,{totalItemsCount:t,pageSize:n,currentPage:o,onPageChanged:c}),r.a.createElement("input",{placeholder:"search",value:p,onChange:function(e){d(e.target.value),u(S(p))}}),r.a.createElement("div",null,r.a.createElement("strong",null,"Total Users Count: ",t)),r.a.createElement(pe,e))},ge=n(194),Ee=n.n(ge),he=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:Ee.a,alt:""}))},be=n(195),ve=Object(be.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),Oe=function(e){return e.usersPage.pageSize},Pe=function(e){return e.usersPage.totalUsersCount},je=function(e){return e.usersPage.currentPage},we=function(e){return e.usersPage.isFetching},Se=function(e){return e.usersPage.followingInProgress},ye=function(e){Object(V.a)(n,e);var t=Object(W.a)(n);function n(){var e;Object(H.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={search:""},e.onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(he,null):null,r.a.createElement(de,{onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),_e=Object(u.d)(Object(G.b)(function(e){return{filter:e.usersPage.filter,users:ve(e),pageSize:Oe(e),totalUsersCount:Pe(e),currentPage:je(e),isFetching:we(e),followingInProgress:Se(e)}},{setFilter:S,follow:function(e){return function(){var t=Object(d.a)(p.a.mark(function t(n){var a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=E.d.follow.bind(E.d),T(n,e,a,y);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(d.a)(p.a.mark(function t(n){var a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=E.d.unfollow.bind(E.d),T(n,e,a,_);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},toggleFollowingProgress:I,getUsers:function(e,t){return function(){var n=Object(d.a)(p.a.mark(function n(a){var r;return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(C(!0)),a(k(e)),n.next=4,E.d.getUsers(e,t);case 4:r=n.sent,a(C(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount}),a(k(e));case 9:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}))(ye),ke=n(65),Ce=n.n(ke),Ie=function(e){var t=Object(a.useState)(!1),n=Object(ne.a)(t,2),o=n[0],c=n[1],u=Object(a.useState)(e.status),s=Object(ne.a)(u,2),l=s[0],i=s[1];Object(a.useEffect)(function(){i(e.status)},[e.status]);return r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("strong",null,"Status: "),r.a.createElement("span",{onDoubleClick:function(){c(!0)}}," ",e.status||"-------")),o&&r.a.createElement("div",null,r.a.createElement("input",{autoFocus:!0,onBlur:function(){c(!1),e.updateStatus(l)},onChange:function(e){i(e.currentTarget.value)},value:l})))},Te=function(e){var t=e.contactTitle,n=e.contactValue;return r.a.createElement("div",{className:Ce.a.padding},r.a.createElement("strong",null,t," :")," ",n)},xe=n(35),Ue=n(185),Fe=n(51),Ae=n.n(Fe),Ne=Object(Ue.a)({form:"edit-profile"})(function(e){var t=e.profile,n=e.handleSubmit,a=e.error;return r.a.createElement("form",{onSubmit:n,className:Ae.a.shadow},r.a.createElement("div",null,r.a.createElement("button",null,"Save")),a&&r.a.createElement("div",{className:Ae.a.formSummaryError},a),r.a.createElement("div",null,r.a.createElement("strong",null,"Full name: ")," ",Object(xe.c)("full name","fullName",[],xe.a)),r.a.createElement("div",null,r.a.createElement("strong",null,"Looking for a job:")," ",Object(xe.c)("","lookingForAJob",[],xe.a,{type:"checkbox"})),r.a.createElement("div",null,r.a.createElement("strong",null,"My professional skills: "),Object(xe.c)("My professional skills","lookingForAJobDescription",[],xe.b)),r.a.createElement("div",null,r.a.createElement("strong",null,"About me: ")," ",Object(xe.c)("about me","aboutMe",[],xe.b)),r.a.createElement("div",null,r.a.createElement("strong",null,"Contacts :"),Object.keys(t.contacts).map(function(e){return r.a.createElement("div",{key:e,className:Ce.a.contact},r.a.createElement("strong",null,e," : ")," ",Object(xe.c)(e,"contacts."+e,[],xe.a))})))}),Le=n(123),De=function(e){var t=e.profile,n=e.isOwner,o=e.goToEditMode,c=Object(G.c)();return Object(a.useEffect)(function(){c(O(18301))},[c]),r.a.createElement("div",{className:Ae.a.shadow},n&&r.a.createElement("div",null,r.a.createElement(Le.a,{type:"primary",size:"small",onClick:o},"Edit")),r.a.createElement("div",null,r.a.createElement("strong",null,"Full name: "),t.fullName),r.a.createElement("div",null,r.a.createElement("strong",null,"Looking for a job:"),t.lookingForAJob?"yes":"no"),t.lookingForAJob&&r.a.createElement("div",null,r.a.createElement("strong",null,"My professional skills:"),t.lookingForAJobDescription),r.a.createElement("div",null,r.a.createElement("strong",null,"About me:"),t.aboutMe),r.a.createElement("div",null,r.a.createElement("strong",null,"Contacts :"),Object.keys(t.contacts).map(function(e){return r.a.createElement(Te,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},Me=function(e){var t=e.profile,n=e.status,o=e.updateStatus,c=e.isOwner,u=e.savePhoto,s=e.saveProfile,l=Object(a.useState)(!1),i=Object(ne.a)(l,2),f=i[0],m=i[1];if(!t)return r.a.createElement(he,null);return r.a.createElement("div",{className:Ce.a.descriptionBlock},r.a.createElement("div",null,r.a.createElement("img",{src:t.photos.large||me.a,alt:"",className:Ce.a.mainPhoto}),r.a.createElement(Ie,{status:n,updateStatus:o}),c&&r.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&u(e.target.files[0])}}),f?r.a.createElement(Ne,{initialValues:t,profile:t,onSubmit:function(e){s(e).then(function(e){m(!1)})}}):r.a.createElement(De,{profile:t,isOwner:c,goToEditMode:function(){m(!0)}})))},ze=n(147),Re=n.n(ze),Ge=n(199),He=n.n(Ge),Be=function(e){return r.a.createElement("div",{className:He.a.item},r.a.createElement("img",{src:"https://main-cdn.goods.ru/hlr-system/1722315217/600001112185b0.jpeg",alt:""}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"Like "),e.likesCount))},Ve=n(139),We=n(138),Ke=Object(We.a)(10),Ye=Object(Ue.a)({form:"ProfileAddNewPostForm"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(Ve.a,{name:"newPostText",component:xe.b,validate:[We.b,Ke],placeholder:"Post Message"}),r.a.createElement("div",null,r.a.createElement("button",null,"Add Post")))}),Je=function(e){var t=e.posts.map(function(e){return r.a.createElement(Be,{key:e.id,likesCount:e.likesCount,message:e.message})});return r.a.createElement("div",{className:Re.a.postsBlock},r.a.createElement("div",null,r.a.createElement("h3",null,"My posts")),r.a.createElement(Ye,{onSubmit:function(t){e.addPost(t.newPostText)}}),r.a.createElement("div",{className:Re.a.posts},t))},Ze=Object(G.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}})(Je),qe=function(e){return r.a.createElement("div",null,r.a.createElement(Me,{saveProfile:e.saveProfile,savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),r.a.createElement(Ze,null))},Xe=function(e){Object(V.a)(n,e);var t=Object(W.a)(n);function n(e){return Object(H.a)(this,n),t.call(this,e)}return Object(B.a)(n,[{key:"refreshProfile",value:function(){var e=+this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),e?(this.props.getUserProfile(e),this.props.getStatus(e)):console.error("ID should exists in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement(qe,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),n}(r.a.Component),$e=Object(u.d)(Object(G.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}},{getUserProfile:O,getStatus:function(e){return function(){var t=Object(d.a)(p.a.mark(function t(n){var a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.b.getStatus(e);case 2:a=t.sent,n(v(a));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(d.a)(p.a.mark(function t(n){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(v(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(d.a)(p.a.mark(function t(n){var a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO",photos:a.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(d.a)(p.a.mark(function t(n,a){var r,o;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.id,t.next=3,E.b.saveProfile(e);case 3:if(0!==(o=t.sent).resultCode){t.next=12;break}if(null==r){t.next=9;break}n(O(r)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=15;break;case 12:return n(Object(h.a)("edit-profile",{_error:o.messages[0]})),t.abrupt("return",Promise.reject(o.messages[0]));case 15:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}}),K.f)(Xe),Qe=(n(362),n(370)),et=n(371),tt=n(372),nt=n(149),at=n(365),rt=n(366),ot=n(368),ct=n(369),ut=n(367),st=function(e){return e.auth.isAuth},lt=function(e){return e.auth.login},it=function(e){var t=Object(G.d)(st),n=Object(G.d)(lt),a=Object(G.c)(),o=at.a.Header;return r.a.createElement(o,{className:"header"},r.a.createElement("div",{className:"logo"}),r.a.createElement(ot.a,null,r.a.createElement(ct.a,{span:18},r.a.createElement(nt.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]},r.a.createElement(nt.a.Item,{key:"1"},r.a.createElement(R.b,{to:"/developers"},"Developers")))),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(ct.a,{span:1},r.a.createElement(ut.a,{alt:n&&"",style:{backgroundColor:"#87d068"},icon:r.a.createElement(Qe.a,null)})),r.a.createElement(ct.a,{span:5},r.a.createElement(Le.a,{onClick:function(){a(Object(U.d)())}},"Log Out"))):r.a.createElement(ct.a,{span:6},r.a.createElement(Le.a,null,r.a.createElement(R.b,{to:"/login"},"Login")))))},ft=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(e,t))}},mt=r.a.lazy(function(){return n.e(4).then(n.bind(null,374))}),pt=r.a.lazy(function(){return n.e(3).then(n.bind(null,375))}),dt=function(e){Object(V.a)(n,e);var t=Object(W.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"componentDidMount",value:function(){this.props.InitializeApp()}},{key:"render",value:function(){var e=nt.a.SubMenu,t=at.a.Content,n=at.a.Footer,a=at.a.Sider;return r.a.createElement(at.a,null,r.a.createElement(it,null),r.a.createElement(t,{style:{padding:"0 50px"}},r.a.createElement(rt.a,{style:{margin:"16px 0"}},r.a.createElement(rt.a.Item,null,"Home"),r.a.createElement(rt.a.Item,null,"List"),r.a.createElement(rt.a.Item,null,"App")),r.a.createElement(at.a,{className:"site-layout-background",style:{padding:"24px 0"}},r.a.createElement(a,{className:"site-layout-background",width:200},r.a.createElement(nt.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%"}},r.a.createElement(e,{key:"sub1",icon:r.a.createElement(Qe.a,null),title:"My Profile"},r.a.createElement(nt.a.Item,{key:"1"},r.a.createElement(R.b,{to:"/profile"},"Profile")," "),r.a.createElement(nt.a.Item,{key:"2"}," ",r.a.createElement(R.b,{to:"/dialogs"},"Messages"))),r.a.createElement(e,{key:"sub2",icon:r.a.createElement(et.a,null),title:"Developers"},r.a.createElement(nt.a.Item,{key:"5"},r.a.createElement(R.b,{to:"/developers"},"Users"))),r.a.createElement(e,{key:"sub3",icon:r.a.createElement(tt.a,null),title:"subnav 3"},r.a.createElement(nt.a.Item,{key:"9"},"option9"),r.a.createElement(nt.a.Item,{key:"10"},"option10"),r.a.createElement(nt.a.Item,{key:"11"},"option11"),r.a.createElement(nt.a.Item,{key:"12"},"option12")))),r.a.createElement(t,{style:{padding:"0 24px",minHeight:200}},r.a.createElement(K.b,{exact:!0,path:"*",render:function(){return r.a.createElement(K.a,{to:"/profile"})}}),r.a.createElement(K.b,{path:"/dialogs/",render:ft(pt)}),r.a.createElement(K.b,{path:"/profile/:userId?",render:function(){return r.a.createElement($e,null)}}),r.a.createElement(K.b,{path:"/news/",render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(K.b,{path:"/music/",render:function(){return r.a.createElement($,null)}}),r.a.createElement(K.b,{path:"/settings/",render:function(){return r.a.createElement(te,null)}}),r.a.createElement(K.b,{path:"/developers/",render:function(){return r.a.createElement(_e,null)}}),r.a.createElement(K.b,{path:"/login/",render:ft(mt)})))),r.a.createElement(n,{style:{textAlign:"center"}},"\xa92021 Created by Petrov Konstantin"))}}]),n}(r.a.Component),gt=Object(u.d)(Object(G.b)(function(e){return{initialized:e.initialized}},{InitializeApp:function(){return function(){var e=Object(d.a)(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(U.b)());case 2:e.sent,t({type:"SET_INITIALIZED_SUCCESS"});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}}))(dt);c.a.render(r.a.createElement(R.a,null,r.a.createElement(G.a,{store:z},r.a.createElement(gt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,t,n){e.exports={form_control:"FormsControls_form_control__33ub9",error:"FormsControls_error__LPNa2",formSummaryError:"FormsControls_formSummaryError__27pn9",shadow:"FormsControls_shadow__nxl4C"}},65:function(e,t,n){e.exports={item:"ProfileInfo_item__F6mB5",img:"ProfileInfo_img__1lFDW",descriptionBlock:"ProfileInfo_descriptionBlock__2kwuZ",mainPhoto:"ProfileInfo_mainPhoto__oLCOm",padding:"ProfileInfo_padding__3VccA"}},69:function(e,t,n){"use strict";n.d(t,"b",function(){return f}),n.d(t,"c",function(){return m}),n.d(t,"d",function(){return d});var a=n(12),r=n.n(a),o=n(26),c=n(9),u=n(28),s=n(56),l={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},i=function(e,t,n,a){return{type:"SET_USER_DATA",payload:{id:e,login:n,email:t,isAuth:a}}},f=function(){return function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a,o,c,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.me();case 2:0===(n=e.sent).resultCode&&(a=n.data,o=a.id,c=a.login,s=a.email,t(i(o,s,c,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},m=function(e,t,n){return function(){var a=Object(o.a)(r.a.mark(function a(o){var c,l;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.login(e,t,n);case 2:0===(c=a.sent).data.resultCode?o(f()):(10===c.data.resultCode&&o(p()),l=c.data.messages.length>0?c.data.messages[0]:"Some error",o(Object(s.a)("login",{_error:l})));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},p=function(){return function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,t({type:"GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:a}});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},d=function(){return function(){var e=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logout();case 2:0===e.sent.data.resultCode&&t(i(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":case"GET_CAPTCHA_URL_SUCCESS":return Object(c.a)(Object(c.a)({},e),t.payload);default:return e}}}},[[236,1,2]]]);
//# sourceMappingURL=main.f2b55193.chunk.js.map