import {Menu} from "antd";
import Link from "next/link";
import {AppstoreAddOutlined, LoginOutlined, UserOutlined} from "@ant-design/icons";

const {Item} = Menu;

const TopNav = () => {
    return (
        <Menu mode={"horizontal"}>

            <Item icon={<AppstoreAddOutlined/>}>
                <Link href="/"><a className="typewriter">App</a></Link>
            </Item>

            <Item icon={<LoginOutlined/>}>
                <Link href="/login"><a className="typewriter">login</a></Link>
            </Item>

            <Item icon={<UserOutlined/>}>
                <Link href="/register"><a className="typewriter">register</a></Link>
            </Item>

        </Menu>
    )
}

export default TopNav;