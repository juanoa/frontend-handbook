---
title: "Ciclo de vida de una funcionalidad"
chapter: 6
description: "Cómo gestionar una nueva funcionalidad de principio a fin"
---

En ese capitulo vamos a poner más en práctica los conceptos de los capítulos anteriores viendo cómo enfocar una nueva funcionalidad desde el punto de vista de un ingeniero frontend. Aquí no es fácil dar con la fórmula secreta, ya que todo depende del estado de producto, cómo se conforme el equipo, los roles, la cultura, ... Aun así es interesante tener en cuenta estas etapas para saber cuáles se pueden introducir en el ciclo de vida de una historia de usuario y de qué manera hacerlo.

Las fases que se van a describir son bastante generales y creo que pueden encajar en la manera de trabajar de muchos equipos de producto. En algunos sitios cada una de estas fases se ejecutarán de manera más paralela, mientras que en otros se ejecutarán en cascada.

Por lo general, a excepción de la fase de diseño, las siguientes responsabilidades pueden recaer en cualquier tipo de desarrollador, ya sea backend o frontend.

## 1. Análisis

![Life cycle: analysis](/images/life-cycle-01.png)

Esta primera fase suele ser liderada por el Product Owner o Product Manager del producto, acompañado normalmente por el Product Designer o UX designer.

Desgraciadamente suele ser la fase más desconocida para ingeniería, pero como desarrollador se puede aportar valor de varias maneras:

- Obteniendo datos del uso de la aplicación para así tener información sobre la que respaldar la decisiones de producto que se van a tomar.
- Aportando nuevas ideas de cómo se podría utilizar la aplicación o de qué maneras podemos escalar lo que ya tenemos.
- Avisando de los posibles cuellos de botella y de la deuda técnica que pueden retrasar ciertos desarrollos planteados.

Conocer el código a la hora de proponer nuevas ideas puede ser un arma de doble filo. Es fácil caer en sesgos y proponer, por ejemplo, la opción más sencilla de implementar en vez de la más correcta. Lo que no quita a que lo debamos avisar.

## 2. Diseño

![Life cycle: design](/images/life-cycle-02.png)

El diseño, como hablábamos en un capítulo anterior del handbook, es una piedra angular para los desarrolladores frontend. No solo deben de tener unos conocimientos mínimos de diseño, si no que tienen que colaborar en los procesos de prototipado como agentes externos que ayuden al diseñador a ofrecer una mejor solución. Por ejemplo:

- Ayudando a identificar componentes comunes que se pueden repetir en diferentes partes del producto (o incluso en diferentes productos) e ir desarrollándolos en una librería de componentes.
- Definiendo unos foundations sólidos que nos ayudarán a ser mucho más ágiles a la hora de tomarnos ciertas licencias a la hora de implementar los diseños.
- Entendiendo qué es lo que el diseñador quería representar y qué visión tiene sobre el producto a medio y largo plazo para ir trasladando todo este lenguaje al código del proyecto.

En general, los roles de _Product Designer_ y _Frontend Engineer_ están más relacionados de lo que realmente parece. Tanto es así que hay muchas empresas donde están empezando a contratar perfiles que son capaces de asumir ambos roles para aumentar la velocidad de desarrollo, a costa, por supuesto, de una _performance_ menos en ambas disciplinas.

## 3. Desarrollo

![Life cycle: develop](/images/life-cycle-03.png)

Sin duda, la fase más importante del desarrollo para un ingeniero de software. Aquí prefiero echarme a un lado. Creo que Extreme Programming, aun no siendo una metodología puramente centrada en el desarrollo, sino que cubre otras áreas como la planificación o la comunicación entre los miembros del equipo, creo que tiene todas las buenas prácticas que deberíamos seguir durante esta fase.

[Las reglas del eXtreme Programming](http://www.extremeprogramming.org/rules.html)

## 4. Validación

![Life cycle: validation](/images/life-cycle-04.png)

A diferencia de lo que mucha gente piensa, el rol del QA no es el encargado de verificar que los nuevos desarrollos funcionen bien y de que no se ha roto nada de las funcionalidades pasadas (mucho menos el del Product Manager).

La validación de los desarrollos recae en el equipo de ingeniería, quien entendiendo bien la funcionalidad, es capaz de detectar casos esquina que han podido dejarse al descubierto durante el desarrollo.

Un equipo que depende de otros roles para validar las nuevas funcionalidades es un equipo que no ha entendido de todo el problema o que no sabe muy bien cómo se va a utilizar.
