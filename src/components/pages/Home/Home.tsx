import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useRootState } from '@src/hooks/useRootState';
import AppLayout from '@src/components/frames/AppLayout';
import ChatRoom from '@src/components/Room/ChatRoomList';
import ChatRoomHeader from '@src/components/Room/ChatRoomHeader';

const Home = () => {
  const router = useRouter();
  const { info } = useRootState((state) => state.user); //현재 로그인 한 유저정보

  useEffect(() => {
    //false
    if (info) {
      //loginPage redirect
      router.push('/');
    }
  }, [info]);

  return (
    <AppLayout>
      <ChatRoomHeader />
      <ChatRoom />
    </AppLayout>
  );
};

export default Home;
