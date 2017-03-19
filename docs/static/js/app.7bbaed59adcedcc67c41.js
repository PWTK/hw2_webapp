webpackJsonp([0,2],[,,function(t,e,n){"use strict";var o=n(3),s=n(69),a=n(54),i=n.n(a),c=n(57),r=n.n(c),u=n(59),l=n.n(u),v=n(58),p=n.n(v);o.a.use(s.a),e.a=new s.a({routes:[{path:"/",component:i.a},{path:"/sign_in",name:"Users.sign_in",component:i.a},{path:"/posts",name:"Posts.index",component:r.a},{path:"/posts/new",name:"Posts.new",component:p.a},{path:"/posts/:id",name:"Posts.show",component:l.a}]})},,,function(t,e,n){"use strict";var o=n(3);e.a={getPosts:function(t,e){o.a.$http.get("/posts.json").then(function(e){t(e.data)}).catch(function(t){e(t)})},getPost:function(t,e,n){o.a.$http.get("/posts/"+t+".json").then(function(t){e(t.data)}).catch(function(t){n(t)})},createPost:function(t,e,n){var s={post:t};o.a.$http.post("/posts.json",s).then(function(t){e(t.data)}).catch(function(t){n(t)})}}},,,,,,function(t,e,n){"use strict";var o=n(3);e.a={getComments:function(t,e,n){o.a.$http.get("/posts/"+t+"/comments.json").then(function(t){e(t.data)}).catch(function(t){console.log(t)})},createComment:function(t,e,n,s){var a={comment:{content:e}};o.a.$http.post("/posts/"+t+"/comments.json",a).then(function(t){n(t.data)}).catch(function(t){console.log(t)})}}},function(t,e,n){"use strict";var o=n(3),s=n(34);e.a={login:function(t,e,n){console.log(s.a);var a={user:{email:t,password:e}};o.a.$http.post("/users/api_sign_in.json",a).then(function(t){s.a.dispatch("login"),n(t.data)}).catch(function(t){s.a.dispatch("logout")})},logout:function(t){console.log(s.a),o.a.$http.delete("/users/api_sign_out.json").then(function(e){s.a.dispatch("logout"),t(e.data)}).catch(function(t){s.a.dispatch("logout")})},checkLoggedIn:function(){o.a.$http.get("/users/check_signed_in.json").then(function(t){s.a.dispatch("login")}).catch(function(t){s.a.dispatch("logout")})}}},function(t,e,n){n(44);var o=n(1)(n(42),n(60),"data-v-0a2fa57f",null);t.exports=o.exports},,function(t,e,n){n(48);var o=n(1)(n(35),n(65),null,null);t.exports=o.exports},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var o=n(3),s=n(71),a=n(2);o.a.use(s.a);var i={auth:!1},c={login:function(t){console.log("mutations login"),t.auth=!0,a.a.push({name:"Posts.index"})},logout:function(t){console.log("mutations logout"),t.auth=!1,a.a.push({name:"Users.sign_in"})}},r={login:function(t){return(0,t.commit)("login")},logout:function(t){return(0,t.commit)("logout")}},u={loggedIn:function(t){return t.auth}};e.a=new s.a.Store({state:i,getters:u,actions:r,mutations:c})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",components:{Iccs340LeftSidenav:n(53)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(12),s=n(2);e.default={methods:{toggleLeftSidenav:function(){this.$refs.leftSidenav.toggle()},logout:function(){console.log("methods.logout"),o.a.logout(this.email,this.password,function(t){s.a.push({name:"Posts.index"})})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(12),s=n(2);e.default={name:"sign-in",data:function(){return{email:"",password:""}},methods:{login:function(){console.log("methods.login"),o.a.login(this.email,this.password,function(t){s.a.push({name:"Posts.index"})})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"comment",props:{comment:{type:Object,required:!1,default:{}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(11),s=n(2);e.default={name:"new-comment",data:function(){return{comment:{content:""}}},props:{post:{type:Object,required:!1,default:{}}},methods:{createComment:function(){var t=this.post.id,e=this.comment.content;this.comment.content="",o.a.createComment(t,e,function(e){console.log(e),s.a.push({name:"Posts.show",params:{post_id:t},query:{t:new Date}})})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5);e.default={components:{Iccs340Post:n(13)},name:"posts",data:function(){return{posts:null,error:null}},beforeRouteEnter:function(t,e,n){o.a.getPosts(function(t){n(function(e){e.posts=t})})},watch:{$route:function(){var t=this;o.a.getPosts(function(e){t.posts=e})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),s=n(2);e.default={name:"new-post",data:function(){return{post:{name:"",content:""}}},methods:{createPost:function(){o.a.createPost(this.post,function(t){s.a.push({name:"Posts.index"})})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"post",props:{post:{type:Object,required:!1,default:{}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),s=n(11);e.default={name:"post",components:{Iccs340Post:n(13),Iccs340Comment:n(55),Iccs340NewComment:n(56)},data:function(){return{post:{},comments:[],error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;o.a.getPost(this.$route.params.id,function(e){t.post=e,s.a.getComments(e.id,function(e){t.comments=e})})}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){n(47);var o=n(1)(n(36),n(64),null,null);t.exports=o.exports},function(t,e,n){var o=n(1)(n(37),n(61),null,null);t.exports=o.exports},function(t,e,n){n(51);var o=n(1)(n(38),n(68),"data-v-f2859632",null);t.exports=o.exports},function(t,e,n){n(46);var o=n(1)(n(39),n(63),"data-v-7122c0b0",null);t.exports=o.exports},function(t,e,n){n(50);var o=n(1)(n(40),n(67),"data-v-d23e7dfa",null);t.exports=o.exports},function(t,e,n){n(49);var o=n(1)(n(41),n(66),"data-v-c35205de",null);t.exports=o.exports},function(t,e,n){n(45);var o=n(1)(n(43),n(62),"data-v-6e431d48",null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("v-card",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-list-tile-avatar",[n("v-icon",[t._v("announcement")])],1),t._v(" "),n("v-col",{attrs:{md:"",4:""}},[n("v-list",{attrs:{"two-line":""}},[n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s(t.post.name)}}),t._v(" "),n("v-list-tile-sub-title",{domProps:{innerHTML:t._s(t.post.content)}})],1)],1)],1),t._v(" "),n("v-list-tile-action",[n("v-btn",{staticClass:"indigo--text",attrs:{icon:"icon"}},[n("v-icon",[t._v("code")])],1)],1)],1)],1),t._v(" "),n("v-divider",{attrs:{inset:""}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"grey lighten-5 z-depth-0"},[n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{xs2:""}},[n("v-subheader",[n("h6",[t._v("E-MAIL")])])],1),t._v(" "),n("v-col",{attrs:{xs8:""}},[n("v-text-field",{attrs:{hint:"uxxxxxxx@iccs340.com",name:"email-input",label:"Your E-Mail Address",value:"xxxx"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{xs2:""}},[n("v-subheader",[n("h6",[t._v("PASSWORD")])])],1),t._v(" "),n("v-col",{attrs:{xs8:""}},[n("v-text-field",{attrs:{name:"password-input",label:"Enter your password",hint:"Your email without @",min:"8","append-icon":"visibility_off",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("v-col",{attrs:{xs2:""}},[n("div",[n("v-btn",{staticClass:"btn--dark-flat-focused",attrs:{primary:"",dark:""},nativeOn:{click:function(e){t.login(e)}}},[t._v("\n                LOGIN\n              ")])],1)])],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("v-list",{attrs:{"three-line":""}},[n("iccs340-post",{attrs:{post:t.post}})],1),t._v(" "),t._l(t.comments,function(t){return n("v-list",[n("iccs340-comment",{attrs:{comment:t}})],1)}),t._v(" "),n("iccs340-new-comment",{attrs:{post:t.post}})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",[n("v-list-item",[n("v-list-tile-avatar",[n("v-icon",[t._v("comment")])],1),t._v(" "),n("v-container",[n("label",[t._v("Add Comment")]),t._v(" "),n("v-text-field",{attrs:{label:"Your comment here"},model:{value:t.comment.content,callback:function(e){t.comment.content=e},expression:"comment.content"}})],1)],1),t._v(" "),n("v-list-item",[n("span",{staticStyle:{flex:"1"}}),t._v(" "),n("v-btn",{staticClass:"btn--dark-flat-focused",attrs:{primary:"",dark:""},nativeOn:{click:function(e){t.createComment(e)}}},[t._v("\n        Comment\n      ")]),t._v(" "),n("span",{staticStyle:{flex:"1"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-row",{staticClass:"blue white--text"},[n("v-menu",{attrs:{bottom:"",right:""}},[n("v-btn",{attrs:{icon:"icon",dark:""},slot:"activator"},[n("v-icon",[t._v("more_vert")])],1),t._v(" "),n("v-list",[n("div",[n("v-btn",{attrs:{light:"",flat:"",href:"/#/posts/new"}},[t._v("New")])],1),t._v(" "),n("div",[n("v-btn",{attrs:{light:"",flat:"",href:"/#/posts"}},[t._v("Home")])],1),t._v(" "),n("div",[n("v-btn",{attrs:{light:"",flat:""},nativeOn:{click:function(e){t.logout(e)}}},[t._v("Logout")])],1)])],1),t._v(" "),n("v-card-title",[t._v("MENU")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("iccs340-left-sidenav"),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"grey lighten-5 z-depth-0"},[n("v-subheader",{attrs:{inset:""}},[t._v("New Post")]),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{xs2:""}},[n("v-subheader",[n("h6",[t._v("Name")])])],1),t._v(" "),n("v-col",{attrs:{xs8:""}},[n("v-text-field",{attrs:{name:"post-name",label:"Your post's name"},model:{value:t.post.name,callback:function(e){t.post.name=e},expression:"post.name"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{xs2:""}},[n("v-subheader",[n("h6",[t._v("Content")])])],1),t._v(" "),n("v-col",{attrs:{xs8:""}},[n("v-text-field",{attrs:{name:"post-content-input",label:"Type your post's content"},model:{value:t.post.content,callback:function(e){t.post.content=e},expression:"post.content"}})],1),t._v(" "),n("v-col",{attrs:{xs2:""}},[n("div",[n("v-btn",{staticClass:"btn--dark-flat-focused",attrs:{primary:"",dark:""},nativeOn:{click:function(e){t.createPost(e)}}},[t._v("Save")])],1)])],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts"},t._l(t.posts,function(t){return n("v-list",[n("router-link",{attrs:{to:{name:"Posts.show",params:{id:t.id}}}},[n("iccs340-post",{attrs:{post:t}})],1)],1)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},[n("v-card",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-list-tile-avatar",[n("v-icon",[t._v("account_circle")])],1),t._v(" "),n("v-col",{attrs:{md:"",4:""}},[n("v-list",{attrs:{"two-line":""}},[n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s(t.comment.user.email)}}),t._v(" "),n("v-list-tile-sub-title",{domProps:{innerHTML:t._s(t.comment.content)}})],1)],1)],1),t._v(" "),n("v-divider",{attrs:{inset:""}})],1)],1)],1)],1)},staticRenderFns:[]}},,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),s=n(15),a=n.n(s),i=n(2),c=n(16),r=n.n(c),u=n(14),l=n.n(u);o.a.use(r.a),o.a.$http=l.a,l.a.defaults.baseURL="https://iccs340-vue-api-auth.herokuapp.com/",l.a.defaults.headers.common.Accept="application/json",l.a.defaults.withCredentials=!0,o.a.config.productionTip=!1,new o.a({el:"#app",router:i.a,template:"<App/>",components:{App:a.a}})}],[73]);
//# sourceMappingURL=app.7bbaed59adcedcc67c41.js.map