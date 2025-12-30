import DashboardLayout from '../components/DashboardLayout';
import MainDashboard from '../components/MainDashboard';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Dashboard() {
  const [userName, setUserName] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.state?.user) {
      setUserName(location.state.user.name);
      localStorage.setItem('user', JSON.stringify(location.state.user));
    } else {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUserName(JSON.parse(storedUser).name);
      }
    }
  }, [location.state]);

  return (
    <DashboardLayout>
      <MainDashboard userName={userName}/>
    </DashboardLayout>
  );
}

export default Dashboard;