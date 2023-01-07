import { useDispatch } from "react-redux"
import { reqWeather } from "../features/dataSlice";
const CitiesList = ({ cities }) => {
    const dispatch = useDispatch();
    return (
        <div className=" rounded-lg drop-shadow-lg max-h-[20rem] overflow-y-auto absolute w-[100%] text-[#F6F6C9] p-2 bg-[#4FA095] hover:cursor-pointer">
            {
                cities.map((item, i) => {
                    return <div className ="flex justify-between hover:bg-[#BAD1C2] hover:text-[#153462] p-2 rounded-md" key = {i}
                    onClick = {()=>{dispatch(reqWeather(item.key))}}>
                        <span>{item.city}</span>
                        <div className = "text-xs">
                            <span>{item.state}, </span>
                            <span>{item.country}</span>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default CitiesList;