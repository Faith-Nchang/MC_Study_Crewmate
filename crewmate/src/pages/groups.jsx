import { useEffect, useState } from "react";
import SideBar from "../components/sideBar";
import './groups.css';
import GroupCard from "../components/GroupCard";
import { supabase } from "../client";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import Card from "../components/Card";

const Groups = () => {
    const [groups, setGroups] = useState([]);
    const [percentStudy, setPercentStudy] = useState(0);
    const [percentSocial, setPercentSocial] = useState(0);
    const [percentProject, setPercentProject] = useState(0);
    const [percentCasual, setPercentCasual] = useState(0);
    const [totalGroups, setTotalGroups] = useState(0);
    const [statsData, setStatsData] = useState([]);

    useEffect(() => {
        fetchGroups();
    }, [groups]);

    const fetchGroups = async () => {
        let { data, error } = await supabase
            .from('Groups')
            .select('*');
        if (error) console.log('error', error);

        setGroups(data);
        setTotalGroups(data.length);
        calculatePercentages(data);
    }

    const calculatePercentages = (groups) => {
        let studyGroups = groups.filter(group => group.groupType === 'Study');
        let socialGroups = groups.filter(group => group.groupType === 'Social');
        let projectGroups = groups.filter(group => group.groupType === 'Project');
        let casualGroups = groups.filter(group => group.groupType === 'Casual');
        setPercentStudy((studyGroups.length / groups.length) * 100);
        setPercentSocial((socialGroups.length / groups.length) * 100);
        setPercentProject((projectGroups.length / groups.length) * 100);
        setPercentCasual((casualGroups.length / groups.length) * 100);
        setStatsData([
            { name: 'Study groups percent', value: percentStudy },
            { name: 'Social groups percent', value: percentSocial },
            { name: 'Project groups percent', value: percentProject },
            { name: 'Casual groups percent', value: percentCasual }
        ]);
    }

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
            alert('Group successfully deleted');
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
                <div className="stats">
                    <h2 className="stats_header">Group Statistics</h2>
                    <div className="stats-data">
                        <div>
                        <PieChart width={400} height={200}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={statsData}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                        </div>
                            <Card content={totalGroups + ' groups created'} />
                        <div>
                        </div>
                        </div>
                </div>
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
                                highlight={group.totalMembers > 40}
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
