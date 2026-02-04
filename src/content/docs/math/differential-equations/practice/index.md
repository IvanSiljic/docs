---
title: Uvod
description: Uvod u praktični dio diferencijalnog računa.
tags:
  - math
  - differential-equations
---

**Definicija:** (Obična diferencijalna jednadžba - ODJ)
> Diferencijalna jednadžba je jednadžba oblika $F(x,y,y^{\prime},\dots,y^{(n)})=0$.

\* Explicitni oblik: $y^{(n)}(x)=f(x,y,y^{\prime},\dots,y^{(n-1)}).$

**Definicija:** (Rješenje ODJ)
> Neka je $\Omega\subseteq\mathbb{R}^{n+1}$ otvoren skup i $f:\Omega\to\mathbb{R}$ dana funkcija. Za funkciju $u:I\to\mathbb{R}$ kažemo da je rješenje ODJ ukoliko vrijedi:
> 1. $I\subseteq\mathbb{R}$ je otvoren interval
> 2. $u\in C^{n}(I)$
> 3. $(\forall x \in I)\quad (x, u(x), u^{\prime}(x), \dots, u^{(n)}(x))\in\Omega$
> 4. $(\forall x \in I)\quad u^{(n)}(x)=f(x, u(x), u^{\prime}(x), \dots, u^{(n-1)}(x))$

**Definicija:**
> Skup svih rješenja ODJ zovemo **opće rješenje**, a jedno rješenje ODJ zovemo **partikularno rješenje** diferencijalne jednadžbe.

**Definicija:** (Cauchyjeva zadaća)
> Ukoliko uz DJ imamo zadan uvjet, tj ukoliko promatramo $$(*)\begin{cases} y^{\prime}(x)=f(x,y) \\ y(x_0)=y_0 \end{cases}$$ onda zadaću $(*)$ nazivamo **Cauchyjeva zadaća**, a uvjet $y(x_0)=y_0$ **početni uvjet**.

**Teorem:** (Banachov prostor)
> Prostor svih neprekidnih funkcija $(C([a,b]),+,\cdot)$ na segmentu $[a,b]$ je realan Banachov prostor uz normu definiranu s 
$$
||f||:=max_{x\in[a,b]}|f(x)|
$$

**Definicija:**
> Kažemo da funkcija **konvergira** ka $f\quad (f_n \to f)$ u $C([a,b])$ ukoliko
$$
(\forall x \in [a,b])\quad (\exists \varepsilon > 0)\quad (\exists n_{x\varepsilon}\in\mathbb{N})\quad (\forall n\in\mathbb{N})\quad n\geq n_{x\varepsilon}\Rightarrow |f_n(x)-f(x)|<\varepsilon
$$

**Definicija:**
> Kažemo da niz funkcija $f_n$ **uniformno konvergira** ka $f\quad (f_n \to f)$ u $C([a,b])$ ukoliko
$$
(\forall \varepsilon > 0)\quad (\exists n_{\varepsilon}\in\mathbb{N})\quad (\forall x\in[a,b])\quad (\forall n\in\mathbb{N})\quad n\geq n_{\varepsilon}\Rightarrow |f_n(x)-f(x)|<\varepsilon
$$

## Postupci rješavanja:

### Provjera uniformne konvergencije

**1. Korak:** $f(x)=lim_{n\to\infty}f_n(x)$<br>
**2. Korak:** $|f_n - f| < \varepsilon, \quad \varepsilon>0$<br>
**3. Korak:** Ako je moguće $n=f(\varepsilon)$

## Zadatci za vježbu:

**1. Zadatak:** Pronađite sve krivulje za koje je odsječak na osi ordinata, koji odsjeca bilo koja tangenta, jednak apscisi dirališta.
> \*Hint: Apscisa x-os, ordinata y-os

> \*Hint: Tangenta: $y-f(x_0)=f^{\prime}(x_0)(x-x_0)$

**2. Zadatak:** Odredite sve krivulje kojimia tangenta u svakoj točki te krivulje zatvara s koordinatnim osama trokut konstantne površine $2a^{2}$.

**3.Zadatak:** Model populacije: 
1. Malthusov model: "Brzina rasta populacije u trenutku $t$ proporcionalna je broju jedinki u tom trenutku",
2. Verhulstov model: "Brzina rasta populacije u ograničenom životnom prostoru u trenutku $t$ proporcionalna je umnošku broju jedinki u tom trenutku i veličini biološkog potencijala u tom trenutku". 

**4. Zadatak:** Fizikalni zakon raspada radioaktivne materije: "Brzina raspada proporcionalna je količini još neraspadnute materije".

**5. Zadatak:** Provjerite jesu li funkcije $y_1=x^{2}$ i $y_2=x^2+3$ rješenje DJ $y^{\prime}=\frac{2y}{x}$ na bilo kojem otvorenom intervalu $I\subseteq\mathbb{R}\backslash\{0\}$. 

**6. Zadatak:** Ispitajte konvergenciju niza $(f_n)$ funkcija $C([a,b])$ ako je:
1. $\quad f_n(x)=\frac{nx}{nx+1},\quad n\in\mathbb{N}$
2. $\quad f_n(x)=\frac{nx^2}{nx+1}$

## Rješenja zadataka:

**1. Zadatak:**
$$
y-y^{\prime}x=x
$$
$$
y=-x\ln|x|+cx,\quad c\in\mathbb{R}
$$

**2. Zadatak:**
$$
\frac{1}{2}\left(x-\frac{y}{y^{\prime}}\right)(-xy^{\prime}+y)=2a^{2}
$$
$$
y=\frac{a^{2}}{x}+c,\quad c,a\in\mathbb{R}
$$

**3. Zadatak:**

1. 
$$
P^{\prime}=kP
$$
$$
P=ce^{kt},\quad c\in\mathbb{R}
$$
2. 
$$
P^{\prime}=kP(A-P)
$$
$$
P=\frac{Ace^{kAt}}{1+ce^{kAt}},\quad c\in\mathbb{R}
$$

**4. Zadatak:**
$$
y^{\prime}=-ky
$$
$$
y=ce^{-kx},\quad c\in\mathbb{R}
$$

**5. Zadatak:** $y_1$ jest rješenje, $y_2$ nije rješenje.

**6. Zadatak:**
1. Uniformno konvergentna s uvjetom da $0\notin [a,b]$
2. Uniformno konvergentna.
