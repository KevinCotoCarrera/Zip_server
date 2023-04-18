import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'file' })
export class FileE {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column('varchar', { length: 32, nullable: true })
  title: string;

  @Column({ type: 'bytea' })
  data: Buffer;

  @CreateDateColumn({ name: 'createdate' })
  created_date: Date;

  @UpdateDateColumn({ name: 'updateddate' })
  updated_date: Date;
}
