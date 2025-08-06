# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
npm run dev          # Start dev server at localhost:4321

# Build and deployment
npm run build        # Build production site to ./dist/
npm run preview      # Preview build locally

# Astro CLI
npm run astro        # Access Astro CLI commands
```

## Architecture Overview

This is a multilingual portfolio website built with Astro, featuring internationalization (i18n) support for Spanish (default) and English.

### Key Architecture Patterns

**Internationalization System:**
- Default language: Spanish (`es`) 
- Supported languages: Spanish (`es`) and English (`en`)
- Language routing: `/[lang]/` dynamic routes (e.g., `/en/`, `/es/`)
- Default language shows at root path when `showDefaultLang = false`
- Translation utilities in `src/i18n/utils.ts` with `getLangFromUrl()` and `useTranslations()`
- All UI strings centralized in `src/i18n/ui.ts`

**Component Structure:**
- Main layout components: `Hero`, `Cards`, `Aboutme`, `Whyme`, `Skills`, `Services`, `Projects`, `Slider`, `Contact`
- Icon system: Custom Astro components in `src/icons/` for technologies and brands
- Asset icons: Additional icon components in `src/assets/`
- Language selector: `SelectLang` component for switching between languages

**Routing Architecture:**
- Dynamic language routing with `[lang]` folder structure
- Root `index.astro` redirects to default language
- Language-specific pages in `src/pages/[lang]/`
- Translation path utilities handle language switching

**Tech Stack:**
- Astro framework with SSG
- Tailwind CSS with DaisyUI components
- AOS (Animate On Scroll) library
- PhotoSwipe for image galleries
- Poppins font from Fontsource
- Vercel deployment integration

### Working with Translations

When adding new UI text:
1. Add translation keys to both languages in `src/i18n/ui.ts`
2. Use `useTranslations(lang)` in components to access translations
3. Import `getLangFromUrl(Astro.url)` to get current language context

### Component Development

- Components are in `src/components/` as `.astro` files
- Icons are separate components in `src/icons/` and `src/assets/`
- Follow existing component patterns for consistency
- Use Tailwind CSS classes with DaisyUI component utilities