import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DropDown = () => {
  const handleMenuClick = ({ key }: { key: string }) => {
    console.log(`Selected language: ${key}`);
    // You can add logic here to change the language
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="uz">Uzbek</Menu.Item>
      <Menu.Item key="ru">Russian</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button>
        Select Language <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default DropDown;
