(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{616:function(e,a,t){"use strict";t.r(a);var r=t(19),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"regression-metrics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regression-metrics"}},[e._v("#")]),e._v(" Regression Metrics")]),e._v(" "),t("ol",[t("li",[e._v("R squared, discussed below.\n"),t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/linear-regression-11.png",alt:""}})])]),e._v(" "),t("h3",{attrs:{id:"r2-r-squared-main-ideas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#r2-r-squared-main-ideas"}},[e._v("#")]),e._v(" R2 R Squared Main Ideas")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/202209202246398.png",alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/202209202250259.png",alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/202209202252276.png",alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/202209202253367.png",alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/202209202253947.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"p-value-meaning-general"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#p-value-meaning-general"}},[e._v("#")]),e._v(" P value meaning (general):")]),e._v(" "),t("p",[e._v("In practice, a commonly used threshold is 0.05. It means that"),t("br"),e._v("\nif")]),e._v(" "),t("ul",[t("li",[e._v("there’s no difference between Drug A and Drug B")]),e._v(" "),t("li",[e._v("or, if null hypothesis is true,")])]),e._v(" "),t("p",[e._v("and if")]),e._v(" "),t("ul",[t("li",[e._v("we did this exact same experiment a bunch of times,")])]),e._v(" "),t("p",[e._v("then only 5% of those experiments would result in the wrong decision.")]),e._v(" "),t("h2",{attrs:{id:"p-value-is-different-from-effect-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#p-value-is-different-from-effect-size"}},[e._v("#")]),e._v(" P value is different from effect size:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/202209202314858.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"p-value-in-linear-regression-and-r-squares"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#p-value-in-linear-regression-and-r-squares"}},[e._v("#")]),e._v(" P value in linear regression and R squares")]),e._v(" "),t("p",[e._v("the p-value will tell us the probability that random data could result in an R2 ≥ 0.66.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/202209202322998.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"linear-regression的基础假设"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linear-regression的基础假设"}},[e._v("#")]),e._v(" Linear Regression的基础假设")]),e._v(" "),t("p",[e._v("以下是对于 Gaussian-noise simple linear regression model")]),e._v(" "),t("p",[e._v("假设总结：")]),e._v(" "),t("ul",[t("li",[e._v("residuals\n"),t("ul",[t("li",[e._v("iid")]),e._v(" "),t("li",[e._v("normal distribution with mean=0 (如果不进行beta置信区间的估计，就是mean 0, constant variance)")]),e._v(" "),t("li",[e._v("independent of X")])])]),e._v(" "),t("li",[e._v("X / features:\n"),t("ul",[t("li",[e._v("independent with each other")]),e._v(" "),t("li",[e._v("linearity: assuming relationship y = BX")])])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/linear-regression-0.png",alt:""}}),e._v("\n最后还有： "),t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/linear-regression-6.png",alt:""}}),e._v("\n如果不是Gaussian-noise， 而是普通的simple linear regression model:"),t("br"),e._v("\n残差只要mean zero with constant variance 就好。")]),e._v(" "),t("h2",{attrs:{id:"假设失效的影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#假设失效的影响"}},[e._v("#")]),e._v(" 假设失效的影响")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/linear-regression-1.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"假设检验方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#假设检验方法"}},[e._v("#")]),e._v(" 假设检验方法")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/linear-regression-2.png",alt:""}}),e._v(" "),t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/linear-regression-3.png",alt:""}}),e._v(" "),t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/linear-regression-4.png",alt:""}}),e._v(" "),t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/linear-regression-5.png",alt:""}}),e._v("\nwhat will happen when we have correlated variables, how to solve\nexplain regression coefficient")]),e._v(" "),t("h2",{attrs:{id:"least-squares-estimation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#least-squares-estimation"}},[e._v("#")]),e._v(" Least Squares Estimation")]),e._v(" "),t("p",[e._v("试图找到一条直线，使得所有样本到直线上的欧式距离之和最小， 也就是对残差平方和求导，使得残差平方和最小。\n"),t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/linear-regression-10.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"mle-maximum-likelihood-estimation-for-linear-regression"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mle-maximum-likelihood-estimation-for-linear-regression"}},[e._v("#")]),e._v(" MLE(Maximum Likelihood Estimation) for linear regression")]),e._v(" "),t("p",[e._v("仅限于对：Gaussian-noise simple linear regression model：\n因为假设了残差遵循正态分布，所以因为正态分布的pdf(概率密度函数)是\n"),t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/linear-regression-7.png",alt:""}}),e._v("\n所以 y 的conditional pdf就是\n"),t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/linear-regression-8.png",alt:""}}),e._v(" "),t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/linear-regression-9.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"gaussian-markov-theorem-when-do-we-need-residuals-to-be-normally-distributed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gaussian-markov-theorem-when-do-we-need-residuals-to-be-normally-distributed"}},[e._v("#")]),e._v(" Gaussian-Markov Theorem - When do we need residuals to be normally distributed?")]),e._v(" "),t("ul",[t("li",[e._v("OLS:\n"),t("ul",[t("li",[e._v("如果只是用ols做参数估计，那么就不需要残差正态分布。")]),e._v(" "),t("li",[e._v("但是，如果要算beta的p value 和置信区间，那么就一定要残差正态分布。因为否则的话beta不满足t distribution")])])]),e._v(" "),t("li",[e._v("MLE:\n"),t("ul",[t("li",[e._v("MLE估计无论如何都需要残差正态分布。")])])])]),e._v(" "),t("h3",{attrs:{id:"gauss-markov-theorem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gauss-markov-theorem"}},[e._v("#")]),e._v(" Gauss-Markov theorem")]),e._v(" "),t("p",[e._v("under assumptions of uncorrelated, equal-variance, zero-mean errors (all assumptions above), OLS estimate is BLUE, i.e. is unbiased and has minimum variance.")]),e._v(" "),t("p",[e._v("BLUE: Best Linear Unbiased Estimators,")]),e._v(" "),t("ul",[t("li",[e._v("best means having lowest variance,")]),e._v(" "),t("li",[e._v("unbiased means the expected values of the estimator are equal to the population parameter.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/202210031948225.png",alt:""}})]),e._v(" "),t("p",[e._v("None of the above is needed for Lasso/Ridge, because Lasso / Ridge cannot make unbiased estimate of beta.")]),e._v(" "),t("h2",{attrs:{id:"problem-with-root-mean-square-error-rmse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#problem-with-root-mean-square-error-rmse"}},[e._v("#")]),e._v(" Problem with Root Mean Square Error (RMSE)")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/linear-regression-14.png",alt:""}}),e._v(" "),t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/linear-regression-12.png",alt:""}}),e._v(" "),t("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/linear-regression-13.png",alt:""}})])])}),[],!1,null,null,null);a.default=s.exports}}]);