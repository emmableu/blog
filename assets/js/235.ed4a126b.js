(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{707:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("tags: [Array, Dynamic Programming]")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode.cn/problems/maximum-number-of-points-with-cost/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LC Link"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("similar trick used in:")]),t._v(" "),a("ul",[a("li",[t._v("121 -> 1014 -> 1937")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/202207220043952.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/202207220048757.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"solution-1-没有优化的dp-o-m-n-2-time-limit-exceeds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution-1-没有优化的dp-o-m-n-2-time-limit-exceeds"}},[t._v("#")]),t._v(" Solution 1: 没有优化的dp, "),a("code",[t._v("O(M*N^2)")]),t._v(", time limit exceeds")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dp[r][c] = max(dp[r - 1][prev_c]\n\t\t\t   + points[r][c]\n\t\t\t   - abs(c - prev_c) for prev_c in range(len(points[0)))\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxPoints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\tdp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\tcur_row_max "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("enumerate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\t\tmax_val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" prev_c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prev_val "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("enumerate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\t\t\tmax_val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" prev_val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" prev_c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\tcur_row_max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\tdp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur_row_max\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h2",{attrs:{id:"solution-2-best-solution-o-mn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution-2-best-solution-o-mn"}},[t._v("#")]),t._v(" Solution 2: Best Solution (O(MN))")]),t._v(" "),a("p",[t._v("从第一行往下走，假设上一行的结果已经得到了, e.g., "),a("code",[t._v("prev")]),t._v("， 表示前x行, 这里 "),a("code",[t._v("prev[i]")]),t._v(" 表示如果我们在第x行，如果最终选的是 "),a("code",[t._v("points[x][i]")]),t._v(", 那么得到的最高的总分是多少")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://assets.leetcode.com/users/images/8cbe8fdc-55c6-4629-9d76-acb88de4aac5_1651327285.2736592.png",alt:"image"}})]),t._v(" "),a("p",[t._v("现在我们走到第x + 1行，选"),a("code",[t._v("points[X + 1]")]),t._v(", 如何根据"),a("code",[t._v("prev")]),t._v(" 来计算 result array "),a("code",[t._v("curr")]),t._v(":")]),t._v(" "),a("p",[t._v("按照之前的方法：\n"),a("code",[t._v("curr[i] = max(prev[j] - abs(j - i) for j in range(n)) + points[X+1][i]")]),t._v(",\n但是如果比较prev 里面的每一个index 和 points[x + 1]里面的每一个index，那么需要耗时 O(N^2)，最终总的时间复杂度变成 "),a("code",[t._v("O(M*N^2)")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://assets.leetcode.com/users/images/1f076567-5fbc-4203-af98-1d463e4722ee_1651327294.0604868.png",alt:"image"}})]),t._v(" "),a("p",[t._v("注意： 对于一个index i，它的最大值 curr[i] 是使用的要不 prev 中 i 左边的数（包括i）， 要不 prev中 i 右边的数（包括i）")]),t._v(" "),a("p",[t._v("所以可以建立两个数组："),a("code",[t._v("lft")]),t._v(" 和 "),a("code",[t._v("rgt")]),t._v(",\nlft 数组： lft[i] 表示 "),a("code",[t._v("prev[0, i]")]),t._v(" 之间的到目前为止的最大值，左闭右闭，包括i. 因为视角是i的视角，所以从i 往左每个计算的时候都要对应的做减法\nrgt 数组： rgt[i]表示 "),a("code",[t._v("prev[i, len(points[0]) - 1]")]),t._v(" 之间，也就是从右往左走到i 点的时候的最大值，左闭右闭, 包括i。因为视角是i的视角，所以从i 往右每个计算的时候都要对应的做减法")]),t._v(" "),a("p",[t._v("注意这里为了方便起见，lft[i]  和 rgt[i]计算的时候都包括 i 这个点本身。因为反正算的是max，多算一次不影响。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://assets.leetcode.com/users/images/19088d33-9447-4727-8728-514f0c7f041f_1651327304.4782481.png",alt:"image"}})]),t._v(" "),a("p",[a("code",[t._v("lft[0] = prev[0],")]),t._v(" 因为  "),a("code",[t._v("prev[0, 0]")]),t._v(" 之间的到目前为止的最大值(左闭右闭)就是 prev[0]")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://assets.leetcode.com/users/images/a86e7828-0495-4ab7-a753-f3a0819fe642_1651327321.5416875.png",alt:"image"}})]),t._v(" "),a("p",[a("code",[t._v("lft[1] = max(prev[1], lft[0] - 1)")]),t._v("，因为现在视角是1，所以前面的最大值到这里要减1")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://assets.leetcode.com/users/images/dee3e134-d5fc-4140-a4d4-43dfd0d0785a_1651327334.5943615.png",alt:"image"}})]),t._v(" "),a("p",[a("code",[t._v("lft[2] = max(prev[2], lft[1] - 1)")]),t._v(",同理，因为现在视角是1，所以前面的最大值到这里要减1")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://assets.leetcode.com/users/images/2922aa49-05e2-4618-817d-34617be30389_1651327340.3885162.png",alt:"image"}})]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Wait a second...")]),t._v(" "),a("strong",[t._v("Why we just compare prev[2] and lft[1] - 1, why its not necessary to compare lft[0] - 2 as well?")])])]),t._v(" "),a("p",[t._v("Assume we do compare: "),a("strong",[t._v("lft[1] - 1")]),t._v(" and "),a("strong",[t._v("lft[0] - 2")]),t._v(", that is, to get "),a("code",[t._v("max(lft[2], lft[1] - 1, lft[0] - 2)")]),t._v("\nAdd "),a("strong",[t._v("1")]),t._v(" to last two terms and we have: "),a("strong",[t._v("lft[1]")]),t._v(", "),a("strong",[t._v("lft[0] - 1")]),t._v(".\nLooks familiar? That is exactly the previous comparison we made for "),a("code",[t._v("index=1")]),t._v(", we have already selected the maximum value in the selection on the previous index and saved it in "),a("strong",[t._v("curr[1]")]),t._v(", shifting all previous candidates by 1 doesn't change the result. We can just safetly use the larger result from the previous index.")]),t._v(" "),a("p",[t._v("同理建 "),a("code",[t._v("rgt")]),t._v(" 数组：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://assets.leetcode.com/users/images/217aa899-811d-44be-8d85-316e84d23be3_1651327348.3117893.png",alt:"image"}})]),t._v(" "),a("ul",[a("li",[a("code",[t._v("rgt[n-1] = prev[n-1]")])]),t._v(" "),a("li",[a("code",[t._v("rgt[n-2] = max(prev[n-2], rgt[n-1] - 1)")])]),t._v(" "),a("li",[a("code",[t._v("rgt[n-3] = max(prev[n-3], rgt[n-2] - 1)")])]),t._v(" "),a("li",[t._v("...")])]),t._v(" "),a("p",[t._v("对于每一个 "),a("strong",[t._v("points[X+1]")]),t._v(" 里面的index i， 我们只要在 lft[i] 和 rgt[i] 里面取最大值，再加上 "),a("code",[t._v("points[x+1][i]")]),t._v(" 即可，")]),t._v(" "),a("p",[t._v("也就是 "),a("code",[t._v("curr[i] = max(lft[i], rgt[i]) + points[x + 1][i]")])]),t._v(" "),a("p",[t._v("Aftering filling "),a("strong",[t._v("curr")]),t._v(", we could move on to the next row by taking "),a("strong",[t._v("curr")]),t._v(" as "),a("strong",[t._v("prev")]),t._v(". Therefore, for each new row, we repeatedly get "),a("strong",[t._v("lft, rgt")]),t._v(" from "),a("strong",[t._v("prev")]),t._v(", get "),a("strong",[t._v("curr")]),t._v(" from "),a("strong",[t._v("points[X], lft, rgt")]),t._v(", until we reach the last row.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://assets.leetcode.com/users/images/cbac3d46-47f2-4541-a595-e27b3bf6bf8f_1651327356.6044252.png",alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[t._v("#")]),t._v(" 举例")]),t._v(" "),a("p",[t._v("以")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("points "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("为例")]),t._v(" "),a("p",[t._v("第一行肯定就是 [3,1,2],")]),t._v(" "),a("p",[t._v("假设现在算第二行")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("prev = [3,1,2]\nlft = [3,2,2]\nrgt = [3,1,2]\n因为 points[1] = [5, 6, 4]\ncurr = [8,8,6]\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" code")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxPoints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\tm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tcurr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\tprev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curr\n\t\t\tlft "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\trgt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\t\tlft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\trgt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rgt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\tcurr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rgt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" ele "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ele "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("enumerate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);