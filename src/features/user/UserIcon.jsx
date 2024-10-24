import Button from "../../ui/Button";

function UserIcon({ style }) {
  return (
    <div className={style ? style : ""}>
      <Button>
        <img src="./icons/user-circle.svg" alt="User icon" />
      </Button>
    </div>
  );
}

export default UserIcon;
