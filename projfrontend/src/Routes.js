import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes"
import PrivateRoute from "./auth/helper/PrivateRoutes"
import UserDashBoard from "./user/UserDashBoard"
import AdminDashBoard from "./user/AdminDashBoard"
import AddCategory from "./admin/AddCategory";
import AddDoctor from "./admin/AddDoctor";
import ManageCategories from './admin/ManageCategories';
import ManageDoctors from './admin/ManageDoctors';
import UpdateDoctor from './admin/UpdateDoctor';
import UpdateCategory from './admin/UpdateCategory';
import Doctors from './core/Doctors';
import Cart from './core/Cart';
import CateDoc from './core/CateDoc';


const Routes=()=>{
    return(
       <BrowserRouter>
       <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/signup" exact component={Signup} />
           <Route path="/signin" exact component={Signin} />
           <PrivateRoute path="/user/dashboard" exact component={UserDashBoard}/>
           <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard}/>
           <AdminRoute path="/admin/create/category" exact component={AddCategory}/>
           <AdminRoute path="/admin/create/doctor" exact component={AddDoctor}/>
           <AdminRoute path="/admin/categories" exact component={ManageCategories}/>
           <AdminRoute path="/admin/doctors" exact component={ManageDoctors}/>
           <AdminRoute path="/admin/doctor/update/:doctorId" exact component={UpdateDoctor}/>
            <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory}/> 
           <Route path="/doctors" exact component={Doctors} />
           <Route path="/appointment" exact component={Cart} />
           <Route path="/category/:categoryId" exact component={CateDoc} />
         
       </Switch>
       </BrowserRouter>
    );
}

export default Routes;