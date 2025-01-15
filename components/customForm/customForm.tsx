import { SubmitHandler, useForm, } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import  CustomInput from "./components/customInput"
import { Schema, formValue } from "./models/form.model"


const customForm = () => {
    const {control, handleSubmit, formState:{ errors}} = useForm<formValue>({ //se usa useForm para controlar el formulario 
        resolver: zodResolver(Schema), //  uasa los valores de schema para validar el formulario
        mode: "onBlur"
    })

    // onSubmit Es una constante que define una función para manejar el envío del formulario.
    const onSubmit:SubmitHandler<formValue> = (data ) =>{// SubmitHandler<formValue>: Es un tipo de react-hook-form que asegura que la función onSubmit recibirá un argumento data que tiene la estructura definida por formValue.
        console.log(data) // se imprime los datos del formulario 
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput name="name" control={control} label="Name" type="text" error={errors.name} />
          <CustomInput name="email" control={control} label="Email" type="email" error={errors.email} />
          <CustomInput name="password" control={control} label="Password" type="password" error={errors.password} />
          <CustomInput name="confirmPassword" control={control} label="Confirm Password" type="password" error={errors.confirmPassword} />
          <button type="submit" > Submit</button>
        </form>
      )
}

export default customForm; // se exporta el componente customForm