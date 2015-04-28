http://chrisnatale.info/markov-models-in-javascript-part-i-an-observable-markov-chain/

Observable Markov Model (OMM) aka Markov Chain

//copied
OMM is a way of estimating the probablity of  a future series of events using only the previous events for each item in the series as inference

// c
if data structure exhibits this behavior, we can say it possesses the Markov Property

http://techeffigytutorials.blogspot.com/2015/01/markov-chains-explained.html
Markov Table, table of probablilites

state    nextstate prob
cloudy   cloudy    0.1
clou     rain     0.5
cloudy   sunny    0.4
rain     cloudy   0.3
rain     rain     0.6
rain    sunny    0.1
sunny    cloudy  0.4
sunny   rain     0.1
sunny   sunny    0.5

Transition Matrix

 C    R   S
C .1 .5  .4
R .3 .6  .1
S .4 .1  .5

it is memorieless, the next state only relies on the previous state.



// rows of P sum to 1 and are nonnegative, it is a "stochastic matrix"
  var transitionMatrix = [
    [0.9, 0.1],
    [0.5, 0.5]
  ];



"states" are categories.
can only be in one, never both or none.
can remain or move states.

markov chains are a combination of probablity and matrix operations

it's a series of probablity trees, you can do 5 10 etc steps into the future
we can find the probability of being in a state in the future, the power of markov chains

                  TO
             state1 state2
      state1
FROM  state2

insurance
high risk , low risk
H->H 6
H->L 4
L->H 15
L-> 85

10% chnace high risk, 90 low based on data. "come through the door" initial state
[.1 .9] initial state vector

probablity that a new customer will be in LOW RISK after on year?
stituaion 1: customer enters high risk and move to low risk = .04
sit 2: cust enter low risk and remains low risk: 0.85 * 0.9= .765
add both = .805 after 1 year
                     H    L
[.1 .9][.6 .4]   = [.195 .805]
        .15 .85
