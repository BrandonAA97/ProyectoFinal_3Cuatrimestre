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

export class nuevoUsuario {
    constructor(
      public nombre: string,
      public apellido: string,
      public correo: string,
      public contrasenia: string,
    ){}
  }
export class Login {
    constructor(
      public correo: string,
      public contrasenia: string,
    ){}
}

export class jwtDto{
  constructor(
  public token: string,
  public type: string,
  public nombreUsuario:string,
  public authorities: string[],
  ){}
}