(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{776:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description:")]),t._v(" "),n("p",[t._v("Given an integer array nums with possible duplicates, randomly output the index of a given target number. You can assume that the given target number must exist in the array.")]),t._v(" "),n("p",[t._v("Implement the Solution class:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("Solution(int[] nums)")]),t._v(" Initializes the object with the array nums.")]),t._v(" "),n("li",[n("code",[t._v("int pick(int target)")]),t._v(" Picks a random index i from nums where nums[i] == target. If there are multiple valid i's, then each index should have an equal probability of returning.")])]),t._v(" "),n("p",[t._v("给定一个可能含有重复元素的整数数组，要求随机输出给定的数字的索引。 您可以假设给定的数字一定存在于数组中。")]),t._v(" "),n("p",[t._v("注意：\n数组大小可能非常大。 使用太多额外空间的解决方案将不会通过测试。")]),t._v(" "),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('Input\n["Solution", "pick", "pick", "pick"]\n[[[1, 2, 3, 3, 3]], [3], [1], [3]]\nOutput\n[null, 4, 0, 2]\n\nExplanation\nSolution solution = new Solution([1, 2, 3, 3, 3]);\nsolution.pick(3); // It should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.\nsolution.pick(1); // It should return 0. Since in the array only nums[0] is equal to 1.\nsolution.pick(3); // It should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("h2",{attrs:{id:"solution-蓄水池抽样-random-reservoir-sampling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#solution-蓄水池抽样-random-reservoir-sampling"}},[t._v("#")]),t._v(" Solution: 蓄水池抽样(random reservoir sampling)")]),t._v(" "),n("p",[t._v("以 example 中的 "),n("code",[t._v("nums")]),t._v(" = "),n("code",[t._v("[1,2,3,3,3]")]),t._v(", "),n("code",[t._v("target")]),t._v(" = "),n("code",[t._v("3")]),t._v(" 为例， 需要的变量：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("cnt")]),t._v(": 遇到target的次数")]),t._v(" "),n("li",[n("code",[t._v("res")]),t._v(": 每次遇到target元素就按不同的概率更新 "),n("code",[t._v("res")]),t._v(". 第一次：1/1， 第二次： 1/2， 第三次 1/3。\n"),n("ul",[n("li",[t._v("为什么 这样得到的不同数字留下的概率一样？ 假设总共三个重复元素：\n"),n("ul",[n("li",[t._v("数据1被留下：（1/2）(2/3) = 1/3")]),t._v(" "),n("li",[t._v("数据2被留下概率：（1/2）(2/3) = 1/3")]),t._v(" "),n("li",[t._v("数据3被留下概率：1/3")])])]),t._v(" "),n("li",[t._v("所以概率是一样的")])])]),t._v(" "),n("li",[t._v("怎么更新"),n("code",[t._v("res")]),t._v(":\n"),n("ul",[n("li",[t._v("在每次iteration时，如果当前元素=target，找一个"),n("code",[t._v("randint = randint(1,cnt)")]),t._v(",如果"),n("code",[t._v("randint=cnt")]),t._v("，"),n("code",[t._v("res=当前index")]),t._v("。")])])])]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nums "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        cnt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ele "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("enumerate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" target "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                cnt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                randint "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" random"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cnt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" randint "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" cnt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);