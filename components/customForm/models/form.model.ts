import {z} from "zod";

export const Schema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email("Correo inválido").min(1, "El correo es obligatorio"),
    password: z.string().min(6, "La contraseña debe de tener al menos 6 caracteres"),
    confirmPassword: z.string().min(6, "La confirmación debe tener al menos 6 caracteres")
  }).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas son diferentes",
    path: ['confirmPassword']
  })

export type formValue = z.infer<typeof Schema> // se tanforma el schema en un tipo para poder usarlo en el componente 
