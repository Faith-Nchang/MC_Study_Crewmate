import { useEffect, useState } from "react";
import SideBar from "../components/sideBar";
import './groups.css';
import GroupCard from "../components/GroupCard";
import { supabase } from "../client";


const Groups = () => {
    const [groups, setGroups] = useState([]);

    const fetchGroups = async () => {
        const { data } = await supabase
            .from('Groups')
            .select()
            .order('created_at', { ascending: true });

        setGroups(data);
    };

    useEffect(() => {
        fetchGroups();
    }, []);

    const handleEditGroup = (groupId) => {
        window.location.href = '/update-group/' + groupId;
    };

    const handleDeleteGroup = async (groupId) => {
        const { error } = await supabase
            .from('Groups')
            .delete()
            .eq('id', groupId);

        if (error) {
            console.error("Error deleting group:", error);
        } else {
            alert('Group sucessfully deleted')
            fetchGroups();
        }
    };

    const handleViewGroup = (groupId) => {
        window.location.href = '/group/' + groupId;
    };

    return (
        <div>
            <SideBar />
            <div className="main">
                <h1>All groups to form crew mates</h1>
                <div className="groups">
                    {groups.length > 0 ? (
                        groups.map((group) => (
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
                        ))
                    ) : (
                        <h1>No groups created</h1>
                    )}
                </div>
                
            </div>
        </div>
    );
};

export default Groups;
