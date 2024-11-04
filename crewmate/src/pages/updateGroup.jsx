import Sidebar from '../components/Sidebar';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './updateGroup.css';

const UpdateGroup = () => {
    const [groupName, setGroupName] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [description, setDescription] = useState('');
    const [members, setMembers] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [totalMembers, setTotalMembers] = useState('');
    const [meetingTime, setMeetingTime] = useState(''); 
    const [meetingLocation, setMeetingLocation] = useState('');
    const [groupType, setGroupType] = useState('');
    const { id } = useParams();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("item updated")
        window.location.href = '/groups';

    }


    useEffect(() => {
      const fetchGroup = () => {
        alert("group fetched");
      }

      fetchGroup();
    }, [])
    
    return (
        <div className="container">
            <div>
                <Sidebar />
            </div>
            <div className="main">
                <h1>Create new Groups</h1>
                <form className="create-group-form" onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Group Name:
                            <input type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Course Code:
                            <input type="text" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Group Type:
                            <div className="radio">
                                
                                <label>
                                    <input type="radio" value="Study" checked={groupType === 'Study'} onChange={(e) => setGroupType(e.target.value)} />
                                    Study
                                </label>
                                <label>
                                    <input type="radio" value="Project" checked={groupType === 'Project'} onChange={(e) => setGroupType(e.target.value)} />
                                    Project
                                </label>
                                <label>
                                    <input type="radio" value="Social" checked={groupType === 'Social'} onChange={(e) => setGroupType(e.target.value)} />
                                    Social
                                </label>
                                <label>
                                    <input type="radio" value="Casual" checked={groupType === 'Casual'} onChange={(e) => setGroupType(e.target.value)} />
                                    Casual
                                </label>
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            Description:
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Members:
                            <input type="text" value={members} onChange={(e) => setMembers(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Contact Email:
                            <input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Total Members:
                            <input type="number" value={totalMembers} onChange={(e) => setTotalMembers(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Meeting Time:
                            <input type="text" value={meetingTime} onChange={(e) => setMeetingTime(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Meeting Location:
                            <input type="text" value={meetingLocation} onChange={(e) => setMeetingLocation(e.target.value)} />
                        </label>
                    </div>
                    <div className="submit">
                    <button type="submit" className='submit-btn' onClick={handleSubmit}>Create Group</button>
                    </div>
                </form>
            </div>
        </div>
    );
    }
export default UpdateGroup;