import { Column, Entity, OneToMany } from "typeorm";
import { Base } from "../Base";
import { SocialAccount } from "./SocialAccount";

export enum GenderTypes {
    MALE = 'M',
    FEMALE = 'F',
    NOT_ASIGNED = 'NOT',
}

@Entity()
export class User extends Base {

    //#region Not null
    @Column({nullable: false})
    name!: string

    @Column({nullable: false})
    email!: string

    @Column({nullable: false, default: false})
    emailVerified!: boolean

    @Column({nullable: false, default: true})
    enabled!: boolean

    //#region Null
    @Column({ nullable: true})
    profileImg?: string

    @Column({nullable: true})
    phone?: string

    @Column({ nullable: true })
    birth?: Date

    @Column({ nullable: true, default: GenderTypes.NOT_ASIGNED })
    gender?: GenderTypes

    //#region Relations
    @OneToMany(() => SocialAccount, social_account => social_account.user, {
        onDelete: 'CASCADE',
        nullable: true
    })
    socialAccounts?: SocialAccount

}