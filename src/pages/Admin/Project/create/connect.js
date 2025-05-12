import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { createUser } from "store/slices/usersSlice";

import { toast } from "sonner";
const useConnect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (values) => {
    dispatch(createUser(values)).then((res) => {
      if (res.error) {
        toast.error("Given data is not valid", {
          position: "bottom-right",
          duration: 2000,
        });
      } else {
        toast.success("User created", {
          position: "bottom-right",
          duration: 2000,
        });
        navigate("/admin");
      }
    });
  };
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      sex: "",
      address: "",
      name: "",
      email: "",
      birthday: "",
    },
    onSubmit: onSubmit,
  });

  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export default useConnect;
