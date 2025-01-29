import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
function LoginPage() {
  return (
    <AuthLayouts>
      <FormLogin title="Login" />
    </AuthLayouts>
  );
}
export default LoginPage;
