(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{712:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://leetcode.cn/problems/guess-the-word/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LC Link"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/843-0.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[t._v("#")]),t._v(" Solution:")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode.com/problems/guess-the-word/discuss/556075/How-to-explain-to-interviewer-843.-Guess-the-Word",target:"_blank",rel:"noopener noreferrer"}},[t._v("source"),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("Clarify")])])]),t._v(" "),a("p",[t._v("注意：这个问题不是要求必须10次以内猜出来，而是次数越少越好，但是最终超过10次也没事，只是给的几个test case 都是10次之内能猜出来的")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[t._v("Idea")])])]),t._v(" "),a("p",[t._v("调用 "),a("code",[t._v("master.guess()")]),t._v(" 10次，或者一直调用到猜出来，哪个先满足就停下来。")]),t._v(" "),a("p",[t._v("idea: 每次猜完以后减少下一次的candidate的数量")]),t._v(" "),a("p",[t._v("伪代码：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pseudocode version 1")]),t._v("\ni "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nmatches "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" matches "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\tmatches "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a word "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" candidates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" let us call it "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"guess"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每次猜完了减少下一次的candidate的数量")]),t._v("\n\ti "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[a("strong",[t._v("怎样减少下一次的candidate的数量?")])]),t._v(" "),a("p",[a("code",[t._v("matches = master.guess(guess)")])]),t._v(" "),a("ul",[a("li",[t._v("如果 "),a("code",[t._v("matches == 6")]),t._v(", secret word 找到了，算法结束")]),t._v(" "),a("li",[t._v("如果 "),a("code",[t._v("matches != 6")]),t._v(", 说明 secret 和word之间刚好有 x 个字母是一样的")])]),t._v(" "),a("blockquote",[a("p",[t._v("因为 secret 和guess之间刚好有 x 个字母是一样的，所以我们在candidates里面可以只保留那些和 guess 刚好只有x个字母是一样的的单词，这样我们每次call master.guess 的时候candidate 数量就会变少。")])]),t._v(" "),a("p",[t._v("伪代码2：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pseudocode version 2")]),t._v("\ni "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nmatches "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" matches "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\tmatches "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a word "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" candidates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每次猜完了减少下一次的candidate的数量")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" candiate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" candiates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" matches "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" get_matches"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("candidate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" word"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\ttemp_candidates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("candidate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ti "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n\tcandidates "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" temp_candidates\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[a("code",[t._v("get_matches")]),t._v(" 是用来检查两个单词之间有多少个match的字母：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_matches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("word1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" word2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\tmatches "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" c1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("zip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("word1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" word2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\tmatches "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" c2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" matches\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" code")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" random\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findSecretWord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" wordlist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\ti "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t\tmatches "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" matches "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\tguess "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wordlist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wordlist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t\tmatches "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\tcandidates "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" word "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" wordlist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" matches "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_matches"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" word"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\t\t\tcandidates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("word"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\twordlist "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" candidates\n\t\t\ti "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_matches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" word1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" word2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\tmatches "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" c1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("zip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("word1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" word2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\tmatches "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" c2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" matches\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("h3",{attrs:{id:"举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[t._v("#")]),t._v(" 举例")]),t._v(" "),a("p",[t._v('secret = "acckzz", wordlist = ["acckzz","ccbazz","eiowzz","abcczz"]')]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("i")]),t._v(" "),a("th",[t._v("guess")]),t._v(" "),a("th",[t._v("matches")]),t._v(" "),a("th",[t._v("wordlist")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("0")]),t._v(" "),a("td",[t._v("ccbazz")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v('["acckzz","eiowzz","abcczz"]')])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("abcczz")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[t._v("['acckzz']")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("acckzz")]),t._v(" "),a("td",[t._v("6")]),t._v(" "),a("td",[t._v("[]")])])])]),t._v(" "),a("h3",{attrs:{id:"讨论这个算法有多大概率10次猜中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讨论这个算法有多大概率10次猜中"}},[t._v("#")]),t._v(" 讨论这个算法有多大概率10次猜中：")]),t._v(" "),a("p",[t._v("p(x)： "),a("code",[t._v("master.guess(word) == x")]),t._v(" 的概率。也就是说")]),t._v(" "),a("ol",[a("li",[t._v("对于这x个里面的每个字母，从26个字母里面选对这个字母，且对于不在这x里面的字母，确定选的不是那个和要求的字母一样的字母： "),a("code",[t._v("(1/26)^x * (25/26)^(6-x)")])]),t._v(" "),a("li",[t._v("让选出来的这 x 个字母的位置正确： C(6, x)")])]),t._v(" "),a("p",[t._v("所以，在6 个数字里面 选对 x个 C(6, x)：\n"),a("code",[t._v("p(x) = (1/26)^x * (25/26)^(6-x) * C(6, x)")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("p(0) = 79.03%")])]),t._v(" "),a("li",[a("code",[t._v("p(1) = 18.97%")])]),t._v(" "),a("li",[a("code",[t._v("p(2) = 1.90%")])]),t._v(" "),a("li",[a("code",[t._v("p(3) = 0.10%")])]),t._v(" "),a("li",[a("code",[t._v("p(4) = 0.003%")])]),t._v(" "),a("li",[a("code",[t._v("p(5) = 4.85e-5%")])]),t._v(" "),a("li",[a("code",[t._v("p(6) = 3.24e-7%")])])]),t._v(" "),a("p",[t._v("所以，")]),t._v(" "),a("ul",[a("li",[t._v("如果 "),a("code",[t._v("master.guess(word) == 0")]),t._v(", 我们就保留所有 "),a("code",[t._v("get_matches(word, candidate) == 0")]),t._v("  的 candidate，这样的话可以保留 "),a("code",[t._v("79.03%*79.03%")]),t._v(" = 62.45% 的 candidates.")]),t._v(" "),a("li",[t._v("if "),a("code",[t._v("master.guess(word) == 1")]),t._v(", we will keep 18.97% * 18.97% = 3.60%")]),t._v(" "),a("li",[t._v("if "),a("code",[t._v("master.guess(word) == 2")]),t._v(", we will keep 1.90% * 1.90% = 0.03")]),t._v(" "),a("li",[t._v("if "),a("code",[t._v("master.guess(word) == 3")]),t._v(", we will keep 0")]),t._v(" "),a("li",[t._v("if "),a("code",[t._v("master.guess(word) == 4")]),t._v(", we will keep 0")]),t._v(" "),a("li",[t._v("if "),a("code",[t._v("master.guess(word) == 5")]),t._v(", we will keep 0")]),t._v(" "),a("li",[t._v("if "),a("code",[t._v("master.guess(word) == 6")]),t._v(", we will keep 0")])]),t._v(" "),a("p",[t._v("The expectation of ratio of candidates we will keep after calling master.guess() is: "),a("code",[t._v("66.05%")]),t._v("\nAt the beginning, we have 100 candidates, after each calling, we keep 66.05% of them, 这样的话最后可以保留 "),a("code",[t._v("66.5% ^ 10 = 1.6%")])])])}),[],!1,null,null,null);s.default=e.exports}}]);