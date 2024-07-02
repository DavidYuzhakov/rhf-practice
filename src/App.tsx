import styled from "styled-components";
import Title from "./components/Title";
import Form from "./components/Form";
import Button from "./components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputMask } from "@react-input/mask";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(45deg, #0064e6, #00e5ad);
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Close = styled.span`
  position: absolute;
  top: 10px;
  right: 15px;
  z-index: 1;
  line-height: 1;
  font-size: 25px;
  color: #00e5ad;
  cursor: pointer;
`

interface FormValues {
  name: string
  email: string
  country: string
  phone: string
  password: string
  checkbox: boolean
}

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit, // нужен как обертка, для того чтобы функция (onSubmit) лишний раз не вызывалась
    reset, // для ресета после отправки формы
  } = useForm<FormValues>({
    mode: "onBlur"
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(JSON.stringify(data))
    reset()
  }

  return (
    <div>
      <AppWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title marginbottom={30}>Registration Form</Title>
          <Close>&times;</Close>
          {errors?.name && <p>{errors.name?.message || "Error!!!"}</p>}
          <input 
            {...register("name", {
              required: 'The field must be is required!',
              minLength: {
                value: 5,
                message: 'min 5 characters'
              }
            })}
            type="text" 
            placeholder="name" 
          />
          {errors?.email && <p>{errors.email?.message || "Error!!!"}</p>}
          <input 
            {...register("email", {
              required: 'The field must be is required!'          
            })}
            type="email" 
            placeholder="email adress" 
          />
          {errors?.country && <p>{errors.country?.message || "Error!!!"}</p>}
          <input 
            {...register("country", {
              validate: (value) => value === 'Russia' || "Country must be Russia"
            })}
            type="text" 
            placeholder="country" 
          />
          {errors?.phone && <p>{errors.phone?.message || "Error!!!"}</p>}
          <InputMask 
            {...register('phone', {
              required: 'The field must be is required!',
            })}
            placeholder="Phone" 
            mask="+7 (___) ___-__-__" 
            replacement={{ _: /\d/ }} 
          />
          {errors?.password && <p>{errors.password?.message || "Error!!!"}</p>}
          <input 
            {...register("password", {
              required: 'The field must be is required!',
              minLength: {
                value: 8,
                message: 'min 8 characters'
              }
            })}
            type="password" 
            placeholder="password" 
          />
          <div className="checkbox">
            <input {...register('checkbox', {
              required: true
            })} type="checkbox" id="accepting" />
            <label className={`${errors?.checkbox ? 'error' : ''}`} htmlFor="accepting">I accept terms & conditions</label>
          </div>
          <Button type="submit">Create account</Button>
        </Form>
      </AppWrapper>
    </div>
  )
}

export default App
