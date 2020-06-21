## Week 1 - Linear Models

### Linear Regression
* Supervised Learning:
  * $x_i$ - example
  * $y_i$ - target value
  * $x_i = (x_{i1}, x_{i2}, \dots, x_{id})$ - features
  * $X = ((x_1, y_1), (x_2, y_2), \dots, (x_l, y_l))$ - training set
  * $a(x)$ - model, hypothesis

$$
x \rightarrow a(x) \rightarrow y^{pred}
$$

* Regression:

  $ y_i \in \mathbb{R}$ - regression task

  * Salary Prediction
  * Movie Rating Prediction

* Classfication

    $y_i$ belongs to a finite set - classification task

    * Object Detection
    * Topic Classification

* Linear model for regression

$$
a(x)=b+w_1x_1+w_2x_2+\dots+w_dx_d
$$

  * $w_1,\dots,w_d$ - Coefficients (weights)
  * $b$ - bais
  * $d+1$ - number of parameters
  * To make it simple: there's always a constant feature
  * Vector notation

  $$
  a(x) = w^Tx
  $$

  * For a sample $X$:

    $$
    a(X) = Xw
    $$

    where

    $$
    X = 
    \begin{pmatrix}
    x_{11} & x_{12} & \dots & x_{1d}\\
    x_{21} & x_{22} & \dots & x_{1d}\\
    \vdots & \vdots & \ddots & \vdots\\
    x_{\mathcal{l}1} & x_{l2} & \dots & x_{ld}
    \end{pmatrix}
    $$