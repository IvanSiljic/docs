---
title: Egzaktne Jednadžbe
description: Uvod u egzaktne jednadžbe.
tags:
  - math
  - differential-equations
---

$$
y^{\prime}=-\frac{f_1(x,y)}{f_2(x,y)},\quad f_1(x,y)dx+f_2(x,y)dy=0
$$

## Postupci rješavanja:

### Bernoullijeva ODJ

**1. Korak:** Provjeravamo uvjet egzaktnosti: 
$$
\frac{\delta f_1}{\delta y}=\frac{\delta f_2}{\delta x}
$$
**2. Korak:** Uzmimo da je $F(x,y)=c,\quad c\in\mathbb{R}$. <br>
**3. Korak:** 
$$
\begin{cases}
\frac{\delta F}{\delta x}=f_1 \\
\frac{\delta F}{\delta y}=f_2
\end{cases}
$$
**4. Korak:** $\frac{\delta F}{\delta x}=f_1 \quad /\int dx$ <br>
**5. Korak:** $F(x,y)=g(x,y)+\varphi(y) \quad /\frac{d}{dy}$ <br>
**5. Korak:** $\varphi^{\prime}(y)=g(y) \quad /\int dy$ <br>
**6. Korak:** Rješenje je onda:
$$
F(x,y)=c,\quad c\in\mathbb{R} \\
$$

## Zadatci za vježbu:

**1. Zadatak:** Riješite DJ $(3x^2+6xy^2)dx+(6x^2y+4y^3)dy=0$

**2. Zadatak:** Riješite CZ 
$$
\begin{cases}
(\ln{y}-5y^2\sin{5x})dx+\left(\frac{x}{y}+2y\cos{5x} \right)dy=0 \\
y(0)=e
\end{cases}
$$

**3. Zadatak:** Riješite DJ $xy^{\prime}-2x^2\sqrt{y}=4y$

**4. Zadatak:** Riješite DJ $x(e^y-y^{\prime})=2$

**5. Zadatak:** Riješite DJ $(3x^2e^y)dx+(x^3e^y-1)dy=0$

## Rješenja zadataka:

**1. Zadatak:** $x^3+3x^2y^2+y^4=c,\quad c\in\mathbb{R}$

**2. Zadatak:** $x\ln{y}+y^2\cos{5x}=e^2$

**3. Zadatak:** $\sqrt{y}=x^2(\ln|x|+D),\quad D\in\mathbb{R}$

**4. Zadatak:** $\frac{1}{e^y}=\left(\frac{1}{x}+D\right)x^2,\quad D\in\mathbb{R}$

**5. Zadatak:** $x^3e^y-y=c,\quad c\in\mathbb{R}$
