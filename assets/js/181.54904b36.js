(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{653:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("classification\nusing sequential to replace nn.Modules")]),t._v(" "),n("h3",{attrs:{id:"建立数据集"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#建立数据集"}},[t._v("#")]),t._v(" 建立数据集：")]),t._v(" "),n("p",[t._v("我们创建一些假数据来模拟真实的情况. 比如两个二次分布的数据, 不过他们的均值都不一样.")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" torch\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyplot "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" plt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假数据")]),t._v("\nn_data "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ones"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据的基本形态")]),t._v("\nx0 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("normal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("n_data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 类型0 x data (tensor), shape=(100, 2)")]),t._v("\ny0 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zeros"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 类型0 y data (tensor), shape=(100, )")]),t._v("\nx1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("normal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("n_data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 类型1 x data (tensor), shape=(100, 1)")]),t._v("\ny1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ones"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 类型1 y data (tensor), shape=(100, )")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意 x, y 数据的数据形式是一定要像下面一样 (torch.cat 是在合并数据)")]),t._v("\nx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("torch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FloatTensor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# FloatTensor = 32-bit floating")]),t._v("\ny "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("torch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LongTensor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# LongTensor = 64-bit integer")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# plt.scatter(x.data.numpy()[:, 0], x.data.numpy()[:, 1], c=y.data.numpy(), s=100, lw=0, cmap='RdYlGn')")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# plt.show()")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 画图")]),t._v("\nplt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scatter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numpy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numpy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br")])]),n("h1",{attrs:{id:"建立神经网络"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#建立神经网络"}},[t._v("#")]),t._v(" 建立神经网络"),n("a",{attrs:{href:"https://mofanpy.com/tutorials/machine-learning/torch/classification#%E5%BB%BA%E7%AB%8B%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C",title:"Permalink to this headline",target:"_blank",rel:"noopener noreferrer"}},[n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("建立一个神经网络我们可以直接运用 torch 中的体系. 先定义所有的层属性("),n("code",[t._v("__init__()")]),t._v("), 然后再一层层搭建("),n("code",[t._v("forward(x)")]),t._v(")层于层的关系链接. 这个和我们在前面 regression 的时候的神经网络基本没差. 建立关系的时候, 我们会用到激励函数, 如果还不清楚激励函数用途的同学, 这里有非常好的"),n("a",{attrs:{href:"https://mofanpy.com/tutorials/machine-learning/tensorflow/intro-activation-function",target:"_blank",rel:"noopener noreferrer"}},[t._v("一篇动画教程"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" torch\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" torch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("functional "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" F     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 激励函数都在这")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Net")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("torch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 继承 torch 的 Module")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n_feature"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n_hidden"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n_output"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Net"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 继承 __init__ 功能")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hidden "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Linear"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n_feature"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n_hidden"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 隐藏层线性输出")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Linear"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n_hidden"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n_output"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出层线性输出")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forward")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 正向传播输入值, 神经网络分析出输出值")]),t._v("\n        x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" F"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("relu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hidden"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 激励函数(隐藏层的线性值)")]),t._v("\n        x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出值, 但是这个不是预测值, 预测值还需要再另外计算")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x\n\nnet "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Net"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n_feature"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n_hidden"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n_output"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 几个类别就几个 output")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("net"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# net 的结构")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nNet (\n  (hidden): Linear (2 -> 10)\n  (out): Linear (10 -> 2)\n)\n"""')]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br")])]),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# optimizer 是训练的工具")]),t._v("\noptimizer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optim"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SGD"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("net"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parameters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lr"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.02")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 传入 net 的所有参数, 学习率")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 算误差的时候, 注意真实值!不是! one-hot 形式的, 而是1D Tensor, (batch,)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 但是预测值是2D tensor (batch, n_classes)")]),t._v("\nloss_func "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CrossEntropyLoss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" t "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    out "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" net"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 喂给 net 训练数据 x, 输出分析值")]),t._v("\n\n    loss "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" loss_func"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 计算两者的误差")]),t._v("\n\n    optimizer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zero_grad"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清空上一步的残余更新参数值")]),t._v("\n    loss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backward"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 误差反向传播, 计算参数更新值")]),t._v("\n    optimizer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("step"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将参数更新值施加到 net 的 parameters 上")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);