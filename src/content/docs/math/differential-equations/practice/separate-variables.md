---
title: Jednadžba sa Separiranim Varijablama
description: Uvod u jednadžbe sa separiranim varijablama.
tags:
  - math
  - differential-equations
---

$$
y^{\prime}=f(x,y)
$$

**Definicja:**
> Ako postoje funkcije $g$ i $h$ tako da $f(x,y)=g(x)\cdot h(y)$, onda se jednadžba $y^{\prime}=g(x)\cdot h(y)$ zove jednadžba sa separiranim varijablma.

## Postupci rješavanja:

### Jednadžbe sa separiranim varijablama

**1. Korak:** 
$$
\frac{dy}{dx}= g(x)\cdot h(y)\quad / dx \quad / : h(y)\neq 0 
$$
**2. Korak:** 
$$
\frac{dy}{h(y)}=g(x)dx\quad /\int
$$
**3. Korak:** 
$$
\int \frac{dy}{h(y)}=\int g(x)dx
$$

## Zadatci za vježbu:

**1. Zadatak:** Riješite DJ $xy^{\prime}=2y$

**2. Zadatak:** Riješite sljedeće DJ:
1. $x^2y^2y^{\prime}+1=y$
2. $x^2y^{\prime}=y^2$
3. $2x^2yy^{\prime}=2-y^2$

**3. Zadatak:** Riješite CZ $\begin{cases} (1+e^x)yy^{\prime}=e^x \\ y(0)=1 \end{cases}$

## Rješenja zadataka:

**1. Zadatak:** $y=c\cdot x^2,\quad c\in\mathbb{R}$

**2. Zadatak:**
1. $\begin{cases} \frac{y^2}{2}+y+ln|y-1|=-\frac{1}{x}+c,\quad c\in\mathbb{R} \\ y=1 \end{cases}$
2. $\begin{cases} \frac{1}{y}={1}{x}+c,\quad c\in\mathbb{R}, \\ y=0 \end{cases}$
3. $2-y^2=e^{\frac{1}{x}}\cdot c,\quad c\neq 0$

**3. Zadatak:** $\frac{y^2}{2}=\ln|1+e^x|+\frac{1}{2}-\ln|2|$
