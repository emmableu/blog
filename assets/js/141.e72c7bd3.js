(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{613:function(e,i,t){"use strict";t.r(i);var a=t(19),n=Object(a.a)({},(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ul",[t("li",[e._v("data 的assumption 多不多 (比如feature相互独立，残差正态分布之类的)")]),e._v(" "),t("li",[e._v("data 是否需要先进行scale")]),e._v(" "),t("li",[e._v("higher dimension 高维特征 表现能力 （比如feature比sample还多）\n"),t("ul",[t("li",[e._v("feature > sample 不能求解的方法： linear regression, logistic regression （但是加了 L1/L2 regularization 就可以求解）")]),e._v(" "),t("li",[e._v("是否倾向于得到稀疏解 （是否可以通过求解这个regression的结果去掉一些没用的feature）\n"),t("ul",[t("li",[e._v("倾向于得到稀疏解的方法: L1 regularization, ReLU activation function， svm with hinge loss")])])])])]),e._v(" "),t("li",[e._v("是否sensitive to outlier:\n"),t("ul",[t("li",[e._v("good model: SVM")])])]),e._v(" "),t("li",[e._v("更倾向于overfit (low bias, high variance),  还是underfit\n"),t("ul",[t("li",[e._v("overfit: Decision Tree, Neural Network")])])]),e._v(" "),t("li",[e._v("训练速度")]),e._v(" "),t("li",[e._v("hyper parameter tuning的难度/麻烦程度")]),e._v(" "),t("li",[e._v("对于imbalanced dataset的处理能力")]),e._v(" "),t("li",[e._v("模型本身是不是很容易理解（比如decision tree，logistic regression 就很容易理解）")]),e._v(" "),t("li",[e._v("能不能得到interpretable的feature importance")]),e._v(" "),t("li",[e._v("minimum 是否 = global minimum  (是否是convex function)")])]),e._v(" "),t("h2",{attrs:{id:"linear-regression-评价"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linear-regression-评价"}},[e._v("#")]),e._v(" Linear Regression 评价")]),e._v(" "),t("ul",[t("li",[e._v("data assumption 多：\n"),t("ul",[t("li",[e._v("residuals\n"),t("ul",[t("li",[e._v("iid")]),e._v(" "),t("li",[e._v("normal distribution with mean=0 (如果不进行beta置信区间的估计，就是mean 0, constant variance)")]),e._v(" "),t("li",[e._v("independent of X")])])]),e._v(" "),t("li",[e._v("X / features:\n"),t("ul",[t("li",[e._v("independent with each other")]),e._v(" "),t("li",[e._v("linearity: assuming relationship y = wx + b\n关于residual的见下图\n"),t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/202210032015214.png",alt:""}})])])])])]),e._v(" "),t("li",[e._v("data does not need scaling:对于线性模型 y = wx + b 而言，x的任意线性变换(平移，放缩)都会反应在w，b上，所以不会影响模型的拟合能力。")]),e._v(" "),t("li",[e._v("does not work well with high dimension (many features)\n"),t("ul",[t("li",[e._v("feature > sample 不能求解，")]),e._v(" "),t("li",[e._v("大部分beta都不会完全是0， 所以不可以通过求解这个regression的结果去掉一些没用的feature")]),e._v(" "),t("li",[e._v("prone to overfit if there are many features / dimensions, causing high variance.")])])]),e._v(" "),t("li",[e._v("sensitive to outliers comparing to models like SVM (因为 during loss function, treat each sample equally，including the outliers)")]),e._v(" "),t("li",[e._v("如果assumption完全满足的话，根据gaussian-markov theorem, it does pretty good in terms of balancing under- and over- fit.\n"),t("ul",[t("li",[e._v("但是，如果assumption 不满足的话， 更倾向于underfit, 因为model 相对decision tree， neural network 更加简单")])])]),e._v(" "),t("li",[e._v("训练速度快，有 analytical solution, 不需要 iteratively do gradient descent")]),e._v(" "),t("li",[e._v("hyper parameter tuning 容易，没有什么hyperparameter")]),e._v(" "),t("li",[e._v("（因为是continuous target variable，不需要讨论imbalance问题）")]),e._v(" "),t("li",[e._v("model is very interpretable")]),e._v(" "),t("li",[e._v("feature importance is very interpretable - can just look at the p value of the beta.")]),e._v(" "),t("li",[e._v("MSE is a convex function, so gradient descent can always reach global minima")])]),e._v(" "),t("h2",{attrs:{id:"logistic-regression-评价"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logistic-regression-评价"}},[e._v("#")]),e._v(" Logistic Regression 评价")]),e._v(" "),t("ul",[t("li",[e._v("data 的assumption 多不多 (比如feature相互独立，残差正态分布之类的)\n"),t("ul",[t("li",[e._v("比linear regression少很多，所有关于residual的都不需要")]),e._v(" "),t("li",[e._v("只需要：\n"),t("ul",[t("li",[e._v("X / features:\n"),t("ul",[t("li",[e._v("independent with each other")]),e._v(" "),t("li",[e._v("linearity: assumes linearity of independent variables and log odds.")])])])])])])]),e._v(" "),t("li",[e._v("data 是否需要先进行scale\n"),t("ul",[t("li",[e._v("要，因为要用gradient descent 求解")])])]),e._v(" "),t("li",[e._v("higher dimension 高维特征 表现能力 （比如feature比sample还多\n"),t("ul",[t("li",[e._v("不好")]),e._v(" "),t("li",[e._v("大部分beta都不会完全是0， 所以不可以通过求解这个regression的结果去掉一些没用的feature")]),e._v(" "),t("li",[e._v("prone to overfit if there are many features / dimensions, causing high variance.")])])]),e._v(" "),t("li",[e._v("是否sensitive to outlier:\n"),t("ul",[t("li",[e._v("不如SVM")])])]),e._v(" "),t("li",[e._v("更倾向于overfit (low bias, high variance),  还是underfit\n"),t("ul",[t("li",[e._v("more underfit comparing to neural network")]),e._v(" "),t("li",[e._v("more overfit comparing to naive bayes.")])])]),e._v(" "),t("li",[e._v("训练速度\n"),t("ul",[t("li",[e._v("relatively low comparing to linear regression or naive bayes")])])]),e._v(" "),t("li",[e._v("hyper parameter tuning的难度/麻烦程度\n"),t("ul",[t("li",[e._v("好像没有 hyper parameter， 可以加regularization")])])]),e._v(" "),t("li",[e._v("模型本身是不是很容易理解（比如decision tree，logistic regression 就很容易理解）\n"),t("ul",[t("li",[e._v("是, 可以用odds ratio The odds ratio represents the odds that an outcome will occur given the presence of a specific predictor,")])])]),e._v(" "),t("li",[e._v("能不能得到interpretable的feature importance\n"),t("ul",[t("li",[e._v("能")])])]),e._v(" "),t("li",[e._v("minimum 是否 = global minimum  (是否是convex function)\n"),t("ul",[t("li",[e._v("是，loss function is convex")])])]),e._v(" "),t("li",[e._v("（跳过）对于imbalanced dataset的处理能力\n"),t("ul",[t("li",[e._v("there may not be sufficient patterns belonging to the minority class to adequately represent its distribution.")])])])]),e._v(" "),t("h2",{attrs:{id:"lasso-ridge-l1-l2-regularization-regression-评价"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lasso-ridge-l1-l2-regularization-regression-评价"}},[e._v("#")]),e._v(" Lasso / Ridge (L1 / L2 Regularization) Regression 评价")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("data assumption 比 linear regression 少: 不需要残差正态分布，因为得到的beta不是unbiased的，不符合t分布")]),e._v(" "),t("ul",[t("li",[e._v("需要的assumption：\n"),t("ul",[t("li",[e._v("residual:\n"),t("ul",[t("li",[e._v("iid")]),e._v(" "),t("li",[e._v("0 mean, constant variance")]),e._v(" "),t("li",[e._v("independent of X")])])]),e._v(" "),t("li",[e._v("X / feature:\n"),t("ul",[t("li",[e._v("don't need to be completely independent with each other")]),e._v(" "),t("li",[e._v("linearity: assuming relationship y = wx + b")])])])])])])]),e._v(" "),t("li",[t("p",[e._v("data need scaling")]),e._v(" "),t("ul",[t("li",[t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/feature-scaling-2.png",alt:""}})])])]),e._v(" "),t("li",[t("p",[e._v("works better with high dimension:")]),e._v(" "),t("ul",[t("li",[e._v("L1 allows sparcity -> some beta will be fitted to be 0, so, Lasso Regularization can exclude useless variables from the model and, in general, tends to perform well when we need to remove a lot of useless variables from a model.")])])]),e._v(" "),t("li",[t("p",[e._v("sensitive to outliers comparing to models like SVM")])]),e._v(" "),t("li",[t("p",[e._v("comparing to LR tends to underfit if too big lambda")])]),e._v(" "),t("li",[t("p",[e._v("hyper parameter tuning 容易, 只有lambda")])]),e._v(" "),t("li",[t("p",[e._v("model is very interpretable")])]),e._v(" "),t("li",[t("p",[e._v("minimum 是否 = global minimum  (是否是convex function):")]),e._v(" "),t("ul",[t("li",[e._v("L2 Ridge regression: loss function is convex,  gradient descent can always reach global minima")]),e._v(" "),t("li",[e._v("L1 Lasso: sometimes not convex, so gradient descent don't always reach global minima")])])])]),e._v(" "),t("h2",{attrs:{id:"naive-baiyes-评价"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#naive-baiyes-评价"}},[e._v("#")]),e._v(" Naive Baiyes 评价")]),e._v(" "),t("ul",[t("li",[e._v("data 的assumption 多不多：\n"),t("ul",[t("li",[e._v("有一个： features need to be independent with each other")])])]),e._v(" "),t("li",[e._v("data 是否需要先进行scale\n"),t("ul",[t("li",[e._v("no")])])]),e._v(" "),t("li",[e._v("higher dimension 高维特征 表现能力 （比如feature比sample还多）\n"),t("ul",[t("li",[e._v("If your data has 𝑘 dimensions, then a fully general ML algorithm which attempts to learn all possible correlations between these features has to deal with 2𝑘 possible feature interactions, and therefore needs on the order of 2𝑘 many data points to be performant.")]),e._v(" "),t("li",[e._v("However because Naive Bayes assumes independence between features, it only needs on the order of 𝑘 many data points, exponentially fewer.")])])]),e._v(" "),t("li",[e._v("是否sensitive to outlier:\n"),t("ul",[t("li",[e._v("sensitive to outliers comparing to SVM")])])]),e._v(" "),t("li",[e._v("更倾向于overfit (low bias, high variance),  还是underfit\n"),t("ul",[t("li",[e._v("underfit, since the interactions are not modeled, some of the information in the data is ignored. This makes it an inherently high bias model; it has a high approximation error but as a result it also does not overfit.")])])]),e._v(" "),t("li",[e._v("训练速度\n"),t("ul",[t("li",[e._v("fast")])])]),e._v(" "),t("li",[e._v("hyper parameter tuning的难度/麻烦程度\n"),t("ul",[t("li",[e._v("easy, only one hyperparameter - pseudocount")])])]),e._v(" "),t("li",[e._v("对于imbalanced dataset的处理能力\n"),t("ul",[t("li",[e._v("not good")]),e._v(" "),t("li",[t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/202210050154011.png",alt:""}})]),e._v(" "),t("li",[e._v("Even though the likelihood probabilities are similar to some extent, but the posterior probability is badly affected by prior probabilities. Here in the above example the class +ve prior probability will be 9 times higher than the class -ve, this difference in naive bayes creates a bias for class +ve.")]),e._v(" "),t("li",[e._v("One simple solution is to ignore the prior probabilities. (Or) You can do undersampling or oversampling.")])])]),e._v(" "),t("li",[e._v("(跳过)模型本身是不是很容易理解（比如decision tree，logistic regression 就很容易理解）跳过")]),e._v(" "),t("li",[e._v("(跳过)能不能得到interpretable的feature importance 跳过")]),e._v(" "),t("li",[e._v("(跳过)minimum 是否 = global minimum  (是否是convex function) 跳过")])]),e._v(" "),t("h2",{attrs:{id:"decision-tree-评价"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decision-tree-评价"}},[e._v("#")]),e._v(" Decision Tree 评价")]),e._v(" "),t("ul",[t("li",[e._v("data 的assumption 多不多 (比如feature相互独立，残差正态分布之类的)\n"),t("ul",[t("li",[e._v("好像没有")])])]),e._v(" "),t("li",[e._v("data 是否需要先进行scale\n"),t("ul",[t("li",[e._v("no need")])])]),e._v(" "),t("li",[e._v("higher dimension 高维特征 表现能力\n"),t("ul",[t("li",[e._v("tends to become very overfit,  the number of branches grows exponentially with the number of features")])])]),e._v(" "),t("li",[e._v("是否sensitive to outlier:\n"),t("ul",[t("li",[e._v("not sensitive to outliers since the partitioning happens based on the proportion of samples within the split ranges and not on absolute values.")]),e._v(" "),t("li",[e._v("especially when we use early stopping")])])]),e._v(" "),t("li",[e._v("更倾向于overfit (low bias, high variance),  还是underfit\n"),t("ul",[t("li",[e._v("overfit,very specific rules")])])]),e._v(" "),t("li",[e._v("训练速度\n"),t("ul",[t("li",[e._v("not as fast comparing to logistic regression / naive bayes, but still fast enough comparing to neural network")]),e._v(" "),t("li",[e._v("test time is fast as it's just linearly traversing the test rules.")])])]),e._v(" "),t("li",[e._v("hyper parameter tuning的难度/麻烦程度\n"),t("ul",[t("li",[e._v("好像没有hyper parameter，除非定义early stopping")])])]),e._v(" "),t("li",[e._v("对于imbalanced dataset的处理能力\n"),t("ul",[t("li",[e._v("不太好")]),e._v(" "),t("li",[e._v("Decision trees implementations normally use Gini impurity for finding splits. For each rule/condition, when calculating the gini impurity it is a weighted average on. it weights higher on the more prevaling condition (e.g., loves troll when predicting loves popcorn). But more prevaling sample has a higher say on the more prevaling condition.")])])]),e._v(" "),t("li",[e._v("模型本身是不是很容易理解（比如decision tree，logistic regression 就很容易理解）\n"),t("ul",[t("li",[e._v("yes. has interpretable rules")])])]),e._v(" "),t("li",[e._v("(跳过) 能不能得到interpretable的feature importance")]),e._v(" "),t("li",[e._v("(跳过) minimum 是否 = global minimum  (是否是convex function) 跳过")])]),e._v(" "),t("h2",{attrs:{id:"svm-评价"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#svm-评价"}},[e._v("#")]),e._v(" SVM 评价")]),e._v(" "),t("ul",[t("li",[e._v("data 的assumption 多不多 (比如feature相互独立，残差正态分布之类的)\n"),t("ul",[t("li",[e._v("比较宽松，只需要Data is linearly separable. Even if the linear boundary is in an augmented feature space. for example, after the kernel trick")])])]),e._v(" "),t("li",[e._v("data 是否需要先进行scale\n"),t("ul",[t("li",[e._v("要")]),e._v(" "),t("li",[e._v("SVM tries to maximize the distance between the separating plane and the support vectors.")]),e._v(" "),t("li",[e._v("If one feature (i.e. one dimension in this space) has very large values, it will dominate the other features when calculating the distance.")]),e._v(" "),t("li",[e._v("If you rescale all features (e.g. to [0, 1]), they all have the same influence on the distance metric.")])])]),e._v(" "),t("li",[e._v("higher dimension 高维特征 表现能力 （比如feature比sample还多）\n"),t("ul",[t("li",[e._v("还行，因为它会通过fit这个model来放缩 c => regularization parameter, the degree to which our model will accept misclassifications in our dataset， so that it generalise well over training data.")]),e._v(" "),t("li",[e._v("是否倾向于得到稀疏解 （是否可以通过求解这个model的结果去掉一些没用的feature）\n"),t("ul",[t("li",[e._v("用hinge loss 作为loss function， 因为hinge loss是 = max(0, 1-z), 所以>1时是0，所以会有 0 解")])])])])]),e._v(" "),t("li",[e._v("是否sensitive to outlier:\n"),t("ul",[t("li",[e._v("不sensitive to outlier，很robust，还是因为它会通过fit这个model来放缩 c，见上\n"),t("ul",[t("li",[e._v("而且只关心soft margin 周围的点")])])]),e._v(" "),t("li",[e._v("good model: SVM")])])]),e._v(" "),t("li",[e._v("更倾向于overfit (low bias, high variance),  还是underfit\n"),t("ul",[t("li",[e._v("比起lr 和 nn 和 decision tree 这些更容易 underfit, 因为有soft margin 和 regularization parameter")])])]),e._v(" "),t("li",[e._v("训练速度\n"),t("ul",[t("li",[e._v("不是很快，因为还是要用gradient descent")])])]),e._v(" "),t("li",[e._v("hyper parameter tuning的难度/麻烦程度\n"),t("ul",[t("li",[e._v("麻烦，比如确定哪个kernel")])])]),e._v(" "),t("li",[e._v("模型本身是不是很容易理解（比如decision tree，logistic regression 就很容易理解）\n"),t("ul",[t("li",[e._v("比较难， 有feature weights， but they don't correspond 1-1 to feature importance such as in logistic regression")])])]),e._v(" "),t("li",[e._v("minimum 是否 = global minimum  (是否是convex function)\n"),t("ul",[t("li",[e._v("是convex")])])])]),e._v(" "),t("h2",{attrs:{id:"knn-评价"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#knn-评价"}},[e._v("#")]),e._v(" KNN 评价")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("data 的assumption 多不多")]),e._v(" "),t("ul",[t("li",[e._v("assuming similar points situated closely with each other.")])])]),e._v(" "),t("li",[t("p",[e._v("data 是否需要先进行scale")]),e._v(" "),t("ul",[t("li",[e._v("要，因为要计算距离")])])]),e._v(" "),t("li",[t("p",[e._v("higher dimension 高维特征 表现能力 （比如feature比sample还多）")]),e._v(" "),t("ul",[t("li",[e._v("不太行，因为高维的时候：\n"),t("ul",[t("li",[e._v("Our assumption of similar points being situated closely breaks： high dimension creates exponentially higher space, points tend to never be close together.")]),e._v(" "),t("li",[e._v("It becomes computationally more expensive to compute distance and find the nearest neighbors in high-dimensional space")])])])])]),e._v(" "),t("li",[t("p",[e._v("是否sensitive to outlier:")]),e._v(" "),t("ul",[t("li",[e._v("If ‘K’ value is low, the model is susceptible to outliers. => Let take K=1, suppose there is 1 outlier near to our test point and then the model predicts the label corresponding to the outlier.")]),e._v(" "),t("li",[e._v("If ‘K’ value is high, the model is robust to outliers.")])])]),e._v(" "),t("li",[t("p",[e._v("更倾向于overfit (low bias, high variance),  还是underfit")]),e._v(" "),t("ul",[t("li",[e._v("k 小， 高维数据： overfit")]),e._v(" "),t("li",[e._v("k 大，低维数据： underfit")])])]),e._v(" "),t("li",[t("p",[e._v("训练速度")]),e._v(" "),t("ul",[t("li",[e._v("慢  for each testing sample, it requires calculating distance with each training sample")])])]),e._v(" "),t("li",[t("p",[e._v("hyper parameter tuning的难度/麻烦程度")]),e._v(" "),t("ul",[t("li",[e._v("k 很难决定，要用hyperparameter tuning")])])]),e._v(" "),t("li",[t("p",[e._v("对于imbalanced dataset的处理能力")]),e._v(" "),t("ul",[t("li",[e._v("theoretically, unbalanced classes are not a problem at all for the k-nearest neighbor algorithm.\n"),t("ul",[t("li",[e._v("Because the algorithm is not influenced in any way by the size of the class, it will not favor any on the basis of size.")])])]),e._v(" "),t("li",[e._v("but:  there may not be sufficient patterns belonging to the minority class to adequately represent its distribution.")])])]),e._v(" "),t("li",[t("p",[e._v("模型本身是不是很容易理解（比如decision tree，logistic regression 就很容易理解）")]),e._v(" "),t("ul",[t("li",[e._v("not interpretable")])])])])])}),[],!1,null,null,null);i.default=n.exports}}]);