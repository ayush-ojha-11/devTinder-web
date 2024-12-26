import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, about, gender, age, skills } = user;
  return (
    <div className="card bg-base-300 w-96 shadow-xl rounded-lg overflow-hidden">
      <figure className="h-75 w-full overflow-hidden">
        <img
          src={photoUrl}
          alt="User image"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{age + " , " + gender}</p>
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary">Pass</button>
          <button className="btn btn-secondary">Like</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
