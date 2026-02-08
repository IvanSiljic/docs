---
title: Linearna Obična Diferencijalna Jednadžba
description: Uvod u linearnu obična diferencijalna jednadžba.
tags:
  - math
  - differential-equations
---

$$
y^{\prime}+a(x)y=b(x)
$$

## Postupci rješavanja:

### Linearna ODJ

**1. Korak:** Najprije riješimo pripadnu homogenu DJ:
$$
y^{\prime}+a(x)y = 0
$$
**2. Korak:** Neka je $y_H=cf(x),\quad c\in\mathbb{R}$ rješenje homogene jednadžbe. <br>
**3. Korak:** Koristimo metodu varijacije konstanti (MVK), odnosno: $y=c(x)f(x)$.

## Zadatci za vježbu:

**1. Zadatak:** Riješite DJ $y^{\prime}-\frac{2}{x}y=2x^3$

**2. Zadatak:** Riješite CZ $\begin{cases} y^{\prime}-\tan{(x)}y=\cos{x} \\ y(0)=0 \end{cases}$

**3. Zadatak:** Riješite DJ 
1. $(2x+1)y^{\prime}=4x+2y$
2. $xy^{\prime}+(x+1)y=3x^2e^{-x}$
3. $y^{\prime}-\frac{y}{x\ln{x}}=x\ln{x}$

## Rješenja zadataka:

**1. Zadatak:** $y=(x^2+D)x^2,\quad D\in\mathbb{R}$

**2. Zadatak:** $y=\frac{1}{\cos{x}}\left(\frac{1}{2}\left(x+\frac{1}{2}\sin{2x}\right)\right)$

**3. Zadatak:** 
1. $y=(2x+1)\left( \ln|2x+1|+\frac{1}{2x+1}+D \right),\quad D\in\mathbb{R}$
2. $y=(x^3+D)e^{-x}\frac{1}{x},\quad D\in\mathbb{R}$
3. $y=\left(\frac{1}{2}x^2+D\right)\ln{x},\quad D\in\mathbb{R}$
