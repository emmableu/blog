(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{588:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://leetcode.com/problems/cutting-ribbons/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LC link"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),n("p",[t._v("You are given an integer array ribbons, where ribbons[i] represents the length of the ith ribbon, and an integer k. You may cut any of the ribbons into any number of segments of positive integer lengths, or perform no cuts at all.")]),t._v(" "),n("p",[t._v("For example, if you have a ribbon of length 4, you can:\nKeep the ribbon of length 4,")]),t._v(" "),n("ul",[n("li",[t._v("Cut it into one ribbon of length 3 and one ribbon of length 1,")]),t._v(" "),n("li",[t._v("Cut it into two ribbons of length 2,")]),t._v(" "),n("li",[t._v("Cut it into one ribbon of length 2 and two ribbons of length 1, or")]),t._v(" "),n("li",[t._v("Cut it into four ribbons of length 1.\nYour goal is to obtain k ribbons of all the same positive integer length. You are allowed to throw away any excess ribbon as a result of cutting.")])]),t._v(" "),n("p",[t._v("Return the maximum possible positive integer length that you can obtain k ribbons of, or 0 if you cannot obtain k ribbons of the same length.")]),t._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Example 1:\nInput: ribbons = [9,7,5], k = 3\nOutput: 5\nExplanation:\n- Cut the first ribbon to two ribbons, one of length 5 and one of length 4.\n- Cut the second ribbon to two ribbons, one of length 5 and one of length 2.\n- Keep the third ribbon as it is.\nNow you have 3 ribbons of length 5.\n\nExample 2:\nInput: ribbons = [7,5,9], k = 4\nOutput: 4\nExplanation:\n- Cut the first ribbon to two ribbons, one of length 4 and one of length 3.\n- Cut the second ribbon to two ribbons, one of length 4 and one of length 1.\n- Cut the third ribbon to three ribbons, two of length 4 and one of length 1.\nNow you have 4 ribbons of length 4.\n\nExample 3:\nInput: ribbons = [5,7,9], k = 22\nOutput: 0\nExplanation: You cannot obtain k ribbons of the same positive integer length.\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br")])]),n("h2",{attrs:{id:"solution"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[t._v("#")]),t._v(" Solution")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://emmableu.github.io/blog/pages/fb7263/",target:"_blank",rel:"noopener noreferrer"}},[t._v("用二分求上界方法"),n("OutboundLink")],1),t._v("来找 last possible cut size")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxLength")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ribbons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        l"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("min")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ribbons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ribbons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" l "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isPossible"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ribbons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mid <= best_pos")]),t._v("\n                l "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                r "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" r "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPossible")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ribbons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" size "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#必须有这个")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("size "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ele "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" ribbons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" k\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);