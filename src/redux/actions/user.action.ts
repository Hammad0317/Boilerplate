
import { DEM_O } from '@/redux/actions/action'; 

export const Demo = (data) => {
    
    return {
    type : DEM_O,
    payload: data,
    }
}