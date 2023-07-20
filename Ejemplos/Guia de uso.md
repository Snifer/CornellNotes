---
cssclass: banner
---

![[banner-cornell-1.png|banner]]
##  Notas Cornell en Obsidian
### Video 

Se publico el siguiente video en el canal de YouTube puedes ver el detalle y explicación adicionalmente a lo que se brinda a continuación. 


## Uso de las notas Cornell

### Creación de la nota Cornell 

Después de adicionar las  [[Guia de uso#Clases de CSS|clases de CSS]] correspondientes para la nota Cornell se debe de seguir el siguiente formato

```
---
cssclass: cornell,cornell-clean
---

# TITULO
###### Titulo que atraiga a la persona? :D 
~~Información sobre el autor~~

- IDEA
- # TITULO
- CONTENIDO 
```

Resultado  que se obtiene al utilizar  el formato la parte  inicial del titulo es para cuando se exporte en formato PDF. 
![[Pasted image 20230717013005.png]]

Una nota mas elaborada puedes verla en [[Cornell Notes]]

```
- 📌 Origen Universidad Cornell<br>
📌 Creado por <br>Walter Pauk en 1940

- # Método Cornell
- Las notas Cornell fueron desarrolladas por Walter Pauk en la década de 1940 en la Universidad de Cornell por ello el nombre del método. [^Info] <br>![[walterPauk.png|portrait]]<figcaption>Fig. 1: Walter Pauk.</figcaption><br>
El método se basa en dividir el papel en tres secciones: <br>- Ideas clave<br>- Notas de la clase<br>- Resumen<br>
```


![[cornellExample.png|500]]

```
- 📌 Origen Universidad Cornell<br>
📌 Creado por <br>Walter Pauk en 1940

- # Método Cornell
- Las notas Cornell fueron desarrolladas por Walter Pauk en la década de 1940 en la Universidad de Cornell por ello el nombre del método. [^Info] <br>![[walterPauk.png|portrait]]<figcaption>Fig. 1: Walter Pauk.</figcaption><br>
El método se basa en dividir el papel en tres secciones: <br>- Ideas clave<br>- Notas de la clase<br>- Resumen<br>
```

#### Sumario o Resumen 
Para resolver la parte del resumen o sumario para las notas Cornell se hace uso de los footnotes pies de pagina manejando el uso normal que se tiene en Markdown, con la diferencia que puedes implementarlo en cualquier punto de la nota siendo este en la idea o apuntes que tomes. 

```
**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,[^1] when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.[^Lorem]
.
.
.
.
.

[^1]: Desarrollo 
[^Lorem]: Aldus PageMaker including versions of Lorem Ipsum.
```

El resultado final despues de utilizar el pie de pagina es

> [!note]+ Pie de página
> El titulo al crear el pie de pagina se adiciona de manera automatica cuando estas utilizando la clase de css `cornell`. 
> 
> Si deseas cambiar el nombre de Resumen debes de modificar el fichero `cornell.css` y modificar el texto **Resumen**.
> 
> ```CSS
>   content: "Resumen"; 
> ```


![[footnote_resumen.png]]
### Soporte Markdown 

Todo lo que tenemos disponible en Markdown como también funciones propias de Obsidian actualmente se soportan. 

- Transclusión de notas e imágenes. 
- Tablas.
- Callouts.
- Negrita, Cursiva. 

Lo que no esta funcionando correctamente son los `bullets` o conocidos también como `listas`  ya que para que funcione toca hacer uso de los saltos de linea cojuntamente con lineas -.
#### Saltos de Linea 
Para realizar un salto de linea bajo el escenario actual solo es viable utilizando `<br>`. 

> [!NOTE]+ SALTO DE LINEA
> Buscare la manera de hacerlo de manera regular.

### Manejo de imágenes

Espero dar un mayor soporte al tratamiento de las imágenes en las notas Cornell, por ello y por ahora se tiene funcional tres estados los cuales son: 

- portrait
- round
- avatar

Tienes los ejemplo a continuación. 
#### Portrait

```
![[DINO_IMG.png|portrait]]
```

![[DINO_IMG.png|portrait]]

#### Round 

```
![[DINO_IMG.png|portrait]]
```

![[DINO_IMG.png|round]]

#### Avatar

```
![[DINO_IMG.png|avatar]]
```

![[DINO_IMG.png|avatar]]
### Banner

> [!important] Esta en desarrollo aun hacerlo funcional contar con un banner solo con CSS pero el mismo no llega a generarse correctamente en PDF 


### Clases de CSS
Para crear o  convertir una nota a Cornell se hace uso de una clase de css con  `cssclass` actualmente se utiliza dos los cuales son `cornell` y `cornell-clean`.

```css
---
cssclass: cornell, cornell-clean
---
```

- **cornell:** Brinda todo el formato
- **cornell-clean:** Limpia las lineas y titulo de una nota al realizar una transclusión. 

##### Cornell Clean 

Al realizar una transclusión regularmente se muestra el titulo como también una linea vertical con el fin de evitar que se vea esto en el resultado y este limpio  se muestra  a continuación la previsualización de la nota. 

![[Cornell_title_transclusion.png|500]]

El resultado final al utilizar la clase de css `cornell-clean` corresponde.
![[Pasted image 20230717004358.png|400]]



### Templates 
Con el fin de agilizar el proceso de la creación de una nota Cornell se tiene algunos templates definidos los cuales son. 

1. **Cornell.tpl**
	- Brinda el formato  base para una nueva nota cornell. 
2. **Cornell Punto.tpl**
	- Para adicionar un nuevo apartado dentro de la nota de cornell. 
3. **Figure.tpl**
	- Para adicionar la descripción de la imagen que se adicione. 
#### Cornell 

```
---
cssclass: cornell,cornell-clean
---

- IDEA
- TITULO
- CONTENIDO 
```

#### Cornell Punto

```
- IDEA
- TITULO
- CONTENIDO 
```
#### Adicionar una imagen - Figure.tpl
```
<figcaption>Fig. x: Descripción aqui .</figcaption>
```


