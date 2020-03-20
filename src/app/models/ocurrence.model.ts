import { Usuario } from './user.model';

export interface Ocurrence {
  id?: number;
  user: Usuario;
  title: string;
  description: string;
  date: Date;
  evidencias?: string[];
}