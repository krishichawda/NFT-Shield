
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { initFirebase } from "../firebase/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from "next/router";

export default function Login(){

  initFirebase()
  const provider = new GoogleAuthProvider();
  const auth = getAuth()
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  enum RoleEnum {
    user = "user",
    admin = "admin",
  }

  interface IFormInput {
    firstName: String;
    Role: RoleEnum;
  }

    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

    const handleClick = async() => {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user)
    }


  if(loading) {
    return <div> Loading... </div>
  }

  if(user) {
    router.push("/verify")
  }


    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mt-44">
        <label className="flex flex-row justify-center pt-10 text-lg">Name</label>
        <input className="flex flex-row rounded-xl h-9 border-2 mx-auto" {...register("firstName")} />
        <label className="flex flex-row justify-center pt-10 text-lg">Role Selection</label>
        <select className="flex flex-row w-32 border-2 mx-auto mt-4" {...register("Role")} >
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
        <div className="flex w-full justify-center py-10">
          <input className='w-28 h-10 text-white bg-black rounded-full items-center text-center py-2' type="submit" onClick={handleClick}/>
        </div>
        </div>

      </form>
    );

}
