import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
function RegisterPage() {
  return (
    <AuthLayouts>
      <FormRegister title="Register" />
    </AuthLayouts>
  );
}
export default RegisterPage;
