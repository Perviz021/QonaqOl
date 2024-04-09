import React, { useEffect, useState } from "react";
import { Drawer, Space } from "antd";
import {
  arrowRightMenu,
  bookmark,
  gift,
  heart2,
  logout,
  menu,
  profile,
  receipt,
  shapes,
} from "../../assets";
import { NavLink } from "react-router-dom";

export const DrawerLink = ({ path, img, name, onClose }) => {
  return (
    <>
      <NavLink
        to={`/${path}`}
        className="flex items-center justify-between border-b pb-[4px]"
        onClick={onClose}
      >
        <span className="flex items-center space-x-[16px]">
          <span>
            <img src={img} alt="" />
          </span>
          <span className="font-[500] text-[16px] text-[#000000B2]">
            {name}
          </span>
        </span>
        <span>
          <img src={arrowRightMenu} alt="" />
        </span>
      </NavLink>
    </>
  );
};

const DrawerMobile = () => {
  const [token, setToken] = useState(null);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");

    if (storedToken) setToken(storedToken);
  }, []);

  const handleLogout = () => {
    setOpen(false);
    // Remove token, userId from local storage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    // Clear token state
    setToken(null);
    // Reload the page
    window.location.reload();
  };

  return (
    <>
      <Space>
        <div
          className="flex items-center justify-center relative top-[3px]"
          onClick={showDrawer}
        >
          <img src={menu} alt="" />
        </div>
      </Space>
      <Drawer
        // title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        // rootClassName="w-[309px]"
      >
        <h1 className="unbounded unbounded-600 text-[28px] leading-[32px] mb-[60px] mt-[100px] pl-[20px]">
          Menyu
        </h1>

        <ul className="space-y-[32px]">
          {token && (
            <>
              <li>
                <DrawerLink
                  path="account"
                  img={profile}
                  name="Profilim"
                  onClose={onClose}
                />
              </li>
              <li>
                <DrawerLink
                  path="account"
                  img={receipt}
                  name="Rezervlərim"
                  onClose={onClose}
                />
              </li>
              <li>
                <DrawerLink
                  path="account"
                  img={heart2}
                  name="Bəyəndiklərim"
                  onClose={onClose}
                />
              </li>
            </>
          )}
          <li>
            <DrawerLink
              path="events"
              img={shapes}
              name="Tədbirlər"
              onClose={onClose}
            />
          </li>
          <li>
            <DrawerLink
              path="about"
              img={bookmark}
              name="Haqqımızda"
              onClose={onClose}
            />
          </li>
          <li>
            <DrawerLink
              path="gift-cards"
              img={gift}
              name="Hədiyyə kartı"
              onClose={onClose}
            />
          </li>
          {token && (
            <button
              onClick={handleLogout}
              className="flex items-center justify-between border-b pb-[4px] w-full"
            >
              <span className="flex items-center space-x-[16px]">
                <span>
                  <img src={logout} alt="" />
                </span>
                <span className="font-[500] text-[16px] text-[#000000B2]">
                  Çıxış
                </span>
              </span>
              <span>
                <img src={arrowRightMenu} alt="" />
              </span>
            </button>
          )}
        </ul>
      </Drawer>
    </>
  );
};
export default DrawerMobile;
