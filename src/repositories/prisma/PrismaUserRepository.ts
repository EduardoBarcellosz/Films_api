import { Usuario, Prisma, PrismaClient } from "@prisma/client";
import { UserRepository } from "../UserRepository";

const prisma = new PrismaClient()

class PrismaUserRepository implements UserRepository {

    async findAll(): Promise<Usuario[]> {
        const usuarios = await prisma.usuario.findMany()
        return usuarios
    }

    async findByID(id: string): Promise<Usuario | null>  {
        const usuario = await prisma.usuario.findFirst({
            where:{
                id
            }
        })
        return usuario
    }

    async save(Usuario: Prisma.UsuarioCreateInput): Promise<void> {
       const usuario = await prisma.usuario.create({
            data: Usuario
       })



    }

    async deleteByID(id: string): void {
        throw new Error("Method not implemented.");
    }

    async updateByID(id: string, Usuario: Prisma.UsuarioUpdateInput): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }

}