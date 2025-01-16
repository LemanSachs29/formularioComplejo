export default class Direccion {
    constructor(builder) {
      if (!(builder instanceof DireccionBuilder)) {
        throw new Error("Dirección solo puede ser creada por DireccionBuilder");
      }
  
      this.pais = builder.pais;
      this.provincia = builder.provincia;
      this.poblacion = builder.poblacion;
      this.direccion = builder.direccion;
      this.codigoPostal = builder.codigoPostal;
    }
  
    get details() {
      return {
        pais: this.pais,
        provincia: this.provincia,
        poblacion: this.poblacion,
        direccion: this.direccion,
        codigoPostal: this.codigoPostal
      }
    }
  }