import { Filme,Prisma } from "@prisma/client";


interface UserRepository {
    findAll(): Promise<Filme[]>;
    findByID(id: string): Promise<Filme | null>;
    save(Filme:Prisma.FilmeCreateInput): void;
    deleteByID(id: string): void;
    updateByID(id: string, Filme:Prisma.FilmeUpdateInput): Promise<Filme | null>;
}