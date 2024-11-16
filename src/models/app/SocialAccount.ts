import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "../Base";
import { User } from "./User";

export enum SocialProviders {
    GOOGLE = 'GOOGLE',
    TWITTER = 'TWITTER'
}

@Entity()
export class SocialAccount extends Base {

    @Column({ nullable: false, enum: SocialProviders, type: 'enum' })
    provider!: SocialProviders

    @Column({ nullable: false })
    accountId!: string

    @ManyToOne(() => User, user => user.socialAccounts, {
        onDelete: 'CASCADE',
        nullable: false
    })
    user!: User

}