import { Usuario,Prisma } from "@prisma/client";


export interface UserRepository {
    findAll(): Promise<Usuario[]>;
    findByID(id: String): Promise<Usuario | null>;
    save(Usuario:Prisma.UsuarioCreateInput): void;
    deleteByID(id: String): void;
    updateByID(id: String, Usuario:Prisma.UsuarioUpdateInput): Promise<Usuario | null>;
}