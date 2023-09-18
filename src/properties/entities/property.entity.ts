import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Properties {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  sold_date: Date;

  @Column({ type: "varchar" })
  property_type: string;

  @Column({ type: "varchar" })
  address: string;

  @Column({ type: "varchar" })
  city: string;

  @Column({ type: "varchar" })
  state: string;

  @Column({ type: "varchar" })
  price: string;

  @Column({ type: "bigint" })
  beds: number;

  @Column({ type: "bigint" })
  baths: number;

  @Column({ type: "bigint", nullable: true })
  square_feet: number;

  @Column({ type: "bigint" })
  lot_size: number;

  @Column({ type: "bigint" })
  year_built: number;

  @Column({ type: "varchar" })
  zip: string;

  @Column({ type: "bigint" })
  days_on_market: number;

  @Column({ type: "bigint" })
  monthly_hoa: number;

  @Column({ type: "bigint" })
  mls_number: number;

  @Column({ type: "varchar" })
  identifier: string;

  @Column({ type: "float8" })
  latitude: number;

  @Column({ type: "float8" })
  longitude: number;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "int", default: 0 })
  upvote: number;

  @Column({ type: "int", default: 0 })
  downvote: number;
}
