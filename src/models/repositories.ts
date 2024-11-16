import { AppDataSource } from "@/db";
import { EntityTarget, ObjectLiteral } from "typeorm";
import { SocialAccount, User } from "./app";

const getRepo = (repo: EntityTarget<ObjectLiteral>) => AppDataSource.getRepository(repo)

export const usersRepository = getRepo(User)
export const socialAccountsRepository = getRepo(SocialAccount)