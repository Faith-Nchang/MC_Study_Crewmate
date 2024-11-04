import SideBar from "../components/sideBar";
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>
                <SideBar />
            </div>
            <div className="main">
                <h1>Home</h1>

                <h2>Welcome to MC Study Crewmate</h2>
                <div className="app-description">
                    <p>MC Study Crewmate is your platform to form study groups and connect with classmates. It makes it easy to find and join study groups based on your classes and subjects.</p>
  
                    <p>Connect with peers who share your academic interests, exchange ideas, and collaborate in a supportive learning community. Engage in discussions, share resources, and build connections that enhance your study experience.</p>
  
                    <p>Stay organized with features like instant messaging, group chat scheduling, and reminders for upcoming study sessions. Make learning more interactive and build a network of supportive classmates to help you reach your academic goals.</p>
                <Link to='/create-group' className="submit-btn">
                Create new Group

                </Link>
                </div>
            </div>
          
        </div>
    )
}
export default Home;