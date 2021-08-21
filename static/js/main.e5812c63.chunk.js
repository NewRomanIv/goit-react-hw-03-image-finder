(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(10),o=n.n(r),c=n(7),i=n(9),s=n(3),l=n(4),u=n(6),h=n(5),g=n(0),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.value),e.setState({value:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)("header",{className:"Searchbar",onSubmit:this.handleSubmit,children:Object(g.jsxs)("form",{className:"SearchForm",children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.value,onChange:this.handleChange,placeholder:"Search images and photos"})]})})}}]),n}(a.Component);function d(e){var t=e.webformatURL,n=e.largeImageURL,a=e.onShowModal;return Object(g.jsx)("li",{className:"ImageGalleryItem",children:Object(g.jsx)("img",{src:t,alt:"",className:"ImageGalleryItem-image","data-image":n,onClick:a})})}d.defaultProps={webformatURL:"https://image.freepik.com/free-vector/man-sitting-on-big-question-mark-symbol_24381-1192.jpg",largeImageURL:"https://image.freepik.com/free-vector/man-sitting-on-big-question-mark-symbol_24381-1192.jpg"};var b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.gallery,n=e.onShowModal;return Object(g.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL;return Object(g.jsx)(d,{webformatURL:a,largeImageURL:r,onShowModal:n},t)}))})}}]),n}(a.Component);function j(e){var t=e.onLoadMore;return Object(g.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})}var f=n(11),p=n.n(f);n(38);function y(){return Object(g.jsx)("div",{className:"spinner",children:Object(g.jsx)(p.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80,timeout:3e3})})}function v(e){var t=e.message;return Object(g.jsx)("h2",{children:t})}var O=n(12),S=(n(39),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={instance:O.create('\n\t<img src="'.concat(e.props.largeImageURL,'" width="800" height="600"/>    \n'))},e.handleKeydown=function(t){"Escape"===t.code&&(e.props.onClose(),e.state.instance.close())},e.handleClick=function(t){"IMG"!==t.target.nodeName&&(e.props.onClose(),e.state.instance.close())},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown),window.addEventListener("click",this.handleClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown),window.removeEventListener("click",this.handleClick)}},{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:this.state.instance.show()})}}]),n}(a.Component)),w=function(e){var t=Object.keys(e).map((function(t){return"&"+t+"="+e[t]})).join("");return fetch("".concat("https://pixabay.com/api/?key=22629513-0416b1734fff54844a0105211").concat(t)).then((function(e){return e.json()}))},k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={gallery:[],queryString:{q:"",image_type:"all",per_page:12,page:1},error:!1,loading:!1,largeImageURL:""},e.fetchQuery=function(){e.setState({loading:!0});var t=e.state.queryString;w(t).then((function(t){var n=t.hits;return e.setState((function(e){return{gallery:[].concat(Object(i.a)(e.gallery),Object(i.a)(n))}}))})).catch((function(t){return console.log(t),e.setState({error:t})})).finally((function(){e.setState({loading:!1})}))},e.handleChangeQuery=function(t){e.setState((function(e){return{gallery:[],queryString:Object(c.a)(Object(c.a)({},e.queryString),{},{q:t,page:1})}}))},e.loadMore=function(){e.setState((function(e){return{queryString:Object(c.a)(Object(c.a)({},e.queryString),{},{page:e.queryString.page+1})}}))},e.scroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.closeModal=function(){e.setState({largeImageURL:""})},e.showModal=function(t){e.setState({largeImageURL:t.target.dataset.image})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.fetchQuery()}},{key:"componentDidUpdate",value:function(e,t){t.queryString!==this.state.queryString&&this.fetchQuery(),this.scroll()}},{key:"render",value:function(){var e=this.state,t=e.gallery,n=e.error,a=e.loading,r=e.largeImageURL;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(m,{onSubmit:this.handleChangeQuery}),n&&Object(g.jsx)(v,{message:n.message}),t.length>0&&Object(g.jsx)(b,{gallery:t,onShowModal:this.showModal}),a&&Object(g.jsx)(y,{}),t.length>0&&Object(g.jsx)(j,{onLoadMore:this.loadMore}),r&&Object(g.jsx)(S,{largeImageURL:r,onClose:this.closeModal})]})}}]),n}(a.Component);n(40);o.a.render(Object(g.jsx)(k,{}),document.querySelector("#root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.e5812c63.chunk.js.map