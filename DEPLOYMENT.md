# 🚀 Guía de Despliegue Automático - pastaStyle.com

Esta guía te ayudará a configurar el despliegue automático de **PASTA STYLE** a Hostinger usando GitHub Actions.

## 📋 Requisitos Previos

- [x] Cuenta de GitHub
- [x] Dominio pastaStyle.com en Hostinger
- [x] Acceso FTP/SFTP a Hostinger

---

## 🔧 Paso 1: Obtener Credenciales FTP de Hostinger

### Opción A: Crear cuenta FTP nueva (Recomendado)

1. Inicia sesión en tu panel de Hostinger (hpanel.hostinger.com)
2. Ve a **Archivos** → **Cuentas FTP**
3. Haz clic en **Crear cuenta FTP**
4. Configura:
   - **Usuario**: `pastastyle_deploy` (o el nombre que prefieras)
   - **Contraseña**: Genera una contraseña segura
   - **Directorio**: `/public_html` (o el directorio de tu dominio)
5. Guarda estas credenciales (las necesitarás después)

### Opción B: Usar cuenta FTP existente

1. Ve a **Archivos** → **Cuentas FTP**
2. Encuentra la cuenta FTP de tu dominio
3. Si no recuerdas la contraseña, cámbiala

### Información FTP necesaria:

Anota estos 3 datos:

```
FTP_SERVER: ftp.pastastyle.com (o el servidor que te proporcione Hostinger)
FTP_USERNAME: tu_usuario_ftp
FTP_PASSWORD: tu_contraseña_ftp
```

**Nota**: El servidor FTP generalmente es:
- `ftp.tudominio.com`
- O el que aparece en **Cuentas FTP** en Hostinger

---

## 📦 Paso 2: Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
2. Nómbralo como quieras, ejemplo: `pastastyle-website`
3. **NO** inicialices con README (ya tenemos el código)
4. Haz clic en **Create repository**

---

## 🔑 Paso 3: Configurar Secrets en GitHub

Los "secrets" son variables seguras donde guardaremos las credenciales FTP.

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, ve a **Secrets and variables** → **Actions**
4. Haz clic en **New repository secret**
5. Agrega estos 3 secrets:

### Secret 1: FTP_SERVER
- **Name**: `FTP_SERVER`
- **Secret**: `ftp.pastastyle.com` (tu servidor FTP)
- Clic en **Add secret**

### Secret 2: FTP_USERNAME
- **Name**: `FTP_USERNAME`
- **Secret**: tu usuario FTP (ejemplo: `pastastyle_deploy`)
- Clic en **Add secret**

### Secret 3: FTP_PASSWORD
- **Name**: `FTP_PASSWORD`
- **Secret**: tu contraseña FTP
- Clic en **Add secret**

---

## 📤 Paso 4: Subir el Código a GitHub

En tu terminal, ejecuta estos comandos:

```bash
# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit - Pasta Style website"

# Conectar con tu repositorio de GitHub
# (Reemplaza 'tu-usuario' y 'pastastyle-website' con tus datos)
git remote add origin https://github.com/tu-usuario/pastastyle-website.git

# Renombrar la rama a 'main' si es necesario
git branch -M main

# Subir el código
git push -u origin main
```

---

## ✅ Paso 5: Verificar el Despliegue

Una vez que hagas `git push`:

1. Ve a tu repositorio en GitHub
2. Haz clic en la pestaña **Actions**
3. Verás un workflow llamado **Deploy to Hostinger** ejecutándose
4. Espera a que termine (tarda 2-3 minutos)
5. Si todo está en verde ✅, tu sitio está desplegado!

Visita **https://pastastyle.com** para ver tu sitio en vivo.

---

## 🔄 Flujo de Trabajo Automático

De ahora en adelante, cada vez que hagas cambios:

```bash
# 1. Hacer cambios en tu código
# 2. Guardar cambios
git add .
git commit -m "Descripción de los cambios"
git push

# 3. GitHub Actions automáticamente:
#    - Instala dependencias
#    - Ejecuta npm run build
#    - Sube la carpeta /dist a Hostinger
#    - ✅ Tu sitio se actualiza automáticamente
```

---

## 🛠️ Configuración Avanzada

### Cambiar el directorio de destino

Si tu dominio usa un directorio diferente a `/public_html/`, edita el archivo:

**`.github/workflows/deploy.yml`** línea 38:
```yaml
server-dir: /tu-directorio-personalizado/
```

Directorios comunes en Hostinger:
- `/public_html/` - Dominio principal
- `/public_html/subdirectorio/` - Subdirectorio
- `/domains/pastastyle.com/public_html/` - En algunos planes

### Deploy solo en producción

Si quieres tener una rama de desarrollo que NO se despliegue automáticamente:

1. Trabaja en una rama `dev`: `git checkout -b dev`
2. Solo cuando hagas merge a `main` se desplegará
3. El workflow solo se activa en push a `main`

---

## 🐛 Troubleshooting

### Error: "Authentication failed"
- Verifica que los secrets estén bien configurados
- Asegúrate de que el usuario FTP tiene permisos en el directorio

### Error: "Server not found"
- Verifica el servidor FTP en Hostinger
- Prueba con la IP del servidor si el dominio no funciona

### Error: "Permission denied"
- Verifica que el usuario FTP tenga permisos de escritura
- En Hostinger, revisa los permisos de la cuenta FTP

### El sitio no se actualiza
- Verifica que el `server-dir` sea correcto
- Limpia la caché del navegador (Ctrl+Shift+R)
- Verifica que los archivos estén en el directorio correcto en Hostinger

---

## 📊 Estructura del Proyecto

```
pastaStyle/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
├── src/                      # Código fuente
├── dist/                     # Build de producción (generado)
├── public/                   # Assets estáticos
├── .gitignore               # Archivos ignorados por Git
├── DEPLOYMENT.md            # Esta guía
└── package.json             # Configuración del proyecto
```

---

## 🎯 Comandos Útiles

```bash
# Ver estado de Git
git status

# Ver historial de commits
git log --oneline

# Crear una nueva rama
git checkout -b nombre-rama

# Cambiar entre ramas
git checkout main

# Actualizar desde GitHub
git pull

# Build local para probar
npm run build
```

---

## 📞 Soporte

Si tienes problemas:

1. Revisa los logs en **GitHub Actions**
2. Verifica las credenciales en **Hostinger**
3. Comprueba que el directorio sea correcto
4. Revisa la documentación de Hostinger FTP

---

## ✨ ¡Listo!

Ahora tienes despliegue continuo configurado. Cada push a `main` actualizará automáticamente **pastaStyle.com**

**Happy coding! 🍝**
