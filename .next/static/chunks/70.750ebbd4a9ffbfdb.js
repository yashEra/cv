"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70],{6070:function(e,s,a){a.r(s),a.d(s,{default:function(){return p}});var t=a(5893),i=a(7294),n=a(6333),c=a(907),r=function(e){var s=e.img;return(0,t.jsx)("img",{src:s,alt:"Project Image"})},l=function(e){var s=e.playing,a=(0,i.useRef)(null);return(0,i.useEffect)((function(){null==s&&a.current.pause()}),[s]),(0,t.jsx)("video",{ref:a,src:"img/projects/video.mp4",id:"video",className:"responsive-video",controls:"controls",autoPlay:!1,poster:"img/projects/project-6.jpg"})},o=function(e){var s=e.playing;return(0,i.useEffect)((function(){var e=document.querySelector(".youtube-video");null==s&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),[s]),(0,t.jsx)("div",{className:"videocontainer",children:(0,t.jsx)("iframe",{className:"youtube-video",src:"https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&version=3&playerapiid=ytplayer"})})},m=function(){return(0,t.jsx)("div",{id:"slider",className:"carousel slide portfolio-slider","data-ride":"carousel",children:(0,t.jsxs)(c.Z,{className:"carousel-inner",prevIcon:(0,t.jsx)("a",{className:"carousel-control-prev",href:"#slider","data-slide":"prev",children:(0,t.jsx)("span",{className:"fa fa-chevron-left carousel-controls"})}),nextIcon:(0,t.jsx)("a",{className:"carousel-control-next",href:"#slider","data-slide":"next",children:(0,t.jsx)("span",{className:"fa fa-chevron-right carousel-controls"})}),prevLabel:"",nextLabel:"",indicators:!1,children:[(0,t.jsx)(c.Z.Item,{className:"carousel-item",interval:1e3,children:(0,t.jsx)("img",{src:"img/projects/project-8.jpg",alt:"slide 1"})}),(0,t.jsx)(c.Z.Item,{className:"carousel-item",interval:1e3,children:(0,t.jsx)("img",{src:"img/projects/project-7.jpg",alt:"slide 2"})}),(0,t.jsx)(c.Z.Item,{className:"carousel-item",interval:1e3,children:(0,t.jsx)("img",{src:"img/projects/project-5.jpg",alt:"slide 3"})})]})})},d=[{img:"img/projects/project-2.jpg",name:"Portfolio",format:"img",project:"WEBSITE",client:"",duration:"2 WEEKS",technologies:["WORDPRESS"],budget:"25000LKR",link:"https://yasitheranda.me/"},{img:"img/projects/project-1.jpg",name:"TEXYTO.COM",format:"img",project:"WEBSITE",client:"TEXYTO",duration:"1 MONTH",technologies:["WORDPRESS"],budget:"30000LKR",link:"https://texyto.com/"},{img:"img/projects/project-3.jpg",name:"CLOUT TX",format:"img",project:"WEBSITE",client:"CLOUDTX",duration:"3 MONTHS",technologies:["WORDPRESS"],budget:"20000 LKR",link:"https://cloud.texyto.com/"},{img:"img/projects/project-4.jpg",name:"CST LAN CHALLENGE",format:"img",project:"WEBSITE",client:"CST LAN CHALLENGE",duration:"2 WEEKS",technologies:["WORDPRESS"],budget:"N/A",link:"http://cstlanchallenge.online/"},{img:"img/projects/project-5.jpg",name:"ROTARACT",format:"img",project:"WEBSITE",client:"ROTARACT",duration:"3 MONTHS",technologies:["WORDPRESS"],budget:"N/A",link:"http://racuwu.com/"},{img:"img/projects/project-6.jpg",name:"WESTERN UNIVERSITY",format:"img",project:"WEBSITE",client:"N/A",duration:"2 WEEKS",technologies:["HTML",", JAVASCRIPT",", CSS"],budget:"N/A",link:"https://group8wc.000webhostapp.com/index.html"},{img:"img/projects/project-7.jpg",name:"CV Design",format:"img",project:"DESIGN",client:"HELASCRIPT",duration:"2 WEEKS",technologies:["ADOBE ILLUSTRATOR"],budget:"10000LKR",link:"https://yasitheranda.me/project/diseno-grafico-elementor/"},{img:"img/projects/project-8.jpg",name:"LOGO DESIGN AND LOGO ANIMATION",format:"img",project:"DESIGN",client:"IDEA3SIXTY",duration:"1 WEEK",technologies:["ADOBE ILLUSTRATOR","ADOBE AFTER EFFECTS"],budget:"N/A",link:"https://yasitheranda.me/project/logo-design/"}],p=function(){var e=(0,i.useContext)(n.Z).nav,s=(0,i.useState)(null),a=s[0],c=s[1];return(0,t.jsxs)(i.Fragment,{children:[(0,t.jsxs)("section",{id:"work",className:"".concat("work"===e?"active":""),children:[(0,t.jsxs)("div",{className:"portfolio-container ".concat(a?"slide-out overflow-hidden":""),children:[(0,t.jsxs)("div",{className:"container page-title text-center",children:[(0,t.jsxs)("h2",{className:"text-center",children:["my ",(0,t.jsx)("span",{children:"portfolio"})]}),(0,t.jsx)("span",{className:"title-head-subtitle",children:"a few recent design and coding projects. Want to see more? Email me."})]}),(0,t.jsx)("div",{className:"portfolio-section",children:(0,t.jsx)("div",{className:"container cd-container",children:(0,t.jsx)("div",{children:(0,t.jsx)("ul",{className:"row",id:"portfolio-items",children:d.map((function(e,s){return(0,t.jsx)("li",{className:"col-12 col-md-6 col-lg-4",children:(0,t.jsxs)("a",{href:"#","data-type":"project-1",onClick:function(){return c(s+1)},children:[(0,t.jsx)("img",{src:e.img,alt:"Project",className:"img-fluid"}),(0,t.jsx)("div",{children:(0,t.jsx)("span",{children:e.name})})]})},s)}))})})})}),(0,t.jsx)("div",{className:"portfolio-overlay",onClick:function(){return c(null)}})]}),d.map((function(e,s){return(0,t.jsxs)("div",{className:"project-info-container project-1 ".concat(a===s+1?"slide-in":""),children:[(0,t.jsx)("div",{className:"project-info-main-content",children:"img"==e.format?(0,t.jsx)(r,{img:e.img}):"youtube"==e.format?(0,t.jsx)(o,{playing:a}):"slider"==e.format?(0,t.jsx)(m,{}):(0,t.jsx)(l,{playing:a})}),(0,t.jsxs)("div",{className:"projects-info row",children:[(0,t.jsxs)("div",{className:"col-12 col-sm-6 p-none",children:[(0,t.jsx)("h3",{className:"font-weight-600 uppercase",children:e.name}),(0,t.jsxs)("ul",{className:"project-details",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"fa fa-file-text-o"}),(0,t.jsxs)("span",{className:"font-weight-400 project-label",children:[" ","Project"," "]}),":"," ",(0,t.jsx)("span",{className:"font-weight-600 uppercase",children:e.project})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"fa fa-user-o"}),(0,t.jsxs)("span",{className:"font-weight-400 project-label",children:[" ","Client"," "]}),":"," ",(0,t.jsx)("span",{className:"font-weight-600 uppercase",children:e.client})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"fa fa-hourglass-o"}),(0,t.jsxs)("span",{className:"font-weight-400 project-label",children:[" ","Duration"," "]}),":"," ",(0,t.jsx)("span",{className:"font-weight-600 uppercase",children:e.duration})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"fa fa-code"})," ",(0,t.jsxs)("span",{className:"font-weight-400 project-label",children:[" ","Technologies"]})," ",":"," ",(0,t.jsx)("span",{className:"font-weight-600 uppercase",children:e.technologies.map((function(e,s){return(0,t.jsx)(i.Fragment,{children:e},s)}))})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"fa fa-money"})," ",(0,t.jsxs)("span",{className:"font-weight-400 project-label",children:[" ","Budget"]})," ",":"," ",(0,t.jsx)("span",{className:"font-weight-600 uppercase",children:e.budget})]})]}),(0,t.jsx)("a",{href:e.link,className:"btn",rel:"noopener",target:"blank",children:(0,t.jsxs)("span",{children:[(0,t.jsx)("i",{className:"fa fa-external-link"}),"preview"]})})]}),(0,t.jsx)("div",{className:"col-6 p-none text-right",children:(0,t.jsx)("a",{href:"#",className:"btn btn-secondary close-project",onClick:function(){return c(null)},children:(0,t.jsxs)("span",{children:[(0,t.jsx)("i",{className:"fa fa-close"}),"Close"]})})})]})]},s)}))]}),a&&(0,t.jsx)("span",{className:"back-mobile ".concat(a?"is-visible":""),onClick:function(){return c(null)},children:(0,t.jsx)("i",{className:"fa fa-arrow-left"})})]})}}}]);