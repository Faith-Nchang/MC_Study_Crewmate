import SideBar from "../components/sideBar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './group.css';

const Group = () => {
    const [group, setGroup] = useState({});
    const { id } = useParams();
    
    const sampleGroup = {
        groupName: "Study Buddies",
        courseCode: "CS101",
        description: "A group for students taking Computer Science 101 to collaborate and study together.",
        members: "Faith, Laura, Michelle",
        contactEmail: "studybuddies@example.com",
        totalMembers: 3,
        meetingTime: "Mondays at 5 PM",
        meetingLocation: "Room 202, Main Building",
        groupType: "Study Group"
    };

    useEffect(() => {
        // Fetch group data from the server
        setGroup(sampleGroup);
    }, [id]);
    
    return (
        <div>
            <div>
                <SideBar />
            </div>
            <div className="main">
                <h1>{group.groupName}</h1>
                <p><strong>Course Code</strong> {group.courseCode}</p>
                <p><strong>Description</strong> {group.description}</p>
                <p><strong>Members</strong> {group.members}</p>
                <p><strong>Contact Email</strong> {group.contactEmail}</p>
                <p><strong>Total Members</strong> {group.totalMembers}</p>
                <p><strong>Meeting Time</strong> {group.meetingTime}</p>
                <p><strong>Meeting Location</strong> {group.meetingLocation}</p>
                <p><strong>Group Type</strong> {group.groupType}</p>
            </div>
        </div>
    );
};

export default Group;
