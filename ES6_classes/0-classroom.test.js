// Importa la clase que quieres probar
import ClassRoom from "./0-classroom.js";

// Describe un conjunto de pruebas para la clase ClassRoom
describe("ClassRoom", () => {
  // Prueba el constructor de la clase
  it("should create a ClassRoom instance with the correct maxStudentsSize", () => {
    // Crea una nueva instancia de ClassRoom con un tamaño máximo de estudiantes de 10
    const room = new ClassRoom(10);
    
    // Comprueba si el tamaño máximo de estudiantes es el esperado
    expect(room._maxStudentsSize).toBe(10);
  });
});
