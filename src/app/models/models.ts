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
    constructor(
      public nombre: string,
      public email: string,
       password: string,
       username: string
    ){
      this.username = username;
      this.password = password;
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