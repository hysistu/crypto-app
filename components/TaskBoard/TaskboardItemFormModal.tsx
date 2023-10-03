import { useEffect, useRef, useState } from "react";
import { Modal, Form, ModalProps, Input, Select } from "antd";
import { TaskboardItem } from "./TaskboardTypes";
import { DefaultOptionType } from "antd/es/select";
import useAuth from "context/useAuth";
import getData from "hooks/getData";
import { getAllUsers } from "requests/user";

export type TaskboardItemFormValues = Pick<
  TaskboardItem,
  "title" | "description" | "user"
>;

type TaskboardItemFormModalProps = Pick<ModalProps, "visible"> & {
  initialValues: TaskboardItemFormValues;
  onCancel: VoidFunction;
  onOk: (values: TaskboardItemFormValues) => void;
};

function TaskboardItemFormModal({
  visible,
  initialValues,
  onCancel,
  onOk,
}: TaskboardItemFormModalProps) {
  const [form] = Form.useForm<TaskboardItemFormValues>();

  const inputRef = useRef<Input>(null);
  const { user, loading } = useAuth();
  const [_page, setPage] = useState<number>(1);
  const [_deactivatedPage, setDeactivatedPage] = useState<number>(1);
  const { loader, records, page, totalPage, reloadData, data } = getData(
    getAllUsers,
    "User",
    _page
  );

  const optionsss = data.map((entry) => {
    return {
      value: entry.firstName + " " + entry.lastName,
      label: entry.firstName + " " + entry.lastName,
    };
  });

  useEffect(() => {
    if (visible) {
      // Focus on the first input when the modal is opened
      inputRef.current?.focus();
      form.resetFields();
    }
  }, [form, visible]);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Modal
      title="Add Item"
      open={visible}
      destroyOnClose
      // To make dynamically changing initialValues work with Form
      forceRender
      onCancel={onCancel}
      onOk={() => form.submit()}
    >
      <Form
        autoComplete="off"
        form={form}
        layout="vertical"
        initialValues={initialValues}
        onFinish={(values) => {
          onOk(values);
          form.resetFields();
          onCancel();
        }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            { required: true, message: "'Title' is required" },
            {
              max: 100,
              message: "'Title' can not be longer than 100 characters",
            },
          ]}
        >
          <Input ref={inputRef} autoFocus />
        </Form.Item>
        <Form.Item name="user" label="User">
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Tags Mode"
            onChange={handleChange}
            options={optionsss}
          />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            { required: true, message: "'Description' is required" },
            {
              max: 400,
              message: "'Description' can not be longer than 400 characters",
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default TaskboardItemFormModal;
