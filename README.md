# NodeJsExam
### Requerimientos
``` [language]
-Node V16 o mayor
-MongoDB server
-Postman o Insomnia
```

### Instalación
Descargar el repositorio
``` [language]
git clone https://github.com/MOZA0507/NodeJsExam.git
```
Verificar tener node y npm instalados con comandos:
``` [language]
node -v
npm -v
```
en caso de no tenerlos descargarlos

Descargar las dependencias necesarias
``` [language]
npm install cors
npm install express
npm install jsonwebtoken
npm install mongoose
```
Una vez instalado ya solo es necesario ejecutar el proyecto agregando el string de la base de datos

a la variable de enterno siguiente

``` [language]
DB_STRING=[Tu string de mongodb] node api
```
