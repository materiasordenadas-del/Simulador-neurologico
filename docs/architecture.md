# Arquitectura

## Regla principal

El dominio clínico no importa React, Babylon.js, archivos GLB, APIs ni modelos de lenguaje.

## Capas

### `src/domain`

Define la verdad y el vocabulario del sistema:

- casos clínicos;
- personalidad;
- conversación;
- maniobras y hallazgos;
- estado, comandos y eventos;
- comandos semánticos para el avatar.

### `src/application`

Coordina una partida. Recibe comandos, consulta el caso y genera eventos.

### `src/adapters`

Traduce tecnologías concretas al lenguaje del dominio. La primera versión incluye un adaptador lingüístico determinístico. El adaptador 3D se añadirá después.

### `src/presentation`

Interfaz React. No contiene decisiones clínicas.

## Flujo

```text
Student input
    ↓
LanguageAdapter
    ↓
SimulationCommand
    ↓
SimulationEngine
    ↓
ClinicalCaseDefinition
    ↓
SimulationEvent + AvatarCommand
    ↓
React / futuro adaptador Babylon.js
```

## Invariantes

1. La personalidad nunca modifica la verdad clínica.
2. El avatar nunca decide hallazgos.
3. El adaptador lingüístico nunca inventa datos.
4. Un caso debe poder probarse sin interfaz ni modelo 3D.
5. Los comandos del avatar son semánticos; la asignación a huesos o morph targets pertenece al adaptador gráfico.
