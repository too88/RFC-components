import { Avatar, Card, Flex, Space, Typography } from "antd";
import Icon, { HeartFilled, UserOutlined } from "@ant-design/icons";

import cardStyle from "./index.module.scss";
import AuthorAvatar, {
  IAuthor,
} from "~/components/atoms/author-avatar/index.tsx";
import { ETHIcon } from "~/components/atoms/icon/index.tsx";

export interface IProduct {
  id: number;
  imageId: number;
  isFavorite: boolean;
  title: string;
  price: number;
  author: IAuthor;
  background: string;
  imageSrc: string;
  createdAt: number;
  category:
    | "Upper Body"
    | "Lower Body"
    | "Hat"
    | "Shoes"
    | "Accessory"
    | "Legendary"
    | "Mythic"
    | "Epic"
    | "Rare";
  theme: "Light" | "Dark" | "Halloween" | "Colorful";
  tier: "Premium" | "Deluxe" | "Basic";
}

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <Card
      className={cardStyle.container}
      cover={
        <div
          style={{ background: product.background }}
          className={cardStyle.cover}
        >
          <img
            className={cardStyle.image}
            src={product.imageSrc}
            alt={product.imageSrc}
          />

          <div className={cardStyle.category}>{product.category}</div>

          <div className={cardStyle.heartIcon}>
            <HeartFilled />
          </div>
        </div>
      }
      bordered={false}
      hoverable
    >
      <Flex vertical gap={28}>
        <Flex justify="space-between">
          <Typography.Text className={cardStyle.title}>
            {product.title}
          </Typography.Text>

          <Space size={8}>
            <Icon component={ETHIcon} />
            <Typography.Text className={cardStyle.ETHPrice}>
              {product.price} ETH
            </Typography.Text>
          </Space>
        </Flex>

        <Card.Meta
          title={`${product.author?.firstName} ${product.author?.lastName}`}
          className={cardStyle.metaAvatarContainer}
          avatar={
            <div className={cardStyle.metaAvatar}>
              <Avatar
                icon={<UserOutlined />}
                className={cardStyle.avatar}
                src={product?.author?.avatar}
                size={32}
              />

              <Icon
                key={Date.now()}
                className={cardStyle.onlineStatus}
                component={() => (
                  <AuthorAvatar status={product?.author?.onlineStatus} />
                )}
              />
            </div>
          }
        />
      </Flex>
    </Card>
  );
};

export default ProductCard;
