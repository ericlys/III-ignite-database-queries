import { getRepository, Repository } from "typeorm";
import { Genres } from "../../entities/Genres";
import { IGenresRepository } from "../IGenresRepository";

export class GenresRepository implements IGenresRepository {
  private repository: Repository<Genres>

  constructor() {
    this.repository = getRepository(Genres)
  }

  listAll(): Promise<Genres[]> {
    return this.repository.find()
  }
  
}