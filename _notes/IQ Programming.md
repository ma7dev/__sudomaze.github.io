---
layout: post
comments: True
date: 20210101
title: IQ Programming
tags: []
status: in-progress
---

[[110 Interesting Quotes]] [[Programming]]

-   Dependencies (coupling) is an important concern to address, but it's only 1 of 4 criteria that I consider and it's not the most important one. I try to optimize my code around reducing state, coupling, complexity and code, in that order. I'm willing to add increased coupling if it makes my code more stateless. I'm willing to make it more complex if it reduces coupling. And I'm willing to duplicate code if it makes the code less complex. Only if it doesn't increase state, coupling or complexity do I setup code. The reason I put stateless code as the highest priority is it's the easiest to reason about. Stateless logic functions the same whether run normally, in parallel or distributed. It's the easiest to test, since it requires very little setup code. And it's the easiest to scale up, since you just run another copy of it. Once you introduce state, your life gets significantly harder. I think the reason that novice programmers optimize around code reduction is that it's the easiest of the 4 to spot. The other 3 are much more subtle and subjective and so will require greater experience to spot. But learning those priorities, in that order, has made me a significantly better developer.
    -   "The best programs are the ones written when the programmer is supposed to be working on something else." - Melinda Varian.
-   "Colab or didn't happen..." - @jesseengel
-   "When people say "I am investing for the long term", it means they are losing money." - @nntaleb
-   "round-robin fashion" - Fuxin Li
-   "i took this writing class in university, where an author came to talk to the class. someone asked him why he has to publish his writing, instead of just writing for himself. he was gross, and he said that writing for yourself is like masturbating and publishing is like having sex. and this has stuck with me for about 10 years." - http://blog.spencermounta.in/2018/how-to-be-a-blog-in-2018/index.html
-   "If you torture data long enough, it will confess to anything." - https://www.reddit.com/r/statistics/comments/k9e43a/question_is_this_just_bad_statistics/gf3pwfi/?utm_source=reddit&utm_medium=web2x&context=3
-   "The will to win is not nearly as important as the will to prepare to win. Everyone wants to win, but not everyone wants to prepare to win." - Bobby Knight
