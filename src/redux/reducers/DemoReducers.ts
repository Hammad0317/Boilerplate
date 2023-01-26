import { DEM_O } from "@/redux/actions/action"; 


export const DemoReducers = (state = false, action) => {
   //  console.log(action,'themeeee')
     switch (action.type) {
        case DEM_O:
         return action.payload;
         default:
            return state
     }
};