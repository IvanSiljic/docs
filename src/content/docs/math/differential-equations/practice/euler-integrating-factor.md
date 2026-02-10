---
title: Eulerov (integracijski) multiplikator
description: Uvod u eulerov (integracijski) multiplikator.
tags:
  - math
  - differential-equations
---

Jednadžba oblika  
$$
f_1(x,y)\,dx+f_2(x,y)\,dy=0
$$
ne mora biti egzaktna, ali ju je moguće svesti na egzaktnu množenjem tzv. 
**Eulerovim multiplikatorom** $\mu(x,y)$. Tada jednadžba poprima oblik
$$
\mu(x,y)f_1(x,y)\,dx+\mu(x,y)f_2(x,y)\,dy=0,
$$
pri čemu vrijedi uvjet egzaktnosti:
$$
\frac{\partial}{\partial y}\big(\mu f_1\big)=\frac{\partial}{\partial x}\big(\mu f_2\big).
$$

Razvijanjem:
$$
\frac{\partial \mu}{\partial y} f_1 + \mu \frac{\partial f_1}{\partial y}
=
\frac{\partial \mu}{\partial x} f_2 + \mu \frac{\partial f_2}{\partial x}.
$$

Ovu jednadžbu je općenito teško riješiti, pa se Eulerov multiplikator
traži u posebnim oblicima, npr.:
$$
\mu=\mu(x),\quad \mu=\mu(y),\quad \mu=\mu(x+y),\quad \mu=\mu(xy),\quad 
\mu=\mu\!\left(\frac{x}{y}\right),\dots
$$


## Zadatci za vježbu:

**1. Zadatak:** Riješite DJ $(x\sin{y}+y\cos{y})dx+(x\cos{y}-y\sin{y})dy=0$

**2. Zadatak:** Riješite DJ $(2xy^2-y)dx+(y^2+x+y)dy=0$

**3. Zadatak:** Riješite DJ $(x+y^2)dx+(-2xy)dy=0$

**4. Zadatak:** Riješite DJ $(y\sqrt{1-y^2})dx+(x\sqrt{1-y^2}+y)dy=0$

**5. Zadatak:** Odredite rješenje DJ $(y^2)dx+(xy+\tan{(xy)})dy=0$ pri čemu eulerov multiplikator je $\mu (x,y)=\mu (xy)$

**6. Zadatak:** Riješite DJ $(x^2+y^2+y)dx+(-x)dy=0$ koristeći Eulerov multiplikator: $\mu (x,y)=\mu (x^2+y^2)$

## Rješenja zadataka:

**1. Zadatak:** $\sin{y}(xe^x-e^x)+e^xy\cos{y}=c,\quad c\in\mathbb{R}$

**2. Zadatak:** $x^2-\frac{x}{y}+y+\ln|y|=c,\quad c\in\mathbb{R}$

**3. Zadatak:** $\ln|x|-\frac{y^2}{x}=c,\quad c\in\mathbb{R}$

**4. Zadatak:** $xy-\sqrt{1-y^2}=c,\quad c\in\mathbb{R}$

**5. Zadatak:** $t\sin{(xy)}=c,\quad c\in\mathbb{R}$

**6. Zadatak:** $x+\arctan{\frac{x}{y}}=c,\quad c\in\mathbb{R}$
