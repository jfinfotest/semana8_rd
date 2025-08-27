interface MensajeBienvenidaProps {
    usuario:{
        nombre:string
    }
}

export default function MensajeBienvenida({ usuario }: MensajeBienvenidaProps) {
  return (
    <div>
      {usuario ? (
        <h1>¡Bienvenido, {usuario.nombre}!</h1>
      ) : (
        <h1>Por favor, inicia sesión</h1>
      )}
    </div>
  );
}