(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{678:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"相关题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关题"}},[t._v("#")]),t._v(" 相关题")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"/tags/?tag=dfs"}},[t._v("dfs tag")])])]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/pages/f819fd/"}},[t._v("489 - Robot Room Cleaner")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/pages/9b41ae/"}},[t._v("062 - 1088 - Confusing Number II - Hard")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/pages/598f40/"}},[t._v("101 - 425 - Word Squares - Hard")])],1)]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/pages/a4c8ae/"}},[t._v("1820 - Maximum Number of Accepted Invitations - Medium")]),t._v(" (匈牙利算法)")],1)]),t._v(" "),a("li",[a("p",[t._v("24 点 类似题：")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/pages/1b033f/"}},[t._v("241 - 282 - Expression Add Operators")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/pages/60cd6c/"}},[t._v("123 - 679 - 24 Game - Hard")])],1)])])]),t._v(" "),a("h3",{attrs:{id:"backtracking-also-using-vis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backtracking-also-using-vis"}},[t._v("#")]),t._v(" Backtracking also using VIS:")]),t._v(" "),a("ul",[a("li",[t._v("全排列问题，见下")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/pages/5c6390/"}},[t._v("Unique Paths III")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/pages/fb16cb/"}},[t._v("N Queens")])],1)]),t._v(" "),a("h3",{attrs:{id:"strobogrammatic-number-回溯题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strobogrammatic-number-回溯题"}},[t._v("#")]),t._v(" strobogrammatic number 回溯题")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/tags/?tag=strobogrammatic/"}},[t._v("tag")])],1),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/pages/a888ae/"}},[t._v("246-Strobogrammatic Number")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/pages/4e636c/"}},[t._v("197 - 247 - Strobogrammatic Number II - Medium")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/pages/9b41ae/"}},[t._v("062 - 1088 - Confusing Number II - Hard")])],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://labuladong.github.io/algo/1/6/",target:"_blank",rel:"noopener noreferrer"}},[t._v("source"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"回溯算法框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回溯算法框架"}},[t._v("#")]),t._v(" 回溯算法框架")]),t._v(" "),a("p",[t._v("解决一个回溯问题，实际上就是一个决策树的遍历过程，站在回溯树的一个节点上，只需要思考 3 个问题：")]),t._v(" "),a("p",[t._v("1、路径：也就是已经做出的选择。")]),t._v(" "),a("p",[t._v("2、选择列表：也就是你当前可以做的选择。")]),t._v(" "),a("p",[t._v("3、结束条件：也就是到达决策树底层，无法再做选择的条件。")]),t._v(" "),a("p",[t._v("代码方面，回溯算法的框架：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 选择列表"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" 满足结束条件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" 选择 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 选择列表"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        做选择\n        backtrack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 选择列表"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        撤销选择\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[a("strong",[t._v("其核心就是 for 循环里面的递归，在递归调用之前「做选择」，在递归调用之后「撤销选择」")])]),t._v(" "),a("h2",{attrs:{id:"一、全排列问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、全排列问题"}},[t._v("#")]),t._v(" 一、全排列问题")]),t._v(" "),a("p",[t._v("我们在高中的时候就做过排列组合的数学题，我们也知道 "),a("code",[t._v("n")]),t._v(" 个不重复的数，全排列共有 "),a("code",[t._v("n!")]),t._v(" 个。那么我们当时是怎么穷举全排列的呢？")]),t._v(" "),a("p",[t._v("比方说给三个数 "),a("code",[t._v("[1,2,3]")]),t._v("，你肯定不会无规律地乱穷举，一般是这样：")]),t._v(" "),a("p",[t._v("先固定第一位为 1，然后第二位可以是 2，那么第三位只能是 3；然后可以把第二位变成 3，第三位就只能是 2 了；然后就只能变化第一位，变成 2，然后再穷举后两位……")]),t._v(" "),a("p",[t._v("其实这就是回溯算法，我们高中无师自通就会用，或者有的同学直接画出如下这棵回溯树：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://labuladong.github.io/algo/images/backtracking/1.jpg",alt:""}})]),t._v(" "),a("p",[t._v("只要从根遍历这棵树，记录路径上的数字，其实就是所有的全排列。"),a("strong",[t._v("我们不妨把这棵树称为回溯算法的「决策树」")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("为啥说这是决策树呢，因为你在每个节点上其实都在做决策")]),t._v("。比如说你站在下图的红色节点上：\n"),a("img",{attrs:{src:"https://labuladong.github.io/algo/images/backtracking/2.jpg",alt:""}})]),t._v(" "),a("p",[t._v("你现在就在做决策，可以选择 1 那条树枝，也可以选择 3 那条树枝。为啥只能在 1 和 3 之中选择呢？因为 2 这个树枝在你身后，这个选择你之前做过了，而全排列是不允许重复使用数字的。")]),t._v(" "),a("p",[a("strong",[t._v("现在可以解答开头的几个名词："),a("code",[t._v("[2]")]),t._v(" 就是「路径」，记录你已经做过的选择；"),a("code",[t._v("[1,3]")]),t._v(" 就是「选择列表」，表示你当前可以做出的选择；「结束条件」就是遍历到树的底层叶子节点，这里也就是选择列表为空的时候")]),t._v("。\n如果明白了这几个名词，可以把「路径」和「选择」列表作为决策树上每个节点的属性，比如下图列出了几个蓝色节点的属性：\n"),a("img",{attrs:{src:"https://labuladong.github.io/algo/images/backtracking/3.jpg",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("我们定义的 "),a("code",[t._v("backtrack")]),t._v(" 函数其实就像一个指针，在这棵树上游走，同时要正确维护每个节点的属性，每当走到树的底层叶子节点，其「路径」就是一个全排列")]),t._v("。")]),t._v(" "),a("p",[t._v("再进一步，如何遍历一棵树？这个应该不难吧。回忆一下之前 "),a("a",{attrs:{href:"https://labuladong.github.io/algo/1/2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("学习数据结构的框架思维"),a("OutboundLink")],1),t._v(" 写过，各种搜索问题其实都是树的遍历问题，而多叉树的遍历框架就是这样：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" child "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childern"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 前序位置需要的操作")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后序位置需要的操作")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("而所谓的前序遍历和后序遍历，他们只是两个很有用的时间点，我给你画张图你就明白了：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://labuladong.github.io/algo/images/backtracking/4.jpg",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("前序遍历的代码在进入某一个节点之前的那个时间点执行，后序遍历代码在离开某个节点之后的那个时间点执行")]),t._v("。")]),t._v(" "),a("p",[t._v("回想我们刚才说的，「路径」和「选择」是每个节点的属性，函数在树上游走要正确维护节点的属性，那么就要在这两个特殊时间点搞点动作：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://labuladong.github.io/algo/images/backtracking/5.jpg",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://labuladong.github.io/algo/images/backtracking/5.jpg",alt:""}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("现在，你是否理解了回溯算法的这段核心框架？")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" 选择 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 选择列表"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 做选择")]),t._v("\n    将该选择从选择列表移除\n    路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("选择"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    backtrack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 选择列表"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 撤销选择")]),t._v("\n    路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("remove"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("选择"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    将该选择再加入选择列表\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[a("strong",[t._v("我们只要在递归之前做出选择，在递归之后撤销刚才的选择")]),t._v("，就能正确得到每个节点的选择列表和路径。")]),t._v(" "),a("p",[t._v("根据以上，写出全排列代码：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" copy\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("permute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\tres "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\tused "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tself"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" used"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" used"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\tres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("copy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deepcopy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" used"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\t\tpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\tused"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入下一层决策树")]),t._v("\n\t\t\t\tself"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" used"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取消选择")]),t._v("\n\t\t\t\tpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\tused"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br")])]),a("ul",[a("li",[t._v("接下来看subset 题 "),a("a",{attrs:{href:"https://emmableu.github.io/blog/pages/leetcode78",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);