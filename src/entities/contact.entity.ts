import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @CreateDateColumn()
  createdAt: Date;
}

export default Contact;
