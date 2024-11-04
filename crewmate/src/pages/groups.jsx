import { useEffect, useState } from "react";
import SideBar from "../components/sideBar";
import './groups.css';
import GroupCard from "../components/GroupCard";
import { supabase } from "../client";

const Groups = () => {
    const [groups, setGroups] = useState([]);


    const sampleGroups = [
        {
            id: 1,
            groupName: "Study Buddies",
            courseCode: "CS101",
            description: "A group for students taking Computer Science 101 to collaborate and study together.",
            members: "Faith, Laura, Michelle",
            contactEmail: "studybuddies@example.com",
            totalMembers: 3,
            meetingTime: "Mondays at 5 PM",
            meetingLocation: "Room 202, Main Building",
            groupType: "Study Group"
        },
        {
            id: 2,
            groupName: "Math Masters",
            courseCode: "MATH201",
            description: "Join us for weekly math problem-solving sessions.",
            members: "John, Sarah, Tom",
            contactEmail: "mathmasters@example.com",
            totalMembers: 3,
            meetingTime: "Wednesdays at 4 PM",
            meetingLocation: "Room 101, Math Wing",
            groupType: "Study Group"
        },
        {
            id: 3,
            groupName: "History Heroes",
            courseCode: "HIST102",
            description: "Explore history together and prepare for exams.",
            members: "Anna, Mike, Zoe",
            contactEmail: "historyheroes@example.com",
            totalMembers: 3,
            meetingTime: "Fridays at 3 PM",
            meetingLocation: "Library Study Room",
            groupType: "Discussion Group"
        }
    ];


    
    const fetchGroups = async () => {
        // Fetch group data from the server
        const {data} = await supabase
        .from('Groups')
        .select()
        .order('created_at', { ascending: true })

        setGroups(data);
    };

    useEffect(() => {
        fetchGroups();
    }, []);

    
    const handleEditGroup = (groupId) => {
        alert(`Editing group with ID: ${groupId}`);

        alert(`Deleting group with ID: ${groupId}`);
        // Simulate deletion and refetch groups
        fetchGroups();
        window.location.href = '/update-group/' + groupId;

    };

    const handleDeleteGroup = (groupId) => {
        alert(`Deleting group with ID: ${groupId}`);
    };

    const handleViewGroup = (groupId) => {
        window.location.href = '/group/' + groupId;

    };
    return (
        <div>
            <div>
                <SideBar />
            </div>
            <div className="main">
                <h1>All groups to form crew mates</h1>

                <div className="groups">
                    {groups.map((group) => (
                        <GroupCard
                            key={group.id}
                            groupName={group.groupName}
                            groupType={group.groupType}
                            description={group.description}
                            totalMembers={group.totalMembers}
                            onEditGroup={() => handleEditGroup(group.id)}
                            onDeleteGroup={() => handleDeleteGroup(group.id)}
                            onViewGroup={() => handleViewGroup(group.id)}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
    }

export default Groups;