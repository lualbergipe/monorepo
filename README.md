# Monorepo con aplicación React y libreria de componentes

Este proyecto es un **monorepo** que contiene dos componentes principales:

- **Main App**: Aplicación principal ubicada en `apps/main-app`.
- **PopupsProvider**: Librería de componentes para la gestión de popups, ubicada en `PopupsProvider/src/lib`.

## Estructura del proyecto

La estructura del proyecto sigue las convenciones de un monorepo organizado con Nx:


| **Ruta**                | **Descripción**                                                                 |
|--------------------------|--------------------------------------------------------------------------------|
| `apps/main-app/`         | Contiene la aplicación principal de React.                                     |
| `PopupsProvider/src/libs`| Contiene la librería de componentes de popups.                                 |
| `dist/`                  | Carpeta generada después de correr el comando de build.                        |
| `nx.json`                | Archivo de configuración para Nx, que gestiona los proyectos en el monorepo.   |
| `package.json`           | Archivo que maneja las dependencias y los scripts del proyecto.                |
| `.github/ci.yml`         | Configuración de GitHub Actions para integración continua.                     |


# Hooks personalizados

## usePopup - Hook para gestión de popups
Este hook personalizado es el núcleo de la gestión de popups en la aplicación. Permite agregar popups con características como título, descripción y posiciones por defecto, o personalizadas. Es utilizado tanto en la aplicación principal como en la librería de componentes PopupsProvider y encapsula todos los metodos de nuestro estado global facilitando asi el llamado, la gestión y el rendimiento de la aplicación.

## useResizeObserver - Hook para gestionar el tamaño de los popups
El hook useResizeObserver permite observar cambios en el tamaño de un elemento HTML y devuelve el ancho y la altura actuales del elemento observado. Es útil para ajustar el tamaño de los popups en tiempo real cuando la ventana del navegador cambia de tamaño o cuando el contenido del popup se modifica dinámicamente.

## Estado global con Zustand
El hook usePopupStore utiliza Zustand para gestionar el estado global de los popups en la aplicación. Gracias a Zustand, podemos manejar los popups a través de acciones como agregar, eliminar, mover y traer al frente (bring to front). Esto asegura que el estado de los popups sea consistente y accesible desde cualquier parte de la aplicación.

# Pipeline de CI/CD con GitHub Actions

## Scripts disponibles

En este proyecto, puedes utilizar los siguientes comandos desde la raíz del repositorio:

### `npm start`
Inicia el servidor de desarrollo para la **Main App**.

### `npm test`
Ejecuta las pruebas unitarias con **Jest**.

### `npm run build`
Compila la aplicación principal **Main App**.


## Implementación de CI/CD

### Test Components
Cada vez que se realiza un **commit** y **push** en la rama `dev` y afecta los archivos dentro de `PopupsProvider`, se ejecutan las pruebas unitarias de **Jest**, en primera instancia se ejecutan en la terminal cuando se hace el commit, esto gracias a **husky** y la configuracion de pre-commit, en segunda instancia cuando se hace el push se ejecutan nuevamente gracias a las actions de **git hub**

### Deploy Main App
Cada vez que se realiza un **push** a la rama `main`, si los archivos dentro de `apps/main-app` son afectados, se ejecuta el proceso de despliegue a **Vercel** utilizando las configuraciones establecidas en las actions de **git hub**

## Configuración del deploy en Vercel

Para realizar el despliegue en Vercel:

1. Necesitas configurar los secretos en GitHub Actions, incluyendo `VERCEL_TOKEN`, `VERCEL_PROJECT_ID`, y `VERCEL_ORG_ID`.
2. Configura el archivo `ci.yml` para que el despliegue solo se ejecute cuando los cambios afecten la aplicación principal en la rama `main`.

### Configuración de variables de entorno

Debes agregar las siguientes variables de entorno en tu repositorio o en las configuraciones de CI:

- `VERCEL_TOKEN`: Token de acceso para desplegar en Vercel.
- `VERCEL_PROJECT_ID`: ID del proyecto en Vercel.
- `VERCEL_ORG_ID`: ID de la organización en Vercel.

## Requisitos previos

- **Node.js** versión 16 o superior.
- **Nx** como herramienta de monorepo.
- **Vercel CLI** para despliegue a producción.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/lualbergipe/monorepo
