(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{711:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("tags: [Math, Greedy]")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode.com/problems/maximum-split-of-positive-even-integers",target:"_blank",rel:"noopener noreferrer"}},[t._v("LC Link"),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{width:"702",alt:"image",src:"https://user-images.githubusercontent.com/41789327/180635284-2a26c000-d410-41bc-8f1d-e4fa68d7a6e4.png"}})]),t._v(" "),a("h2",{attrs:{id:"solution-greedy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution-greedy"}},[t._v("#")]),t._v(" Solution (Greedy)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode.com/problems/maximum-split-of-positive-even-integers/discuss/1783317/JavaPython-3-Greedy-w-brief-explanation-and-analysis.",target:"_blank",rel:"noopener noreferrer"}},[t._v("original"),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[a("p",[t._v("i 从最小的正偶整数（2） 开始，每次遍历的时候从finalSum里面减去 i，直到 i > finalSum")])]),t._v(" "),a("li",[a("p",[t._v("把finalSum 剩下的部分放到当前最大的正整数（也就是最后一个）上，以保证最后返回的数字没有duplicate")]),t._v(" "),a("p",[t._v("讲解： 比如\n"),a("code",[t._v("finalSum = 32")]),t._v(", and we have increased "),a("code",[t._v("i")]),t._v(" from "),a("code",[t._v("2")]),t._v(" to "),a("code",[t._v("10")]),t._v(" and get "),a("code",[t._v("2 + 4 + 6 + 8 + 10 = 30")]),t._v(". Now "),a("code",[t._v("finalSum")]),t._v(" has deducted "),a("code",[t._v("30")]),t._v(" and now is "),a("code",[t._v("2")]),t._v(", which is less than the next value of "),a("code",[t._v("i = 12")]),t._v(". Since we must used up "),a("code",[t._v("finalSum")]),t._v(", but putting "),a("code",[t._v("finalSum = 2")]),t._v(" back into the even number sequence will result duplicates of "),a("code",[t._v("2")]),t._v("; In addition, if we add "),a("code",[t._v("2")]),t._v(" to any number other than the biggest "),a("code",[t._v("10")]),t._v(", there will be duplicates also. The only option is adding "),a("code",[t._v("2")]),t._v(" to the largest one, "),a("code",[t._v("10")]),t._v(", to avoid duplicates.")])])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("maximumEvenSplit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" finalSum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\tres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" finalSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" finalSum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\tres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\tfinalSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" i\n\t\t\ti "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\t\tres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" finalSum\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);