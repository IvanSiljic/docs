---
title: Riccatijeva ODJ
description: Uvod u Riccatijevu ODJ.
tags:
  - math
  - differential-equations
---

$$
y^{\prime}=R(x)y^{2} + Q(x)y+P(x),\quad R,Q,P\quad \text{funkcije od } x
$$

## Postupci rješavanja:

### Riccatijeva jednadžba

**1. Korak:** Potrebno je poznavati jedno partikularno rješenje $y_1$ <br>
**2. Korak:** Supstitucijom $z=y-y_1$ jednadžbu svodimo na Bernullijevu <br>
**3. Korak:** Supstitucijom $z=\frac{1}{y-y_1}$ jednadžbu svodimo na linearnu.

## Zadatci za vježbu:

**1. Zadatak:** Riješite DJ $y^{\prime}=-2-y+y^2$, ako je $y_1=2$ jedno partikularno rješenje.

**2. Zadatak:** Provjerite je li $y=\sin{x}$ rješenje DJ $y^{\prime}=\frac{2\cos^2x-\sin^2x+y^2}{2\cos{x}}$, a potom riješite Riccatijevu jednadžbu uz uvijet $y(0)=1$

**3. Zadatak:** Riješite CZ $\begin{cases} y^{\prime}=(y-x)^2+1 \\ y(0)=\frac{1}{2} \end{cases}$
> *Hint: $y_1=x$

## Rješenja zadataka:

**1. Zadatak:** $3\frac{1}{y-2}+1=e^{-3x}c,\quad c\in\mathbb{R}$

**2. Zadatak:** 
$$
y=\sin{x}+\frac{1}{-\frac{1}{2}\sin{x}-\cos{x}}
$$

**3. Zadatak:** $\frac{1}{y-x}=-x+2$
