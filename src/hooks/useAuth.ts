import { useCallback, useState } from "react"
import axios from "axios";
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";


export const useAuth = ()=>{
  const navigate = useNavigate();
  const {showMessage} = useMessage();
  const [loading, setLoading] = useState(false);
  const {setLoginUser} = useLoginUser();
  const login = useCallback((id: string)=>{
    if (!id){
      alert('IDを入力してください');
      return false;
    }
    setLoading(true)
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>{
      if(res.data){
        const isAdmin = res.data.id === 10 ? true: false;
        setLoginUser({...res.data, isAdmin});
        showMessage({
          title: "ログインしました。",
          status: "success"
        });
        navigate("/home");
      }else{
        showMessage({
          title: "ユーザーが見つかりません",
          status: "error"
        });
      }
    }).catch(()=>{
      showMessage({
        title: "ログインができません",
        status: "error"
      });
    }).finally(()=>{
      setLoading(false);
    })
  },[navigate, showMessage, setLoginUser])
  return {login, loading}
}