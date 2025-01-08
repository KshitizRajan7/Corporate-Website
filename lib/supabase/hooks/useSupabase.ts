import { useState } from 'react'
import { supabase} from '../department'

export const useSupabase = ()=>{
    const [department,setDepartment] = useState<any>([]);

    const getDepartment = async()=>{
        let {data,error} = await supabase.from('Department').select('*');
        if(data){
            setDepartment(data);
            console.log(data);
        }
        if(error){
            console.error(error)
        }
    }
    return {department,getDepartment};
}

