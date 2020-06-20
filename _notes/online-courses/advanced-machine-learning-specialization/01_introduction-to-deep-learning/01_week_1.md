## Test

$$\mathrm{S}=\left\{\left(\begin{array}{c}
\mathrm{x}_{1} \\
\mathrm{x}_{2} \\
\mathrm{x}_{3} \\
\mathrm{x}_{4}
\end{array}\right)=\left(\begin{array}{c}
-9 / 2 \\
3 \\
0 \\
-2
\end{array}\right)+\left(\begin{array}{c}
1 / 2 \\
-1 / 3 \\
1 \\
0
\end{array}\right) \mathrm{x}_{3} | \mathrm{x}_{3} \in \mathbb{R}\right\}
$$


$$\rho\left(w_{i}\right)=\frac{f\left(w_{i}\right)^{j / 4}}{\sum_{j=1}^{m} f\left(w_{j}\right)^{3 / 4}}$$

![image](./Screenshot%20from%202020-06-10%2018-35-19.png)
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