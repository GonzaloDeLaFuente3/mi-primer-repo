// repositories/IRepository.mjs
class IRepository {
    crear() {
        throw new Error("Método 'crear()' no implementado");
    }
    
    obtenerTodos() {
      throw new Error("Método 'obtenerTodos()' no implementado");
    }

    obtenerPorId() {
      throw new Error("Método 'obtenerPorId()' no implementado");
    }

    actualizar() {
      throw new Error("Método 'actualizar()' no implementado");
    }
    
}
export default IRepository;