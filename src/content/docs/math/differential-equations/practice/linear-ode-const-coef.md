---
title: Linearna ODJ n-tog reda s konstantim koeficjentima
description: Uvod u linearna ODJ n-tog reda s konstantim koeficjentima.
tags:
  - math
  - differential-equations
---

$$
y^{(n)}+ a_{n-1}y^{(n-1)} + \cdots + a_1y^{\prime} + a_0y=f(x),\quad a_0,\dots,a_{n-1}\in\mathbb{R}
$$
$f=0\to$ Homogena, $f\neq 0\to$ Nehomogena

## Postupci rješavanja:

### Linearna ODJ n-tog reda s konstantim koeficjentima

**1. Korak:**  Rješavamo pripadnu homogenu tako da:
$$
\lambda^{n}+ a_{n-1}\lambda^{n-1} + \cdots + a_1\lambda + a_0=0
$$
$$
\Longrightarrow \lambda_{1,\dots, n} \in\mathbb{R}
$$
**2. Korak:** Ako je $\lambda$ kratnosti $1$ 
$$
y_{k}=e^{\lambda_k x} \quad k=1,\dots,n
$$
Ako je $\lambda_k$ kratnusti $m$
$$
\begin{cases}
y_k=e^{\lambda_k x} \\
y_{k+1} = xe^{\lambda_k x}
\vdots
y_{k+m} = x^me^{\lambda_k x}
\end{cases}
$$
Ako je $\lambda_k=\alpha +i\beta$
$$
y_k=e^{\alpha}cos{\beta x}
$$
**3. Korak:** Rješenje homogene tada je:
$$
\Longrightarrow y=c_1 y_1 + \cdots + c_n y_n,\quad c_1,\dots,c_n\in\mathbb{R}
$$
**4. Korak:** Ako je $f\neq 0$ onda koristimo MNK
Ovo još treba završiti...

## Zadatci za vježbu:

**1. Zadatak:** Odredite opće rješenje sljedećih DJ: 
1. $y^{\prime\prime}-3y^{\prime}+2y=0$
2. $y^{\prime\prime}-4y^{\prime}+4y=0$
3. $y^{(6)}-y^{(5)}=0$

## Rješenja zadataka:

**1. Zadatak:**
1. $y=c_1 e^{2x}+c_2 e^{x},\quad c_1,c_2\in\mathbb{R}$
2. $y=c_1 e^{2x}+c_2 xe^{2x},\quad c_1,c_2\in\mathbb{R}$
3. $y=c_1+c_2 x + c_3e^x + c_4 e^{-x} + c_5 \cos{x},\quad c_1,c_2,c_3,c_4,c_5\in\mathbb{R}$