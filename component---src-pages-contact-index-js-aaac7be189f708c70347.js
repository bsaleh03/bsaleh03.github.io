(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{204:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(432),s=t(226),m=t(277),c=(t(224),t(273)),i=t.n(c);a.default=function(){return n.a.createElement(s.a,{activeTab:"3"},n.a.createElement("div",{className:"flex flex-col items-center"},n.a.createElement(l.a.Title,{className:"text-primary-color"},"I'm looking for work!"),n.a.createElement(l.a.Title,{level:4,className:"text-gray-600"},"I have experience in embedded software engineering, software validation and test driven design. I am proficient in Python, C++, Java, Android and React.JS and I'm learning new skills every day."),n.a.createElement("div",{type:"submit",className:"col-md-12 mt-5"},n.a.createElement("a",{href:i.a,download:"Basel Saleh Resume.pdf"},n.a.createElement("button",{type:"button",className:"btn btn-dark"},"Download my resume"))),n.a.createElement(m.a,null)))}},273:function(e,a,t){e.exports=t.p+"static/Basel Saleh Resume-adc4930d423b5500b8a1c3d1cf927fac.pdf"},277:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(300),s=t.n(l),m=(t(224),t(201),t(202),t(432));a.a=function(){var e=Object(r.useState)({submitting:!1,status:null}),a=e[0],t=e[1],l=function(e,a,r){t({submitting:!1,status:{ok:e,msg:a}}),e&&r.reset()};return n.a.createElement("div",{type:"submit",className:"col-md-12 mt-5"},n.a.createElement("h3",{className:"text-primary-color"},"        Contact Me!       "),n.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=e.target;t({submitting:!0}),s()({method:"post",url:"https://getform.io/f/2385bd8d-e1db-4320-a546-55b77024cc88",data:new FormData(a)}).then(function(e){l(!0,"Thanks!",a)}).catch(function(e){l(!1,e.response.data.error,a)})}},n.a.createElement("div",{className:"form-group"},n.a.createElement(m.a.Title,{level:4,className:"text-gray-600"},"Email Address"),n.a.createElement("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Your Email"})),n.a.createElement("div",{className:"form-group"},n.a.createElement(m.a.Title,{level:4,className:"text-gray-600"},"Name"),n.a.createElement("input",{type:"text",name:"name",className:"form-control",id:"exampleInputName",placeholder:"Your Name",required:"required"})),n.a.createElement("div",{className:"form-group"},n.a.createElement(m.a.Title,{level:4,className:"text-gray-600"},"Message"),n.a.createElement("textarea",{type:"text",name:"message",className:"form-control",id:"exampleInputName",placeholder:"Your Message",rows:"5",required:"required"})),n.a.createElement("button",{type:"submit",className:"btn btn-dark",disabled:a.submitting},"Submit"),a.status&&n.a.createElement("p",{className:a.status.ok?"":"errorMsg"},a.status.msg)))}}}]);
//# sourceMappingURL=component---src-pages-contact-index-js-aaac7be189f708c70347.js.map