import { Button, Flex, Popconfirm } from "antd";
import { useMemo } from "react";
import { IActionWithModalDialog } from "./actionwithmodaldialog.type";


function ActionWithModalDialog(props: IActionWithModalDialog) {
  const { onClickEdit, onConfirmDelete } = props;

  const commonProps = useMemo(() => {
    return {
      title: "Delete the item",
      description: "Are you sure to delete this item?",
      okText: "Yes",
      cancelText: "No",
    };
  }, []);

  return (
    <Flex gap={8}>
      <Button type="primary" onClick={onClickEdit}>
        Edit
      </Button>
      <Popconfirm {...commonProps} onConfirm={onConfirmDelete}>
        <Button type="primary" danger>
          Delete
        </Button>
      </Popconfirm>
    </Flex>
  );
}

export default ActionWithModalDialog;
