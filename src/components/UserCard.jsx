const UserCard = ({user}) => {

  const {firstName, lastName, photoUrl, age, about,gender, skills} = user
  // console.log(users)
  
 
  
  return ( 
    (<div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img
          src={photoUrl}
          alt={firstName + "profile photo"}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender &&  <p> {age},  {gender} </p>}
        {skills && <p className="font-semibold">Skills: {skills}</p>}
        <p> {about} </p>
        <div className="card-actions justify-center gap-[10px] my-4">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>)
  );
};


export default UserCard