export class Videos {
    constructor(
      public id: number,
      public titulo: string,
      public subtitulo: string,
      public image: string,
      public url: string,
      public categoria: string
    ){}
  }

export class Cuenta {
    constructor(
      public nombre: string,
      public apellido: string,
      public correo: string,
      public contrasenia: string,
    ){}
  }
