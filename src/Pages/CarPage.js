import {Component} from "react";
import {Cars} from "../components/Cars/Cars";
import {carService} from "../services/carService";

class CarPage extends Component{


    render(){
        return(
            <div>
                <Cars/>
            </div>
        )
    }
}
export {CarPage}