import { randomUUID } from "crypto";

export class Instructor {
  public id: string;
  public name: string;

  constructor(id: string, name: string) {
    this.id = id?? randomUUID();
    this.name = name
  }
}

