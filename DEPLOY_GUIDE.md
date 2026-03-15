# 🚀 Guía Rápida de Deploy - pastaStyle.com

## Flujo de Deploy Automático

**IMPORTANTE**: NO necesitas ejecutar `npm run build` manualmente. GitHub Actions lo hace por ti.

---

## ✅ Pasos para Deploy

### 1. Hacer cambios en tu código
Edita archivos, agrega features, cambia estilos, etc.

### 2. Probar localmente (opcional)
```bash
npm run dev
# Abre http://localhost:5173
# Verifica que todo funcione
```

### 3. Hacer commit y push
```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

### 4. Esperar 3-5 minutos
GitHub Actions automáticamente:
- ✅ Ejecuta `npm ci` (instala dependencias)
- ✅ Ejecuta `npm run build` (construye el proyecto)
- ✅ Sube `/dist` a Hostinger vía FTP
- ✅ Actualiza https://pastastyle.com

### 5. Verificar
- Monitorea el progreso: https://github.com/AndresRiveroLedo/pastaStyle/actions
- Cuando veas ✅ verde, abre: https://pastastyle.com

---

## 🔄 Ejemplo Completo

```bash
# Escenario: Cambiar el texto del Hero

# 1. Editar archivo
# src/components/Hero.jsx

# 2. Guardar cambios

# 3. Deploy
git add .
git commit -m "Actualizar texto del hero"
git push

# 4. Esperar 3-5 minutos

# 5. Verificar en pastastyle.com
# ¡Listo! ✅
```

---

## ❌ Errores Comunes

### Error 1: Hacer build manual
```bash
# ❌ MAL:
npm run build
git add .
git push

# ✅ BIEN:
git add .
git push
# (GitHub Actions hace el build)
```

### Error 2: No hacer commit antes de push
```bash
# ❌ MAL:
git add .
git push  # Falta el commit

# ✅ BIEN:
git add .
git commit -m "Mensaje"
git push
```

---

## 📊 Monitoreo del Deploy

Después de `git push`, ve a:
https://github.com/AndresRiveroLedo/pastaStyle/actions

Estados:
- 🟡 **En progreso** - Espera 3-5 minutos
- ✅ **Exitoso** - Tu sitio está actualizado
- ❌ **Error** - Revisa los logs y corrige

---

## 💡 Comandos Útiles

```bash
# Ver estado de Git
git status

# Ver cambios no guardados
git diff

# Ver historial de commits
git log --oneline

# Deshacer cambios locales (antes de commit)
git checkout -- archivo.jsx

# Ver ramas
git branch
```

---

## 🎯 Flujo Diario de Trabajo

```bash
# MAÑANA
npm run dev              # Iniciar servidor local
# Trabajas, haces cambios, pruebas en localhost:5173

# TARDE
git add .
git commit -m "Nuevas features del día"
git push                 # Deploy automático

# 3-5 minutos después
# ✅ pastastyle.com está actualizado
```

---

## 🚨 Si Algo Sale Mal

### Deploy falló (❌ rojo en GitHub Actions)
1. Ve a: https://github.com/AndresRiveroLedo/pastaStyle/actions
2. Haz clic en el workflow que falló
3. Revisa el error en los logs
4. Corrige el problema en tu código
5. Vuelve a hacer `git push`

### Sitio no se actualiza
1. Verifica que el workflow terminó con ✅ verde
2. Limpia la caché del navegador (Ctrl+Shift+R)
3. Espera 1-2 minutos más (puede haber delay)
4. Verifica en Hostinger que los archivos se subieron

---

## 📞 Checklist Pre-Deploy

Antes de hacer `git push`, verifica:

- [ ] ¿Probaste los cambios en `localhost:5173`?
- [ ] ¿Los cambios funcionan correctamente?
- [ ] ¿El mensaje de commit es descriptivo?
- [ ] ¿No hay errores en la consola del navegador?

---

## 🎉 ¡Eso es Todo!

El flujo es simple:
1. Edita código
2. `git add . && git commit -m "mensaje" && git push`
3. Espera 3-5 minutos
4. ✅ Sitio actualizado

**GitHub Actions hace todo el trabajo pesado por ti.**

Happy coding! 🍝
