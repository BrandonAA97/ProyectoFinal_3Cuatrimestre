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
    username: string;
    password: string;
    nombre: string;
    email: string;
    constructor(
       nombre: string,
       username: string,
       password: string,
       email: string
    ){
      this.username = username;
      this.password = password;
      this.email = email;
      this.nombre = nombre;
    }
  }
export class LoginUsuario {
    constructor(
      //public email: string,
      public username: string,
      public password: string
    ){}
}

export class jwtDto{
  constructor(
  public token: string,
  public type: string,
  public username:string,
  public authorities: string[],
  ){}
}
