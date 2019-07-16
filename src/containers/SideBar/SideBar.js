import React from 'react';
import SideBarItem from './SideBarItem/SideBarItem';
import { Menu, Divider } from 'semantic-ui-react';
import './SideBar.scss';
import { SideBarHeader } from './SideBarHeader/SideBarHeader';
// import { Subscriptions } from './Subscriptions/Subscriptions';
// import { SideBarFooter } from './SideBarFooter/SideBarFooter';

export class SideBar extends React.Component {
  render() {
    return (
      <Menu borderless vertical stackable size="medium" fixed="left" className="side-nav shadowless borderless">
        <SideBarItem path="/" label="Home" icon="home" />
        <SideBarItem path="/feed/trending" label="Artists" icon="fire" />
        <SideBarItem label="Songs" icon="fire" />
        <SideBarItem label="Genres" icon="spy" />
        <SideBarItem label="Keys" icon="spy" />
        <SideBarItem label="Tempo" icon="spy" />
        <Divider />
        <SideBarHeader title="Library" />
        <SideBarItem label="History" icon="history" />
        <SideBarItem label="Trending" icon="fire" />
        <SideBarItem label="Likes" icon="thumbs up" />
        <Divider />
        {/* <Subscriptions /> */}
        {/* <SideBarHeader title="More from Youtube" /> */}
        {/* <SideBarItem label="Movies and Shows" icon="film" /> */}
        {/* <Divider /> */}
        <SideBarItem label="Report history" icon="flag" />
        <SideBarItem label="Help" icon="help circle" />
        <SideBarItem label="Send feedback" icon="comment" />
        {/* <Divider /> */}
        {/* <SideBarFooter /> */}
      </Menu>
    );
  }
}
