---
title: Jednadžbe oblika y′=f((ax+by+c)/(dx+ey+g))
description: Uvod u jednadžbe oblika y′=f((ax+by+c)/(dx+ey+g)).
tags:
  - math
  - differential-equations
---

$$
y^{\prime}=f\left(\frac{a_1x + b_1y + c_1}{a_2x+b_2y+c_2}\right),\quad a,b,c\in\mathbb{R}
$$

## Postupci rješavanja:

### Jednadžbe oblika $y^{\prime}=f\left(\frac{a_1x + b_1y + c_1}{a_2x+b_2y+c_2}\right)$

**1. Korak:** Izračunamo
$$
D=\begin{vmatrix} 
a_1 & b_1 \\
a_2 & b_2
\end{vmatrix}
$$
**2. Korak:** Ako je $D=0$, supstituiramo: $z(x)=a_1x+b_1y(x)$ što se svodi na separirane varijable.
**3. Korak:** Ako je $D\neq 0$, najprije rješavamo:
$$
a_1x + b_1y + c_1=0
$$
$$
a_2x + b_2y + c_2=0
$$
**4. Korak:** Uzimamo rješenje jednadžbi $(x_0,y_0)$ i uvidimo supstituciju:
$$
u=x-x_0
$$
$$
v=y-y_0
$$
**5. Korak:** 
$$
\frac{dv}{du}=\frac{dv}{dy}\cdot\frac{dy}{dx}\cdot\frac{dx}{du}=\frac{dy}{dx}
$$

## Zadatci za vježbu:

**1. Zadatak:** Riješite DJ $y^{\prime}=f\left(\frac{2x + y + 1}{4x+2y+3}\right)$

**2. Zadatak:** Riješite DJ
1. $y^{\prime}=\frac{x+y-3}{x-y+1}$
2. $y^{\prime}(3x+3y-1)=-x-y-2$

**3. Zadatak:** Riješite jednadžbu $(2x-4y+6)dx+(x+y-3)dy=0$

## Rješenja zadataka:

**1. Zadatak:** 
$$
\begin{cases}
\frac{2}{5}(2x+y)+\frac{1}{25}\ln|5(2x+y)+7|=x+c,\quad c\in\mathbb{R} \\
2x+y=-\frac{7}{5}
\end{cases}
$$

**2. Zadatak:** 
1. $$
$$
\arctan{\left(\frac{y-2}{x-1}\right)}-\frac{1}{2}\ln\left| 1+\left(\frac{y-2}{x-1}\right)^2 \right| = \ln|x-1|+c,\quad c\in\mathbb{R}
$$
2. $$
$$
\frac{3}{4}(2x+2y-3)+\frac{7}{4}\ln|2x+2y-3|=x+c, \quad c\in\mathbb{R}
$$

**3. Zadatak:** 
$$
\begin{cases}
-2\ln\left|\frac{y-2}{x-1}-1\right|-3\ln\left|\frac{y-2}{x-1}-2\right|=-\ln|x-1|+c,\quad c\in\mathbb{R} \\
\frac{y-2}{x-1}=2 \\
\frac{y-2}{x-1}=1 
\end{cases}
$$
