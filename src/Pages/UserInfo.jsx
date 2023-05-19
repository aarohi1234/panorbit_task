import React, { useEffect, useState } from 'react';
import Chatbox from '../Components/Chatbox';
import ProfileMenu from '../Components/ProfileMenu';
import Sidebar from '../Components/Sidebar';
import Profile from '../Components/Profile';
import '../style/userInfo.css';

export default function UserInfo({ selectedId, setSelectedId }) {
	const user1 = selectedId - 1 === 0 ? 1 : 0;
	const user2 = selectedId - 1 === 1 ? 2 : user1 + 1;
	
	const [activeTab, setActiveTab] = useState('Profile');
	const [activeTabComponent, setActiveTabComponent] = useState('');
	const [data, setData] = useState([]);

	
	const getData = async () => {
		let response = await fetch('https://panorbit.in/api/users.json');
		response = await response.json();
		setData(response.users);
	};
	useEffect(() => {
		getData();
	}, [getData, data, selectedId]);
	return (
		<>
			<div className='dashboardContainer fb ac jc'>
				<div className='dashboard fb ac jc'>
					
					<Sidebar
						setActiveTabComponent={setActiveTabComponent}
						setActiveTab={setActiveTab}
						userData={data[selectedId - 1]}
						selectedId={selectedId}
					/>
					
					<div className='dashboardTabContents'>
						<div className='headerContents fb ac jc'>
							<div className='headerContentsInner fb ac jc'>
								<div className='tabHeading fb ac js'>
									<h3>{activeTab}</h3>
								</div>
								<div className='profileMenuArea fb ac je'>
									<ProfileMenu
										userData={data[selectedId - 1]}
										user1Data={data[user1]}
										user2Data={data[user2]}
										user1={user1}
										user2={user2}
										setSelectedId={setSelectedId}
									/>
								</div>
							</div>
						</div>
						<div className='dashboardTabBody'>
							{activeTab === 'Profile' ? (
								<Profile
									userData={data[selectedId - 1]}
									selectedId={selectedId}
								/>
							) : (
								activeTabComponent
							)}
						</div>
					</div>
				</div>
			</div>
			
			<Chatbox data={data} selectedId={selectedId} />
		</>
	);
}
