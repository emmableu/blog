(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{660:function(e,t,a){"use strict";a.r(t);var r=a(19),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"problem-statement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem-statement"}},[e._v("#")]),e._v(" Problem Statement")]),e._v(" "),a("p",[e._v("design a search relevance system for a search engine.")]),e._v(" "),a("h3",{attrs:{id:"clarifying-questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clarifying-questions"}},[e._v("#")]),e._v(" Clarifying questions")]),e._v(" "),a("ol",[a("li",[e._v("scope:\n"),a("ul",[a("li",[e._v("Is it a general search engine like Google or Bing or a specialized search engine like Amazon products search?")]),e._v(" "),a("li",[e._v("answer: general search engine")])])]),e._v(" "),a("li",[e._v("Scale:\n"),a("ul",[a("li",[e._v("How many websites exist that you want to enable through this search engine?")]),e._v(" "),a("li",[e._v("How many queries per second (QPS) do you anticipate to handle?")]),e._v(" "),a("li",[e._v("answer: billions of documents to search from, around 10K QPS.")])])]),e._v(" "),a("li",[e._v("Personalization:\n"),a("ul",[a("li",[e._v("is the searcher a logged-in user or not?")]),e._v(" "),a("li",[e._v("answer: assuming the searcher is a logged-in user (we can use their profile and historical data to do personalization).")])])])]),e._v(" "),a("h2",{attrs:{id:"architectural-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architectural-components"}},[e._v("#")]),e._v(" Architectural Components")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/search-ranking-system-design-3.png",alt:""}}),e._v("\n用layered model appproach\n"),a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/search-ranking-system-design-4.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"query-rewriting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-rewriting"}},[e._v("#")]),e._v(" Query rewriting")]),e._v(" "),a("ol",[a("li",[e._v("spell checker: itlian => italian")]),e._v(" "),a("li",[e._v("query expansion: italian restaurant => italian restaurant/food")])]),e._v(" "),a("h3",{attrs:{id:"query-understanding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-understanding"}},[e._v("#")]),e._v(" Query understanding:")]),e._v(" "),a("p",[e._v('"gas stations" most likely has a local intent (an interest in nearby places) and the query “earthquake” may have a newsy intent.')]),e._v(" "),a("h3",{attrs:{id:"document-selection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-selection"}},[e._v("#")]),e._v(" Document selection:")]),e._v(" "),a("p",[e._v("Document selection is more focused on recall. （不在意是不是找了很多irrelevant的，只要relevant的文件都被找到了就好） It uses a simpler technique to sift through billions of documents on the web and retrieve documents that have the potential of being relevant.")]),e._v(" "),a("p",[e._v("Ranking these selected documents in the right order isn’t important at this point.")]),e._v(" "),a("blockquote",[a("p",[e._v("Since the ranking component receives only the documents that have gone through the “initial screening” its workload is greatly reduced. This allows us to use more complex ML modeling options (that have great precision) for the ranking component, without affecting the performance and capacity requirements of the system.")])]),e._v(" "),a("h3",{attrs:{id:"ranker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ranker"}},[e._v("#")]),e._v(" Ranker")]),e._v(" "),a("p",[e._v("用ml方法找到document的best order"),a("br"),e._v("\nFor example, one configuration can be that your document selection returns 100k documents, and you pass them through two stages of ranking.")]),e._v(" "),a("ul",[a("li",[e._v("In stage one, you can use fast (nanoseconds) linear ML models to rank them.")]),e._v(" "),a("li",[e._v("In stage two, you can utilise computationally expensive models (like deep learning models) to find the most optimized order of top 500 documents given by stage one.")])]),e._v(" "),a("h3",{attrs:{id:"blender"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blender"}},[e._v("#")]),e._v(" Blender")]),e._v(" "),a("p",[e._v("为了diversity， 把不同媒介(image/video/news/blog) 和不同source (e.g.,website)的结果给blend显示在 SERP 上")]),e._v(" "),a("h3",{attrs:{id:"training-data-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#training-data-generation"}},[e._v("#")]),e._v(" Training data generation")]),e._v(" "),a("p",[e._v("This component displays the cyclic manner of using machine learning to make a search engine ranking system. It takes online user engagement data from the SERP displayed in response to queries and generates positive and negative training examples. The training data generated is then fed to the machine learning models trained to rank search engine results.")]),e._v(" "),a("h2",{attrs:{id:"metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metrics"}},[e._v("#")]),e._v(" Metrics")]),e._v(" "),a("h3",{attrs:{id:"online-metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#online-metrics"}},[e._v("#")]),e._v(" Online metrics:")]),e._v(" "),a("ol",[a("li",[e._v("Click-through rate:"),a("br"),e._v("\nclick-through rate = number of clicks / number of impressions"),a("br"),e._v("\n比如，在google的所有搜索结果上点进去了一共6次，click-through rate = 6/2 = 3")]),e._v(" "),a("li",[e._v("Sucessful session rate"),a("br"),e._v("\nclick-through rate 的问题：点进去了以后立刻返回（说明是无效内容）也算作了一次点击。"),a("br"),e._v("\n所以，定义successful session：the ones that have a click with a ten-second or longer dwell time. Dwell time is the length of time a searcher spends viewing a webpage after they’ve clicked a link on a search engine result page (SERP)."),a("br"),e._v("\nsession success rate = # successful sessions / # total sessions")]),e._v(" "),a("li",[e._v("Time to success / number of queries per session"),a("br"),e._v("\n有些结果会直接显示在搜索结果上，这样的话用户一个都不用点进去。这时，直接看click-through rate就是为0。"),a("br"),e._v("\n所以，我们需要 time to success 或者 number of queries per session 越少越好。")])]),e._v(" "),a("h3",{attrs:{id:"offline-metrics-ndcg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offline-metrics-ndcg"}},[e._v("#")]),e._v(" Offline metrics: NDCG")]),e._v(" "),a("h4",{attrs:{id:"cg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cg"}},[e._v("#")]),e._v(" CG")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/search-ranking-system-design-0.png",alt:""}})]),e._v(" "),a("h4",{attrs:{id:"dcg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dcg"}},[e._v("#")]),e._v(" DCG")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/search-ranking-system-design-1.png",alt:""}})]),e._v(" "),a("h4",{attrs:{id:"ndcg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ndcg"}},[e._v("#")]),e._v(" NDCG")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/search-ranking-system-design-2.png",alt:""}})]),e._v(" "),a("h4",{attrs:{id:"caveat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caveat"}},[e._v("#")]),e._v(" Caveat:")]),e._v(" "),a("p",[e._v("NDCG does not penalize irrelevant search results. In our case, it didn’t penalize D_4, which had zero relevance according to the human rater."),a("br"),e._v("\nAnother result set may not include D_4, but it would still have the same NDCG score. As a remedy, the human rater could assign a negative relevance score to that document.")]),e._v(" "),a("h2",{attrs:{id:"document-selection-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-selection-2"}},[e._v("#")]),e._v(" Document selection")]),e._v(" "),a("h3",{attrs:{id:"基础知识-tf-idf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础知识-tf-idf"}},[e._v("#")]),e._v(" 基础知识：TF-IDF")]),e._v(" "),a("p",[e._v("某个词在文章中的TF-IDF越大，那么一般而言这个词在这篇文章的重要性会越高，所以通过计算文章中各个词的TF-IDF，由大到小排序，排在最前面的几个词，就是该文章的关键词。")]),e._v(" "),a("h4",{attrs:{id:"_1-term-frequency-tf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-term-frequency-tf"}},[e._v("#")]),e._v(" 1. term frequency (TF)")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/search-ranking-system-design-6.png",alt:""}})]),e._v(" "),a("h4",{attrs:{id:"_2-inverse-document-frequency-idf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-inverse-document-frequency-idf"}},[e._v("#")]),e._v(" 2. inverse document frequency (IDF)")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/search-ranking-system-design-7.png",alt:""}}),e._v("\n如果一个词越常见，那么分母就越大，逆文档频率就越小越接近0（甚至可能小于0） 。分母之所以要加1，是为了避免分母为0（即所有文档都不包含该词）。log表示对得到的值取对数。")]),e._v(" "),a("p",[e._v("e.g.:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('doc1: "winter is coming",\ndoc2: "rabbit is cute",\ndoc3: "cold weather is cold"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("计算 doc3 中每个词的 TF - IDF:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th"),e._v(" "),a("th",[e._v("cold")]),e._v(" "),a("th",[e._v("weather")]),e._v(" "),a("th",[e._v("is")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("TF")]),e._v(" "),a("td",[e._v("2/4")]),e._v(" "),a("td",[e._v("1/4")]),e._v(" "),a("td",[e._v("1/4")])]),e._v(" "),a("tr",[a("td",[e._v("IDF")]),e._v(" "),a("td",[e._v("log(3/2)")]),e._v(" "),a("td",[e._v("log(3/2)")]),e._v(" "),a("td",[e._v("log(3/4)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("TF*IDF")])]),e._v(" "),a("td",[e._v("biggest")]),e._v(" "),a("td",[e._v("middle")]),e._v(" "),a("td",[e._v("smallest (<0)")])])])]),e._v(" "),a("h4",{attrs:{id:"_3-相乘得到tf-idf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-相乘得到tf-idf"}},[e._v("#")]),e._v(" 3.相乘得到tf-idf")]),e._v(" "),a("p",[e._v("TF-IDF = TF * IDF"),a("br"),e._v("\n可以看到，TF-IDF与一个词在文档中的出现次数成正比，与该词在整个语言中的出现次数成反比。所以，自动提取关键词的算法就很清楚了，就是计算出文档的每个词的TF-IDF值，然后按降序排列，取排在最前面的几个词。")]),e._v(" "),a("h4",{attrs:{id:"优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[e._v("#")]),e._v(" 优缺点")]),e._v(" "),a("p",[e._v("TF-IDF的优点是简单快速，而且容易理解。缺点是有时候用词频来衡量文章中的一个词的重要性不够全面，有时候重要的词出现的可能不够多，而且这种计算无法体现位置信息，无法体现词在上下文的重要性。如果要体现词的上下文结构，那么你可能需要使用word2vec算法来支持。")]),e._v(" "),a("h3",{attrs:{id:"relevance-scoring-scheme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relevance-scoring-scheme"}},[e._v("#")]),e._v(" Relevance scoring scheme")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/search-ranking-system-design-5.png",alt:""}})]),e._v(" "),a("h4",{attrs:{id:"terms-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terms-match"}},[e._v("#")]),e._v(" Terms match")]),e._v(" "),a("p",[e._v("Our query contains multiple terms. We will use the inverse document frequency or IDF score (或者 TF-IDF) of each term to weigh the match. The match for important terms in the query weighs higher.")]),e._v(" "),a("h4",{attrs:{id:"document-popularity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-popularity"}},[e._v("#")]),e._v(" Document popularity")]),e._v(" "),a("p",[e._v("The document’s popularity score is stored in the index.")]),e._v(" "),a("h4",{attrs:{id:"query-intent-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-intent-match"}},[e._v("#")]),e._v(" Query intent match")]),e._v(" "),a("p",[e._v("the component may reveal that there is a very strong local intent. Hence, a 0.125 weight will be given for the documents retrieved to be local.")]),e._v(" "),a("h4",{attrs:{id:"personalization-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#personalization-match"}},[e._v("#")]),e._v(" Personalization match")]),e._v(" "),a("p",[e._v("It scores how well a document meets the searcher’s individual requirements based on a lot of aspects. For instance, the searcher’s age, gender, interests, and location.")]),e._v(" "),a("h2",{attrs:{id:"feature-engineering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feature-engineering"}},[e._v("#")]),e._v(" Feature Engineering")]),e._v(" "),a("h3",{attrs:{id:"searcher-specific-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#searcher-specific-features"}},[e._v("#")]),e._v(" Searcher-specific features")]),e._v(" "),a("p",[e._v("age, gender and interests")]),e._v(" "),a("h3",{attrs:{id:"query-specific-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-specific-features"}},[e._v("#")]),e._v(" Query-specific features")]),e._v(" "),a("ol",[a("li",[e._v("query historical engagement: e.g., most people who searched “earthquake”, were looking for news regarding a recent earthquake.")]),e._v(" "),a("li",[e._v("query intent: e,g, if a person queries “pizza places”, the intent here is local. Therefore, the model will give high rank to the pizza places that are located near the searcher. A few examples of query intent are news, local, commerce, etc.")])]),e._v(" "),a("h3",{attrs:{id:"document-specific-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-specific-features"}},[e._v("#")]),e._v(" Document-specific features")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Page rank"),a("br"),e._v("\nThe rank of a document can serve as a feature. To estimate the relevance of the document under consideration, we can look at the number and quality of the documents that link to it.")])]),e._v(" "),a("li",[a("p",[e._v("Document engagement radius"),a("br"),e._v("\nThe document engagement radius can be another important feature. A document on a coffee shop in Seattle would be more relevant to people living within a ten-mile radius of the shop. However, a document on the Eiffel Tower might interest people all around the world. Hence, in case our query has a local intent, we will choose the document with the local scope of appeal rather than that with a global scope of appeal.")])])]),e._v(" "),a("h3",{attrs:{id:"context-specific-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context-specific-features"}},[e._v("#")]),e._v(" Context-specific features")]),e._v(" "),a("ol",[a("li",[e._v("Time of search"),a("br"),e._v("\nA searcher has queried for restaurants. In this case, a contextual feature can be the time of the day. This will allow the model to display restaurants that are open at that hour.")]),e._v(" "),a("li",[e._v("Recent events"),a("br"),e._v("\nThe searcher may appreciate any recent events related to the query. For example, upon querying “Vancouver”, the results included news that happens in the previous few hours in Vancouver")]),e._v(" "),a("li",[e._v("the nature of the previous queries"),a("br"),e._v("\n如果前几个search都是和编程相关的，那么如果用户这次搜索go，那么可能指的不是go to ...，而是go这个编程语言")])]),e._v(" "),a("h3",{attrs:{id:"searcher-document-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#searcher-document-features"}},[e._v("#")]),e._v(" Searcher-document features")]),e._v(" "),a("p",[e._v("Considering both the searcher and the document.")]),e._v(" "),a("ol",[a("li",[e._v("Distance. Consider the case where a person has searched for restaurants in their vicinity. Documents regarding nearby restaurants will be selected for ranking. The ranking model can then rank the documents based on the distance between the coordinates of the searcher and the restaurants in the document.")]),e._v(" "),a("li",[e._v("historical engagement: if a person has engaged with video documents more in the past, it indicates that video documents are generally more relevant for that person")])]),e._v(" "),a("h3",{attrs:{id:"query-document-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-document-features"}},[e._v("#")]),e._v(" Query-document features")]),e._v(" "),a("ol",[a("li",[e._v("text match, document里面有没有query中的text\n"),a("ul",[a("li",[e._v("unigram or bigram (是不是连续的text match？)")]),e._v(" "),a("li",[e._v("tf-idf: 这个unigram/bigram 在这个document里面有多重要？")])])]),e._v(" "),a("li",[e._v("Query-document historical engagement\n"),a("ul",[a("li",[e._v("click rate: we might observe across people’s queries on “Paris tourism” that the click rate for the “Eiffel tower website” is the highest. So, the model will develop the understanding that whenever someone queries “Paris tourism”.")])])]),e._v(" "),a("li",[e._v("Embeddings\n"),a("ul",[a("li",[e._v("“embedding similarity score”: The similarity score is calculated between the query vector and each document vector to measure its relevance for the query. The higher the similarity score, the more relevant a document is for a query.\n"),a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/search-ranking-system-design-8.png",alt:""}}),e._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/search-ranking-system-design-9.png",alt:""}}),e._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/search-ranking-system-design-10.png",alt:""}})])])])]),e._v(" "),a("h2",{attrs:{id:"training-data-generation-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#training-data-generation-2"}},[e._v("#")]),e._v(" Training Data Generation")]),e._v(" "),a("h3",{attrs:{id:"training-data-generation-for-pointwise-approach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#training-data-generation-for-pointwise-approach"}},[e._v("#")]),e._v(" Training data generation for pointwise approach")]),e._v(" "),a("p",[e._v("the model is trained to predict the relevance of each document for a query, individually. The final ranking is achieved by simply sorting the result list by these document scores.")]),e._v(" "),a("p",[e._v("While adopting the pointwise approach, our ranking model can make use of classification algorithms when the score of each document takes a small, finite number of values. For instance, if we aim to simply classify a document as relevant or irrelevant, the relevance score will be 0 or 1. This will allow us to approximate the ranking problem by a binary classification problem.")]),e._v(" "),a("h4",{attrs:{id:"positive-and-negative-training-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive-and-negative-training-examples"}},[e._v("#")]),e._v(" Positive and negative training examples")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/search-ranking-system-design-12.png",alt:""}}),e._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/search-ranking-system-design-13.png",alt:""}}),e._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/search-ranking-system-design-14.png",alt:""}}),e._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/search-ranking-system-design-15.png",alt:""}})]),e._v(" "),a("h4",{attrs:{id:"caveat-less-negative-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caveat-less-negative-examples"}},[e._v("#")]),e._v(" Caveat: Less negative examples")]),e._v(" "),a("p",[e._v("A question may arise that if the user engages with only the first document on the SERP, we may never get enough negative examples to train our model. Such a scenario is pretty common. To remedy it, we use random negative examples. For example, all the documents displayed on the 50th​​ page of Google search results can be considered negative examples.")]),e._v(" "),a("h4",{attrs:{id:"train-test-split"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#train-test-split"}},[e._v("#")]),e._v(" Train test split")]),e._v(" "),a("p",[e._v("因为不同的query有时间上的区别，应该用past去predict future，而不是直接randomly区分train test"),a("br"),e._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/emmableu/image/master/search-ranking-system-design-16.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"training-data-generation-for-pairwise-approach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#training-data-generation-for-pairwise-approach"}},[e._v("#")]),e._v(" Training data generation for pairwise approach")]),e._v(" "),a("p",[e._v("给一对pair，predict 谁的ranking相对更大")]),e._v(" "),a("ol",[a("li",[e._v("Human rater: 直接给每一个document打分，然后做training")]),e._v(" "),a("li",[e._v("user-engagement (online method): 跟据user engagement的程度给document打分，然后做training")])]),e._v(" "),a("h2",{attrs:{id:"ranking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ranking"}},[e._v("#")]),e._v(" Ranking")]),e._v(" "),a("p",[e._v("Learning to Rank (LTR): A class of techniques that applies supervised machine learning (ML) to solve ranking problems. The pointwise and pairwise techniques that we will apply fall under this class.")]),e._v(" "),a("h3",{attrs:{id:"stage-wise-approach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stage-wise-approach"}},[e._v("#")]),e._v(" Stage-wise approach")]),e._v(" "),a("p",[e._v("Stage 1: remove those that are irrelevant to query."),a("br"),e._v("\nStage 2: rank the rest")]),e._v(" "),a("blockquote",[a("p",[e._v("First stage model will focus on the recall of the top five to ten relevant documents in the first five-hundred results while the second stage will ensure precision of the top five to ten relevant documents.")])]),e._v(" "),a("h3",{attrs:{id:"stage-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stage-1"}},[e._v("#")]),e._v(" Stage 1")]),e._v(" "),a("p",[e._v("Can use pointwise approach.")]),e._v(" "),a("p",[e._v("A relatively less complex linear algorithm, like logistic regression or small MART(Multiple additive regression trees) model, is well suited for scoring a large set of documents. The ability to score each document extremely quickly (microseconds or less) for the fairly large document pool at this stage is super critical.")]),e._v(" "),a("p",[e._v("To analyze the performance of our model, we will look at the area under curve (AUC) of receiver operating characteristics curves or ROC curves. (AUC bigger means the model is better)")]),e._v(" "),a("h3",{attrs:{id:"stage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stage-2"}},[e._v("#")]),e._v(" Stage 2")]),e._v(" "),a("p",[e._v("Use pairwise/listwise approach"),a("br"),e._v("\nBelow are two "),a("strong",[e._v("pairwise learning algorithms")]),e._v(":")]),e._v(" "),a("h4",{attrs:{id:"lambdamart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lambdamart"}},[e._v("#")]),e._v(" LambdaMART")]),e._v(" "),a("p",[e._v("LambdaMART is a variation of MART where we change the objective to improve pairwise ranking, as explained above. Tree-based algorithms are generally able to generalize effectively using a moderate set of training data. Therefore, if your training data is limited to a few million examples, this definitely will be the best choice to use in pairwise ranking in the second stage.")]),e._v(" "),a("p",[e._v("If we are optimizing for offline NDCG (based on human-rated data), then this is definitely one of the best options.")]),e._v(" "),a("h4",{attrs:{id:"lambdarank"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lambdarank"}},[e._v("#")]),e._v(" LambdaRank")]),e._v(" "),a("p",[e._v("LambdaRank is a neural network-based approach utilizing pairwise loss to rank the documents. Neural network-based models are relatively slower (given the large number of computations based on width and depth) and need more training data. So training data size and capacity are key questions before selecting this modeling approach. The online training data generation method for the pairwise approach can generate ranking examples for a popular search engine in abundance. So, that can be one option to generate ample pairwise data.")]),e._v(" "),a("p",[e._v("Your training data contains pairs of documents (i, j), where i ranks higher than j. Let’s look at the Lambda rank model’s learning process. Suppose we have to rank two documents i and j for a given query. We feed their corresponding feature vectors x_​i and x_j​​ to the model, and it gives us their relevance scores, i.e., s_i​​ and s_j. The model should compute these scores (s_i and s_j​​) such that the probability of document i being ranked higher than document j is close to that of the ground truth. The optimization function tries to minimize the inversions in the ranking.")]),e._v(" "),a("p",[e._v("Both LambdaMART and LambdaRank are very well explained in this "),a("a",{attrs:{href:"https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/MSR-TR-2010-82.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("paper"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("blockquote",[a("p",[e._v("We can calculate the NDCG score of the ranked results to compare the performance of different models.")])]),e._v(" "),a("h2",{attrs:{id:"filter-results"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filter-results"}},[e._v("#")]),e._v(" Filter Results")]),e._v(" "),a("p",[e._v("The result set might contain results that:")]),e._v(" "),a("ul",[a("li",[e._v("are offensive")]),e._v(" "),a("li",[e._v("cause misinformation")]),e._v(" "),a("li",[e._v("are trying to spread hatred")]),e._v(" "),a("li",[e._v("are not appropriate for children")]),e._v(" "),a("li",[e._v("are inconsiderate towards a particular group")])]),e._v(" "),a("p",[e._v("These results are inappropriate despite having good user engagement.")]),e._v(" "),a("p",[e._v("From a machine learning point of view, we would want to have a specialized model that removes inappropriate results from our ranked result set.")]),e._v(" "),a("ol",[a("li",[e._v("Training data: Training data comes from human raters or user reports.")]),e._v(" "),a("li",[e._v("Features."),a("br"),e._v("\nWe can use the same features for this model that we have used for training our ranker, e.g., document word embeddings or raw terms can help us identify the type of content on the document."),a("br"),e._v("\nThere are maybe a few particular features that we might want to add specifically for our filtering model. For example, website historical report rate, sexually explicit terms used, domain name, website description, images used on the website, etc.")]),e._v(" "),a("li",[e._v("classifier,e.g., logistic regression, MART(Boosted trees or Random Forest), or a Deep neural network to classify a result as inappropriate."),a("br"),e._v("\nSimilar to the discussion in the ranking section, your choice of the modelling algorithm will depend on:\n"),a("ul",[a("li",[e._v("how much data you have")]),e._v(" "),a("li",[e._v("capacity requirements")]),e._v(" "),a("li",[e._v("experiments to see how much gain in reducing bad content do we see with that modelling technique.")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);