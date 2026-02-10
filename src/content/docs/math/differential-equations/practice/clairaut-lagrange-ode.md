---
title: Clairautova i Lagrangeova DJ
description: Uvod u Clairautovu i Lagrangeovu diferencijalnu jednadžbu.
tags:
  - math
  - differential-equations
---

Clairautova jednadžba:
$$
y=xy^{\prime} + f(y^{\prime})
$$

Lagrangeovo poopćenje:
$$
y=xf(y^{\prime})y^{\prime}+f(y^{\prime})
$$

## Postupci rješavanja:

### Clairautova jednadžba

**1. Korak:** Prvo deriviramo po $x$:
$$
y^{\prime}=y^{\prime}+xy^{\prime\prime}+f^{\prime}(y^{\prime})y^{\prime}
$$
**2. Korak:** 
$$
y^{\prime\prime}(x+f^{\prime}(y^{\prime}))=0
$$
**3. Korak:** Jedno od rješenje je:
$$
y^{\prime\prime}=0 \quad\Rightarrow\quad y=cx+D,\quad c,D\in\mathbb{R},\quad D=f(c)
$$
**4. Korak:** Drugo rješenje (singularno):
$$
\begin{cases}
x+f^{\prime}(p)=0 \\
y=xp+f(x)
\end{cases},\quad p=y^{\prime}
$$

## Zadatci za vježbu:

**1. Zadatak:** Odredite opće rješenje jednadžbe $y=xy^{\prime}+\frac{1}{y^{\prime}}$ te provjerite ima li singularno rješenje.

**2. Zadatak:** Odredite ukoliko postoji singularno rješenje DJ $y=xy^{\prime}+\sqrt{4+9(y^{\prime})^2}$

**3. Zadatak:** Odredite ukoliko postoji singularno rješenje DJ $y=xy^{\prime}+2+(y^{\prime})^5$

## Rješenja zadataka:

**1. Zadatak:** Opće rješenje: $y=cx+\frac{1}{c},\quad c\in\mathbb{R}$, singularno rješenje: $y^2=4x$

**2. Zadatak:** Opće rješenje: $y=cx+\sqrt{4+9c^2},\quad c\in\mathbb{R}$, singularno rješenje: $\frac{x^2}{9}+\frac{y^2}{4}=1$

**3. Zadatak:** Opće rješenje: $y=cx+2+c^{5},\quad c\in\mathbb{R}$, singularno rješenje: $5^5(y-2)^4+4^4x^5=0$
