import { initialProfile } from "@/lib/initial-profile";

const SetUpPage = async () => {
  const profile = await initialProfile();

  return <div>Create a Server</div>;
};

export default SetUpPage;
