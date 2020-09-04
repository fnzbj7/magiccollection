import { EntityRepository, Repository } from 'typeorm';
import { Privilege } from '../entity/privilege.entity';

@EntityRepository(Privilege)
export class PrivilegeRepository extends Repository<Privilege> {}
