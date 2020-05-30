
本节未完成

## 数学归纳法
这个应该是最简单和常见的数学证明方法了。一般步骤分为：
1. 证明当 $n = n_0$ 时命题成立
2. 证明如果命题对 $n = m$ 成立，那么可以推导出命题对 $n = m + 1$ 也成立。

以平方和为例：
$$\sum_{k=1}^{n}{k}^2 = \frac{n(n + 1)(2n + 1)}{6}$$

当 $n = 1$ 时，显然等式成立   
假设 $n = k$（k为大于1的自然数）时公式成立，即有 $S_{k} = \frac{k(k + 1)(2k + 1)}{6}$   
我们只需要证明 $S_{k+1} = \frac{(k + 1)(k + 2)(2k + 3)}{6}$ 即可

$$\begin{aligned}
S_{k+1} &= S_{k} + {(k +1 )}^2 \\\\
        &= k(k+ 1)(2k + 1)/6 + (k+1)^2 \\\\
        &= (k+1)(2k*k + k)/6 + (k + 1)(6k + 6)/6 \\\\
        &= \frac{(k+1)(2k*k +7k + 6)}{6} \\\\
        &= \frac{(k+1)(2k + 3)(k + 2)}{6} \\\\
        &= \frac{(k + 1)(k + 2)(2k + 3)}{6}
\end{aligned}$$

所以，在 n = k + 1 时等式也成立。   
结论：对于任意的自然数 n 等式都成立。

在《算法导论》书中很多地方的证明都用到了数学归纳法，书中一个例子证明 $T(n) = 2T(\left \lfloor n/2 \right \rfloor) + n$ 的解为 $O(nlogn)$。也就是说存在常数 $c > 0$，可有 $T(n) \leqslant cnlgn$。

首先我们需要选择 $n_0 = 2$ ($n_0$ 可以任意选，我们只需要证明对所有的 $n \geqslant n_0$ 不等式成立) 可以看出不等式成立。   
假定对于所有正数 $m < n$ 时成立，即 $T(m) \leqslant cmlgm$ 对于 $m = \left \lfloor n/2 \right \rfloor$，有
$T(\left \lfloor n/2 \right \rfloor) \leqslant c \left \lfloor n/2 \right \rfloor lg(\left \lfloor n/2 \right \rfloor)$。将其带入递归式，得到

$$\begin{aligned}
  T(n) & \leqslant 2(c \left \lfloor n/2 \right \rfloor lg(\left \lfloor n/2 \right \rfloor)) + n \\\\
       & \leqslant cnlg(n / 2) + n \\\\
       & = cnlgn - cnlg2 + n \\\\
       & = cnlgn - cn + n \\\\
       & \leqslant cnlgn
\end{aligned}$$
其中，只要  $c \geqslant 1$ 最后一步都会成立。

在上面的证明过程中我们可以看到：证明递归式的解我们可以使用数学归纳法，另外，对于复杂的证明可能需要用到重要的不等式。
