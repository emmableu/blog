(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{654:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("因为neural network中的数据非常大，一小批一小批地进行训练可以提高最后的训练效果")]),t._v(" "),a("p",[a("code",[t._v("DataLoader")]),t._v(" 是 torch 给你用来包装你的数据的工具. 所以你要讲自己的 (numpy array 或其他) 数据形式装换成 Tensor, 然后再放进这个包装器中. 使用 "),a("code",[t._v("DataLoader")]),t._v(" 有什么好处呢? 就是他们帮你有效地迭代数据, 举例:")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" torch\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Data "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# data 是一个帮助进行小批训练的模块")]),t._v("\ntorch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("manual_seed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# reproducible")]),t._v("\n\nBATCH_SIZE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每次抽取5个进行训练")]),t._v("\n\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linspace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# x data: 1,2,3,4,5,6,7,8,9,10")]),t._v("\ny "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linspace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# y data: 10,9,8,7,6,5,4,3,2,1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 先转换成 torch 能识别的 Dataset")]),t._v("\ntorch_dataset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TensorDataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data_tensor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target_tensor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TensorDataset: 类似一个当前要做training的数据库，告诉数据库x 和 y 分别是什么")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把 dataset 放入 DataLoader")]),t._v("\nloader "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dataset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("torch_dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# torch TensorDataset format")]),t._v("\n\t\t\t\t\t\t batch_size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("BATCH_SIZE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mini batch size")]),t._v("\n\t\t\t\t\t\t shuffle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 要不要打乱数据 (打乱比较好)")]),t._v("\n\t\t\t\t\t\t num_workers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\t\t\t\t\t\t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每一次loader提取出batch_x, batch_y的时候都是用两个进程提取，提高速度")]),t._v("\n\t\t\t\t\t\t "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DataLoader: 把训练变成小批次")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" epoch "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# epoch: 把数据进行整体训练3次，每次训练的时候都会：")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从头小批小批地进行训练")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" step，"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("batch_x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" batch_y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("enumerate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 因为这里总共有10个数据，然后 BATCH_SIZE=5, 所以step只有0和1两步")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果不打乱数据排序 shuffle=False，那么每次的batch里面的数据是一样的，")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 反之则是不一样的，这里shuffle=True, 所以这里每次batch里面的数据是不一样的。")]),t._v("\n\t\t\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假设这里就是你训练的地方...")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打出来一些数据")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Epoch: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" epoch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'| Step: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'| batch x: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              batch_x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'| batch y: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" batch_y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nEpoch:  0 | Step:  0 | batch x:  [ 6.  7.  2.  3.  1.] | batch y:  [  5.   4.   9.   8.  10.]\nEpoch:  0 | Step:  1 | batch x:  [  9.  10.   4.   8.   5.] | batch y:  [ 2.  1.  7.  3.  6.]\nEpoch:  1 | Step:  0 | batch x:  [  3.   4.   2.   9.  10.] | batch y:  [ 8.  7.  9.  2.  1.]\nEpoch:  1 | Step:  1 | batch x:  [ 1.  7.  8.  5.  6.] | batch y:  [ 10.   4.   3.   6.   5.]\nEpoch:  2 | Step:  0 | batch x:  [ 3.  9.  2.  6.  7.] | batch y:  [ 8.  2.  9.  5.  4.]\nEpoch:  2 | Step:  1 | batch x:  [ 10.   4.   8.   1.   5.] | batch y:  [  1.   7.   3.  10.   6.]\n"""')]),t._v("\n\t\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br")])]),a("p",[t._v("如果我们改变一下 "),a("code",[t._v("BATCH_SIZE = 8")]),t._v(", 这样我们就知道, "),a("code",[t._v("step=0")]),t._v(" 会导出8个数据, 但是, "),a("code",[t._v("step=1")]),t._v(" 时数据库中的数据不够 8个, 这时")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("BATCH_SIZE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 批训练的数据个数")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Epoch: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" epoch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'| Step: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'| batch x: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              batch_x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'| batch y: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" batch_y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nEpoch:  0 | Step:  0 | batch x:  [  6.   7.   2.   3.   1.   9.  10.   4.] | batch y:  [  5.   4.   9.   8.  10.   2.   1.   7.]\nEpoch:  0 | Step:  1 | batch x:  [ 8.  5.] | batch y:  [ 3.  6.]\nEpoch:  1 | Step:  0 | batch x:  [  3.   4.   2.   9.  10.   1.   7.   8.] | batch y:  [  8.   7.   9.   2.   1.  10.   4.   3.]\nEpoch:  1 | Step:  1 | batch x:  [ 5.  6.] | batch y:  [ 6.  5.]\nEpoch:  2 | Step:  0 | batch x:  [  3.   9.   2.   6.   7.  10.   4.   8.] | batch y:  [ 8.  2.  9.  5.  4.  1.  7.  3.]\nEpoch:  2 | Step:  1 | batch x:  [ 1.  5.] | batch y:  [ 10.   6.]\n"""')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[t._v("这时, 在 "),a("code",[t._v("step=1")]),t._v(" 就只给你返回这个 epoch 中剩下的数据就好了.")])])}),[],!1,null,null,null);s.default=e.exports}}]);