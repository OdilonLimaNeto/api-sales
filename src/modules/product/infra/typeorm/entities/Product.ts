import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('product')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  title: string;

  @Column({ type: 'float' })
  price: number;

  @Column()
  quantity: number;

  @Column({ type: 'timestamp' })
  created_at: Date;

  @Column({ type: 'timestamp' })
  updated_at: Date;
}

export { Product };
