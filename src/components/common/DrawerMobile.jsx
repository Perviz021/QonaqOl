import React, { useState } from "react";
import { Drawer, Space } from "antd";
import { arrowRightMenu, bookmark, gift, menu, shapes } from "../../assets";
import { NavLink } from "react-router-dom";

export const DrawerLink = ({ path, img, name }) => {
  return (
    <>
      <NavLink
        to={`/${path}`}
        className="flex items-center justify-between border-b pb-[4px]"
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
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
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
          <li>
            <DrawerLink path="events" img={shapes} name="Tədbirlər" />
          </li>
          <li>
            <DrawerLink path="about" img={bookmark} name="Haqqımızda" />
          </li>
          <li>
            <DrawerLink path="gift-cards" img={gift} name="Hədiyyə kartı" />
          </li>
        </ul>
      </Drawer>
    </>
  );
};
export default DrawerMobile;
