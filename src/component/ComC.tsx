import {useContext} from "react";
import {CountContext} from "@/app/test/page";

const CompC = () => {
    const {count} = useContext(CountContext)
    return(
        <div>
            {count}
        </div>
    )
}

export default CompC