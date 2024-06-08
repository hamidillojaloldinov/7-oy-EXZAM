import { useNavigation } from "react-router-dom";
function SubmitBtn({ text }) {
  const navigate = useNavigation();

  const isSubmitting = navigate.state === "submitting";
  return (
    <button
      className="btn w-full text-white hover:bg-orange-300 w-40 h-12 bg-orange-500 border-none"
      type="submit"
      disable={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>
          sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
}
export default SubmitBtn;
