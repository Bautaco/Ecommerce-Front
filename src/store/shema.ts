import { string, email, optional, object, maxLength, nullable } from "valibot";
import type { Output } from "valibot";

export const userSchema = object({
  nombre: string("Este campo es requerido"),
  apellido: string("Este campo es requerido"),
  email: nullable(string([email("Ingrese un email válido"), maxLength(50)])),
  password: string(),
  token: optional(string()),
});

export type Usuario = Output<typeof userSchema>;
