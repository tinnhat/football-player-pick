import { Button, notification, Space } from "antd";
import React from "react";

const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message: message,
    description: description,
  });
};
export default openNotificationWithIcon;
