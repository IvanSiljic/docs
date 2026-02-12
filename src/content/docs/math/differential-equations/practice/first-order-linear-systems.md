--- 
title: Sustavi prvog reda s konstantnim koeficjentima 
description: Uvod u sustavi prvog reda s konstantnim koeficjentima. 
tags: 
    - math 
    - differential-equations
--- 

$$
\vec{y}^{\prime}=A\vec{y}+\vec{f},\quad \vec{y}:I\to\mathbb{R}^n,\quad \vec{f}:I\to\mathbb{R}^n,\quad A=M_{n\times n}(\mathbb{R})
$$

$\vec{f}=\vec{0}\quad\Longrightarrow\quad \vec{y}^{\prime}=A\vec{y}$ je **homogen sustav**

- Rješavanje homogenog sustava:
    + Ako je $A$ dijagonalizabilna:
        * Rješenje čine stupci fundamentalne matrice $e^{xA}=Tdiag(e^{\lambda_1x},\dots,e^{\lambda_nx})T^{-1}$ gdje su $\lambda_1,\dots,\lambda_n$ svojstvene vrijednosti matrice $A$, a $T$ matrica čiji su stupci svojstveni vektori matrice $A$.
        * Fundamentalni skup rješenja je skup $\{ y_1,\dots,y_n \}$ gdje je $\vec{y}_i=e^{\lambda_ix}\vec{v}_i$, a opće rješenje je dano s: $\vec{y}=\sum_{i=1}^n c_i\vec{y}_i,\quad c_i\in\mathbb{R}$
    + Ako $A$ nije dijagonalizabilna ($\exists$ svojstvena vrijednost čija geometrijska kratnost nije jednaka algebarskoj)
- Jordanov rastav matrica:
    + Za svaki Jordanov lanac $\{\vec{v}_1,\dots,\vec{v}_n\}$ $\begin{cases} (A-\lambda I)\vec{v}_k=\vec{v}_{k-1} \\ (A-\lambda I)\vec{v}_{k-1}=\vec{v}_{k-2} \\ \vdots \\ (A-\lambda I)\vec{v}_1=\vec{0} \end{cases}$ pripadna fundamentalna rješenja dana su s: $\begin{cases} \vec{y}_1=e^{\lambda x}\vec{v}_1 \\ \vec{y}_2=e^{\lambda x}(\vec{v}_1x+\vec{v}_2) \\ \vdots \\ \vec{y}_k=e^{\lambda x}(\vec{v}_1\frac{x^{k-1}}{(k-1)!}+\cdots+\vec{v}_{k-1}x+\vec{v}_k) \end{cases}$

## Zadatci za vježbu:

**1. Zadatak:** Riješite sljedeće sustave DJ:
1. $$
$$
\vec{y}^{\prime}=\begin{bmatrix} -2 & -4 \\ -1 & 1 \end{bmatrix}\vec{y}
$$
2. $$
$$
\vec{y}^{\prime}=\begin{bmatrix} 1 & -1 \\ 1 & 1 \end{bmatrix}\vec{y} + \begin{bmatrix} e^x \\ 0 \end{bmatrix}
$$
3. $$
$$
\vec{y}^{\prime}=\begin{bmatrix} 3 & 1 \\ -1 & 1 \end{bmatrix}\vec{y}
$$

**2. Zadatak:** Riješite zadatak: 
$$
\vec{y}^{\prime}=\begin{bmatrix} 0 & 1 & 2 \\ -5 & -3 & -7 \\ 1 & 0 & 0 \end{bmatrix}\vec{y}
$$

**3. Zadatak:**
$$
\begin{cases}
\vec{y}^{\prime}=\begin{bmatrix} 1 & 0 & 0 \\ 1 & 2 & 0 \\ 1 & 0 & -1 \end{bmatrix}\vec{y} \\
\vec{y}(0)=\begin{bmatrix} 1 \\ 2 \\ 4 \end{bmatrix}
\end{cases}
$$

**4. Zadatak:**
$$
\vec{y}^{\prime}=\begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & -3 \\ 1 & 3 & 2 \end{bmatrix}\vec{y} \\
$$

## Rješenja zadataka:

**1. Zadatak:** 
1. $$
$$
\begin{cases}
\vec{y}_1=e^{2x}\begin{bmatrix} -1 \\ 1 \end{bmatrix} \\
\vec{y}_2=e^{-3x}\begin{bmatrix} 4 \\ 1 \end{bmatrix} \\
\vec{y}= c_1\vec{y}_1 + c_2 \vec{y}_2,\quad c_1,c_2\in\mathbb{R}
\end{cases}
$$
2. $$
$$
\begin{cases}
\vec{y}_1=e^{x}\left(\cos{x}\begin{bmatrix} 0 \\ 1 \end{bmatrix} - \sin{x}\begin{bmatrix} 1 \\ 0 \end{bmatrix}\right) \\
\vec{y}_2=e^{x}\left(\sin{x}\begin{bmatrix} 0 \\ 1 \end{bmatrix} + \cos{x}\begin{bmatrix} 1 \\ 0 \end{bmatrix}\right) \\
\vec{y}_H= c_1\vec{y}_1 + c_2 \vec{y}_2,\quad c_1,c_2\in\mathbb{R} \\
\vec{y}=(\cos{x}+D_1)\vec{y}_1+(\sin{x}+D_2)\vec{y}_2,\quad D_1,D_2\in\mathbb{R}
\end{cases}
$$
3. $$
$$
\begin{cases}
\vec{y}_1=e^{2x}\begin{bmatrix} -1 \\ 1 \end{bmatrix} \\
\vec{y}_2=e^{2x}\begin{bmatrix} -1 \\ 0 \end{bmatrix} \\
\vec{y}= c_1\vec{y}_1 + c_2 \vec{y}_2,\quad c_1,c_2\in\mathbb{R}
\end{cases}
$$

**2. Zadatak:**
$$
\begin{cases}
\vec{y}_1=e^{x}\begin{bmatrix} -1 \\ -1 \\ 1 \end{bmatrix} \\
\vec{y}_2=e^{x}\left(\begin{bmatrix} -1 \\ -1 \\ 1 \end{bmatrix}x + \begin{bmatrix} 1 \\ -2 \\ 0 \end{bmatrix}\right) \\
\vec{y}_3=e^{x}\left(\begin{bmatrix} -1 \\ -1 \\ 1 \end{bmatrix}\frac{x^2}{4} + \begin{bmatrix} 1 \\ -2 \\ 0 \end{bmatrix}x + \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}\right) \\
\vec{y}= c_1\vec{y}_1 + c_2 \vec{y}_2 + c_3\vec{y}_3,\quad c_1,c_2,c_3\in\mathbb{R}
\end{cases}
$$
