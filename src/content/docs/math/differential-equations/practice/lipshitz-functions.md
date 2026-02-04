---
title: Lipshitzove funkcije
description: Uvod u Lipshitzove funkcije.
tags:
  - math
  - differential-equations
---

**Definicija:**
> Funkcija $f:I\subseteq\mathbb{R}\to\mathbb{R}$ je **lipshitzova** ako 
$$
(\forall c>0)\quad (\forall x_1,x_2\in I)\quad |f(x_1)-f(x_2)|\leq c|x_1-x_2|.
$$
> Konstanta $c$ zove se **lipshitzova konstanta**.

**Definicija:**
> Funkcija $f: S:=I\times J\subseteq\mathbb{R}^{2}\to\mathbb{R}$ je **lipshitzova po drugoj varijabli** ukoliko
$$
(\exists c>0)\quad (\forall x\in I)\quad (\forall y_1,y_2\in J)\quad |f(x,y_1)-f(x,y_2)|\leq c|y_1-y_2|
$$

**Lemma:**
> Funkcija $f$ je lipshitzova po drugoj varijabli na $S\subseteq\mathbb{R}^2$ ako i samo ako je $\left| \frac{\delta f}{\delta y} \right|$ omeđeba odozgo na $S$. U tom slučaju najmanja lipshitzova konstanta jednaka je 
$$
c=sup_S \left| \frac{\delta f}{\delta y} \right|
$$ 

## Postupci rješavanja:

### Ispitivanje lipshitzove funkcije

**1. Korak:** Ubacimo $x_1,x_2\in I$ u funkciju $f$ i uvrstimo u nejednakost $|f(x_1)-f(x_2)|$ i izvučemo vrijednost konstante $c$.

### 1 Lipshitzove funkcije po drugoj varijabli

**1. Korak:** Ubacimo $x\in I,\quad y_1,y_2\in S$ u funkciju $f$ i uvrstimo u nejednakost $|f(x,y_1)-f(x,y_2)|$ i izvučemo vrijednost $x$.<br>
**2. Korak:** Nađemo granice za vrijednosti $x\to c_1\leq x \leq c_2$. 

### 2 Lipshitzove funkcije po drugoj varijabli

**1. Korak:** Ubacimo $x\in I,\quad y_1,y_2\in S$ u funkciju $f$ i uvrstimo u nejednakost $|f(x,y_1)-f(x,y_2)|$ i izvučemo vrijednost $x$.<br>
**2. Korak:** Nađemo granice za vrijednosti $x\to c_1\leq x \leq c_2$. 

## Zadatci za vježbu:

**1. Zadatak:** Ispitajte jesu li  sljedeće funkcije lipshitzove:
1. $f:[a,b]\to\mathbb{R},\quad f(x)=x^2$
2. $f:[-1,1]\to\mathbb{R},\quad f(x)=|x|$.

**2. Zadatak:** Je li funkcija $f(x,y)=\frac{3y}{2+x^2}$ lipshitzova na pravokutniku $S=[-a,a]\times[-b,b],\quad a,b>0$.

**3. Zadatak:** Neka su $a,b>0,\quad a,b\in\mathbb{R}$. Ispitajte je li funkcija $f$ lipshitzova po drugoj varijabli na $P=[-a,a]\times[-b,b]$ i ako je odredite lipshitzovu konstantu.
1. $f(x,y)=\frac{3y}{2+x^2}$
2. $f(x,y)=y\cos3x+x\sin2y$

## Rješenja zadataka:

**1. Zadatak:**
1. Funkcija jest lipshitzova s konstantom $c=2b$
2. Funkcija jest lipshitzova s konstantom $c=1$

**2. Zadatak:** Funcija jest lipshitzova po drugoj varijabli gdje je $\frac{3}{2}\geq \frac{3}{x^2+2} \geq \frac{3}{a^2+2}$

**3. Zadatak:**
1. Jest lipshitzova i $c=\frac{3}{2}$
2. Jest lipshitzova i $c=1+2a$