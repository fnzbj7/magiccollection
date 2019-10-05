import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
  Unique,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CardAmount } from '../../card/entity/card-amount.entity';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  salt: string;

  @Column({ nullable: true, length: 10 })
  dci: string;

  @Column({ nullable: true, default: false })
  activated: boolean;

  @OneToMany(type => CardAmount, cardAmount => cardAmount.user, {
    nullable: true,
  })
  cardAmount: CardAmount[];

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
