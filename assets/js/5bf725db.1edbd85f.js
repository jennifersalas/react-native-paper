"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3581],{3682:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=o(7462),n=(o(7294),o(3905)),i=o(214);const s={title:"Dialog"},l=void 0,r={unversionedId:"components/Dialog/Dialog",id:"components/Dialog/Dialog",title:"Dialog",description:"Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.",source:"@site/docs/components/Dialog/Dialog.mdx",sourceDirName:"components/Dialog",slug:"/components/Dialog/",permalink:"/react-native-paper/docs/components/Dialog/",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/docs/docs/components/Dialog/Dialog.mdx",tags:[],version:"current",frontMatter:{title:"Dialog"},sidebar:"components",previous:{title:"DataTable.Title",permalink:"/react-native-paper/docs/components/DataTable/DataTableTitle"},next:{title:"Dialog.Actions",permalink:"/react-native-paper/docs/components/Dialog/DialogActions"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],m={toc:p};function g(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.\nTo render the ",(0,n.kt)("inlineCode",{parentName:"p"},"Dialog")," above other components, you'll need to wrap it with the ",(0,n.kt)("a",{parentName:"p",href:"portal.html"},(0,n.kt)("inlineCode",{parentName:"a"},"Portal"))," component."),(0,n.kt)("div",{class:"screenshots"},(0,n.kt)("img",{class:"small",src:"/react-native-paper/screenshots/dialog-1.png"}),(0,n.kt)("img",{class:"small",src:"/react-native-paper/screenshots/dialog-2.png"})),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { View } from 'react-native';\nimport { Button, Dialog, Portal, Provider, Text } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [visible, setVisible] = React.useState(false);\n\n  const showDialog = () => setVisible(true);\n\n  const hideDialog = () => setVisible(false);\n\n  return (\n    <Provider>\n      <View>\n        <Button onPress={showDialog}>Show Dialog</Button>\n        <Portal>\n          <Dialog visible={visible} onDismiss={hideDialog}>\n            <Dialog.Title>Alert</Dialog.Title>\n            <Dialog.Content>\n              <Text variant=\"bodyMedium\">This is simple dialog</Text>\n            </Dialog.Content>\n            <Dialog.Actions>\n              <Button onPress={hideDialog}>Done</Button>\n            </Dialog.Actions>\n          </Dialog>\n        </Portal>\n      </View>\n    </Provider>\n  );\n};\n\nexport default MyComponent;\n")),(0,n.kt)("h2",{id:"props"},"Props"),(0,n.kt)(i.Z,{link:"Dialog/Dialog",mdxType:"PropTable"}))}g.isMDXComponent=!0}}]);