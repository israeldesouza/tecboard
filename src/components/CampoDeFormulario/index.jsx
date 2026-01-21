import "./campo-form.styles.css";

export function CampoDeFormulario({ children }) {
  return <fieldset className="campo-form">{children}</fieldset>;
}
