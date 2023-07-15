# Backend Coding Challenge

This is a Backend Code Challenge for DocRed candidates.

## Tabla de contenidos

<details open="open">
  <summary>Menú</summary>
  <ol>
    <li>
        <a href="#sobre-el-proyecto">🗂️ Sobre el proyecto</a>
      <ul>
        <li><a href="#contexto">🔍 Contexto</a></li>
        <li><a href="#requerimientos-del-producto">📋 Requerimientos del producto</a></li>
      </ul>
    </li>
    <li><a href="#construido-con">🛠️ Construido con</a></li>
    <li>
      <a href="#comenzando">🚀 Comenzando</a>
      <ul>
        <li><a href="#pre-requisitos">📋 Pre-requisitos</a></li>
        <li><a href="#instalación">🔧 Instalación</a></li>
        <li><a href="#variables-de-entorno">📌 Variables de entorno</a></li>
        <li><a href="#configuracion-de-variables-de-entorno">🛠️ Configuracion de variables de entorno</a></li>
      </ul>
    </li>
    <li><a href="#despliegue">📦 Despliegue y Testing</a></li>
    <li><a href="#documentación">📄 Documentación</a></li>
  </ol>
</details>

## Sobre el proyecto

### Contexto

El soporte de nuestros usuarios es muy importante en DocRed. Nuestros agentes quieren ser mas eficientes en la
resolución de los problemas o consultas que nuestros usuarios puedan tener. Para eso, se decidio construir un software
para automatizar el proceso - el software que tu vas a construir.

### Requerimientos del producto

- Los usuarios de Docred pueden reportar un problema.
- Los problemas nuevos deben asignarse automáticamente, a un agente que esté libre.
- Cada agente debe trabajar en un problema a la vez.
- El agente puede marcar un problema como resuelto, de esta manera, el agente queda libre para tomar un nuevo problema.
- El sistema asignará automáticamente, un nuevo problema a un agente, cuando este se libere.

## Construido con

* [NestJs](https://nestjs.com/)
* [MongoDB](https://www.mongodb.com/es)

## Comenzando

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos
de desarrollo y pruebas.

### Prerrequisitos

* [NodeJS v16.19.1](https://nodejs.org/en/)

### Instalación

Clonar el repositorio.

```sh
git clone https://github.com/kaeky/backend-assigment
```

Instalar paquetes de yarn.

```sh
yarn install
```

### Variables de entorno

Para el correcto funcionamiento de la aplicación se deben definir las siguientes variables de entorno:

| Variable          | Valores por defecto | Descripción                               |
|-------------------|---------------------|-------------------------------------------|
| PORT              | 3000                | Puerto de la app                          | 
| DATABASE_USER     | docRed              | URI de la base de datos                   |           
| DATABASE_PASSWORD | ifUZE3zDSGU2sEZR    | Sincronizar entidades en la base de datos |

### configuracion de variables de entorno

En la raíz del proyecto se encuentra el archivo **.env.example** el cual se debe duplicar o copiar en un archivo nuevo
que se debe llamar **.env**

En windows:

```sh
$ copy .env.example .env
```

En linux:

```sh
$ cp .env.example .env
```

## Despliegue y testing

### Despliegue

Ejecutar `yarn run start` en la terminal para iniciar la aplicación.

### Testing

Ejecutar `yarn run test` en la terminal para ejecutar las pruebas unitarias.

## Documentación

La aplicación se encuentra documentada con [Swagger](https://swagger.io/).
Para acceder a la documentación se debe ingresar a la url **http://localhost:PORT/documentation**

> 🚧 Nota
>
> Reemplazar "**PORT**" por el valor de la variable de entorno **PORT**

importar la
colección en postman: [![Run in Postman](https://run.pstmn.io/button.svg)](https://api.postman.com/collections/6645999-4c5e9cf5-b877-422a-a507-ab446b9a4cf0?access_key=PMAT-01H5DPTK7DCSZP14Y4N9QJ6W9X)
