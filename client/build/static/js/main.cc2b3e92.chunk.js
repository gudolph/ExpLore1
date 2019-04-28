(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),o=t.n(r),s=(t(71),t(12)),c=t(13),i=t(17),m=t(14),d=t(16),u=t(6),h=t(136),p=t(137),g=t(64),b=(t(34),t(25)),E=t(28),v=t.n(E),w={registerUser:function(e){return v.a.post("/register",e)},loginUser:function(e){return v.a.put("/login",e)},CharacterName:function(e){return v.a.get("/character/"+e)}},C=t(133),f=t(134),y=t(61),k=t(135),S=t(132),N=function(e){function a(e,t){var n;return Object(s.a)(this,a),(n=Object(i.a)(this,Object(m.a)(a).call(this,e,t))).handleInputChanges=function(e){var a=e.target,t=a.name,l=a.value;n.setState(Object(b.a)({},t,l))},n.handleShow=n.handleShow.bind(Object(u.a)(Object(u.a)(n))),n.handleClose=n.handleClose.bind(Object(u.a)(Object(u.a)(n))),n.state={show:!0,validated:!1,email:"",password:"",password2:"",userId:""},n}return Object(d.a)(a,e),Object(c.a)(a,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this;!1===e.currentTarget.checkValidity()&&e.stopPropagation(),this.setState({validated:!0}),w.loginUser({email:this.state.email,password:this.state.password,userId:this.state.userid}).then(function(e){console.log(e.data.userId),a.setState({userId:e.data.userId}),a.props.sendUserToApp(e.data.userId),a.handleClose(),a.routeChange()})}},{key:"routeChange",value:function(){this.props.history.push("/")}},{key:"render",value:function(){var e=this,a=this.state.validated;return l.a.createElement("div",{style:{padding:"10px"}},l.a.createElement(C.a,{size:"lg",show:this.state.show,animation:!1,onHide:this.handleClose},l.a.createElement("div",{className:"form-modal",style:{padding:"10px",fontFamily:"Press Start 2P"}},l.a.createElement(f.a,{noValidate:!0,validated:a,onSubmit:function(a){return e.handleSubmit(a)}},l.a.createElement("div",{style:{fontFamily:"Press Start 2P"}},l.a.createElement(f.a.Row,{style:{fontFamily:"Press Start 2P"}},l.a.createElement(f.a.Group,{as:y.a,md:"4",controlId:"email"},l.a.createElement(f.a.Label,{className:"FormText"},"Email Address"),l.a.createElement(f.a.Control,{required:!0,type:"email",placeholder:"Email",name:"email",value:this.state.email,onChange:this.handleInputChanges}),l.a.createElement(f.a.Control.Feedback,{type:"invalid",controlId:"emailValidation"},"Email Address Required"),l.a.createElement(f.a.Control.Feedback,null,"Looks good!")))),l.a.createElement(f.a.Row,null,l.a.createElement(f.a.Group,{as:y.a,md:"6",controlId:"password"},l.a.createElement(f.a.Label,null,"Password"),l.a.createElement(f.a.Control,{type:"text",placeholder:"Password",required:!0,name:"password",value:this.state.password,onChange:this.handleInputChanges}),l.a.createElement(f.a.Control.Feedback,{type:"invalid",controlId:"passwordCheck"},"invalid Password"))),l.a.createElement(S.a,null,l.a.createElement(k.a,{type:"submit"},"Login"),l.a.createElement(k.a,{type:"submit",href:"/register"},"New User Registration"))))))}}]),a}(l.a.Component),F={margin:"10px"},j=function(e){function a(e,t){var n;return Object(s.a)(this,a),(n=Object(i.a)(this,Object(m.a)(a).call(this,e,t))).handleSubmit=function(e){var a=Object(u.a)(Object(u.a)(n));console.log("i clicked",e);var t=e.currentTarget;e.preventDefault(),!1===t.checkValidity()&&e.stopPropagation(),n.setState({validated:!0}),w.registerUser({name:n.state.name,email:n.state.email,password:n.state.password,password2:n.state.password2}).then(function(e){console.log(e),a.handleClose()})},n.handleInputChanges=function(e){var a=e.target,t=a.name,l=a.value;n.setState(Object(b.a)({},t,l))},n.handleShow=n.handleShow.bind(Object(u.a)(Object(u.a)(n))),n.handleClose=n.handleClose.bind(Object(u.a)(Object(u.a)(n))),n.state={show:!0,validated:!1,name:"",email:"",password:"",password2:""},n}return Object(d.a)(a,e),Object(c.a)(a,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){var e=this,a=this.state.validated;return l.a.createElement("div",{style:F},l.a.createElement(C.a,{size:"lg",show:this.state.show,animation:!1,onHide:this.handleClose},l.a.createElement(f.a,{noValidate:!0,validated:a,onSubmit:function(a){return e.handleSubmit(a)}},l.a.createElement(f.a.Row,null,l.a.createElement(f.a.Group,{as:y.a,md:"4",controlId:"characterName"},l.a.createElement(f.a.Label,null,"Character Name"),l.a.createElement(f.a.Control,{required:!0,type:"text",onChange:this.handleInputChanges,placeholder:"Character Name",name:"name",value:this.state.name}),l.a.createElement(f.a.Control.Feedback,{type:"invalid",controlId:"characterNameCheck"},"Character Name Required"),l.a.createElement(f.a.Control.Feedback,null,"Looks good!")),l.a.createElement(f.a.Group,{as:y.a,md:"4",controlId:"email"},l.a.createElement(f.a.Label,null,"Email Address"),l.a.createElement(f.a.Control,{required:!0,type:"email",placeholder:"Email",onChange:this.handleInputChanges,name:"email",value:this.state.email}),l.a.createElement(f.a.Control.Feedback,{type:"invalid",controlId:"emailValidation"},"Email Address Required"),l.a.createElement(f.a.Control.Feedback,null,"Looks good!"))),l.a.createElement(f.a.Row,null,l.a.createElement(f.a.Group,{as:y.a,md:"6",controlId:"password"},l.a.createElement(f.a.Label,null,"Password"),l.a.createElement(f.a.Control,{type:"text",placeholder:"Password",required:!0,onChange:this.handleInputChanges,name:"password",value:this.state.password}),l.a.createElement(f.a.Control.Feedback,{type:"invalid",controlId:"passwordCheck"},"Must be over 6 characters long")),l.a.createElement(f.a.Group,{as:y.a,md:"6",controlId:"password2"},l.a.createElement(f.a.Label,null,"Re-enter Password"),l.a.createElement(f.a.Control,{type:"text",placeholder:"Re-Enter Password",required:!0,onChange:this.handleInputChanges,name:"password2",value:this.state.password2}),l.a.createElement(f.a.Control.Feedback,{type:"invalid",controlId:"passwordCheck"},"Must be over 6 characters long"))),l.a.createElement(k.a,{type:"submit"},"Submit form"))))}}]),a}(l.a.Component),O=t(39),I=t.n(O);var x=function(){return l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h1",{className:"jumbo-text"},l.a.createElement("img",{className:"logo",src:I.a,width:"10%",height:"auto",style:{borderStyle:"solid",borderColor:"#8E8269"}}),"xpLore"))},L=t(138);var P=function(e){return console.log("navbar",e),l.a.createElement("nav",{className:"navbar navbar-light bg-light nav-bar"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-6 char-score"},l.a.createElement("span",{className:"navbar-brand mb-0 h2"},"Character: ",e.characterName),l.a.createElement("span",{className:"navbar-brand mb-0 h2"},"Score:")),l.a.createElement("div",{className:"col-xs-6 login-out-btns"},l.a.createElement("button",{className:"btn btn-primary btn-md "},l.a.createElement(L.a,{to:"/login",activeStyle:{color:"white"}},"Login")),l.a.createElement("button",{className:"btn btn-primary btn-md "},"Logout"))))},U=t(31),T=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={userLocation:{lat:32,lng:32},loading:!0},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(e,a,t){var n=this;navigator.geolocation.getCurrentPosition(function(e){var a=e.coords,t=a.latitude,l=a.longitude;n.setState({userLocation:{lat:t,lng:l},loading:!1}),n.props.passUpCoordinates({lat:t,lng:l})},function(){n.setState({loading:!1})})}},{key:"render",value:function(){var e=this.state,a=e.loading,t=e.userLocation,n=this.props.google;return a?null:l.a.createElement("div",null,l.a.createElement(U.Map,{style:{display:"block",margin:"0 auto",width:"60%",height:"75%"},google:n,initialCenter:t,zoom:15},l.a.createElement(U.Marker,{onReady:this.onReady,name:"Current location"})))}}]),a}(l.a.Component),A=Object(U.GoogleApiWrapper)({apiKey:"AIzaSyBY2MMkLEfuCTnKO_iUgyw2HMQLoPqfzLg"})(T);var q=function(e){return l.a.createElement("div",{className:"wrapper"},e.children)};var G=function(e){return l.a.createElement("div",{class:"battle"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{alt:e.name,src:e.image})),l.a.createElement("div",{className:"content"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Location:")," ",e.name),l.a.createElement("li",null,l.a.createElement("strong",null,"Foe:")," ",e.monster)))),l.a.createElement("ul",null,l.a.createElement("li",{className:"poke"},l.a.createElement("button",{className:"btn btn-primary",onClick:e.poke},"Poke")),l.a.createElement("br",null),l.a.createElement("li",{className:"glare"},l.a.createElement("button",{className:"btn btn-primary",onClick:e.unapprovingGlare},"Unapproving Glare")),l.a.createElement("br",null),l.a.createElement("li",{className:"fryingPan"},l.a.createElement("button",{className:"btn btn-primary",onClick:e.fryingPan},"Frying Pan")),l.a.createElement("br",null),l.a.createElement("li",{className:"usedSpork"},l.a.createElement("button",{className:"btn btn-primary",onClick:e.usedSpork},"Used Spork")),l.a.createElement("br",null),l.a.createElement("li",{className:"yoyo"},l.a.createElement("button",{className:"btn btn-primary",onClick:e.yoyo},"Yo-yo"))))},M=t(40),R=t(63),W=function(){return l.a.createElement("span",null,"You are good to go!")},B=function(e){var a=e.hours,t=e.minutes,n=e.seconds;return e.completed?l.a.createElement(W,null):l.a.createElement("span",null,a," hours, ",t," minutes, and ",n," seconds left")};var H=function(){return l.a.createElement(R.a,{date:"April 27 2019 14:00:00 GMT-0600",renderer:B})},V=0,z=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).passUpCoordinates=function(e){t.setState({coord:e}),console.log(e.lat,e.lng)},t.handleStartClick=t.handleStartClick.bind(Object(u.a)(Object(u.a)(t))),t.state={gameStart:!1,coord:{},game:{}},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"handleStartClick",value:function(){this.setState({gameStart:!0})}},{key:"render",value:function(){var e=this,a=this.state.gameStart,t=this.state.coord;return void 0!==t.lat&&console.log(t.lat),a&&V<4?l.a.createElement(q,null,l.a.createElement("div",null,M.map(function(e){var a=(parseFloat(t.lat)-parseFloat(e.location.lat)<.01||parseFloat(t.lat)-parseFloat(e.location.lat)>-.01||parseFloat(e.location.lat)-parseFloat(t.lat)<.001||parseFloat(e.location.lat)-parseFloat(t.lat)>-.001)&&(parseFloat(e.location.lng)-parseFloat(t.lng)<.001||parseFloat(e.location.lng)-parseFloat(t.lng)>-.001||parseFloat(t.lng)-parseFloat(e.location.lng)<.001||parseFloat(t.lng)-parseFloat(e.location.lng)>-.001);if(a)return console.log(e.name,e.location.lat,e.location.lng),l.a.createElement(G,{key:e.id,name:e.name,monster:e.monsterName,image:e.monsterImage,lat:e.location.lat,lng:e.location.lng});V++,console.log(V),console.log("Condition met? "+a),console.log("Latitude close enough? "+(parseFloat(t.lat)-parseFloat(e.location.lat)))}),l.a.createElement(A,{passUpCoordinates:this.passUpCoordinates}),l.a.createElement(H,null))):4==V?(V=0,console.log(V),l.a.createElement(q,null,l.a.createElement("div",null,l.a.createElement(A,{passUpCoordinates:this.passUpCoordinates}),M.map(function(a){if(!1===((parseFloat(t.lat)-parseFloat(a.location.lat)<.001||parseFloat(t.lat)-parseFloat(a.location.lat)>-.001||parseFloat(a.location.lat)-parseFloat(t.lat)<.001||parseFloat(a.location.lat)-parseFloat(t.lat)>-.001)&&(parseFloat(a.location.lng)-parseFloat(t.lng)<.001||parseFloat(a.location.lng)-parseFloat(t.lng)>-.001||parseFloat(t.lng)-parseFloat(a.location.lng)<.001||parseFloat(t.lng)-parseFloat(a.location.lng)>-.001)))return console.log(a.name),l.a.createElement("div",{className:"card text-center"},l.a.createElement("div",{className:"card-body"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Keep ExpLoring!"),l.a.createElement("p",{className:"card-text"},"Your first task is to travel to"),l.a.createElement("p",null,a.name),l.a.createElement("button",{className:"btn btn-primary",onClick:e.handleStartClick},"Check In")));console.log(V)})))):l.a.createElement("div",{className:"card text-center"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Get going!"),l.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),l.a.createElement("button",{className:"btn btn-primary",onClick:this.handleStartClick},"Check In")),l.a.createElement(H,null))}}]),a}(l.a.Component),Y=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={character:"",userId:"",validated:!1,show:!0,email:"",password:"",password2:"",score:""},t.sendUserToApp=function(e){t.setState({userId:e});var a=Object(u.a)(Object(u.a)(t));console.log(e),w.CharacterName(e).then(function(e){console.log(e.data.name);var t=e.data.name;a.setState({character:t})}),console.log(t.state.character)},t.handleShowModal=function(){console.log(t.show),t.setState({show:!0})},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(P,{characterName:this.state.character,userScore:this.state.score}),l.a.createElement(p.a,null,l.a.createElement(g.a,{exact:!0,path:"/register",render:function(a){return l.a.createElement(j,Object.assign({},a,{sendUserToApp:e.sendUserToApp}))}}),l.a.createElement(g.a,{onClick:this.handleshow,exact:!0,path:"/login",render:function(a){return l.a.createElement(N,Object.assign({},a,{onClick:e.handleshow,sendUserToApp:e.sendUserToApp,handleShowModal:e.handleShowModal,character:e.character,validated:e.validated,show:e.show,email:e.email,password:e.password,password2:e.password2}))}})),l.a.createElement(z,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},34:function(e,a,t){},39:function(e,a,t){e.exports=t.p+"static/media/sword.9ab0b37d.png"},40:function(e){e.exports=[{id:"1",name:"Clark Planetarium",location:{lat:"40.6670005 ",lng:"-111.8747095"},travelTime:60,monsterName:"Sammie Wilkinson",monsterImage:"https://raw.githubusercontent.com/gudolph/ExpLore/master/models/images/Sammie%20Wilkinson.gif",monsterHP:16},{id:"2",name:"Temple Square",location:{lat:"40.770700",long:"-111.891100"},travelTime:60,monsterName:"Brian Wilanoski",monsterImage:"https://raw.githubusercontent.com/gudolph/ExpLore/master/models/images/Brian%20Willanoski.gif",monsterHP:32},{id:"3",name:"Salt Lake City Public Library",location:{lat:"40.759900",long:" -111.884900"},travelTime:60,monsterName:"Bobby Corwin",monsterImage:"https://raw.githubusercontent.com/gudolph/ExpLore/master/models/images/Bobby%20Corwin.gif",monsterHP:64},{id:"4",name:"Gallivan Center",location:{lat:"40.764400",long:"-111.889600"},travelTime:60,monsterName:"Willie Freeman",monsterImage:"https://github.com/gudolph/ExpLore/blob/master/models/images/Willie%20Freeman.gif",monsterHP:128}]},66:function(e,a,t){e.exports=t(130)},71:function(e,a,t){}},[[66,1,2]]]);
//# sourceMappingURL=main.cc2b3e92.chunk.js.map