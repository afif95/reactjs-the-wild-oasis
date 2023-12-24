import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    // onSuccess: (user) => {
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please check email for verification."
      );
    },
  });

  return { signup, isLoading };
}
