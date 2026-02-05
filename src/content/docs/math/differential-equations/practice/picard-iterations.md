---
title: Picardove iteracije
description: Uvod u Picardove iteracije.
tags:
  - math
  - differential-equations
---

**Teorem:** (Picard)
> Neka vrijede sljedeće pretpostavke:
> 1. skup $S:=[t_0-a,t_0+a]\times [y_0-b,y_0+b]\subseteq\mathbb{R}^2$, funkcija $f:S\to\mathbb{R}$ je neprekidna i $|f(t,y)|\leq M,\quad (t,y)\in S$
> 2. $f$ je lipshitzova po drugoj varijabli s lipshitzovom konstantom koja ne ovisi o $t$, to jest: 
$$
(\exists c>0)\quad (\forall t\in[t_0-a,t_0+a])\quad (\forall y_1,y_2\in [y_0-b,y_0+b])\quad |f(x,y_1)-f(x,y_2)|\leq c|y_1-y_2|
$$
> Tada CZ $$\begin{cases} y^{\prime}=f(t,y) \\ y(t_0)=y_0 \end{cases}$$ ima rješenje $u\in C^{1}(\langle t_0-T,t_0+T\rangle)\cap C([t_0-T,t_0+T])$. Za $T=\min \{ a,\frac{b}{M} \}$ i to rješenje je lokalno jedinstveno.

**Definicija:** (Picardove iteracije)
> Definiramo niz funkcija $(u_k)_{k\in\mathbb{N}_0}$ na sljedeći način:
$$
u_0(t):= y_0,\quad t\in[t_0-a,t_0+a]
$$
$$
u_k(t):=y_0+\int_{t_0}^t f(s,u_{k-1}(s))ds,\quad t\in [t_0-a,t_0+a]
$$
$$
u_k\to u
$$

## Postupci rješavanja:

### Picardove iteracije

**1. Korak:** Provjerimo je li funkcija neprekidna <br>
**2. Korak:** Ispitajmo lipshitzovost po drugoj varijabli <br>
**3. Korak:** Izracunajmo iteracije preko definicije dok ne naslutimo rješenje

## Zadatci za vježbu:

**1. Zadatak:** Pokažite da CZ $$\begin{cases} y^{\prime}=2t(1+y) \\ y(0)=0 \end{cases}$$ zadovoljava uvijete Picardovog teorema i koristeći Picardove iteracije pokušajte doći do njeog rješenja.

**2. Zadatak:** Za CZ $$\begin{cases} y^{\prime}=ty+2t-t^3 \\ y(0)=0 \end{cases}$$ izračunajte prva četiri člana Picardovih iteracija.

**3. Zadatak:** Za CZ $$\begin{cases} y^{\prime}=1+y^2 \\ y(0)=0 \end{cases}$$ pokažite da je najveći mogući $T$ (za sve izbore $a$ i $b$) iz Picardovog teorema jednak $\frac{1}{2}$. S druge strane, pokažite da je $u(t)=tg(t)$ rješenje zadaće  definirano na $\langle -\frac{\pi}{2},\frac{\pi}{2} \rangle$. Dakle, ocjena za interval egzistencije rješenja iz Picardovog teorema nije optimalan.

**4. Zadatak:** Zadana je CZ $$\begin{cases} y^{\prime}=\sqrt{|y|} \\ y(1)=0 \end{cases}$$. Pokažite da ova zadaća ne zadovoljava uvijete Picardovog teorema, te su funkcije:
$$
y_1(x)=\begin{cases} \frac{(x-1)^2}{4},\quad x\geq 1 \\ -\frac{(x-1)^2}{4},\quad x\leq 1 \end{cases},\quad y_2(x)=0,\quad y_3(x)=\begin{cases} 0,\quad x\leq \alpha \\ \frac{(x-\alpha)^2}{4},\quad x\geq \alpha \end{cases},\quad \alpha > 1
$$
rješenje te CZ.

## Rješenja zadataka:

**1. Zadatak:** Funkcija je neprekidna i lipshitzova po drugoj varijabli. Rješenje je 
$$
u_n(t)=t^2+\frac{t^4}{2}+\frac{t^6}{6}+\cdots +\frac{t^{2n}}{n!}
$$

**2. Zadatak:** 
$$
u_3=t^2-\frac{t^8}{192}
$$

**3. Zadatak:** Maximalni $T=\frac{1}{2}$, $u$ jest rješenje CZ.

**4. Zadatak:** $\frac{\delta f}{\delta y}=\frac{sign(y)}{2\sqrt(y)}$ u okolini točke $(t,0)$ nije ograničena, pa $f$ nije lipshitzova po drugoj varijabli. Funkcije $y_1, y_2, y_3$ jesu rješenje CZ.
