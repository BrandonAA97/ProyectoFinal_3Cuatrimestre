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
  nombreUsuario: string;
    password: string;
    constructor(
      public nombre: string,
      public correo: string,
       password: string,
       nombreUsuario: string
    ){
      this.nombreUsuario = nombreUsuario;
      this.password = password;
    }
  }
export class LoginUsuario {
    constructor(
      public email: string,
      public nombreUsuario: string,
      public password: string
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