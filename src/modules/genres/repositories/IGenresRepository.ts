import { Genres } from "../entities/Genres";

export interface IGenresRepository {
  listAll(): Promise<Genres[]>
}