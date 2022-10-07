import React from "react";
import { Center, Card, Space, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const Post = ({ name, id, body, ...otherProps }) => {
  return (
    <div>
      <Space h="xl" />
      <Center>
        <Card shadow="sm" p="xl" target="_blank">
          <Link
            to={`userPost/${id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Text weight={500} size="lg" mt="md">
              {name}
            </Text>
          </Link>
          <Text mt="xs" color="dimmed" size="sm">
            {body}
          </Text>
        </Card>
      </Center>
      <Space h="xs" />
    </div>
  );
};

export default Post;
