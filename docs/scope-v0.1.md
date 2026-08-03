# Alcance bloqueado — V0.1

## Objetivo

Demostrar una cadena completa y verificable:

`entrada del estudiante → intención → verdad clínica → respuesta/hallazgo → comando semántico de avatar`.

## Incluido

- Un caso: parálisis facial periférica de Bell derecha.
- Gravedad inicial: House–Brackmann IV.
- Una personalidad: tranquila, cooperadora y confiada.
- Un paciente adulto.
- Entrada escrita.
- Interpretación determinística mediante patrones controlados.
- Respuestas predefinidas.
- Maniobras motoras faciales.
- Estado de simulación en memoria del navegador.
- Contrato de avatar independiente del rig 3D.

## Excluido

- LLM.
- Reconocimiento de voz.
- Texto a voz.
- Acompañante.
- Enfermero.
- Tratamiento.
- Evolución temporal clínica.
- MetaHuman final.
- Base de datos y cuentas de usuario.
- Diagnóstico aleatorio.

## Criterio de éxito

Al indicar «cierre los ojos con fuerza», el sistema debe:

1. identificar `EXAM_FORCEFUL_EYE_CLOSURE`;
2. consultar el caso;
3. devolver cierre izquierdo conservado y cierre derecho incompleto;
4. registrar la maniobra;
5. emitir un `AvatarCommand` semántico sin conocer morph targets concretos.
