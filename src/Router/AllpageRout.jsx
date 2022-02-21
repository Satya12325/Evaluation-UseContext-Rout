import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Prerequsite from "../Pages/Prerequsite";
import Registration from "../Pages/Register";
export default function AllpageRout(){
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/prerequsite">
                    <Prerequsite/>
                </Route>
                <Route exact path="/registeration">
                    <Registration/>
                </Route>
            </Switch>
        </div>
    )
}