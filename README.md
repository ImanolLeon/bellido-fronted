# BellidoMap Frontend

Frontend del Colegio María Parado de Bellido construido con React 19, TypeScript, Vite y Tailwind CSS 4.

## Tecnologías

- [Vite](https://vitejs.dev/) 8
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 5
- [Tailwind CSS](https://tailwindcss.com/) 4
- [React Compiler](https://react.dev/learn/react-compiler) habilitado

## Requisitos

- Node.js 22+ o Bun
- pnpm (se incluye `pnpm-lock.yaml`)

## Configuración

1. Clonar el repositorio
2. Instalar dependencias:

```bash
pnpm install
```

3. Ejecutar en desarrollo:

```bash
pnpm dev
```

4. Construir para producción:

```bash
pnpm build
```

5. Vista previa de build:

```bash
pnpm preview
```

## Estructura

```text
src/
├── App.tsx
├── assets/
├── components/
│   ├── layout/   # Header, Footer, Logo, Sidebar
│   ├── sections/ # Secciones de la landing
│   └── ui/        # Componentes reutilizables
├── data/         # Datos estáticos
├── index.css     # Estilos globales y tokens
├── main.tsx
└── pages/        # Login, Dashboard
```

## Rutas

- `/` - Landing page
- `/login` - Portal del estudiante
- `/dashboard` - Panel administrativo (sidebar estático)

## Diseño

Se utiliza una paleta editorial inspirada en papel, tinta y lacre con tipografías `Gloock`, `Hanken Grotesk` y `Mrs Saint Delafield`.
