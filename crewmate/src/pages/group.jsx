import SideBar from "../components/sideBar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './group.css';
import { supabase } from "../client";

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
        const fetchGroup = async () => {
            // Convert the id to a number
            const groupId = Number(id);
    
            const { data, error } = await supabase
                .from('Groups')
                .select('*')
                .eq('id', groupId); // Use the converted number
    
            if (error) {
                console.error('Error fetching group:', error);
            } else if (data.length > 0) {
                setGroup(data[0]); // Access the first object in the array
            } else {
                console.warn('No group found with the given ID');
            }
        };
        
        fetchGroup();
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
                <p><strong>Contact Email</strong> {group.email}</p>
                <p><strong>Total Members</strong> {group.totalMembers}</p>
                <p><strong>Meeting Time</strong> {group.time}</p>
                <p><strong>Meeting Location</strong> {group.location}</p>
                <p><strong>Group Type</strong> {group.groupType}</p>
            </div>
        </div>
    );
};

export default Group;
