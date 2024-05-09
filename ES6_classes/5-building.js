export default class Building {
  constructor(sqft) {
    // Verifica si la clase actual es Building o una subclase de Building
    if (this.constructor !== Building) {
      // Si es una subclase, verifica si la subclase ha implementado el método evacuationWarningMessage
      if (!this.evacuationWarningMessage) {
        // Si la subclase no ha implementado el método, lanza un error
        throw Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    // Inicializa el atributo _sqft con el valor proporcionado
    this._sqft = sqft;
  }

  // Getter para obtener el valor de _sqft
  get sqft() {
    return this._sqft;
  }
}
