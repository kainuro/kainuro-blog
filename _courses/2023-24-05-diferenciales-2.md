---
layout: page
title: W01.C1 | Introducción a Ecuaciones Diferenciales
date: 1948-12-12 10:18:00
tags: speeches fiction
categories: math, courses
description: As I engage in the so-called "bull sessions" around and about the school, I too often find that most college men have a misconception of the purpose of education.
alias: ecuaciones_diferenciales
---

## Definición de Ecuación Diferencial
Es una ecuación que involucra una función incógnita, sus variables independientes y sus derivadas ordinarias ó parciales. Entonces siempre que exista una función $y = f(x)$, con su derivada $\frac{dy}{dx}$, entonces estaríamos frente a una ecuación diferencial, por ejemplo: $\frac{dy}{dx} = 2y + x$.

Incluso podemos considerar ecuación diferencial a aquellas que no contengan la variable independiente $x$. Además no es necesario contar con la función incógnita explícitamente escrita $y$, pues con sus derivadas es suficiente:

$$
y'' = y' - 2y'''
$$ 

Resolver una ecuación diferencial significa encontrar la función (o funciones) que satisfacen la igualdad. Existen una infinidad de funciones que resuelven la igualdad, por ejemplo $y' - 2x = 0$, tiene como solución a $y = x^{2} + C$.

> Por ejemplo aveces queremos una función de las infinitas, para ello recurrimos a problemas de valor inicial ó de Cauchy, que nos permiten encontrar el valor de $C$.

## Clasificación por tipo
### Ecuación diferencial ordinaria EDO:
Es una ecuación diferencial de función ó funciones incógnita que dependen de una sóla variable independiente, por ejemplo en la siguiente EDO existen dos funciones incógnitas que trabajan con la misma variable independiente $t$:

$$
\frac{dx}{dt} - \frac{dy}{dt} = 2x + y
$$

### Ecuación diferencial parcial EDP:
Cuando la función ó funciones incógnita dependen de varias variables independientes (se ve en el curso de métodos numéricos), por ejemplo con la función $u = u(x, y)$ tenemos las variables independiente $x, y$:

$$
\frac{\partial^{2} u}{\partial x^{2}} + \frac{\partial^{2} u}{\partial y^{2}} = 0
$$


## Clasificación por orden
El orden de una ecuación diferencial (EDO ó EDP) es el orden de la mayor derivada de la ecuación (la máxima derivada). Es así que será primer orden si las ecuaciones involucra la primera derivada, mientras que será orden $n$ para la derivada con orden $n$, por ejemplo para segundo orden:

$$
\frac{d^{2}y}{dx^{2}} - 5 \left( \frac{dy}{dx} \right)^{3} + 6y = e^{x}
$$

Gracias al ejemplo anterior, debemos notar que si una derivada está elevada a un exponente este no afecta a su orden, por lo que sólo debemos identificar la máxima derivada.

> Todas las ecuaciones diferenciales de segundo orden en adelante se consideran de orden superior.


## Clasificación por linealidad
Una ecuación diferencial ordinaria de *n-ésimo* orden se dice que es lineal si se cumplen las siguientes descripciones:

$$
a_{n}(x)\frac{d^{n}y}{dx^{n}} + a_{n-1}(x)\frac{d^{n-1}y}{dx^{n-1}} + \dots + a_{1}(x)\frac{dy}{dx} + a_{0}(x)y = f(x)
$$

- La variable dependiente $y$ y todas sus derivadas $\frac{dy}{dx}, \frac{d^{2}y}{dx^{2}}, \dots, \frac{d^{n}y}{dx^{n}}$ son de primer grado, la potencia de cada uno de estos términos es 1.
- Los coeficientes de $a_{0}, a_{1}, \dots, a_{n}$ de y, $\frac{dy}{dx}, \frac{d^{2}y}{dx^{2}}, \dots, \frac{d^{n}y}{dx^{n}}$ son constantes ó a lo más dependen de la variable independiente. 

> La definición indica que $f(x)$ depende únicamente de $x$, caso contrario no es lineal. Además si la función $y$ ó sus derivadas tiene un exponente mayor a 1, ya no es lineal. En el caso de los coeficientes $a_{n}(x)$ debemos tener únicamente variables independientes $x$.