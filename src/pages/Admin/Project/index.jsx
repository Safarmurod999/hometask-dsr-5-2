import React, { useCallback, useState } from "react";
import useConnect from "./connect";
import { IoAddSharp } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router";
import Breadcrumb from "components/ui/Breadcrumb/Breadcrumb";
import Pagination from "components/ui/Pagination/Pagination";
import { CiEdit } from "react-icons/ci";
import UserModal from "../../../components/ui/Modal/Modal";
const Users = () => {
    const {
        users,
        handleDelete,
        handleChange,
        handleSubmit,
        showModal,
        setShowModal,
        setSelectedUser,
        setDisplayedUsers,
        displayedUsers,
        values
    } = useConnect();

    const handlePageChange = useCallback((paginatedData) => {
        setDisplayedUsers(paginatedData);
    }, []);

    return (
        <section className="users">
            <div className="admin-container">
                <Breadcrumb title="Proyektlar" />
                <div className="data-table-container">
                    <div className="table-search">
                        <div className="flex">
                            <Link
                                to={"/admin/users/create"}
                                className="form-button flex items-center text-white"
                            >
                                <IoAddSharp />
                                <span>add</span>
                            </Link>
                        </div>
                    </div>

                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>№</th>
                                    <th>Username</th>
                                    <th>Sex</th>
                                    <th>Address</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Birthday</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.loading ? (
                                    <tr>
                                        <td colSpan={5}>
                                            <p className="loader"> Loading...</p>
                                        </td>
                                    </tr>
                                ) : users && users.usersList?.length ? (
                                    displayedUsers.map((user, index) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.sex}</td>
                                            <td>{user.address}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.birthday}</td>
                                            <td>
                                                <div className="table-actions">
                                                    <button onClick={() => { setShowModal(true); setSelectedUser(user) }} className="action-btn">
                                                        <CiEdit />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(users.id)}
                                                        className="action-btn"
                                                    >
                                                        <MdDeleteOutline />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr className="no-data">
                                        <td colSpan={8}>
                                            <p className="text-center">No data found</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <UserModal
                        isOpen={showModal}
                        onClose={() => setShowModal(false)}
                        values={values}
                        handleChange={handleChange}
                        handleSubmit={(e) => {
                            handleSubmit(e);
                            setShowModal(false);
                        }}
                    />
                    <Pagination
                        data={users?.usersList}
                        onPageChange={handlePageChange}
                        itemsPerPage={10}
                    />
                </div>
            </div>
        </section>
    );
};

export default Users;
