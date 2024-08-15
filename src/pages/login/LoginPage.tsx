import { useForm } from "react-hook-form";
import ControllerInput from "../../components/form/ControllerInput";

type LoginInput = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const { control, handleSubmit, setError } = useForm<LoginInput>();
  // const { login } = useAccount();

  const onSubmit = () => {
    alert("Se lanzo la peticion");
    setError("username", {
      message: "Error el usuario ni existe",
      type: "min",
    });
  };

  return (
    <div>
      <ControllerInput
        control={control}
        name='username'
        type='text'
        placeholder=""
        label="Usuario:"
        rules={{
          required: {
            value: true,
            message: "Debe ingresar un nombre de usuario",
          },
        }}
      />
      <ControllerInput
        control={control}
        name='password'
        type='password'
        label="Contraseña:"
        rules={{
          required: {
            value: true,
            message: "Debe ingresar una contraseña de usuario",
          },
        }}
      />
      <button className='btn' onClick={handleSubmit(onSubmit)}>
        Iniciar sesion
      </button>
    </div>
  );
};

export default LoginPage;
