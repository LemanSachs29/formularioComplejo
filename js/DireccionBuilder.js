import Direccion from './Direccion.js';
export default  class DireccionBuilder {
    constructor() {
      this.reset();
    }
  
    reset() {
      this.pais = "";
      this.provincia = "";
      this.poblacion = "";
      this.direccion = "";
      this.codigoPostal = 0;
    }
  
    setPais(pais) {
      this.pais = pais;
      return this;
    }
  
    setProvincia(provincia) {
      this.provincia = provincia;
      return this;
    }
  
    setPoblacion(poblacion) {
      this.poblacion = poblacion;
      return this;
    }
  
    setDireccion(direccion) {
      this.direccion = direccion;
      return this;
    }
  
    setCodigoPostal(codigoPostal) {
      this.codigoPostal = codigoPostal;
      return this;
    }
  
    build() {
      const DIRECCION = new Direccion(this);
      this.reset();
      return DIRECCION;
    }
  }