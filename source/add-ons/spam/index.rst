Spam
==========

.. contents::
	:local:
	:depth: 1

Introduction
------------

ExpressionEngine includes a Spam Module that allows you to block spammy
channel comments, forum posts, and member registrations. The Spam Module
includes a library that exposes spam classification to third party
developers. The Spam Module allows you to mark content flagged as spam
as false positive which it then learns from, allowing the Spam Module
to be tailored to your content.

Technical Details
-----------------

The Spam Module is based on the Naive Bayes classifier, a simple yet
suprisingly powerful method for classifying spam. Naive Bayes is a
supervised algorithm, which means it learns from a training set of
content manually marked as spam or ham and then uses that to determine
if new content is spam. Naive Bayes works by by breaking your content
down into "Features" (A process we'll refer to as "Vectorization"), you
can think of features as a number that represents some aspect of your
content. One very simple way to break your text in to features, is 
called the bag-of-words model. Simply take all of the unique words in
your training data and give them some sort of order, call this set of
words your "Vocabulary". Assuming there are n words in you vocabulary
you can then turn your content into a vector of length n by simply
storing the count of each word in your content. The Spam Module uses
a slightly more complex method, but the basic idea is the same.

Once we've turned all our training data into vectors we then assume
those features are statistically independent (meaning the probability
of a feature occuring in a piece of content does not depend on the
probability of any other features occuring). This assumption of
statistical independence then allows us to easily calculate the
probability of content being spam based on its features. Intuitively
this assumption doesn't make much sense. Take the phrase "back and
forth," you almost always see forth used as part of this phrase and
you almost never see it used on its own, so knowing that a piece of
content contains the word "forth" we know there is some probability
that it also contains the words "back and". So our assumption of
statistical independence doesn't quite match reality, but still allows
us to make accurate classifications.

Now that we have all our training data vectorized it's very easy to
compute the probabilty of some piece of content being spam. All we
need to do is look at each feature and calculate the mean and standard
deviation (A process called Maximum Likelihood Estimation). For
example "online" might show up often in our training data that's spam
but it probably won't show up much in our ham. In fact, according to
our own training data the mean occurence in our spam is 1.34 with a
standard deviation of 0.37, while for a ham it has a mean occurence of
1.09 with a standard deviation of 0.02. Using this we can then
calculate the probabilty that a piece of content that contains the word
"online" is spam. This is done by using our mean and standard deviation
to construct a normal distribution (the widely used probability 
distribution that the "bell curve" is named after), using this
distribution we simply plug in the calculated feature for our content
and get back the probability that that particular feature occuring so
many times is spam or ham. We follow the same process for each feature.
Once we have the probabilty for each feature we can simply multiply
all of the probabilities together (this is allowed because of our
assumption of statistical independence: If A and B are independent
events then P(A, B) = P(A) * P(B)) to arrive at an overall probabilty
that our content is spam.


