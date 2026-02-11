---
title: Jednadžbe koje dopuštaju sniženje reda
description: Uvod u Jednadžbe koje dopuštaju sniženje reda.
tags:
  - math
  - differential-equations
---

**Višestruko sukcesivno integriranje**
> Metoda kojom rješavamo jednadžbe oblika $y^{(n)}=f(x)$

**Jednadžbe oblika $F(x,y^{(k)},y^{(k+1)},\dots,y^{(n)})=0$**
> Jednadžbe koje ne sadrže nepoznatu funkciju $y$ niti prvih $k-1$ njenih derivacija <br>
> Rješavaju se supstitucijom $\begin{cases}p(x)=y^{(k)}(x) \\ p^{\prime}(x)=y^{(k+1)}(x) \\ \vdots \\ p^{(n-k)}(x)=y^{(n)}(x) \end{cases},\quad 1<k\leq n$ time smo snizili red za $k$

**Jednadžbe oblika $F(y,y^{\prime},\dots,y^{(n)})=0$**
> Jednadžba koja ne sadržava varijablu $x$ <br>
> Rješavamo ih supstitucijom $y^{\prime}=p(y)$ pri čemu $y$ postaje bezavisna varijabla, a $y^{\prime}=p(x)$ nepoznata funkcija.
$$
y^{\prime}=p(y)
$$
$$
y^{\prime\prime}=\frac{dp}{dy}\frac{dy}{dx}=p^{\prime}p
$$
$$
y^{\prime\prime\prime}=\frac{d}{dx}(p^{\prime})p+p^{\prime}\frac{dp}{dx}
$$
$$
=p^{\prime}\frac{dy}{dx}p+p^{\prime}p^{\prime}\frac{dy}{dx}
$$
$$
=p^{\prime\prime}p^2+(p^{\prime})^2p
$$

## Zadatci za vježbu:

**1. Zadatak:** Riješite sljedeće jednadžbe:
1. $2xy^{\prime}y^{\prime\prime}=(y^{\prime})^2-1$
2. $x^3y^{\prime\prime}+x^2y^{\prime}=0$
3. $(y^{\prime\prime\prime})^2=4y^{\prime\prime}$
4. $x^2y^{\prime\prime}=(y^{\prime})^2$
5. $y^{\prime\prime\prime}=2(y^{\prime\prime}-1)\cot{x}$

**2. Zadatak:** Riješite sljedeće jednadžbe:
1. $y^{\prime\prime}+2y(y^{\prime})^3=0$
2. $yy^{\prime\prime}+1=(y^{\prime})^2$

## Rješenja zadataka:

**1. Zadatak:** 
1. $$
$$
\begin{cases}
y=\pm \frac{2}{3c}(1+cx)^{\frac{3}{2}}+D,\quad c\neq 0,D\in\mathbb{R} \\
y=\pm x+D,\quad D\in\mathbb{R}
\end{cases}
$$
2. $y=\frac{1}{x}+D\ln|x|+E,\quad D,E\in\mathbb{R}$
3. $$
$$
\begin{cases}
y=\frac{(x\pm c)^4}{12}+Dx+E \\
y=cx+D
\end{cases}, \quad c,D,E\in\mathbb{R}
$$
4. $$
$$
\begin{cases}
y=\frac{1}{c^2}(1+cx+\ln|1+cx|) + D \\
y=c
\end{cases}, \quad c,D\in\mathbb{R}
$$
5. $$
$$
\begin{cases}
y=\frac{cx^2}{4}+\frac{c\cos(2x)}{8}+\frac{x^2}{2}+Dx+E \\
y=\frac{1}{2}x^2+cx+D
\end{cases}, \quad c\neq 0,\quad D,E\in\mathbb{R}
$$

**2. Zadatak:** 
1. $$
$$
\begin{cases}
\frac{y^3}{3}+cy=x+D \\
y=c
\end{cases}, \quad c,D\in\mathbb{R}
$$
2. $$
$$
\begin{cases}
\frac{1}{c}arsh{(cy)}=\pm x+D \\
y=\pm x+c
\end{cases}, \quad c\neq 0,\quad D,E\in\mathbb{R}
$$
