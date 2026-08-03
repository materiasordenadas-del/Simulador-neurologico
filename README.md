# Simulador neurológico

Simulador web interactivo para la enseñanza y evaluación del examen neurológico mediante pacientes virtuales tridimensionales.

## Fase actual

**Fase 0: arquitectura y contratos fundamentales.**

La primera vertical funcional está limitada a:

- un paciente adulto;
- una personalidad tranquila y cooperadora;
- un caso de parálisis facial periférica de Bell derecha;
- interacción escrita y determinística;
- examen motor facial estructurado;
- ejecución local en navegador;
- integración 3D posterior mediante un adaptador independiente.

## Principio arquitectónico

La lógica clínica no depende del motor gráfico. El caso, la conversación, el examen y el estado de la simulación se implementan como dominio TypeScript puro. Babylon.js, MetaHuman, voz o futuros modelos de lenguaje se conectarán mediante adaptadores reemplazables.

## Desarrollo local

```bash
npm install
npm run dev
```

Comprobaciones:

```bash
npm run typecheck
npm test
npm run build
```

Consulta `docs/architecture.md` y `docs/scope-v0.1.md` antes de ampliar el alcance.
