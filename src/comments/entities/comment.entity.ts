import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int8" })
  property_id: number;

  @Column({ type: "varchar" })
  content: string;
}
