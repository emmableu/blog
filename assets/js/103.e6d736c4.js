(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{575:function(s,t,n){"use strict";n.r(t);var e=n(19),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://leetcode.com/problems/nested-list-weight-sum/",target:"_blank",rel:"noopener noreferrer"}},[s._v("LC link"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),n("p",[s._v("You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists.")]),s._v(" "),n("p",[s._v("The depth of an integer is the number of lists that it is inside of. For example, the nested list "),n("code",[s._v("[1,[2,2],[[3],2],1]")]),s._v(" has each integer's value set to its depth.")]),s._v(" "),n("p",[s._v("Return the sum of each integer in "),n("code",[s._v("nestedList")]),s._v(" multiplied by its depth.")]),s._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Example 1:\nInput: nestedList = [[1,1],2,[1,1]]\nOutput: 10\nExplanation: Four 1's at depth 2, one 2 at depth 1. 1*2 + 1*2 + 2*1 + 1*2 + 1*2 = 10.\n\nExample 2:\nInput: nestedList = [1,[4,[6]]]\nOutput: 27\nExplanation: One 1 at depth 1, one 4 at depth 2, and one 6 at depth 3. 1*1 + 4*2 + 6*3 = 27.\n\nExample 3:\nInput: nestedList = [0]\nOutput: 0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h2",{attrs:{id:"solution"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[s._v("#")]),s._v(" Solution")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("depthSum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nestedList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("NestedInteger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("depth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nonlocal")]),s._v(" res\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isInteger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getInteger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" depth\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" child "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                dfs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("depth "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" ele "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" nestedList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            dfs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# """')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is the interface that allows for creating nested lists.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# You should not implement it, or speculate about its implementation")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# """')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#class NestedInteger:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    def __init__(self, value=None):")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#        """')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        If value is not specified, initializes an empty list.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        Otherwise initializes a single integer equal to value.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#        """')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    def isInteger(self):")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#        """')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        @return True if this NestedInteger holds a single integer, rather than a nested list.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        :rtype bool")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#        """')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    def add(self, elem):")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#        """')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        Set this NestedInteger to hold a nested list and adds a nested integer elem to it.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        :rtype void")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#        """')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    def setInteger(self, value):")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#        """')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        Set this NestedInteger to hold a single integer equal to value.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        :rtype void")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#        """')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    def getInteger(self):")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#        """')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        @return the single integer that this NestedInteger holds, if it holds a single integer")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        Return None if this NestedInteger holds a nested list")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        :rtype int")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#        """')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    def getList(self):")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#        """')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        @return the nested list that this NestedInteger holds, if it holds a nested list")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        Return None if this NestedInteger holds a single integer")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        :rtype List[NestedInteger]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#        """')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);