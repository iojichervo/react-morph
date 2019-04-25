(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/pages/GettingStarted/curve.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return m});var s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=t("./node_modules/react/index.js"),i=t("./node_modules/@mdx-js/react/dist/index.es.js"),o=t("./node_modules/docz/dist/index.esm.js"),c=t("./node_modules/react-morph/index.js"),l=t("./node_modules/react-morph/easings.js"),b=t("./src/images.js"),u=t("../node_modules/@popmotion/easing/dist/easing.es.js"),p={},d="wrapper";function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)(d,Object.assign({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"curves--easings"},"Curves & Easings"),Object(i.b)("h2",{id:"curves"},"Curves"),Object(i.b)("p",null,"It's possible to create a curve instead of a linear translation between morph states."),Object(i.b)("p",null,"In order to achieve that you need to set different easings between ",Object(i.b)("inlineCode",{parentName:"p"},"X")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Y")," values."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"useMorph({\n  easings: {\n    translateX: easeOutSin,\n    translateY: easeInSin,\n  },\n});\n")),Object(i.b)("h2",{id:"demo"},"Demo"),Object(i.b)(o.c,{__position:0,__code:'() => {\n  // Handle toggle state as you normally would.\n  const [toggle, setToggle] = useState(false)\n  const morph = useMorph({\n    isReversed: !toggle,\n    easings: {\n      translateX: easeOutSin,\n      translateY: easeInSin,\n    },\n  })\n  return (\n    <div>\n      <button onClick={() => setToggle(!toggle)}>Let\'s morph!</button>\n      <br />\n      {toggle && <img key="one" {...morph} src={larva} width="30" />}\n\n      <br />\n      <br />\n      <br />\n      <br />\n\n      {!toggle && (\n        <img\n          key="two"\n          {...morph({ style: { float: \'right\' } })}\n          src={butterfly}\n          width="50"\n        />\n      )}\n    </div>\n  )\n}',__scope:{props:this?this.props:t,Playground:o.c,useState:r.useState,useMorph:c.useMorph,easeInSin:l.easeInSin,easeOutSin:l.easeOutSin,easeIn:l.easeIn,easeOut:l.easeOut,butterfly:b.a,larva:b.b,circIn:u.circIn,circOut:u.circOut,circInOut:u.circInOut,reversed:u.reversed,createMirroredEasing:u.createMirroredEasing},mdxType:"Playground"},function(){var e=Object(r.useState)(!1),n=Object(s.a)(e,2),t=n[0],a=n[1],o=Object(c.useMorph)({isReversed:!t,easings:{translateX:l.easeOutSin,translateY:l.easeInSin}});return Object(i.b)("div",null,Object(i.b)("button",{onClick:function(){return a(!t)}},"Let's morph!"),Object(i.b)("br",null),t&&Object(i.b)("img",Object.assign({key:"one"},o,{src:b.b,width:"30"})),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("br",null),!t&&Object(i.b)("img",Object.assign({key:"two"},o({style:{float:"right"}}),{src:b.a,width:"50"})))}),Object(i.b)("h2",{id:"easings"},"Easings"),Object(i.b)("p",null,"The valid CSS property keys are: ",Object(i.b)("inlineCode",{parentName:"p"},"translateX"),", ",Object(i.b)("inlineCode",{parentName:"p"},"translateY"),", ",Object(i.b)("inlineCode",{parentName:"p"},"scaleX"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"scaleY"),"."),Object(i.b)("p",null,"The value should be an easing function that ",Object(i.b)("strong",{parentName:"p"},"doesn't clamp")," the values."),Object(i.b)("p",null,'React Morph provides some "safe" easing functions. You can import them like these:'),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { easeInSin, easeOutSin, easeIn, easeOut } from 'react-morph/easings';\n")),Object(i.b)("h3",{id:"fine-tuning"},"Fine-tuning"),Object(i.b)("p",null,"Different ease functions will result in different curve shapes.\nDepending on the easing and spring values you might need to fine-tune other spring properties like ",Object(i.b)("inlineCode",{parentName:"p"},"restDisplacementThreshold")," or ",Object(i.b)("inlineCode",{parentName:"p"},"overshootClamping")),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"useMorph({\n  spring: {\n    restDisplacementThreshold: 0.0001,\n    overshootClamping: true,\n  },\n});\n")))}m&&m===Object(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/pages/GettingStarted/curve.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=src-pages-getting-started-curve.c138f4875e99a255afde.js.map