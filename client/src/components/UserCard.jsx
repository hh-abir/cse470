import React from "react";
import { Link } from "react-router-dom";
import { NoProfile } from "../assets";

const UserCard = ({ user }) => {
  return (
    <Link
      to={`/profile/${user?._id}`}
      className="flex items-center gap-4 p-3 bg-primary rounded-lg shadow hover:shadow-md transition"
    >
      <img
        src={user?.profileUrl ?? NoProfile}
        alt={user?.firstName}
        className="w-12 h-12 object-cover rounded-full"
      />
      <div>
        <p className="text-base font-semibold text-ascent-1">
          {user?.firstName} {user?.lastName}
        </p>
        <span className="text-sm text-ascent-2">
          {user?.profession ?? "No Profession"}
        </span>
      </div>
    </Link>
  );
};

export default UserCard;
