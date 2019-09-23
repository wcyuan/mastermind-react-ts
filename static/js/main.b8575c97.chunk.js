(window["webpackJsonpmastermind-react-ts"]=window["webpackJsonpmastermind-react-ts"]||[]).push([[0],{10:function(e,t,s){e.exports=s(17)},15:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(2),r=s(4),i=s(3),u=s(5),o=s(0),l=s.n(o),c=s(8),h=(s(15),s(6)),v=s.n(h),g=s(9),f=v.a.mark(k),d=v.a.mark(y),_=function(){function e(t,s){Object(n.a)(this,e),this.exact=void 0,this.partial=void 0,this.exact=t,this.partial=s}return Object(a.a)(e,[{key:"equals",value:function(e){return this.exact===e.exact&&this.partial===e.partial}},{key:"str",value:function(){return this.exact+", "+this.partial}}]),e}();function m(e){alert(e)}var p=function(){function e(t){Object(n.a)(this,e),this.game=void 0,this.game=t}return Object(a.a)(e,[{key:"get_input",value:function(e,t){return(s=e,prompt(s),"auto").split("");var s}},{key:"print_guess_instructions",value:function(){}},{key:"get_guess",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t=arguments.length>1?arguments[1]:void 0,s=0;s<e;s++){var n=this.get_input("Enter a guess: ",t);if(this.game.is_valid_guess(n))return n;m("Invalid guess"),this.print_guess_instructions()}return m("Too many invalid guesses"),[]}}]),e}(),b=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["1","2","3","4","5","6"];Object(n.a)(this,e),this.width=void 0,this.valid_values=void 0,this.width=t,this.valid_values=s}return Object(a.a)(e,[{key:"random_int",value:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},{key:"random_choice",value:function(e){return e[this.random_int(0,e.length-1)]}},{key:"get_random_guess",value:function(){for(var e=[],t=0;t<this.width;t++)e.push(this.random_choice(this.valid_values));return e}},{key:"is_valid_guess",value:function(e){if(e.length!==this.width)return!1;var t=!0,s=!1,n=void 0;try{for(var a,r=e[Symbol.iterator]();!(t=(a=r.next()).done);t=!0){var i=a.value;if(this.valid_values.indexOf(i)<0)return!1}}catch(u){s=!0,n=u}finally{try{t||null==r.return||r.return()}finally{if(s)throw n}}return!0}},{key:"get_all_valid_guesses",value:function(e){var t;e||(e=this.width),t=e<2?[[]]:this.get_all_valid_guesses(e-1);var s=[],n=!0,a=!1,r=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var o=i.value,l=!0,c=!1,h=void 0;try{for(var v,g=this.valid_values[Symbol.iterator]();!(l=(v=g.next()).done);l=!0){var f=v.value;s.push([f].concat(o))}}catch(d){c=!0,h=d}finally{try{l||null==g.return||g.return()}finally{if(c)throw h}}}}catch(d){a=!0,r=d}finally{try{n||null==u.return||u.return()}finally{if(a)throw r}}return s}},{key:"sum",value:function(e){return e.reduce((function(e,t){return e+t}),0)}},{key:"count",value:function(e,t){return e.reduce((function(e,s){return e+(s===t?1:0)}),0)}},{key:"zip",value:function(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),n=1;n<t;n++)s[n-1]=arguments[n];return e.map((function(e,t){return s.reduce((function(e,s){return[].concat(Object(g.a)(e),[s[t]])}),[e])}))}},{key:"uniq",value:function(e,t,s){return s.indexOf(e)===t}},{key:"check_guess",value:function(e,t){var s=this,n=this.zip(e,t).reduce((function(e,t){return e+(t[0]===t[1]?1:0)}),0),a=t.filter(this.uniq).reduce((function(n,a){return n+Math.min(s.count(e,a),s.count(t,a))}),0);return new _(n,a-n)}},{key:"is_correct",value:function(e){return e.exact===this.width}},{key:"guess_string",value:function(e){return e.join("")}},{key:"play",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,n=new e(this),a=this.get_random_guess(),r=[],i=0;i<t;i++){var u=n.get_guess(s,r),o=this.check_guess(a,u);if(r.push([u,o]),this.is_correct(o))return m("You got it!"),[!0,r,a];m(o.exact+" exact, "+o.partial+" partial.")}return m("You didn't get it: "+this.guess_string(a)),[!1,r,a]}}]),e}();function k(e,t){var s,n,a,r;return v.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!(t<=0||e.length<=0)){i.next=2;break}return i.abrupt("return");case 2:for(s=[],n=[],a=0;a<t;a++)s.push(0),n.push(e[0]);case 5:return i.next=8,n.slice();case 8:s[0]+=1,r=0;case 10:if(!(r<s.length)){i.next=22;break}if(!(s[r]>=e.length)){i.next=18;break}if(s[r]=0,!(r+1<s.length)){i.next=17;break}s[r+1]+=1,i.next=18;break;case 17:return i.abrupt("return");case 18:n[r]=e[s[r]];case 19:r++,i.next=10;break;case 22:i.next=5;break;case 24:case"end":return i.stop()}}),f)}function y(e,t){var s,n,a,r,i,u,o,l,c,h;return v.a.wrap((function(v){for(;;)switch(v.prev=v.next){case 0:s=k(e.valid_values,e.width),n=s.next();case 2:if(n.done){v.next=39;break}a=n.value,r=!0,i=!0,u=!1,o=void 0,v.prev=8,l=t[Symbol.iterator]();case 10:if(i=(c=l.next()).done){v.next=19;break}if(h=c.value,e.check_guess(h[0],a).equals(h[1])){v.next=16;break}return r=!1,v.abrupt("break",19);case 16:i=!0,v.next=10;break;case 19:v.next=25;break;case 21:v.prev=21,v.t0=v.catch(8),u=!0,o=v.t0;case 25:v.prev=25,v.prev=26,i||null==l.return||l.return();case 28:if(v.prev=28,!u){v.next=31;break}throw o;case 31:return v.finish(28);case 32:return v.finish(25);case 33:if(!r){v.next=36;break}return v.next=36,a;case 36:n=s.next(),v.next=2;break;case 39:return v.abrupt("return");case 40:case"end":return v.stop()}}),d,null,[[8,21,25,33],[26,,28,32]])}var w=function(e){function t(e){var s;return Object(n.a)(this,t),(s=Object(r.a)(this,Object(i.a)(t).call(this,e)))._cached_possible_guesses=void 0,s._history_for_cached_possible_guesses=void 0,s._is_cache_valid=void 0,s._cached_possible_guesses=[],s._history_for_cached_possible_guesses=[],s._is_cache_valid=!1,s}return Object(u.a)(t,e),Object(a.a)(t,[{key:"history_matches",value:function(e,t){if(null==e&&null==t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(var s=0;s<e.length;s++)if(e[s]!==t[s])return!1;return!0}},{key:"is_possible_guesses_computed",value:function(e){if(!this._is_cache_valid)return!1;var t=this.history_matches(e,this._history_for_cached_possible_guesses);return t||(this._is_cache_valid=!1),t}},{key:"get_possible_guesses",value:function(e){if(!this.is_possible_guesses_computed(e)){this._cached_possible_guesses=[];for(var t=y(this.game,e),s=t.next();!s.done;)this._cached_possible_guesses.push(s.value),s=t.next();this._history_for_cached_possible_guesses=e.slice(),this._is_cache_valid=!0}return this._cached_possible_guesses}},{key:"get_num_possible_guesses",value:function(e){return this.get_possible_guesses(e).length}},{key:"make_guess",value:function(e){if(this.is_possible_guesses_computed(e))return this.get_possible_guesses(e)[0];var t=y(this.game,e).next();return t.done?[]:t.value}},{key:"make_random_guess",value:function(e){return this.game.random_choice(this.get_possible_guesses(e))}},{key:"get_guess",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0,t=this.make_guess(e);return m("Guessed: "+this.game.guess_string(t)),t}}]),t}(p);function x(e){var t={backgroundColor:e.color},s=[e.size,"peg"].join(" ");return l.a.createElement("button",{className:s,onClick:e.onClick,disabled:e.disabled,style:t},e.text)}function O(e){return x({color:e.color,size:"small",disabled:!0})}function j(e){return x({color:e.color,onClick:e.onClick,size:"biggest",disabled:!1,text:e.text})}function C(e){return x({color:e.color,text:e.text,size:"big"})}function E(e){for(var t=[],s=0;s<e.guess.length;s++)t.push(l.a.createElement(C,{key:s,text:e.guess[s],color:G.getColor(e.game,e.guess[s])}));for(var n=0;n<e.result.exact;n++)t.push(l.a.createElement(O,{color:"red",key:"exact"+n}));for(var a=0;a<e.result.partial;a++)t.push(l.a.createElement(O,{color:"white",key:"partial"+a}));return l.a.createElement("div",null,t," (",e.num_left,")")}var S=function(e){function t(e){var s;if(Object(n.a)(this,t),(s=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={guess:[]},"guess"in e&&null!=e.guess)s.state.guess=e.guess;else for(var a=0;a<s.props.game.width;a++)s.state.guess.push(s.props.game.valid_values[a%s.props.game.valid_values.length]);return s}return Object(u.a)(t,e),Object(a.a)(t,[{key:"handleClick",value:function(e){var t=this.state.guess.slice(),s=t[e],n=this.props.game.valid_values.indexOf(s);n=(n+1)%this.props.game.valid_values.length,t[e]=this.props.game.valid_values[n],this.setState({guess:t})}},{key:"makeAutoGuess",value:function(){var e=this.props.auto();this.setState({guess:e}),this.props.onSubmit(e)}},{key:"render",value:function(){for(var e=this,t=[],s=function(s){t.push(l.a.createElement(j,{key:s,text:e.state.guess[s],color:G.getColor(e.props.game,e.state.guess[s]),onClick:function(){return e.handleClick(s)}}))},n=0;n<this.props.game.width;n++)s(n);return l.a.createElement("div",null,t,l.a.createElement("button",{onClick:function(){return e.props.onSubmit(e.state.guess)}},"Guess"),l.a.createElement("button",{onClick:function(){return e.makeAutoGuess()}},"Auto Guess"))}}]),t}(o.Component),G=function(){function e(){Object(n.a)(this,e)}return Object(a.a)(e,null,[{key:"getColor",value:function(t,s){return e.rainbow(t.valid_values.length,t.valid_values.indexOf(s))}},{key:"rainbow",value:function(e,t){var s,n,a,r=t/e,i=~~(6*r),u=6*r-i,o=1-u;switch(i%6){case 0:s=1,n=u,a=0;break;case 1:s=o,n=1,a=0;break;case 2:s=0,n=1,a=u;break;case 3:s=0,n=o,a=1;break;case 4:s=u,n=0,a=1;break;case 5:s=1,n=0,a=o}return"#"+("00"+(~~(255*s)).toString(16)).slice(-2)+("00"+(~~(255*n)).toString(16)).slice(-2)+("00"+(~~(255*a)).toString(16)).slice(-2)}}]),e}();function N(e){return l.a.createElement("input",{type:"number",value:e.value,onChange:e.onChange,onFocus:function(e){return e.target.select()},style:{width:"25px"}})}var M=function(e){function t(e){var s;return Object(n.a)(this,t),(s=Object(r.a)(this,Object(i.a)(t).call(this,e))).state=s.getNewState(e.numColors,e.width),s}return Object(u.a)(t,e),Object(a.a)(t,[{key:"makeGame",value:function(e,t){for(var s=[],n=0;n<e;n++)s.push(""+n);return new b(t,s)}},{key:"getNewState",value:function(e,t){var s=this.makeGame(e,t);return{game:s,width:t,numColors:e,secret:s.get_random_guess(),history:[],auto:new w(s),firstguess:null,key:new Date}}},{key:"setWidth",value:function(e){this.setState(this.getNewState(this.state.numColors,e.target.value))}},{key:"setNumColors",value:function(e){this.setState(this.getNewState(e.target.value,this.state.width))}},{key:"updateHistory",value:function(e,t,s,n,a,r){var i=e.check_guess(n,s);a.push([n,i]);var u="";return(r||t.is_possible_guesses_computed(a)||Math.pow(e.valid_values.length,e.width)<1e7)&&(u=t.get_num_possible_guesses(a)),a[a.length-1].push(u),a}},{key:"handleNewGuess",value:function(e){this.setState({history:this.updateHistory(this.state.game,this.state.auto,this.state.secret,e,this.state.history.slice(),!1)})}},{key:"getAutoGuess",value:function(){return this.state.auto.make_guess(this.state.history)}},{key:"newGame",value:function(){this.setState({secret:this.state.game.get_random_guess(),history:[],key:new Date,firstguess:null})}},{key:"newOneMoveGame",value:function(){for(;;){for(var e=this.state.game.get_random_guess(),t=[],s=2;s>1;){var n=this.state.auto.make_random_guess(t);this.updateHistory(this.state.game,this.state.auto,e,n,t,!0),s=t[t.length-1][2]}if(t[t.length-1][1].exact!==this.state.game.width)return void this.setState({secret:e,history:t,key:new Date,firstguess:t[t.length-1][0]})}}},{key:"render",value:function(){for(var e=this,t=[],s=0;s<this.state.history.length;s++)t.push(l.a.createElement(E,{key:s,game:this.state.game,guess:this.state.history[s][0],result:this.state.history[s][1],num_left:this.state.history[s][2]}));return l.a.createElement("div",{key:this.state.key},l.a.createElement("p",null,"Colors:",l.a.createElement(N,{value:this.state.numColors,onChange:this.setNumColors.bind(this)}),"Width:",l.a.createElement(N,{value:this.state.width,onChange:this.setWidth.bind(this)})),l.a.createElement("button",{onClick:function(){return e.newGame()}},"New Game"),l.a.createElement("button",{onClick:function(){return e.newOneMoveGame()}},"New One Move Game"),l.a.createElement("hr",null),t,l.a.createElement("hr",null),l.a.createElement(S,{key:"next",game:this.state.game,auto:this.getAutoGuess.bind(this),onSubmit:this.handleNewGuess.bind(this),guess:this.state.firstguess}))}}]),t}(o.Component),z=function(e){function t(e){var s;return Object(n.a)(this,t),(s=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={name:"React"},s}return Object(u.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Mastermind!"),l.a.createElement(M,{width:4,numColors:6}))}}]),t}(o.Component);Object(c.render)(l.a.createElement(z,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.b8575c97.chunk.js.map