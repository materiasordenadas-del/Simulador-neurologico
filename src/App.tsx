import { bellPalsyRightCase } from "./domain/cases/bellPalsyRight.case";
import { calmCooperativePersonality } from "./domain/personalities/calmCooperative.personality";

export function App() {
  return (
    <main className="shell">
      <section className="panel">
        <p className="eyebrow">FASE 0 · ESTRUCTURA</p>
        <h1>Simulador neurológico</h1>
        <p>
          Primera vertical: examen facial de un paciente con parálisis de Bell
          derecha.
        </p>

        <dl className="facts">
          <div>
            <dt>Caso</dt>
            <dd>{bellPalsyRightCase.displayName}</dd>
          </div>
          <div>
            <dt>Gravedad</dt>
            <dd>
              {bellPalsyRightCase.severity.scale} {bellPalsyRightCase.severity.grade}
            </dd>
          </div>
          <div>
            <dt>Personalidad</dt>
            <dd>{calmCooperativePersonality.displayName}</dd>
          </div>
        </dl>

        <p className="status">
          El dominio clínico está desacoplado del futuro personaje 3D.
        </p>
      </section>
    </main>
  );
}
