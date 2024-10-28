import { Link } from "react-router-dom";

function UserIcon({ style }) {
  return (
    <div className={style ? style : ""}>
      <Link to="/login">
        <img src="./icons/user-circle.svg" alt="User icon" />
      </Link>
    </div>
  );
}

export default UserIcon;
