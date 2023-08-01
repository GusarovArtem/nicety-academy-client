// import React, { Component } from "react";
// import { Routes, Route, Link } from "react-router-dom";
// // import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles/App.css";
//
// import AuthService from "./services/auth.service";
//
// import Login from "./components/login.component";
// import Register from "./components/register.component";
// import Profile from "./components/profile.component";
// import BoardUser from "./components/board-user.component";
// import BoardModerator from "./components/board-moderator.component";
// import BoardAdmin from "./components/board-admin.component";
// import Home from "./components/home.component"
// import {MainPage} from "./pages/MainPage"
//
// // import AuthVerify from "./common/auth-verify";
// import EventBus from "./common/EventBus";
// import {Footer} from "./components/footer.component";
// import {Catalog} from "./pages/Catalog";
// import {HeaderGuest} from "./components/header.component";
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.logOut = this.logOut.bind(this);
//
//     this.state = {
//       showModeratorBoard: false,
//       showAdminBoard: false,
//       currentUser: undefined,
//     };
//   }
//
//   componentDidMount() {
//     const user = AuthService.getCurrentUser();
//
//     if (user) {
//       this.setState({
//         currentUser: user,
//         showModeratorBoard: user.roles.includes("MODERATOR"),
//         showAdminBoard: user.roles.includes("ADMIN"),
//       });
//     }
//
//     EventBus.on("logout", () => {
//       this.logOut();
//     });
//   }
//
//   componentWillUnmount() {
//     EventBus.remove("logout");
//   }
//
//   logOut() {
//     AuthService.logout();
//     this.setState({
//       showModeratorBoard: false,
//       showAdminBoard: false,
//       currentUser: undefined,
//     });
//   }
//
//   render() {
//     const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
//
//     return (
//       <div>
//         <nav className="navbar navbar-expand navbar-dark bg-dark">
//           <Link to={"/"} className="navbar-brand">
//             Nicety
//           </Link>
//           <div className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link to={"/home"} className="nav-link">
//                 Home
//               </Link>
//             </li>
//
//             {showModeratorBoard && (
//               <li className="nav-item">
//                 <Link to={"/moderator"} className="nav-link">
//                   Moderator Board
//                 </Link>
//               </li>
//             )}
//
//             {showAdminBoard && (
//               <li className="nav-item">
//                 <Link to={"/admin"} className="nav-link">
//                   Admin Board
//                 </Link>
//               </li>
//             )}
//
//             {currentUser && (
//               <li className="nav-item">
//                 <Link to={"/user"} className="nav-link">
//                   User
//                 </Link>
//               </li>
//             )}
//           </div>
//
//           {currentUser ? (
//             <div className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to={"/profile"} className="nav-link">
//                   {currentUser.username}
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <a href="/login" className="nav-link" onClick={this.logOut}>
//                   LogOut
//                 </a>
//               </li>
//             </div>
//           ) : (
//             <div className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to={"/login"} className="nav-link">
//                   Login
//                 </Link>
//               </li>
//
//               <li className="nav-item">
//                 <Link to={"/register"} className="nav-link">
//                   Sign Up
//                 </Link>
//               </li>
//             </div>
//           )}
//         </nav>
//
//         <div className="body" >
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/catalog" element={<Catalog/>}/>
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/user" element={<BoardUser />} />
//             <Route path="/moderator" element={<BoardModerator />} />
//             <Route path="/admin" element={<BoardAdmin />} />
//             <Route path="/footer" element={<Footer/>}/>
//             <Route path="/main" element={<MainPage/>}/>
//             <Route path="/header" element={<HeaderGuest/>}/>
//           </Routes>
//         </div>
//
//         {/* <AuthVerify logOut={this.logOut}/> */}
//       </div>
//     );
//   }
// }
//
// export default App;

import React from 'react';
import HeaderGuest from './html/Header.guest';


const App = () => {
    return (
        <div>
            <HeaderGuest />
            {/* Other components and content of your app */}
        </div>
    );
};

export default App;
