import React, { FC } from 'react';
import { SongListWrapper } from './SongList.styled';

interface SongListProps {}

const SongList: FC<SongListProps> = () => (
 <SongListWrapper>
    SongList Component
 </SongListWrapper>
);

export default SongList;
