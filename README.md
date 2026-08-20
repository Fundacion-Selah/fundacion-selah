# Fundación Selah

Sitio web de la Fundación Selah, una organización sin ánimo de lucro dedicada a apoyar comunidades vulnerables en Medellín, Colombia, a través de proyectos de alimentación, formación creativa, desarrollo espiritual y fomento de la lectura.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router, Turbopack)
- **UI:** [React](https://react.dev/) 19
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) 3
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) 5
- **Optimización de imágenes:** [Sharp](https://sharp.pixelplumbing.com/)
- **Linting:** [ESLint](https://eslint.org/) 10

## Requisitos previos

- Node.js LTS (ver `.nvmrc`)
- npm

## Instalación

```bash
# Clonar el repositorio
git clone git@github.com:Fundacion-Selah/fundacion-selah.git
cd fundacion-selah

# Usar la versión de Node correcta
nvm use

# Instalar dependencias
npm install
```

## Scripts disponibles

| Comando         | Descripción                              |
|-----------------|------------------------------------------|
| `npm run dev`   | Inicia el servidor de desarrollo (Turbopack) |
| `npm run build` | Genera el build de producción            |
| `npm run start` | Inicia el servidor de producción         |
| `npm run lint`  | Ejecuta ESLint                           |

## Estructura del proyecto

```
app/
├── fonts/              # Configuración de fuentes
├── reportes-dian/      # Página de reportes DIAN
├── globals.css         # Estilos globales
├── layout.tsx          # Layout principal
└── page.tsx            # Página de inicio

components/
├── atoms/              # Componentes base (Button, ListItemDian)
├── molecules/          # Componentes compuestos (Hero, Navbar, Modal, ProjectItem, etc.)
└── organisms/          # Componentes de estructura (Header, Footer)

public/
├── hero/               # Imágenes del banner principal
├── icons/              # Íconos SVG
└── ...                 # Otros recursos estáticos
```

El proyecto sigue la metodología de diseño atómico (Atomic Design) para organizar los componentes.

## Despliegue

El sitio se despliega en [Vercel](https://vercel.com). Cada push a `main` ejecuta un despliegue automático.

Para desplegar manualmente:

```bash
npm run build
npm run start
```

## Contribuir

1. Crea una rama desde `main`:
   ```bash
   git checkout -b feature/mi-feature
   ```
2. Realiza tus cambios y verifica que el build pase:
   ```bash
   npm run build
   npm run lint
   ```
3. Haz commit y push de tu rama.
4. Abre un Pull Request describiendo los cambios.

## Licencia

Proyecto privado de la Fundación Selah. Todos los derechos reservados.
