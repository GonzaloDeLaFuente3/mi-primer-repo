// repositories/IRepository.mjs
class IRepository {
    crear() {
        throw new Error("Método 'crear()' no implementado");
    }
    
    obtenerTodos() {
      throw new Error("Método 'obtenerTodos()' no implementado");
    }
    
}
export default IRepository;