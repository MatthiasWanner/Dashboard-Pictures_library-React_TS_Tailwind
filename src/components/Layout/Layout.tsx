import React from 'react';
import { useQuery } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { useUserFromStore } from '../../../store/user.slice';
import { users } from '../../API/requests';
import MainContainer from './MainContainer';
import Sidebar from './Sidebar/Sidebar';

const id = '5033f4e0-a2fb-49a2-aca9-e56233f6fa2c';

function Layout(): JSX.Element {
  const { dispatchUser } = useUserFromStore();

  useQuery(['users', id], () => users.getOne(id), { onSuccess: (data) => dispatchUser(data) });

  return (
    <div className="layout flex w-full h-full rounded-3xl shadow-themeShadow overflow-hidden">
      <Router>
        <Sidebar />
        <MainContainer />
      </Router>
    </div>
  );
}

export default Layout;
