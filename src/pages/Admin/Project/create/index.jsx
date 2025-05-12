import Breadcrumb from "components/ui/Breadcrumb/Breadcrumb";
import {
    Form,
    FormRow,
    FormBtn,
    FormControl,
    FormSelect
} from "components/ui/Form/Form";
import { IoAddSharp } from "react-icons/io5";
import useConnect from "./connect";
import { get } from "lodash";

const Page = () => {
    const {
        values,
        handleChange,
        handleSubmit
    } = useConnect();
    return (
        <section className="media">
            <div className="admin-container">
                <Breadcrumb title="User Create" backlink="/admin" />
                <Form direction="y" width="50" onSubmit={handleSubmit}>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="username"
                            label={"username"}
                            name="username"
                            onChange={handleChange}
                            value={get(values, "username", "")}
                            required={true}
                            width="50"
                        />
                        <FormSelect
                            placeholder="sex"
                            label={"sex"}
                            name="sex"
                            onChange={handleChange}
                            options={[{ value: "male", label: "Male" }, { value: "female", label: "Female" }]}
                            value={get(values, "sex", "")}
                            required={true}
                            width="50"
                        />
                    </FormRow>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="address"
                            label={"address"}
                            name="address"
                            onChange={handleChange}
                            value={get(values, "address", "")}
                            required={true}
                            width="50"
                        />
                        <FormControl
                            type="text"
                            placeholder="name"
                            label={"name"}
                            name="name"
                            onChange={handleChange}
                            value={get(values, "name", "")}
                            required={true}
                            width="50"
                        />
                    </FormRow>
                    <FormRow>
                        <FormControl
                            type="text"
                            placeholder="email"
                            label={"email"}
                            name="email"
                            onChange={handleChange}
                            value={get(values, "email", "")}
                            width="50"
                        />
                        <FormControl
                            type="date"
                            placeholder="birthday"
                            label={"birthday"}
                            name="birthday"
                            onChange={handleChange}
                            value={get(values, "birthday", "")}
                            width="50"
                        />
                    </FormRow>

                    <FormBtn text="add" icon={<IoAddSharp />} />
                </Form>
            </div>
        </section>
    );
};

export default Page;
