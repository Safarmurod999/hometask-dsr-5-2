import React from "react";
import {
    Form,
    FormRow,
    FormBtn,
    FormControl,
    FormSelect
} from "components/ui/Form/Form";
import { get } from "lodash";
import { BiSave } from "react-icons/bi";

const formatDate = (input)=> {
  if (!input) return "";
  const date = new Date(input);
  if (isNaN(date.getTime())) return "";

  return date.toISOString().split("T")[0];
};

const UserModal = ({ isOpen, onClose, values, handleChange, handleSubmit }) => {
    if (!isOpen) return null;

    return (
        <div className="user-modal-overlay">
            <div className="user-modal">
                <button className="user-modal__close" onClick={onClose}>×</button>
                <h2 className="user-modal__title">Create User</h2>
                <Form direction="y" width="100" onSubmit={handleSubmit}>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="username"
                            label="username"
                            name="username"
                            onChange={handleChange}
                            value={get(values, "username", "")}
                            required
                            width="50"
                        />
                        <FormSelect
                            placeholder="sex"
                            label="sex"
                            name="sex"
                            onChange={handleChange}
                            options={[{ value: "male", label: "Male" }, { value: "female", label: "Female" }]}
                            value={get(values, "sex", "")}
                            required
                            width="50"
                        />
                    </FormRow>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="address"
                            label="address"
                            name="address"
                            onChange={handleChange}
                            value={get(values, "address", "")}
                            required
                            width="50"
                        />
                        <FormControl
                            type="text"
                            placeholder="name"
                            label="name"
                            name="name"
                            onChange={handleChange}
                            value={get(values, "name", "")}
                            required
                            width="50"
                        />
                    </FormRow>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="email"
                            label="email"
                            name="email"
                            onChange={handleChange}
                            value={get(values, "email", "")}
                            width="50"
                        />
                        <FormControl
                            type="date"
                            placeholder="birthday"
                            label="birthday"
                            name="birthday"
                            onChange={handleChange}
                            value={formatDate(get(values, "birthday", ""))}
                            width="50"
                        />
                    </FormRow>
                    <FormBtn text="save" icon={<BiSave />} />
                </Form>
            </div>
        </div>
    );
};

export default UserModal;
