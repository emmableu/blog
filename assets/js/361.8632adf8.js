(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{833:function(s,t,n){"use strict";n.r(t);var a=n(19),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://leetcode.com/problems/knight-dialer/",target:"_blank",rel:"noopener noreferrer"}},[s._v("LC link"),n("OutboundLink")],1),s._v(" "),n("a",{attrs:{href:"https://leetcode-cn.com/problems/knight-dialer/solution/4zhuang-tai-dong-tai-gui-hua-pythonjie-kong-jian-f/",target:"_blank",rel:"noopener noreferrer"}},[s._v("explanation (O(lg n))"),n("OutboundLink")],1),s._v(" "),n("a",{attrs:{href:"https://leetcode-cn.com/problems/knight-dialer/solution/dong-tai-gui-hua-pythonjie-by-clay001/",target:"_blank",rel:"noopener noreferrer"}},[s._v("explanation (O(n))"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),n("p",[s._v("The chess knight has a unique movement, it may move two squares vertically and one square horizontally, or two squares horizontally and one square vertically (with both forming the shape of an L) （走日字）.")]),s._v(" "),n("p",[s._v("A chess knight can move as indicated in the chess diagram below:")]),s._v(" "),n("p",[s._v("We have a chess knight and a phone pad as shown below, the knight can only stand on a numeric cell (i.e. blue cell).")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1 2 3\n4 5 6\n7 8 9\n  0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("Given an integer n, return how many distinct phone numbers of length n we can dial.")]),s._v(" "),n("p",[s._v("You are allowed to place the knight on any numeric cell initially and then you should perform n - 1 jumps to dial a number of length n. All jumps should be valid knight jumps.")]),s._v(" "),n("p",[s._v("As the answer may be very large, "),n("strong",[s._v("return the answer modulo 109 + 7")]),s._v(".")]),s._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Example 1:\nInput: n = 1\nOutput: 10\nExplanation: We need to dial a number of length 1, so placing the knight over any numeric cell of the 10 cells is sufficient.\n\nExample 2:\nInput: n = 2\nOutput: 20\nExplanation: All the valid number we can dial are [04, 06, 16, 18, 27, 29, 34, 38, 40, 43, 49, 60, 61, 67, 72, 76, 81, 83, 92, 94]\n\nExample 3:\nInput: n = 3\nOutput: 46\n\nExample 4:\nInput: n = 4\nOutput: 104\n\nExample 5:\nInput: n = 3131\nOutput: 136006598\nExplanation: Please take care of the mod.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("h2",{attrs:{id:"solution"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[s._v("#")]),s._v(" Solution")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("        4  -  9\n      /          \\\n    3     \\       2\n    |      0      |\n    8       \\     7\n     \\          /  \n       1  -   6\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"o-n-这个方法必须掌握-因为更常规"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#o-n-这个方法必须掌握-因为更常规"}},[s._v("#")]),s._v(" O(n) （这个方法必须掌握，因为更常规）")]),s._v(" "),n("p",[n("code",[s._v("dp")]),s._v(": 当前点是这个点的可能的跳的方法有几种")]),s._v(" "),n("ul",[n("li",[s._v("e.g., N = 2 (跳两次)，则结果为 "),n("code",[s._v("[2,2,2,2,3,0,3,2,2,2]")])]),s._v(" "),n("li",[s._v("N = 3 (跳三次)，则结果为 "),n("code",[s._v("[6, 5, 4, 5, 6, 0, 6, 5, 4, 5]")]),s._v(" "),n("code",[s._v("moves")]),s._v("为终止位置分别为0-9的时候，它的上一步可能位置")])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("knightDialer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" N"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始时为一位的时候，就是起点的数值 ")]),s._v("\n        dp "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0可以跳到4，6； 1可以跳到6，8, ...")]),s._v("\n        moves "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n        MOD "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("N"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            temp "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" idx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" next_lst "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("enumerate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("moves"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" pos "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" next_lst"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                    temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("idx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                    temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("MOD\n            dp "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" temp\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出的时候需要取一次模，因为答案可能会非常大，这里需要特别注意")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" MOD\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h3",{attrs:{id:"o-lg-n"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#o-lg-n"}},[s._v("#")]),s._v(" O(lg n)")]),s._v(" "),n("p",[s._v('（复杂度 lg n 由于矩阵快速幂的时间复杂度为O(log(n))\n图片表示，当骑士处于“1”处时，下一跳将在“6”或“8”；骑士处于“4”处时，下一跳将在“3”或“0”或"9";骑士处于“0”处时，下一跳将在“4”或“6”......')]),s._v(" "),n("p",[s._v("我们可以发现，1、3、7、9处于对称位置；2，8处于对称位置;4，6处于对称位置。因此，我们可以将数字分为4个状态，命名为A、B、C、D。其中"),n("code",[s._v("A:{1,3,7,9}")]),s._v(", "),n("code",[s._v("B:{2,8}")]),s._v(", "),n("code",[s._v("C:{4,6}")]),s._v(", "),n("code",[s._v("D:{0}")]),s._v("。")]),s._v(" "),n("p",[s._v("我们用f(X,n)表示：在状态X下，跳跃n步能够得到不同数字的个数。则状态转移方程为：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("f(A,n)=f(B,n-1)+f(C,n-1)\nf(B,n)=2*f(A,n-1)\nf(C,n)=2*f(A,n-1)+f(D,n-1)\nf(D,n)=2*f(C,n-1)\n解释为：\n处于状态A中的数字(1,3,7,9)通过一次跳跃要么变成状态B(2,8)，要么变成状态C(4,6)\n处于状态B中的数字(2,8)通过一次跳跃有两种方式变成状态A(1,3,7,9)\n处于状态C中的数字(4,6)通过一次跳跃有两种方式变成状态A(1,3,7,9)，还有一种方式变成状态D(0)\n处于状态D中的数字(0)通过一次跳跃有两种方式变成状态C(4,6)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("knightDialer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" N"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" N"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#分别为状态A,B,C,D")]),s._v("\n        nums"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" _ "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("N"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            nums"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#状态A有4个数字，B有2个数字，C有2个数字，D有1个数字")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000000007")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);