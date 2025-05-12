import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsersData } from "store/selectors/users";
import { deleteUser, fetchUsers } from "store/slices/usersSlice";
import { toast } from "sonner";
import { useFormik } from "formik";
import { updateUser } from "../../../store/slices/usersSlice";

const useConnect = () => {
  const [displayedUsers, setDisplayedUsers] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const dispatch = useDispatch();
  const users = useSelector(selectUsersData);

  const handleDelete = (id) => {
    dispatch(deleteUser({ params: {}, id })).then((res) => {
      if (res.error) {
        toast.error("Data couldn't be deleted", {
          position: "bottom-right",
          duration: 2000,
        });
      } else {
        toast.success("Data deleted", {
          position: "bottom-right",
          duration: 2000,
        });
      }
    });
  };

  const onSubmit = (values) => {
    dispatch(updateUser({ params: values, id: selectedUser?.id })).then(
      (res) => {
        if (res.error) {
          toast.error("Given data is not valid", {
            position: "bottom-right",
            duration: 2000,
          });
        } else {
          toast.success("User updated", {
            position: "bottom-right",
            duration: 2000,
          });
        }
      }
    );
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: selectedUser,
    onSubmit: onSubmit,
    enableReinitialize: true,
  });
  console.log("selectedUser", selectedUser);
  console.log("values", values);
  const handleDate = (e) => {
    const { name, value } = e.target;
    const date = new Date(value);
    const formattedDate = date.toISOString();
    setFieldValue("birthday", formattedDate);
  };
  useEffect(() => {
    dispatch(fetchUsers({}));
  }, [dispatch]);

  return {
    users,
    handleDelete,
    displayedUsers,
    setDisplayedUsers,
    showModal,
    setShowModal,
    values,
    handleChange,
    setSelectedUser,
    handleSubmit,
    handleDate
  };
};

export default useConnect;
