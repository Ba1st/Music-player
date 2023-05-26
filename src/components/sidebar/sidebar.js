import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarbutton";
import { MdSpaceDashboard } from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import apiClient from "../screens/spotify";

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://t4.ftcdn.net/jpg/01/18/03/35/360_F_118033506_uMrhnrjBWBxVE9sYGTgBht8S5liVnIeY.jpg"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);

  return (
    <div className="sidebar_containter">
      <img src={image} className="profile-img" alt="profile" />
      <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
      <SidebarButton title="Trending" to="/trending" icon={<BiTrendingUp />} />
      <SidebarButton
        title="Player"
        to="/player"
        icon={<TbPlayerPlayFilled />}
      />
      <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />
      <SidebarButton title="Library" to="/" icon={<MdOutlineLibraryMusic />} />
      <SidebarButton title="Sign out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}
