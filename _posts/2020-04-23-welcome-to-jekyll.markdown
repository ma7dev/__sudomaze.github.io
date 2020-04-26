---
layout: post
title:  "Hello World"
date:   2020-04-23 07:10:21 -0700
categories: "test"
---

# Header 1

## Header 2

### Header 3

#### Header 4

$$

\int f^{-1}(x-x_a)\,dx
\\
\forall x \in X, \quad \exists y \leq \epsilon
\\
\alpha, \beta, \gamma, \Gamma, \pi, \Pi, \phi, \varphi, \mu, \Phi
$$

$$
\lim\limits_{x \to \infty} \exp(-x) = 0
$$

$$
f(n) = n^5 + 4n^2 + 2 |_{n=17}
$$

$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$

$$
^3/_7
$$

$$
\sqrt{\frac{a}{b}}
$$

$$
\sum_{i=1}^{10} t_i
$$

$$
\int_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x
$$

$$
\prod
$$

$$
( a ), [ b ], \{ c \}, | d |, \| e \|,
\langle f \rangle, \lfloor g \rfloor,
\lceil h \rceil, \ulcorner i \urcorner
$$

$$
P\left(A=2\middle|\frac{A^2}{B}>4\right)
$$

$$
\left.\frac{x^3}{3}\right|_0^1
$$

$$
\frac{\mathrm d}{\mathrm d x} \left( k g(x) \right)
$$

$$
A_{m,n} = 
 \begin{pmatrix}
  a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
  a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
  \vdots  & \vdots  & \ddots & \vdots  \\
  a_{m,1} & a_{m,2} & \cdots & a_{m,n} 
 \end{pmatrix}
$$

$$
M = \begin{bmatrix}
       \frac{5}{6} & \frac{1}{6} & 0           \\[0.3em]
       \frac{5}{6} & 0           & \frac{1}{6} \\[0.3em]
       0           & \frac{5}{6} & \frac{1}{6}
     \end{bmatrix}
$$

$$
\bigl(\begin{smallmatrix}
a&b \\ c&d
\end{smallmatrix} \bigr)
$$

$$
abcdefghijklmnopqrstuvwxyz1234567890
$$

$$
\mathrm{abcdefghijklmnopqrstuvwxyz1234567890}
$$

$$
\mathit{abcdefghijklmnopqrstuvwxyz1234567890}
$$

$$
\mathbf{abcdefghijklmnopqrstuvwxyz1234567890}
$$

$$
\mathsf{abcdefghijklmnopqrstuvwxyz1234567890}
$$

$$
\mathtt{abcdefghijklmnopqrstuvwxyz1234567890}
$$

$$
\mathfrak{abcdefghijklmnopqrstuvwxyz1234567890}
$$

$$
\mathcal{abcdefghijklmnopqrstuvwxyz1234567890}
$$

$$
\mathbb{abcdefghijklmnopqrstuvwxyz1234567890}
$$

$$
\mathscr{abcdefghijklmnopqrstuvwxyz1234567890}
$$

$$
a', a'', \hat{a}, \bar{a}, \grave{a}, \acute{a}, \dot{a}, \ddot{a}, \not{a}, \mathring{a}, \overrightarrow{aa}, \overleftarrow{aa}, \overline{aaa}, \check{a}, \breve{a}, \vec{a}, \widehat{aaa}, \widetilde{aaa}, \stackrel\frown{aaa}, \tilde{a}, \underline{a}
$$

$$
k = {\color{red}x} \mathbin{\color{blue}-} 2
$$

$$
f(n) =
  \begin{cases}
    n/2       & \quad \text{if } n \text{ is even}\\
    -(n+1)/2  & \quad \text{if } n \text{ is odd}
  \end{cases}
$$

$$
\left(
    \begin{array}{c}
      n \\
      r
    \end{array}
  \right) = \frac{n!}{r!(n-r)!}
$$

$$
\partial
$$

{% include built-in/hint.html type="primary" content="notification" %}

*YOLOv3*[[1]](#ref-1).

$$
\begin{align}
v(t_1) &= v(t_0) + \int_{t_0}^{t_1} a(t) dt \\  
\end{align}
$$


{% include built-in/table.html id="1" content="

| First Header  | Second Header | Third Header         |
| ------------- | ------------- | -------------------- |
| First row     | Data          | Very long data entry |
| Second row    | **Cell**      | *Cell*               |
| Third row     | Cell that spans across two columns   ||

" 
caption="attadad" %}

{% include built-in/pcode.html id="1" code="
\begin{algorithm}
\caption{Quicksort}
\begin{algorithmic}
\PROCEDURE{Quicksort}{$A, p, r$}
    \IF{$p < r$} 
        \STATE $q = $ \CALL{Partition}{$A, p, r$}
        \STATE \CALL{Quicksort}{$A, p, q - 1$}
        \STATE \CALL{Quicksort}{$A, q + 1, r$}
    \ENDIF
\ENDPROCEDURE
\PROCEDURE{Partition}{$A, p, r$}
    \STATE $x = A[r]$
    \STATE $i = p - 1$
    \FOR{$j = p$ \TO $r - 1$}
        \IF{$A[j] < x$}
            \STATE $i = i + 1$
            \STATE exchange
            $A[i]$ with     $A[j]$
        \ENDIF
        \STATE exchange $A[i]$ with $A[r]$
    \ENDFOR
\ENDPROCEDURE
\end{algorithmic}
\end{algorithm}
" %}

{% include built-in/img.html id="1" url="https://www.gwern.net/images/silkroad/2012-christin-sr-dailysales.png" caption="I love it" %}

[Figure 1](#img-1)
[table 1](#table-1)

{% include video id="DM0nkQxrpW0" provider="youtube" %}


{% highlight python linenos %}
# import relevant libraries
import roslib
import rospy
import math

def mb_callback(msg):
  # Check if robot has reached goal
  if msg.status.status == 2 or msg.status.status == 4 or msg.status.status == 5 or msg.status.status == 6:
    print "Robot failed to reach waypoint!"
  elif msg.status.status == 3:
    print "Robot successfully reached waypoint!"
  
  pub.publish(waypoint)
{% endhighlight %}

{% include built-in/quote.html quote="
Ah! let not Censure term our fate our choice, / The stage but echoes back the public’s voice; The drama’s laws the drama’s patrons give, / For we that live to please must please to live.
"
footer="[Samuel Johnson](wikipedia.org/wiki/)(\"Prologue at the Opening of Drury Lane Theatre\")"
%}

# Footnotes

<ol id="page-footnotes">
{% include built-in/note.html id="1" details="https://www.youtube.com/watch?v=Q8nhQSp__3s&list=WL&index=11"%}
</ol>
