"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8539],{1417:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=t(7462),r=(t(7294),t(3905)),p=t(214);const o={title:"Appbar.Header"},s=void 0,c={unversionedId:"components/Appbar/AppbarHeader",id:"components/Appbar/AppbarHeader",title:"Appbar.Header",description:"A component to use as a header at the top of the screen.",source:"@site/docs/components/Appbar/AppbarHeader.mdx",sourceDirName:"components/Appbar",slug:"/components/Appbar/AppbarHeader",permalink:"/react-native-paper/docs/components/Appbar/AppbarHeader",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/docs/docs/components/Appbar/AppbarHeader.mdx",tags:[],version:"current",frontMatter:{title:"Appbar.Header"},sidebar:"components",previous:{title:"Appbar.Content",permalink:"/react-native-paper/docs/components/Appbar/AppbarContent"},next:{title:"Avatar.Icon",permalink:"/react-native-paper/docs/components/Avatar/AvatarIcon"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],d={toc:i};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A component to use as a header at the top of the screen.\nIt can contain the screen title, controls such as navigation buttons, menu button etc."),(0,r.kt)("div",{class:"screenshots"},(0,r.kt)("figure",null,(0,r.kt)("img",{class:"small",src:"/react-native-paper/screenshots/appbar-small.png"}),(0,r.kt)("figcaption",null,"small")),(0,r.kt)("figure",null,(0,r.kt)("img",{class:"small",src:"/react-native-paper/screenshots/appbar-medium.png"}),(0,r.kt)("figcaption",null,"medium")),(0,r.kt)("figure",null,(0,r.kt)("img",{class:"small",src:"/react-native-paper/screenshots/appbar-large.png"}),(0,r.kt)("figcaption",null,"large")),(0,r.kt)("figure",null,(0,r.kt)("img",{class:"small",src:"/react-native-paper/screenshots/appbar-center-aligned.png"}),(0,r.kt)("figcaption",null,"center-aligned"))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Appbar } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const _goBack = () => console.log('Went back');\n\n  const _handleSearch = () => console.log('Searching');\n\n  const _handleMore = () => console.log('Shown more');\n\n  return (\n    <Appbar.Header>\n      <Appbar.BackAction onPress={_goBack} />\n      <Appbar.Content title=\"Title\" />\n      <Appbar.Action icon=\"magnify\" onPress={_handleSearch} />\n      <Appbar.Action icon=\"dots-vertical\" onPress={_handleMore} />\n    </Appbar.Header>\n  );\n};\n\nexport default MyComponent;\n")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)(p.Z,{link:"Appbar/AppbarHeader",mdxType:"PropTable"}))}m.isMDXComponent=!0}}]);