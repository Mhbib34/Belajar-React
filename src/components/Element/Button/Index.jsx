import Button from "./Button";
function IndexButton() {
  return (
    <div className="flex justify-around items-center ">
      <Button text="Submit" type="submit" />
      <Button text="Hapus" />
    </div>
  );
}
export default IndexButton;
